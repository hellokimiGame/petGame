/*
* name;
*/
class draw extends ui.zhuye.choujiangUI {
    private Event = laya.events.Event;
    private total: number = 3;
    private todayDrawNum: number = 0;
    private totalDrawNum: number = 0;
    constructor(data: any) {
        super();
        this.x = 30;
        this.y = 200;
        this.lblRemainTimes.text = data.dn + "/" + this.total;
        this.lblTotalTImes.text = data.n;
        this.totalDrawNum = data.n;
        this.todayDrawNum = data.dn;
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.btnDraw.on(this.Event.CLICK, this, this.onDraw);
    }
    private onClose(): void {
        this.removeSelf();
    }
    //抽奖按钮发送请求
    private onDraw(): void {
        if (this.todayDrawNum >= 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "今日抽奖次数已经用完！");
            return;
        }

        if (this.totalDrawNum <= 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "抽奖次数不足！");
            return;
        }

        var data1 = { e: GameRoute.EVENT_DRAWPLAY, uid: DataCenter.getInstance().getXkcAddressInfo() }
        ConnUitls.getInstance().sendReq(data1, this, this.onDrawPlay);

    }

    //抽奖请求 接收返回值
    private onDrawPlay(data: any): void {
        if (data.c == 0) {
            this.todayDrawNum += 1;
            if (this.todayDrawNum > 3) {
                this.todayDrawNum = 3;
            }
            this.totalDrawNum -= 1;
            this.lblRemainTimes.text = this.todayDrawNum + "/" + this.total;
            this.lblTotalTImes.text = this.totalDrawNum + "";
            ScreenManager.getInstance().showMainScreen(ScreenType.DRAWGET_VIEW, data);
        }
        else if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在！");
        }
        else if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "抽奖次数不足！");
        }
        else if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "今日抽奖次数已经用完！");
        }
    }


}