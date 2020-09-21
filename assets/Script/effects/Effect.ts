/*================================================================
 * Description 特效基类
 * Email huliuworld@yahoo.com
 * Created on Sun Aug 30 2020 22:55:07
 * Copyright (c) 2020 刘虎
================================================================*/

const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class Effect extends cc.Component {

    public readonly TAG: string = "Effect";
    @property(cc.EffectAsset)
    effect: cc.EffectAsset = null;

    protected start () {
        this.applyEffect();
    }

    protected applyEffect() {
        if (!cc.isValid(this.effect)) return
        let sp: cc.Sprite | cc.Label = this.node.getComponent(cc.Sprite);
        if (!cc.isValid(sp)) {
            sp = this.node.getComponent(cc.Label);
            if (!cc.isValid(sp)) return;
        }
        let material = cc.Material.create(this.effect, 0);
        material.name = this.effect.name;
        sp.setMaterial(0, material);
        this.setConstProperty(material);
    }

    /**
     * 颜色转数组
     *
     * @protected
     * @param {cc.Color} [color=cc.color(255, 255, 255, 255)]
     * @returns {number[]}
     * @memberof Effect
     */
    protected colorToNumArr(color: cc.Color = cc.color(255, 255, 255, 255)): number[] {
        return [color.r/255.0, color.g/255.0, color.b/255.0, color.a/255.0];
    }

    /**
     * 子类实现
     *
     * @protected
     * @memberof Effect
     */
    protected setConstProperty(material: cc.Material) {

    }

    protected update (dt: number) {

    }
}
