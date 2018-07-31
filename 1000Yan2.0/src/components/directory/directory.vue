<template>
<div class="qy-directory-wrap">
	<div class="qy-directory-title">
		<p>
			完结 共<span>{{directoryNum}}</span>章
		</p>
		<img src="./img/icon_mlbfj_daoxu@3x.png" alt="" class="qy-srot-icon">
	</div>
	<directory-group :qy-data='directoryData' v-if='themes==1'></directory-group>
	<directory-groupb :qy-data='directoryData2' v-else-if='themes==2'></directory-groupb>
	<div class="qy-add-more">加载更多</div>
</div>		
</template>
<script>
import directoryGroup from 'components/directory/directory-group-1';
import directoryGroupb from 'components/directory/directory-group-2';
export default{
	name:'mu-lu-mou-ban'
	,props:['theme']
	,components:{directoryGroup,directoryGroupb}
	,data(){
		return{
			directoryNum:90
			,themes:this.theme
			,d:'111'
			,a:'2222'
			,directoryData:[
				{chapter:'第一章：旺仔相爱',chapterStatus:true,chapterType:false,chapterId:0}//chapter:是否阅读了
				,{chapter:'第二章：旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱',chapterStatus:false,chapterType:true}//chapterType是否是VIP
				,{chapter:'第三章：旺仔相爱',chapterStatus:true,chapterType:true}
			]
			,directoryData2:[
				{chapter:'第一卷'}
				,{chapter:'第一章：旺仔相爱',chapterStatus:true,chapterType:false,chapterId:0}
				,{chapter:'第二章：旺仔相爱',chapterStatus:false,chapterType:false}//chapterType是否是VIP
				,{chapter:'第三章：旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱旺仔相爱',chapterStatus:true,chapterType:true}
				,{chapter:'第二卷'}
				,{chapter:'第一章：旺仔相爱',chapterStatus:true,chapterType:false,chapterId:0}
				,{chapter:'第二章：旺仔相爱',chapterStatus:false,chapterType:false}//chapterType是否是VIP
				,{chapter:'第三章：旺仔相爱',chapterStatus:true,chapterType:true}
			]
		}
	}
	
	,created(){
		console.log(this.d);
	}
}		
</script>
<style>
.qy-directory-title{
	display: flex;
	justify-content: space-between;
	padding:.2rem;
	border-bottom: .02rem dotted 
}
.qy-directory-title>p{
	font-size:.4rem;
	color:#5b5b5b;
	background: #fff;
}
.qy-directory-title span{
	color:#f46094;
}
.qy-directory-title img{
	height:.4rem;
}

.qy-directory-wrap .qy-add-more{
	font-size: .4rem; 
	color:#5b5b5b;
	text-align: center;
	padding:.2rem;
	background: #f1f2f6;
}
</style>