/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text)
      .then(res => {
        return res.translation; 
      });
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }
    const promises = texts.map(text => { 
      return this.api.fetch(text).then(({ translation }) => translation)
    });

    return Promise.all(promises);
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    // 定義一個內部的遞迴函式，用來紀錄目前的嘗試次數
    const attemptRequest = (currentAttempt) => {
      return new Promise((resolve, reject) => {
        
        // 呼叫古老的 api.request，手動傳入第二個參數（Callback 函式）
        this.api.request(text, (error) => {
          
          // 情況 1：沒有錯誤，代表請求成功
          if (!error) {
            return resolve(); // 成功放行，外部會拿到 undefined
          }

          // 情況 2：發生錯誤，檢查是不是還有重試機會（最多 3 次，所以小於 3 就能繼續）
          if (currentAttempt < 3) {
            // 把「下一輪重試的 Promise」傳下去
            return attemptRequest(currentAttempt + 1)
              .then(resolve)
              .catch(reject);
          }

          // 情況 3：次數用盡（已經是第 3 次失敗了），丟出最後一次的錯誤
          return reject(error);
        });

      });
    };

    // 從第 1 次開始
    return attemptRequest(1);
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  async premium(text, minimumQuality) {
    try {
      const result = await this.api.fetch(text);
      
      if (result.quality < minimumQuality) {
        throw new QualityThresholdNotMet(text);
      }
      return result.translation;

    } catch (error) {
      if (error instanceof QualityThresholdNotMet) {
        throw error;
      }

      await this.request(text);
      
      const retryResult = await this.api.fetch(text);
      
      if (retryResult.quality < minimumQuality) {
        throw new QualityThresholdNotMet(text);
      }
      
      return retryResult.translation;
    }
  }

}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
