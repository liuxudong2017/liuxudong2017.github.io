(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{294:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(35),l=n.n(r);var c=n(5),i=n(6),s=n(9),g=n(7),u=n(8),d=n(2),b=n(4),h=n.n(b),p={httpEndpoint:"http://www.super.lighting:8888",code_as_wasm:!0,chain_id:"cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",keyProvider:["5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3","5Jmsawgsp1tQ3GD6JyGCwy1dcvqKZgX6ugMVMdjirx85iv5VyPR"]},m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(g.a)(t).call(this,e))).state={redPaperArr:[],redPaperState:0,redPaperSalt:0,redPaperId:6},n.getRedPaperTable=n.getRedPaperTable.bind(Object(d.a)(Object(d.a)(n))),n.getRedPaper=n.getRedPaper.bind(Object(d.a)(Object(d.a)(n))),n.redPaperState=n.redPaperState.bind(Object(d.a)(Object(d.a)(n))),n.getRedPaperTables=n.getRedPaperTables.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"loadContract",value:function(e){e=e||function(){};h()(p).contract("gre12345game").then(function(t){console.log(t),e(t)})}},{key:"loadTable",value:function(e){h()(p).getTableRows({scope:"gre12345game",code:"gre12345game",table:e,json:!0,limit:100},this.callback),console.log(e)}},{key:"callback",value:function(e,t){e?console.log(e):console.log(t)}},{key:"giveRedEnvelopes",value:function(e){e.c4r4e("gre53palyer1","1.0000 SYS",{authorization:["gre53palyer1"]}),console.log(e.c4r4e,"\u53d1\u7ea2\u5305")}},{key:"gre",value:function(){h()(p).contract("gre12345game").then(function(e){console.log(e);e.c4r4e("gre53palyer1",{authorization:["gre53palyer1"]}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})})}},{key:"getRedEnvelopes",value:function(){var e=100*Math.random();e=Math.ceil(e),h()(p).contract("gre12345game").then(function(t){console.log(t);t.g4r4e("gre53palyer1",e,{authorization:["gre53palyer1"]}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})})}},{key:"getAccount3",value:function(){var e=h()(p);e.contract("gre12345game").then(function(t){e.getAccount({account_name:"gre53palyer1"},function(e,t){console.log(t)})})}},{key:"getRedEnvelopes3",value:function(){var e=100*Math.random();e=Math.ceil(e),h()(p).contract("gre12345game").then(function(t){console.log(t);t.g4r4e("gre53palyer3",e,{authorization:["gre53palyer3"]}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})})}},{key:"withdraws",value:function(e){e.withdraw("gre53palyer1","1.0000 SYS")}},{key:"getInfos",value:function(e){h()(p).getInfo({}).then(function(e){return console.log(e)})}},{key:"getBlocks",value:function(){h()(p).getBlock(705537).then(function(e){return console.log(e)}),console.log("block-====")}},{key:"getActions",value:function(){var e=h()(p);e.contract("gre12345game").then(function(){e.getActions({account_name:"gre12345game",pos:0,offset:10},function(e,t){console.log(t)})})}},{key:"componentWillMount",value:function(){console.log("-=-=-=-=-="),this.getRedPaperTable("redenvelope")}},{key:"getRedPaperTable",value:function(e){console.log("000000000");var t=h()(p),n=this;t.contract("gre12345game").then(function(a){console.log(a),t.getTableRows({scope:"gre12345game",code:"gre12345game",table:e,json:!0},function(e,t){if(e)console.log(e);else{console.log(t);for(var a=t.rows,r=[],l=0;l<a.length;l++)r.push(o.a.createElement("div",{key:l},a[l].re_creator," [] ",a[l].re_id));n.setState({redPaperArr:r})}})})}},{key:"giveRedPaper",value:function(){var e=h()(p),t=this;e.contract("gre12345game").then(function(e){console.log("load..gre12345game"),e.c4r4e("gre53palyer3",{authorization:["gre53palyer3"]}).then(function(e){console.log(e),t.getRedPaperTable("redenvelope")}).catch(function(e){console.log(e)})})}},{key:"getRedPaper",value:function(e){var t=h()(p),n=this;t.contract("gre12345game").then(function(t){console.log("load...");var a=Math.floor(100*Math.random());t.g4r4e(e,a,{authorization:[e]}).then(function(e){console.log(e),console.log("\u5f3a\u6210\u529f..."),1==n.state.redPaperState&&n.redPaperState()})})}},{key:"getRedPaperTables",value:function(){var e,t,n;h()(p).getTableRows((n=50,(t="limit")in(e={scope:"gre12345game",cope:"gre12345game",table:"grabre",limit:100,upper_bound:"0",json:!0})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e),function(e,t){if(e)console.log("err");else if(!t.more)for(var n=t.rows,a=0;a<n.length;a++)n[a]})}},{key:"redPaperState",value:function(){var e=h()(p),t=this;e.getTableRows({scope:"gre12345game",cope:"gre12345game",table:"gameruntime",json:!0},function(e,n){e?console.log("\u5931\u8d25..."):(console.log("\u6210\u529f..."),t.setState({redPaperState:n.rows[0].grt_game_state,redPaperSalt:n.rows[0].grt_re_salt}))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app wrap"},o.a.createElement("button",{onClick:this.loadContract.bind(this)},"\u52a0\u8f7d\u5408\u7ea6"),o.a.createElement("button",{onClick:this.loadTable.bind(this,"gameconf")},"\u914d\u7f6e\u8868:gameconf"),o.a.createElement("button",{onClick:this.loadTable.bind(this,"gameruntime")},"\u8fd0\u884c\u65f6:gameruntime"),o.a.createElement("button",{onClick:this.loadTable.bind(this,"grabre")},"\u62a2\u5305:grabre"),o.a.createElement("button",{onClick:this.loadTable.bind(this,"playbalance")},"\u7528\u6237:playbalance"),o.a.createElement("button",{onClick:this.loadTable.bind(this,"redenvelope")},"\u5305table:redenvelope"),o.a.createElement("button",{onClick:this.loadTable.bind(this,"master53danx")},"\u7ec4\u7ec7\u8005\u63d0\u6210:master53danx"),o.a.createElement("button",{onClick:this.loadTable.bind(this,"chenxd53danx")},"\u5e73\u53f0\u63d0\u6210:chenxd53danx"),o.a.createElement("button",{onClick:this.loadContract.bind(this,this.giveRedEnvelopes)},"\u53d1\u5305c4r4e"),o.a.createElement("button",{onClick:this.getInfos.bind(this)},"\u4fe1\u606f"),o.a.createElement("button",{onClick:this.getRedEnvelopes.bind(this)},"\u62a2\u53052"),o.a.createElement("button",{onClick:this.getRedEnvelopes3.bind(this)},"\u62a2\u53053"),o.a.createElement("button",{onClick:this.loadContract.bind(this,this.withdraws)},"\u63d0\u6b3e"),o.a.createElement("button",{onClick:this.gre.bind(this)},"gre"),o.a.createElement("button",{onClick:this.getBlocks.bind(this)},"block"),o.a.createElement("button",{onClick:this.getAccount3.bind(this)},"getAccount3"),o.a.createElement("button",{onClick:this.getActions.bind(this)},"Actions3"),o.a.createElement("hr",null),o.a.createElement("hr",null),o.a.createElement("button",{onClick:this.giveRedPaper.bind(this)},"\u53d1\u7ea2\u5305"),o.a.createElement("button",{onClick:this.getRedPaperTable.bind(this,"redenvelope")},"\u7ea2\u5305\u8868"),o.a.createElement("button",{onClick:this.getRedPaper.bind(this,"gre53palyer1")},"u1\u62a2\u7ea2\u5305"),o.a.createElement("button",{onClick:this.getRedPaper.bind(this,"gre53palyer2")},"u2\u62a2\u7ea2\u5305"),o.a.createElement("button",{onClick:this.getRedPaper.bind(this,"gre53palyer3")},"u3\u62a2\u7ea2\u5305"),o.a.createElement("button",{onClick:this.getRedPaperTables},"\u62a2\u7ea2\u5305\u8868"),this.state.a,o.a.createElement("div",null,this.state.redPaperArr),o.a.createElement("hr",null),o.a.createElement("hr",null),o.a.createElement("hr",null),o.a.createElement("hr",null),o.a.createElement("div",null,"\u7ea2\u5305\u72b6\u6001:",this.state.redPaperState))}}]),t}(a.Component);l.a.render(o.a.createElement(m,null),document.getElementById("root"))},70:function(e,t){},71:function(e,t){},78:function(e,t){}},[[294,8,0]]]);
//# sourceMappingURL=eostext.c1155821.chunk.js.map