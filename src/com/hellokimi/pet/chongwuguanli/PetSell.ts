/*
* name;
*/
class PetSell extends ui.chongwuguanli.chongwuchushouUI {
    private Event = laya.events.Event;
    public WID: number = 550;
    public HEI: number = 700;
    private pc2: PetCreate;
    private uid: string = null;
    private data: any;
    constructor(data: any) {
        super();


        this.data = data;
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.x = (Laya.stage.width - this.WID) / 2;
        this.y = (Laya.stage.height - this.HEI) / 2;
        this.pc2 = new PetCreate();
        this.pc2.init(data);
        this.addChild(this.pc2);
        this.pc2.visible = true;
        this.pc2.visible = true;
        this.pc2.size(40, 40);
        this.pc2.scale(0.7, 0.7);
        this.pc2.x = 50;
        this.pc2.y = 50;

        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.btnSell.on(this.Event.CLICK, this, this.onSell);
    }
    private onClose(): void {
        this.removeSelf();
    }
    private onSell(): void {
        if (this.tiPrice.text == "") {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "请输入价格！");
        }
        var data = { e: GameRoute.EVENT_SALEINFO, uid: this.uid, pid: this.data.id, price: this.tiPrice.text };
        ConnUitls.getInstance().sendReq(data, this, this.saleHandler);

    }
    private saleHandler(data: any): void {

        if (data.c == 0) {
            var pets: any = null;
            pets = DataCenter.getInstance().getPetInfo();
            var length: number = 0;
            var tempPet:any=null;
            length = pets.length;
            for(var i:number=0;i<length;i++){
                tempPet=pets[i];
                if(tempPet.id==data.pid){
                    tempPet.status=1;
                    tempPet=null;
                    break;
                }
                tempPet=null;
            }
            Laya.stage.event(GameEvents.PET_SELL_EVENT, this.data.id);
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "上架成功！");
            this.removeSelf();
            this.removeChild
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在!");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物编号不正确!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "价格格式错误!");
        }
        if (data.c == 4) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物不存在!");
        }
        if (data.c == 5) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物状态不能出售!");
        }
        if (data.c == 6) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "饱食度没有满不能出售!");
        }
        if (data.c == 7) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "健康度没有满不能出售!");
        }
        for (var i = 0; i < length; i++) {
            if (pets[i].id == data.id) {
                pets[i].status = data.s;
            }
        }

    }


}