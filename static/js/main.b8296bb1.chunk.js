(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(322)},158:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){},234:function(e,t){},236:function(e,t){},322:function(e,t,a){"use strict";a.r(t);var n=a(91),s=a(58);var o=function(){n.init({dsn:"https://597204e062cc4579b44d28fe32273301@sentry.io/1337196",release:s.a}),console.log("Error"),n.captureException(new Error("test"))},i=a(0),r=a.n(i),c=a(57),l=a.n(c);a(158),a(160),a(162),a(165),a(167);var u=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("i",{className:"fas fa-dice-d20"}),"\xa0Etheroll"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},r.a.createElement("i",{className:"fas fa-home"}),"\xa0Home",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/AndreMiras/etheroll"},r.a.createElement("i",{className:"fab fa-github-alt"}),"\xa0About"))))))};a(169);var m=function(){return r.a.createElement("footer",{className:"Footers d-none d-md-block"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"Copyright (c) 2018 Andre Miras - Etheroll v",s.a)))},p=a(9),d=a(59),y=a(60),b=a(132),f=a(129),v=a(133),g=(a(171),a(130)),E=a.n(g),w=new Promise(function(e,t){window.addEventListener("load",function(){if("undefined"!==typeof window&&"undefined"!==typeof window.web3){var a=new E.a(window.web3.currentProvider);e({web3:a})}else t(new Error("Is MetaMask running?"))})});function h(e){var t=e.classType,a=e.message;return a?r.a.createElement("div",{className:"alert alert-".concat(t),role:"alert"},a):null}h.defaultProps={classType:"primary",message:null};var N,k,x=h,M=a(92),B=[{constant:!1,inputs:[{name:"newCallbackGasPrice",type:"uint256"}],name:"ownerSetCallbackGasPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalWeiWon",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maxProfitAsPercentOfHouse",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newHouseEdge",type:"uint256"}],name:"ownerSetHouseEdge",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"payoutsPaused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newTreasury",type:"address"}],name:"ownerSetTreasury",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"},{name:"proof",type:"bytes"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addressToCheck",type:"address"}],name:"playerGetPendingTxByAddress",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newContractBalanceInWei",type:"uint256"}],name:"ownerUpdateContractBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxProfitDivisor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newPayoutStatus",type:"bool"}],name:"ownerPausePayouts",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"ownerChangeOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"minNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newMaxProfitAsPercent",type:"uint256"}],name:"ownerSetMaxProfitAsPercentOfHouse",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"treasury",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalWeiWagered",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newMinimumBet",type:"uint256"}],name:"ownerSetMinBet",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newStatus",type:"bool"}],name:"ownerPauseGame",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"gasForOraclize",outputs:[{name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"sendTo",type:"address"},{name:"amount",type:"uint256"}],name:"ownerTransferEther",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"contractBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"minBet",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"playerWithdrawPendingTransactions",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxProfit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalBets",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"randomQueryID",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"gamePaused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"originalPlayerBetId",type:"bytes32"},{name:"sendTo",type:"address"},{name:"originalPlayerProfit",type:"uint256"},{name:"originalPlayerBetValue",type:"uint256"}],name:"ownerRefundPlayer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newSafeGasToOraclize",type:"uint32"}],name:"ownerSetOraclizeSafeGas",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"ownerkill",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"houseEdge",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"rollUnder",type:"uint256"}],name:"playerRollDice",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"houseEdgeDivisor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maxPendingPayouts",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"BetID",type:"bytes32"},{indexed:!0,name:"PlayerAddress",type:"address"},{indexed:!0,name:"RewardValue",type:"uint256"},{indexed:!1,name:"ProfitValue",type:"uint256"},{indexed:!1,name:"BetValue",type:"uint256"},{indexed:!1,name:"PlayerNumber",type:"uint256"},{indexed:!1,name:"RandomQueryID",type:"uint256"}],name:"LogBet",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"ResultSerialNumber",type:"uint256"},{indexed:!0,name:"BetID",type:"bytes32"},{indexed:!0,name:"PlayerAddress",type:"address"},{indexed:!1,name:"PlayerNumber",type:"uint256"},{indexed:!1,name:"DiceResult",type:"uint256"},{indexed:!1,name:"Value",type:"uint256"},{indexed:!1,name:"Status",type:"int256"},{indexed:!1,name:"Proof",type:"bytes"}],name:"LogResult",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"BetID",type:"bytes32"},{indexed:!0,name:"PlayerAddress",type:"address"},{indexed:!0,name:"RefundValue",type:"uint256"}],name:"LogRefund",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"SentToAddress",type:"address"},{indexed:!0,name:"AmountTransferred",type:"uint256"}],name:"LogOwnerTransfer",type:"event"}],P=a(69),T=Object.freeze({mainnet:1,morden:2,ropsten:3}),C=(N={},Object(p.a)(N,T.mainnet,"0xA52e014B3f5Cc48287c2D483A3E026C32cc76E6d"),Object(p.a)(N,T.ropsten,"0xe12c6dEb59f37011d2D9FdeC77A6f1A8f3B8B1e8"),N),S=(k={},Object(p.a)(k,T.mainnet,"https://etherscan.io"),Object(p.a)(k,T.ropsten,"https://ropsten.etherscan.io"),k),A=function(){function e(t,a){Object(d.a)(this,e),this.web3=t,this.address=a,"undefined"===typeof a&&(this.address=C[t.version.network]),this.abi=B,this.web3Contract=t.eth.contract(B).at(this.address)}return Object(y.a)(e,[{key:"getSolidityEvents",value:function(){var e=this,t={};return this.abi.forEach(function(a){"event"===a.type&&(t[a.name]=new P(e.web3,a,e.address))}),t}},{key:"getEventSignatures",value:function(){var e={},t=this.getSolidityEvents();return Object.keys(t).forEach(function(a){e[a]=t[a].signature()}),e}},{key:"getSolidityEvent",value:function(e){var t=this.getSolidityEvents(),a=Object.keys(t).filter(function(a){return t[a].signature()===e.replace("0x","")});return t[a]}},{key:"decodeEvent",value:function(e){var t=Object(M.a)({},e);return this.getSolidityEvent(t.topics[0]).decode(t)}},{key:"getTransactionLogs",value:function(e){var t=this;this.web3.eth.getBlockNumber(function(a,n){if(a)console.log(a);else{var s={address:t.address,fromBlock:n-100,toBlock:n};t.web3.eth.filter(s).get(e)}})}},{key:"watchTransactionLogs",value:function(e){var t=this;this.web3.eth.getBlockNumber(function(a,n){if(a)console.log(a);else{var s={address:t.address,fromBlock:n-100,toBlock:n};t.web3.eth.filter(s).watch(e)}})}},{key:"getMergedTransactionLogs",value:function(t){var a=this;this.getTransactionLogs(function(n,s){if(n)console.log(n);else{var o=s.map(function(e){return a.decodeEvent(e)}),i=o.filter(function(e){return"LogBet"===e.event}),r=o.filter(function(e){return"LogResult"===e.event}),c=e.mergeLogs(i,r);t(n,c)}})}}],[{key:"mergeLogs",value:function(e,t){var a=t.reduce(function(e,t){return Object(M.a)({},e,Object(p.a)({},t.args.BetID,t))},{});return e.map(function(e){return{logBetEvent:e,logResultEvent:a[e.args.BetID]}})}}]),e}();var O=function(e){var t=e.address,a=e.network,n="".concat(S[a],"/address/").concat(t);return r.a.createElement("a",{href:n,className:"text-monospace"},t)};function D(e){var t=e.accountAddress,a=e.accountBalance,n=e.contractAddress,s=e.contractBalance,o=e.network,i=r.a.createElement(O,{network:o,address:n}),c=r.a.createElement("div",{className:"col-12 d-none d-sm-block"},r.a.createElement("i",{className:"far fa-file-code"}),"\xa0Contract\xa0(",s.toFixed(2),"\xa0ETH)"),l=r.a.createElement("div",{className:"col-12 d-none d-sm-block"},i),u=null!==t?r.a.createElement(O,{network:o,address:t}):r.a.createElement("span",null,"Not connected, please login to MetaMask"),m=r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("i",{className:"far fa-user"}),"\xa0Account\xa0(",a.toFixed(2),"\xa0ETH)"),p=r.a.createElement("div",{className:"col-12"},u);return r.a.createElement("div",{className:"row"},m,p,c,l)}D.defaultProps={accountAddress:null};var j=D,L=a(131),R=a.n(L);a(320);function W(e){var t=e.value,a=e.updateValue,n=e.step,s=e.min,o=e.max,i=e.addonText,c=null;return null!==i&&(c=r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text text-monospace"},i))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-group col-sm-3 col-lg-2"},r.a.createElement("input",{type:"number",className:"form-control",onChange:function(e){return a(Number(e.target.value))},value:t}),c),r.a.createElement("div",{className:"col"},r.a.createElement(R.a,{onChange:a,value:t,step:n,min:s,max:o})))}W.defaultProps={step:1,min:0,max:100,addonText:null};var z=W;function H(e){var t=e.betSize,a=e.min,n=e.max,s=e.updateBetSize;return r.a.createElement("div",{className:"form-group"},r.a.createElement("b",null,"Bet size"),r.a.createElement(z,{value:t,updateValue:s,step:.1,min:a,max:n,addonText:"ETH"}))}H.defaultProps={min:0,max:10};var I=H;function V(e){var t=e.chances,a=e.min,n=e.max,s=e.updateChances;return r.a.createElement("div",{className:"form-group"},r.a.createElement("b",null,"Chance of winning"),r.a.createElement(z,{value:t,min:a,max:n,updateValue:s,addonText:"\xa0%\xa0"}))}V.defaultProps={min:0,max:100};var F=V;var G=function(e){var t=e.betSize,a=e.value,n=function(e,t){var a=0,n=100-t;if(0!==t&&0!==n){var s=n/t*e+e;a=(s*=.99)-e}return a}(t,a-1);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",null,"Roll under")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",{className:"text-right"},a)),r.a.createElement("div",{className:"col-6"},"With a wager of"),r.a.createElement("div",{className:"col-6"},r.a.createElement("p",{className:"text-right mb-0"},t,"\xa0 ETH")),r.a.createElement("div",{className:"col-6"},"For a profit of"),r.a.createElement("div",{className:"col-6"},r.a.createElement("p",{className:"text-right"},n.toFixed(2),"\xa0 ETH")))};function _(e){var t=e.isDisabled,a=e.onClick,n=e.text;return r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg col-md-3",disabled:t,onClick:a},n)}function J(e){var t=e.isDisabled,a=e.onClick;return r.a.createElement(_,{text:"Roll",isDisabled:t,onClick:a})}_.defaultProps={isDisabled:!1},J.defaultProps={isDisabled:!1};var Q=J;function U(e){var t=e.hash,a=e.network,n="".concat(S[a],"/tx/").concat(t);return r.a.createElement("a",{href:n},t)}function $(e){var t=e.network,a=e.mergedLog,n=a.logBetEvent,s=a.logResultEvent,o=n.args.PlayerNumber.toNumber(),i="?",c="?",l="?",u="secondary";if("undefined"!==typeof s){var m=(c=s.args.DiceResult.toNumber())<o;i=(s.args.Value*Math.pow(10,-18)).toFixed(2),l=m?"<":">",u=m?"success":"danger"}return r.a.createElement("div",{className:"row d-inline-flex list-group-item list-group-item-".concat(u)},r.a.createElement("div",{className:"col-sm-2 d-block"},r.a.createElement("h3",null,c)),r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"w-100"},i,"\xa0 ETH"),r.a.createElement("div",{className:"w-100"},c,"\xa0",l,"\xa0",o),r.a.createElement("div",{className:"w-100"},"Wallet: \xa0",r.a.createElement(O,{address:n.args.PlayerAddress.toString(),network:t})),r.a.createElement("div",{className:"w-100"},"Transaction: \xa0",r.a.createElement(U,{hash:n.transactionHash,network:t}))))}function q(e){var t=e.onClick;return r.a.createElement("nav",{className:"nav"},r.a.createElement("a",{className:"nav-link active",href:"#all-transactions",onClick:function(e){return t(e.target.href)}},"All transactions"),r.a.createElement("a",{className:"nav-link",href:"#my-transactions",onClick:function(e){return t(e.target.href)}},"My transactions"))}var K=function(e){var t=e.network,a=e.onClick,n=e.transactions.slice().reverse().map(function(e){return r.a.createElement($,{key:e.logBetEvent.transactionHash,network:t,mergedLog:e})});return r.a.createElement("div",{className:"card transactions"},r.a.createElement("div",{className:"card-header"},r.a.createElement(q,{onClick:a})),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"list-group"},n)))},X=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={betSize:.1,chances:50,minBet:I.defaultProps.min,maxBet:I.defaultProps.max,minChances:F.defaultProps.max,maxChances:F.defaultProps.max,accountAddress:null,accountBalance:0,web3:null,network:T.mainnet,contract:null,contractAddress:C[T.mainnet],contractBalance:0,allTransactions:[],filteredTransactions:[],alertDict:{}},a}return Object(v.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.getWeb3()}},{key:"onRollClick",value:function(){var e=this.state,t=e.accountAddress,a=e.chances,n=e.contract,s=e.betSize,o=a+1,i=e.web3.toWei(s.toString(),"ether");n.web3Contract.playerRollDice(o,{from:t,value:i},function(e,t){e?console.error(e):console.log(JSON.stringify(t))})}},{key:"getTransactions",value:function(e){var t=this;e.getMergedTransactionLogs(function(e,a){e?console.log(e):t.setState(function(e){return{allTransactions:e.allTransactions.concat(a),filteredTransactions:e.filteredTransactions.concat(a)}})})}},{key:"getWeb3",value:function(){var e=this;w.then(function(t){var a=t.web3,n=new A(a),s=n.address;e.getTransactions(n),e.setState({web3:a,network:Number(a.version.network),contract:n,contractAddress:s}),n.web3Contract.minBet(function(t,n){t&&console.log(t);var s=a.fromWei(n,"ether").toNumber();e.setState({minBet:s})}),n.web3Contract.minNumber(function(t,a){t&&console.log(t);var n=a-1;e.setState({minChances:n})}),n.web3Contract.maxNumber(function(t,a){t&&console.log(t);var n=a-1;e.setState({maxChances:n})}),a.eth.getBalance(s,function(t,n){t&&console.log(t);var s=a.fromWei(n,"ether").toNumber();e.setState({contractBalance:s})}),a.eth.getAccounts(function(t,n){t&&console.log(t);var s=0===n.length?null:n[0];null!==s&&a.eth.getBalance(s,function(t,n){var s=a.fromWei(n,"ether").toNumber();e.setState({accountBalance:s})}),e.setState({accountAddress:s})})},function(){var t={classType:"danger",message:"No account connected, connect with a Web3-compatible wallet like MetaMask"};e.setState({alertDict:t})})}},{key:"filterTransactions",value:function(e){var t=this.state,a=t.accountAddress,n=t.allTransactions,s=n.slice();e.endsWith("#my-transactions")&&(s=n.filter(function(e){return e.logBetEvent.args.PlayerAddress.toLowerCase()===a.toLowerCase()})),this.setState({filteredTransactions:s})}},{key:"updateState",value:function(e){var t=this;return function(a){t.setState(Object(p.a)({},e,a))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.accountAddress,n=t.accountBalance,s=t.alertDict,o=t.betSize,i=t.chances,c=t.contractAddress,l=t.contractBalance,u=t.filteredTransactions,m=t.minBet,p=t.maxBet,d=t.minChances,y=t.maxChances,b=t.network,f=i+1;return r.a.createElement("div",null,r.a.createElement(x,{classType:s.classType,message:s.message}),r.a.createElement(j,{accountAddress:a,accountBalance:n,contractAddress:c,contractBalance:l,network:b}),r.a.createElement("form",{className:"PlaceBet"},r.a.createElement("h2",null,"Place your bet"),r.a.createElement(I,{betSize:o,min:m,max:p,updateBetSize:this.updateState("betSize")}),r.a.createElement(F,{chances:i,min:d,max:y,updateChances:this.updateState("chances")}),r.a.createElement(G,{value:f,betSize:o}),r.a.createElement(Q,{onClick:function(){return e.onRollClick()}})),r.a.createElement(K,{network:b,onClick:function(t){return e.filterTransactions(t)},transactions:u}))}}]),t}(r.a.Component);var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(X,null)),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(),l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e){e.exports={a:"0.1.0"}}},[[134,2,1]]]);
//# sourceMappingURL=main.b8296bb1.chunk.js.map