
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.beibao {
    export class beibaoUI extends Dialog {
		public bgBig:Laya.Image;
		public bgBagTItle:Laya.Image;
		public lblBag:Laya.Label;
		public btnClose:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgBig","skin":"res/share/bg.png","name":"bgBig"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgBagTItle","skin":"res/share/dingbutiao.png","name":"bgBagTItle"}},{"type":"Label","props":{"y":28,"x":313.1015625,"var":"lblBag","text":"背包","strokeColor":"#6c5545","stroke":2,"name":"lblBag","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":4,"x":650,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.beibao.beibaoUI.uiView);
        }
    }
}

module ui.beibao {
    export class beibaochushouUI extends Dialog {
		public bgSellTool:Laya.Image;
		public bgSellToolTitle:Laya.Image;
		public btnClose:Laya.Button;
		public lblSellTool:Laya.Label;
		public btnOK:Laya.Button;
		public bgToolDesc:Laya.Image;
		public lblToolName:Laya.Label;
		public imgTool:Laya.Image;
		public lblToolDesc:Laya.Label;
		public btnReduce10:Laya.Button;
		public btnReduce1:Laya.Button;
		public btnAdd1:Laya.Button;
		public btnAdd10:Laya.Button;
		public bgNumber:Laya.Image;
		public lblNumber:Laya.Label;
		public lblPriceTitle:Laya.Label;
		public bgPrice:Laya.Image;
		public lblPrice:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgSellTool","skin":"res/share/bgzhong.png","name":"bgSellTool"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgSellToolTitle","skin":"res/share/dingbutiaozhong.png","name":"bgSellToolTitle"}},{"type":"Button","props":{"y":4,"x":478,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":32,"x":226,"var":"lblSellTool","text":"出售","strokeColor":"#6c5545","stroke":2,"name":"lblSellTool","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":477,"x":211,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}},{"type":"Image","props":{"y":125,"x":16,"var":"bgToolDesc","skin":"res/share/daojumiaoshukuang.png","name":"bgToolDesc"}},{"type":"Label","props":{"y":151,"x":162,"var":"lblToolName","text":"道具名称","name":"lblToolName","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":151,"x":31,"var":"imgTool","skin":"res/share/daojukuang.png","name":"imgTool"}},{"type":"Label","props":{"y":182,"x":162,"var":"lblToolDesc","text":"道具描述...","name":"lblToolDesc","fontSize":24,"font":"SimHei","color":"#5a5a5a"}},{"type":"Button","props":{"y":343,"x":27,"var":"btnReduce10","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnReduce10","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"-10"}},{"type":"Button","props":{"y":343,"x":114,"var":"btnReduce1","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnReduce1","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"-1"}},{"type":"Button","props":{"y":343,"x":358,"var":"btnAdd1","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnAdd1","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"+1"}},{"type":"Button","props":{"y":343,"x":448,"var":"btnAdd10","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnAdd10","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"+10"}},{"type":"Image","props":{"y":349,"x":194,"var":"bgNumber","skin":"res/share/shuliangkuang.png","name":"bgNumber"}},{"type":"Label","props":{"y":361,"x":210,"width":125,"var":"lblNumber","text":"0","strokeColor":"#000000","stroke":2,"name":"lblNumber","height":30,"fontSize":30,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":437,"x":196,"var":"lblPriceTitle","text":"价格：","name":"lblPriceTitle","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":435,"x":267,"var":"bgPrice","skin":"res/share/jiagekuang.png","name":"bgPrice"}},{"type":"Label","props":{"y":436,"x":275,"width":125,"var":"lblPrice","text":"0","strokeColor":"#000000","stroke":1,"name":"lblPrice","height":26,"fontSize":24,"font":"SimHei","color":"#41ff06","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.beibao.beibaochushouUI.uiView);
        }
    }
}

module ui.beibao {
    export class beibaodaojukuangUI extends Dialog {
		public bgTool:Laya.Image;
		public imgTool:Laya.Image;
		public lblToolName:Laya.Label;
		public lblNum:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":140,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgTool","skin":"res/bag/beibaodaojukuang.png","name":"bgTool"}},{"type":"Image","props":{"y":53,"x":32,"var":"imgTool","skin":"res/share/daojukuang.png","scaleY":0.7,"scaleX":0.7,"name":"imgTool"}},{"type":"Label","props":{"y":11,"x":34,"width":77,"var":"lblToolName","text":"名称","name":"lblToolName","height":18,"fontSize":18,"font":"SimHei","color":"#524c2e","bold":true,"align":"center"}},{"type":"Label","props":{"y":171,"x":101,"var":"lblNum","text":"999","name":"lblNum","fontSize":20,"font":"SimHei","color":"#524c2e"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.beibao.beibaodaojukuangUI.uiView);
        }
    }
}

module ui.chongwuguanli {
    export class chongwuchushouUI extends Dialog {
		public bgPetSell:Laya.Image;
		public bgTitlePetSell:Laya.Image;
		public lblPetSell:Laya.Label;
		public lblPriceTitle:Laya.Label;
		public bgPrice:Laya.Image;
		public btnSell:Laya.Button;
		public btnClose:Laya.Button;
		public tiPrice:Laya.TextInput;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgPetSell","skin":"res/share/bgzhong.png","name":"bgPetSell"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgTitlePetSell","skin":"res/share/dingbutiaozhong.png","name":"bgTitlePetSell"}},{"type":"Label","props":{"y":27,"x":179,"var":"lblPetSell","text":"宠物出售","strokeColor":"#6c5545","stroke":2,"name":"lblPetSell","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Label","props":{"y":445,"x":192,"var":"lblPriceTitle","text":"价格：","name":"lblPriceTitle","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":443,"x":263,"var":"bgPrice","skin":"res/share/jiagekuang.png","name":"bgPrice"}},{"type":"Button","props":{"y":491,"x":219,"var":"btnSell","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnSell","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"出售"}},{"type":"Button","props":{"y":9,"x":466,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"TextInput","props":{"y":445,"x":285,"var":"tiPrice","text":"999","name":"tiPrice","fontSize":24,"font":"simHei","color":"#41ff06","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.chongwuguanli.chongwuchushouUI.uiView);
        }
    }
}

module ui.chongwuguanli {
    export class chongwuguanliUI extends View {
		public bgPetManageTitle:Laya.Image;
		public btnClose:Laya.Button;
		public lblPetManageTitle:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"res/share/bg.png","name":"bg"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgPetManageTitle","skin":"res/share/dingbutiao.png","name":"bgPetManageTitle"}},{"type":"Button","props":{"y":11,"x":636,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":28,"x":266,"var":"lblPetManageTitle","text":"宠物管理","strokeColor":"#6c5545","stroke":2,"name":"lblPetManageTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.chongwuguanli.chongwuguanliUI.uiView);
        }
    }
}

module ui.chongwuguanli {
    export class chongwuxiangxiUI extends Dialog {
		public bgPetDetail:Laya.Image;
		public bgPetDetailTitle:Laya.Image;
		public lblPetDetailTitle:Laya.Label;
		public btnClose:Laya.Button;
		public lblPetNameTitle:Laya.Label;
		public bgPetName:Laya.Image;
		public btnModify:Laya.Button;
		public btnMainPet:Laya.Button;
		public btnDestroy:Laya.Button;
		public btnSell:Laya.Button;
		public tiPetName:Laya.TextInput;
		public bgMainPet:Laya.Image;
		public lblMainPet:Laya.Label;
		public bgSelling:Laya.Image;
		public lblSelling:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgPetDetail","skin":"res/person/bgda.png","name":"bgPetDetail"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgPetDetailTitle","skin":"res/person/dingbutiaoda.png","name":"bgPetDetailTitle"}},{"type":"Label","props":{"y":30,"x":231,"var":"lblPetDetailTitle","text":"宠物详细","strokeColor":"#6c5545","stroke":2,"name":"lblPetDetailTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":10,"x":576,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":164,"x":86,"var":"lblPetNameTitle","text":"昵称：","name":"lblPetNameTitle","fontSize":36,"font":"SimHei","color":"#3f2b1f"}},{"type":"Image","props":{"y":155,"x":186,"var":"bgPetName","skin":"res/pet/nichengkuang.png","name":"bgPetName"}},{"type":"Button","props":{"y":153,"x":479,"var":"btnModify","stateNum":1,"skin":"res/pet/btn_anniuxiugai.png","name":"btnModify","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"修改"}},{"type":"Button","props":{"y":676,"x":36,"var":"btnMainPet","stateNum":1,"skin":"res/share/btn_huanganniuda.png","name":"btnMainPet","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"主宠物"}},{"type":"Button","props":{"y":676,"x":480,"var":"btnDestroy","stateNum":1,"skin":"res/share/btn_honganniuda.png","name":"btnDestroy","labelStrokeColor":"#8b2217","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"销毁"}},{"type":"Button","props":{"y":676,"x":260,"var":"btnSell","stateNum":1,"skin":"res/share/btn_huanganniuda.png","name":"btnSell","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"出售"}},{"type":"TextInput","props":{"y":159,"x":198,"width":237,"var":"tiPetName","text":"狗狗狗狗子","name":"tiPetName","height":46,"fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":233,"x":73,"var":"bgMainPet","skin":"res/pet/dazhutubiaobg.png","name":"bgMainPet"}},{"type":"Label","props":{"y":242,"x":83,"var":"lblMainPet","text":"主","strokeColor":"#2d9e16","stroke":1,"name":"lblMainPet","fontSize":35,"font":"SimHei","color":"#ffffff"}},{"type":"Image","props":{"y":292,"x":74,"var":"bgSelling","skin":"res/pet/dashoutubiaobg.png","name":"bgSelling"}},{"type":"Label","props":{"y":301,"x":83,"var":"lblSelling","text":"售","strokeColor":"#2d9e16","stroke":1,"name":"lblSelling","fontSize":35,"font":"SimHei","color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.chongwuguanli.chongwuxiangxiUI.uiView);
        }
    }
}

