/**
* name 
*/


module com.hellokimi.pet.utils {
	import Sprite = Laya.Sprite;

	export class ScreenManager {
		private static _singleton: Boolean = true;
		private static _instance: ScreenManager;

		private currentView: any;
		private _ViewArry: Array<any> = [];
		private letter: Laya.Text = new Laya.Text();
		private isTiping:boolean=false;
		/**
		 *  最顶层  
		 */
		private _topLayer: Sprite;
		/**
		 * 中间层 
		 */
		private _middleLayer: Sprite;
		/**
		 * 最底层
		 */
		private _lastLayer: Sprite;

		public initLayerInfo(topLayer: Sprite, middleLayer: Sprite, last: Sprite): void {

			this._topLayer = topLayer;
			this._middleLayer = middleLayer;
			this._lastLayer = last;

		}

		public static getInstance(): ScreenManager {
			if (!this._instance) {
				this._singleton = false;
				this._instance = new ScreenManager();
				this._singleton = true;
			}
			return this._instance;
		}
		public closeView(screenType: number): void {
			var length: number = this._ViewArry.length, tempObj: any = null;
			for (var i: number = 0; i < length; i++) {
				tempObj = this._ViewArry[i];
				if (tempObj != null && tempObj.screenType == screenType && tempObj.view != null) {
					tempObj.view.removeSelf();
					this._ViewArry[i] = null;
					tempObj = null;
					break;
				}
				tempObj = null;
			}

		}

		/**
				 * 
				 * @param	screenType
				 * @param	data
				 * * @param	topLayer  是否最上层，默认为非最上层
				 */
		public showMainScreen(screenType: Number, data: any = null): void {
			var self = this;

			switch (screenType) {
				case ScreenType.LOGIN_VIEW:
					self.currentView = new login(data);
					break;
				case ScreenType.REGIST_VIEW:
					self.currentView = new regist(data);
					break;
				case ScreenType.MAIN_VIEW:
					self.currentView = new MainView(data);
					break;
				case ScreenType.MARKET_VIEW:
					self.currentView = new market(data);
					break;
				case ScreenType.STORE_VIEW:
					self.currentView = new store();
					break;
				case ScreenType.BAG_VIEW:
					self.currentView = new bag();
					break;
				case ScreenType.PETMANAGE_VIEW:
					self.currentView = new petManage(data);
					break;
				case ScreenType.DRAW_VIEW:
					self.currentView = new draw(data);
					break;
				case ScreenType.PERSONCENTER_VIEW:
					self.currentView = new personcenter(data);
					break;
				case ScreenType.ADVANTURE_VIEW:
					self.currentView = new advanture();
					break;
				case ScreenType.TRAVEL_VIEW:
					self.currentView = new travel(data);
					break;
				case ScreenType.DRAWGET_VIEW:
					self.currentView = new drawGet(data);
					break;
				case ScreenType.PETDETAIL_VIEW:
					self.currentView = new PetDetail(data);
					break;
				case ScreenType.STOREBUY_VIEW:
					self.currentView = new storeBuy(data);
					break;
				case ScreenType.PETSELL_VIEW:
					self.currentView = new PetSell(data);
					break;
				case ScreenType.TRAVELGET_VIEW:
					self.currentView = new TraveGet(data);
					break;
				case ScreenType.TRAVELNEED_VIEW:
					self.currentView = new TravelNeed();
					break;
				case ScreenType.LOGINREWARD_VIEW:
					self.currentView = new LoginReward(data);
					break;
				case ScreenType.TRAVELLING_VIEW:
					self.currentView = new Travelling(data);
					break;
				case ScreenType.PUSHINFO_VIEW:
					self.currentView = new PushDetail(data);
					break;
				case ScreenType.OUT_VIEW:
					self.currentView = new Out();
					break;
				case ScreenType.BINDING_VIEW:
					self.currentView = new binding();
					break;
				case ScreenType.MARKETBUY_VIEW:
					self.currentView = new marketBuy(data);
					break;
				case ScreenType.TIP_VIEW:
					this.showTipInfo(data);
					//	this._topLayer.addChild
					break;
				case ScreenType.PET_DESTROY:
					self.currentView=new petDestroy(data);
					break;
				default:
					break;

			}
			if(screenType==ScreenType.TIP_VIEW){
				return;
			}

			if (screenType == ScreenType.MAIN_VIEW) {
				this._lastLayer.addChild(self.currentView);
			} else {
				this._middleLayer.addChild(self.currentView);
			}

			var obj: Object = { screenType: screenType, view: self.currentView };
			self._ViewArry.push(obj);

		}

		public getCurScene(): any {
			return this.currentView;
		}

		private showTipInfo(tipInfo:string): void {
			if(this.isTiping){
				return;
			}
			this.isTiping=true;
			var endY: number = Laya.stage.height / 2 + 100;
	
			var letterText: Laya.Text = this.createLetter(tipInfo);
			this.letter.scale(0.1,0.1)
			letterText.x = Laya.stage.width/2;
			letterText.y = Laya.stage.height / 2;
			Laya.Tween.to(letterText, { scaleX: 1,scaleY:1}, 1000, Laya.Ease.elasticOut, new Laya.Handler(this, this.onComplete, [letterText]));

		}

		private onComplete(letterText: Laya.Text): void {
			var targetY:number=letterText.y-150;
			Laya.Tween.to(letterText, { y:targetY}, 1000, Laya.Ease.quartIn, new Laya.Handler(this, this.onXYComplete, [letterText]));
		}

		private onXYComplete(letterText: Laya.Text):void{
				letterText.removeSelf();
				this.isTiping=false;
		}

		private createLetter(char: string): Laya.Text {
			this.letter.align="center";
			this.letter.text = char;
			this.letter.color = "#FF0000";
			this.letter.font = "SimHei";
			this.letter.fontSize = 26;
			this.letter.width=Laya.stage.width;
			this.letter.pivotX=Laya.stage.width/2;
			this._topLayer.addChild(this.letter);
			return this.letter;
		}

	}
}