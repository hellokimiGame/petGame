    class store extends ui.shangcheng.shangchengUI{
        private  Event=laya.events.Event;
        private columns:number;
         private list:Laya.List=new Laya.List();
    constructor(){
        super();
        this.toolItemList();
        Laya.stage.on(storeToolItems.ROTATE,this,this.onStoreBuy)
        this.btnClose.on(this.Event.CLICK,this,this.onClose);
    }
    //关闭按钮
         private onClose():void{
             this.removeSelf();
        }
       
    //添加信息
      private  toolItemList():void{
            this.list.itemRender=storeToolItems;
              
            var data: Array<Object> = [
            ];
           var data1={id:10001,price:10,desc:"增加宠物饱食度",name:"粮食",url:"res/share/daoju1.png"};
           var data2:Object=null;
               data2={id:10002,price:50,desc:"增加宠物健康度",name:"药品",url:"res/share/daoju2.png"};
            data.push(data1); 
            data.push(data2); 
          
             this.columns=Math.floor(data.length/3)+(data.length%3>0?1:0);
                    this.list.repeatX=3;
                    this.list.repeatY=this.columns;
            //位置设置
            this.list.x=15;
            this.list.y =128;
            this.list.spaceX=10;
            this.list.spaceY=3;
            this.list.width=720;
            this.list.height=1280;

            // 使用但隐藏滚动条
            this.list.vScrollBarSkin = "";
            this.list.selectEnable = true;
            this.list.selectHandler = new Laya.Handler(this, this.onSelect);
            this.list.renderHandler = new Laya.Handler(this, this.updateItem);
            this.addChild(this.list);
            this.list.array = data;
        }

        private updateItem(cell: storeToolItems, index: number): void {
            cell.setImg(cell.dataSource);
            
        }
     
        
        private onSelect(index: number): void {
            console.log("当前选择的索引：" + index);
        }
        private onStoreBuy(data:Object){
        var sb:storeBuy=new storeBuy(data);
            this.addChild (sb);
        }
    }
   
            

    
        
        

