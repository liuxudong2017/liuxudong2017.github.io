<template>
<div class="calendar-wrap">
	<div class="calendar-ym">
		<img src="./icon_qiandao_rili@3x.png" alt="" class="icon-img">
		<span class="ym">{{year}}年{{month}}月</span>
		<table>
			<tr>
				<th v-for='n in weekArr'>{{n}}</th>
			</tr>
			<tr v-for='n in 6'>
				<td v-for='i in monthDay[n-1]' :class="{checked:fun(i),emptys:isNaN(i)}">{{i}}</td>
			</tr>
			
		</table>
		 <yd-button size="large" type="primary" shape="circle" bgcolor="rgb(244,96,148)" color='#fff' @click.native='attendanceSubmit'>签到</yd-button>
	</div>
</div>		
</template>
<script>
export default{
	name:'calendar'
	,data(){
		return {
			year:2018
			,month:1
			,monthDay:[]
			,attendanceDate:[1,3,5,7]
			,weekArr:['日','一','二','三','四','五','六']
			,startWeek:0//一号是周几

		}
	}
	,methods:{
		fun:function(i){
			let ad=this.attendanceDate;
			for(let j=0;j<ad.length;j++){
				if(i==ad[j]){
					return true
				}
			}
			return false

		}
		,attendanceSubmit:function(){
			this.attendanceDate.push(20);
			console.log('----0000')
			this.$dialog.toast({
                    mes: '签到成功！',
                    timeout: 1500,
                    icon: 'success'
                });
		}
	}
	,mounted(){
		let day=getCurrentMonthDays(this.year,this.month);
		let week=getWeek(this.year,this.month-1,1);
		this.startWeek=week;
		console.log(day+'-'+week);
		let startDay=0;
		for(let i=0;i<6;i++)
		{

			let arr=[];
			for(let j=0;j<7;j++)
			{
				startDay++;
				if(startDay>day){
					
					break;
				}
				i==0&&j==0?j=week:'';
				arr[j]=startDay;
		
			}
			this.monthDay.push(arr);
			
		}
		//每个月有几天
		function getCurrentMonthDays(year,month)
		{
			switch(month){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				return 31;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
				break;
			case 2:	
				if(year%4==0&&year%100!=0||year%400==0){
					return 29;
				}else{
					return 28;
				}
				break;
			}
		}
		//当月一号是周几
		function getWeek(year,month,day){
			let myDate=new Date();
			year?myDate.setFullYear(year):'';
			month?myDate.setMonth(month):'';
			day?myDate.setDate(day):'';
			return myDate.getDay();
		}

	}
	,beforeCreated(){
		
	}
}	
</script>
<style>
	.calendar-wrap{
		width:90%;
		margin:0.2rem auto;
	}
	.calendar-wrap .icon-img{
		width:.5rem;
	}
	.calendar-wrap .ym{
		font-size:.5rem;
		color:rgb(45,45,45);
		font-weight: 600;
		padding-left: .1rem;
	}
	.calendar-wrap table{
		width:100%;
		text-align: center;
		font-size: .5rem;
		color:rgb(131,131,131);
	}
	.calendar-wrap td{
		border:.02rem solid rgb(236,236,236);
		border-radius: .1rem;
		font-size:.4rem;
		padding:.2rem;
	}
	.calendar-wrap .checked{
		background:rgb(244,96,148);
		border-color:rgb(244,96,148);
		color:#fff;
	}
	.calendar-wrap .emptys{
		border:0;
	}	
</style>