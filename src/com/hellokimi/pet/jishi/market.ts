/*
* name;
*/
class market extends ui.jishi.jishiUI {
    private Event = laya.events.Event;
    private columns: number;
    private list: Laya.List = new Laya.List();
    private order2: number = 1;
    private order3: number = 1;
    private data1: any = null;
    private pageType: number = 1;
    private type: number = 0;
    private pageNum: number = 0;
    private totalPage: number = 0;
    private petdataArr: Array<any>;
    private isTiping:boolean=false;
    constructor(data: any) {
        super();
        this.data1 = data;
        this.petdataArr = [];
        this.petItemList1(this.data1);
        this.btnFreeSell.index = 0;
        this.btnRadomBuy.index = 0;

        this.pageNum = data.pn;
        this.totalPage = data.tp;
        this.type = 1;
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
        this.btnLevel.on(this.Event.CLICK, this, this.onOrderLevel);
        this.btnPrice.on(this.Event.CLICK, this, this.onOrderPrice);
        this.btnTime.on(this.Event.CLICK, this, this.onOrderTime);
        this.btnFreeSell.on(this.Event.CLICK, this, this.onFreeSell);
        this.btnRadomBuy.on(this.Event.CLICK, this, this.onPublicSell);
        this.btnRadomBuy.index = 1;
        this.btnTime.skin = "res/share/btn_biaoqiananniu2.png";
        Laya.stage.on(GameEvents.BUY_INFO_EVENT, this, this.onBuyHandler)
    }

