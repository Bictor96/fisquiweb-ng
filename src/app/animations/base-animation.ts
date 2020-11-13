export abstract class BaseAnimation {
    private app : PIXI.Application;

    abstract animate() : void;
    abstract setup() : void;

    setApp(app: PIXI.Application) : void {
        this.app = app;
    }

    getApp() : PIXI.Application {
        return this.app;
    }

    start() : void {
        this.app.ticker.start();
    }

    stop() : void {
        this.app.ticker.stop();
    }
}