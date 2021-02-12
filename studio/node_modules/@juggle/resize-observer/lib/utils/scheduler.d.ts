declare class Scheduler {
    private observer;
    private listener;
    stopped: boolean;
    constructor();
    run(frames: number): void;
    schedule(): void;
    private observe;
    start(): void;
    stop(): void;
}
declare const scheduler: Scheduler;
declare const updateCount: (n: number) => void;
export { scheduler, updateCount };
