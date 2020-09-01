/*================================================================
 * Description 置灰组件
 * Email huliuworld@yahoo.com
 * Created on Mon Aug 31 2020 23:30:31
 * Copyright (c) 2020 刘虎
================================================================*/

import Effect from "./Effect";

const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class Gray extends Effect { 

    public readonly TAG: string = "Gray";
    @property({type: cc.Float, tooltip: "红色因子", range: [0, 1, 0.0001]})
    rFactor: number = 1.0;
    @property({type: cc.Float, tooltip: "绿色因子", range: [0, 1, 0.0001]})
    gFactor: number = 1.0;
    @property({type: cc.Float, tooltip: "蓝色因子", range: [0, 1, 0.0001]})
    bFactor: number = 1.0;    

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
            material.setProperty("rFactor", this.rFactor);
            material.setProperty("gFactor", this.gFactor);
            material.setProperty("bFactor", this.bFactor);
            break;
        }
    }

    
}