/*
* name;
*/
class marketPetItem extends ui.jishi.jishichongwukuangUI {
    private Event = laya.events.Event;
    private pc: PetCreate;
    private petData: any;
    constructor() {
        super();
        this.pc = new PetCreate();
        this.addChild(this.pc);
        this.pc.visible = true;
        this.on(this.Event.CLICK, this, this.onMouse_DownPet);

    }

    public setImg(src: any): void {
        this.petData = src;
        this.pc.init(src);
        this.pc.size(50, 50);
        this.pc.scale(0.5, 0.5);
        this.pc.x = -30;
        this.pc.y = -20;
        this.lblPrice.text = src.price;
        if(src.day<1){
            this.lblTIme.text=src.hour+"小时"+src.minute+"分钟"+src.second+"秒前发布";
        }else {
            this.lblTIme.text=src.day+"天前发布";
        }
        
        if (src.level == 1) {
            this.lblLevel.text = "普通";
        }
        if (src.level == 2) {
            this.lblLevel.text = "高级";
        }
        if (src.level == 3) {
            this.lblLevel.text = "极品";
        }
        if (src.level == 4) {
            this.lblLevel.text = "稀有";
        }
        if (src.level == 5) {
            this.lblLevel.text = "史诗";
        }
        if (src.level == 6) {
            this.lblLevel.text = "神话";
        }

    }


    private onMouse_DownPet(petData): void {
        ScreenManager.getInstance().showMainScreen(ScreenType.MARKETBUY_VIEW, this.petData)
    }


}