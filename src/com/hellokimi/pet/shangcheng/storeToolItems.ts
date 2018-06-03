class storeToolItems extends ui.shangcheng.shangchengdaojukuangUI{
//labToolName:string,labToolDescribe:string,labPrice:number,id:string
private  Event=laya.events.Event;
public static ROTATE:string="rotate";
    private data:any;
    constructor(){
        super();
        
        this.on(this.Event.MOUSE_DOWN,this,this.onMouse_Down1);
        }
     public setImg(src:Object): void {
         this.data=src;
            this.imgTool.skin=src['url'];
            this.lblToolName.text=src['name'];
            this.lblPrice.text=src['price'];
        }

       
        private onMouse_Down1():void{
        ScreenManager.getInstance().showMainScreen(ScreenType.STOREBUY_VIEW, this.data);
        }

}