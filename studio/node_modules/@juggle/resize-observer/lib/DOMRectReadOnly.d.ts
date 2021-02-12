interface Rectangle {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}
declare class DOMRectReadOnly {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly left: number;
    readonly bottom: number;
    readonly right: number;
    constructor(x: number, y: number, width: number, height: number);
    toJSON(): object;
    static fromRect(rectangle: Rectangle): Readonly<DOMRectReadOnly>;
}
export { DOMRectReadOnly };
