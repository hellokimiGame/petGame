class petDestroy extends ui.chongwuguanli.chongwuxiaohuiUI {
    private Event = laya.events.Event;
    private uid: any = null;
    private petdata: any = null;

    constructor(data: any) {
        super();
        this.petdata = data;
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.btnOK.on(this.Event.CLICK, this, this.onOK);
        this.btnCancel.on(this.Event.CLICK, this, this.onCancel);
        this.x=200;
        this.y=400;
    }
    private onCancel():void{
        this.removeSelf();
    }
    private onOK(): void {
        var pets: Array<any> = null;
        pets = DataCenter.getInstance().getPetInfo();
        var size: number = 0;
        size = pets.length;
        var tempdata: any = null;
        for (var i: number = 0; i < size; i++) {
            if (pets[i].id == this.petdata.id) {
                tempdata = pets[i];
                break;
            }
        }
        if (tempdata.status != 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物非正常状态无法销毁!");
            return;
        }
        var data1 = { e: GameRoute.EVENT_DESTROY, uid: this.uid, pid: this.petdata.id }
        ConnUitls.getInstance().sendReq(data1, this, this.onPetDestroy);
        this.removeSelf();
    }

    private onPetDestroy(data: any): void {
        var pets: Array <any>= null;
        pets = DataCenter.getInstance().getPetInfo();
        var size: number = 0;
        size=pets.length;
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "销毁成功!");
            Laya.stage.event(GameEvents.DESTROY_INFO_EVENT, this.petdata.id);
            for (var i= 0;i<size; i++){
                if (pets[i].id == this.petdata.id){
                    pets.splice(i, 1);
                    break;
                }
                this.removeSelf();
                ScreenManager.getInstance().closeView(ScreenType.PETDETAIL_VIEW);

            }
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在!");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物不存在!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物非正常状态无法销毁!");
        }

    }
}