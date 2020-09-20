/*================================================================
 * Description 旋转
 * Email huliuworld@yahoo.com
 * Created on Sun Sep 20 2020 20:21:43
 * Copyright (c) 2020 刘虎
================================================================*/

import Effect from "./Effect";

const { ccclass, property, executeInEditMode } = cc._decorator;

enum DirectionEnum {
    X = 1,
    Y = 2,
    Z = 3
}

@ccclass
@executeInEditMode
export default class Rotation extends Effect {

    public readonly TAG: string = "Rotation";
    @property(cc.Float)
    interval: number = 1.0;
    @property({ type: cc.Enum(DirectionEnum) })
    direction: DirectionEnum = DirectionEnum.Z;
    private runTime: number = 0;
    private anglePerSecond: number = 0;

    protected setConstProperty(material: cc.Material) {
        if (!cc.isValid(material)) return;
        let sp = this.node.getComponent(cc.Sprite);
        let materials = sp.getMaterials();
        for (let i = 0; i < materials.length; i++) {
            let material = materials[i];
            if (material.name.indexOf(this.effect.name) !== 0) continue;
            if (this.interval < 0) this.interval = 1.0;
            this.anglePerSecond = 2 * Math.PI / this.interval;
            material.setProperty("runTime", this.runTime);
            material.setProperty("interval", this.interval);
            material.setProperty("anglePerSecond", this.anglePerSecond);
            material.setProperty("rotationDirection", this.direction);
            break;
        }
    }

    protected update(dt: number) {
        let sp = this.node.getComponent(cc.Sprite);
        if (!cc.isValid(sp)) return;
        this.runTime += dt;
        let materials = sp.getMaterials();
        for (let i = 0; i < materials.length; i++) {
            let material = materials[i];
            if (material.name.indexOf(this.effect.name) !== 0) continue;
            material.setProperty("runTime", this.runTime);
            break;
        }
    }


}