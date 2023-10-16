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

    resize(size) {
        let w = size.width < 1 ? 1 : size.width;
        let h = size.height < 1 ? 1 : size.height;

        let limit_h = this.screenSize.height - this.position.y;
        let limit_w = this.screenSize.width - this.position.x;

        w = Math.min(limit_w, w);
        h = Math.min(limit_h, h);

        this.size.resize(w, h);
    }

    move(position) {
        let x = Math.max(0, position.x);
        let y = Math.max(0, position.y);

        let limit_x = this.screenSize.width - this.size.width;
        let limit_y = this.screenSize.height - this.size.height;

        x = Math.min(x, limit_x);
        y = Math.min(y, limit_y);

        this.position.move(x, y);
    }

}

export function changeWindow(p_window) {
    p_window.move(new Position(100, 150));
    p_window.resize(new Size(400, 300));
    return p_window;
}
