class bagToolItems extends ui.beibao.beibaodaojukuangUI {
    //labToolName:string,labToolDescribe:string,labPrice:number,id:string
    private Event = laya.events.Event;
    constructor() {
        super();


    }
    public setImg(src: any): void {
        if (src.id == "10001") {
            this.imgTool.skin = "res/share/daoju1.png";

        }
        else if (src.id == "10002") {
            this.imgTool.skin = "res/share/daoju2.png";
        }
        if (src.id == 10001) {
            this.lblToolName.text = "粮食";
        } else {
            this.lblToolName.text = "药品";
        }
        this.lblNum.text = src.n;
    }
}