import { scheduler, updateCount } from './utils/scheduler';
import { ResizeObservation } from './ResizeObservation';
import { ResizeObserverDetail } from './ResizeObserverDetail';
import { resizeObservers } from './utils/resizeObservers';
var observerMap = new Map();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        resizeObservers.push(detail);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        if (observerMap.has(resizeObserver)) {
            var detail = observerMap.get(resizeObserver);
            if (getObservationIndex(detail.observationTargets, target) < 0) {
                detail.observationTargets.push(new ResizeObservation(target, options && options.box));
                updateCount(1);
                scheduler.schedule();
            }
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        if (observerMap.has(resizeObserver)) {
            var detail = observerMap.get(resizeObserver);
            var index = getObservationIndex(detail.observationTargets, target);
            if (index >= 0) {
                detail.observationTargets.splice(index, 1);
                updateCount(-1);
            }
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        if (observerMap.has(resizeObserver)) {
            var detail = observerMap.get(resizeObserver);
            resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            observerMap.delete(resizeObserver);
            updateCount(-detail.observationTargets.length);
        }
    };
    return ResizeObserverController;
}());
export { ResizeObserverController };
