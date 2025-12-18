// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const wedgesMap = { 'small': 6, 'medium': 8, 'large': 10 };
  let limesCutCount = 0;
  let wedgesCount = 0;
  while (wedgesCount < wedgesNeeded && limesCutCount < limes.length) {
    wedgesCount += wedgesMap[limes[limesCutCount]];
    limesCutCount++;
  }
  return limesCutCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // 法1: 累加時間，直到總時間超過 timeLeft。
  // let totalTime = 0;
  // do {
  //   const currentItem = orders.shift();
  //   totalTime += timeToMixJuice(currentItem);
  //   // 必須額外檢查 orders.length > 0，否則訂單做完後會停不下來
  // } while (totalTime < timeLeft && orders.length > 0); 
  // return orders;

  // 法2: 扣除時間，直到剩餘時間歸零。
  while (timeLeft > 0 && orders.length !== 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
