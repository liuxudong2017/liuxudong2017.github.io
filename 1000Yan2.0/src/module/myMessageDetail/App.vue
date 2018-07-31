<template>
<div class="wrap">
	<header-tag title='消息详情'></header-tag>
	<div class="nav max-width">
		<h1>{{titles}}</h1>
		<div class="time">{{times}}</div>	
	</div>
	<div class="content max-width" v-html='content'>
	</div>
		
</div>	
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
export default{
	name:'app'
	,components:{HeaderTag}
	,data(){
		return{
			titles:'好消息！！'
			,times:'2017年08月18日 06：05'
			,content:`<p>为了思念飞机都是浪费螺丝钉解放山东方式的老师附件 了手机发送方师傅究竟是否</p>
				<p>1.sldjfk的肌肤抵抗力发飞机都是浪费速度发生的链接发多少</p><p>2,独立风机洞口收到了就发士大夫数量大幅减少的</p>`
		}
	}
}		
</script>
<style>
body{
	background: #fff;
}
.max-width{
	width:90%;
	margin:.2rem auto;
}	
.nav h1{
	font-size: .4rem;
}	
.nav .time{
	font-size:.3rem;
	color:#8c929b;
	margin:.2rem 0;
}
.nav{
	border-bottom:.02rem solid #8c929b;
}
.content{
	font-size:.4rem;
	color:#2c2c2c;
}
.content p{
	margin:.2rem 0;
	line-height:1.5em;
}
</style>