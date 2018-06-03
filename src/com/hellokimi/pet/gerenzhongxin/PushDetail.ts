/*
* name;
*/
class PushDetail extends ui.gerenzhongxin.tuiguangxiangqingUI {
        private Event = laya.events.Event;

        constructor(data: any) {
                super();
                this.x = 100;
                this.y = 200;
                this.btnClose.on(this.Event.CLICK, this, this.onClose);
                this.lblPushNumb.text = data.pn;
                this.lblGetTime.text=data.pn;
                this.lblGetXkc.text = data.xkc;

        }
        private onClose(): void {
                this.removeSelf();
        }


}