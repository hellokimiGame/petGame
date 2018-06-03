/*
* name;
*/

class travel extends ui.zhuye.lvxingUI{
    private Event = laya.events.Event;
    constructor(data:any){
        super();
        this.imgTravel.skin="res/changjing/"+data.sid+".png";
        this.btnCamera.on(this.Event.CLICK,this,this.onCamera)
        this.btnClose.on(this.Event.CLICK,this,this.onClose);
        this.x=10;
        this.y=0;
    }

    private downLoadImage(canvas,name):void{
        var a=document.createElement("a");
         a.href = canvas.toDataURL();  
         a.download = name;  
         a.click();  
    }
    private RED_Range(parent,node):void{
        var sp = new Laya.Sprite();  
    sp.graphics.drawLine(0, 0, node.width, 0, "#ff0000", 3);  
    sp.graphics.drawLine(0, 0, 0, node.height, "#ff0000", 3);  
    sp.graphics.drawLine(node.width, node.height, 0, node.height, "#ff0000", 3);  
    sp.graphics.drawLine(node.width, node.height, node.width, 0, "#ff0000", 3);  
    sp.zOrder = 10100;   
    parent.isTagNode = sp;  
    parent.addChild(sp);  
}
        private onCamera():void{
     this.btnCamera.visible=false;
     var htmlC =Laya.stage.drawToCanvas(428,306,-37,-236);    
     var canvas = htmlC.getCanvas()  
     var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url 
        window.location.href= imgUri;
        this.downLoadImage(canvas,"jietu")
//获取截屏区域的texture
    var _texture = new laya.resource.Texture(htmlC);    
    var bg = new Laya.Image()  
    bg.scale(0.8,0.8)  
    bg.centerX = 0.5;  
    bg.centerY = 0.5;  
    bg.size(Laya.stage.width,Laya.stage.height)  
    Laya.stage.addChild(bg)  

     //将截屏的texture进行draw绘制并显示到舞台  
    var sp2 = new Laya.Sprite();  
    //阻止事件传递  
    sp2.on(Laya.Event.MOUSE_DOWN, sp2, function (e) {  
        e.stopPropagation();  
    });  
        }
     private onClose():void{
        this.removeSelf();
    }
}