/*
* name;
*/
class LoginReward extends ui.zhuye.denglujiangliUI {
    private Event = laya.events.Event;
    private uid: string = null;
    private Tips: string = null;
    constructor(data: any) {
        super();
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.btnOK.on(this.Event.CLICK, this, this.onOK);
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.x = 100;
        this.y = 200;
        if (data.d == 0) {
            this.btnOK.visible = true;
            this.imgGot.visible = false;
        }
        if (data.d == 1) {
            this.btnOK.visible = false;
            this.imgGot.visible = true;
        }
    }
    private onClose(): void {
        this.removeSelf();
    }
    private onOK(): void {
        var data1 = { e: GameRoute.EVENT_DRAWLOGIN, uid: this.uid }
        ConnUitls.getInstance().sendReq(data1, this, this.LoginRewardHandler);
    }
    private LoginRewardHandler(data: any): void {

        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "领取成功！");
            var bags: any = null;
            bags = DataCenter.getInstance().getBagInfo;
            var length: number = 0;
            length = bags.length;
            this.lblNum = data.n;

            for (var i = 0; i < length; i++) {
                if (bags[i].id == data.pid) {
                    bags[i].n += data.n;
                    break;
                }
            }
            this.btnOK.visible = false;
            this.imgGot.visible = true;
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在!");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "今日已经领取过奖励!");
        }

    }


}