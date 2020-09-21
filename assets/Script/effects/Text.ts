/*================================================================
 * Description 文字
 * Email huliuworld@yahoo.com
 * Created on Sun Sep 20 2020 22:53:50
 * Copyright (c) 2020 刘虎
================================================================*/

import Effect from "./Effect";

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class Text extends Effect {

    @property({ tooltip: "描边" })
    outline: boolean = true;
    @property({ type: cc.color, tooltip: "描边颜色" })
    outlineColor = null;
    @property({ type: cc.Float, tooltip: "描边宽度(像素)" })
    width = 0.0;
    @property({ tooltip: "颜色渐变" })
    colorGradient: boolean = true;
    @property({ type: cc.color, tooltip: "渐变起始颜色" })
    startColor = null;
    @property({ type: cc.color, tooltip: "渐变终止颜色" })
    endColor = null;


    protected setConstProperty(material: cc.Material) {
        if (!cc.isValid(material)) return;
        let sp = this.node.getComponent(cc.Label);
        let materials = sp.getMaterials();
        for (let i = 0; i < materials.length; i++) {
            let material = materials[i];
            if (material.name.indexOf(this.effect.name) !== 0) continue;
            material.setProperty("outline", this.outline ? 1 : 0);
            material.setProperty("outlineColor", new Float32Array(4));
            material.setProperty("outlineColor", this.colorToNumArr(this.outlineColor));
            let size = this.node.getContentSize();
            let outlinStep = [this.width / size.width / 5.0, this.width / size.height / 5.0];
            material.setProperty("outlinStep", new Float32Array(2));
            material.setProperty("outlinStep", outlinStep)
            material.setProperty("colorGradient", this.colorGradient ? 1 : 0);
            material.setProperty("startColor", new Float32Array(4));
            material.setProperty("startColor", this.colorToNumArr(this.startColor));
            material.setProperty("endColor", new Float32Array(4));
            material.setProperty("endColor", this.colorToNumArr(this.endColor));
            break;
        }
    }
}
