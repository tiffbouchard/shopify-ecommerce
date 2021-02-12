import { ResizeObserverBoxOptions } from '../ResizeObserverBoxOptions';
import { ResizeObserverSize } from '../ResizeObserverSize';
import { DOMRectReadOnly } from '../DOMRectReadOnly';
interface ResizeObserverSizeCollection {
    devicePixelContentBoxSize: ResizeObserverSize;
    borderBoxSize: ResizeObserverSize;
    contentBoxSize: ResizeObserverSize;
    contentRect: DOMRectReadOnly;
}
declare const cache: Map<any, any>;
declare const calculateBoxSizes: (target: Element) => ResizeObserverSizeCollection;
declare const calculateBoxSize: (target: Element, observedBox: ResizeObserverBoxOptions) => ResizeObserverSize;
export { calculateBoxSize, calculateBoxSizes, cache };
