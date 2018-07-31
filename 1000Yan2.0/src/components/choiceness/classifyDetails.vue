<template>
<div>	
	<div class="qy-pointer">
		<span v-for='n in 3' :class='{checked:n==item,pointer:true}'></span>
	</div>
	<v-touch class="classify-details-wrap" @panleft='moveLeft($event)' @panright='moveRight($event)' @panstart='moveStart($event)' @panend='moveEnd($event)'>
		<div class="yd-detail-item">
			 <yd-grids-group :rows="3">
		        <yd-grids-item v-for="n in 3" type='a' class='img-wrap'>
		           <img class="img-auto" src="http://www.1000yan.com/upload/image/20171201/1512093685440998.jpg" alt="" slot='else'>
		          	<h1 slot='else' class="ellipsis">打赏打赏打赏打赏打赏打赏打赏打赏打赏打赏打赏打赏</h1>
		        </yd-grids-item>
		     </yd-grids-group>
		</div>
		<div class="yd-detail-item">
			 <yd-grids-group :rows="3">
		        <yd-grids-item v-for="n in 3">
		            <span slot="text">grids-2</span>
		        </yd-grids-item>
		     </yd-grids-group>
		</div>
		<div class="yd-detail-item">
			 <yd-grids-group :rows="3">
		        <yd-grids-item v-for="n in 3">
		            <span slot="text">grids-3</span>
		        </yd-grids-item>
		     </yd-grids-group>
		</div>
	</v-touch>
</div>
</template>
<script>
// import $ from 'jquery';

	export default{
		name:'classifyData',
		props:['index'],
		data(){
			return{
				startX:0,
				translateXinit:0,
				item:1,
				toLeft:false,
				toRight:false
				
			}
		},
		computed:{
			
		},
		mounted(){
			
		},
		methods:{
			moveRight(e){
				let endX=e.center.x;
				let startX=this.startX;
				let moveX=endX-startX+this.translateXinit;

				let ele=document.getElementsByClassName('classify-details-wrap')[this.index];
				moveX>=0?moveX=0:'';
				ele.style.transform='translateX('+moveX+'px)';
				console.log('right');
				this.toRight=true;
				this.toLeft=false;
			},
			moveLeft(e){
				let endX=e.center.x;
				let startX=this.startX;
				let moveX=endX-startX+this.translateXinit;
				let ele=document.getElementsByClassName('classify-details-wrap')[this.index];
				moveX<=innerWidth*-2?moveX=innerWidth*-2:'';
				ele.style.transform='translateX('+moveX+'px)';
				let translateX=ele.style.transform;
				console.log('left');
				this.toLeft=true;
				this.toRight=false;
			},
			moveStart(e){
				this.startX=e.center.x;
				console.log('start')
			},
			moveEnd(e){
				let num=this.getTranslateX();
				this.toLeft?this.setTranslateX(num,'left'):this.setTranslateX(num,'right');
			},
			getTranslateX(){
				let ele=document.getElementsByClassName('classify-details-wrap')[this.index];
				let translateX=ele.style.transform;
				if(!translateX){
					return 0
				}
				let num=translateX.split(/translateX\(/)[1];
					num=num.split('px')[0]*1;
					return num;
			},
			setTranslateX(num,direction){
				let ele=document.getElementsByClassName('classify-details-wrap')[this.index];
					let baseNum=innerWidth;
					num=Math.abs(num);
					let base=Math.floor(num/baseNum);
				if(direction=='left')
				{
					base+=1;
					if(num>=baseNum*2){
						//切换下一目录分类
						num=baseNum*2;
						ele.style.transform='translateX('+num*-1+'px)';
						this.translateXinit=num*-1;
						console.log('next');
						this.$emit('changeActiveItem','next');

					}else{
						ele.style.transform='translateX('+base*baseNum*-1+'px)';
						this.translateXinit=base*baseNum*-1;
						this.$nextTick(function(){this.item++>3?this.item=3:''});
						
					}

				}else
				{
					if(num<=0){
						console.log('top');
						ele.style.transform='translateX(0px)';
						this.translateXinit=0;
						this.$emit('changeActiveItem','top');
						// 上一个分类
					}else{
						ele.style.transform='translateX('+base*baseNum*-1+'px)';
						this.translateXinit=base*baseNum*-1;
						this.$nextTick(function(){this.item--<1?this.item=1:''});
					}
				}
				
					
			}
		},
		destroyed(){

		},
		watch:{
			
		}
	}

</script>
<style scoped>
	.classify-details-wrap{
		width:300%;
		overflow: hidden;
		transform: translateX(0px);

	}
	.yd-detail-item{
		float:left;
		width:33.33%;
	}
	.qy-pointer{
		text-align: center;
		border-top:0.2rem solid #f2f4f7;
		margin-top:.04rem;
		padding:0.26rem;
	}
	.qy-pointer .pointer{
		border-radius: 50%;
		display: inline-block;
		padding:.18rem;
		margin:.14rem;
		background: #cad0da;
	}
	.qy-pointer span.checked{
		background: #f46094;

	}
	.img-wrap{
		text-align: center;
	}
	.img-wrap h1{
		width:90%;
		padding:.1rem;
	}
	.yd-grids-item{
		padding-top:0;
	}
	
</style>