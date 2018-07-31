<template>
	<div class="books">
		<header-tag navBarMess='书库' @showP='showP' :loginMess='loginMess'></header-tag>
		<slider-tab></slider-tab>
		<!-- <Book @loadingMore='loadding'></Book> -->
		
		<Personal :showPersonal='isShow' @hideP='hideP'></Personal>

	</div>
</template>
<script>

import HeaderTag from 'components/header/header';
import Personal from 'components/personal/personal';
import Book from './book';
import SliderTab from './sliderTab';
	export default {
		name:'books',
		components:{HeaderTag,Personal,Book,SliderTab},
		props:['newMess','golbMess'],
		data(){
			return{
				callMess:this.newMess,
				isShowP:false,
				loginMess:this.golbMess.loginMess
			}
		},
		created(){
			
			this.$emit('BackNewMess',2);
		},
		methods:{
			showP(){
				this.isShowP=true;
				
			},
			hideP(){
				this.isShowP=false;
			},
			loadding(value){//滑动加载更多
				//去加载
				console.log('loadding....');

			}
		},
		computed:{
			isShow(){

				return this.isShowP
			}
		}

	}
</script>
<style>
	.books .yd-badge{
		font-size:0.4rem;
		margin-right: .1rem;
		padding: 0.12rem .24rem;
	}
	.books .filtrate-active{
		color:#FFF!important;
		/*border:.02rem solid #f46094;*/
		background: #f46094;
	}
	.books .list-body .btn{
		display: inline-block;
	}
	.yd-btn-hollow{
		border:.5rem solid #f46094;
	}
	
</style>