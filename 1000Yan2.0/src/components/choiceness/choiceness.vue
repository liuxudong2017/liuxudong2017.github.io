<template>
	<div class="" style="padding-bottom:1rem">
	 <yd-layout>
		<header-tag navBarMess='小说精选' @showP='showP' :loginMess='loginMess'></header-tag>
		
		<!-- 轮播 -->
		<Slider :sliderData='sliderData'></Slider>
		<!-- 分类 -->
		<Classify :classifyData='classifyData'></Classify>
		<!--热门推荐 -->
		<hot-recommend></hot-recommend>
		<!-- 最新更新 -->
		<Update></Update>
		<!--个人中心 -->
		<Personal :showPersonal='isShow' @hideP='hideP'></Personal>
		精选
	</yd-layout>
	</div>
</template>
<script>
import HeaderTag from 'components/header/header';
import Personal from 'components/personal/personal';
import Slider from './slider';
import Classify from './classify';
import HotRecommend from './hotRecommend';
import Update from './update';
	export default {
		name:'choiceness',
		components:{HeaderTag,Personal,Slider,Classify,HotRecommend,Update},
		props:['newMess','golbMess'],
		data(){
			return{
				callMess:this.newMess,//未读信息
				isShowP:false,//是否显示个人中心
				loginMess:this.golbMess.loginMess,//登陆信息
				sliderData:
				{
					

				},//banner轮播
				classifyData://分类数据
				[

				]
			}
		},
		created(){

			this.$emit('BackNewMess',1);
			//轮播图
			this.sliderData=
			{
				imgUrlArr:['http://www.1000yan.com/upload/image/banner_img/254_x2.jpg','http://www.1000yan.com/upload/image/banner_img/216_x2.jpg'],
				hrefUrlArr:['#','#']

			};
			//分类精选
			this.classifyData=
			[
				{title:'日韩精选',imgUrlArr:['',''],hrefUrlArr:['#','#'],cont:'001'},
				{title:'现代言情',imgUrlArr:['',''],hrefUrlArr:['#','#'],cont:'002'},
				{title:'现代言情',imgUrlArr:['',''],hrefUrlArr:['#','#'],cont:'002'},
				{title:'古代言情',imgUrlArr:['',''],hrefUrlArr:['#','#'],cont:'003'},
				{title:'同人推荐',imgUrlArr:['',''],hrefUrlArr:['#','#'],cont:'004'},
				{title:'同人推荐',imgUrlArr:['',''],hrefUrlArr:['#','#'],cont:'005'}
			]
		},
		methods:{
			showP(){
				this.isShowP=true;
				
			},
			hideP(){
				this.isShowP=false;
			}
		},
		computed:{
			isShow(){
				return this.isShowP
			}
		},
		fun(){console.log('收到加载')}
	}
</script>
<style>
	.img-auto{
		width: 80%;
	    display: block;
	    margin-left: 10%;
	    border-radius: .16rem;
	}
	
</style>