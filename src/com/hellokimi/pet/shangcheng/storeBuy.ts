import shangchenggoumaiUI = ui.shangcheng.shangchenggoumaiUI;

class storeBuy extends shangchenggoumaiUI {
    private Event = laya.events.Event;
    private data: any;
    public WID: number = 500;
    public HEI: number = 640;
    private propNum: number = 1;
    private gold: number = 1000;
    private uid: string = null;

    private price: number = 0;

    constructor(data: any) {

        super();
        this.data = data;
        this.price = data.price;
        this.x = (Laya.stage.width - this.WID) / 2;
        this.y = (Laya.stage.height - this.HEI) / 2;
        this.lblNumber.text = "1";
        this.lblPrice.text = data.price;
        this.imgTool.skin = data.url;
        this.lblToolDesc.text = data.desc;
        this.lblToolName.text = data.name;
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.btnOK.on(this.Event.CLICK, this, this.onBuy);
        this.btnAdd1.on(this.Event.CLICK, this, this.onAdd1);
        this.btnAdd10.on(this.Event.CLICK, this, this.onAdd10);
        this.btnReduce1.on(this.Event.CLICK, this, this.onReduce1);
        this.btnReduce10.on(this.Event.CLICK, this, this.onReduce10);
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
    }


    private onClose(): void {
        this.removeSelf();

    }

    private onBuy(): void {
        var price: number = 0;
        price = parseInt(this.lblPrice.text);
        if (this.gold < price) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的余额不足！");
            return;
        }

        var data = { e: GameRoute.EVENT_BUY, uid: this.uid, pid: this.data.id, num: this.propNum };
        ConnUitls.getInstance().sendReq(data, this, this.buyHandler);
    }
    private buyHandler(data: any): void {
        if (data.c == 0) {
            var bags: Array<any>;
            bags = DataCenter.getInstance().getBagInfo();
            var length: number = bags.length;
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "购买成功！");
            DataCenter.getInstance().setXkcInfo(data.xkc);
            for (var i = 0; i < length; i++) {
                if (bags[i].id == data.pid) {
                    bags[i].n = data.n;
                }
            }
            this.onClose();
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在！");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "道具编号不能为空!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "道具数量错误!");
        }
        if (data.c == 4) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "道具不存在");
        }
        if (data.c == 5) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "金额不足");
        }

    }
    private onAdd1(): void {
        this.propNum += 1;
        if (this.propNum >= 99) {
            this.propNum = 99;
        }
        this.lblNumber.text = this.propNum + "";
        this.lblPrice.text = this.price * this.propNum + "";
    }
    private onAdd10(): void {
        this.propNum += 10;
        if (this.propNum >= 99) {
            this.propNum = 99;
        }
        this.lblNumber.text = this.propNum + "";
        this.lblPrice.text = this.price * this.propNum + "";
    }
    private onReduce1(): void {
        this.propNum -= 1;
        this.lblNumber.text = this.propNum + "";
        this.lblPrice.text = this.price * this.propNum + "";
        if (this.propNum < 1) {
            this.propNum = 1;
        }
    }
    private onReduce10(): void {
        this.propNum -= 10;
        if (this.propNum < 1) {
            this.propNum = 1;
        }
        this.lblNumber.text = this.propNum + "";
        this.lblPrice.text = this.price * this.propNum + "";

    }

}