<template>
<div class="qy-setting-wrap">
	<header-tag title='我的设置'></header-tag>
	<yd-cell-item arrow href="personalSetting.html" type="a" class='item'>
        <img src="./icon_set_geren@3x.png" alt="" slot='icon'>
        <span slot="left" class="item-left">个人信息设置</span>
    </yd-cell-item>
    <yd-cell-item arrow href="feedback.html" type="a" class='item'>
        <img src="./icon_set_fankui@3x.png" alt="" slot='icon'>
        <span slot="left" class="item-left">意见反馈</span>
    </yd-cell-item>
    <yd-cell-item arrow href="helpCenter.html" type="a" class='item'>
        <img src="./icon_set_help@3x.png" alt="" slot='icon'>
        <span slot="left" class="item-left">帮助中心</span>
    </yd-cell-item>
    <yd-cell-item arrow href="aboutUs.html" type="a" class='item'>
        <img src="./icon_set_aboutus@3x.png" alt="" slot='icon'>
        <span slot="left" class="item-left">关于我们</span>
    </yd-cell-item>
     <yd-button size="large" type="primary" shape="circle" class='qy-btn'>
		退出当前账号
     </yd-button>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
export default{
	name:'setting'
	,components:{HeaderTag}
}		
</script>
<style>
body{
	background: #fff;
}	
.qy-setting-wrap .item-left{
	font-size:.4rem;
	color:#2c2c2c;
	font-weight:600;
}	
.qy-setting-wrap .item-right{
	font-size:.4rem;
	color:#f46094;
}
.qy-setting-wrap .yd-cell-item:not(:last-child):after{
	width:90%;
}	
.qy-setting-wrap .yd-cell-item img{
	height:.6rem;
	padding-right: .3rem;
}	
.qy-setting-wrap .yd-cell-item{
	margin:.3rem 0;
}
.qy-setting-wrap .qy-btn{
	width:90%;
	margin:.6rem auto;
	background: #fff;
	color:#F46094;
	font-size:.4rem;
	border:.02rem solid #F46094;
}
</style>