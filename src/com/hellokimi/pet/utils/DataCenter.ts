/*
* name;
*/
class DataCenter {
    private static _instance: DataCenter;
    private _bagInfo:Array<any>=[];
    private _petInfo:Array<any>=[];
    private _xkcInfo:number=0;
    private _xkcAddressInfo:string=null;
    private _phInfo:string=null;//推广信息
    private _drawInfo:Array<any>=[];
    private _toAddrInfo:string=null;


    private constructor() {

    }

    public static getInstance(): DataCenter {
        if (DataCenter._instance == null) {
            DataCenter._instance = new DataCenter();
        }
        return DataCenter._instance;
    }
    public getToAddrInfo():string{
        return this._toAddrInfo;
    }
    public getBagInfo():Array<any>
    {
        return this._bagInfo;
    }
     public getPetInfo():Array<any>{
         return this._petInfo;
    }
    public getXkcInfo():number{
         return this._xkcInfo;
    }
    public getXkcAddressInfo():string{
        return this._xkcAddressInfo;
    }
     public getPhInfo():string{
       return this._phInfo;
    }
      public getDrawInfo():Array<any>{
        return this._drawInfo;
    }

    public setToAddrInfo(addInfo:string):void{
        this._toAddrInfo=addInfo;
    }
    public setBagInfo(bag:Array<any>):void {
        this._bagInfo=bag;
    }
    public setPetInfo(pet:Array<any>):void{
        this._petInfo=pet;
    }
    public setXkcInfo(xkc:number):void{
        this._xkcInfo=xkc;
    }
     public setXkcAddressInfo(addr:string):void{
        this._xkcAddressInfo=addr;
    }
     public setPhInfo(ph:string):void{
        this._phInfo=ph;
    }
  


}