module ui.chongwuguanli {
    export class chongwuxianshikuangUI extends View {
		public bgPetSatiety:Laya.Image;
		public bgMainPet:Laya.Image;
		public lblMainPet:Laya.Label;
		public pbSatiety:Laya.ProgressBar;
		public bgSatietyTitle:Laya.Image;
		public lblSatietyTitle:Laya.Label;
		public lblSatiety:Laya.Label;
		public lblPetName:Laya.Label;
		public bgHealthyTitle:Laya.Image;
		public pbHealthy:Laya.ProgressBar;
		public lblHealthy:Laya.Label;
		public bgSelling:Laya.Image;
		public lblSelling:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":222,"height":288},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgPetSatiety","skin":"res/share/kuangda.png","name":"bgPetSatiety"}},{"type":"Image","props":{"y":8,"x":15,"var":"bgMainPet","skin":"res/pet/zhutubiaobg.png","name":"bgMainPet"}},{"type":"Label","props":{"y":15,"x":22,"var":"lblMainPet","text":"主","strokeColor":"#2d9e16","stroke":1,"name":"lblMainPet","fontSize":20,"font":"SimHei","color":"#ffffff"}},{"type":"ProgressBar","props":{"y":231,"x":85,"var":"pbSatiety","skin":"res/pet/baoshidutiaoxiao.png","name":"pbSatiety"}},{"type":"Image","props":{"y":231,"x":24,"var":"bgSatietyTitle","skin":"res/pet/baoshidutubiaobg.png","name":"bgSatietyTitle"}},{"type":"Label","props":{"y":234,"x":25,"var":"lblSatietyTitle","text":"饱食度","name":"lblSatietyTitle","fontSize":18,"font":"SimHei","color":"#ffffff"}},{"type":"Label","props":{"y":233,"x":105,"var":"lblSatiety","text":"100/100","name":"lblSatiety","fontSize":20,"font":"SimHei","color":"#4d4c35"}},{"type":"Label","props":{"y":15,"x":90,"var":"lblPetName","text":"昵称","name":"lblPetName","fontSize":24,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":257,"x":24,"var":"bgHealthyTitle","skin":"res/pet/baoshidutubiaobg.png","name":"bgHealthyTitle"}},{"type":"Label","props":{"y":260,"x":25,"text":"饱食度","name":"lblHealthyTitle","fontSize":18,"font":"SimHei","color":"#ffffff"}},{"type":"ProgressBar","props":{"y":257,"x":85,"var":"pbHealthy","skin":"res/pet/jiankangdutiaoxiao.png","name":"pbHealthy"}},{"type":"Label","props":{"y":259,"x":104,"var":"lblHealthy","text":"100/100","name":"lblHealthy","fontSize":20,"font":"SimHei","color":"#4d4c35"}},{"type":"Image","props":{"y":48,"x":15,"var":"bgSelling","skin":"res/pet/shoutubiaobg.png","name":"bgSelling"}},{"type":"Label","props":{"y":54,"x":21,"width":20,"var":"lblSelling","text":"售","strokeColor":"#2d9e16","stroke":1,"name":"lblSelling","height":20,"fontSize":20,"font":"SimHei","color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.chongwuguanli.chongwuxianshikuangUI.uiView);
        }
    }
}

module ui.chongwuguanli {
    export class chongwuxiaohuiUI extends Dialog {
		public bgAsk:Laya.Image;
		public lblAsk:Laya.Label;
		public btnCancel:Laya.Button;
		public btnOK:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgAsk","skin":"res/pet/bgxiao.png","name":"bgAsk"}},{"type":"Label","props":{"y":45,"x":86,"var":"lblAsk","text":"是否销毁此宠物?","name":"lblAsk","fontSize":30,"font":"SimHei","color":"#524c2e"}},{"type":"Button","props":{"y":161,"x":37,"var":"btnCancel","stateNum":1,"skin":"res/pet/btn_anniuquxiao.png","name":"btnCancel","labelStrokeColor":"#8b2217","labelStroke":2,"labelSize":28,"labelColors":"#ffffff","label":"取消"}},{"type":"Button","props":{"y":161,"x":230,"var":"btnOK","stateNum":1,"skin":"res/pet/btn_anniuqueding.png","name":"btnOK","labelStrokeColor":"#166d2f","labelStroke":2,"labelSize":28,"labelColors":"#ffffff","label":"确定"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.chongwuguanli.chongwuxiaohuiUI.uiView);
        }
    }
}

module ui.gerenzhongxin {
    export class bangdingUI extends Dialog {
		public imgBindingBg:Laya.Image;
		public imgBindingBg2:Laya.Image;
		public imgBindingTitle:Laya.Image;
		public lblGetAddressTitel:Laya.Label;
		public imgGetAddress:Laya.Image;
		public tiGetAddress:Laya.TextInput;
		public imgIdentity:Laya.Image;
		public tiIdentity:Laya.TextInput;
		public btnGetIden:Laya.Button;
		public lblPhoneIDTitel:Laya.Label;
		public lblBindingTitle:Laya.Label;
		public btnClose:Laya.Button;
		public lblTIps:Laya.Label;
		public btnOK:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"imgBindingBg","skin":"res/person/bgbangding.png","name":"imgBindingBg"}},{"type":"Image","props":{"y":156,"x":18,"var":"imgBindingBg2","skin":"res/person/gerenzhongxinbgbangding.png","name":"imgBindingBg2"}},{"type":"Image","props":{"y":0,"x":0,"var":"imgBindingTitle","skin":"res/person/dingbutiaoda.png","name":"imgBindingTitle"}},{"type":"Label","props":{"y":217,"x":37,"var":"lblGetAddressTitel","text":"提现地址：","name":"lblGetAddressTitel","fontSize":33,"font":"SimHei","color":"#000000","bold":true}},{"type":"Image","props":{"y":201,"x":191,"var":"imgGetAddress","skin":"res/person/baikuang.png","name":"imgGetAddress"}},{"type":"TextInput","props":{"y":206,"x":199,"width":423,"var":"tiGetAddress","prompt":"请输入接收者xkc地址","name":"tiGetAddress","height":57,"fontSize":30,"font":"SimHei"}},{"type":"Image","props":{"y":373,"x":224,"width":206,"var":"imgIdentity","skin":"res/person/baikuang.png","name":"imgIdentity","height":64}},{"type":"TextInput","props":{"y":376,"x":230,"width":194,"var":"tiIdentity","prompt":"请输入验证码","name":"tiIdentity","height":57,"fontSize":30,"font":"SimHei"}},{"type":"Button","props":{"y":380,"x":447,"var":"btnGetIden","stateNum":1,"skin":"res/share/btn_yanzhengma.png","name":"btnGetIdentity","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"获取验证码"}},{"type":"Label","props":{"y":387,"x":32,"var":"lblPhoneIDTitel","text":"手机验证码：","name":"lblPhoneIDTitel","fontSize":33,"font":"SimHei","color":"#000000","bold":true}},{"type":"Label","props":{"y":28,"x":288,"var":"lblBindingTitle","text":"绑定","strokeColor":"#6c5545","stroke":2,"name":"lblBindingTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":11,"x":589,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":287,"x":271,"var":"lblTIps","text":"一经设置不得修改","name":"lblTIps","fontSize":25,"font":"SimHei","color":"#f90501","bold":true}},{"type":"Button","props":{"y":526,"x":264,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确认"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gerenzhongxin.bangdingUI.uiView);
        }
    }
}

