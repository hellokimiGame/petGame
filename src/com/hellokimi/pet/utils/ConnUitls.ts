/**
* name 
*/
module com.hellokimi.pet.utils{
	import HttpRequest=Laya.HttpRequest;
	import Event=Laya.Event;
	export class ConnUitls{
		
		private static instance:ConnUitls;
		/**
		 * 获取实例的静态方法实例
		 * @return
		 *
		 */
		public static getInstance():ConnUitls
		{
			if(!this.instance)
			{
				this.instance = new ConnUitls();
			}
			return this.instance;
		}
		private url:string = "http://127.0.0.1:9393/";
		private  methodType:string = "POST";
		private hr: HttpRequest;
		private  currentCaller:any= null;
		private  currentCallback:Function = null;
		private isRequesting:boolean = true;
		constructor(){
			this.hr=new HttpRequest();
			this.hr.once(Event.PROGRESS, this, this.onHttpRequestProgress);
			this.hr.once(Event.COMPLETE, this, this.onHttpRequestComplete);
			this.hr.once(Event.ERROR, this, this.onHttpRequestError);
		}

		public sendReq(data:JSON, caller:any=null, callback:Function):void{
					if(this.isRequesting){
						return;
					}
					this.isRequesting=true;

					this.currentCallback = callback;
					this.currentCaller = caller;
					this.hr.send(this.url+data["e"],JSON.stringify(data),this.methodType,"text");
					
					

		}

		private onHttpRequestProgress(e:any):void{
			console.log(e);
		}
		/**
		 * 
		 * @param e 收到返回处理
		 */
		private onHttpRequestComplete(e:any):void{
			var rdata = JSON.parse(this.hr.data);
			console.log("data=="+this.hr.data);

			this.currentCallback.call(this.currentCaller,rdata);
			this.isRequesting=false;
		}

		private onHttpRequestError(e:any):void{
			console.log(e);
		}
	}


}