<template>
	<div class="qy-serach-tag-wrap">
		<!-- <yd-cell-group> -->
        <yd-cell-item>
            <span slot="left">
            	<yd-icon name="search" size='.5rem' color='#b9c1c8'></yd-icon>
            </span>
            <yd-input slot="right" v-model="inputValue" required :show-success-icon="false" :show-error-icon="false" placeholder="输入小说名或作者"></yd-input>
        </yd-cell-item>
    <!-- </yd-cell-group> -->
            <div class="qy-submit-btn" slot='else'>
    		搜索
    		</div>
    	
	</div>	
</template>
<script>
export default{
	name:'searchTag',
	data()
	{
		return {
			inputValue:''
		}
	}
}	
</script>
<style>
	.qy-serach-tag-wrap{
		display:box;
		display: -webkit-box;
		background:#f46094;
		padding:.24rem;
	}
	input::-webkit-input-placeholder{ 
		color:#b9c1c8;
		font-size:.33rem;
	}
	
	.qy-submit-btn{
		 box-flex: 1;
		 -webkit-box-flex: 1;
		 /*padding:.24rem;*/
		 height: .8rem ;
		 text-align: right;
		 line-height:.8rem;
		 font-size:.44rem;
		 color:#fff;
	}
	.qy-serach-tag-wrap .yd-cell-item{
		box-flex: 2;
		-webkit-box-flex: 2;
		height:.8rem;
		background: #fff;
		border-radius:.4rem
	}	
	.qy-serach-tag-wrap .yd-cell-right input[type=text],.qy-serach-tag-wrap .yd-cell-right{
		height:.8rem;
		min-height:.6rem;
		font-size:.33rem;
		color: black;
	}
	.qy-serach-tag-wrap .yd-cell-item:not(:last-child):after{
		border:0;
	}
</style>