module ui.gerenzhongxin {
    export class gerenzhongxinUI extends View {
		public bgPersonCenter:Laya.Image;
		public bgPersonCenterTitle:Laya.Image;
		public btnClose:Laya.Button;
		public lblPesonCenterTitle:Laya.Label;
		public btnDetail:Laya.Button;
		public bgXkc:Laya.Image;
		public btnCopyAddress:Laya.Button;
		public lblMyAddressTitle:Laya.Label;
		public lblMyAddress:Laya.Label;
		public lblBalanceTitle:Laya.Label;
		public lblAddressTitle:Laya.Label;
		public bgBalance:Laya.Image;
		public bgAddress:Laya.Image;
		public lblTips:Laya.Label;
		public btnIntoXkc:Laya.Button;
		public btnflash:Laya.Button;
		public lblBalance:Laya.Label;
		public lblAddress:Laya.Label;
		public btnBinding:Laya.Button;
		public lblBinding:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgPersonCenter","skin":"res/share/bg.png","name":"bgPersonCenter"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgPersonCenterTitle","skin":"res/share/dingbutiao.png","name":"bgPersonCenterTitle"}},{"type":"Button","props":{"y":6,"x":647,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":26,"x":266,"var":"lblPesonCenterTitle","text":"个人中心","strokeColor":"#6c5545","stroke":2,"name":"lblPesonCenterTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":109,"x":9,"var":"btnDetail","stateNum":1,"skin":"res/share/btn_fuzhiyaoqingdizhianniu.png","name":"btnDetail","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":22,"labelFont":"SimHei","labelColors":"#ffffff","label":"推广详情"}},{"type":"Image","props":{"y":378,"x":8,"var":"bgXkc","skin":"res/person/gerenzhongxinbg2.png","name":"bgXkc"}},{"type":"Image","props":{"y":217,"x":8,"skin":"res/person/gerenzhongxinbg.png"}},{"type":"Button","props":{"y":240,"x":537,"var":"btnCopyAddress","stateNum":1,"skin":"res/share/btn_fuzhiyaoqingdizhianniu.png","name":"btnCopyAddress","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":22,"labelFont":"SimHei","labelColors":"#ffffff","label":"复制邀请地址"}},{"type":"Label","props":{"y":238,"x":29,"var":"lblMyAddressTitle","text":"我的邀请地址：","name":"lblMyAddressTitle","fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":284,"x":35,"var":"lblMyAddress","text":"http://dddddddddddddddddddd","name":"lblMyAddress","fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":474,"x":28,"var":"lblBalanceTitle","text":"xkc余额：","name":"lblBalanceTitle","fontSize":36,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":601,"x":26,"var":"lblAddressTitle","text":"地址：","name":"lblAddressTitle","fontSize":36,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":458,"x":224,"var":"bgBalance","skin":"res/person/baikuang.png","name":"bgBalance"}},{"type":"Image","props":{"y":586,"x":128,"width":545,"var":"bgAddress","skin":"res/person/baikuang.png","name":"bgAddress","height":64}},{"type":"Label","props":{"y":679,"x":353,"var":"lblTips","text":"此地址可转入xkc","name":"lblTips","fontSize":24,"font":"SimHei","color":"#e90a0a"}},{"type":"Button","props":{"y":904,"x":143,"var":"btnIntoXkc","stateNum":1,"skin":"res/share/btn_huanganniuda.png","name":"btnIntoXkc","labelStrokeColor":"#4b2015","labelStroke":3,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"转出xkc"}},{"type":"Button","props":{"y":904,"x":467,"var":"btnflash","stateNum":1,"skin":"res/share/btn_lvanniuda.png","name":"btnflash","labelStrokeColor":"#166d2f","labelStroke":3,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"刷新"}},{"type":"Label","props":{"y":476,"x":242,"var":"lblBalance","text":"0","name":"lblBalance","fontSize":35,"font":"SimHei"}},{"type":"Label","props":{"y":608,"x":146,"var":"lblAddress","text":"http://dddddddddddddddddddd","name":"lblAddress","fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":1025,"x":450,"text":"请充值10秒后刷新","name":"lblMyAddressTitle","fontSize":25,"font":"SimHei","color":"#000000","bold":true}},{"type":"Button","props":{"y":109,"x":199,"var":"btnBinding","stateNum":1,"skin":"res/share/btn_honganniu.png","name":"btnBinding","labelStrokeColor":"#8b2217","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"绑定"}},{"type":"Label","props":{"y":185,"x":202,"var":"lblBinding","text":"绑定提现帐号","name":"lblBinding","fontSize":20,"font":"SimHei","color":"#000000"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gerenzhongxin.gerenzhongxinUI.uiView);
        }
    }
}

module ui.gerenzhongxin {
    export class tuiguangxiangqingUI extends Dialog {
		public bgExtension:Laya.Image;
		public bgExtensionTile:Laya.Image;
		public btnClose:Laya.Button;
		public lblExtensionTile:Laya.Label;
		public lblGetTimeTitle:Laya.Label;
		public lblGetTime:Laya.Label;
		public lblGetXkcTitle:Laya.Label;
		public lblGetXkc:Laya.Label;
		public lblShareNumbTitle:Laya.Label;
		public lblPushNumb:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgExtension","skin":"res/share/bgzhong.png","name":"bgExtension"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgExtensionTile","skin":"res/share/dingbutiaozhong.png","name":"bgExtensionTile"}},{"type":"Button","props":{"y":4,"x":477,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":32,"x":179,"var":"lblExtensionTile","text":"推广详情","strokeColor":"#6c5545","stroke":2,"name":"lblExtensionTile","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Label","props":{"y":176,"x":43,"var":"lblGetTimeTitle","text":"获得抽奖次数：","name":"lblGetTimeTitle","fontSize":28,"font":"SimHei","color":"#000000","bold":true}},{"type":"Label","props":{"y":176,"x":399,"var":"lblGetTime","text":"2588","name":"lblGetTime","fontSize":28,"font":"SimHei","color":"#2e9e12"}},{"type":"Label","props":{"y":289,"x":43,"var":"lblGetXkcTitle","text":"获得xkc币数：","name":"lblGetXkcTitle","fontSize":28,"font":"SimHei","color":"#000000","bold":true}},{"type":"Label","props":{"y":289,"x":399,"var":"lblGetXkc","text":"365000","name":"lblGetXkc","fontSize":28,"font":"SimHei","color":"#2e9e12"}},{"type":"Label","props":{"y":396,"x":43,"var":"lblShareNumbTitle","text":"推广人数：","name":"lblShareNumbTitle","fontSize":28,"font":"SimHei","color":"#000000","bold":true}},{"type":"Label","props":{"y":396,"x":399,"var":"lblPushNumb","text":"99","name":"lblPushNumb","fontSize":28,"font":"SimHei","color":"#2e9e12"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gerenzhongxin.tuiguangxiangqingUI.uiView);
        }
    }
}

