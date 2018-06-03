/*
* name;
*/
class TraveGet extends ui.zhuye.lvxinghuodeUI {
    private Event = laya.events.Event;
    private uid: string = null;
    constructor(data: any) {
        super();
        var bags: Array<any>;
        bags = DataCenter.getInstance().getBagInfo();
        var length: number = bags.length;
        this.uid = DataCenter.getInstance().getXkcAddressInfo();
        this.imgTravelGet.skin = "res/changjing/" + data.sid + ".png";
        this.btnOK.on(this.Event.CLICK, this, this.onGet)

        if (data.pid == 0) {
            this.lblGet.text = "没有获得物品";
            this.imgTool.visible = false;
        }
        if (data.pid == 10000) {
            this.lblGet.text = "恭喜！获得" + data.num + "xkc币!";
            this.imgTool.visible = false;
        }
        if (data.pid == 10001) {
            this.lblGet.text = "恭喜！获得" + data.num + "罐饼干!";
            this.imgTool.skin = "res/share/daoju1.png";
            this.imgTool.visible = true;

        }
        if (data.pid == 10002) {
            this.lblGet.text = "恭喜！获得" + data.num + "罐药丸!";
            this.imgTool.skin = "res/share/daoju2.png";
            this.imgTool.visible = true;

        }


    }
    private onGet(): void {
        var data1 = { e: GameRoute.EVENT_PETTRAVEL, uid: this.uid }
        ConnUitls.getInstance().sendReq(data1, this, this.onGetRewardHandler);
    }
    private onGetRewardHandler(data: any): void {
        var bags: Array<any>;
        bags = DataCenter.getInstance().getBagInfo();
        var length: number = bags.length;
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,"领取成功！");
            if (data.pid == 10000) {
                DataCenter.getInstance().setXkcInfo(data.xkc);
            }
            if (data.pid == 10001) {
                for (var i = 0; i < length; i++) {
                    if (bags[i].id == 10001) {
                        bags[i].n += data.num;
                        break;
                    }
                }

            }
            if (data.pid == 10002) {
                for (var i = 0; i < length; i++) {
                    if (bags[i].id == 10002) {
                        bags[i].n += data.num;
                        break;
                    }
                }

            }

        }
        if (data.c == 1) {
           
             ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,"用户编号错误!");
        }
    }


}