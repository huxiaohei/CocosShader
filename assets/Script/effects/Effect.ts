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
        let sp = this.node.getComponent(cc.Sprite);
        if (!cc.isValid(sp) || !cc.isValid(this.effect)) return;
        let material = cc.Material.create(this.effect, 0);
        material.name = this.effect.name;
        sp.setMaterial(0, material);
        this.setConstProperty(material);
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
