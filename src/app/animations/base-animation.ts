export abstract class BaseAnimation {
    private app : PIXI.Application;
    private ticker : PIXI.Ticker;

    abstract animate() : void;
    abstract setup() : void;

    setApp(app: PIXI.Application) : void {
        this.app = app;
    }

    getApp() : PIXI.Application {
        return this.app;
    }

    setTicker(ticker : PIXI.Ticker) {
        this.ticker = ticker;
    }

    getTicker() : PIXI.Ticker {
        return this.ticker;
    }

    hasTicker() : boolean {
        return this.ticker != null;
    }

    start() : void {
        this.app.ticker.start();
    }

    stop() : void {
        this.app.ticker.stop();
    }

    addToStage(element : any) {
        console.log(this.app);
        this.app.stage.addChild(element);
    }
}