module ui.gerenzhongxin {
    export class zhuanchuUI extends Dialog {
		public imgBg1:Laya.Image;
		public imgTitle:Laya.Image;
		public lblOutTitle:Laya.Label;
		public imgBg2:Laya.Image;
		public lblGetPersonTitel:Laya.Label;
		public imgGetPerson:Laya.Image;
		public lblMoneyTitel:Laya.Label;
		public imgMoney:Laya.Image;
		public lblServiceChargeTitel:Laya.Label;
		public imgServiceCharge:Laya.Image;
		public lblTips:Laya.Label;
		public tiMoney:Laya.TextInput;
		public lblServiceCharge:Laya.Label;
		public btnClose:Laya.Button;
		public btnOK:Laya.Button;
		public lblGetPersonAddr:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"imgBg1","skin":"res/person/bgda.png","name":"imgBg1"}},{"type":"Image","props":{"y":0,"x":0,"var":"imgTitle","skin":"res/person/dingbutiaoda.png","name":"imgTitle"}},{"type":"Label","props":{"y":36,"x":276,"var":"lblOutTitle","text":"转出","strokeColor":"#6c5545","stroke":2,"name":"lblOutTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Image","props":{"y":165,"x":17,"var":"imgBg2","skin":"res/person/gerenzhongxinbg3.png","name":"imgBg2"}},{"type":"Label","props":{"y":240,"x":57,"var":"lblGetPersonTitel","text":"接收者：","name":"lblGetPersonTitel","fontSize":30,"font":"SimHei","color":"#000000","bold":false}},{"type":"Image","props":{"y":223,"x":183,"var":"imgGetPerson","skin":"res/person/baikuang.png","name":"imgGetPerson"}},{"type":"Label","props":{"y":360,"x":57,"var":"lblMoneyTitel","text":"金额：","name":"lblMoneyTitel","fontSize":30,"font":"SimHei","color":"#000000","bold":false}},{"type":"Image","props":{"y":343,"x":183,"var":"imgMoney","skin":"res/person/baikuang.png","name":"imgMoney"}},{"type":"Label","props":{"y":475,"x":57,"var":"lblServiceChargeTitel","text":"手续费：","name":"lblServiceChargeTitle","fontSize":30,"font":"SimHei","color":"#000000","bold":false}},{"type":"Image","props":{"y":458,"x":183,"var":"imgServiceCharge","skin":"res/person/baikuang.png","name":"imgServiceCharge"}},{"type":"Label","props":{"y":294,"x":254,"var":"lblTips","text":"xkc地址","name":"lblTips","fontSize":20,"font":"SimHei","color":"#ff0400","bold":true}},{"type":"TextInput","props":{"y":347,"x":187,"width":423,"var":"tiMoney","prompt":"请输入金额","name":"tiMoney","height":57,"fontSize":30,"font":"SimHei"}},{"type":"Label","props":{"y":473,"x":196,"var":"lblServiceCharge","text":"0","name":"lblServiceCharge","fontSize":30,"font":"SimHei","color":"#000000","bold":false}},{"type":"Button","props":{"y":5,"x":593,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Button","props":{"y":718,"x":270,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确认"}},{"type":"Label","props":{"y":237,"x":193,"var":"lblGetPersonAddr","text":"接收者：","name":"lblGetPersonAddr","fontSize":25,"font":"SimHei","color":"#000000","bold":false}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gerenzhongxin.zhuanchuUI.uiView);
        }
    }
}

module ui.jishi {
    export class jishiUI extends View {
		public bgMarket:Laya.Image;
		public bgMarketTitle:Laya.Image;
		public lblMarketTitle:Laya.Label;
		public btnClose:Laya.Button;
		public btnFreeSell:Laya.Clip;
		public btnRadomBuy:Laya.Clip;
		public lblFreeSell:Laya.Label;
		public lblRamdomBuy:Laya.Label;
		public btnLevel:Laya.Button;
		public imgLevelArrow:Laya.Image;
		public btnPrice:Laya.Button;
		public imgPriceArrow:Laya.Image;
		public btnTime:Laya.Button;
		public imgTimeArrow:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgMarket","skin":"res/share/bg.png","name":"bgMarket"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgMarketTitle","skin":"res/share/dingbutiao.png","name":"bgMarketTitle"}},{"type":"Label","props":{"y":34,"x":313,"var":"lblMarketTitle","text":"集市","strokeColor":"#6c5545","stroke":2,"name":"lblMarketTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":13,"x":650,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Clip","props":{"y":102,"x":387,"var":"btnFreeSell","skin":"res/share/clip_jishi.png","name":"btnFreeSell","index":0,"clipY":2}},{"type":"Clip","props":{"y":103,"x":151,"var":"btnRadomBuy","skin":"res/share/clip_jishi.png","name":"btnRadomBuy","index":0,"clipY":2}},{"type":"Image","props":{"y":176,"x":0,"width":720,"skin":"res/share/fengexian.png"}},{"type":"Label","props":{"y":126,"x":432,"var":"lblFreeSell","text":"闲置寄售","name":"lblFreeSell","fontSize":24,"font":"SimHei","color":"#564f30","bold":true}},{"type":"Label","props":{"y":126,"x":199,"var":"lblRamdomBuy","text":"随机抢购","name":"lblRamdomBuy","fontSize":24,"font":"SimHei","color":"#564f30","bold":true}},{"type":"Image","props":{"y":218,"x":0,"width":720,"skin":"res/share/fengexian.png"}},{"type":"Button","props":{"y":179,"x":1,"var":"btnLevel","stateNum":1,"skin":"res/share/btn_biaoqiananniu.png","name":"btnLevel","labelSize":24,"labelFont":"SimHei","labelColors":"#564f30","label":"等级"},"child":[{"type":"Image","props":{"y":12,"x":148,"var":"imgLevelArrow","skin":"res/share/jiantou1.png","name":"imgLevelArrow"}}]},{"type":"Button","props":{"y":179,"x":240,"var":"btnPrice","stateNum":1,"skin":"res/share/btn_biaoqiananniu.png","name":"btnPrice","labelSize":24,"labelFont":"SimHei","labelColors":"#564f30","label":"价格"}},{"type":"Image","props":{"y":191,"x":391,"width":21,"var":"imgPriceArrow","skin":"res/share/jiantou1.png","name":"imgPriceArrow","height":18}},{"type":"Button","props":{"y":179,"x":480,"var":"btnTime","stateNum":1,"skin":"res/share/btn_biaoqiananniu.png","name":"btnTime","labelSize":24,"labelFont":"SimHei","labelColors":"#564f30","label":"时间"}},{"type":"Image","props":{"y":191,"x":631,"var":"imgTimeArrow","skin":"res/share/jiantou1.png","name":"imgTimeArrow"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.jishi.jishiUI.uiView);
        }
    }
}

module ui.jishi {
    export class jishichongwukuangUI extends View {
		public bgPetDetail:Laya.Image;
		public lblPriceTitle:Laya.Label;
		public bgPrice:Laya.Image;
		public lblPrice:Laya.Label;
		public bgLevel:Laya.Image;
		public lblLevel:Laya.Label;
		public lblTIme:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":222,"height":288},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgPetDetail","skin":"res/share/kuangda.png","name":"bgPetDetail"}},{"type":"Label","props":{"y":227,"x":20,"var":"lblPriceTitle","text":"价格：","name":"lblPriceTitle","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":225,"x":91,"var":"bgPrice","skin":"res/share/jiagekuang.png","name":"bgPrice"}},{"type":"Label","props":{"y":226,"x":99,"width":125,"var":"lblPrice","text":"0","strokeColor":"#000000","stroke":1,"name":"lblPrice","height":26,"fontSize":24,"font":"SimHei","color":"#41ff06","bold":true}},{"type":"Image","props":{"y":4,"x":9,"var":"bgLevel","skin":"res/share/dengjibg.png","name":"bgLevel"}},{"type":"Label","props":{"y":16,"x":11,"var":"lblLevel","text":"普通","name":"lblLevel","fontSize":22,"font":"SimHei","color":"#ffffff","bold":false}},{"type":"Label","props":{"y":265,"x":11,"var":"lblTIme","text":"16分钟前发布","name":"lblTIme","fontSize":20,"font":"SimHei","color":"#000000"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.jishi.jishichongwukuangUI.uiView);
        }
    }
}

module ui.jishi {
    export class jishigoumaiUI extends Dialog {
		public bgBuy:Laya.Image;
		public bgBuyTitle:Laya.Image;
		public btnClose:Laya.Button;
		public lblBuyTitle:Laya.Label;
		public imgPet:Laya.Image;
		public lblPriceTitle:Laya.Label;
		public bgPrice:Laya.Image;
		public lblPrice:Laya.Label;
		public btnOK:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgBuy","skin":"res/share/bgzhong.png","name":"bgBuy"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgBuyTitle","skin":"res/share/dingbutiaozhong.png","name":"bgBuyTitle"}},{"type":"Button","props":{"y":6,"x":473,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":23,"x":217,"var":"lblBuyTitle","text":"购买","strokeColor":"#6c5545","stroke":2,"name":"lblBuyTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Image","props":{"y":183,"x":192,"var":"imgPet","skin":"res/share/chongwu.png","name":"imgPet"}},{"type":"Label","props":{"y":442,"x":187,"var":"lblPriceTitle","text":"价格：","name":"lblPriceTitle","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":440,"x":258,"var":"bgPrice","skin":"res/share/jiagekuang.png","name":"bgPrice"}},{"type":"Label","props":{"y":441,"x":266,"width":125,"var":"lblPrice","text":"0","strokeColor":"#000000","stroke":1,"name":"lblPrice","height":26,"fontSize":24,"font":"SimHei","color":"#41ff06","bold":true}},{"type":"Button","props":{"y":488,"x":211,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.jishi.jishigoumaiUI.uiView);
        }
    }
}

