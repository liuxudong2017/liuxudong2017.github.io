<template>
	<div class="">
		<header-tag navBarMess='PK榜' @showP='showP' :loginMess='loginMess'></header-tag>
		<Personal :showPersonal='isShow' @hideP='hideP'></Personal>
		<pk-item></pk-item>
	</div>
</template>
<script>
	import HeaderTag from 'components/header/header';
	import Personal from 'components/personal/personal';
	import PkItem from './pkItem';
	export default {
		name:'pkRank',
		components:{HeaderTag,Personal,PkItem},
		props:['newMess','golbMess'],
		data(){
			return{
				callMess:this.newMess,
				isShowP:false,
				loginMess:this.golbMess.loginMess
			}
		},
		created(){
			this.$emit('BackNewMess',4)
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
		}
	}
</script>
<style>

</style>