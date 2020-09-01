/*================================================================
 * Description 
 * Email huliuworld@yahoo.com
 * Created on Sun Aug 30 2020 09:46:52
 * Copyright (c) 2020 刘虎
================================================================*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShaderScene extends cc.Component {

    @property(cc.Prefab)
    prefabs: cc.Prefab[] = [];
    @property({type: cc.Integer, range: [0, 100, 1]})
    index: number = 0;
    prefabNode: cc.Node = null;

    protected start () {
        cc.dynamicAtlasManager.enabled = false;
        this.updatePrefab(this.index);
    }

    private updatePrefab(index: number) {
        if (cc.isValid(this.prefabNode)) {
            this.prefabNode.destroy();
            this.prefabNode = null;
        }
        this.prefabNode = cc.instantiate(this.prefabs[index]);
        this.node.addChild(this.prefabNode);
    }

    protected nextBtnClicked() {
        if (++this.index >= this.prefabs.length) {
            this.index = 0;
        }
        this.updatePrefab(this.index);
    }

    protected preBtnClicked() {
        if (--this.index < 0) {
            this.index = this.prefabs.length - 1;
        }
        this.updatePrefab(this.index);
    }
}
