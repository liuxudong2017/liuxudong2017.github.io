'use strict';

var vm = new Vue({
	el: "#app",
	data: {
		leaseRMB: 200,
		pledgeRMB: 100,
		Dcm: '175',
		Dkg: '80',
		Dnum: '43',
		cm: '',
		kg: '',
		num: '',
		checkNum: 1 //0 单板； 1 双板；

	},
	computed: {
		allRMB: function allRMB() {
			return this.leaseRMB + this.pledgeRMB;
		}
	},
	methods: {
		submitLease: function submitLease(e) {
			console.log(this.cm + '---' + this.kg + '---' + this.num + '-----');
			window.location.href='confirmOrder.html';
		},
		toggleNav: function toggleNav(e) {
			var index = e.target.tabIndex;
			this.checkNum == index ? "" : this.checkNum = index;
		}
	},
	created: function created() {//创建 可访问data

	},
	mounted: function mounted() {//挂在

	}
});