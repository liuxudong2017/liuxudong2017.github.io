let vm=new Vue({
	el:"#app"
	,data:{
		iphone:""
		,code:''
		,codeStatus:false
		,mess:{
			skiName:'北京南山滑雪场'
			,info:'双板、雪鞋'
			,cm:175
			,kg:70
			,shoeNum:43
		}
		,payType:1//0 阿里支付 1微信支付
		,allRMB:300
		,times:60
	}
	,methods:{
		checkPay(e){
			let index=e.target.tabIndex;
			this.payType==index?"":this.payType=index;
		}
		,getCode(e){
			if(this.iphone!=''){
				this.codeStatus=true;
				let stop=setInterval(()=>{
					this.times-=1;
					if(this.times<=0){
						clearInterval(stop);
						this.codeStatus=false;
					}
					
				},1000);
			}else{
				alert('手机号不能为空');
			}
		}
		,submitOrder(){
			console.log(this.code+"==="+this.iphone);
		}
	}
	,created(){ //创建 可访问data

	}
	,mounted(){//挂在

	}
	,beforeDestroy(){//销毁前

	}
});