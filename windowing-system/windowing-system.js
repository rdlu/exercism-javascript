// @ts-check
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

    limit(value, min, max) {
       return Math.min(Math.max(value, min), max);
    }

    resize(size) {
        let w = this.limit(size.width, 1, this.screenSize.width - this.position.x);
        let h = this.limit(size.height, 1, this.screenSize.height - this.position.y);

        this.size.resize(w, h);
    }

    move(position) {
        let x = this.limit(position.x, 0, this.screenSize.width - this.size.width);
        let y = this.limit(position.y, 0, this.screenSize.height - this.size.height);

        this.position.move(x, y);
    }

}

export function changeWindow(p_window) {
    p_window.move(new Position(100, 150));
    p_window.resize(new Size(400, 300));
    return p_window;
}
