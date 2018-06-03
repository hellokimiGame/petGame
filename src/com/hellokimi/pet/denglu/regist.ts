/*
* name;
*/
class regist extends ui.zhucedenglu.zhuceUI {
    private Event = laya.events.Event;
    public time: number = 300;
    public code: number;
    constructor(data: any) {
        super();

        this.btnBack.on(this.Event.CLICK, this, this.onBack)
        this.btnRegist.on(this.Event.CLICK, this, this.onRegist)
        this.btnIdentity.on(this.Event.CLICK, this, this.getIdentity)

    }
    private onBack(): void {
        ScreenManager.getInstance().showMainScreen(ScreenType.LOGIN_VIEW, null);
         ScreenManager.getInstance().closeView(ScreenType.REGIST_VIEW);
    }
    private onRegist(): void {
        if (this.tiPhoneNum.text == "" || this.tiPhoneNum == null) {
            this.tiPhoneNum.prompt = "手机号码不能为空!";
            return;
        }
        if (this.tiPassword.text == "" || this.tiPassword.text == null) {
            this.tiPassword.prompt = "密码不能为空!";
            return;
        }
        if (this.tiMakesure.text == "" || this.tiMakesure.text == null) {
            this.tiMakesure.prompt = "确认密码不能为空!";
            return;
        }
        if (this.tiIdentity.text == "" || this.tiIdentity.text == null) {
            this.tiIdentity.prompt = "验证码不能为空!";
            return;
        }
        if (this.tiPassword.text != this.tiMakesure.text) {
            this.tiIdentity.prompt == "两次密码不一样!";
            return;

        }
      
       this.code = parseInt(this.tiIdentity.text);
       var data = { e: GameRoute.EVENT_REGEDIT, pn: this.tiPhoneNum.text, pw: this.tiPassword.text, pw2: this.tiMakesure.text, pm: "", code: this.code };
        ConnUitls.getInstance().sendReq(data, this, this.regeditHandler);
        
    }

    private getIdentity(): void {
        if (this.tiPhoneNum.text == "" || this.tiPhoneNum == null) {
            this.tiPhoneNum.prompt = "手机号码不能为空!";
            return;
        }
        if(this.checkPn()){
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,"您的手机号码不合法");
            return;
        }
        var data1 = { e: GameRoute.EVENT_PHONECODE, pn: this.tiPhoneNum.text }
        ConnUitls.getInstance().sendReq(data1, this, this.onGetIdentity);
        Laya.timer.loop(1000, this, this.countTime);
    }
    //正则校验手机号码
    private checkPn(): Boolean {
        var pn: string = this.tiPhoneNum.text;
        var reg: RegExp = new RegExp("^1[0-9]{10}$");
        if (reg.test(pn)) {
           return false;
        } else {
           return true;
        }
    
    }

    private regeditHandler(data: any): void {
        if (data.c == 0) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "注册成功！");
            var count: string = Laya.LocalStorage.getItem("count");
            if ((count == null && this.tiPhoneNum.text != null && this.tiPhoneNum.text != "") || (count != null && count != this.tiPhoneNum.text && this.tiPhoneNum.text != "" && this.tiPhoneNum.text != null)) {
                Laya.LocalStorage.setItem("count", this.tiPhoneNum.text);
            }

            DataCenter.getInstance().setXkcAddressInfo(data.addr);
            DataCenter.getInstance().setPhInfo(data.ph);
            DataCenter.getInstance().setXkcInfo(data.xkc);

            ScreenManager.getInstance().showMainScreen(ScreenType.MAIN_VIEW, data);
            ScreenManager.getInstance().closeView(ScreenType.REGIST_VIEW);
    
        }
        if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,  "手机号码不正确！");
        }
        if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,"密码格式错误！");
        }
        if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,"密码不一致！");
        }
        if (data.c == 4) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "验证码错误！");
        }
        if (data.c == 5) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "验证码不存在！");
        }
        if (data.c == 6) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "验证码已经失效！");
        }
        if (data.c == 7) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "账号已经存在！");
        }
        if (data.c == 8) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,"创建账户失败！");
        }



    }
    private onGetIdentity(data: any): void {
      
    }
    private countTime(): void {
        this.btnIdentity.label = this.time + "";
        this.btnIdentity.labelColors = "red";
        this.time--;
        this.btnIdentity.disabled = true;
        if (this.time == 0) {
            this.btnIdentity.label = "获取验证码";
        }
    }


   
}