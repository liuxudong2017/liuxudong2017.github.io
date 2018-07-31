<template>
<div class="qy-detail-group">
	<ul class="qy-detail-wrap qy-detail-2">
		<li class='qy-qq'>
			<img src="./img/icon_sjxq_qq@3x.png" alt="">
			千言读者交流QQ群：87659778
		</li>
		<li :class="{'ellipsis-list-3':isHideClass,'qy-book-intro':true}" ref="bookIntro" style='-webkit-box-orient:vertical;'>
			{{bookIntroText}}
			
        </li>
        <li class='trigger' v-if='isHide' @click='triggerInfro'>
        	<span v-if='isShow'>展开&or;</span>
        	<span v-else-if='!isShow'>收起&and;</span>
        </li>
		<li>
			<yd-badge shape="square" type="hollow"class='badge-1'>放松</yd-badge>
			<yd-badge shape="square" type="hollow" class='badge-2'>放松</yd-badge>
			<yd-badge shape="square" type="hollow" class='badge-3'>放松</yd-badge>
		</li>
		<a href="bookDirectory.html">
		<li class='qy-check-catalog qy-large-btn'>
			<yd-icon name="type" size='.4rem'></yd-icon>
			<span>查看目录({{totalChapter}}章)</span>
		</li>
		</a>
		<li class='qy-large-btn ellipsis'>
			<span class='qy-new-chapter'>[最新章节]</span>
			<span>{{newChapter}}</span>
		</li>
	</ul>
</div>		
</template>
<script>
export default{
	name:'catalog'
	,data(){
		return{
			bookIntroText:'打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌打卡练腹肌'
			,isHide:false
			,isShow:true
			,totalChapter:9090
			,newChapter:'第9090章 王爱王爱王爱王爱王爱王爱王爱王爱王爱王爱王爱王爱王爱王爱王爱'
		}
	}
	,methods:{
		triggerInfro(){
			this.isShow=!this.isShow;
			this.isHideClass=!this.isHideClass
		}
	}
	,mounted(){
		let doc=document.getElementsByTagName('html')[0];
    	 let maxHeight=parseFloat(doc.style.fontSize)*1.26;//1.26 三行是.reply-item-3 rem高度
		this.isHideClass=this.isHide=this.$refs.bookIntro.scrollHeight>maxHeight
	}
}		
</script>
<style>
.qy-detail-2{
	position: relative;
}
.qy-detail-2 .trigger{
    position: absolute;
    right: -0.36rem;
    bottom:3.3rem;
    font-size: .3rem;
    color: #61a4e9;
    width: 1rem;
}
.qy-detail-2 .qy-book-intro{
	 width: 90%;
    font-size: .3rem;
    line-height: 1.5em;
    margin: .2rem .35rem .2rem .1rem;
    color: #787878;
}
.qy-detail-2 .qy-qq img{
	height: .6rem;
    vertical-align: middle;
}
.qy-detail-2 .qy-qq{
	color:#f46094;
}
.qy-detail-2 .badge-1{
	border:.02rem solid #f46094;
	background:#fff;
	color:#f46094;
}
.qy-detail-2 .badge-2{
	border:.02rem solid #51d96e;
	background:#fff;
	color:#51d96e;
}
.qy-detail-2 .badge-3{
	border:.02rem solid #f59e48;
	background:#fff;
	color:#f59e48;
}
.qy-detail-2 .qy-large-btn{
	height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .3rem;
    color: #757575;
    border-radius: .4rem;
    margin: .3rem 0;
    border: .02rem solid #F2F4F7;
    padding:0 .2rem;
}
.qy-detail-2 .yd-icon-type{
	vertical-align: middle;
}
.qy-detail-2 .qy-new-chapter{
	color:#f46094;
}
</style>