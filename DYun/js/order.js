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
		, isCm: true,
		isKg: true,
		isNum: true,
		hintText: '请输入正确的	身高(数字)/体重(数字)/鞋码(数字) ...'
	},
	computed: {
		allRMB: function allRMB() {
			return this.leaseRMB + this.pledgeRMB;
		},
		isHint: function isHint() {
			return !(this.isCm && this.isKg && this.isNum);
		}
	},
	methods: {
		submitLease: function submitLease(e) {
			console.log(this.cm + '---' + this.kg + '---' + this.num + '-----');
			location.href = 'confirmOrder.html';
		},
		toggleNav: function toggleNav(e) {
			var index = e.target.tabIndex;
			this.checkNum == index ? "" : this.checkNum = index;
		},
		blurs: function blurs(e) {
			var index = e.target.tabIndex;
			var reg = /^[1-9][0-9]{1,}$/;
			var val = '';
			if (index == 0) {
				val = this.cm;
				var isTure = reg.test(val);
				this.isCm = isTure;
			} else if (index == 1) {
				val = this.kg;
				var _isTure = reg.test(val);
				this.isKg = _isTure;
			} else if (index == 2) {
				val = this.num;
				var _isTure2 = reg.test(val);
				this.isNum = _isTure2;
			}

			console.log(this.isCm + '-' + this.isKg + '-' + this.isNum + 'all=' + this.isHint);
		}
	},
	created: function created() {//创建 可访问data

	},
	mounted: function mounted() {//挂在

	}
});