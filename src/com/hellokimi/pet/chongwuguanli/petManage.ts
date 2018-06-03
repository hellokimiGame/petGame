class petManage extends ui.chongwuguanli.chongwuguanliUI {
    private Event = laya.events.Event;
    private columns: number;
    private list: Laya.List = new Laya.List();
    private petdataArr: Array<any>;
    constructor(data: any) {
        super();
        this.petdataArr = [];
        this.petItemList(data);
        Laya.stage.on(storeToolItems.ROTATE, this, this.onPetDetail);
        Laya.stage.on(GameEvents.PET_SELL_EVENT, this, this.onPetSellHandler);
        Laya.stage.on(GameEvents.PET_CANCELSELL_EVENT,this,this.onPetCancelSellHandler);
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        Laya.stage.on(GameEvents.DESTROY_INFO_EVENT, this, this.onDestroyHandler)
        Laya.stage.on(GameEvents.SETMAINPET_INFO_EVENT,this,this.onSetMainPetHandler);
        Laya.stage.on(GameEvents.REVOKEMAINPET_INFO_EVENT,this,this.onRevokeMainPetHandler );
        Laya.stage.on(GameEvents.SETPETNICK_INFO_EVENT,this, this.onSetPetNickHandler);
        
    }
    //设置宠物昵称
    private onSetPetNickHandler(data1:any):void{
        var length: number;
        var tempData:any=null;
        length = this.list.length;
        for (var i = 0; i < length; i++) {
            tempData=this.list.getItem(i);
            if ( tempData.id==data1.id) {
                tempData.nick=data1.nick;
                break;
            }
            tempData=null;
        }
        this.list.refresh();
        }
    //撤销主宠物
    private onRevokeMainPetHandler(id:number):void{
        var length: number;
        var tempData:any=null;
        length = this.list.length;
        for (var i = 0; i < length; i++) {
            tempData=this.list.getItem(i);
            if ( tempData.id== id) {
                tempData.isM=0;
                break;
            }
            tempData=null;
        }
        this.list.refresh();
    }
    //设置主宠物
    private onSetMainPetHandler(id:number):void{
        var length: number;
        var tempData:any=null;
        length = this.list.length;
        for (var i = 0; i < length; i++) {
            tempData=this.list.getItem(i);
            if ( tempData.id== id) {
                tempData.isM=1;
                break;
            }
            tempData=null;
        }
        this.list.refresh();
    }
    private onDestroyHandler(id: number):void{
        var petArry: Array<any> = this.petdataArr;
        var size: number = 0;
        size = this.petdataArr.length;
        for (var i = 0; i < size; i++) {
            if (petArry[i].id == id) {
                petArry.splice(i, 1);
                break;
            }
        }
        this.list.array = petArry;
        this.list.refresh();
    }
    //关闭按钮
    private onClose(): void {
        this.removeSelf();
    }
    private onPetCancelSellHandler(id:number):void{
        var length: number;
        var tempData:any=null;
        length = this.list.length;
        for (var i = 0; i < length; i++) {
            tempData=this.list.getItem(i);
            if ( tempData.id== id) {
                tempData.status=0;
                break;
            }
            tempData=null;
        }
        this.list.refresh();
    }

    private onPetSellHandler(id: number): void {
        var length: number;
        var tempData:any=null;
        length = this.list.length;
        for (var i = 0; i < length; i++) {
            tempData=this.list.getItem(i);
            if ( tempData.id== id) {
                tempData.status=1;
                break;
            }
            tempData=null;
        }
        this.list.refresh();
    }

    //添加信息
    private petItemList(data: any): void {
        var list = new Laya.List();
        this.list.itemRender = petItems;
        var petData: any = null;
        var tempPet: any = null;
        petData = DataCenter.getInstance().getPetInfo();

        var imgArr: Array<any> = [];
        var petInfo = null;
        var pets: Array<any> = petData;
        var size = pets.length;

        for (var i = 0; i < size; i++) {
            tempPet = pets[i];
            petInfo = {};
            petInfo.id = tempPet.id;
            petInfo.food = tempPet.food;
            petInfo.healthy = tempPet.healthy;
            petInfo.nick = tempPet.nick;
            petInfo.isM = tempPet.isM;
            petInfo.status=tempPet.status;

            petInfo.l = "res/petres/l" + tempPet.l + ".png";
            if (tempPet.x == 1 || tempPet.x == 2 || tempPet.x == 3) {
                petInfo.a = "res/petres/a" + tempPet.a + ".png";
            }
            else if (petInfo.x == 5) {
                petInfo.a = "res/petres/xi" + tempPet.a + ".png";
            }
            petInfo.j = "res/petres/j" + tempPet.j + ".png";
            petInfo.k = "res/petres/k" + tempPet.k + ".png";
            petInfo.h = "res/petres/h" + tempPet.h + ".png";
            petInfo.g = "res/petres/g" + tempPet.g + ".png";
            petInfo.f = "res/petres/f" + tempPet.f + ".png";

            if (petInfo.x == 1 || petInfo.x == 2 || petInfo.x == 3) {
                petInfo.e = "res/petres/e" + tempPet.e + ".png";
            }
            else if (petInfo.x == 6) {
                petInfo.e = "res/petres/xe" + tempPet.e + ".png"
            }
            petInfo.d = "res/petres/d" + tempPet.d + ".png";
            petInfo.c = "res/petres/c" + tempPet.c + ".png";
            petInfo.b = "res/petres/b" + tempPet.b + ".png";

            if (petInfo.x == 1 || petInfo.x == 2 || petInfo.x == 3) {
                petInfo.a = "res/petres/a" + tempPet.a + ".png";
            }
            else if (petInfo.x == 4) {
                petInfo.a = "res/petres/xa" + tempPet.a + ".png";
            }
            if (petInfo.yy != 0) {
                petInfo.yy = "res/petres/y" + tempPet.y + ".png";
            }
            else if (petInfo.z != 0) {
                petInfo.z = "res/petres/z" + tempPet.z + ".png";
            }


            this.petdataArr.push(petInfo);
        }
        // Laya.loader.load(imgArr,Laya.Handler.create(this,this.updateItem,[data]));


        this.columns = Math.floor(pets.length / 3) + (pets.length % 3 > 0 ? 1 : 0);
        this.list.repeatX = 3;
        this.list.repeatY = this.columns;


        //位置设置
        this.list.x = 15;
        this.list.y = 128;
        this.list.spaceX = 10;
        this.list.spaceY = 10;
        this.list.width = 720;
        this.list.height = 1280;

        // 使用但隐藏滚动条
        this.list.vScrollBarSkin = "";
        this.list.selectEnable = true;
        this.list.selectHandler = new Laya.Handler(this, this.onSelect);
        this.list.renderHandler = new Laya.Handler(this, this.updateItem);
        this.addChild(this.list);
        this.list.array = this.petdataArr;
    }

    private updateItem(cell: petItems, index: number): void {
        cell.setPetImg(cell.dataSource);

    }


    private onSelect(index: number): void {
        console.log("当前选择的索引：" + index);
    }
    private onPetDetail(data: Object) {
        var pd: PetDetail = new PetDetail(data);
        this.addChild(pd);

    }
}