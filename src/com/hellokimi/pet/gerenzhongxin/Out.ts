/*
* name;
*/
class Out extends ui.gerenzhongxin.zhuanchuUI {
    private Event = laya.events.Event;
    private uid: string = null;
    private time: number = 300;
    private money: number = 0;
    constructor() {
        super();

        var addr: string = null;
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.btnOK.on(this.Event.CLICK,this,this.onOK);
        this.btnClose.on(this.Event.CLICK,this,this.onClose);
        addr=DataCenter.getInstance().getToAddrInfo();
        if(addr!=null){
             this.lblGetPersonAddr.text=addr;
        }else {
             this.lblGetPersonAddr.text="请先设置提现地址";
        }
       
        this.tiMoney.on(Laya.Event.INPUT,this,this.onInputHandler);
        this.x=20;
        this.y=100;
        this.btnOK.on(this.Event.CLICK,this,this.onOK);
        this.btnClose.on(this.Event.CLICK,this,this.onClose);
        addr=DataCenter.getInstance().getToAddrInfo();
        this.lblGetPersonAddr.text=addr;
        this.tiMoney.on(Laya.Event.INPUT,this,this.onInputHandler);
        this.x=20;
        this.y=100;
        this.btnOK.on(this.Event.CLICK, this, this.onOK);
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        addr = DataCenter.getInstance().getToAddrInfo();
        this.lblGetPersonAddr.text = addr;
        this.tiMoney.on(Laya.Event.INPUT, this, this.onInputHandler);
        this.x = 20;
        this.y = 100;
    }

    private onInputHandler(): void {
        if (this.tiMoney.text.trim().length == 0) {
            this.lblServiceCharge.text = "0";
            return;
        }
        this.money = parseInt(this.tiMoney.text);
        this.lblServiceCharge.text = this.money * 0.01 + "";
    }

    private onClose(): void {
        this.removeSelf();
    }
    //正则校验数字
    private checkNumber(): void {
        var num: string = this.tiMoney.text;
        var reg: RegExp = new RegExp("^[0-9]*$");
        if (reg.test(num)) {
            console.log("ok");
        } else {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您输入的金额不合法");
            return;
        }
    }
    private onOK(): void {

        if (this.tiMoney.text == "" || this.tiMoney.text == null) {
            this.tiMoney.prompt = "提现金额不能为空！"
            return;
        }
        this.checkNumber();
        if (this.money < 1000) {
            return;
        }
        else {
            var data1 = { e: GameRoute.EVENT_TRANSFER, uid: this.uid, mo: this.money }
            ConnUitls.getInstance().sendReq(data1, this, this.OutHandler);
        }

    }
    private OutHandler(data: any): void {
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "提现成功！");
            DataCenter.getInstance().setXkcInfo(data.xkc);
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在!");
        }
        if (data.c == 2) {

            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "金额错误!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "提现金额不足!");
        }
        if (data.c == 4) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "请先设置提现地址!");
        }

    }

}