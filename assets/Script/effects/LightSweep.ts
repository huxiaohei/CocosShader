/*================================================================
 * Description 扫光组件
 * Email huliuworld@yahoo.com
 * Created on Sun Aug 30 2020 21:41:28
 * Copyright (c) 2020 刘虎
================================================================*/

import Effect from "./Effect";

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export class LightSweep extends Effect {

    public readonly TAG: string = "LightSweep";
    @property({type: cc.Float, range: [-90, 90, 0.1]})
    angle: number = 0.0;
    @property({type: cc.Float, range: [0, 1, 0.001]})
    widht: number = 0.0;
    @property(cc.Float)
    interval: number = 1.0;
    @property(cc.Float)
    delay: number = 1.0;
    private runTime: number = 0;    

    protected update(dt: number) {
        let sp = this.node.getComponent(cc.Sprite);
        if (!cc.isValid(sp)) {
            return;
        }
        this.runTime += dt;
        let materials = sp.getMaterials();
        for (let i = 0; i < materials.length; i++) {
            let material = materials[i];
            if (material.name.indexOf(this.effect.name) !== 0) {
                continue;
            }
            material.setProperty("angle", this.angle);
            material.setProperty("widht", this.widht);
            material.setProperty("runTime", this.runTime);
            material.setProperty("interval", this.interval);
            material.setProperty("delay", this.delay);
            break;
        }   
    }
}

