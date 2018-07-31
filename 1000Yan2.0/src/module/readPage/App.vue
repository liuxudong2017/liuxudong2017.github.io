<template>
<div :class="[setFontSize(),setBgColor(),'qy-read-wrap']">
	<qy-chapter :chapter='chapterObj' :pCommentNumArr='pCommentNumArr' @click.native='showReadTool=!showReadTool' :showChapterTitle='showChapterTitle'></qy-chapter>
	<qy-chapter-tool @listenTool='listenTool' :bg='bgActive' :font='fontSize' v-if='showReadTool'></qy-chapter-tool>
</div>		
</template>
<script>
import qyChapter from 'components/chapter/chapter';
import qyChapterTool from 'components/chapter/chapterTool';
import {storage} from 'common/js/utils/browserHelp';
export default{
	name:'readPage'
	,watch:{
		showReadTool(){
			this.showChapterTitle=this.showReadTool;
			console.log('showChapterTitle'+this.showChapterTitle);
		}
	}
	,components:{qyChapter,qyChapterTool}
	,created(){
		let readTool=storage.getLocal('readTool',true);
		if(readTool){
			this.fontSize=readTool.fontSize;
			this.bgColor=readTool.bgColor;
		}
		// 格式化章节内容
		let chapterText=`<p style='text-indent:2em;'>专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术</p>
					<p style='text-indent:2em;'>专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术</p>
					<p style='text-indent:2em;'>专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术</p>
				`;
		let chapterTextArr=chapterText.split('</p>');
			chapterTextArr.pop();
		let formatTextArr=[];

		for(let i=0;i<chapterTextArr.length;i++){
			let str='';
			// let str='<div class="qy-p">';
			str+=chapterTextArr[i];
			str+='<span class="qy-comment-p">(';
			str+=this.pCommentNumArr[i];
			str+=')条评论</span>';
			str+='</p>'
			// str+='</div>';
			formatTextArr.push(str);
		}
		this.chapterObj.chapterContent=formatTextArr;
		this.chapterObj.chapterName='第一章:板砖破武术...';
		console.log(formatTextArr);

	}
	,computed:{
		bgActive(){
			let arr=[false,false,false,false,false];
			if(this.bgColor!=-1)
				arr[this.bgColor]=true;
			return arr;
		}
	}
	,methods:{
		loadList() {
                const url = 'http://list.ydui.org/getdata.php';
                    // this.$dialog.toast({
                    //     mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
                    // });

               	this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
                
        }
        ,listenTool(val){
        	switch(val.type){
        		case 'fs'://fontSize
        			this.fontSize=val.fontSize;
        			//this.$set(this.chapterObj,'fontSize',val.fontSize);
        			break;
        		case 'bg':
        			if(val.bgColor==0){
        				val.nightMode?'':val.bgColor=-1;
        			}
        			this.bgColor=val.bgColor;
        			break;
        	}
        	storage.setLocal('readTool',{
        		"fontSize":this.fontSize
        		,"bgColor":this.bgColor
        	});
        }
        ,setFontSize(){
        	return 'qy-fs-'+this.fontSize;
        }
        ,setBgColor(){
        		if(this.bgColor==-1)
        			return '';
        	return 'qy-bg-'+this.bgColor;
        }
    }
	,data(){
		return {
			chapterObj:{
				chapterName:'第一章:板砖破武术...'
				,chapterContent:`<p style='text-indent:2em;'>专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术</p>
					<p style='text-indent:2em;'>专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术</p>
					<p style='text-indent:2em;'>专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术专家破武术</p>
				`	
			}
			,fontSize:2
			,bgColor:-1
			,showReadTool:false
			,pCommentNumArr:[2,3,4,5]
			,showChapterTitle:false//文章标题：防止工具栏中弹窗页面被章节名挡住
		}
	}
}	
</script>
<style>
body{
	background: #fff;
}
.qy-read-wrap p{
	font-size:.4rem;
	line-height: 1.5em;
	padding-bottom: .2rem;
}
/*字体功能*/
.qy-fs-1 p{
	font-size:.3rem;
	line-height: 1.5em;
}
.qy-fs-2 p{
	font-size:.4rem;
	line-height: 1.5em;	
}
.qy-fs-3 p{
	font-size:.5rem;
	line-height: 1.5em;
}
.qy-fs-4 p{
	font-size:.6rem;
	line-height: 1.5em;
}
.qy-fs-5 p{
	font-size:.7rem;
	line-height: 1.5em;
}
/*背景功能*/
.qy-bg-0 .yd-list-theme4,.qy-bg-0 .yd-list-mes,.qy-bg-0 .qy-chapter-name,.qy-bg-0 p{
	background:black;
	color:#fff;
}
.qy-bg-1 .yd-list-theme4,.qy-bg-1 .yd-list-mes,.qy-bg-1 .qy-chapter-name,.qy-bg-1 p{
	background:#474d70;
	color:#fff;
}
.qy-bg-2 .yd-list-theme4,.qy-bg-2 .yd-list-mes,.qy-bg-2 .qy-chapter-name,.qy-bg-2 p{
	background:#6e6661;
	color:#fff;
}
.qy-bg-3 .yd-list-theme4,.qy-bg-3 .yd-list-mes,.qy-bg-3 .qy-chapter-name,.qy-bg-3 p{
	background:#fae7e7;
}
.qy-bg-4 .yd-list-theme4,.qy-bg-4 .yd-list-mes,.qy-bg-4 .qy-chapter-name,.qy-bg-4 p{
	background:#cdefe9;
}
</style>