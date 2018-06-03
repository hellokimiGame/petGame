/**
* name 
*/

class MainView extends ui.zhuye.mainViewUI {
	private list: Laya.List = null;
	private styValue: number;
	private htyValue: number;
	private Tips: string = null;
	private startX: number = 0;
	private stopX: number = 0;
	private isPress: boolean = false;
	private uid: string = null;
	private petData1: any;
	public add = DataCenter.getInstance().getXkcAddressInfo();
	private currentIndex: number = 0;
	private pets1: Array<any> = DataCenter.getInstance().getPetInfo();
	private foodReduction1: number = 0;
	private foodReduction2: number = 0;
	private foodReduction3: number = 0;
	private foodReduction4: number = 0;
	private foodReduction5: number = 0;
	private foodReduction6: number = 0;


	constructor(data: any) {
		super();
		console.log("data" + data);
		this.petData1 = data;
		var pets: Array<any> = DataCenter.getInstance().getPetInfo();
		this.uid = DataCenter.getInstance().getXkcAddressInfo();
		var tempPet: any = null;
		var length: number = pets.length;

		if (length > 0 && pets[0].isM == 1) {
			tempPet = pets[0];
			this.bgMainPet.visible = true;
			this.lblMainPet.visible = true;
		}
		else {
			this.bgMainPet.visible = false;
			this.lblMainPet.visible = false;
			this.btnArrowL.visible = false;
			this.btnArrowR.visible = false;

		}
		this.list = new Laya.List();

		Laya.timer.loop(60000, this, this.updateSatiety);//更新饱食度

		if (length == 0) {
			this.pbSatiety.visible = false;
			this.pbHealthy.visible = false;
			this.lblSatiety.visible = false;
			this.lblHealthy.visible = false;
			this.lblSelling.visible = false;
			this.bgSelling.visible = false;
		} else {

			this.btnArrowL.visible = true;
			this.btnArrowR.visible = true;
			tempPet = pets[0];
			this.pbSatiety.value = tempPet.food / 100;//饱食度
			this.pbHealthy.value = tempPet.healthy / 100;
			this.styValue = tempPet.food;
			this.htyValue = tempPet.healthy;
			this.lblSatiety.text = "饱食度：" + this.styValue + "/100";
			this.lblHealthy.text = "健康度：" + this.htyValue + "/100";

			this.imgMask.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownHandler);
			this.imgMask.on(Laya.Event.MOUSE_MOVE, this, this.onMoveHandler);
			this.imgMask.on(Laya.Event.MOUSE_OVER, this, this.onMouseUpHandler);

			var status: number = pets[0].status;
			if (status == 1) {
				this.lblSelling.visible = true;
				this.bgSelling.visible = true;
			} else {
				this.lblSelling.visible = false;
				this.bgSelling.visible = false;
			}
		}




		var Event = Laya.Event;
		var foodNum: number = 500;
		
		this.btnadvanture.on(Event.CLICK, this, this.onAdvantureHandler);//冒险处理
		this.btnArrowL.on(Event.CLICK, this, this.onArrowLeftHandler);//向左滚动
		this.btnArrowR.on(Event.CLICK, this, this.onArrowRightHandler);//向右滚动
		this.btnBag.on(Event.CLICK, this, this.onBagHandler);//背包
		this.btnCure.on(Event.CLICK, this, this.onCureHandler);//治疗
		this.btnDraw.on(Event.CLICK, this, this.onDrawHandler);//抽奖
		this.btnFeed.on(Event.CLICK, this, this.onFeedHandler);//喂养
		this.btnMarket.on(Event.CLICK, this, this.onMarketHandler);//集市
		this.btnPersonCenter.on(Event.CLICK, this, this.onPersonCenter);//个人中心
		this.btnPetManage.on(Event.CLICK, this, this.onPetManageHandler);//宠物管理
		this.btnStore.on(Event.CLICK, this, this.onStoreHandler);//商店
		this.btnTravel.on(Event.CLICK, this, this.onTravelHandler);//旅行
		this.btnGame.on(Event.CLICK,this,this.onGameHandler);
		this.btnNarrowCat.on(Event.CLICK,this,this.onNarrowCatHandler);
		this.btnLoginReward.on(Event.CLICK, this, this.onLoginInfoHandler);//登录领取信息
		Laya.stage.on(GameEvents.FLASH_INFO_EVENT, this, this.loadPetInfo);
		if (length > 0) {
			this.petCreateList();
		}


