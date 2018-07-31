<template>
<div class="slider-tab-wrap">
	<div class="tab-wrap">
		<div class="slider-tab">
			<div class="slider-tab-item">
				<span :index='n-1' @click='fun($event)' :class='{activeTab:currentIndex==n-1,item:true}' v-for='n in 6'>日韩精选{{n}}</span>
				
			</div>
		</div>
		<div class="filtrate-btn" @click.stop='show2=!show2'>
			<span :class="{'filtrate-text':true,'filtrate-text-active':show2}">筛选</span>
			<img v-if='!show2' src="./icon_shaixuan_shuku@3x.png" alt="" class="filtrate-icon">
			<img v-else-if='show2' src="./icon_shaixuan_shuku_h@3x.png" alt="" class="filtrate-icon">
		</div>
	</div>
	<div class="content-wrap">

		<div class="content-item" v-for='n in 6'>
			{{n}}+++++
			<!-- 类目 -->
		    <Book></Book>
		
		</div>
	</div>
	<!-- 筛选 -->
	<v-touch @pan='scrollEvt'>
		<div :class="{'drop-filtrate':true,'drop-filtrate-show':show2}">
			<div class="drop-list">
				<div class="list-group">
					<div class='list-title'>
						<img src="./icon_shuku_zhuangtai@3x.png" alt="">
						<span>状态</span>
					</div>
					<div class='list-body'>
						 <yd-badge type="hollow" :class="[{'filtrate-active':select_state==0},{'filtrate-active':allSelect==11}]" @click.native='selectActives(0,0)'>连载中</yd-badge>
						  <yd-badge type="hollow" :class="[{'filtrate-active':select_state==1},{'filtrate-active':allSelect==11}]" @click.native='selectActives(0,1)'>已完结</yd-badge>
					</div>
					<!--  -->
					<div class='list-title'>
						<img src="./icon_shuku_xingshi@3x.png" alt="">
						<span>形式</span>
					</div>
					<div class='list-body'>
						 <yd-badge type="hollow" :class="[{'filtrate-active':select_xs==0},{'filtrate-active':allSelect==11}]" @click.native='selectActives(1,0)'>免费</yd-badge>
						  <yd-badge type="hollow" :class="[{'filtrate-active':select_xs==1},{'filtrate-active':allSelect==11}]" @click.native='selectActives(1,1)'>VIP</yd-badge>
					</div>
					<!--  -->
					<div class='list-title'>
						<img src="./icon_shuku_zishu@3x.png" alt="">
						<span>字数</span>
					</div>
					<div class='list-body'>
						 <yd-badge type="hollow" :class="[{'filtrate-active':select_num==0},{'filtrate-active':allSelect==11}]" @click.native='selectActives(2,0)'>精品短篇</yd-badge>
						  <yd-badge type="hollow" :class="[{'filtrate-active':select_num==1},{'filtrate-active':allSelect==11}]" @click.native='selectActives(2,1)'>精彩中篇</yd-badge>
						  <yd-badge type="hollow" :class="[{'filtrate-active':select_num==2},{'filtrate-active':allSelect==11}]" @click.native='selectActives(2,2)'>精选长篇</yd-badge>
					</div>
					<!--  -->
					<div class="btn-wrap">
						<yd-button type="hollow" shape="circle" class='btn' :class='{"filtrate-active":allSelect==11}' @click.native='selectActives(11)'>全部</yd-button>
						<yd-button type="hollow" shape="circle" class='btn filtrate-active'>确定</yd-button>
					</div>
				</div>
			</div>
		</div>
	</v-touch>
