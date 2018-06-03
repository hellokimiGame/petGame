class bag extends ui.beibao.beibaoUI {
    private Event = laya.events.Event;
    private columns: number;
    private list: Laya.List = new Laya.List();

    constructor() {
        super();
        var bags: Array<any> = DataCenter.getInstance().getBagInfo();
        this.toolItemList(bags);
        this.btnClose.on(this.Event.CLICK, this, this.onClose);
    }

    //关闭按钮
    private onClose(): void {
        this.removeSelf();
    }

    //添加信息
    private toolItemList(data: any): void {
        this.list.itemRender = bagToolItems;

        this.columns = Math.floor(data.n / 4) + (data.n % 4 > 0 ? 1 : 0);
        this.list.repeatX = 4;
        this.list.repeatY = this.columns;
        //位置设置
        this.list.x = 30;
        this.list.y = 128;
        this.list.spaceX = 30;
        this.list.spaceY = 20;
        this.list.width = 720;
        this.list.height = 1280;

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


}








