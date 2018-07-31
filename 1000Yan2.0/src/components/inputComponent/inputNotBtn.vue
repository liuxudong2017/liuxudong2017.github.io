<template>

	<yd-cell-item class='qy-cell-item' v-if="showIndex==0">
	            <span slot="left" class='qy-cell-left'>
	            	<img src="./icon_signin_phone@3x.png" alt="" class="icon-img">
	            </span>
	            <yd-input slot="right" v-model="input4" regex="mobile" :placeholder="holderText" :show-success-icon="false" :required='true'></yd-input>
    </yd-cell-item>
    <yd-cell-item class='qy-cell-item' v-else-if="showIndex==1">
	            <span slot="left" class='qy-cell-left'>
	            	<img src="./icon_signin_ren@3x.png" alt="" class="icon-img">
	            </span>
	            <yd-input slot="right" v-model="input4" :placeholder="holderText" :show-success-icon="false" :required='true'></yd-input>
    </yd-cell-item>
    <yd-cell-item class='qy-cell-item' v-else-if="showIndex==2">
	            <span slot="left" class='qy-cell-left'>
	            	<img src="./icon_signin_secretwords@3x.png" alt="" class="icon-img">
	            </span>
	            <yd-input slot="right" v-model="input4" type="password" :placeholder="holderText"></yd-input>
    </yd-cell-item>
		
</template>
<script>
export default{
	name:'input'
	,props:['icon','holder']
	,data(){
		return{
			showBtn:this.icon
			,holderText:this.holder
		}
	}
	,computed:{
		showIndex:function()
		{
			switch(this.showBtn){
				case 'phone': return 0;
				case 'user-name':return 1;
				case 'password':return 2;
				default:return 0;
			}
		}
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
.qy-cell-item .yd-input-warn:after{
	color:#f46094;
}
.qy-cell-left{
	padding-right: .2rem
}	
.icon-img{
	width:.4rem;
	vertical-align: top;
}	
</style>