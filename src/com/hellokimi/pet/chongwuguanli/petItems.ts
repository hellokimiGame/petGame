class petItems extends ui.chongwuguanli.chongwuxianshikuangUI {
    private Event = laya.events.Event;

    private isMain: boolean = false;
    private pc: PetCreate;
    private petData: any;

    constructor() {
        super();
        this.pc = new PetCreate();
        this.addChild(this.pc);
        this.pc.visible = true;
        this.on(this.Event.CLICK, this, this.onMouse_Down1);
        this.lblMainPet.visible = false;
        this.bgMainPet.visible = false;
        this.lblSelling.visible = false;
        this.bgSelling.visible = false;
        Laya.stage.on(GameEvents.SETMAINPET_INFO_EVENT, this,this.onSetMainPetHandler);
    }
    private onSetMainPetHandler(id:any):void{
        console.log("id====="+id);



    }
    public setPetImg(src: any): void {
        this.petData = src;
        this.pc.init(src);
        this.pc.size(50, 50);
        this.pc.scale(0.5, 0.5);
        this.pc.x = -30;
        this.pc.y = -20;
        this.lblPetName.text = src.nick;
        this.isMain = src.isM;
        this.lblSatiety.text = src.food + "/100";
        this.lblHealthy.text = src.healthy + "/100";
        this.pbSatiety.value = src.food / 100;//饱食度
        this.pbHealthy.value = src.healthy / 100;//饱食度
        if (src.status == 0) {
            this.lblSelling.visible = false;
            this.bgSelling.visible = false;
        } else if (src.status == 1) {
            this.lblSelling.visible = true;
            this.bgSelling.visible = true;
        }
        this.lblMainPet.visible = src.isM;
        this.bgMainPet.visible = src.isM;
    }

    private onMouse_Down1(petData): void {
        ScreenManager.getInstance().showMainScreen(ScreenType.PETDETAIL_VIEW, this.petData)
        //Laya.stage.event(GameEvents.PET_INFO_DETAIL_EVENT, this.petData);
    }
}