		// this.list.on(Laya.Event.MOUSE_MOVE,this,this.onMoveHandler);


		var num: number = this.numChildren;
		this.imgMask.zOrder = 1;
		this.btnArrowR.zOrder = num;
		this.lblDraw.zOrder = num;
		this.btnArrowL.zOrder = num;
		this.btnTravel.zOrder = num;
		this.btnDraw.zOrder = num;

		this.list.mouseEnabled = false;
		this.list.zOrder = 0;
		this.addChild(this.list);
		// this.list.on(Laya.Event.MOUSE_OUT,this,this.onMouseUpHandler);
	}

	private loadPetInfo(data: any) {
		var imgArr: Array<any> = [];

		var tempPet: any = data;
		var size: number = DataCenter.getInstance().getPetInfo().length;
		if (size == 1) {
			this.pbSatiety.visible = true;
			this.pbHealthy.visible = true;
			this.pbSatiety.value = tempPet.food / 100;//饱食度
			this.pbHealthy.value = tempPet.healthy / 100;
			this.styValue = tempPet.food;
			this.htyValue = tempPet.healthy;
			this.lblSatiety.text = "饱食度：" + this.styValue + "/100";
			this.lblHealthy.text = "健康度：" + this.htyValue + "/100";
			this.lblSatiety.visible = true;
			this.lblHealthy.visible = true;
		}

		if (size > 1 && !this.imgMask.hasListener(Laya.Event.MOUSE_DOWN)) {
			this.btnArrowL.visible = true;
			this.btnArrowR.visible = true;

			this.imgMask.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownHandler);
			this.imgMask.on(Laya.Event.MOUSE_MOVE, this, this.onMoveHandler);
			this.imgMask.on(Laya.Event.MOUSE_OVER, this, this.onMouseUpHandler);
		}

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
		this.petCreateList();
	}

	//更新饱食度
	private updateSatiety(): void {
		var pets = DataCenter.getInstance().getPetInfo();
		if (pets.length == 0) {
			return;
		}

		var id: number = this.list.getItem(this.currentIndex).id;
		if (id == null || this.list.length == 0) {
			return;
		}

		this.foodReduction1 += 1 / 45;
		this.foodReduction2 += 1 / 60;
		this.foodReduction3 += 1 / 70;
		this.foodReduction4 += 1 / 80;
		this.foodReduction5 += 1 / 90;
		this.foodReduction6 += 1 / 100;

		var currentFood: number;
		var currentHealthy: number;


		var size = pets.length;

		for (var i = 0; i < size; i++) {
			if (this.foodReduction1 >= 1 && pets[i].x == 1 && pets[i].status == 0) {
				this.foodReduction1 -= 1;
				pets[i].food--;
			}
			else if (this.foodReduction2 >= 1 && pets[i].x == 2 && pets[i].status == 0) {
				this.foodReduction2 -= 1;
				pets[i].food--;
			}
			else if (this.foodReduction3 >= 1 && pets[i].x == 3 && pets[i].status == 0) {
				this.foodReduction3 -= 1;
				pets[i].food--;
			}
			else if (this.foodReduction4 >= 1 && pets[i].x == 4 && pets[i].status == 0) {
				this.foodReduction4 -= 1;
				pets[i].food--;
			}
			else if (this.foodReduction5 >= 1 && pets[i].x == 5 && pets[i].status == 0) {
				this.foodReduction5 -= 1;
				pets[i].food--;
			}
			else if (this.foodReduction6 >= 1 && pets[i].x == 6 && pets[i].status == 0) {
				this.foodReduction6 -= 1;
				pets[i].food--;
			}

			if (id == pets[i].id) {
				currentFood = pets[i].food;
				currentHealthy = pets[i].healthy;
				this.styValue = currentFood;
				this.htyValue = currentHealthy;
				this.pbSatiety.value = currentFood / 100;
				this.pbHealthy.value = currentHealthy / 100;
				this.lblSatiety.text = "饱食度" + this.styValue + "/100";
				this.lblHealthy.text = "健康度" + this.htyValue + "/100";
			}
		}
	}

	private onMoveHandler(e: Laya.Event): void {
		var currentFood: number = 0;
		var currentHealthy: number = 0;
		//向右划
		if (!this.isPress) {
			return;
		}
		console.log(" onMoveHandler===" + e.stageX + "  this.startX==" + this.startX);
		var id: number;
		var pets = DataCenter.getInstance().getPetInfo();
		var size = pets.length;
		if (e.stageX - this.startX > 30) {
			this.currentIndex -= 1;

			if (this.currentIndex <= 0) {
				this.currentIndex = 0;
			}
			this.list.scrollTo(this.currentIndex);



			this.isPress = false;
		}
		//向左滑
		else if (this.startX - e.stageX > 30) {
			this.currentIndex += 1;
			if (this.currentIndex >= this.list.totalPage) {
				this.currentIndex = this.list.totalPage - 1;
			}

			this.list.scrollTo(this.currentIndex);
			this.isPress = false;
		}
		id = this.list.getItem(this.currentIndex).id;
		var isMainPet: boolean = false;
		var status: number = 0;
		for (var i = 0; i < size; i++) {
			if (id == pets[i].id) {
				currentFood = pets[i].food;
				currentHealthy = pets[i].healthy;
				isMainPet = pets[i].isM;
				status = pets[i].status;
				break;
			}
		}
		if (status == 1) {
			this.lblSelling.visible = true;
			this.bgSelling.visible = true;
		} else {
			this.lblSelling.visible = false;
			this.bgSelling.visible = false;
		}
		this.lblMainPet.visible = isMainPet;
		this.bgMainPet.visible = isMainPet;


		if (currentFood > 0 || currentHealthy > 0) {
			this.styValue = currentFood;
			this.htyValue = currentHealthy;
			this.pbSatiety.value = currentFood / 100;
			this.pbHealthy.value = currentHealthy / 100;
			this.lblSatiety.text = "饱食度" + this.styValue + "/100";
			this.lblHealthy.text = "健康度" + this.htyValue + "/100";
		}

	}

	private onMouseDownHandler(e: Laya.Event): void {
		this.isPress = true;
		console.log(" onMouseDownHandler===" + e.stageX);
		this.startX = e.stageX;
	}
	private onMouseUpHandler(e: Laya.Event): void {
		console.log(" onMouseUpHandler===" + e.stageX);
		this.isPress = false;
		this.stopX = e.stageX;
	}

	private onLoginInfoHandler(): void {
		var data1 = { e: GameRoute.EVENT_LOGININFO, uid: this.uid }
		ConnUitls.getInstance().sendReq(data1, this, this.LoginInfodHandler);
	}
	private LoginInfodHandler(data: any): void {
		if (data.c == 0) {
			ScreenManager.getInstance().showMainScreen(ScreenType.LOGINREWARD_VIEW, data);
		}
		if (data.c == 1) {
			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在！");
		}
	}

	private onMarketHandler(): void {
		var data1 = { e: GameRoute.EVENT_MARKETINFO, ty: 1 }
		ConnUitls.getInstance().sendReq(data1, this, this.MarketHandler);

	}
	private MarketHandler(data: any): void {
		if (data.c == 0) {
			ScreenManager.getInstance().showMainScreen(ScreenType.MARKET_VIEW, data);
		}
		if (data.c == 1) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "非法请求！");
		}

	}

	private onPersonCenter(data: any): void {
		ScreenManager.getInstance().showMainScreen(ScreenType.PERSONCENTER_VIEW, data);
	}


	private onPetManageHandler(): void {
		ScreenManager.getInstance().showMainScreen(ScreenType.PETMANAGE_VIEW, null)
	}


	private onStoreHandler(): void {
		ScreenManager.getInstance().showMainScreen(ScreenType.STORE_VIEW, null)
	}
	private onNarrowCatHandler():void{
		ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "暂未开放，敬请期待！");
	}

	private onGameHandler():void{
		ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "暂未开放，敬请期待！");
	}

	private onTravelHandler(): void {
		var pets: Array<any>;
		pets = DataCenter.getInstance().getPetInfo();

		var length1: number = pets.length;
		if (length1 == 0) {
			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "当前没有宠物可以旅行！");
			return;
		}
		var isGo = true;
		for (var i = 0; i < length1; i++) {
			if (pets[i].isM == 1) {
				isGo = false;
				break;
			}
		}
		if (isGo) {
			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "没有主宠物不可以旅行！");
			return;
		}

		var data1 = { e: GameRoute.EVENT_TRAVELINFO, uid: this.uid }
		ConnUitls.getInstance().sendReq(data1, this, this.TravelHandler);

	}
	private TravelHandler(data: any): void {
		if (data.c == 0) {
			if (data.t == 0) {
				ScreenManager.getInstance().showMainScreen(ScreenType.TRAVELNEED_VIEW, null);
			}
			if (data.t == 1) {
				ScreenManager.getInstance().showMainScreen(ScreenType.TRAVELLING_VIEW, data);
			}
			if (data.t == 2) {
				if (data.pid == 0) {
					ScreenManager.getInstance().showMainScreen(ScreenType.TRAVELGET_VIEW, data);
				}
			}
		}
		if (data.c == 1) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户编号错误");
		}

	}

	private onFeedHandler(): void {
		if (DataCenter.getInstance().getPetInfo().length == 0) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "当前没有宠物可喂养！");
			return;
		}
		var bagArr: Array<any> = DataCenter.getInstance().getBagInfo();
		var length1: number = bagArr.length;
		var tempArr: any = null;
		var tempArr1: any = null;
		var noFood: boolean = false;
		for (var i: number = 0; i < length1; i++) {
			tempArr1 = bagArr[i];
			if (tempArr1.id == 10001 && tempArr1.n <= 0) {
				noFood = true;
				tempArr1 = null;
				break;
			}
			tempArr1 = null;
		}
		if (noFood) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的粮食不足！");
			return;
		}
		if (this.styValue >= 100) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的饱食度已满");
		}

		var data: any = this.list.getItem(this.currentIndex);
		var data1 = { e: GameRoute.EVENT_FEEDPET, uid: this.uid, pid: data.id }
		ConnUitls.getInstance().sendReq(data1, this, this.FeedHandler);

	}

	private FeedHandler(data: any): void {
		var bags: Array<any>;
		var pets: Array<any>;
		bags = DataCenter.getInstance().getBagInfo();
		pets = DataCenter.getInstance().getPetInfo();
		var length: number = bags.length;
		var length1: number = pets.length;
		if (data.c == 0) {
			for (var i = 0; i < length; i++) {
				if (bags[i].id == 10001) {
					bags[i].n = data.pn;
					break;
				}
			}
			for (var i = 0; i < length1; i++) {
				if (pets[i].id == data.id) {
					if (pets[i].food <= 70) {
						pets[i].food += 30;
					} else if (pets[i].food > 70 && pets[i].food < 100) {
						pets[i].food = 100;
					}
					break;
				}
			}
			this.pbSatiety.value = data.f / 100;//饱食度
			this.styValue = data.f;
			this.lblSatiety.text = "饱食度：" + this.styValue + "/100";

		}
		if (data.c == 1) {
			console.log("用户不存在！");
		}
		if (data.c == 2) {
			console.log("宠物编号不能为空！");
		}
		if (data.c == 3) {
			console.log("宠物不存在！");
		}
		if (data.c == 4) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的宠物饱食度已满");
		}
		if (data.c == 5) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的粮食不足！");

		}

	}

	private onDrawHandler(): void {
		var data1 = { e: GameRoute.EVENT_DRAWINFO, uid: this.add };
		ConnUitls.getInstance().sendReq(data1, this, this.onGetDrawInfo);

	}
	private onGetDrawInfo(data: any): void {
		ScreenManager.getInstance().showMainScreen(ScreenType.DRAW_VIEW, data);
	}

	private onCureHandler(): void {
		if (DataCenter.getInstance().getPetInfo().length == 0) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "当前没有宠物可治疗！");
			return;
		}

		var bagArr: Array<any> = DataCenter.getInstance().getBagInfo();
		var length1: number = bagArr.length;
		var tempArr: any = null;
		var tempArr1: any = null;
		var noPills: boolean = false;
		for (var i: number = 0; i < length1; i++) {
			tempArr1 = bagArr[i];
			if (tempArr1.id == 10002 && tempArr1.n <= 0) {
				noPills = true;
				tempArr1 = null;
				break;
			}
			tempArr1 = null;
		}
		if (noPills) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的药丸不足！");
			return;
		}
		if (this.htyValue >= 100) {
			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的健康度已满");
		}
		if (this.htyValue < 100) {
			var data: any = this.list.getItem(this.currentIndex);
			var data1 = { e: GameRoute.EVENT_CUREPET, uid: this.uid, pid: data.id }
			ConnUitls.getInstance().sendReq(data1, this, this.cureHandler);
		}
	}

	private cureHandler(data: any): void {
		var bags: Array<any>;
		var pets: Array<any>;
		bags = DataCenter.getInstance().getBagInfo();
		pets = DataCenter.getInstance().getPetInfo();
		var length: number = bags.length;
		var length1: number = pets.length;
		if (data.c == 0) {
			for (var i = 0; i < length; i++) {
				if (bags[i].id == 10002) {
					bags[i].n = data.pn;
					break;
				}
			}
			for (var i = 0; i < length1; i++) {
				if (pets[i].id == data.id) {
					if (pets[i].healthy <= 80) {
						pets[i].healthy += 20;
					} else if (pets[i].food > 80 && pets[i].food < 100) {
						pets[i].food = 100;
					}

				}
			}
			this.pbHealthy.value = data.h / 100;//健康度
			this.htyValue = data.h;
			this.lblHealthy.text = "健康度：" + this.htyValue + "/100";

		}
		if (data.c == 1) {
			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "用户不存在！");

		}
		if (data.c == 2) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物编号不能为空！");


		}
		if (data.c == 3) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "宠物不存在！");


		}
		if (data.c == 4) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的宠物没有生病");
		}
		if (data.c == 5) {

			ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "您的粮食不足！");

		}

	}

	private onBagHandler(): void {
		ScreenManager.getInstance().showMainScreen(ScreenType.BAG_VIEW, null)
	}

	private onArrowLeftHandler(): void {
		// var bagArr:Array<any>=DataCenter.getInstance().getBagInfo();
		// var petsArr:Array<any>=DataCenter.getInstance().getPetInfo();
		var currentFood: number;
		var currentHealthy: number;
		this.currentIndex -= 1;
		var id: number;
		if (this.currentIndex <= 0) {
			this.currentIndex = 0;
		}
		id = this.list.getItem(this.currentIndex).id;
		var pets = DataCenter.getInstance().getPetInfo();
		var size = pets.length;
		var status: number = 0;
		var isMainPet: boolean = false;
		for (var i = 0; i < size; i++) {
			if (id == pets[i].id) {
				currentFood = pets[i].food;
				currentHealthy = pets[i].healthy;
				status = pets[i].status;
				isMainPet = pets[i].isM;
				break;
			}
		}

		if (status == 1) {
			this.lblSelling.visible = true;
			this.bgSelling.visible = true;
		} else {
			this.lblSelling.visible = false;
			this.bgSelling.visible = false;
		}
		this.lblMainPet.visible = isMainPet;
		this.bgMainPet.visible = isMainPet;

		this.list.scrollTo(this.currentIndex);
		this.styValue = currentFood;
		this.htyValue = currentHealthy;
		this.pbSatiety.value = currentFood / 100;
		this.pbHealthy.value = currentHealthy / 100;
		this.lblSatiety.text = "饱食度" + this.styValue + "/100";
		this.lblHealthy.text = "健康度" + this.htyValue + "/100";
	}

	private onArrowRightHandler(): void {
		var currentFood: number;
		var currentHealthy: number;
		this.currentIndex += 1;
		var id: number;
		if (this.currentIndex >= this.list.totalPage) {
			this.currentIndex = this.list.totalPage - 1;
		}
		id = this.list.getItem(this.currentIndex).id;
		var pets = DataCenter.getInstance().getPetInfo();
		var size = pets.length;
		var status: number = 0;
		var isMainPet: boolean = false;

		for (var i = 0; i < size; i++) {
			if (id == pets[i].id) {
				currentFood = pets[i].food;
				currentHealthy = pets[i].healthy;
				break;
			}
		}

		if (status == 1) {
			this.lblSelling.visible = true;
			this.bgSelling.visible = true;
		} else {
			this.lblSelling.visible = false;
			this.bgSelling.visible = false;
		}
		this.lblMainPet.visible = isMainPet;
		this.bgMainPet.visible = isMainPet;

		this.list.scrollTo(this.currentIndex);
		this.list.scrollTo(this.currentIndex);
		this.styValue = currentFood;
		this.htyValue = currentHealthy;
		this.pbSatiety.value = currentFood / 100;
		this.pbHealthy.value = currentHealthy / 100;
		this.lblSatiety.text = "饱食度" + this.styValue + "/100";
		this.lblHealthy.text = "健康度" + this.htyValue + "/100";

	}

	private onAdvantureHandler(): void {
		ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "暂未开放，敬请期待！");
		//ScreenManager.getInstance().showMainScreen(ScreenType.ADVANTURE_VIEW, null)
	}

	// private setup(): void {
	// 	var w: number = 320;
	// 	var h: number = 650;
	// 	var endY: number = Laya.stage.height / 2 + 100;
	// 	var offset: number = Laya.stage.width - w >> 1;

	// 	var letterText: Laya.Text = this.createLetter(this.Tips);
	// 	letterText.x = offset + 120;
	// 	letterText.y = Laya.stage.height / 2;
	// 	var tw = Laya.Tween.to(letterText, { y: endY }, 0, Laya.Ease.elasticOut, new Laya.Handler(this, this.onComplete, [letterText]), 1000);

	// }

	// private onComplete(letterText: Laya.Text): void {
	// 	letterText.removeSelf();
	// }
	// private createLetter(char: string): Laya.Text {
	// 	var letter: Laya.Text = new Laya.Text();
	// 	letter.text = char;
	// 	letter.color = "#FF0000";
	// 	letter.font = "SimHei";
	// 	letter.fontSize = 20;
	// 	Laya.stage.addChild(letter);
	// 	return letter;
	// }



	//创建宠物list
	private petCreateList(): void {

		var list = this.list;
		list.itemRender = PetCreate;
		var arr: Array<any> = [];
		// var dataArr: Array<any> = data.pets;
		var dataArr: Array<any> = DataCenter.getInstance().getPetInfo();
		this.list.selectEnable = false;
		// console.log("PetCreate=====" + data.id);
		var i: number = 0, tempObj: any = null;
		var size: number = dataArr.length;
		var path: any = null;
		for (; i < size; i++) {
			tempObj = dataArr[i];
			path = {};
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
			arr.push(path);
		}

		list.repeatX = 1;
		list.repeatY = 1;
		list.spaceX = 50;
		list.anchorX = 0.5;
		list.anchorY = 0.5;
		list.x = Laya.stage.width / 2;
		list.y = Laya.stage.height / 2;
		list.width = 600;
		list.height = 600;

		// list.autoSize=true;
		// 使用但隐藏滚动条
		list.hScrollBarSkin = "";
		list.selectEnable = true;
		list.mouseThrough = true;
		list.mouseEnabled = true;
		list.renderHandler = new Laya.Handler(this, this.updateItem);
		list.selectHandler = new Laya.Handler(this, this.onSelect);
		// this.addChildAt(list, 1);
		//  this.addChild(list);
		list.array = arr;
		list.startIndex = 0;
		list.refresh();

	}
	private updateItem(cell: PetCreate, index: number): void {
		console.log("index==" + index);
		console.log("page==" + this.list.page);
		cell.init(cell.dataSource);

	}
	private onSelect(index: number): void {
		console.log("当前选择的索引：" + index);
	}
}