module ui.shangcheng {
    export class shangchengUI extends View {
		public bgStore:Laya.Image;
		public bgStoreTitle:Laya.Image;
		public lblStoreTitle:Laya.Label;
		public btnClose:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgStore","skin":"res/share/bg.png","name":"bgStore"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgStoreTitle","skin":"res/share/dingbutiao.png","name":"bgStoreTitle"}},{"type":"Label","props":{"y":33,"x":307,"var":"lblStoreTitle","text":"商城","strokeColor":"#6c5545","stroke":2,"name":"lblStoreTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":3,"x":652,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.shangcheng.shangchengUI.uiView);
        }
    }
}

module ui.shangcheng {
    export class shangchengdaojukuangUI extends View {
		public bgTool:Laya.Image;
		public imgTool:Laya.Image;
		public lblToolName:Laya.Label;
		public lblPriceTitle:Laya.Label;
		public bgPrice:Laya.Image;
		public lblPrice:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":222,"height":288},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgTool","skin":"res/share/kuangda.png","name":"bgTool"}},{"type":"Image","props":{"y":43,"x":55,"var":"imgTool","skin":"res/share/daoju2.png","name":"imgTool"}},{"type":"Label","props":{"y":181,"x":73,"width":78,"var":"lblToolName","text":"名称","name":"lblToolName","height":18,"fontSize":18,"font":"SimHei","color":"#524c2e","bold":true,"align":"center"}},{"type":"Label","props":{"y":237,"x":27,"var":"lblPriceTitle","text":"价格：","name":"lblPriceTitle","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":235,"x":98,"var":"bgPrice","skin":"res/share/jiagekuang.png","name":"bgPrice"}},{"type":"Label","props":{"y":236,"x":106,"width":125,"var":"lblPrice","text":"0","strokeColor":"#000000","stroke":1,"name":"lblPrice","height":26,"fontSize":24,"font":"SimHei","color":"#41ff06","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.shangcheng.shangchengdaojukuangUI.uiView);
        }
    }
}

module ui.shangcheng {
    export class shangchenggoumaiUI extends Dialog {
		public bgBuy:Laya.Image;
		public bgBuyTitle:Laya.Image;
		public btnClose:Laya.Button;
		public lblBuyTitle:Laya.Label;
		public btnOK:Laya.Button;
		public bgTool:Laya.Image;
		public lblToolName:Laya.Label;
		public imgTool:Laya.Image;
		public lblToolDesc:Laya.Label;
		public btnReduce10:Laya.Button;
		public btnReduce1:Laya.Button;
		public btnAdd1:Laya.Button;
		public btnAdd10:Laya.Button;
		public bgNumber:Laya.Image;
		public lblNumber:Laya.Label;
		public lblPriceTitle:Laya.Label;
		public bgPrice:Laya.Image;
		public lblPrice:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgBuy","skin":"res/share/bgzhong.png","name":"bgBuy"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgBuyTitle","skin":"res/share/dingbutiaozhong.png","name":"bgBuyTitle"}},{"type":"Button","props":{"y":5,"x":479,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":33,"x":227,"var":"lblBuyTitle","text":"购买","strokeColor":"#6c5545","stroke":2,"name":"lblBuyTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":478,"x":212,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}},{"type":"Image","props":{"y":126,"x":17,"var":"bgTool","skin":"res/share/daojumiaoshukuang.png","name":"bgTool"}},{"type":"Label","props":{"y":152,"x":163,"var":"lblToolName","text":"道具名称","name":"lblToolName","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":152,"x":32,"var":"imgTool","skin":"res/share/daojukuang.png","name":"imgTool"}},{"type":"Label","props":{"y":183,"x":163,"var":"lblToolDesc","text":"道具描述...","name":"lblToolDesc","fontSize":24,"font":"SimHei","color":"#5a5a5a"}},{"type":"Button","props":{"y":344,"x":28,"var":"btnReduce10","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnReduce10","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"-10"}},{"type":"Button","props":{"y":344,"x":115,"var":"btnReduce1","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnReduce1","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"-1"}},{"type":"Button","props":{"y":344,"x":359,"var":"btnAdd1","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnAdd1","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"+1"}},{"type":"Button","props":{"y":344,"x":449,"var":"btnAdd10","stateNum":1,"skin":"res/share/btn_anniushuliang.png","name":"btnAdd10","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","labelBold":true,"label":"+10"}},{"type":"Image","props":{"y":350,"x":195,"var":"bgNumber","skin":"res/share/shuliangkuang.png","name":"bgNumber"}},{"type":"Label","props":{"y":362,"x":211,"width":125,"var":"lblNumber","text":"0","strokeColor":"#000000","stroke":2,"name":"lblNumber","height":30,"fontSize":30,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":438,"x":197,"var":"lblPriceTitle","text":"价格：","name":"lblPriceTitle","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":436,"x":268,"var":"bgPrice","skin":"res/share/jiagekuang.png","name":"bgPrice"}},{"type":"Label","props":{"y":437,"x":276,"width":125,"var":"lblPrice","text":"0","strokeColor":"#000000","stroke":1,"name":"lblPrice","height":26,"fontSize":24,"font":"SimHei","color":"#41ff06","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.shangcheng.shangchenggoumaiUI.uiView);
        }
    }
}

module ui.zhucedenglu {
    export class dengluUI extends View {
		public bgLogin:Laya.Image;
		public bgLogin2:Laya.Image;
		public lblUser:Laya.Label;
		public bgUser:Laya.Image;
		public tiUser:Laya.TextInput;
		public lblPassword:Laya.Label;
		public bgPassword:Laya.Image;
		public tiPassword:Laya.TextInput;
		public btnRegist:Laya.Button;
		public btnLogin:Laya.Button;
		public imgLogo:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgLogin","skin":"res/share/denglubg.png","name":"bgLogin"}},{"type":"Image","props":{"y":412,"x":8,"var":"bgLogin2","skin":"res/person/gerenzhongxinbg2.png","name":"bgLogin2"}},{"type":"Label","props":{"y":472,"x":57,"var":"lblUser","text":"帐号","name":"lblUser","fontSize":46,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":463,"x":188,"var":"bgUser","skin":"res/person/baikuang.png","name":"bgUser"}},{"type":"TextInput","props":{"y":466,"x":188,"width":422,"var":"tiUser","prompt":"请输入您的帐号","name":"tiUser","height":57,"fontSize":30,"font":"SimHei"}},{"type":"Label","props":{"y":620,"x":57,"var":"lblPassword","text":"密码","name":"lblPassword","fontSize":46,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":611,"x":188,"var":"bgPassword","skin":"res/person/baikuang.png","name":"bgPassword"}},{"type":"TextInput","props":{"y":614,"x":188,"width":422,"var":"tiPassword","type":"password","prompt":"请输入您的密码","name":"tiPassword","height":57,"fontSize":30,"font":"SimHei"}},{"type":"Button","props":{"y":714,"x":164,"var":"btnRegist","stateNum":1,"skin":"res/share/btn_honganniu.png","name":"btnRegist","labelStrokeColor":"#8b2217","labelStroke":2,"labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"注册帐号"}},{"type":"Button","props":{"y":714,"x":439,"var":"btnLogin","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnLogin","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"登录游戏"}},{"type":"Image","props":{"y":132,"x":71,"var":"imgLogo","skin":"res/share/logo.png","name":"imgLogo"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhucedenglu.dengluUI.uiView);
        }
    }
}

