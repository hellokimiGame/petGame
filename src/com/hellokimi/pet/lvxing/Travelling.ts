/*
* name;
*/
class Travelling extends ui.zhuye.lvxingzhongUI{
     private Event = laya.events.Event;
      private pc1: PetCreate;
    constructor(data:any){
        super();
        var tempPet:any=null;
		var pets: Array<any>;
		pets = DataCenter.getInstance().getPetInfo();
		var length1: number = pets.length;
        this.lblInf.text=data.inf;
        for(var i=0;i<length1;i++){
            if(pets[i].isM==1){
                tempPet=pets[i];
                break;
            }
        }

        if(tempPet==null){
            return;
        }

        	var path:any = {};
			path.id = tempPet.id;
			path.food = tempPet.food;
			path.healthy = tempPet.healthy;
			path.isM = tempPet.isM;
			path.l = "res/petres/l" + tempPet.l + ".png";
			if (tempPet.x == 1 || tempPet.x == 2 || tempPet.x == 3) {
				path.a = "res/petres/i" + tempPet.i + ".png";
			}
			else if (tempPet.x == 5) {
				path.a = "res/petres/xi" + tempPet.a + ".png";
			}
			path.j = "res/petres/j" + tempPet.j + ".png";
			path.k = "res/petres/k" + tempPet.k + ".png";
			path.h = "res/petres/h" + tempPet.h + ".png";
			path.g = "res/petres/g" + tempPet.g + ".png";
			path.f = "res/petres/f" + tempPet.f + ".png";

			if (tempPet.x == 1 || tempPet.x == 2 || tempPet.x == 3) {
				path.e = "res/petres/e" + tempPet.e + ".png";
			}
			else if (tempPet.x == 6) {
				path.e = "res/petres/xe" + tempPet.e + ".png"
			}
			path.d = "res/petres/d" + tempPet.d + ".png";
			path.c = "res/petres/c" + tempPet.c + ".png";
			path.b = "res/petres/b" + tempPet.b + ".png";
			if (tempPet.x == 1 || tempPet.x == 2 || tempPet.x == 3) {
				path.a = "res/petres/a" + tempPet.a + ".png";
			}
			else if (tempPet.x == 4) {
				path.a = "res/petres/xa" + tempPet.a + ".png";
			}
			if (tempPet.yy != null) {
				path.y = "res/petres/y" + tempPet.yy + ".png";
			}
			else if (tempPet.z != 0) {
				path.z = "res/petres/z" + tempPet.z + ".png";
			}


        this.imgTravel.skin="res/changjing/"+data.sid+".png";
        var sx:number=this.imgTravel.x;
        var wid:number=this.imgTravel.width;
      
        this.pc1 = new PetCreate();
        this.pc1.init(path);
        this.addChild(this.pc1);
        this.pc1.visible = true;
        this.pc1.scale(0.5,0.5);
        var petW:number=this.pc1.width/2;
        this.pc1.x=sx+Math.random()*(wid-petW-sx);
        this.pc1.y=550;
        console.log(" this.pc1.x="+ this.pc1.x+" sx ="+sx +"  wid="+wid+"  this.pc1.width/2="+this.pc1.width/2);
        this.btnClose.on(this.Event.CLICK,this,this.onClose);
        this.x=-20;
        this.y=-20;
    }
    private onClose():void{
        this.removeSelf();
    }

}