</div>	
</template>
<script>
import Book from './book';
export default{
	name:'sliderTab',
	data(){
		return{
			currentIndex:0,
			base:2.06,//每个类目的width
			maxMargin:0,
			show2:false,
			allSelect:0,//是否全选0不是 11全选
			select_state:0,//状态
			select_xs:0,//默认选中形式
			select_num:0,//默认选中字数
		}
	},
	components:{Book},
	methods:{
		fun(ev)
		{
			let elem=ev.target;
			let clickIndex=elem.getAttribute('index')*1;
			if(clickIndex==this.currentIndex){
				console.log('noChange');
				return
			}
			this.currentIndex=clickIndex;
			if(clickIndex-1>=0)//隐藏/显示类目
			{
				let parentElem=elem.parentNode;
				let marginLeft=parseFloat(parentElem.style.marginLeft);
					parentElem.style.marginLeft=(this.base-0.3)*(clickIndex-1)*-1+'rem';
			}
			let showContentElem=document.getElementsByClassName('content-item');
			for(let i=0;i<showContentElem.length;i++)
			{
				showContentElem[i].style.display='none';
			}
			showContentElem[clickIndex].style.display='block';
			
		},
		scrollEvt()
		{

			console.log('scrollEvt---');
		},
		selectActives(group,index)//group:第几组 状态0... 全部 11
		{
			//console.log(group);
			console.log('09090909');
			switch(group)
			{
				case 0:
					if(index==0)
					{
						this.select_state=0;

					}else if(index==1){
						this.select_state=1
					}
					if(this.allSelect==11){
						this.select_xs=0;
						this.select_num=0;
						this.allSelect=0;
					}
				break;
				case 1:
					if(index==0)
					{
						this.select_xs=0;

					}else if(index==1){
						this.select_xs=1
					}
					if(this.allSelect==11){
						this.select_state=0;
						this.select_num=0;
						this.allSelect=0;
					}
				break;
				case 2:
					if(index==0)
					{
						this.select_num=0;

					}else if(index==1){
						this.select_num=1;
					}else if(index==2){
						this.select_num=2;
					}
					if(this.allSelect==11){
						this.select_state=0;
						this.select_xs=0;
						this.allSelect=0;
					}
				break;
				case 11:
					this.allSelect=11;
				break;
			}
		}
	},
	mounted()
	{
		
		let elem=document.getElementsByClassName('slider-tab-item')[0];
		let elemParent=elem.parentNode;		
		let spanE=document.getElementsByClassName('item');
		this.base=spanE[0].offsetWidth/50+0.6;//每一个类目的宽
		let base=this.base;
		let elemWidth=spanE.length*base-0.3;
			elem.style.width=elemWidth+'rem';//导航的宽度
		let av=document.getElementsByClassName('activeTab')[0];
		let initIndex=av.getAttribute('index')*1;
		let contentItem=document.getElementsByClassName('content-item');
			for(let i=0;i<contentItem.length;i++)
			{
				contentItem[i].style.width=innerWidth+'px';
				contentItem[i].style.display='none';
			}
		contentItem[initIndex].style.display='block';//默认显示哪个
		document.getElementsByClassName('content-wrap')[0].style.width=innerWidth*spanE.length/50+'rem';	
		this.maxMargin=(elem.offsetWidth-elemParent.offsetWidth)/50*-1;
	}

}	
</script>
<style scoped>
.tab-wrap{
	background: #f0f3f6;
	position: relative;
}

.slider-tab-wrap{
	overflow: hidden;
}
.slider-tab{
	width:90%;
	margin:0 auto;
	overflow: hidden;
}
.slider-tab-item{
	overflow: hidden;
}
.slider-tab-item span{
	display: inline-block;
	padding: .3rem .3rem .1rem 0;
	color:black;
	font-size:.36rem;
	float: left;
}
.slider-tab-item span:before{
	content:'';
	border-left: .02rem solid #d0c6c6!important;
	padding-right: .3rem;
	font-size:0;
}
.slider-tab-item span:nth-child(1):before{
	content:'';
	border:0!important;
	padding:0;
}
.content-wrap{
	overflow: hidden;
}
span.activeTab{
	color:#f46094;
	
}
span.activeTab:after{
	display: block;
	content: '';
	width:1rem;
	border-bottom:.04rem solid #f46094!important;
	margin-left:30%;
	padding-top:.16rem;
	font-size:0;
}
span:nth-child(1).activeTab:after{
	margin:0 auto;
}
.filtrate-btn{
	position: absolute;
    right: 5%;
   	top:0.28rem;
    
}

.filtrate-btn:before{
	content:'';
	width:0.2rem;
	height:0.42rem;
	display: inline-block;
	background: rgba(240,243,246,.9);
}
.filtrate-icon{
	width:0.44rem;
	background: #f0f3f6;
}
.filtrate-text{
	font-size:.35rem;
	vertical-align: top;
	background: #f0f3f6;
}
.filtrate-text-active{
	color:#f46094;
}
.drop-filtrate{
	position:fixed;
	width:100%;
	top:3.06rem;
	height:0;
	background: rgba(0,0,0,.5);
	transition: height .5s;
	overflow: hidden;
	z-index:1300;
}
.drop-filtrate-show{
	height:10.26rem;
}
.list-group{
	width:100%;
	background: #fff;
}
.list-group>div{
	padding: 2% 5% 2%;
    border-bottom: 1px solid #e2dddd;
}
.list-title img{
	width:0.48rem;
}
.list-title span{
	color:#f46094;
	font-size:0.4rem;
    vertical-align: top;
    padding-left:0.38rem;
}
.btn{
	display: inline-block;
	width:40%;
	color:#f46094;
	font-size:0.46rem;
}
.hairline .yd-btn-hollow{
	border:.02rem solid #f46094;
}

</style>