module ui.zhucedenglu {
    export class zhuceUI extends View {
		public bgRegist1:Laya.Image;
		public bgRegist2:Laya.Image;
		public lblPhoneNum:Laya.Label;
		public lblPassword:Laya.Label;
		public lblMakesure:Laya.Label;
		public lblIdentity:Laya.Label;
		public bgPhoneNum:Laya.Image;
		public bgPassword:Laya.Image;
		public bgMakesure:Laya.Image;
		public bgIdentity:Laya.Image;
		public tiPhoneNum:Laya.TextInput;
		public tiPassword:Laya.TextInput;
		public tiMakesure:Laya.TextInput;
		public tiIdentity:Laya.TextInput;
		public btnBack:Laya.Button;
		public btnRegist:Laya.Button;
		public btnIdentity:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgRegist1","skin":"res/share/denglubg.png","name":"bgRegist1"}},{"type":"Image","props":{"y":313,"x":8,"var":"bgRegist2","skin":"res/share/zhucebg.png","name":"bgRegist2"}},{"type":"Label","props":{"y":363,"x":23,"var":"lblPhoneNum","text":"手机号","name":"lblPhoneNum","fontSize":46,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":455,"x":23,"var":"lblPassword","text":"密码","name":"lblPassword","fontSize":46,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":555,"x":23,"var":"lblMakesure","text":"确认密码","name":"lblMakesure","fontSize":46,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":660,"x":23,"var":"lblIdentity","text":"验证码","name":"lblIdentity","fontSize":46,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":354,"x":237,"var":"bgPhoneNum","skin":"res/person/baikuang.png","name":"bgPhoneNum"}},{"type":"Image","props":{"y":446,"x":237,"var":"bgPassword","skin":"res/person/baikuang.png","name":"bgPassword"}},{"type":"Image","props":{"y":546,"x":237,"var":"bgMakesure","skin":"res/person/baikuang.png","name":"bgMakesure"}},{"type":"Image","props":{"y":651,"x":237,"width":286,"var":"bgIdentity","skin":"res/person/baikuang.png","name":"bgIdentity","height":64}},{"type":"TextInput","props":{"y":357,"x":244,"width":422,"var":"tiPhoneNum","prompt":"请输入您的手机号","name":"tiPhoneNum","height":57,"fontSize":30,"font":"SimHei"}},{"type":"TextInput","props":{"y":450,"x":244,"width":415,"var":"tiPassword","type":"password","prompt":"请设置密码","name":"tiPassword","height":57,"fontSize":30,"font":"SimHei"}},{"type":"TextInput","props":{"y":549,"x":244,"width":420,"var":"tiMakesure","type":"password","prompt":"请确认密码","name":"tiMakesure","height":57,"fontSize":30,"font":"SimHei"}},{"type":"TextInput","props":{"y":656,"x":244,"width":210,"var":"tiIdentity","prompt":"请输入验证码","name":"tiIdentity","height":57,"fontSize":30,"font":"SimHei"}},{"type":"Button","props":{"y":747,"x":118,"var":"btnBack","stateNum":1,"skin":"res/share/btn_honganniu.png","name":"btnBack","labelStrokeColor":"#8b2217","labelStroke":2,"labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"返回登陆"}},{"type":"Button","props":{"y":747,"x":497,"var":"btnRegist","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnRegist","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"注册帐号"}},{"type":"Button","props":{"y":656,"x":537,"var":"btnIdentity","stateNum":1,"skin":"res/share/btn_yanzhengma.png","name":"btnIdentity","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff","label":"获取验证码"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhucedenglu.zhuceUI.uiView);
        }
    }
}

module ui.zhuye {
    export class chongwuchushouUI extends Dialog {
		public bgSellPet:Laya.Image;
		public bgSellPetTitle:Laya.Image;
		public btnClose:Laya.Button;
		public lblSellPetTitle:Laya.Label;
		public imgPet:Laya.Image;
		public lblPriceTitle:Laya.Label;
		public bgPrice:Laya.Image;
		public lblPrice:Laya.Label;
		public btnOK:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgSellPet","skin":"res/share/bgzhong.png","name":"bgSellPet"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgSellPetTitle","skin":"res/share/dingbutiaozhong.png","name":"bgSellPetTitle"}},{"type":"Button","props":{"y":7,"x":476,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Label","props":{"y":33,"x":227,"var":"lblSellPetTitle","text":"出售","strokeColor":"#6c5545","stroke":2,"name":"lblSellPetTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Image","props":{"y":193,"x":202,"var":"imgPet","skin":"res/share/chongwu.png","name":"imgPet"}},{"type":"Label","props":{"y":452,"x":197,"var":"lblPriceTitle","text":"价格：","name":"lblPriceTitle","fontSize":24,"font":"SimHei","color":"#524c2e","bold":true}},{"type":"Image","props":{"y":450,"x":268,"var":"bgPrice","skin":"res/share/jiagekuang.png","name":"bgPrice"}},{"type":"Label","props":{"y":451,"x":276,"width":125,"var":"lblPrice","text":"0","strokeColor":"#000000","stroke":1,"name":"lblPrice","height":26,"fontSize":24,"font":"SimHei","color":"#41ff06","bold":true}},{"type":"Button","props":{"y":498,"x":211,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.chongwuchushouUI.uiView);
        }
    }
}

module ui.zhuye {
    export class choujiangUI extends Dialog {
		public bgDraw:Laya.Image;
		public bgDrawTitle:Laya.Image;
		public bgDraw2:Laya.Image;
		public bgMyAddress:Laya.Image;
		public btnCopyAddress:Laya.Button;
		public btnDraw:Laya.Button;
		public lblRemainTimesTitle:Laya.Label;
		public lblTotalTImesTitle:Laya.Label;
		public lblRemainTimes:Laya.Label;
		public lblTotalTImes:Laya.Label;
		public lblMyAdressTitle:Laya.Label;
		public lblMyAdress:Laya.Label;
		public lblDrawTitle:Laya.Label;
		public btnClose:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgDraw","skin":"res/travel/bg2.png","name":"bgDraw"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgDrawTitle","skin":"res/travel/dingbutiao2.png","name":"bgDrawTitle"}},{"type":"Image","props":{"y":140,"x":22,"var":"bgDraw2","skin":"res/travel/changjingkuang.png","name":"bgDraw2"}},{"type":"Image","props":{"y":473,"x":27,"var":"bgMyAddress","skin":"res/travel/choujiangyaoqingdizhikuang.png","name":"bgMyAddress"}},{"type":"Button","props":{"y":484,"x":471,"var":"btnCopyAddress","stateNum":1,"skin":"res/share/btn_fuzhiyaoqingdizhianniu.png","name":"btnCopyAddress","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"复制邀请地址"}},{"type":"Button","props":{"y":174,"x":259,"var":"btnDraw","stateNum":1,"skin":"res/share/btn_huanganniuda.png","name":"btnDraw","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":30,"labelFont":"SimHei","labelColors":"#ffffff","label":"抽奖"}},{"type":"Label","props":{"y":307,"x":156,"var":"lblRemainTimesTitle","text":"今日剩余抽奖次数：","name":"lblRemainTimesTitle","fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":356,"x":156,"var":"lblTotalTImesTitle","text":"总可用抽奖次数：","name":"lblTotalTImesTitle","fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":308,"x":426,"var":"lblRemainTimes","text":"3/3","name":"lblRemainTimes","fontSize":30,"font":"SimHei","color":"#2e9e12"}},{"type":"Label","props":{"y":356,"x":401,"var":"lblTotalTImes","text":"100","name":"lblTotalTImes","fontSize":30,"font":"SimHei","color":"#2e9e12"}},{"type":"Label","props":{"y":487,"x":39,"var":"lblMyAdressTitle","text":"我的邀请地址：","name":"lblMyAdressTitle","fontSize":25,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":528,"x":39,"var":"lblMyAdress","text":"http://dddddddddddddddddddd","name":"lblMyAdress","fontSize":25,"font":"SimHei","color":"#000000"}},{"type":"Label","props":{"y":26,"x":285,"var":"lblDrawTitle","text":"抽奖","strokeColor":"#6c5545","stroke":2,"name":"lblDrawTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":17,"x":584,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.choujiangUI.uiView);
        }
    }
}

module ui.zhuye {
    export class choujianghuodeUI extends Dialog {
		public bgDraw:Laya.Image;
		public imgLight:Laya.Image;
		public imgGetItem:Laya.Image;
		public btnOK:Laya.Button;
		public lblTips:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgDraw","skin":"res/travel/bg2.png","name":"bgDraw"}},{"type":"Image","props":{"y":66,"x":88,"var":"imgLight","skin":"res/share/choujiangdaojuguangxiao.png","name":"imgLight"}},{"type":"Image","props":{"y":222,"x":266,"width":188,"var":"imgGetItem","skin":"res/share/xkcBill.png","name":"imgGetItem","height":181}},{"type":"Button","props":{"y":488,"x":284,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}},{"type":"Label","props":{"y":40,"x":-1,"width":654,"var":"lblTips","text":"恭喜你获得宠物！","name":"lblTips","height":45,"fontSize":45,"font":"SimHei","color":"#000000","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.choujianghuodeUI.uiView);
        }
    }
}

