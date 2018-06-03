/*
* name;
*/
class binding extends ui.gerenzhongxin.bangdingUI {
    private Event = laya.events.Event;
    private uid: string = null;
    public time: number = 300;
    constructor() {
        super();
        this.btnOK.on(this.Event.CLICK, this, this.onOK);
        this.btnGetIden.on(this.Event.CLICK, this, this.onGetIdentity);
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.x = 50;
        this.y = 100;
    }

    private onGetIdentity(): void {
        var data1 = { e: GameRoute.EVENT_GETUCODE, uid: this.uid }
        ConnUitls.getInstance().sendReq(data1, this, this.GetUCode);
    }
    private onOK(): void {
        if (this.tiGetAddress.text == "" || this.tiGetAddress.text == null) {
            this.tiGetAddress.prompt = "提现地址不能为空！"
            return;
        }
        if (this.tiIdentity.text == "" || this.tiIdentity.text == null) {
            this.tiIdentity.prompt = "验证码不能为空！"
            return;
        }
        var data1 = { e: GameRoute.EVENT_SETTOADDRINFO, uid: this.uid, addr: this.tiGetAddress.text, code: this.tiIdentity.text }
        ConnUitls.getInstance().sendReq(data1, this, this.SetToAddrInfo);
    }
    private GetUCode(data: any): void {
        if (data.c == 0) {
            Laya.timer.loop(1000, this, this.countTime);
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "发送成功");

        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "手机号码不正确");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "上次验证码依然有效，无法重新请求");
        }
    }

    private SetToAddrInfo(data: any): void {
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "绑定成功!");
            console.log("data.toAddr==" + data.toAddr);
            DataCenter.getInstance().setToAddrInfo(data.toAddr);
            Laya.stage.event(GameEvents.ADDR_INFO_EVENT, null);
            this.removeSelf();
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在!");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "地址错误!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "验证码错误!");
        }
        if (data.c == 4) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "验证码不存在!");
        }
        if (data.c == 5) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "验证码已失效!");
        }
        if (data.c == 6) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "提现地址已经设置!");
        }

    }

    private onClose(): void {
        this.removeSelf();
    }

    private countTime(): void {
        this.btnGetIden.label = this.time + "";
        this.btnGetIden.labelColors = "red";
        this.time--;
        this.btnGetIden.disabled = true;
        if (this.time == 0) {
            this.btnGetIden.label = "获取验证码";
        }
    }





}