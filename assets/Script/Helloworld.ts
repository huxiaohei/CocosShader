/*================================================================
 * Description 
 * Email huliuworld@yahoo.com
 * Created on Sun Aug 30 2020 09:46:52
 * Copyright (c) 2020 刘虎
================================================================*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShaderScene extends cc.Component {

    protected start () {
        cc.dynamicAtlasManager.enabled = false;
    }

    protected update(dt: number) {
        
    }
}
