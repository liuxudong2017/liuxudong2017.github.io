<template>
	<span v-if='obj.index==1' class="base news">{{obj.content}}</span>
	<span v-else-if='obj.index==2' class="base vip">{{obj.content}}</span>	
</template>
<script>
export default{
	name:'label',
	props:['value'],
	data(){
		return{
			obj:this.value
		}
	}
}
</script>
<style scoped>
	.base{
		display: inline-block;
	    width: 0.7rem;
	    height: 0.46rem;
	    border-radius: 0.04rem;
	    text-align: center;
	    margin: 0 0.08rem;
	    padding-top: .06rem;
	    padding-bottom: .04rem;
	}
	.news{
		border:0.02rem solid #f78ab1;
		color:#f78ab1;
	}	
	.vip{
		border:.02rem solid #fea700;
		color:#fea700;
	}
</style>