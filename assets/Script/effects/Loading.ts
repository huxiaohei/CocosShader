// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Effect from "./Effect";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Loading extends Effect {

    public readonly TAG: string = "Loading";
    @property(cc.Float)
    interval: number = 1.0;
    @property({type: Boolean})
    repeat: boolean = true;
    private runTime: number = 0;
    private anglePerSecond: number = 0;

    protected setConstProperty(material: cc.Material) {
        if (cc.isValid(material)) {
            return;
        }
        let sp = this.node.getComponent(cc.Sprite);
        let materials = sp.getMaterials();
        for (let i = 0; i < materials.length; i++) {
            let material = materials[i];
            if (material.name.indexOf(this.effect.name) !== 0) {
                continue;
            }
            if (this.interval < 0) {
                this.interval = 1.0;
            }
            this.anglePerSecond = 2 * Math.PI / this.interval;
            material.setProperty("runTime", this.runTime);
            material.setProperty("interval", this.interval);
            material.setProperty("anglePerSecond", this.anglePerSecond);
            break;
        }
    }

    protected update(dt: number) {
        let sp = this.node.getComponent(cc.Sprite);
        if (!cc.isValid(sp)) {
            return;
        }
        if (!this.repeat && this.runTime > this.interval) {
            return;
        }
        this.runTime += dt;
        let materials = sp.getMaterials();
        for (let i = 0; i < materials.length; i++) {
            let material = materials[i];
            if (material.name.indexOf(this.effect.name) !== 0) {
                continue;
            }
            material.setProperty("runTime", this.runTime);
            break;
        }
    }

    
}
