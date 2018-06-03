class PetDetail extends ui.chongwuguanli.chongwuxiangxiUI {
    private Event = laya.events.Event;

    public WID: number = 650;
    public HEI: number = 900;
    private propNum: number = 1;
    private isSelling: number = 0;
    private pc1: PetCreate;
    private petData1: any;
    private uid: string = null;
    constructor(data: any) {
        super();
        this.petData1 = data;
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.pc1 = new PetCreate();
        this.pc1.init(data);
        this.addChild(this.pc1);
        this.pc1.visible = true;
        this.pc1.size(50, 50);
        this.tiPetName.text = data.nick;
        this.x = (Laya.stage.width - this.WID) / 2;
        this.y = (Laya.stage.height - this.HEI) / 2;
        this.pc1.x = 40;
        this.pc1.y = 150;
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.btnDestroy.on(this.Event.CLICK, this, this.onDestroy);
        this.btnModify.on(this.Event.CLICK, this, this.onModify);
        this.lblSelling.visible = false;
        this.bgSelling.visible = false;

        if (data.isM == 1) {
            this.bgMainPet.visible = true;
            this.lblMainPet.visible = true;
        }
        else if (data.isM == 0) {
            this.bgMainPet.visible = false;
            this.lblMainPet.visible = false;
        }

        if (data.status == 0) {
            this.btnSell.on(this.Event.CLICK, this, this.onSell);
            this.btnSell.label = "出售";
            this.lblSelling.visible = false;
            this.bgSelling.visible = false;
        } else if (data.status == 1) {
            this.btnSell.label = "撤销出售";
            this.lblSelling.visible = true;
            this.bgSelling.visible = true;
            this.btnSell.on(this.Event.CLICK, this, this.onCancelSellPet);
        }
        if (data.isM == 1) {
            this.btnMainPet.on(this.Event.CLICK, this, this.onRevokeMainPet);
            this.btnMainPet.label = "撤销主宠物";
            this.lblMainPet.visible = true;
            this.bgMainPet.visible = true;
        }
        if (data.isM == 0) {
            this.btnMainPet.on(this.Event.CLICK, this, this.onSetMainPet);
            this.btnMainPet.label = "主宠物";
            this.lblMainPet.visible = false;
            this.bgMainPet.visible = false;
        }
    }
    //设置宠物昵称
    private onModify(): void {
        var data = { e: GameRoute.EVENT_SETPETNICK, uid: this.uid, pid: this.petData1.id, nick: this.tiPetName.text };
        ConnUitls.getInstance().sendReq(data, this, this.setPetNickHandler);
    }
    //设置宠物昵称回调
    private setPetNickHandler(data: any): void {
        var pets: any = null;
        pets = DataCenter.getInstance().getPetInfo();
        var length: number = 0;
        length = pets.length;
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "设置成功");
            var data1:any={};
            data1.id=this.petData1.id;
            data1.nick=data.nk;
            Laya.stage.event(GameEvents.SETPETNICK_INFO_EVENT, data1)
            for (var i = 0; i < length; i++) {
                if (pets[i].id == this.petData1.id)
                    pets[i].nick = data.nk;
            }
            if (data.c == 1) {
                ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在");
            }
            if (data.c == 2) {
                ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物昵称不符合规范");
            }
            if (data.c == 3) {
                ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物不存在");

            }
        }
    }

    //撤销主宠物
    private onRevokeMainPet(): void {
        var data = { e: GameRoute.EVENT_REVOKEMAINPET, uid: this.uid, pid: this.petData1.id };
        ConnUitls.getInstance().sendReq(data, this, this.RevokeMainPetHandler);
    }
    //撤销主宠物回调
    private RevokeMainPetHandler(data: any): void {
        var pets: any = null;
        pets = DataCenter.getInstance().getPetInfo();
        var length: number = 0;
        length = pets.length;
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "撤销成功");
            this.btnMainPet.label = "主宠物";
            this.btnMainPet.off(this.Event.CLICK, this, this.onRevokeMainPet);
            this.btnMainPet.on(this.Event.CLICK, this, this.onSetMainPet);
            Laya.stage.event(GameEvents.REVOKEMAINPET_INFO_EVENT, this.petData1.id);
            for (var i = 0; i < length; i++) {
                if (pets[i].id == this.petData1.id)
                    pets[i].isM = 0;
                break;
            }
            this.lblMainPet.visible = false;
            this.bgMainPet.visible = false;
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "该宠物不是主宠物");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物不存在");
        }

    }
    //设置主宠物
    private onSetMainPet(): void {
        var data = { e: GameRoute.EVENT_SETMAINPET, uid: this.uid, pid: this.petData1.id };
        ConnUitls.getInstance().sendReq(data, this, this.SetMainPetHandler);
    }
    //设置主宠物回调
    private SetMainPetHandler(data: any): void {
        var pets: any = null;
        pets = DataCenter.getInstance().getPetInfo();
        var length: number = 0;
        length = pets.length;
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "设置成功");
            this.btnMainPet.label = "撤销主宠物";
            this.btnMainPet.off(this.Event.CLICK, this, this.onSetMainPet);
            this.btnMainPet.on(this.Event.CLICK, this, this.onRevokeMainPet);
            Laya.stage.event(GameEvents.SETMAINPET_INFO_EVENT, this.petData1.id);
            for (var i = 0; i < length; i++) {
                if (pets[i].id == this.petData1.id)
                    pets[i].isM = 1;
                break;
            }
            this.lblMainPet.visible = true;
            this.bgMainPet.visible = true;
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "已经有主宠物请先撤销");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物不存在");
        }
    }
    private onCancelSellPet(): void {
        if (this.petData1.status == 1) {
            var data = { e: GameRoute.EVENT_CANCELSALEPET, uid: this.uid, pid: this.petData1.id };
            ConnUitls.getInstance().sendReq(data, this, this.CancelSellPetHandler);
        }



    }
    //撤销出售的接收方法
    private CancelSellPetHandler(data: any): void {
        var pets: any = null;
        pets = DataCenter.getInstance().getPetInfo();
        var length: number = 0;
        length = pets.length;
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "撤销成功！");
            this.btnSell.label = "出售";
            this.bgSelling.visible = false;
            this.lblSelling.visible = false;
            this.btnSell.off(this.Event.CLICK, this, this.onCancelSellPet);
            this.btnSell.on(this.Event.CLICK, this, this.onSell);
            Laya.stage.event(GameEvents.PET_CANCELSELL_EVENT, this.petData1.id);
            for (var i = 0; i < length; i++) {
                if (pets[i].id == data.pid) {
                    pets[i].status = data.s;
                    break;
                }
            }
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户编号错误!");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物编号错误!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物不存在!");
        }



    }
    //出售方法
    private onSell(): void {
        if (this.petData1.food < 100) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "饱食度未满不能出售！");
            return;
        }
        if (this.petData1.healthy < 100) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "健康度未满不能出售！");
            return;
        }
        if (this.petData1.status != 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "状态异常不能出售！");
            return;
        }

        ScreenManager.getInstance().showMainScreen(ScreenType.PETSELL_VIEW, this.petData1);
        this.isSelling = 1;
        // this.isSelling = 0;
        // this.btnSell.label = "出售";
        // this.lblSelling.visible = false;


        this.removeSelf();
    }
    private onDestroy(data: any): void {
        ScreenManager.getInstance().showMainScreen(ScreenType.PET_DESTROY, this.petData1);
    }
    private onClose(): void {
        this.removeSelf();
    }
}

