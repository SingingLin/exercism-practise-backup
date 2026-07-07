// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    // 1. 計算最大允許的寬與高（螢幕尺寸減去目前座標位置）
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    // 2. 限制寬度：不能小於 1，且不能大於 maxWidth
    let limitedWidth = Math.max(1, newSize.width);
    limitedWidth = Math.min(limitedWidth, maxWidth);

    // 3. 限制高度：不能小於 1，且不能大於 maxHeight
    let limitedHeight = Math.max(1, newSize.height);
    limitedHeight = Math.min(limitedHeight, maxHeight);

    // 4. 指派給 size 物件
    this.size.width = limitedWidth;
    this.size.height = limitedHeight;
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    let limitedX = Math.max(0, newPosition.x);
    limitedX = Math.min(limitedX, maxX);

    let limitedY = Math.max(0, newPosition.y);
    limitedY = Math.min(limitedY, maxY);

    this.position.x = limitedX;
    this.position.y = limitedY;
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  
  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}


