import * as PIXI from 'pixi.js';

export class PixiUtils {

  static distanceBetweenPoints(point1 : PIXI.Point, point2 : PIXI.Point) {
    return Math.sqrt(Math.pow(point2.x - point1.x,2) + Math.pow(point2.y - point1.y, 2));
  } 
  
  static setupTillingSprite(app: PIXI.Application, asset: string, scale: any, position: any ) : PIXI.TilingSprite{
    let sprite : PIXI.TilingSprite =  PixiUtils.loadTilingSprite(asset, scale.width, scale.height);
    
    this.positionTilingSprite(sprite, position.x, position.y);
    this.addToStage(app, sprite);
    
    return sprite;
  }

  static setupSprite(app: PIXI.Application, asset: string, position: any) : PIXI.Sprite{
    let sprite : PIXI.Sprite = this.loadSprite(asset);

    this.positionSprite(sprite, position.x, position.y);
    this.addToStage(app, sprite);

    return sprite;
  }

  static loadSprite(path: string) : PIXI.Sprite {
    return PIXI.Sprite.from(path);
  }

  static loadTilingSprite(asset: string, width: number, height: number) {
    const texture : PIXI.Texture = PIXI.Texture.from(asset);
    return new PIXI.TilingSprite(texture, width, height)
  }

  static positionSprite(sprite: PIXI.Sprite, x: number, y: number) {
    sprite.anchor.set(0.5);

    sprite.x = x;
    sprite.y = y;
  }

  static positionTilingSprite(sprite: PIXI.TilingSprite, x: number, y: number) {
    sprite.anchor.set(0.5);

    sprite.x = x;
    sprite.y = y;
  }

  static addToStage(app: PIXI.Application, sprite: PIXI.Sprite | PIXI.TilingSprite) {
    app.stage.addChild(sprite);
  }
}