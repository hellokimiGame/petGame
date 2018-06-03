/*
* name;
*/
class login extends ui.zhucedenglu.dengluUI {
    private Event = laya.events.Event;
    constructor(data: any) {
        super();
        var count:string=Laya.LocalStorage.getItem("count");
        if(count!=null){
            this.tiUser.text=count;
        }
        this.tiUser.maxChars = 16;
        this.tiPassword.maxChars = 16;
        this.btnRegist.on(this.Event.CLICK, this, this.onRegist)
        this.btnLogin.on(this.Event.CLICK, this, this.onLogin)
    }
    private onRegist(): void {
        
        ScreenManager.getInstance().showMainScreen(ScreenType.REGIST_VIEW, null);
        ScreenManager.getInstance().closeView(ScreenType.LOGIN_VIEW);
    }
    private onLogin(): void {
        if (this.tiUser.text == "" || this.tiUser.text == null) {
            this.tiUser.prompt = "帐号不能为空！";
            return;
        }
        if (this.tiPassword.text == "" || this.tiPassword.text == null) {
            this.tiPassword.prompt = "密码不能为空！";
            return;
        } else {
            var data = { e: GameRoute.EVENT_LOGIN, pn: this.tiUser.text, pw: this.tiPassword.text }
            ConnUitls.getInstance().sendReq(data, this, this.onLoginSuccess);
        }
    }
    private onLoginSuccess(data: any): void {
        if (data.c == 0) {
            var dataArr: any = null;
            var count:string=Laya.LocalStorage.getItem("count");
            if ((count==null && this.tiUser.text != null && this.tiUser.text != "") || (count!=null && count!=this.tiUser.text && this.tiUser.text != "" && this.tiUser.text != null)) {
                Laya.LocalStorage.setItem("count", this.tiUser.text);
            }

            DataCenter.getInstance().setBagInfo(data.bags);
            DataCenter.getInstance().setPetInfo(data.pets);
            DataCenter.getInstance().setXkcAddressInfo(data.addr);
            DataCenter.getInstance().setXkcInfo(data.xkc);
            DataCenter.getInstance().setPhInfo(data.ph);
            DataCenter.getInstance().setToAddrInfo(data.toAddr);

            var imgArr: Array<any> = [];
            var pets: Array<any> = data.pets;
            var size = pets.length;
            var tempPet: any = null;
            for (var i = 0; i < size; i++) {
                tempPet = pets[i];
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
                else if (tempPet.x == 4) {
                    imgArr.push("res/petres/xa" + tempPet.a + ".png");
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
                else if (tempPet.x == 5) {
                    imgArr.push("res/petres/a" + tempPet.a + ".png");
                    imgArr.push("res/petres/b" + tempPet.b + ".png");
                    imgArr.push("res/petres/c" + tempPet.c + ".png");
                    imgArr.push("res/petres/d" + tempPet.d + ".png");
                    imgArr.push("res/petres/xe" + tempPet.e + ".png");
                    imgArr.push("res/petres/f" + tempPet.f + ".png");
                    imgArr.push("res/petres/g" + tempPet.g + ".png");
                    imgArr.push("res/petres/h" + tempPet.h + ".png");
                    imgArr.push("res/petres/i" + tempPet.i + ".png");
                    imgArr.push("res/petres/j" + tempPet.j + ".png");
                    imgArr.push("res/petres/k" + tempPet.k + ".png");
                    imgArr.push("res/petres/l" + tempPet.l + ".png");
                }
                else if (tempPet.x == 6) {
                    imgArr.push("res/petres/a" + tempPet.a + ".png");
                    imgArr.push("res/petres/b" + tempPet.b + ".png");
                    imgArr.push("res/petres/c" + tempPet.c + ".png");
                    imgArr.push("res/petres/d" + tempPet.d + ".png");
                    imgArr.push("res/petres/e" + tempPet.e + ".png");
                    imgArr.push("res/petres/f" + tempPet.f + ".png");
                    imgArr.push("res/petres/g" + tempPet.g + ".png");
                    imgArr.push("res/petres/h" + tempPet.h + ".png");
                    imgArr.push("res/petres/xi" + tempPet.i + ".png");
                    imgArr.push("res/petres/j" + tempPet.j + ".png");
                    imgArr.push("res/petres/k" + tempPet.k + ".png");
                    imgArr.push("res/petres/l" + tempPet.l + ".png");
                }
                if (tempPet.z != 0) {
                    imgArr.push("res/petres/z" + tempPet.z + ".png");
                }
                if (tempPet.z == 0) {
                    imgArr.push("res/petres/y" + tempPet.y + ".png")
                }
            }
            if (size == 0) {
               
                ScreenManager.getInstance().showMainScreen(ScreenType.MAIN_VIEW, data);
                 ScreenManager.getInstance().closeView(ScreenType.LOGIN_VIEW);
            }
            else {
                Laya.loader.load(imgArr, Laya.Handler.create(this, this.onAssetLoaded, [data]));
            }



        }
        else if (data.c == 1) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "手机号码不正确！");
        }
        else if (data.c == 2) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW, "密码错误！");
        }
        else if (data.c == 3) {
            ScreenManager.getInstance().showMainScreen(ScreenType.TIP_VIEW,  "用户不存在或密码错误！");
        }
    }

    private onAssetLoaded(data: any): void {
        ScreenManager.getInstance().showMainScreen(ScreenType.MAIN_VIEW, data);
        ScreenManager.getInstance().closeView(ScreenType.LOGIN_VIEW);
    }


    
}