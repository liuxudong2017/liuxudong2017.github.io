<template>
 <yd-navbar :title="titles" color='#fff' bgcolor='#f46094' fontsize='.5rem'>
 	<div slot='left'>
 		 <yd-navbar-back-icon @click.native='goTopPage' color='#fff'></yd-navbar-back-icon>
 	</div>
 	<a v-if='aBtn' slot='right' class="qy-submit-btn" :href='hrefs'>{{btnText}}</a>
 	<div v-else-if='!aBtn' slot='right' class="qy-submit-btn">{{btnText}}</div>
 </yd-navbar>		
</template>
<script>
export default{
	'name':'secondHeader',
	 props:['title','text','href'],
	 props:{
	 	 title:{type:String,required: true}
	 	,text:{type:String,default:'提交'}
	 	,href:{type:String,default:''}
	 }
	 ,data()
	 {
	 	return {
	 		titles:this.title
	 		,btnText:this.text
	 		,hrefs:this.href
	 		
	 	}
	 }
	 ,computed:{
	 	aBtn(){
	 		return this.href?true:false
	 	}
	 }
	 ,methods:{
	 	goTopPage(){
	 		console.log('backTop');
	 		window.history.back(1);
	 	}
	 }
}		
</script>
<style>
	.qy-submit-btn{
		display: block;
		color: #fff;
		font-weight: 600;
		padding-top:.2rem;
	}
</style>