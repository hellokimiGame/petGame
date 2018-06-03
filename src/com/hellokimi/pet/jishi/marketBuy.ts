/*
* name;
*/
class marketBuy extends ui.jishi.jishigoumaiUI {
    private Event = laya.events.Event;
    public WID: number = 500;
    public HEI: number = 640;
    private propNum: number = 1;
    private userMoney: number = 200;
    private pc1: PetCreate;
    private uid: string = null;
    private id: number = 0;
    constructor(data: any) {
        super();
        this.id = data.id;
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.x = (Laya.stage.width - this.WID) / 2;
        this.y = (Laya.stage.height - this.HEI) / 2;
        this.lblPrice.text = data.price;
        this.imgPet.skin = data.url;
        this.pc1 = new PetCreate();
        this.pc1.init(data);
        this.addChild(this.pc1);
        this.pc1.visible = true;
        this.pc1.x = 120;
        this.pc1.y = 150;
        this.pc1.scale(0.5, 0.5);
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.btnOK.on(this.Event.CLICK, this, this.onOK);
    }


    private onClose(): void {
        this.removeSelf();
    }
    private onOK(): void {
        var data1 = { e: GameRoute.EVENT_BUYPET, uid: this.uid, id: this.id }
        ConnUitls.getInstance().sendReq(data1, this, this.onBuyPetHandler);

    }
    private onBuyPetHandler(data: any): void {
        var petInfo: Array<any> = null;
        petInfo = DataCenter.getInstance().getPetInfo();
        var xkc: any = null;
        xkc = DataCenter.getInstance().getXkcInfo();
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "购买成功！");
            petInfo.push(data.pet);
            Laya.stage.event(GameEvents.BUY_INFO_EVENT, data.pet.id);
            Laya.stage.event(GameEvents.FLASH_INFO_EVENT, data.pet);
            xkc -= parseInt(this.lblPrice.text);
            this.removeSelf();

        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户编号错误!");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物编号错误!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, );
        }
        if (data.c == 4) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在!");
        }
        if (data.c == 4) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在!");
        }
        if (data.c == 5) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "xkc币不足!");
        }
        if (data.c == 6) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "销售玩家不存在!");
        }
    }



}
