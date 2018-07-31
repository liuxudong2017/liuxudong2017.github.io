<template>
<div>
	<Tag :newMess='newMess'></Tag>
	
		<router-view @BackNewMess='updataNewMess' :newMess='newMess' :golbMess="golbMess"></router-view>

</div>
</template>
<script>
import Tag from '../../components/tag/tag';
import Personal from '../../components/personal/personal';
import axios from 'axios';
	export default{
		name:'App',
		data(){
			return {
				newMess:[0,0,0,0],//每个页面有几条新信息
				golbMess:
				{
					loginMess:{loginState:false,userImg:'http://www.1000yan.com/upload/image/20170621/1498008997595975.png'}
				}
			}
		},
		components:{Tag,Personal}
		,methods:{
			updataNewMess(value){
				this.$set(this.newMess,value,0);//更新未读信息
			}
		},
		created(){
			let ar=[1,0,1,1];
			this.newMess=ar;
			console.log('----')
			//获取全局信息
			// axios.get('/web/index/test').then(function(re){console.log(re)})
		}
	}
	
</script>
<style>
	body{
		background: #fff;
	}
	.ellipsis{
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.ellipsis-list-2{
		display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    overflow: hidden;
	}
	
	:after, :before{
	    border: 0!important;
	}
	.yd-list-theme4{
		padding:0 2%;
	}
	.yd-list-title{
		font-size:.3rem;
		color:#3e3e3e;
		text-align: left;
		font-weight: 600;
	}
	.yd-list-theme4 .yd-list-item .yd-list-img{
	height:auto;
	padding-bottom: 0;
}

</style>



