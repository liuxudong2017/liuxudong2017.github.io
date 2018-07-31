<template>
<div class="attendance-wrap">
	<header-tag title='签到'></header-tag>
	<div class="attendance-title">
		<p>本月第{{attendanceNum}}次签到</p>
		<p>获赠{{getYb}}言币</p>
	</div>	
	<Calendar></Calendar>
</div>	
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import Calendar from 'components/calendar/calendar';
export default{
	name:'attendance',
	components:{HeaderTag,Calendar}
	,data(){
		return{
			attendanceNum:8
			,getYb:4000
		}
	}
}	
</script>
<style>
.yd-navbar:after{
	border-color:#fff;
}
.attendance-title{
	width:100%;
	height:2rem;
	background-image:url('./img_qiandao@3x.png');
	background-repeat: no-repeat;
	background-size: cover;
	text-align: center;
	font-size:.45rem;
	color:#fff;
	overflow: hidden;
}	
.attendance-title p{
	margin-top:.2rem;
}	
</style>