/**
* name 
*/

	import ScreenManager=com.hellokimi.pet.utils.ScreenManager;
	import ScreenType=com.hellokimi.pet.utils.ScreenType;
	import Sprite=Laya.Sprite;

	class Game{

		private topLayer:Sprite;
		private middleLayer:Sprite;
		private bottomLayer:Sprite;

		constructor(){
			Laya.init(720,1280);
			
			Laya.stage.alignH=Laya.Stage.ALIGN_CENTER;
			Laya.stage.alignV=Laya.Stage.ALIGN_MIDDLE;
			Laya.stage.scaleMode=Laya.Stage.SCALE_SHOWALL;

			this.bottomLayer=new Sprite();
			Laya.stage.addChild(this.bottomLayer);
			this.middleLayer=new Sprite();
			Laya.stage.addChild(this.middleLayer);
			this.topLayer=new Sprite();
			Laya.stage.addChild(this.topLayer);

			ScreenManager.getInstance().initLayerInfo(this.topLayer,this.middleLayer,this.bottomLayer);
			
        //添加图集数组
        	var resArray:Array<any>=[
            {url:"res/atlas/res/share.atlas",type:Laya.Loader.ATLAS},
            {url:"res/atlas/res/bag.atlas",type:Laya.Loader.ATLAS},
            {url:"res/atlas/res/main.atlas",type:Laya.Loader.ATLAS},
            {url:"res/atlas/res/pet.atlas",type:Laya.Loader.ATLAS},
            {url:"res/share/daojumiaoshukuang.png",type:Laya.Loader.IMAGE},
            {url:"res/share/chongwuda.png",type:Laya.Loader.IMAGE},
			{url:"res/atlas/res/travel.atlas",type:Laya.Loader.ATLAS},
			{url:"res/person/gerenzhongxinbg2.png",type:Laya.Loader.IMAGE},
			{url:"res/share/denglubg.png",type:Laya.Loader.IMAGE},
			{url:"res/share/logo.png",type:Laya.Loader.IMAGE},
			{url:"res/atlas/res/person.atlas",type:Laya.Loader.ATLAS}
			];
        	Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoaded));
		}

		 private onLoaded():void{
			 ScreenManager.getInstance().showMainScreen(ScreenType.LOGIN_VIEW,null);
     	}
      
	}

new Game();	

