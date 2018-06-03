/*
* name;
*/
class advanture extends ui.zhuye.maoxianUI{
    private Event = laya.events.Event;
    
    constructor(){
        super();
        var i:number=0;
        this.imgTool.skin="res/share/daoju1.png";
        this.btnClose.on(this.Event.CLICK,this,this.onClose);
        this.btnOK.on(this.Event.CLICK,this,this.onOK);
        this.x=20;
        this.y=200;
         this.lblSearching.visible=true;
        this.lblGet.visible=false;
        Laya.timer.once(2000,this,this.onVisible);
        
    }
    private onVisible():void{
        this.lblSearching.visible=false;
        this.lblGet.visible=true;
    }
    private onClose():void{
        this.removeSelf();
    }
    private onOK():void{
        this.removeSelf();
    }
}