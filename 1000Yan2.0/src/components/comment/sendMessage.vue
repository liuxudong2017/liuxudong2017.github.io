<template>
<div class="send-wrap" @click='isChecked=false'>
	 <div class="face-wrap" v-if='isChecked'>
    	<img v-for='key in 75' :key='key' :src="getSrcImg(key)" alt="" class='face-img' @click='sendFaceImg(key)'>
    </div>
	 <yd-cell-group>
        <yd-cell-item>
            <yd-input slot="left" v-model="input" placeholder="回复评论" ref='sendInput'></yd-input>
            <span :class="{checked:isChecked}" slot="right" @click.stop='sendFace'>&#9786;</span>
            <img class="send-btn-img" src="./icon_comment_send@3x.png" alt="" slot='right' @click.stop='sendMessage'>
        </yd-cell-item>
    </yd-cell-group>
   
</div>		
</template>
<script>
export default{
	name:'send'
	,data(){
		return{
			input:''
			,isF:false
			,isChecked:false
		}
	}
	,methods:{
		sendFace(){
			this.$refs.sendInput.setFocus();
			this.isChecked=!this.isChecked;

		}
		,getSrcImg(i){
			return 'https://www.1000yan.com/static/web/plug/qqFace/arclist/'+i+'.gif'
		}
		,sendFaceImg(i){
			this.input=this.input+'[em_'+i+']';
			this.$refs.sendInput.setFocus();
		}
		,sendMessage(){
			this.$emit('listenSendBtn',this.input);
			this.input='';
		}
	}
	,mounted(){

	}
}		
</script>
<style>
.send-wrap{
	position:fixed;
	bottom:0;
	z-index:999;
	border-top:.02rem solid #b2b2b2;
	width:100%;
}
.send-wrap .yd-cell-box{
	margin-bottom: 0;
}
.send-wrap .yd-cell-left{
	width:80%;
}
.send-wrap .yd-cell:after{
	border:0;
}
.send-wrap .yd-cell-right span{
	font-size:.9rem;
}
.send-wrap .checked{
	color:#f46094;
}
.send-wrap .send-btn-img{
	width:.8rem;
	padding:.2rem 0;
}
.send-wrap .face-wrap{
	background: #fff;
    padding: .04rem .24rem;
    width: 100%;
    border-bottom:.02rem solid #b2b2b2;
}
.send-wrap .yd-input>input{
	font-size: .4rem;
}		
</style>