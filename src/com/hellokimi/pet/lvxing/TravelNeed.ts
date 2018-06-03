/*
* name;
*/
class TravelNeed extends ui.zhuye.lvxingxuyaoUI {
    private Event = laya.events.Event;
    private uid: string = null;
    constructor() {
        super();
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.btnStartTravel.on(this.Event.CLICK, this, this.onStartTravel)
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
    }
    private onClose(): void {
        this.removeSelf();
    }

    private onStartTravel(): void {
        var bags: any = null;
        bags = DataCenter.getInstance().getBagInfo();
        var foodNum: number = 0;
        var length: number = 0;
        length = bags.length;
        for (var i = 0; i < length; i++) {
            if (bags[i].id == 10001) {
                foodNum = bags[i].n
                break;
            }

        }

        if (foodNum < 10) {

            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的饼干不足！");
        }

        var data1 = { e: GameRoute.EVENT_PETTRAVEL, uid: this.uid }
        ConnUitls.getInstance().sendReq(data1, this, this.onTravelHandler);
    }

    private onTravelHandler(data: any): void {
        if (data.c == 0) {
            this.removeSelf();
            ScreenManager.getInstance().showMainScreen(ScreenType.TRAVELLING_VIEW, data);
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户编号错误!");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物在旅行中!");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "没有宠物无法旅行!");
        }
        if (data.c == 4) {
           ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "粮食不够!");
        }

    }


 
}