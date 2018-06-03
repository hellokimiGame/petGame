/*
* name;
*/
class personcenter extends ui.gerenzhongxin.gerenzhongxinUI{
    private  Event=laya.events.Event;
    private uid:string=null;
    constructor(data:any){
        super();
        var toAddrInfo:string;
        toAddrInfo=DataCenter.getInstance().getToAddrInfo();
        if(toAddrInfo==null){
            this.btnBinding.visible=true;
            this.lblBinding.visible=true;
            Laya.stage.on(GameEvents.ADDR_INFO_EVENT,this,this.onAddrHandler);
        }else {
            this.btnBinding.visible=false;
            this.lblBinding.visible=false;
        }
        this.btnDetail.on(this.Event.CLICK,this,this.onPushDetail);
        this.btnClose.on(this.Event.CLICK,this,this.onClose);
        this.btnBinding.on(this.Event.CLICK,this,this.onBinding)
        this.btnIntoXkc.on(this.Event.CLICK,this,this.onOut)
        this.uid=DataCenter.getInstance().getXkcAddressInfo();
        this.lblBalance.text=DataCenter.getInstance().getXkcInfo()+"";
        this.lblAddress.text=DataCenter.getInstance().getXkcAddressInfo();
        

   
    }
    private onOut():void{
        ScreenManager.getInstance().showMainScreen(ScreenType.OUT_VIEW, null);
    }
    private onAddrHandler():void{
        this.btnBinding.visible=false;
        this.lblBinding.visible=false;
        Laya.stage.off(GameEvents.ADDR_INFO_EVENT,this,this.onAddrHandler);
    }

    private onBinding():void{
       ScreenManager.getInstance().showMainScreen(ScreenType.BINDING_VIEW, null);
    }
    private onPushDetail():void{
        var data1 = { e: GameRoute.EVENT_PUSHINFO, uid:this.uid }
		ConnUitls.getInstance().sendReq(data1, this, this.onPushInfo);
        

    }

    private onPushInfo(data:any):void{
        if(data.c==0){
            ScreenManager.getInstance().showMainScreen(ScreenType.PUSHINFO_VIEW, data);
        }
        if(data.c==1){
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在");
        }
    }
    private onClose():void{
            this.removeSelf();
        }
        

       
}