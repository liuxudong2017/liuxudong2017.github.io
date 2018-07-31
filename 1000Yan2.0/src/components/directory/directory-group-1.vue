<template>
<!-- 没有卷的目录 -->
	<ul class="qy-directory-group">
		<li v-for='(item,key) in directoryData' :key='key'>
			<a :href="getHref()" :class='{"qy-read-static":item.chapterStatus}'>
				<p class="chapter-text ellipsis">{{item.chapter}}</p>
				<yd-badge v-if='item.chapterType' shape="square" type="hollow">VIP</yd-badge>
			</a>
		</li>	
	</ul>	
</template>
<script>
export default{
	name:''
	,props:['qyData']
	,data(){
		return{
			directoryData:this.qyData
		}
	}
	,methods:{
		getHref(){
			return 'index.html'
		}
	}
	,watch:{
		qyData(){
			this.directoryData=this.qyData
		}
	}
}		
</script>
<style>
.qy-directory-group li{
	border-bottom:.02rem dotted #A1A8B1;
	padding: .2rem;
}
.qy-directory-group a{
	font-size:.4rem;
	color:#5b5b5b;
	vertical-align: middle;
	display:block;
	width:100%;
}
.qy-directory-group a.qy-read-static>p{
	color:#9FA7B0;
	background: #fff;
    font-size: .4rem;
}
.qy-directory-group .yd-badge-hollow:after,.qy-directory-group .yd-badge-hollow{
	border-color:#f46094;
	color:#f46094;
}	
.qy-directory-group .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.qy-directory-group .chapter-text{
	max-width:85%;
	display: inline-block;
	vertical-align: middle;
	color: black;
    font-size: .4rem;
    background: #fff;
}	
</style>