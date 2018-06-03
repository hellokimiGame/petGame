/**
* name 
*/

class ConnUitls {


	private static instance: ConnUitls;
	/**
	 * 获取实例的静态方法实例
	 * @return
	 *
	 */
	public static getInstance(): ConnUitls {
		if (!this.instance) {
			this.instance = new ConnUitls();
		}
		return this.instance;
	}
	// private url: string = "http://laptop-avrje8l8:8080/PetGameService";
	private url: string = "http://pay.xiinz.com/PetGameService";
	private methodType: string = "GET";
	private hr:  Laya.HttpRequest;
	private currentCaller: any = null;
	private currentCallback: Function = null;
	private isRequesting: boolean = false;
	constructor() {
		this.hr = new Laya.HttpRequest();
		this.hr.on(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
		this.hr.on(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
		this.hr.on(Laya.Event.ERROR, this, this.onHttpRequestError);
	}

	public sendReq(data: Object, caller: any = null, callback: Function): void {
		if (this.isRequesting) {
			return;
		}
		this.isRequesting = true;

		this.currentCallback = callback;
		this.currentCaller = caller;
		var sendData:string="?";
		for (var key in data) {
			if (data.hasOwnProperty(key) && key!="e") {
				sendData+=(key+"="+data[key]+"&");
				
			}
		}
		this.hr.send(this.url+data["e"] +sendData, null, this.methodType, "text");



	}

	private onHttpRequestProgress(e: any): void {
		console.log(e);
	}
	/**
	 * 
	 * @param e 收到返回处理
	 */
	private onHttpRequestComplete(e: any): void {
		var rdata = JSON.parse(this.hr.data);
		console.log("data==" + this.hr.data);

		this.currentCallback.call(this.currentCaller, rdata);
		this.isRequesting = false;
	}

	private onHttpRequestError(e: any): void {
		console.log(e);
	}
}

