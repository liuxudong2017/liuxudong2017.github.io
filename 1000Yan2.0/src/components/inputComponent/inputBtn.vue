<template>
	<yd-cell-item class='qy-cell-item'>
             <img v-if='showIndex==0' src="./icon_zhuce_yanzhengma@3x.png" alt="" class="icon-img" slot='left'>
            <input type="text" slot="right" max="10" :placeholder="holderText">

            <!-- ↓↓关键代码是这里↓↓ -->
            <yd-sendcode slot="right" 
                         v-model="start1" 
                         @click.native="sendCode" 
                         type="warning"
                         init-str="获取验证码"
                         run-str="{%s}s"
                         reset-str='获取验证码'
                         storage-key="qySendCode"
                         class="send-colde-btn"
            ></yd-sendcode>
            <!-- ↑↑关键代码是这里↑↑ -->
        </yd-cell-item>
</template>
<script>
export default{
	name:'input-btn'
	,props:['icon','holder']
	,data()
	{
		return {
			start1:false
			,showBtn:this.icon
			,holderText:this.holder
		}
	}
	,computed:{
		showIndex:function(){
			switch(this.showBtn){
				case 'login-code': return 0;
				default:return 0;
			}
		}
		
	}
	,methods:
	{
		sendCode(){
			this.start1=true;
		}
	}
	,mounted(){
		
	}
}	
</script>
<style>
.yd-cell:after{border:0;}
.yd-cell-right input[type]{
	font-size:.4rem;
}

.qy-cell-item{
	border:.02rem solid #bfbfbf;
	border-radius:.8rem;
	margin-bottom: .4rem;
	position: relative;
}
.yd-cell-left{
	padding-right:.2rem
}	
.icon-img{
	width:.4rem;
	vertical-align: top;
}	
.send-colde-btn{
	width:2.2rem;
	margin-left:-1rem;
	padding:0;
	border-radius: .3rem;
	background: #fff;
	border:1px solid #f46094;
	color:#f46094;
	font-size:.4rem;
}
.qy-cell-item .yd-btn-disabled{
	background-color: #ccc;
    color: #f0f0f0;
    pointer-events: none;
    border: 0;
}
</style>