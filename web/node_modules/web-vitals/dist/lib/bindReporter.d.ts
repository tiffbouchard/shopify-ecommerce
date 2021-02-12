import { Metric } from '../types.js';
export declare const bindReporter: (callback: Function, metric: Metric, po: PerformanceObserver | undefined, observeAllUpdates?: boolean | undefined) => () => void;