module ui.zhuye {
    export class denglujiangliUI extends Dialog {
		public bgLoginReward:Laya.Image;
		public bgLoginRewardTitle:Laya.Image;
		public lblLgoinReward:Laya.Label;
		public bgLoginReward2:Laya.Image;
		public lblReward:Laya.Label;
		public imgToolBg:Laya.Image;
		public btnOK:Laya.Button;
		public btnClose:Laya.Button;
		public imgGot:Laya.Image;
		public lblNum:Laya.Label;
		public imgTool:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgLoginReward","skin":"res/share/bgzhong.png","name":"bgLoginReward"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgLoginRewardTitle","skin":"res/share/dingbutiaozhong.png","name":"bgLoginRewardTitle"}},{"type":"Label","props":{"y":26,"x":176,"var":"lblLgoinReward","text":"登录奖励","strokeColor":"#6c5545","stroke":2,"name":"lblLgoinReward","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Image","props":{"y":144,"x":44,"var":"bgLoginReward2","skin":"res/share/luxingbg.png","name":"bgLoginReward2"}},{"type":"Label","props":{"y":163,"x":175,"var":"lblReward","text":"领取以下奖励","name":"lblReward","fontSize":35,"font":"SimHei","color":"#000000","bold":false}},{"type":"Image","props":{"y":232,"x":216,"var":"imgToolBg","skin":"res/share/daojukuang.png","name":"imgToolBg"}},{"type":"Button","props":{"y":395,"x":212,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}},{"type":"Button","props":{"y":11,"x":471,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Image","props":{"y":394,"x":209,"var":"imgGot","skin":"res/share/yilingqu.png","name":"imgGot"}},{"type":"Label","props":{"y":314,"x":314,"var":"lblNum","text":"4","name":"lblNum","fontSize":25,"font":"SimHei","color":"#000000","bold":false}},{"type":"Image","props":{"y":231,"x":214,"var":"imgTool","skin":"res/share/daoju1.png","name":"imgTool"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.denglujiangliUI.uiView);
        }
    }
}

module ui.zhuye {
    export class lvxingUI extends Dialog {
		public bgTravel:Laya.Image;
		public bgTravelTitle:Laya.Image;
		public lblTravelTitle:Laya.Label;
		public btnClose:Laya.Button;
		public imgTravel:Laya.Image;
		public btnCamera:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":244,"x":30,"var":"bgTravel","skin":"res/travel/bg2.png","name":"bgTravel"}},{"type":"Image","props":{"y":244,"x":30,"var":"bgTravelTitle","skin":"res/travel/dingbutiao2.png","name":"bgTravelTitle"}},{"type":"Label","props":{"y":271,"x":315,"var":"lblTravelTitle","text":"旅行","strokeColor":"#6c5545","stroke":2,"name":"lblTravelTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":249,"x":623,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Image","props":{"y":384,"x":52,"var":"imgTravel","skin":"res/travel/changjingkuang.png","name":"imgTravel"}},{"type":"Button","props":{"y":395,"x":570,"var":"btnCamera","stateNum":1,"skin":"res/travel/btn_xiangjitubiao.png","name":"btnCamera"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.lvxingUI.uiView);
        }
    }
}

module ui.zhuye {
    export class lvxinghuodeUI extends Dialog {
		public bgTravel:Laya.Image;
		public bgTravelTitle:Laya.Image;
		public lblTravelTitle:Laya.Label;
		public btnClose:Laya.Button;
		public imgTravelGet:Laya.Image;
		public lblGet:Laya.Label;
		public imgTool:Laya.Image;
		public btnOK:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":10,"x":10,"var":"bgTravel","skin":"res/travel/bg2.png","name":"bgTravel"}},{"type":"Image","props":{"y":10,"x":10,"var":"bgTravelTitle","skin":"res/travel/dingbutiao2.png","name":"bgTravelTitle"}},{"type":"Label","props":{"y":47,"x":295,"var":"lblTravelTitle","text":"旅行","strokeColor":"#6c5545","stroke":2,"name":"lblTravelTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":15,"x":601,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Image","props":{"y":150,"x":32,"var":"imgTravelGet","skin":"res/share/cj.png","name":"imgTravelGet"}},{"type":"Label","props":{"y":187,"x":249,"var":"lblGet","text":"恭喜你获得了","name":"lblGet","fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":282,"x":286,"var":"imgTool","skin":"res/share/daojukuang.png","name":"imgTool"}},{"type":"Button","props":{"y":487,"x":286,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.lvxinghuodeUI.uiView);
        }
    }
}

module ui.zhuye {
    export class lvxingxuyaoUI extends Dialog {
		public bgTravel:Laya.Image;
		public bgTravelTitle:Laya.Image;
		public lblTravelTitle:Laya.Label;
		public btnClose:Laya.Button;
		public bgTravel2:Laya.Image;
		public lblNeed:Laya.Label;
		public imgTool:Laya.Image;
		public btnStartTravel:Laya.Button;
		public imgFood:Laya.Image;
		public lblNumber:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":254,"x":40,"var":"bgTravel","skin":"res/travel/bg2.png","name":"bgTravel"}},{"type":"Image","props":{"y":254,"x":40,"var":"bgTravelTitle","skin":"res/travel/dingbutiao2.png","name":"bgTravelTitle"}},{"type":"Label","props":{"y":281,"x":325,"var":"lblTravelTitle","text":"旅行","strokeColor":"#6c5545","stroke":2,"name":"lblTravelTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":259,"x":633,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Image","props":{"y":416,"x":138,"var":"bgTravel2","skin":"res/share/luxingbg.png","name":"bgTravel2"}},{"type":"Label","props":{"y":440,"x":306,"var":"lblNeed","text":"需要携带","name":"lblNeed","fontSize":30,"font":"SimHei","color":"#000000","bold":false}},{"type":"Image","props":{"y":508,"x":315,"var":"imgTool","skin":"res/share/daojukuang.png","name":"imgTool"}},{"type":"Button","props":{"y":661,"x":309,"var":"btnStartTravel","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnStartTravel","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"开始旅行"}},{"type":"Image","props":{"y":505,"x":314,"var":"imgFood","skin":"res/share/daoju1.png","name":"imgFood"}},{"type":"Label","props":{"y":603,"x":408,"var":"lblNumber","text":"10","name":"lblNumber","fontSize":15,"font":"SimHei","color":"#000000","bold":false}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.lvxingxuyaoUI.uiView);
        }
    }
}

module ui.zhuye {
    export class lvxingzhongUI extends Dialog {
		public bgTravel:Laya.Image;
		public bgTravelTitle:Laya.Image;
		public btnClose:Laya.Button;
		public imgTravel:Laya.Image;
		public lblInf:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":264,"x":52,"var":"bgTravel","skin":"res/travel/bg2.png","name":"bgTravel"}},{"type":"Image","props":{"y":264,"x":50,"var":"bgTravelTitle","skin":"res/travel/dingbutiao2.png","name":"bgTravelTitle"}},{"type":"Label","props":{"y":291,"x":335,"text":"旅行","strokeColor":"#6c5545","stroke":2,"name":"lblTravelTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":269,"x":643,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Image","props":{"y":404,"x":72,"var":"imgTravel","skin":"res/travel/changjingkuang.png","name":"imgTravel"}},{"type":"Label","props":{"y":417,"x":168,"var":"lblInf","text":"旅行中......","name":"lblInf","fontSize":30,"font":"SimHei","color":"#f8110d"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.lvxingzhongUI.uiView);
        }
    }
}

