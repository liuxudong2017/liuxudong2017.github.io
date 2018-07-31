<template>
	<div class="">
		<header-tag navBarMess='书架' @showP='showP' :loginMess='loginMess'></header-tag>
		书架
		<Personal :showPersonal='isShow' @hideP='hideP'></Personal>
		<bookrack-item></bookrack-item>
	</div>
</template>
<script>
import HeaderTag from 'components/header/header';
import Personal from 'components/personal/personal';
import BookrackItem from './bookrackItem';
	export default {
		name:'choiceness',
		components:{HeaderTag,Personal,BookrackItem},
		props:['newMess','golbMess'],
		data(){
			return{
				callMess:this.newMess,
				isShowP:false,
				loginMess:this.golbMess.loginMess
			}
		},
		created(){
			this.$emit('BackNewMess',0)
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
<style scoped>
	
</style>