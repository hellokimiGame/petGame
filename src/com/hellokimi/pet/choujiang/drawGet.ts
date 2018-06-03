/*
* name;
*/
class drawGet extends ui.zhuye.choujianghuodeUI {
    private Event = laya.events.Event;
    private pc: PetCreate;
    private pet: any;
    constructor(data: any) {
        super();
        this.x = 30;
        this.y = 200;
     


        this.btnOK.on(this.Event.CLICK, this, this.onOK);
        if (data.type == 1) {
            this.lblTips.text = "很遗憾，没有中奖";
        }
        else if (data.type == 2) {
            this.lblTips.text = "获得2个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 3) {
            this.lblTips.text = "获得3个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 4) {
            this.lblTips.text = "获得4个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 5) {
            this.lblTips.text = "获得5个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 6) {
            this.lblTips.text = "获得10个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 7) {
            this.lblTips.text = "获得15个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 8) {
            this.lblTips.text = "获得20个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 9) {
            this.lblTips.text = "获得50个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 10) {
            this.lblTips.text = "获得100个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 11) {
            this.lblTips.text = "获得200个XKC币";
            this.imgGetItem.skin="res/share/xkcBill.png";
            DataCenter.getInstance().setXkcInfo(DataCenter.getInstance().getXkcInfo() + data.num);
        }
        else if (data.type == 12) {
            this.lblTips.text = "获得食品";
            this.imgGetItem.skin = "res/share/daoju1.png";
            this.updateBagInfo(data);

        }
        else if (data.type == 13) {
            this.lblTips.text = "获得药品";
            this.imgGetItem.skin = "res/share/daoju2.png";
            this.updateBagInfo(data);

        }
        else if (data.type == 14) {
            this.lblTips.text = "获得普通宠物";
            this.imgGetItem.visible = false;
            this.pc = new PetCreate();
            this.addChild(this.pc);
            this.pet = data.pet;
            DataCenter.getInstance().getPetInfo().push(data.pet);
            this.loadPetInfo(data.pet);

        }
        else if (data.type == 15) {
            this.lblTips.text = "获得高级宠物";
            this.imgGetItem.visible = false;
            this.pc = new PetCreate();
            this.addChild(this.pc);
            this.pet = data.pet;
            DataCenter.getInstance().getPetInfo().push(data.pet);
            this.loadPetInfo(data.pet);
        }
        else if (data.type == 16) {
            this.lblTips.text = "获得极品宠物";
            this.imgGetItem.visible = false;
            this.pc = new PetCreate();
            this.addChild(this.pc);
            this.pet = data.pet;
            DataCenter.getInstance().getPetInfo().push(data.pet);
            this.loadPetInfo(data.pet);
        }
        else if (data.type == 17) {
            this.lblTips.text = "获得稀有宠物";
            this.imgGetItem.visible = false;
            this.pc = new PetCreate();
            this.addChild(this.pc);
            this.pet = data.pet;
            DataCenter.getInstance().getPetInfo().push(data.pet);
            this.loadPetInfo(data.pet);
        } else if (data.type == 18) {
            this.lblTips.text = "获得史诗宠物";
            this.imgGetItem.visible = false;
            this.pc = new PetCreate();
            this.addChild(this.pc);
            this.pet = data.pet;
            DataCenter.getInstance().getPetInfo().push(data.pet);
            this.loadPetInfo(data.pet);
        }



    }
    private loadPetInfo(data: any) {
        var imgArr: Array<any> = [];

        var tempPet: any = data;

        if (tempPet.x == 1 || tempPet.x == 2 || tempPet.x == 3) {
            imgArr.push("res/petres/a" + tempPet.a + ".png");
            imgArr.push("res/petres/b" + tempPet.b + ".png");
            imgArr.push("res/petres/c" + tempPet.c + ".png");
            imgArr.push("res/petres/d" + tempPet.d + ".png");
            imgArr.push("res/petres/e" + tempPet.e + ".png");
            imgArr.push("res/petres/f" + tempPet.f + ".png");
            imgArr.push("res/petres/g" + tempPet.g + ".png");
            imgArr.push("res/petres/h" + tempPet.h + ".png");
            imgArr.push("res/petres/i" + tempPet.i + ".png");
            imgArr.push("res/petres/j" + tempPet.j + ".png");
            imgArr.push("res/petres/k" + tempPet.k + ".png");
            imgArr.push("res/petres/l" + tempPet.l + ".png");
        }
        else if (tempPet.x >= 4) {
            imgArr.push("res/petres/xa" + tempPet.a + ".png");
            imgArr.push("res/petres/b" + tempPet.b + ".png");
            imgArr.push("res/petres/c" + tempPet.c + ".png");
            imgArr.push("res/petres/d" + tempPet.d + ".png");
            imgArr.push("res/petres/xe" + tempPet.e + ".png");
            imgArr.push("res/petres/f" + tempPet.f + ".png");
            imgArr.push("res/petres/g" + tempPet.g + ".png");
            imgArr.push("res/petres/h" + tempPet.h + ".png");
            imgArr.push("res/petres/xi" + tempPet.i + ".png");
            imgArr.push("res/petres/j" + tempPet.j + ".png");
            imgArr.push("res/petres/k" + tempPet.k + ".png");
            imgArr.push("res/petres/l" + tempPet.l + ".png");
            imgArr.push("res/petres/xt" + tempPet.t + ".png");
        }

        if (tempPet.z != 0) {
            imgArr.push("res/petres/z" + tempPet.z + ".png");
        }
        if (tempPet.z == 0) {
            imgArr.push("res/petres/y" + tempPet.y + ".png");
        }

        Laya.loader.load(imgArr, Laya.Handler.create(this, this.onAssetLoaded));
    }
    private onAssetLoaded(): void {
        Laya.stage.event(GameEvents.FLASH_INFO_EVENT,this.pet);
        var tempObj: any = this.pet;
        var path: any = {};
        path.id = tempObj.id;

        path.status = tempObj.status;
        path.food = tempObj.food;
        path.healthy = tempObj.healthy;
        path.isM = tempObj.isM;
        path.l = "res/petres/l" + tempObj.l + ".png";

        path.j = "res/petres/j" + tempObj.j + ".png";
        path.k = "res/petres/k" + tempObj.k + ".png";
        path.h = "res/petres/h" + tempObj.h + ".png";
        path.g = "res/petres/g" + tempObj.g + ".png";
        path.f = "res/petres/f" + tempObj.f + ".png";

        if (tempObj.x < 4) {
            path.a = "res/petres/i" + tempObj.i + ".png";
            path.a = "res/petres/a" + tempObj.a + ".png";
            path.e = "res/petres/e" + tempObj.e + ".png";
        }
        else {
            path.e = "res/petres/xe" + tempObj.e + ".png";
            path.a = "res/petres/xa" + tempObj.a + ".png";
            path.a = "res/petres/xi" + tempObj.i + ".png";
        }
        if (tempObj.t > 0) {
            path.t = "res/petres/xt" + tempObj.t + ".png";
        } else {
            path.t = 0;
        }

        path.d = "res/petres/d" + tempObj.d + ".png";
        path.c = "res/petres/c" + tempObj.c + ".png";
        path.b = "res/petres/b" + tempObj.b + ".png";

        if (tempObj.yy != null) {
            path.y = "res/petres/y" + tempObj.yy + ".png";
        }
        else if (tempObj.z != 0) {
            path.z = "res/petres/z" + tempObj.z + ".png";
        }

        this.pc.init(path);
        this.pc.size(100, 100);
        this.pc.scale(0.8, 0.8);
        this.pc.anchorX = 0.5;
        this.pc.anchorY = 0.5;
        this.pc.x = 150;
        this.pc.y = 100;
    }

    private updateBagInfo(data: any): void {
        var bags: Array<any> = DataCenter.getInstance().getBagInfo();
        var size: number = bags.length, item: any;
        var isCon: boolean = true;
        for (var i: number = 0; i < size; i++) {
            item = bags[i];
            if (item.id == data.pid) {
                item.n = item.n + data.num;
                isCon = false;
                break;
            }
            item = null;
        }

        if (isCon) {
            item = {};
            item.id = data.pid;
            item.id = data.num;
            bags.push(item);
        }
    }

    private onOK(): void {
        this.removeSelf();
    }
}