module ui.zhuye {
    export class mainViewUI extends View {
		public bgMainView:Laya.Image;
		public btnFeed:Laya.Button;
		public btnCure:Laya.Button;
		public btnPersonCenter:Laya.Button;
		public lblPersonCenter:Laya.Label;
		public btnPetManage:Laya.Button;
		public lblPetManage:Laya.Label;
		public btnBag:Laya.Button;
		public lblBag:Laya.Label;
		public btnMarket:Laya.Button;
		public btnStore:Laya.Button;
		public btnadvanture:Laya.Button;
		public btnDraw:Laya.Button;
		public btnTravel:Laya.Button;
		public lblMarket:Laya.Label;
		public lblStore:Laya.Label;
		public lblTravel:Laya.Label;
		public lbladvanture:Laya.Label;
		public lblDraw:Laya.Label;
		public btnArrowL:Laya.Button;
		public btnArrowR:Laya.Button;
		public imgMask:Laya.Image;
		public pbHealthy:Laya.ProgressBar;
		public lblHealthy:Laya.Label;
		public pbSatiety:Laya.ProgressBar;
		public lblSatiety:Laya.Label;
		public btnGame:Laya.Button;
		public lblGame:Laya.Label;
		public btnNarrowCat:Laya.Button;
		public lblNarrowCat:Laya.Label;
		public bgMainPet:Laya.Image;
		public lblMainPet:Laya.Label;
		public btnLoginReward:Laya.Button;
		public lblLoginReward:Laya.Label;
		public bgSelling:Laya.Image;
		public lblSelling:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgMainView","skin":"res/share/bg.png","name":"bgMainView"}},{"type":"Button","props":{"y":972,"x":170,"var":"btnFeed","stateNum":1,"skin":"res/share/btn_huanganniuda.png","name":"btnFeed","labelStrokeColor":"#5d3e19","labelStroke":2,"labelSize":40,"labelFont":"SimHei","labelColors":"#ffffff","label":"喂养"}},{"type":"Button","props":{"y":972,"x":430,"var":"btnCure","stateNum":1,"skin":"res/share/btn_lvanniuda.png","name":"btnCure","labelStrokeColor":"#5d3e19","labelStroke":2,"labelSize":40,"labelFont":"SimHei","labelColors":"#ffffff","label":"治疗"}},{"type":"Button","props":{"y":1133,"x":26,"var":"btnPersonCenter","stateNum":1,"skin":"res/main/btn_tubiaogerenzhgongxin.png","name":"btnPersonCenter"}},{"type":"Label","props":{"y":1221,"x":26,"var":"lblPersonCenter","text":"个人中心","strokeColor":"#5d3e19","stroke":2,"name":"lblPersonCenter","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Button","props":{"y":1133,"x":175,"var":"btnPetManage","stateNum":1,"skin":"res/main/btn_tubiaochouwuguanli.png","name":"btnPetManage"}},{"type":"Label","props":{"y":1221,"x":174,"var":"lblPetManage","text":"宠物管理","strokeColor":"#5d3e19","stroke":2,"name":"lblPetManage","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Button","props":{"y":1133,"x":323,"var":"btnBag","stateNum":1,"skin":"res/main/btn_tubiaobeibao.png","name":"btnBag"}},{"type":"Label","props":{"y":1221,"x":349,"var":"lblBag","text":"背包","strokeColor":"#5d3e19","stroke":2,"name":"lblBag","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Button","props":{"y":1133,"x":605,"var":"btnMarket","stateNum":1,"skin":"res/main/btn_tubiaojishi.png","name":"btnMarket"}},{"type":"Button","props":{"y":1133,"x":466,"var":"btnStore","stateNum":1,"skin":"res/main/btn_tubiaoshangcheng.png","name":"btnStore"}},{"type":"Button","props":{"y":281,"x":605,"var":"btnadvanture","stateNum":1,"skin":"res/main/btn_tubiaomaoxian.png","name":"btnadvanture"}},{"type":"Button","props":{"y":148,"x":605,"var":"btnDraw","stateNum":1,"skin":"res/main/btn_tubiaochoujiang.png","name":"btnDraw"}},{"type":"Button","props":{"y":417,"x":605,"var":"btnTravel","stateNum":1,"skin":"res/main/btn_tubiaolvxing.png","name":"btnTravel"}},{"type":"Label","props":{"y":1221,"x":632,"var":"lblMarket","text":"集市","strokeColor":"#5d3e19","stroke":2,"name":"lblMarket","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Label","props":{"y":1221,"x":491,"var":"lblStore","text":"商城","strokeColor":"#5d3e19","stroke":2,"name":"lblStore","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Label","props":{"y":519,"x":630,"var":"lblTravel","text":"旅行","strokeColor":"#5d3e19","stroke":2,"name":"lblTravel","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Label","props":{"y":378,"x":632,"var":"lbladvanture","text":"冒险","strokeColor":"#5d3e19","stroke":2,"name":"lbladvanture","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Label","props":{"y":243,"x":632,"var":"lblDraw","text":"抽奖","strokeColor":"#5d3e19","stroke":2,"name":"lblDraw","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Button","props":{"y":619,"x":3,"var":"btnArrowL","stateNum":1,"skin":"res/main/btn_jiantouzuo.png","name":"btnArrowL"}},{"type":"Button","props":{"y":619,"x":638,"var":"btnArrowR","stateNum":1,"skin":"res/main/btn_jiantouyou.png","name":"btnArrowR"}},{"type":"Image","props":{"y":368,"x":64,"var":"imgMask","skin":"res/share/zhezhao.png","name":"imgMask","mouseThrough":false}},{"type":"ProgressBar","props":{"y":47,"x":417,"width":260,"var":"pbHealthy","value":1,"skin":"res/main/jiankangdutiao.png","sizeGrid":"5,5,5,5","name":"pbHealthy","height":44}},{"type":"Label","props":{"y":55,"x":454,"var":"lblHealthy","text":"健康度:100/100","name":"lblHealthy","fontSize":26,"font":"SimHei","color":"#4d4c35","bold":true}},{"type":"ProgressBar","props":{"y":47,"x":61,"width":260,"var":"pbSatiety","value":1,"skin":"res/main/baoshidutiao.png","name":"pbSatiety","height":44}},{"type":"Label","props":{"y":57,"x":101,"var":"lblSatiety","text":"饱食度:100/100","name":"lblSatiety","fontSize":26,"font":"SimHei","color":"#4d4c35","bold":true}},{"type":"Button","props":{"y":417,"x":8,"var":"btnGame","stateNum":1,"skin":"res/main/btn_tubiaoyouxi.png","name":"btnGame"}},{"type":"Label","props":{"y":519,"x":38,"var":"lblGame","text":"游戏","strokeColor":"#5d3e19","stroke":2,"name":"lblGame","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Button","props":{"y":281,"x":7,"var":"btnNarrowCat","stateNum":1,"skin":"res/main/btn_tubiaofujindemao.png","name":"btnNarrowCat"}},{"type":"Label","props":{"y":378,"x":-1,"var":"lblNarrowCat","text":" 附近的猫","strokeColor":"#5d3e19","stroke":2,"name":"lblNarrowCat","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Image","props":{"y":417,"x":151,"var":"bgMainPet","skin":"res/pet/dazhutubiaobg.png","name":"bgMainPet"}},{"type":"Label","props":{"y":423,"x":159,"var":"lblMainPet","text":"主","strokeColor":"#2d9e16","stroke":1,"name":"lblMainPet","fontSize":38,"font":"SimHei","color":"#ffffff"}},{"type":"Button","props":{"y":152,"x":10,"var":"btnLoginReward","stateNum":1,"skin":"res/main/btn_tubiaodenglujiangli.png","name":"btnLoginReward"}},{"type":"Label","props":{"y":243,"x":14,"var":"lblLoginReward","text":"登录奖励","strokeColor":"#5d3e19","stroke":2,"name":"lblLoginReward","fontSize":26,"font":"SimHei","color":"#fbe1b4","bold":false}},{"type":"Image","props":{"y":417,"x":220,"var":"bgSelling","skin":"res/pet/dashoutubiaobg.png","name":"bgSelling"}},{"type":"Label","props":{"y":423,"x":229,"var":"lblSelling","text":"售","strokeColor":"#2d9e16","stroke":1,"name":"lblSelling","fontSize":38,"font":"SimHei","color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.mainViewUI.uiView);
        }
    }
}

module ui.zhuye {
    export class maoxianUI extends Dialog {
		public bgAdvanture:Laya.Image;
		public bgAdvantureTitle:Laya.Image;
		public lblAdvantureTitle:Laya.Label;
		public btnClose:Laya.Button;
		public bgAdvanture2:Laya.Image;
		public lblSearching:Laya.Label;
		public lblGet:Laya.Label;
		public imgTool:Laya.Image;
		public btnOK:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bgAdvanture","skin":"res/travel/bg2.png","name":"bgAdvanture"}},{"type":"Image","props":{"y":0,"x":0,"var":"bgAdvantureTitle","skin":"res/travel/dingbutiao2.png","name":"bgAdvantureTitle"}},{"type":"Label","props":{"y":37,"x":285,"var":"lblAdvantureTitle","text":"冒险","strokeColor":"#6c5545","stroke":2,"name":"lblAdvantureTitle","fontSize":46,"font":"SimHei","color":"#ffffea","bold":true}},{"type":"Button","props":{"y":5,"x":591,"var":"btnClose","stateNum":1,"skin":"res/share/btn_guanbi.png","name":"btnClose"}},{"type":"Image","props":{"y":140,"x":22,"var":"bgAdvanture2","skin":"res/share/cj.png","name":"bgAdvanture2"}},{"type":"Label","props":{"y":169,"x":247,"var":"lblSearching","text":"探索中...","name":"lblSearching","fontSize":46,"font":"SimHei","color":"#524c2e"}},{"type":"Label","props":{"y":265,"x":239,"var":"lblGet","text":"恭喜你获得了","name":"lblGet","fontSize":30,"font":"SimHei","color":"#000000"}},{"type":"Image","props":{"y":351,"x":276,"var":"imgTool","skin":"res/share/daojukuang.png","name":"imgTool"}},{"type":"Button","props":{"y":492,"x":270,"var":"btnOK","stateNum":1,"skin":"res/share/btn_huanganniuqueding.png","name":"btnOK","labelStrokeColor":"#4b2015","labelStroke":2,"labelSize":24,"labelFont":"SimHei","labelColors":"#ffffff","label":"确定"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.zhuye.maoxianUI.uiView);
        }
    }
}