    private onBuyHandler(id: number): void {

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




    private petItemList1(data: any): void {
        var list = new Laya.List();
        this.list.itemRender = marketPetItem;
        var petData: any = null;
        var tempPet: any = null;
        petData = data.ps;
        //  var imgArr: Array<any> = [];
        var petInfo = null;
        var pets: Array<any> = petData;
        var size = pets.length;
        var second: number = 0;
        var second1: number = 0;
        var minute: number = 0;
        var minute1: number = 0;
        var hour: number = 0;
        var hour1: number = 0;
        var day1: number = 0;
        var day: number = 0;
        for (var i = 0; i < size; i++) {
            tempPet = pets[i];
            petInfo = {};
            petInfo.id = tempPet.id;
            petInfo.status = tempPet.status;
            petInfo.price = tempPet.p;
            petInfo.level = tempPet.x;
            second = tempPet.t;
            day1 = second / 86400;
            day = Math.floor(day1);
            if (second > 60) {
                minute1 = second / 60;
                minute = Math.floor(minute1);
                second1 = second % 60;
                second = Math.floor(second1);
            }
            if (minute > 60) {
                hour1 = minute / 60;
                hour = Math.floor(hour1);
                minute1 = minute % 60;
                minute = Math.floor(minute1);
            }
            petInfo.day = day;
            petInfo.second = second;
            petInfo.minute = minute;
            petInfo.hour = hour;
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
        Laya.timer.loop(100, this, this.onTimerHandler);

        //位置设置
        this.list.x = 15;
        this.list.y = 250;
        this.list.spaceX = 10;
        this.list.spaceY = 50;
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


    //监听事件
    private onTimerHandler(): void {
        if (this.list.scrollBar.value >= this.list.scrollBar.max) {
            if (this.pageNum == this.totalPage  && !this.isTiping) {
                this.list.scrollBar.value=this.list.scrollBar.max-1;
                this.isTiping=true;
                ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "已经没有更多宠物了！");
                Laya.timer.once(3000,this,this.tipingHandler); 
                return;
            }
            if (this.pageNum < this.totalPage) {
                Laya.timer.clear(this, this.onTimerHandler);

                var data1 = { e: GameRoute.EVENT_MARKETINFO, ty: this.type, pageNumber: (this.pageNum + 1) }
                ConnUitls.getInstance().sendReq(data1, this, this.onUpdateListHandler);

                // this.removeSelf();
            }
        }
    }
    private tipingHandler():void{
        this.isTiping=false;
    }

    private onUpdateListHandler(data: any): void {
        if (data.c == 0) {
            this.pageNum = data.pn;
            this.totalPage = data.tp;
            this.petItemList1(data);
            this.list.refresh();
        }
    }
    //关闭按钮
    private onClose(): void {
        this.removeSelf();
    }
    private onFreeSell(): void {
        this.btnFreeSell.index = 1;
        this.btnRadomBuy.index = 0;
        this.pageType = 2;
        var data1 = { e: GameRoute.EVENT_SEARCHPERSONMARKETINFO, ty: 1, pageNumber: 1 }
        ConnUitls.getInstance().sendReq(data1, this, this.onOrderTimeHandler1);
    }


    private onPublicSell(): void {
        this.btnFreeSell.index = 0;
        this.btnRadomBuy.index = 1;
        this.pageType = 1;
    }
    private onOrderLevel(): void {
        if (this.type != 5 && this.type != 6) {
            this.type = 6;
        }

        if (this.type == 5) {
            this.type = 6;

            this.imgLevelArrow.skin = "res/share/jiantou1.png";
            this.btnLevel.skin = "res/share/btn_biaoqiananniu2.png";
        } else if (this.type == 6) {
            this.type = 5;
            this.imgLevelArrow.skin = "res/share/jiantou2.png";
            this.btnLevel.skin = "res/share/btn_biaoqiananniu2.png";

        }
        if (this.pageType == 1) {
            var data1 = { e: GameRoute.EVENT_MARKETINFO, ty: this.type, pageNumber: 1 }
            ConnUitls.getInstance().sendReq(data1, this, this.onOrderLevelHandler1);
        }
        else if (this.pageType == 2) {
            var data1 = { e: GameRoute.EVENT_SEARCHPERSONMARKETINFO, ty: this.type, pageNumber: 1 }
            ConnUitls.getInstance().sendReq(data1, this, this.onOrderLevelHandler1);
        }

    }

    //等级从高到低
    private onOrderLevelHandler1(data: any): void {
        if (data.c == 0) {
            this.imgPriceArrow.skin = "res/share/jiantou1.png";
            this.btnTime.skin = "res/share/btn_biaoqiananniu.png"
            this.btnPrice.skin = "res/share/btn_biaoqiananniu.png"
            this.petdataArr = [];
            this.pageNum = data.pn;
            this.totalPage = data.tp;
            this.petItemList1(data);
            this.list.refresh();

        }
        if (data.c == 1) {

        }
    }
    //等级从低到高
    private onOrderLevelHandler2(data: any): void {
        if (data.c == 0) {
            this.imgPriceArrow.skin = "res/share/jiantou1.png";
            this.imgTimeArrow.skin = "res/share/jiantou1.png";
            this.btnTime.skin = "res/share/btn_biaoqiananniu.png"
            this.btnPrice.skin = "res/share/btn_biaoqiananniu.png"
            this.petdataArr = [];
            this.pageNum = data.pn;
            this.totalPage = data.tp;
            this.petItemList1(data);
            this.list.refresh();
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "非法请求");
        }
    }

    private onOrderPrice(): void {
        if (this.order2 == 1) {
            this.order2 = 2;
            this.imgPriceArrow.skin = "res/share/jiantou2.png";
            this.btnPrice.skin = "res/share/btn_biaoqiananniu2.png"
            if (this.pageType == 1) {
                var data1 = { e: GameRoute.EVENT_MARKETINFO, ty: 3, pageNumber: 1 }
                this.type = data1.ty;
                ConnUitls.getInstance().sendReq(data1, this, this.onOrderPriceHandler1);
            } else if (this.pageType == 2) {
                var data1 = { e: GameRoute.EVENT_SEARCHPERSONMARKETINFO, ty: 3, pageNumber: 1 }
                this.type = data1.ty;
                ConnUitls.getInstance().sendReq(data1, this, this.onOrderPriceHandler1);
            }

        }
        else if (this.order2 == 2) {
            this.order2 = 1;
            this.imgPriceArrow.skin = "res/share/jiantou1.png";
            this.btnPrice.skin = "res/share/btn_biaoqiananniu2.png"
            if (this.pageType == 1) {
                var data1 = { e: GameRoute.EVENT_MARKETINFO, ty: 4, pageNumber: 1 }
                this.type = data1.ty;
                ConnUitls.getInstance().sendReq(data1, this, this.onOrderPriceHandler2);
            }
            else if (this.pageType == 2) {
                var data1 = { e: GameRoute.EVENT_SEARCHPERSONMARKETINFO, ty: 4, pageNumber: 1 }
                this.type = data1.ty;
                ConnUitls.getInstance().sendReq(data1, this, this.onOrderPriceHandler2);
            }
        }
    }
    //价格从高到低
    private onOrderPriceHandler1(data: any): void {
        if (data.c == 0) {
            this.imgLevelArrow.skin = "res/share/jiantou1.png";
            this.imgTimeArrow.skin = "res/share/jiantou1.png";
            this.btnTime.skin = "res/share/btn_biaoqiananniu.png"
            this.btnLevel.skin = "res/share/btn_biaoqiananniu.png"
            this.petdataArr = [];
            this.pageNum = data.pn;
            this.totalPage = data.tp;
            this.petItemList1(data);
            this.list.refresh();
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "非法请求");
        }
    }
    //价格从低到高
    private onOrderPriceHandler2(data: any): void {
        if (data.c == 0) {
            this.imgLevelArrow.skin = "res/share/jiantou1.png";
            this.imgTimeArrow.skin = "res/share/jiantou1.png";
            this.btnTime.skin = "res/share/btn_biaoqiananniu.png"
            this.btnLevel.skin = "res/share/btn_biaoqiananniu.png"
            this.petdataArr = [];
            this.pageNum = data.pn;
            this.totalPage = data.tp;
            this.petItemList1(data);
            this.list.refresh();
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "非法请求");
        }
    }
    private onOrderTime(): void {
        if (this.type > 2) {
            this.type = 1;
        }

        if (this.type == 1) {
            this.type = 2;
            this.imgTimeArrow.skin = "res/share/jiantou2.png";
            this.btnTime.skin = "res/share/btn_biaoqiananniu2.png";
        } else if (this.type == 2) {
            this.type = 1;
            this.imgTimeArrow.skin = "res/share/jiantou1.png";
            this.btnTime.skin = "res/share/btn_biaoqiananniu2.png";
        }
        if (this.pageType == 1) {
            var data1 = { e: GameRoute.EVENT_MARKETINFO, ty: this.type, pageNumber: 1 }
            this.type = data1.ty;
            ConnUitls.getInstance().sendReq(data1, this, this.onOrderTimeHandler1);
        }
        else if (this.pageType == 2) {
            var data1 = { e: GameRoute.EVENT_SEARCHPERSONMARKETINFO, ty: this.type, pageNumber: 1 }
            this.type = data1.ty;
            ConnUitls.getInstance().sendReq(data1, this, this.onOrderTimeHandler1);
        }


    }
    //时间从高到低
    private onOrderTimeHandler1(data: any): void {
        if (data.c == 0) {
            this.imgLevelArrow.skin = "res/share/jiantou1.png";
            this.imgPriceArrow.skin = "res/share/jiantou1.png";
            this.btnLevel.skin = "res/share/btn_biaoqiananniu.png"
            this.btnPrice.skin = "res/share/btn_biaoqiananniu.png"
            this.petdataArr = [];
            this.pageNum = data.pn;
            this.totalPage = data.tp;
            this.petItemList1(data);
            this.list.refresh();
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "非法请求");
        }
    }
    //时间从低到高
    private onOrderTimeHandler2(data: any): void {
        if (data.c == 0) {
            this.imgLevelArrow.skin = "res/share/jiantou1.png";
            this.imgPriceArrow.skin = "res/share/jiantou1.png";
            this.btnLevel.skin = "res/share/btn_biaoqiananniu.png"
            this.btnPrice.skin = "res/share/btn_biaoqiananniu.png"

            this.petdataArr = [];
            this.pageNum = data.pn;
            this.totalPage = data.tp;
            this.petItemList1(data);
            this.list.refresh();
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "非法请求");
        }
    }

    private updateItem(cell: marketPetItem, index: number): void {
        cell.setImg(cell.dataSource);

    }


    private onSelect(index: number): void {
        console.log("当前选择的索引：" + index);
    }
    private onMarketBuy(data: Object) {
        var mb: marketBuy = new marketBuy(data);
        this.addChild(mb);
    }

}