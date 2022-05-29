(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[1],{1006:function(e,t,n){},1151:function(e,t,n){"use strict";n.r(t);var a=n(42),o=(n(763),n(0)),r=n.n(o),i=n(165),l=n(73),s=n.n(l),c=n(51),d=n(24),u=n(3),m=n(468),p=n(622),f=n(362),b=n(623),g=n(624),y=n(625);const h={[u.ChainId.SHERPAX]:"sherpax"};class v extends y.a{async activate(){if(!this.fortmatic){const{default:e}=await n.e(0).then(n.t.bind(null,1158,7)),{apiKey:t,chainId:a}=this;if(!(a in h))throw new Error("Unsupported network ID: "+a);this.fortmatic=new e(t,h[a])}const e=this.fortmatic.getProvider(),t=new Promise(t=>{const n=setInterval(()=>{e.overlayReady&&(clearInterval(n),this.emit("OVERLAY_READY"),t())},200)}),[a]=await Promise.all([e.enable().then(e=>e[0]),t]);return{provider:this.fortmatic.getProvider(),chainId:this.chainId,account:a}}}var x=n(143),E=n(63);class w extends Error{constructor(e,t,n){super(e),this.code=t,this.data=n}}class A{constructor(e,t,n){this.isMetaMask=!1,this.chainId=void 0,this.url=void 0,this.host=void 0,this.path=void 0,this.batchWaitTimeMs=void 0,this.nextId=1,this.batchTimeoutId=null,this.batch=[],this.clearBatch=async()=>{var e;console.debug("Clearing batch",this.batch);const t=this.batch;let n,a;this.batch=[],this.batchTimeoutId=null;try{n=await fetch(this.url,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify(t.map(e=>e.request))})}catch(s){return void t.forEach(e=>{let{reject:t}=e;return t(new Error("Failed to send batch call"))})}if(!n.ok)return void t.forEach(e=>{let{reject:t}=e;return t(new w(`${n.status}: ${n.statusText}`,-32e3))});try{a=await n.json()}catch(s){return void t.forEach(e=>{let{reject:t}=e;return t(new Error("Failed to parse JSON response"))})}const o=t.reduce((e,t)=>(e[t.request.id]=t,e),{});if(null===(e=a[0])||void 0===e?void 0:e.result)for(const c of a){const{resolve:e,reject:t,request:{method:n}}=o[c.id];var r,i,l;if(e&&t)if("error"in c)t(new w(null===c||void 0===c||null===(r=c.error)||void 0===r?void 0:r.message,null===c||void 0===c||null===(i=c.error)||void 0===i?void 0:i.code,null===c||void 0===c||null===(l=c.error)||void 0===l?void 0:l.data));else"result"in c?e(c.result):t(new w(`Received unexpected JSON-RPC response to ${n} request.`,-32e3,c))}},this.sendAsync=(e,t)=>{this.request(e.method,e.params).then(n=>t(null,{jsonrpc:"2.0",id:e.id,result:n})).catch(e=>t(e,null))},this.request=async(e,t)=>{var n;if("string"!==typeof e)return this.request(e.method,e.params);if("eth_chainId"===e)return"0x"+this.chainId.toString(16);const a=new Promise((n,a)=>{this.batch.push({request:{jsonrpc:"2.0",id:this.nextId++,method:e,params:t},resolve:n,reject:a})});return this.batchTimeoutId=null!==(n=this.batchTimeoutId)&&void 0!==n?n:setTimeout(this.clearBatch,this.batchWaitTimeMs),a},this.chainId=e,this.url=t;const a=new URL(t);this.host=a.host,this.path=a.pathname,this.batchWaitTimeMs=null!==n&&void 0!==n?n:50}}class k extends x.a{constructor(e){let{urls:t,defaultChainId:n}=e;Object(E.default)(n||1===Object.keys(t).length,"defaultChainId is a required argument with >1 url"),super({supportedChainIds:Object.keys(t).map(e=>Number(e))}),this.providers=void 0,this.currentChainId=void 0,this.currentChainId=n||Number(Object.keys(t)[0]),this.providers=Object.keys(t).reduce((e,n)=>(e[Number(n)]=new A(Number(n),t[Number(n)]),e),{})}get provider(){return this.providers[this.currentChainId]}async activate(){return{provider:this.providers[this.currentChainId],chainId:this.currentChainId,account:null}}async getProvider(){return this.providers[this.currentChainId]}async getChainId(){return this.currentChainId}async getAccount(){return null}deactivate(){}}const C="https://mainnet.sherpax.io/rpc",S="pk_live_F937DF033A1666BF",O="c0e2bf01-4b08-4fd5-ac7b-8e26b58cd236",I=parseInt(("1","1"));const T=new k({urls:{[I]:C}});let j;const N=new p.a({supportedChainIds:[1,3,4,5,42,56,97,1506,1507]}),R=new f.a({rpc:{1:C},bridge:"https://bridge.walletconnect.org",qrcode:!0}),B=new v({apiKey:S,chainId:1}),U=new g.a({dAppId:O,networks:[1]}),P=new b.a({url:C,appName:"Uniswap",appLogoUrl:"https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"}),F="0xf4fFbD250415d12Bb5Aa498CCE28ECbe85fB7141",M="0xDBD1Cc42412B6377bE167c0Df7f87CA5745b21eB",D=new u.Token(u.ChainId.SHERPAX,"0x91AAC463B5473BDe2Fdd910f09101ed687BCB97A",8,"MINI","MINI"),L=(new u.Token(u.ChainId.SHERPAX,"0xc91a8e500E814990b06BDb4fC10745124fdBE748",8,"sBTC","sBTC"),new u.Token(u.ChainId.SHERPAX,"0xa10AF02fD7eD3B5FF107B57bB1068a3f54BcAE92",8,"PCX","PCX")),z=(new u.Token(u.ChainId.SHERPAX,"0x0F5d9Ac5833C4d089097Fe2eAbBE546b9f10c422",10,"DOT","Polkadot"),new u.Token(u.ChainId.SHERPAX,"0xb513E3Cf3BD0CcFfB02Aefbc4794df3D01aB2515",12,"KSM","Kusama"),new u.Token(u.ChainId.SHERPAX,"0xD46bA6D942050d489DBd938a2C909A5d5039A161",9,"AMPL","Ampleforth")),X=(new u.Token(u.ChainId.BSC,"0x77eD6a802aB1d60A86F2e3c45B43a0Cd7Ee2572B",18,"BUSD","Binance BUSD Token"),new u.Token(u.ChainId.BSC,"0xa017362eB5B22302e4E5c55786f651214BD168A2",18,"USDC","Binance USD Coin"),new u.Token(u.ChainId.BSC,"0x1635583ACf7beF762E8119887b2f3B9F9BcD1742",18,"USDT","Binance Tether USD"),{[u.ChainId.MAINNET]:[u.WKSX[u.ChainId.MAINNET]],[u.ChainId.ROPSTEN]:[u.WKSX[u.ChainId.ROPSTEN]],[u.ChainId.RINKEBY]:[u.WKSX[u.ChainId.RINKEBY]],[u.ChainId.G\u00d6RLI]:[u.WKSX[u.ChainId.G\u00d6RLI]],[u.ChainId.KOVAN]:[u.WKSX[u.ChainId.KOVAN]],[u.ChainId.MATIC]:[u.WKSX[u.ChainId.MATIC]],[u.ChainId.SHERPAX]:[u.WKSX[u.ChainId.SHERPAX]],[u.ChainId.SHERPAXTEST]:[u.WKSX[u.ChainId.SHERPAXTEST]],[u.ChainId.BSC]:[u.WKSX[u.ChainId.BSC]],[u.ChainId.BSCTEST]:[u.WKSX[u.ChainId.BSCTEST]]}),W={...X,[u.ChainId.SHERPAX]:[...X[u.ChainId.SHERPAX]],[u.ChainId.SHERPAXTEST]:[...X[u.ChainId.SHERPAXTEST]]},H={[u.ChainId.SHERPAX]:{[z.address]:[u.WKSX[u.ChainId.SHERPAX]]},[u.ChainId.BSC]:{[z.address]:[u.WKSX[u.ChainId.BSC]]}},q={...X,[u.ChainId.SHERPAX]:[L,D]},V={...X,[u.ChainId.SHERPAX]:[...X[u.ChainId.SHERPAX]]},K={[u.ChainId.SHERPAX]:[[new u.Token(u.ChainId.SHERPAX,"0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",8,"cDAI","Compound Dai"),new u.Token(u.ChainId.SHERPAX,"0x39AA39c021dfbaE8faC545936693aC917d5E7563",8,"cUSDC","Compound USD Coin")]]},Y={INJECTED:{connector:N,name:"Injected",iconName:"arrow-right.svg",description:"Injected web3 provider.",href:null,color:"#010101",primary:!0},METAMASK:{connector:N,name:"MetaMask",iconName:"metamask.png",description:"Easy-to-use browser extension.",href:null,color:"#E8831D"},WALLET_CONNECT:{connector:R,name:"WalletConnect",iconName:"walletConnectIcon.svg",description:"Connect to Trust Wallet, Rainbow Wallet and more...",href:null,color:"#4196FC",mobile:!0}},_=new u.Percent(u.JSBI.BigInt(1),u.JSBI.BigInt(1e4)),J=u.JSBI.BigInt(1e4),Q=new u.Percent(u.JSBI.BigInt(100),J),$=new u.Percent(u.JSBI.BigInt(300),J),G=new u.Percent(u.JSBI.BigInt(500),J),Z=new u.Percent(u.JSBI.BigInt(1e3),J),ee=new u.Percent(u.JSBI.BigInt(1500),J),te=u.JSBI.exponentiate(u.JSBI.BigInt(10),u.JSBI.BigInt(16)),ne=new u.Percent(u.JSBI.BigInt(75),u.JSBI.BigInt(1e4));var ae=n(513),oe=n(223),re=n(629),ie=n.n(re),le=n(630),se=n.n(le);ae.a.use(ie.a).use(se.a).use(oe.a);ae.a;var ce=n(68),de=n(61),ue=n(2);function me(e){let{location:{pathname:t,search:n}}=e;return Object(o.useEffect)(()=>{c.a.pageview(`${t}${n}`)},[t,n]),null}var pe=n(631),fe=n.n(pe);function be(){const e=Object(a.d)(),t=Object(a.d)("NETWORK");return e.active?e:t}var ge=n(1209),ye=n(469),he=n.n(ye),ve=n(307),xe=n.n(ve),Ee=n(470),we=n.n(Ee),Ae=n(471),ke=n.n(Ae),Ce=n(216),Se=n(28);const Oe=Object(Se.b)("app/updateBlockNumber"),Ie=Object(Se.b)("app/toggleWalletModal"),Te=Object(Se.b)("app/toggleSettingsMenu"),je=Object(Se.b)("app/addPopup"),Ne=Object(Se.b)("app/removePopup");function Re(){const{chainId:e}=be();return Object(d.c)(t=>t.application.blockNumber[null!==e&&void 0!==e?e:-1])}function Be(){const e=Object(d.b)();return Object(o.useCallback)(()=>e(Ie()),[e])}function Ue(){const e=Object(d.b)();return Object(o.useCallback)(()=>e(Te()),[e])}function Pe(){const e=Object(d.b)();return Object(o.useCallback)(t=>{e(Ne({key:t}))},[e])}function Fe(){const e=Object(d.c)(e=>e.application.popupList);return Object(o.useMemo)(()=>e.filter(e=>e.show),[e])}const Me=/^0x[a-fA-F0-9]{40}$/,De=/^0x[a-f0-9]*$/;function Le(e){if(!Me.test(e.address))throw new Error("Invalid address: "+e.address);if(!De.test(e.callData))throw new Error("Invalid hex: "+e.callData);return`${e.address}-${e.callData}`}function ze(e){const t=e.split("-");if(2!==t.length)throw new Error("Invalid call key: "+e);return{address:t[0],callData:t[1]}}const Xe=Object(Se.b)("multicall/addMulticallListeners"),We=Object(Se.b)("multicall/removeMulticallListeners"),He=Object(Se.b)("multicall/fetchingMulticallResults"),qe=Object(Se.b)("multicall/errorFetchingMulticallResults"),Ve=Object(Se.b)("multicall/updateMulticallResults");function Ke(e){return-1!==["string","number"].indexOf(typeof e)}function Ye(e){return void 0===e||Array.isArray(e)&&e.every(e=>Ke(e)||Array.isArray(e)&&e.every(Ke))}const _e={valid:!1,blockNumber:void 0,data:void 0},Je={blocksPerFetch:1/0};function Qe(e,t){const{chainId:n}=be(),a=Object(d.c)(e=>e.multicall.callResults),r=Object(d.b)(),i=Object(o.useMemo)(()=>{var t,n,a;return JSON.stringify(null!==(t=null===e||void 0===e||null===(n=e.filter(e=>Boolean(e)))||void 0===n||null===(a=n.map(Le))||void 0===a?void 0:a.sort())&&void 0!==t?t:[])},[e]);return Object(o.useEffect)(()=>{const e=JSON.parse(i);if(!n||0===e.length)return;const a=e.map(e=>ze(e));return r(Xe({chainId:n,calls:a,options:t})),()=>{r(We({chainId:n,calls:a,options:t}))}},[n,r,t,i]),Object(o.useMemo)(()=>e.map(e=>{var t;if(!n||!e)return _e;const o=null===(t=a[n])||void 0===t?void 0:t[Le(e)];let r;return(null===o||void 0===o?void 0:o.data)&&"0x"!==(null===o||void 0===o?void 0:o.data)&&(r=o.data),{valid:!0,data:r,blockNumber:null===o||void 0===o?void 0:o.blockNumber}}),[a,e,n])}const $e={valid:!1,result:void 0,loading:!1,syncing:!1,error:!1},Ge={valid:!0,result:void 0,loading:!0,syncing:!0,error:!1};function Ze(e,t,n,a){if(!e)return $e;const{valid:o,data:r,blockNumber:i}=e;if(!o)return $e;if(o&&!i)return Ge;if(!t||!n||!a)return Ge;const l=r&&r.length>2,s=(null!==i&&void 0!==i?i:0)<a;let c=void 0;if(l&&r)try{c=t.decodeFunctionResult(n,r)}catch(d){return console.debug("Result data parsing failed",n,r),{valid:!0,loading:!1,error:!0,syncing:s,result:c}}return{valid:!0,loading:!1,syncing:s,result:c,error:!l}}function et(e,t,n,a){const r=Object(o.useMemo)(()=>{var n;return null===e||void 0===e||null===(n=e.interface)||void 0===n?void 0:n.getFunction(t)},[e,t]),i=Qe(Object(o.useMemo)(()=>e&&r&&n&&n.length>0?n.map(t=>({address:e.address,callData:e.interface.encodeFunctionData(r,t)})):[],[n,e,r]),a),l=Re();return Object(o.useMemo)(()=>i.map(t=>Ze(t,null===e||void 0===e?void 0:e.interface,r,l)),[r,e,i,l])}function tt(e,t,n,a,r){const i=Object(o.useMemo)(()=>t.getFunction(n),[t,n]),l=Object(o.useMemo)(()=>i&&Ye(a)?t.encodeFunctionData(i,a):void 0,[a,t,i]),s=Qe(Object(o.useMemo)(()=>i&&e&&e.length>0&&l?e.map(e=>e&&l?{address:e,callData:l}:void 0):[],[e,l,i]),r),c=Re();return Object(o.useMemo)(()=>s.map(e=>Ze(e,t,i,c)),[i,s,t,c])}function nt(e,t,n,a){const r=Object(o.useMemo)(()=>{var n;return null===e||void 0===e||null===(n=e.interface)||void 0===n?void 0:n.getFunction(t)},[e,t]),i=Qe(Object(o.useMemo)(()=>e&&r&&Ye(n)?[{address:e.address,callData:e.interface.encodeFunctionData(r,n)}]:[],[e,r,n]),a)[0],l=Re();return Object(o.useMemo)(()=>Ze(i,null===e||void 0===e?void 0:e.interface,r,l),[i,e,r,l])}var at=n(114),ot=n(41),rt=n(538),it=n(64),lt=n(632),st=n(417),ct=n(633);const dt=["SherpaX"],ut=[1506],mt=[56],pt=["BSC"];function ft(e){try{return Object(ot.getAddress)(e)}catch{return!1}}const bt={1:"etherscan.io",3:"ropsten.etherscan.io",4:"rinkeby.etherscan.io",5:"goerli.etherscan.io",42:"kovan.etherscan.io",80001:"explorer-mumbai.maticvigil.com",1506:"evm.sherpax.io",1507:"evm-pre.sherpax.io",56:"bscscan.com",97:"testnet.bscscan.com"};function gt(e,t,n){const a="https://"+(bt[e]||bt[1]);if(!n&&ut.includes(e))return`${a}/trade/${t}`;switch(n){case"transaction":return`${a}/tx/${t}`;case"token":return`${a}/token/${t}`;case"address":default:return`${a}/account/${t}`}}function yt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const n=ft(e);if(!e)return"";if(!n)throw Error(`Invalid 'address' parameter '${e}'.`);return`${n.substring(0,t+2)}...${n.substring(42-t)}`}function ht(e){return e.mul(it.a.from(1e4).add(it.a.from(1e3))).div(it.a.from(1e4))}function vt(e,t){if(t<0||t>1e4)throw Error("Unexpected slippage value: "+t);return[u.JSBI.divide(u.JSBI.multiply(e.raw,u.JSBI.BigInt(1e4-t)),u.JSBI.BigInt(1e4)),u.JSBI.divide(u.JSBI.multiply(e.raw,u.JSBI.BigInt(1e4+t)),u.JSBI.BigInt(1e4))]}function xt(e,t,n,a){if(!ft(e)||e===rt.a)throw Error(`Invalid 'address' parameter '${e}'.`);return new at.Contract(e,t,function(e,t){return t?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(n,a))}function Et(e,t,n){return xt(F,lt.a,t,n)}function wt(e,t,n){return xt(M,ct,t,n)}function At(e,t){var n;return t===u.ETHER||Boolean(t instanceof u.Token&&(null===(n=e[t.chainId])||void 0===n?void 0:n[t.address]))}function kt(e){return/^0x0*$/.test(e)}var Ct=n(363),St=n(634),Ot=n(635),It=n(300),Tt=n(308),jt=n(472);const Nt=new It.b(Tt);new It.b(jt);var Rt=Nt,Bt=n(539);const Ut="0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b";n(636);var Pt=n(637),Ft=n(540);const Mt={[u.ChainId.MAINNET]:"0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441",[u.ChainId.ROPSTEN]:"0x53C43764255c17BD724F74c4eF150724AC50a3ed",[u.ChainId.KOVAN]:"0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A",[u.ChainId.RINKEBY]:"0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821",[u.ChainId.G\u00d6RLI]:"0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e",[u.ChainId.MATIC]:"0x4408f4b8d6154065175Ee67Df9de70cAccc17c0C",[u.ChainId.SHERPAX]:"0xb2d6370F2a500dF8E694c7FCA32E69f71197F1c9",[u.ChainId.SHERPAXTEST]:"0x7b21801C4B7219BDeb3494AC98e948abBD25b2e9",[u.ChainId.BSC]:"0x41263cba59eb80dc200f3e2544eda4ed6a90e76c",[u.ChainId.BSCTEST]:"0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C"};var Dt=n(473),Lt=n(474);const zt={[u.ChainId.MAINNET]:"0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",[u.ChainId.ROPSTEN]:"0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351",[u.ChainId.RINKEBY]:"0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36",[u.ChainId.G\u00d6RLI]:"0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA",[u.ChainId.KOVAN]:"0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30",[u.ChainId.MATIC]:"",[u.ChainId.SHERPAX]:"",[u.ChainId.SHERPAXTEST]:"",[u.ChainId.BSC]:"",[u.ChainId.BSCTEST]:""};new It.b(Lt),new It.b(Dt);function Xt(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const{library:a,account:r}=be();return Object(o.useMemo)(()=>{if(!e||!t||!a)return null;try{return xt(e,t,a,n&&r?r:void 0)}catch(o){return console.error("Failed to get contract",o),null}},[e,t,a,n,r])}function Wt(){const{chainId:e}=be();return Xt(e&&zt[e],Lt,!1)}function Ht(e,t){return Xt(e,Dt,t)}function qt(e,t){return Xt(e,Tt,t)}function Vt(e){const{chainId:t}=be();let n;if(t)switch(t){case u.ChainId.SHERPAX:n="0xc6E6752F9829579C9753B197Ea0893D10d2A0E83"}return Xt(n,St,e)}function Kt(e,t){return Xt(e,Ot,t)}function Yt(){const{chainId:e}=be();return Xt(e&&Mt[e],Ft,!1)}function _t(e,t){const[n,a]=Object(o.useState)(e);return Object(o.useEffect)(()=>{const n=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(n)}},[e,t]),n}function Jt(e){var t,n,a;const r=_t(e,200),i=Object(o.useMemo)(()=>{if(!r||!ft(r))return[void 0];try{return r?[Object(Ce.namehash)(r.toLowerCase().substr(2)+".addr.reverse")]:[void 0]}catch(e){return[void 0]}},[r]),l=nt(Vt(!1),"resolver",i),s=null===(t=l.result)||void 0===t?void 0:t[0],c=nt(Kt(s&&!kt(s)?s:void 0,!1),"name",i),d=r!==e;return{ENSName:d?null:null!==(n=null===(a=c.result)||void 0===a?void 0:a[0])&&void 0!==n?n:null,loading:d||l.loading||c.loading}}const Qt=Object(Se.b)("transactions/addTransaction"),$t=Object(Se.b)("transactions/clearAllTransactions"),Gt=Object(Se.b)("transactions/finalizeTransaction"),Zt=Object(Se.b)("transactions/checkedTransaction");function en(){const{chainId:e,account:t}=be(),n=Object(d.b)();return Object(o.useCallback)((function(a){let{summary:o,approval:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)return;if(!e)return;const{hash:i}=a;if(!i)throw Error("No transaction hash found.");n(Qt({hash:i,from:t,chainId:e,approval:r,summary:o}))}),[n,e,t])}function tn(){var e;const{chainId:t}=be(),n=Object(d.c)(e=>e.transactions);return t&&null!==(e=n[t])&&void 0!==e?e:{}}function nn(e){const t=tn();return!(!e||!t[e])&&!t[e].receipt}function an(e){return(new Date).getTime()-e.addedTime<864e5}var on=n(494),rn=n.n(on),ln=n(639),sn=n.n(ln);const cn=ue.default.div`
  // height: ${e=>{let{size:t}=e;return t?t+"px":"1rem"}};
  // width: ${e=>{let{size:t}=e;return t?t+"px":"1rem"}};
  border-radius: 1.125rem;
  // background-color: ${e=>{let{theme:t}=e;return t.bg4}};
`;function dn(e){let{size:t}=e;const n=Object(o.useRef)(),{account:a}=be();return Object(o.useEffect)(()=>{a&&n.current&&(n.current.innerHTML="",n.current.appendChild(sn()(t||16,parseInt(a.slice(2,10),16))))},[a]),r.a.createElement(cn,{ref:n,size:t})}const un=ue.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,mn=ue.default.svg`
  animation: 2s ${un} linear infinite;
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
  path {
    stroke: ${e=>{let{stroke:t,theme:n}=e;return null!==t&&void 0!==t?t:n.primary1}};
  }
`;function pn(e){let{size:t="16px",stroke:n,...a}=e;return r.a.createElement(mn,Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:t,stroke:n},a),r.a.createElement("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}))}function fn(e){const t=Object(o.useRef)();return Object(o.useEffect)(()=>{t.current=e},[e]),t.current}var bn=n(268);const gn=Object(ue.default)(bn.Box)`
  width: 100%;
  display: flex;
  padding: 0;
  align-items: ${e=>{let{align:t}=e;return t||"center"}};
  padding: ${e=>{let{padding:t}=e;return t}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t}};
`,yn=Object(ue.default)(gn)`
  justify-content: space-between;
  padding: ${e=>{let{padding:t}=e;return t||"4px 0"}};
  &.paddingTB {
    padding: 16px 0;
  }
`,hn=(ue.default.div`
  display: flex;
  align-items: flex-end;
`,Object(ue.default)(gn)`
  flex-wrap: wrap;
  margin: ${e=>{let{gap:t}=e;return t&&"-"+t}};
  justify-content: ${e=>{let{justify:t}=e;return t&&t}};

  & > * {
    margin: ${e=>{let{gap:t}=e;return t}} !important;
  }
`),vn=Object(ue.default)(gn)`
  width: ${e=>{let{width:t}=e;return t||"fit-content"}};
  margin: ${e=>{let{gap:t}=e;return t&&"-"+t}};
`;var xn=gn,En=n(1197),wn=n(1198),An=n(368),kn=n.n(An),Cn=n(434);class Sn extends u.Token{constructor(e,t){super(e.chainId,e.address,e.decimals,e.symbol,e.name),this.tokenInfo=void 0,this.tags=void 0,this.tokenInfo=e,this.tags=t}get logoURI(){return this.tokenInfo.logoURI}}const On={[u.ChainId.KOVAN]:{},[u.ChainId.RINKEBY]:{},[u.ChainId.ROPSTEN]:{},[u.ChainId.G\u00d6RLI]:{},[u.ChainId.MAINNET]:{},[u.ChainId.MATIC]:{},[u.ChainId.SHERPAX]:{},[u.ChainId.SHERPAXTEST]:{},[u.ChainId.BSC]:{},[u.ChainId.BSCTEST]:{}},In="undefined"!==typeof WeakMap?new WeakMap:null;function Tn(e){if(!e)return{...On};const t=null===In||void 0===In?void 0:In.get(e);if(t)return t;const n=e.tokens.reduce((t,n)=>{var a,o,r;const i=null!==(a=null===(o=n.tags)||void 0===o||null===(r=o.map(t=>{var n;if(null===(n=e.tags)||void 0===n?void 0:n[t])return{...e.tags[t],id:t}}))||void 0===r?void 0:r.filter(e=>Boolean(e)))&&void 0!==a?a:[],l=new Sn(n,i);if(void 0!==t[l.chainId][l.address])throw Error("Duplicate tokens.");return{...t,[l.chainId]:{...t[l.chainId],[l.address]:l}}},{...On});return null===In||void 0===In||In.set(e,n),n}function jn(){return Object(d.c)(e=>e.lists.selectedListUrl)}function Nn(){return function(e){const t=Object(d.c)(e=>e.lists.byUrl);return Object(o.useMemo)(()=>{var n;if(!e)return On;const a=null===(n=t[e])||void 0===n?void 0:n.current;if(!a)return On;try{return Tn(a)}catch(o){return console.error("Could not show token list due to error",o),On}},[t,e])}(jn())}function Rn(){const{chainId:e}=be(),t=Zn(),n=Nn();return Object(o.useMemo)(()=>e?t.reduce((e,t)=>(e[t.address]=t,e),{...n[e]}):{},[e,t,n])}const Bn=/^0x[a-fA-F0-9]{64}$/;function Un(e,t,n){return e&&e.length>0?e:t&&Bn.test(t)?Object(Cn.b)(t):n}function Pn(e){const{chainId:t}=be(),n=Rn(),a=ft(e),r=qt(a||void 0,!1),i=function(e,t){return Xt(e,jt,t)}(a||void 0,!1),l=a?n[a]:void 0,s=nt(l?void 0:r,"name",void 0,Je),c=nt(l?void 0:i,"name",void 0,Je),d=nt(l?void 0:r,"symbol",void 0,Je),m=nt(l?void 0:i,"symbol",void 0,Je),p=nt(l?void 0:r,"decimals",void 0,Je);return Object(o.useMemo)(()=>{if(l)return l;if(t&&a){if(p.loading||d.loading||s.loading)return null;var e,n,o,r;if(p.result)return new u.Token(t,a,p.result[0],Un(null===(e=d.result)||void 0===e?void 0:e[0],null===(n=m.result)||void 0===n?void 0:n[0],"UNKNOWN"),Un(null===(o=s.result)||void 0===o?void 0:o[0],null===(r=c.result)||void 0===r?void 0:r[0],"Unknown Token"))}},[a,t,p.loading,p.result,d.loading,d.result,m.result,l,s.loading,s.result,c.result])}function Fn(e){const t="KSX"===(null===e||void 0===e?void 0:e.toUpperCase()),n=Pn(t?void 0:e);return t?u.ETHER:n}const Mn=Object(Se.b)("user/updateMatchesDarkMode"),Dn=Object(Se.b)("user/updateUserDarkMode"),Ln=Object(Se.b)("user/updateUserExpertMode"),zn=Object(Se.b)("user/updateUserSlippageTolerance"),Xn=Object(Se.b)("user/updateUserDeadline"),Wn=Object(Se.b)("user/addSerializedToken"),Hn=Object(Se.b)("user/removeSerializedToken"),qn=Object(Se.b)("user/addSerializedPair"),Vn=Object(Se.b)("user/removeSerializedPair");function Kn(e){return{chainId:e.chainId,address:e.address,decimals:e.decimals,symbol:e.symbol,name:e.name}}function Yn(e){return new u.Token(e.chainId,e.address,e.decimals,e.symbol,e.name)}function _n(){return Object(d.c)(e=>e.user.userExpertMode)}function Jn(){const e=Object(d.b)(),t=_n(),n=Object(o.useCallback)(()=>{e(Ln({userExpertMode:!t}))},[t,e]);return[t,n]}function Qn(){const e=Object(d.b)();return[Object(d.c)(e=>e.user.userSlippageTolerance),Object(o.useCallback)(t=>{e(zn({userSlippageTolerance:t}))},[e])]}function $n(){const e=Object(d.b)();return[Object(d.c)(e=>e.user.userDeadline),Object(o.useCallback)(t=>{e(Xn({userDeadline:t}))},[e])]}function Gn(){const e=Object(d.b)();return Object(o.useCallback)(t=>{e(Wn({serializedToken:Kn(t)}))},[e])}function Zn(){const{chainId:e}=be(),t=Object(d.c)(e=>{let{user:{tokens:t}}=e;return t});return Object(o.useMemo)(()=>{var n;return e?Object.values(null!==(n=t[e])&&void 0!==n?n:{}).map(Yn):[]},[t,e])}function ea(e){return{token0:Kn(e.token0),token1:Kn(e.token1)}}function ta(e){let[t,n]=e;return new u.Token(t.chainId,u.Pair.getAddress(t,n),18,"UNI-V2","Uniswap V2")}var na=n(13),aa=n(58),oa=n(1195),ra=n(1196);ue.default.button.attrs(e=>{let{warning:t,theme:n}=e;return{backgroundColor:t?n.red1:n.primary1}})`
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: ${e=>{let{backgroundColor:t}=e;return t}};
  color: ${e=>{let{theme:t}=e;return t.white}};
  width: 100%;

  :hover,
  :focus {
    background-color: ${e=>{let{backgroundColor:t}=e;return Object(aa.a)(.05,t)}};
  }

  :active {
    background-color: ${e=>{let{backgroundColor:t}=e;return Object(aa.a)(.1,t)}};
  }

  :disabled {
    background-color: ${e=>{let{theme:t}=e;return t.bg1}};
    color: ${e=>{let{theme:t}=e;return t.text4}};
    cursor: auto;
  }
`;const ia=Object(ue.default)(oa.a)`
  color: #3b199f;
  cursor: pointer;
`,la=ue.default.button`
  border: none;
  text-decoration: none;
  background: none;

  cursor: ${e=>{let{disabled:t}=e;return t?"default":"pointer"}};
  color: #ffb14a;
  font-weight: 500;
  ${e=>{let{props:t}=e;return t}};
  :hover {
    text-decoration: ${e=>{let{disabled:t}=e;return t?null:"underline"}};
  }

  :focus {
    outline: none;
    text-decoration: ${e=>{let{disabled:t}=e;return t?null:"underline"}};
  }

  :active {
    text-decoration: none;
  }
`,sa=Object(ue.default)(ce.b)`
  text-decoration: none;
  cursor: pointer;
  color: #876cd7;
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`,ca=ue.default.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  color: #876cd7;

  :hover {
    color: #21d2b3 !important;
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`;function da(e){let{target:t="_blank",href:n,rel:a="noopener noreferrer",...i}=e;const l=Object(o.useCallback)(e=>{"_blank"===t||e.ctrlKey||e.metaKey?c.a.outboundLink({label:n},()=>{console.debug("Fired outbound link event",n)}):(e.preventDefault(),c.a.outboundLink({label:n},()=>{window.location.href=n}))},[n,t]);return r.a.createElement(ca,Object.assign({target:t,rel:a,href:n,onClick:l},i))}const ua=ue.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ma=ue.default.img`
  animation: 2s ${ua} linear infinite;
  width: 16px;
  height: 16px;
`,pa=ue.default.div`
  padding: 16px 24px 24px;
`,fa=Object(ue.default)(na.a)`
  max-width: ${e=>{let{maxWidth:t}=e;return t}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ba=ue.default.div`
  background: #f5f6f9;
  border-radius: 16px;
  padding: 8px 10px;

  &.overlay {
    img.currency-logo-b {
      margin-left: -8px;
    }
  }
`,ga=(ue.default.div`
  font-size: 13px;
  font-weight: 500;
  color: #6d4ec9;
  line-height: 16px;
  padding: 6px;
  background: #f0e2fe;
  border-radius: 8px;
  width: fit-content;
`,Object(ue.default)(sa)`
  color: #876cd7;
`);function ya(e){let{to:t}=e;return r.a.createElement(ga,{to:t},r.a.createElement(ra.a,null))}const ha={upToExtraSmall:500,upToSmall:600,upToMedium:960,upToLarge:1280},va=Object.keys(ha).reduce((e,t)=>(e[t]=(e,n,a)=>ue.css`
      @media (max-width: ${ha[t]}px) {
        ${Object(ue.css)(e,n,a)}
      }
    `,e),{});function xa(e){return{white:"#FFFFFF",black:"#000000",purple:"#3B199F",text1:e?"#FFFFFF":"#000000",text2:e?"#C3C5CB":"#ABA5BD",text3:e?"#6C7284":"#888D9B",text4:e?"#565A69":"#C3C5CB",text5:e?"#2C2F36":"#EDEEF2",text6:e?"#2C2F36":"#3B199F",bg1:e?"#212429":"#FFFFFF",bg2:e?"#2C2F36":"#F7F8FA",bg3:e?"#40444F":"#EDEEF2",bg4:e?"#565A69":"#CED0D9",bg5:e?"#6C7284":"#888D9B",modalBG:e?"rgba(0,0,0,.425)":"rgba(0,0,0,0.3)",advancedBG:e?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.6)",primary1:e?"#2172E5":"#E93E5E",primary2:e?"#3680E7":"#FF8CC3",primary3:e?"#4D8FEA":"#FF99C9",primary4:e?"#376bad70":"#F6DDE8",primary5:e?"#153d6f70":"#FDEAF1",primaryText1:e?"#6da8ff":"#E93E5E",secondary1:e?"#2172E5":"#E93E5E",secondary2:e?"#17000b26":"#F6DDE8",secondary3:e?"#17000b26":"#FDEAF1",red1:"#E93E5E",red2:"#F82D3A",green1:"#9CD9B6",yellow1:"#FFE270",yellow2:"#F28524"}}function Ea(e){let{children:t}=e;const n=Object(o.useMemo)(()=>function(e){return{...xa(e),grids:{sm:8,md:12,lg:24},shadow1:e?"#000":"#2F80ED",mediaWidth:va,flexColumnNoWrap:ue.css`
      display: flex;
      flex-flow: column nowrap;
    `,flexRowNoWrap:ue.css`
      display: flex;
      flex-flow: row nowrap;
    `}}(!1),[!1]);return r.a.createElement(ue.ThemeProvider,{theme:n},t)}const wa=Object(ue.default)(na.a)`
  color: ${e=>{let{color:t,theme:n}=e;return n[t]}};
`,Aa={main:e=>r.a.createElement(wa,Object.assign({fontWeight:500,color:"text2"},e)),link:e=>r.a.createElement(wa,Object.assign({fontWeight:500,color:"primary1"},e)),black:e=>r.a.createElement(wa,Object.assign({fontWeight:500,color:"text1"},e)),body:e=>r.a.createElement(wa,Object.assign({fontWeight:400,fontSize:16,color:"text1"},e)),largeHeader:e=>r.a.createElement(wa,Object.assign({fontWeight:600,fontSize:24},e)),mediumHeader:e=>r.a.createElement(wa,Object.assign({fontWeight:500,fontSize:20},e)),subHeader:e=>r.a.createElement(wa,Object.assign({fontWeight:400,fontSize:14},e)),blue:e=>r.a.createElement(wa,Object.assign({fontWeight:500,color:"primary1"},e)),yellow:e=>r.a.createElement(wa,Object.assign({fontWeight:500,color:"yellow1"},e)),darkGray:e=>r.a.createElement(wa,Object.assign({fontWeight:500,color:"text3"},e)),gray:e=>r.a.createElement(wa,Object.assign({fontWeight:500,color:"bg3"},e)),puple:e=>r.a.createElement(wa,Object.assign({fontWeight:500,fontSize:12,fontStyle:"italic",color:"#988EB7"},e)),italic:e=>r.a.createElement(wa,Object.assign({fontWeight:500,fontSize:12,fontStyle:"italic",color:"text2"},e)),error(e){let{error:t,...n}=e;return r.a.createElement(wa,Object.assign({fontWeight:500,color:t?"red1":"text2"},n))}},ka=ue.createGlobalStyle`
html, input, textarea, button {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.018em;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Inter var', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  height: fit-content!important;

}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
  background: transparent !important;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`,Ca=ue.createGlobalStyle`
html {
  overflow-x: hidden;
  // color: ${e=>{let{theme:t}=e;return t.text1}};
}

body {
  min-height: 100vh;
  background: linear-gradient(225deg, #BEC1FF 0%, #EDF0FB 35%, #DCF7EC 45%, #001137 65%, #f84354 100%);;
}
`,Sa=ue.default.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`,Oa=Object(ue.default)(da)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none !important;
  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
  font-size: 13px;
  font-weight: 600;
  color: #876cd7;
  line-height: 16px;
`,Ia=ue.default.div`
  color: ${e=>{let{pending:t,success:n,theme:a}=e;return t?a.primary1:n?a.green1:a.red1}};
`;function Ta(e){var t,n;let{hash:a}=e;const{chainId:o}=be(),i=tn(),l=null===i||void 0===i?void 0:i[a],s=null===l||void 0===l?void 0:l.summary,c=!(null===l||void 0===l?void 0:l.receipt),d=!c&&l&&(1===(null===(t=l.receipt)||void 0===t?void 0:t.status)||"undefined"===typeof(null===(n=l.receipt)||void 0===n?void 0:n.status));return o?r.a.createElement(Oa,{href:gt(o,a,"transaction"),pending:c,success:d},r.a.createElement(vn,null,r.a.createElement(Sa,null,null!==s&&void 0!==s?s:a," \u2197")),r.a.createElement(Ia,{pending:c,success:d},c?r.a.createElement(pn,{stroke:"#3B199F"}):d?r.a.createElement(En.a,{size:"16",color:"#38DCBF"}):r.a.createElement(wn.a,{size:"16",color:"#E93E5E"}))):null}const ja=ue.default.div`
  position: relative;
  background-color: transparent;

  .dashBorder {
    position: absolute;
    width: 52px;
    height: 48px;
    border-left: 1px dashed #aba5bd;
    top: 90px;
    left: 29px;
  }

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`,Na=ue.default.div`
  padding: 1rem;
  position: relative;
  display: grid;
  grid-row-gap: 12px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border-radius: 20px;
  border: 1px solid #e8eaf1;
`,Ra=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.text1}};

  div {
    ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
    align-items: center;
  }
`,Ba=ue.default.div`
  background-color: transparent;
  padding: 24px;
`,Ua=ue.default.div`
  h5 {
    margin: 0 0 1rem 0;
    font-weight: 400;
  }

  h4 {
    margin: 0;
    font-weight: 500;
  }
`,Pa=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}}
  padding: 0 24px 24px;
  flex-grow: 1;
  overflow: auto;
  background-color: transparent;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 20px;

  h5 {
    margin: 0;
    font-weight: 400;
  }
`,Fa=ue.default.div`
  display: flex;
  justify-content: start;
  min-width: 0;
  width: 100%;
  font-weight: 500;
  font-size: 1.25rem;
  a:hover {
    text-decoration: underline;
  }

  p {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    color: #3b199f;
    line-height: 24px;
  }
`,Ma=Object(ue.default)(da)`
  margin-left: 1rem;
  display: flex;
  font-size: 13px;
  font-weight: 500;
  color: #aba5bd;
  line-height: 16px;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.text2}};
  }
`,Da=ue.default.div`
  width: initial;
  font-size: 0.825rem;
  font-weight: 500;
  color: #aba5bd;
`,La=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
`,za=ue.default.div`
  width: fit-content;
  font-weight: 400;
  margin-left: 8px;
  font-size: 13px;
  padding: 4px 6px;
  background: #f0e2fe;
  border-radius: 8px;
  color: #6d4ec9;
  :hover {
    background: #CCC9E9;
    cursor: pointer;
    text-decoration: underline;
  }
`;var Xa=n(435),Wa=n.n(Xa);var Ha=n(1199);const qa=ue.default.div`
  color: #ABA5BD;
  flex-shrink: 0;
  display: flex;
  text-decoration: none;
  font-size: 0.825rem;
  :hover,
  :active,
  :focus {
    cursor: pointer;
    text-decoration: none;
    color: ${e=>{let{theme:t}=e;return t.text2}};
  }
`,Va=ue.default.span`
  margin-left: 0.25rem;
  font-size: 0.825rem;
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
`;function Ka(e){const[t,n]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;const[t,n]=Object(o.useState)(!1),a=Object(o.useCallback)(e=>{const t=Wa()(e);n(t)},[]);return Object(o.useEffect)(()=>{if(t){const t=setTimeout(()=>{n(!1)},e);return()=>{clearTimeout(t)}}},[t,n,e]),[t,a]}();return r.a.createElement(qa,{onClick:()=>n(e.toCopy)},t?r.a.createElement(Va,null,r.a.createElement(En.a,{size:"16"}),r.a.createElement(Va,null,"Copied")):r.a.createElement(Va,null,r.a.createElement(Ha.a,{size:"16"})),t?"":e.children)}var Ya=n(1208),_a=n(642),Ja=n.n(_a);function Qa(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(e)return`${e.substring(0,t+2)}...${e.substring(e.length-t)}`}var $a=n(1227),Ga=n(1223),Za=n(97),eo=n.n(Za),to=n(371),no=n.n(to),ao=n(227),oo=n.n(ao),ro=n(219),io=n.n(ro),lo=n(252),so=n.n(lo),co=n(253),uo=n.n(co),mo=n(121),po=n.n(mo),fo=n(320),bo=n.n(fo);let go;!function(e){e[e.SHERPAX=1506]="SHERPAX",e[e.SHERPAXTEST=1507]="SHERPAXTEST",e[e.BSC=56]="BSC",e[e.BSCTEST=97]="BSCTEST"}(go||(go={}));Object.values(go).filter(e=>"number"===typeof e),go.SHERPAX;let yo;!function(e){e[e.L1=0]="L1",e[e.L2=1]="L2"}(yo||(yo={}));const ho={[go.SHERPAX]:{networkType:yo.L1,bridge:"https://wallet.sherpax.io/",explorer:"https://evm.sherpax.io/",label:"SHERPAX",logoUrl:"SherpaxLogo",addNetworkInfo:{rpcUrl:"https://mainnet.sherpax.io/rpc",nativeCurrency:{name:"SHERPAX",symbol:"KSX",decimals:18}}},[go.SHERPAXTEST]:{networkType:yo.L1,bridge:"https://wallet.sherpax.io/",explorer:"https:// evm-pre.sherpax.io/",label:"SHERPAXTEST",logoUrl:"SherpaxLogo",addNetworkInfo:{rpcUrl:"https://sherpax-testnet.chainx.org/rpc",nativeCurrency:{name:"SHERPAX",symbol:"KSX",decimals:18}}},[go.BSC]:{networkType:yo.L1,bridge:"https://wallet.sherpax.io/",explorer:"https://bscscan.com",label:"BSC",logoUrl:"SherpaxLogo",addNetworkInfo:{rpcUrl:"https://bsc-dataseed.binance.org/",nativeCurrency:{name:"BSC",symbol:"BNB",decimals:18}}},[go.BSCTEST]:{networkType:yo.L1,bridge:"https://wallet.sherpax.io/",explorer:"https://testnet.bscscan.com/",label:"BSCTEST",logoUrl:"SherpaxLogo",addNetworkInfo:{rpcUrl:"https://data-seed-prebsc-1-s1.binance.org:8545",nativeCurrency:{name:"TBNB",symbol:"tBNB",decimals:18}}}};var vo=n(309),xo=n.n(vo),Eo=n(310),wo=n.n(Eo),Ao=n(311),ko=n.n(Ao);const Co={name:"Default",logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/icon_soswap.svg",keywords:["default","defi"],timestamp:"2021-05-27T20:37:00.000+00:00",tokens:[{chainId:56,address:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",assetId:1111,fee:1,name:"BSC",symbol:"BUSD",decimals:18,logoURI:xo.a},{chainId:56,address:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",assetId:2222,fee:1,name:"BSC",symbol:"USDC",decimals:18,logoURI:wo.a},{chainId:56,address:"0x55d398326f99059fF775485246999027B3197955",assetId:3333,fee:1,name:"BSC",symbol:"USDT",decimals:18,logoURI:ko.a},{chainId:56,address:"",assetId:1111,fee:.01,name:"BSC",symbol:"BNB",decimals:18,logoURI:io.a},{chainId:56,address:"0xc91a8e500e814990b06bdb4fc10745124fdbe748",assetId:4444,fee:.1,name:"PCX",symbol:"PCX",decimals:8,logoURI:po.a}],version:{major:1,minor:1,patch:1}},So={tokens:[{chainId:1506,address:"0x37088186089c7D6BcD556d9A15087DFaE3Ba0C32",assetId:1111,fee:1,name:"BSC",symbol:"BUSD",decimals:18,logoURI:xo.a},{chainId:1506,address:"0x935CC842f220CF3A7D10DA1c99F01B1A6894F7C5",assetId:2222,fee:1,name:"BSC",symbol:"USDC",decimals:18,logoURI:wo.a},{chainId:1506,address:"0x4B53739D798EF0BEa5607c254336b40a93c75b52",assetId:3333,fee:1,name:"BSC",symbol:"USDT",decimals:18,logoURI:ko.a},{chainId:1506,address:"0xF02c1292f3cabf203d6Ae0b8c85D679B2D47001c",assetId:3333,fee:.01,name:"BSC",symbol:"BNB",decimals:18,logoURI:io.a},{chainId:1506,address:"0xa10AF02fD7eD3B5FF107B57bB1068a3f54BcAE92",assetId:3333,fee:.1,limitBalance:1,name:"PCX",symbol:"PCX",decimals:8,logoURI:po.a}]},Oo=r.a.createContext({}),Io=[{name:"SherpaX",logo:eo.a,wssUrl:"wss://mainnet.sherpax.io",metaMaskId:go.SHERPAX,symbol:"KSX",decimals:18,tokens:[{name:"KSX",decimals:18,icon:eo.a},{name:"MINI",decimals:8,icon:oo.a}],targetChains:[{name:"MiniX",logo:no.a,wssUrl:"wss://minichain-mainnet.coming.chat",symbol:"MINI",decimals:8,tokens:[{name:"MINIX",decimals:8,assetId:3,symbol:"MINI",icon:oo.a,fee:1.25}],extrinsic:"assetsBridge.teleport"},{name:"ChainX",logo:po.a,wssUrl:"wss://mainnet.chainx.org/ws",symbol:"PCX",decimals:8,tokens:[{assetId:2,name:"ChainX",fee:.1,decimals:8,symbol:"PCX",logoURI:po.a},{assetId:0,isSherpax:!0,name:"ChainX",decimals:8,fee:5e-4,symbol:"XBTC",logoURI:bo.a}],extrinsic:"assetsBridge.teleport"},{name:"BSC",logo:io.a,wssUrl:"",symbol:"BSC",decimals:8,tokens:So.tokens,extrinsic:"assetsBridge.teleport"},{name:"Kusama",logo:uo.a,wssUrl:"wss://kusama-rpc.dwellir.com",symbol:"KSM",decimals:12,tokens:[{name:"Kusama",decimals:12,assetId:6,symbol:"KSM",icon:uo.a,fee:.01,limitBalance:4e-5}],extrinsic:"assetsBridge.teleport"},{name:"Polkadot",logo:so.a,wssUrl:"wss://rpc.polkadot.io",symbol:"DOT",decimals:10,tokens:[{name:"Polkadot",decimals:10,symbol:"DOT",assetId:5,icon:so.a,fee:.1,limitBalance:1}],extrinsic:"assetsBridge.teleport"}]},{name:"MiniX",logo:no.a,wssUrl:"wss://minichain-mainnet.coming.chat",symbol:"MINI",metaMaskId:go.SHERPAX,decimals:8,tokens:[{name:"MINI",symbol:"MINI",decimals:8,icon:oo.a}],targetChains:[{name:"SherpaX",logo:eo.a,wssUrl:"wss://mainnet.sherpax.io",symbol:"KSX",decimals:18,tokens:[{assetId:0,symbol:"MINI",name:"SherpaX",decimals:8,icon:oo.a}],extrinsic:"balances.transfer"}]},{name:"BSC",logo:io.a,metaMaskId:56,wssUrl:"",symbol:"KSX",decimals:18,tokens:Co.tokens,targetChains:[{name:"SherpaX",logo:eo.a,wssUrl:"",symbol:"KSX",decimals:18,tokens:Co.tokens,extrinsic:"balances.transfer"}]},{name:"Kusama",logo:uo.a,wssUrl:"wss://kusama-rpc.dwellir.com",symbol:"KSM",metaMaskId:go.SHERPAX,decimals:12,tokens:[{name:"Kusama",symbol:"KSM",decimals:12,icon:uo.a}],targetChains:[{name:"SherpaX",logo:eo.a,wssUrl:"wss://mainnet.sherpax.io",symbol:"KSX",decimals:18,tokens:[{assetId:0,name:"SherpaX",symbol:"KSM",decimals:12,icon:uo.a}],extrinsic:"balances.transfer"}]},{name:"Polkadot",logo:so.a,wssUrl:"wss://rpc.polkadot.io",symbol:"DOT",metaMaskId:go.SHERPAX,decimals:10,tokens:[{name:"Polkadot",decimals:10,symbol:"DOT",icon:so.a}],targetChains:[{name:"SherpaX",logo:eo.a,wssUrl:"wss://mainnet.sherpax.io",symbol:"KSX",decimals:18,tokens:[{assetId:0,name:"Polkadot",symbol:"DOT",decimals:10,icon:so.a}],extrinsic:"balances.transfer"}]},{name:"ChainX",logo:po.a,wssUrl:"wss://mainnet.chainx.org/ws",symbol:"PCX",metaMaskId:go.SHERPAX,decimals:8,tokens:[{assetId:0,name:"ChainX",decimals:8,symbol:"PCX",logoURI:po.a},{assetId:1,name:"ChainX",isXAssets:!0,decimals:8,symbol:"XBTC",logoURI:bo.a}],targetChains:[{name:"SherpaX",logo:eo.a,wssUrl:"wss://mainnet.sherpax.io",symbol:"KSX",decimals:18,tokens:[{assetId:0,name:"ChainX",decimals:8,symbol:"PCX",logoURI:po.a},{assetId:1,isXAssets:!0,name:"ChainX",decimals:8,symbol:"XBTC",logoURI:bo.a}],extrinsic:"balances.transfer"}]}];var To=r.a.memo((function(e){let{children:t}=e;const{chainId:n}=Object(a.d)(),[i,l]=Object(o.useState)(!1),[s,c]=Object(o.useState)({}),[d,u]=Object(o.useState)({}),m=window.localStorage.getItem("chain_node"),p=window.localStorage.getItem("chain_node_to");return Object(o.useEffect)(()=>{localStorage.removeItem("chain_node_to")},[]),Object(o.useEffect)(()=>{if(m&&!mt.includes(n)){const e=Io.filter(e=>e.wssUrl===m)[0];if(c(e),p&&"wss://mainnet.sherpax.io"===m){const t=e.targetChains.filter(e=>e.name===p)[0];u(t)}else u(e.targetChains[0])}else if(mt.includes(n)){const e=Io.filter(e=>""===e.wssUrl&&e.metaMaskId===n)[0];c(e),u(e.targetChains[0])}else c(Io[0]),u(Io[0].targetChains[0]),window.localStorage.setItem("chain_node","wss://mainnet.sherpax.io")},[n,null===d||void 0===d?void 0:d.name]),r.a.createElement(Oo.Provider,{value:{fromChain:s,setFromChain:c,toChain:d,setToChain:u,chainList:Io,defaultChainNode:"wss://mainnet.sherpax.io",localChainNode:m,sherpax_toOtherNode:i,setSherpax_toOtherNode:l,isSherpaxNode:"wss://mainnet.sherpax.io"===m}},t)}));function jo(){return Object(o.useContext)(Oo)}const No=r.a.createContext({});let Ro;var Bo=r.a.memo((function(e){let{children:t}=e;const{localChainNode:n,defaultChainNode:a}=jo(),[i,l]=Object(o.useState)({hasInjectedAccounts:!1,isApiReady:!1}),[s,c]=Object(o.useState)(!1),[d,u]=Object(o.useState)(!1),[m,p]=Object(o.useState)(null),f=Object(o.useMemo)(()=>({...i,api:Ro,apiError:m,isApiConnected:s,isApiInitialized:d}),[m,s,d,i]);return Object(o.useEffect)(()=>{const e=new $a.a(n||a);Ro=new Ga.a({provider:e}),Ro.on("connected",()=>{console.log("conntect wss",n),c(!0)}),Ro.on("disconnected",()=>c(!1)),Ro.on("error",e=>p(e.message)),Ro.on("ready",()=>{l({...i,isApiReady:!0})}),u(!0)},[n,a]),f.isApiInitialized?r.a.createElement(No.Provider,{value:f},t):null}));function Uo(){return Object(o.useContext)(No)}var Po=n(407),Fo=n(1229);var Mo=n(411),Do=n(203),Lo=n(1224);(new Lo.a).setSS58Format(44);var zo=n(1231);const Xo=new Lo.a;function Wo(e){return e="evm:".concat(e.slice(2))}Xo.setSS58Format(44);const Ho=()=>window.web3&&window.web3.currentProvider&&(window.web3.currentProvider.isComingWallet||window.web3.currentProvider.isTrust),qo=Object(o.createContext)({}),Vo=e=>{let{children:t}=e;const n=new Lo.a,{api:a,isApiReady:i}=Uo(),{isSherpaxNode:l}=jo(),[s,c]=Object(o.useState)([]),[d,u]=Object(o.useState)(!1),[m,p]=Object(o.useState)(JSON.parse(localStorage.getItem("polkadot_current_account")||"{}")),[f,b]=Object(o.useState)(JSON.parse(localStorage.getItem("AccountTxList")||"[]"));Object(o.useEffect)(()=>{setTimeout(()=>{(async()=>{0!==(await Object(Fo.b)("soswap")).length&&u(!0)})()},0)},[]);const g=Object(o.useCallback)(async e=>{var t;if(i&&l&&e)return await(null===(t=a.query.assetsBridge)||void 0===t?void 0:t.evmAccounts(e))},[i,l,a.query.assetsBridge]);return Object(o.useEffect)(()=>{i&&l&&(localStorage.removeItem("AccountPendingList"),g(null===m||void 0===m?void 0:m.address).then(e=>{e&&e.toJSON()?(p({...m,isBridgeConnect:!0,bindEvmAddress:e.toJSON().toString(),hasTxPending:!1}),localStorage.setItem("polkadot_current_account",JSON.stringify({...m,isBridgeConnect:!0,bindEvmAddress:e.toJSON().toString(),hasTxPending:!1}))):(null===m||void 0===m?void 0:m.address)&&(p({...m,isBridgeConnect:!1,hasTxPending:!1}),localStorage.setItem("polkadot_current_account",JSON.stringify({...m,isBridgeConnect:!1,hasTxPending:!1})))}))},[i,l,null===m||void 0===m?void 0:m.address,null===m||void 0===m?void 0:m.isBridgeConnect]),Object(o.useEffect)(()=>{const e=JSON.parse(localStorage.getItem("polkadot_current_account")||"{}");if(d&&i){Object(Fo.a)(t=>{const n=t.map((t,n)=>{const a=(o=t.address)?Object(Do.a)(Object(Mo.a)(o)):o;var o;const r=function(e){return e?Xo.encodeAddress(Object(zo.a)(e)):e}(a),i=Wo(a);return{name:t.meta.name,address:r,publicKey:a,signData:i,isBridgeConnect:!1,isCurrentAccount:(null===e||void 0===e?void 0:e.address)?(null===e||void 0===e?void 0:e.address)===r:0===n,hasTxPending:!1}});"{}"===JSON.stringify(m)&&(p({...n[0],isCurrentAccount:!0}),localStorage.setItem("polkadot_current_account",JSON.stringify(n[0]))),c(n)})}},[d,i]),Object(o.useEffect)(()=>{var e;const t=(null===(e=JSON.parse(localStorage.getItem("polkadot_current_account")))||void 0===e?void 0:e.address)||"";if(Ho()){const e=JSON.parse(window.web3.comingUserInfo).address,a=JSON.parse(window.web3.comingUserInfo).name,o=n.decodeAddress(e),r=n.encodeAddress(o,44),i=Object(Do.a)(o),l={name:a,address:r,publicKey:i,signData:Wo(i),isBridgeConnect:!1,isCurrentAccount:t===r,hasTxPending:!1};c([l]),p(l)}},[localStorage.getItem("polkadot_current_account"),Ho()]),r.a.createElement(qo.Provider,{value:{accountList:s,isExtensionInjected:d,currentAccount:m,setAccountList:c,setCurrentAccount:p,polkaAccountTxHistory:f,setPolkaAccountTxHistory:b}},t)},Ko=r.a.createContext({});var Yo=r.a.memo((function(e){let{children:t}=e;const[n,a]=Object(o.useState)(""),[i,l]=Object(o.useState)(!1),[s,c]=Object(o.useState)(!1),[d,u]=Object(o.useState)(""),[m,p]=Object(o.useState)("");return r.a.createElement(Ko.Provider,{value:{messageContent:n,setMessageContent:a,txResult:i,setTxResult:l,isShowPop:s,setIsShowPop:c,showFn:(e,t,n,o)=>{u(e),p(t),l(n),a(o),c(!0)},type:d,hash:m,setType:u,setHash:p}},t)}));const _o=e=>{let{statusData:t,status:n,summary:a,currentAccount:o,setCurrentAccount:r,account:i,pathname:l,txResult:s,txResultContent:c,setIsShowPop:d,showFn:u}=e;const m=new Date,p={hash:t.txHash.toJSON(),summary:a,from:o.address,receipt:i,addedTime:m.toLocaleTimeString(),confirmedTime:m.toLocaleTimeString(),pending:!0,result:!1,type:l,address:null===o||void 0===o?void 0:o.address},f={[t.txHash.toJSON()]:p};if("pending"===n)localStorage.setItem("AccountPendingList",JSON.stringify({...JSON.parse(localStorage.getItem("AccountPendingList")),...f}));else{p.pending=!1,p.result=!t.events.some(e=>"ExtrinsicFailed"===e.event.method),p.confirmedTime=m.toLocaleTimeString();const e={[t.txHash.toJSON()]:p};((e,t)=>{var n;const a=JSON.parse(localStorage.getItem("AccountPendingList")||"{}");delete a[e],d(!1),localStorage.setItem("AccountPendingList",JSON.stringify(a)),localStorage.setItem("AccountTxList",JSON.stringify({...JSON.parse(localStorage.getItem("AccountTxList")),...t})),u(null===(n=t[e])||void 0===n?void 0:n.type,e,s,c),"{}"===JSON.stringify(a)&&(localStorage.removeItem("AccountPendingList"),r({...o,hasTxPending:!1}))})(t.txHash.toJSON(),e)}};var Jo=n(1207),Qo=n(313),$o=n.n(Qo);var Go=e=>{let{iconSrc:t,altName:n,width:a,height:o,className:i,onClick:l}=e;return r.a.createElement("img",{onClick:l,className:i,src:t,alt:n,width:a,height:o})};const Zo=Object(ue.default)(bn.Button)`
  padding: ${e=>{let{padding:t}=e;return t||"16px"}};
  width: ${e=>{let{width:t}=e;return t||"100%"}};
  font-weight: 500;
  text-align: center;
  border-radius: 12px;
  border-radius: ${e=>{let{borderRadius:t}=e;return t&&t}};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
  > div {
    line-height: 24px;
  }
`,er=Object(ue.default)(Zo)`
  background-color: #48e8cc;
  color: white;
  border-radius: ${e=>{let{borderRadius:t}=e;return t||"24px"}};
  box-shadow: 0 2px 4px 0 rgba(78, 91, 201, 0.12), inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-weight: 600;

  img {
    margin-right: 12px;
  }

  &.enable {
    img {
      width: 100%;
      height: 100%;
      margin-right: 0;
    }
    div {
      line-height: 20px;
    }
  }

  &:hover,
  &:active {
    color: white;
    background: #41d2b8;
    box-shadow: 0 2px 4px 0 rgba(78, 91, 201, 0.12), inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
  }
  &:disabled {
    color: white;
    cursor: auto;
    border: 1px solid rgba(77, 43, 178, 0.08);
    outline: none;
    opacity: ${e=>{let{altDisabledStyle:t}=e;return t?"0.7":"1"}};
    background: #d4d9f0;
    box-shadow: 0 2px 4px 0 rgba(78, 91, 201, 0.12), inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
  }
  > span {
    margin: 0;
    min-width: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`,tr=Object(ue.default)(Zo)`
  background: #e2fffa;
  color: #298a9a;
  font-size: 20px;
  font-weight: 600;
  border-radius: 24px;
  border: 1px solid rgba(72, 232, 204, 0.57);
  box-shadow: 0px 2px 4px 0px rgba(78, 91, 201, 0.12), inset 0px 0px 5px 0px rgba(255, 255, 255, 0.5);
  &:active,
  &:hover,
  &:focus {
    background: #b5dcdc;
    color: #298a9a !important;
    border-radius: 24px;
    border: 1px solid #ffffff;
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: ${e=>{let{theme:t}=e;return t.primary5}};
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`,nr=(Object(ue.default)(Zo)`
  background-color: ${e=>{let{theme:t}=e;return t.bg3}};
  color: ${e=>{let{theme:t}=e;return t.text2}};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t,disabled:n}=e;return!n&&Object(aa.a)(.05,t.bg2)}};
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&Object(aa.a)(.05,t.bg2)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&Object(aa.a)(.05,t.bg2)}};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t,disabled:n}=e;return!n&&Object(aa.a)(.1,t.bg2)}};
    background-color: ${e=>{let{theme:t,disabled:n}=e;return!n&&Object(aa.a)(.1,t.bg2)}};
  }
`,Object(ue.default)(Zo)`
  background-color: rgba(247, 67, 84, 0.15);
  color: ${e=>{let{theme:t}=e;return t.primaryText1}};
  font-size: 16px;
  border-radius: 8px;
  padding: ${e=>{let{padding:t}=e;return t||"10px"}};

  &:focus {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return t.primary4}};
    background-color: ${e=>{let{theme:t}=e;return t.primary4}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.primary4}};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return t.primary4}};
    background-color: ${e=>{let{theme:t}=e;return t.primary4}};
  }
  &:disabled {
    background-color: ${e=>{let{theme:t}=e;return t.primary5}};
    opacity: 50%;
    cursor: auto;
  }

  &.my-liquidity {
    background: #b5adff;
    border-radius: 16px;
    color: white;

    &:focus,
    &:hover,
    &:active {
      opacity: 0.7;
      box-shadow: none;
    }
  }
`),ar=Object(ue.default)(Zo)`
  background: #48e8cc;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 20px;
  border-radius: 20px;
`,or=(Object(ue.default)(Zo)`
  background-color: ${e=>{let{theme:t}=e;return t.primary1}};
  color: white;

  &:focus {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return Object(aa.a)(.05,t.primary1)}};
    background-color: ${e=>{let{theme:t}=e;return Object(aa.a)(.05,t.primary1)}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return Object(aa.a)(.05,t.primary1)}};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return Object(aa.a)(.1,t.primary1)}};
    background-color: ${e=>{let{theme:t}=e;return Object(aa.a)(.1,t.primary1)}};
  }
  &:disabled {
    background-color: ${e=>{let{theme:t}=e;return t.primary1}};
    opacity: 50%;
    cursor: auto;
  }
`,Object(ue.default)(Zo)`
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);
  border-radius: 24px;
  color: #281071;

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`),rr=(Object(ue.default)(Zo)`
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.primary1}};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    background-color: ${e=>{let{theme:t}=e;return t.advancedBG}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.advancedBG}};
  }
  &:active {
    background-color: ${e=>{let{theme:t}=e;return t.advancedBG}};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`,Object(ue.default)(Zo)`
  border: 1px solid #edeef2;
  background-color: ${e=>{let{theme:t}=e;return t.bg1}};
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${Object(aa.a)(.05,"#edeef2")};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${Object(aa.a)(.1,"#edeef2")};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${Object(aa.a)(.1,"#edeef2")};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`,Object(ue.default)(Zo)`
  padding: 6px;
  background-color: #f0e2fe;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #6d4ec9;
  line-height: 16px;
`),ir=Object(ue.default)(Zo)`
  background: #e2fffa;
  box-shadow: 0 2px 4px 0 rgba(57, 213, 186, 0.12), inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
  border-radius: ${e=>{let{borderRadius:t}=e;return t||"16px"}};
  border: 1px solid rgba(72, 232, 204, 0.57);
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #38dcbf;
  width: ${e=>{let{width:t}=e;return t&&t}};

  &:hover,
  &:active {
    background: #c7e8e6;
    border-radius: 16px;
  }
`,lr=Object(ue.default)(Zo)`
  background-color: ${e=>{let{theme:t}=e;return Object(aa.b)(.5,t.green1)}};
  color: ${e=>{let{theme:t}=e;return t.green1}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.green1}};
  border-radius: 24px;

  &:disabled {
    cursor: auto;
    background: #d4d9f0;
    box-shadow: 0 2px 4px 0 rgba(78, 91, 201, 0.12), inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(77, 43, 178, 0.08);
  }
`,sr=Object(ue.default)(ce.b)`
  color: #38dcbf;
  background: #e2fffa;
  box-shadow: 0 2px 4px 0 rgba(57, 213, 186, 0.12), inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  border: 1px solid rgba(72, 232, 204, 0.57);
  line-height: 20px;
  font-size: 20px;
  font-weight: 500;
  padding: 22px;
  width: 100%;
  text-align: center;
  &:hover,
  &:focus {
    color: #38dcbf;
  }
`,cr=Object(ue.default)(Zo)`
  background-color: ${e=>{let{theme:t}=e;return"#E93E5E"}};
  border: 1px solid ${e=>{let{theme:t}=e;return"#E93E5E"}};
  border-radius: 24px;

  &:focus {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return Object(aa.a)(.05,"#E93E5E")}};
    background-color: ${e=>{let{theme:t}=e;return Object(aa.a)(.05,"#E93E5E")}};
  }
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return Object(aa.a)(.05,"#E93E5E")}};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${e=>{let{theme:t}=e;return Object(aa.a)(.1,"#E93E5E")}};
    background-color: ${e=>{let{theme:t}=e;return Object(aa.a)(.1,"#E93E5E")}};
  }
  &:disabled {
    cursor: auto;
    background: #d4d9f0;
    box-shadow: 0 2px 4px 0 rgba(78, 91, 201, 0.12), inset 0 0 5px 0 rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(77, 43, 178, 0.08);
  }
`,dr=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f9;
  border-radius: 12px;
  padding: 11px 12px;
`;function ur(e){let{confirmed:t,altDisabledStyle:n,...a}=e;return t?r.a.createElement(lr,a):r.a.createElement(er,Object.assign({},a,{altDisabledStyle:n}))}function mr(e){let{error:t,...n}=e;return t?r.a.createElement(cr,n):r.a.createElement(er,n)}function pr(e){let{disabled:t=!1,children:n,...a}=e;return r.a.createElement(or,Object.assign({},a,{disabled:t}),r.a.createElement(yn,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n),r.a.createElement(dr,null,r.a.createElement(Go,{iconSrc:$o.a,width:16,height:16}))))}var fr=n(27),br=n.n(fr);var gr=e=>{let{address:t,beforeOnClick:n,beforeTxInit:i,submitTransactionFunction:l,extrinsics:s,children:c,params:d,gasFee:u,handleModalOpen:m,summary:p,disabled:f,customBtn:b,...g}=e;const{pathname:y}=Object(de.g)(),{currentAccount:h,setCurrentAccount:v}=Object(o.useContext)(qo);let[x,E]=s.split(".");const{api:w,isApiReady:A}=Uo(),{account:k}=Object(a.d)(),C=Object(a.d)(),{setIsShowPop:S,showFn:O}=Object(o.useContext)(Ko),{library:I}=C,[T,j]=Object(o.useState)(18),[N,R]=Object(o.useState)("sherpax");Object(o.useEffect)(()=>{const e=window.localStorage.getItem("chain_node"),t=Io.filter(t=>t.wssUrl===e)[0],n=null===t||void 0===t?void 0:t.decimals,a=null===t||void 0===t?void 0:t.name.toLowerCase();R(a),j(n)},[window.localStorage.getItem("chain_node")]);const B=e=>{"claimAccount"===e?(v({...h,isBridgeConnect:!0}),localStorage.setItem("polkadot_current_account",JSON.stringify({...h,isBridgeConnect:!0}))):"dissolve"===e&&(v({...h,isBridgeConnect:!1}),localStorage.setItem("polkadot_current_account",JSON.stringify({...h,isBridgeConnect:!1})))},U=e=>{O("","",!1,null===e||void 0===e?void 0:e.message),n(!1)},P=Object(o.useRef)(!1),F=async()=>{const e=await Object(Fo.c)(null===h||void 0===h?void 0:h.address);try{S(!1),w.setSigner(e.signer),w.tx[x][E](...d).signAndSend(null===h||void 0===h?void 0:h.address,{signer:e.signer},e=>{v({...h,hasTxPending:!0}),(e=>{const t={statusData:e,summary:p,currentAccount:h,setCurrentAccount:v,account:k,pathname:y,setIsShowPop:S};_o({...t,status:"pending"}),P.current||(P.current=!0,m&&m(!1)),e.isFinalized&&(n(!1),e.events.some(e=>"ExtrinsicFailed"===e.event.method)?_o({...t,status:"finish",txResult:!1,txResultContent:p+" fail",showFn:O}):e.events.some(e=>"ExtrinsicSuccess"===e.event.method)&&(B(E),_o({...t,status:"finish",txResult:!0,txResultContent:p+" success",showFn:O})))})(e)}).catch(e=>{U(e)})}catch(t){U(t)}},M=async()=>{if(P.current=!1,n(!0),i){const e=i();d=null===e||void 0===e?void 0:e.params,x=(null===e||void 0===e?void 0:e.section)||x,E=(null===e||void 0===e?void 0:e.method)||E}if("claimAccount"===E){const e=await(null===I||void 0===I?void 0:I.getSigner().signMessage(null===h||void 0===h?void 0:h.signData));d=d.concat(e&&e)}try{Ho()?(()=>{const e=(d||[]).map(e=>String(e));let n=0;w.tx[x][E](...d).paymentInfo(t).then(t=>{const{partialFee:a}=t.toJSON();n=+new br.a(a).dividedBy(Math.pow(10,T)).toFixed(4);const o=w.tx[x][E](...d).toHex();I.getSigner("0x0000000000000000000000000000000000000000").sendUncheckedTransaction({gasPrice:0,gasLimit:6e4,nonce:1e3,value:0,data:Po.ethers.utils.hexlify(Po.ethers.utils.toUtf8Bytes(JSON.stringify({chain:""+N,method:`${x}.${E}`,gasFee:String(n),params:e,signature:o})))}).then(e=>{O("","",!0,p+" success"),B(E),m&&m(!1)}).catch(e=>{U(e)})})})():F()}catch(e){U(e)}};return r.a.createElement(r.a.Fragment,null,b?r.a.createElement("div",Object.assign({onClick:M},g),c):r.a.createElement(mr,Object.assign({disabled:f,onClick:M},g),c))},yr=n(145);var hr=e=>{let{linkParams:t,cardType:n,current:a,ENSName:i}=e;const{isSherpaxNode:l}=jo(),{currentAccount:s}=Object(o.useContext)(qo),{chainId:c,account:d,connector:u}=be();return r.a.createElement(r.a.Fragment,null,(null===s||void 0===s?void 0:s.isBridgeConnect)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ra,null,a&&r.a.createElement(Fa,{style:{justifyContent:"left",position:"relative",left:"28px"}},(null===a||void 0===a?void 0:a.address)&&r.a.createElement(Ka,{toCopy:null===a||void 0===a?void 0:a.address},r.a.createElement("span",{style:{marginLeft:"4px"}},"Copy Address")),(null===a||void 0===a?void 0:a.address)&&r.a.createElement(Ma,{hasENS:t.hasENS,isENS:t.isENS,href:t.href},r.a.createElement(Ya.a,{size:16}),r.a.createElement("span",{style:{marginLeft:"4px"}},"View on scan")))),r.a.createElement(Ra,{id:"web3-account-identifier-row"},l&&(null===s||void 0===s?void 0:s.isBridgeConnect)&&r.a.createElement(Fa,{style:{justifyContent:"start",padding:"4px 0px 0px 8px"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:Ja.a,alt:""}),r.a.createElement("span",{style:{margin:"0px 4px"}},"polka"===n?r.a.createElement(ui,{connector:u,size:14}):r.a.createElement(yr.a,{className:"imgIcon",value:s.address,size:16,theme:"polkadot"})),r.a.createElement("p",null,Qa("polka"===n?s.bindEvmAddress:null===s||void 0===s?void 0:s.address))),r.a.createElement("div",null,r.a.createElement(za,{style:{fontSize:".825rem",fontWeight:400,backgroundColor:"#E2FFFA",color:"#38DCBF"}},r.a.createElement(gr,{address:null===s||void 0===s?void 0:s.address,params:[],extrinsics:"assetsBridge.dissolve",beforeOnClick:()=>{},key:"checkout-confirm",summary:Qa(null===s||void 0===s?void 0:s.address)+" unbind",customBtn:!0},"unbind"))),r.a.createElement("div",{className:"dashBorder"})))),!(null===s||void 0===s?void 0:s.isBridgeConnect)&&"metamask"===n&&r.a.createElement(Ra,null,r.a.createElement(Fa,null,d&&r.a.createElement(Ka,{toCopy:d},r.a.createElement("span",{style:{marginLeft:"4px"}},"Copy Address")),c&&d&&r.a.createElement(Ma,{hasENS:!!i,isENS:!!i,href:c&&gt(c,i,"address")},r.a.createElement(Ya.a,{size:16}),r.a.createElement("span",{style:{marginLeft:"4px"}},"View on scan")))),!(null===s||void 0===s?void 0:s.isBridgeConnect)&&"polka"===n&&r.a.createElement(Ra,null,r.a.createElement(Fa,null,(null===s||void 0===s?void 0:s.address)&&r.a.createElement(Ka,{toCopy:null===s||void 0===s?void 0:s.address},r.a.createElement("span",{style:{marginLeft:"4px"}},"Copy Address")),(null===s||void 0===s?void 0:s.address)&&r.a.createElement(Ma,{hasENS:t.hasENS,isENS:t.isENS,href:t.href},r.a.createElement(Ya.a,{size:16}),r.a.createElement("span",{style:{marginLeft:"4px"}},"View on scan")))))};const vr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
    width: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    align-items: flex-end;
  `}};
`,xr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
`,Er=ue.default.div`
  width: fit-content;
  font-weight: 400;
  margin-left: 8px;
  font-size: 13px;
  padding: 4px 6px;
  background: #f0e2fe;
  border-radius: 8px;
  color: #6d4ec9;
  :hover {
    background: #ccc9e9;
    cursor: pointer;
    text-decoration: underline;
  }
`;Object(ue.default)(Er)`
  color: ${e=>{let{theme:t}=e;return t.primary1}};
`;function wr(e){return r.a.createElement(xr,null,e.map((e,t)=>r.a.createElement(Ta,{key:t,hash:e})))}function Ar(e){let{toggleWalletModal:t,pendingTransactions:n,confirmedTransactions:a,ENSName:i,openOptions:l}=e;const{chainId:s,account:c,connector:u}=be(),m=Object(d.b)();const p=Object(o.useCallback)(()=>{s&&m($t({chainId:s}))},[m,s]),f={hasENS:!!i,isENS:!!i,href:s&&gt(s,i,"address")},b={address:c};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ja,null,r.a.createElement(Ba,null,r.a.createElement(Ua,null,r.a.createElement(Na,null,r.a.createElement(Ra,null,function(){const{ethereum:e}=window,t=!(!e||!e.isMetaMask),n=Object.keys(Y).filter(e=>Y[e].connector===u&&(u!==N||t===("METAMASK"===e))).map(e=>Y[e].name)[0];return r.a.createElement(Da,null,"Connected with ",n)}(),r.a.createElement("div",null,u!==N&&u!==P&&r.a.createElement(Er,{style:{fontSize:".825rem",fontWeight:400,marginRight:"8px"},onClick:()=>{u.close()}},"Disconnect"),r.a.createElement(Er,{style:{fontSize:".825rem",fontWeight:400},onClick:()=>{l()}},"Change"))),r.a.createElement(Ra,{id:"web3-account-identifier-row"},r.a.createElement(Fa,null,u===N?r.a.createElement(vr,{size:16},r.a.createElement(dn,{size:28})):u===B?r.a.createElement(vr,{size:16},r.a.createElement("img",{src:xe.a,alt:"fortmatic logo"})):null,r.a.createElement("p",null,i||c&&yt(c)))),r.a.createElement(hr,{cardType:"metamask",ENSName:i,linkParams:f,current:b}))))),n.length||a.length?r.a.createElement(Pa,null,r.a.createElement(hn,{mb:"1rem",style:{justifyContent:"space-between"}},r.a.createElement(Aa.body,{color:"#222222",fontSize:"14px"},"Recent Transactions"),r.a.createElement(la,{onClick:p,props:"color:#876CD7;font-size:13px;"},"(clear all)")),wr(n),wr(a)):r.a.createElement(Pa,null,r.a.createElement(Aa.body,{color:"#222222",fontSize:"14px"},"Your transactions will appear here...")))}const kr=ue.default.button`
  padding: 1rem;
  outline: none;
  width: 100% !important;
  background: ${e=>{let{active:t}=e;return t?"#E4E8F2":"#FFFFFF"}};
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border-radius: 20px;
  border: 1px solid #e8eaf1;
`,Cr=Object(ue.default)(kr)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
`,Sr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  justify-content: center;
  height: 100%;
`,Or=Object(ue.default)(Cr)`
  margin-top: 0;
  &:hover {
    border: 1px solid #6d4ec9;
  }
`,Ir=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  justify-content: center;
  align-items: center;
  &:first-child {
    height: 12px;
    width: 12px;
    margin-right: 8px;
    background-color: #48e8cc;
    border-radius: 50%;
  }
`,Tr=ue.default.div`
  color: ${e=>{let{theme:t}=e;return t.green1}};
  display: flex;
  justify-content: center;
  align-items: center;
`,jr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  color: #3b199f;
  padding: 4px 0;
  font-size: 18px;
  font-weight: 500;
`,Nr=ue.default.div`
  color: ${e=>{let{theme:t}=e;return t.text1}};
  margin-top: 10px;
  font-size: 12px;
`,Rr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  & > img,
  span {
    height: ${e=>{let{size:t}=e;return t?t+"px":"24px"}};
    width: ${e=>{let{size:t}=e;return t?t+"px":"24px"}};
  }
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    align-items: flex-end;
  `}};
`;function Br(e){let{link:t=null,clickable:n=!0,size:a,onClick:o=null,color:i,header:l,subheader:s=null,icon:c,active:d=!1,id:u}=e;const m=r.a.createElement(Or,{id:u,onClick:o,clickable:n&&!d,active:d},r.a.createElement(Sr,null,r.a.createElement(jr,{color:i},d?r.a.createElement(Tr,null,r.a.createElement(Ir,null,r.a.createElement("div",null))):"",l),s&&r.a.createElement(Nr,null,s)),r.a.createElement(Rr,{size:a},r.a.createElement("img",{src:c,alt:"Icon"})));return t?r.a.createElement(da,{href:t},m):m}const Ur=ue.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Pr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  width: 100%;
  & > * {
    width: 100%;
  }
`,Fr=Object(ue.default)(pn)`
  margin-right: 1rem;
`,Mr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}};
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border: 1px solid #e8eaf1;
  border-radius: 20px;
  margin-bottom: 20px;
  color: #aba5bd;
  :hover {
    border: 1px solid #e93e5e;
  }
  & > * {
    padding: 1rem;
  }
`,Dr=Object(ue.default)(Ur)`
  justify-content: flex-start;
  > span {
    font-size: 18px;
    font-weight: 500;
    color: #e93e5e;
    line-height: 21px;
  }
`,Lr=ue.default.div`
  border-radius: 8px;
  font-size: 12px;
  color: #6d4ec9;
  background-color: #f0e2fe;
  margin-left: 1rem;
  padding: 5px 6px;
  font-weight: 500;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #cbc9e9;
  }
`,zr=Object(ue.default)(Ur)`
  align-items: center;
  justify-content: center;
`;function Xr(e){var t,a;let{connector:o,error:i=!1,setPendingError:l,tryActivation:s}=e;const c=null===(t=window)||void 0===t||null===(a=t.ethereum)||void 0===a?void 0:a.isMetaMask;return r.a.createElement(Pr,null,r.a.createElement(Mr,{error:i},r.a.createElement(zr,null,i?r.a.createElement(Dr,null,r.a.createElement("span",null,"Error connecting."),r.a.createElement(Lr,{onClick:()=>{l(!1),o&&s(o)}},"Try Again")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Fr,null),"Initializing..."))),Object.keys(Y).map(e=>{const t=Y[e];if(t.connector===o){if(t.connector===N){if(c&&"MetaMask"!==t.name)return null;if(!c&&"MetaMask"===t.name)return null}return r.a.createElement(Br,{id:"connect-"+e,key:e,clickable:!1,color:t.color,header:t.name,subheader:t.description,icon:n(438)("./"+t.iconName)})}return null}))}var Wr=n(492),Hr=n.n(Wr),qr=(n(884),n(702));const Vr=Object(ue.default)(qr.a)`
  .ant-modal-content {
    border-radius: 24px;
    //overflow: hidden;
    .ant-modal-header {
      padding: 24px;
      border-radius: 24px 24px 0 0;
      ${e=>{let{customTitle:t}=e;return t}};
      .ant-modal-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .ant-modal-body {
      max-height: 90vh;
      //min-height: 80vh;
      overflow: ${e=>{let{overflow:t}=e;return t||"hidden"}};
      min-height: ${e=>{let{minHeight:t}=e;return t&&t}};
      height: 100%;
      display: flex;
      background: #f2f6fa;
      border-radius: 0 0 24px 24px;
      padding: 16px 24px;
      font-size: 16px;
    }
  }
`;var Kr=e=>{let{title:t,onCancel:n,children:a,minHeight:o,titlePadding:i,overflow:l,width:s=432,...c}=e;return r.a.createElement(Vr,Object.assign({title:r.a.createElement(r.a.Fragment,null,t,r.a.createElement(ia,{onClick:n})),centered:!0,closable:!1,closeIcon:null,width:s,minHeight:o,overflow:l,customTitle:i},c),a)};const Yr=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}}
  margin: 0;
  padding: 0;
  width: 100%;
`,_r=ue.default.div`
  background: #f0e2fe;
  border-radius: 8px;
  > span {
    padding: 5px 6px;
    font-size: 13px;
    font-weight: 500;
    color: #6d4ec9;
    line-height: 16px;
  }
`,Jr=ue.default.div`
  background-color: ${e=>{let{theme:t}=e;return t.bg2}};
  padding: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`padding: 1rem`}};
`,Qr=ue.default.div`
  position: relative;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`,$r=ue.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > span {
    margin: 0;
    min-width: 0;
    padding: 0 36px 26px 36px;
    max-width: 384px;
    font-weight: 500;
    font-size: 16px;
    color: #988eb7;
    line-height: 20px;
    text-align: center;
  }
`,Gr=ue.default.div`
  display: grid;
  grid-gap: 10px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    grid-gap: 10px;
  `}};
`,Zr=(ue.default.div`
  font-size: 16px;
  font-weight: 600;
  color: #281071;
  line-height: 20px;
  :hover {
    cursor: pointer;
  }
`,"options"),ei="account",ti="pending";function ni(e){let{pendingTransactions:t,confirmedTransactions:l,ENSName:s}=e;const{active:u,account:m,connector:p,activate:b,error:g}=Object(a.d)(),[y,h]=Object(o.useState)(ei),[v,x]=Object(o.useState)(),[E,w]=Object(o.useState)(),A=Object(d.c)(e=>e.application.walletModalOpen),k=Be(),C=fn(m);Object(o.useEffect)(()=>{m&&!C&&A&&k()},[m,C,k,A]),Object(o.useEffect)(()=>{A&&(w(!1),h(ei))},[A]);const S=fn(u),O=fn(p);Object(o.useEffect)(()=>{A&&(u&&!S||p&&p!==O&&!g)&&h(ei)},[h,u,g,p,A,S,O]);const I=async e=>{var t,n;let o="";Object.keys(Y).map(t=>e!==Y[t].connector||(o=Y[t].name)),c.a.event({category:"Wallet",action:"Change Wallet",label:o}),x(e),h(ti),e instanceof f.a&&(null===(t=e.walletConnectProvider)||void 0===t||null===(n=t.wc)||void 0===n?void 0:n.uri)&&(e.walletConnectProvider=void 0),e&&b(e,void 0,!0).catch(t=>{t instanceof a.a?b(e):w(!0)})};Object(o.useEffect)(()=>{B.on("OVERLAY_READY",()=>{k()})},[k]);const T=async()=>{await ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x5e2",chainName:"SHERPAX",nativeCurrency:"KSX",rpcUrls:["https://mainnet.sherpax.io/rpc"],blockExplorerUrls:["https://sherpaxevm-pre.sherpax.io/"]}]}).then(()=>{console.error("switch success")}).catch(e=>{console.error("transfer failed",e)})};return r.a.createElement(Kr,{className:"currency-search-dialog",title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},y===ei&&m?"Trading Account":"Connect wallet"),visible:A,onCancel:k,footer:null,bodyStyle:{padding:0}},r.a.createElement(Yr,null,g?r.a.createElement(Qr,null,r.a.createElement(Jr,null,g instanceof a.a?r.a.createElement($r,null,r.a.createElement("span",null,"Soswap requires you to connect to the SherpaX Mainnet."),r.a.createElement(er,{onClick:T,borderRadius:"24px",width:"fit-content",lineHeight:"20px",padding:"16px 28px"},"Switch Network")):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Error connecting."),r.a.createElement(_r,null,r.a.createElement("span",null,"Try Again"))))):m&&y===ei?r.a.createElement(Ar,{toggleWalletModal:k,pendingTransactions:t,confirmedTransactions:l,ENSName:s,openOptions:()=>h(Zr)}):r.a.createElement(Qr,null,r.a.createElement(Jr,null,y===ti?r.a.createElement(Xr,{connector:v,error:E,setPendingError:w,tryActivation:I}):r.a.createElement(Gr,null,function(){const e=window.ethereum&&window.ethereum.isMetaMask;return Object.keys(Y).map(t=>{const a=Y[t];if(i.isMobile)return a.connector===U||window.web3||window.ethereum||!a.mobile?null:r.a.createElement(Br,{onClick:()=>{a.connector!==p&&!a.href&&I(a.connector)},id:"connect-"+t,key:t,active:a.connector&&a.connector===p,color:a.color,link:a.href,header:a.name,subheader:null,icon:n(438)("./"+a.iconName)});if(a.connector===N){if(!window.web3&&!window.ethereum)return"MetaMask"===a.name?r.a.createElement(Br,{id:"connect-"+t,key:t,color:"#E8831D",header:"Install Metamask",subheader:null,link:"https://metamask.io/",icon:Hr.a}):null;if("MetaMask"===a.name&&!e)return null;if("Injected"===a.name&&e)return null}return!i.isMobile&&!a.mobileOnly&&r.a.createElement(Br,{id:"connect-"+t,onClick:()=>{a.connector===p?h(ei):!a.href&&I(a.connector)},key:t,active:a.connector===p,color:a.color,link:a.href,header:a.name,subheader:null,icon:n(438)("./"+a.iconName)})})}())))))}const ai=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}};
  align-items: center;
  justify-content: center;
  & > * {
    height: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
    width: ${e=>{let{size:t}=e;return t?t+"px":"32px"}};
  }
`,oi=ue.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  background-color: white;
`,ri=Object(ue.default)(oi)`
  border: 2px solid white;
  color: white;
  font-weight: 500;
  background-color: #e93e5e;
  :hover,
  :focus {
    background-color: #ff3541;
  }
`,ii=Object(ue.default)(oi)`
  background-color: #d7f0ea;
  color: #298a9a;
  border-radius: 16px;
  border: 2px solid white;
  padding: 6px 10px 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  :active,
  :hover,
  :focus {
    background: #b5dcdc;
    color: #298a9a !important;
  }
  >div{
    display: flex;
    align-items: center;
    padding: 2px 0;
    > img {
      width: 24px;
      margin-right: 6px;
    }
    >span{
      line-height: 16px;
    }
  }

`,li=Object(ue.default)(oi)`
  color: #298a9a;
  font-weight: 500;
  background-color: white;
  padding: 2px;
  > img {
    margin: 6px;
  }
  .item {
    padding: 12px 12px;
    background-color: #d7f0ea;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 16px;
    line-height: 16px;
    & > div {
      height: 16px !important;
      display: flex;
      align-items: center;
    }
    & > span {
      line-height: 16px;
      padding-right: 6px;
    }
  }
`,si=ue.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
  padding: 9px 10px 9px 0;
`,ci=Object(ue.default)(ge.a)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;function di(e,t){return t.addedTime-e.addedTime}function ui(e){let{connector:t,size:n}=e;return t===N?r.a.createElement(dn,{size:n}):t===R?r.a.createElement(ai,{size:16},r.a.createElement("img",{src:ke.a,alt:""})):t===P?r.a.createElement(ai,{size:16},r.a.createElement("img",{src:he.a,alt:""})):t===B?r.a.createElement(ai,{size:16},r.a.createElement("img",{src:xe.a,alt:""})):t===U?r.a.createElement(ai,{size:16},r.a.createElement("img",{src:we.a,alt:""})):null}function mi(){const{t:e}=Object(oe.b)(),{account:t,connector:n,error:i}=Object(a.d)(),{ENSName:l}=Jt(null!==t&&void 0!==t?t:void 0),s=tn(),c=!!Object(o.useMemo)(()=>Object.values(s).filter(an).sort(di),[s]).filter(e=>!e.receipt).map(e=>e.hash).length,d=Be();return t?r.a.createElement(li,{id:"web3-status-connected",onClick:d,pending:c},r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:rn.a,alt:""}),c?r.a.createElement("div",{className:"item",style:{backgroundColor:"#E93E5E",color:"white"}},r.a.createElement(pn,{stroke:"white"}),r.a.createElement("span",{style:{marginLeft:"8px"}},"Pending")):r.a.createElement("div",{className:"item"},r.a.createElement("span",null,l||yt(t)),!c&&n&&r.a.createElement(ui,{connector:n,size:14})))):i?r.a.createElement(ri,{onClick:d},r.a.createElement(ci,null),r.a.createElement(si,null,i instanceof a.a?"Wrong Network":"Error")):r.a.createElement(ii,{id:"connect-wallet",onClick:d,faded:!t},r.a.createElement("div",null,r.a.createElement("img",{src:rn.a,alt:""}),r.a.createElement("span",null,"Connect wallet")))}function pi(){const{active:e,account:t}=Object(a.d)(),n=Object(a.d)("NETWORK"),{ENSName:i}=Jt(null!==t&&void 0!==t?t:void 0),l=tn(),s=Object(o.useMemo)(()=>Object.values(l).filter(an).sort(di),[l]),c=s.filter(e=>!e.receipt).map(e=>e.hash),d=s.filter(e=>e.receipt).map(e=>e.hash);return n.active||e?r.a.createElement(r.a.Fragment,null,r.a.createElement(mi,null),r.a.createElement(ni,{ENSName:null!==i&&void 0!==i?i:void 0,pendingTransactions:c,confirmedTransactions:d})):null}const fi=ue.default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${e=>{let{width:t}=e;return t&&t}};
  margin: ${e=>{let{margin:t}=e;return t&&t}};
`,bi=Object(ue.default)(fi)`
  width: 100%;
  align-items: center;
`,gi=ue.default.div`
  display: grid;
  grid-auto-rows: auto;
  width: 100%;
  grid-row-gap: ${e=>{let{gap:t}=e;return("sm"===t?"8px":"md"===t&&"12px")||"lg"===t&&"24px"||t}};
  justify-items: ${e=>{let{justify:t}=e;return t&&t}};
`;var yi=fi,hi=n(658),vi=n.n(hi);const xi=ue.default.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  background: ${e=>{let{isSelected:t}=e;return t?"#E4E8F2":"#ffffff"}};
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${e=>{let{isSelected:t}=e;return t?"#FFFFFF":"#e8eaf1"}};
  cursor: ${e=>{let{isSelected:t}=e;return t?"":"pointer"}};
  :hover {
    border: 1px solid ${e=>{let{isSelected:t}=e;return t?"#FFFFFF":"#6d4ec9"}};
  }
  .box {
    display: flex;
    flex-direction: row;
    align-content: center;
    .details {
      flex-direction: column;
      margin-left: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .name {
        font-size: 16px;
        font-weight: 500;
        color: #3b199f;
      }
      .address {
        font-size: 14px;
        font-weight: 400;
        color: #aba5bd;
        line-height: 20px;
      }
    }
  }
  .circle {
    width: 12px;
    height: 12px;
    background: #48e8cc;
    border-radius: 50%;
  }
`,Ei=ue.default.div`
  width: 100%;
  max-height: 20rem;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 16px 24px;
  border-bottom: 24px solid white;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px;
    height: 179px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    width: 9px;
    height: 99px;
    background: #cfcfcf;
    border-radius: 3px;
  }
  &::webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
`;var wi=r.a.memo(e=>{let{isOpen:t,closeModal:n,title:a}=e;const{accountList:i,setAccountList:l,setCurrentAccount:s}=Object(o.useContext)(qo);return r.a.createElement(Kr,{className:"currency-search-dialog",title:r.a.createElement("img",{src:vi.a,alt:"",onClick:n}),visible:t,onCancel:n,footer:null,bodyStyle:{padding:0}},r.a.createElement(Ei,null,r.a.createElement(gi,{gap:"lg",style:{gridRowGap:"8px"}},null===i||void 0===i?void 0:i.map((e,t)=>r.a.createElement(xi,{onClick:()=>(e=>{null===i||void 0===i||i.map((t,n)=>{e===n?(t.isCurrentAccount=!0,s(t),localStorage.setItem("polkadot_current_account",JSON.stringify(t))):t.isCurrentAccount=!1}),l([...i]),n()})(t),key:t,isSelected:e.isCurrentAccount},r.a.createElement("div",{className:"box"},r.a.createElement(yr.a,{className:"imgIcon",value:e.address,size:48,theme:"polkadot"}),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"address"},Qa(e.address,6)))),e.isCurrentAccount&&r.a.createElement("div",{className:"circle"}))))))});const Ai=ue.default.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`,ki=Object(ue.default)(da)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none !important;
  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
  font-size: 13px;
  font-weight: 600;
  color: #876cd7;
  line-height: 16px;
`,Ci=ue.default.div`
  color: ${e=>{let{pending:t,success:n,theme:a}=e;return t?a.primary1:n?a.green1:a.red1}};
`;function Si(e){let{hash:t,status:n}=e;const a="pending"===n?JSON.parse(localStorage.getItem("AccountPendingList")):JSON.parse(localStorage.getItem("AccountTxList")),o=null===a||void 0===a?void 0:a[t],i=null===o||void 0===o?void 0:o.summary,l=null===o||void 0===o?void 0:o.pending,s=null===o||void 0===o?void 0:o.result,c=null===o||void 0===o?void 0:o.type,d=null===o||void 0===o?void 0:o.from;null===o||void 0===o||o.address;return r.a.createElement(ki,{href:((e,n)=>{if(e&&n&&i)return e.includes("asset")?"https://scan.sherpax.io/trade/"+t:i.includes("from MiniX")?"https://miniscan.coming.chat/trade/"+t:i.includes("from SherpaX")?"https://scan.sherpax.io/trade/"+t:i.includes("from Polkadot")?"https://polkadot.subscan.io/extrinsic/"+t:i.includes("from Kusama")?"https://kusama.subscan.io/extrinsic/"+t:i.includes("from ChainX")?"https://scan.chainx.org/trade/"+t:void 0})(c,d),pending:l,success:s},r.a.createElement(vn,null,r.a.createElement(Ai,null,null!==i&&void 0!==i?i:t," \u2197")),r.a.createElement(Ci,{pending:l,success:s},l?r.a.createElement(pn,{stroke:"#3B199F"}):s?r.a.createElement(En.a,{size:"16",color:"#38DCBF"}):r.a.createElement(wn.a,{size:"16",color:"#E93E5E"})))}var Oi=e=>{let{isOpen:t,closeModal:n}=e;const{currentAccount:a}=Object(o.useContext)(qo),[i,l]=Object(o.useState)(!1),[s,c]=Object(o.useState)(!1),[d,u]=Object(o.useState)(localStorage.getItem("AccountTxList")&&Object.values(JSON.parse(localStorage.getItem("AccountTxList")))),[m,p]=Object(o.useState)(localStorage.getItem("AccountPendingList")&&Object.values(JSON.parse(localStorage.getItem("AccountPendingList")))),f=Object(o.useCallback)(()=>{l(!1)},[]);Object(o.useEffect)(()=>{u(localStorage.getItem("AccountTxList")&&Object.values(JSON.parse(localStorage.getItem("AccountTxList")))),p(localStorage.getItem("AccountPendingList")&&Object.values(JSON.parse(localStorage.getItem("AccountPendingList"))))},[localStorage.getItem("AccountTxList"),localStorage.getItem("AccountPendingList"),s]);const b=()=>{localStorage.removeItem("AccountTxList"),localStorage.removeItem("AccountPendingList"),c(!s)};function g(e,t){const n=[...e].reverse();return r.a.createElement(La,null,null===n||void 0===n?void 0:n.map((e,n)=>r.a.createElement(Si,{key:n,hash:e.hash,status:t})))}const y={hasENS:!1,isENS:!1,href:"https://scan.sherpax.io/account/"+(null===a||void 0===a?void 0:a.address)},h={address:null===a||void 0===a?void 0:a.address};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Kr,{className:"currency-search-dialog",title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},"Funding Account"),visible:t,onCancel:n,footer:null,bodyStyle:{padding:0}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%"}},r.a.createElement(ja,null,r.a.createElement(Ba,null,r.a.createElement(Ua,null,r.a.createElement(Na,null,r.a.createElement(Ra,null,r.a.createElement(Da,null,"Connected with Polkadot{.js} extension"),r.a.createElement("div",null,r.a.createElement(za,{style:{fontSize:".825rem",fontWeight:400},onClick:()=>{l(!0)}},"Change"))),r.a.createElement(Ra,{id:"web3-account-identifier-row"},r.a.createElement(Fa,null,(null===a||void 0===a?void 0:a.name)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(yr.a,{className:"imgIcon",value:a.address,size:28,theme:"polkadot"}),r.a.createElement("p",{style:{padding:"0 0.2rem"}},Qa(a.address)))))),r.a.createElement(hr,{cardType:"polka",linkParams:y,current:h}))))),d&&m?r.a.createElement(Pa,null,r.a.createElement(hn,{mb:"1rem",style:{justifyContent:"space-between"}},r.a.createElement(Aa.body,null,"Recent Transactions"),r.a.createElement(la,{onClick:b},"(clear all)")),g(m,"pending"),g(d,"finish")):r.a.createElement(r.a.Fragment,null,d||m?r.a.createElement(Pa,null,r.a.createElement(hn,{mb:"1rem",style:{justifyContent:"space-between"}},r.a.createElement(Aa.body,{color:"#222222",fontSize:"14px"},"Recent Transactions"),r.a.createElement(la,{onClick:b,props:"color:#876CD7;font-size:13px;"},"(clear all)")),d?g(d,"finish"):g(m,"pending")):r.a.createElement(Pa,null,r.a.createElement(Aa.body,{color:"#222222",fontSize:"14px"},"Your transactions will appear here..."))))),r.a.createElement(wi,{title:"Back",isOpen:i,closeModal:f}))},Ii=n(659),Ti=n.n(Ii);const ji=ue.default.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  width: fit-content;
  font-weight: 500;
  cursor: pointer;
  border-radius: 16px;
  background-color: white;
  padding: 2px;
  align-items: center;
  .name {
    padding: 0 12px;
    color: #6d4ec9;
  }

  .address {
    border-radius: 16px;
    padding: 12px;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #e4e8f2;
    color: #6d4ec9;
    > span {
      line-height: 16px;
      font-size: 14px;
    }
    > svg {
      margin-left: 0.5rem;
    }
  }
`,Ni=ue.default.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #e4e8f2;
  color: #6d4ec9;
  border-radius: 16px;
  border: 2px solid white;
  padding: 8px 10px;
  :active,
  :hover,
  :focus {
    background: #cbc9e9;
    color: #6d4ec9 !important;
  }
  > img {
    margin: 0 8px 0 0;
  }
`,Ri=ue.default.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  width: fit-content;
  font-weight: 600;
`;var Bi=()=>{const{currentAccount:e}=Object(o.useContext)(qo),[t,n]=Object(o.useState)(!1),[a,i]=Object(o.useState)(!1),l=Object(o.useCallback)(()=>{i(!1)},[]),s=Object(o.useCallback)(()=>{i(!0)},[]);return Object(o.useEffect)(()=>{n(null===e||void 0===e?void 0:e.hasTxPending)},[e]),r.a.createElement(r.a.Fragment,null,(null===e||void 0===e?void 0:e.address)?r.a.createElement(ji,{onClick:s},r.a.createElement("div",{className:"name"},null===e||void 0===e?void 0:e.name),t?r.a.createElement("div",{className:"address",style:{backgroundColor:"#E93E5E",color:"white"}},r.a.createElement(pn,{stroke:"white"}),r.a.createElement("span",{style:{marginLeft:"8px"}},"Pending")):r.a.createElement("div",{className:"address"},r.a.createElement("span",null," ",(null===e||void 0===e?void 0:e.address)&&Qa(null===e||void 0===e?void 0:e.address)),r.a.createElement(yr.a,{className:"imgIcon",value:e.address,size:16,theme:"polkadot",style:{marginLeft:"0.5rem"}}))):r.a.createElement("a",{href:"https://www.sherpuppy.dog",target:"_blank",rel:"noreferrer"},r.a.createElement(Ni,null,r.a.createElement("img",{src:Ti.a,alt:""}),r.a.createElement(Ri,null,"Home"))),r.a.createElement(Oi,{title:"Account",isOpen:a,closeModal:l}))},Ui=n(660),Pi=n.n(Ui);const Fi=ue.default.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border-radius: 12px;
  border: none;
  padding: 12px;
  margin-left: 0.5rem;
  cursor: pointer;
`;function Mi(){return r.a.createElement("a",{id:"link",href:"https://soswap.finance",target:"_blank",rel:"noreferrer"},r.a.createElement(Fi,null,r.a.createElement("img",{src:"https://soswap.finance/static/media/logo.a1f61c89.svg",alt:"SoSwap",style:{width:"76px"}})))}n(887);var Di=n(512);const Li=[{title:"",route:"swap"},{title:"",route:"bridge"},{title:"",route:"asset"},{title:"",route:"earn"},{title:"",route:"info"}],zi=ue.default.div`
  .ant-tabs-tab-btn {
    font-size: 14px;
    font-weight: 500;
    color: #281071;
    line-height: 22px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #6d4ec9 !important;
  }

  .ant-tabs-tab-btn:focus,
  .ant-tabs-tab-remove:focus,
  .ant-tabs-tab-btn:active,
  .ant-tabs-tab-remove:active {
    color: #6d4ec9 !important;
  }

  .ant-tabs-ink-bar {
    margin-top: -2px;
    background-color: #6d4ec9 !important;
  }

  .ant-tabs-top > .ant-tabs-nav:before {
    border-bottom: transparent;
  }
  .ant-tabs > .ant-tabs-nav,
  .ant-tabs > div > .ant-tabs-nav {
    margin: 0 !important;
  }
  .ant-tabs-tab {
    margin: 0 20px;
    padding: 4px 0;
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 20px;
  }
`,{TabPane:Xi}=Di.a,Wi=["bridge","asset","earn","info"];var Hi=()=>{const{pathname:e}=Object(de.g)(),[t,n]=Object(o.useState)(e.slice(1).split("/")[0]),a=Object(o.useCallback)(e=>{window.location.hash=e},[]);return Object(o.useEffect)(()=>{const t=e.slice(1).split("/")[0];n(t)},[e]),r.a.createElement(zi,null,r.a.createElement(Di.a,{className:"swapTab",activeKey:Wi.includes(t)?t:"swap",onChange:a},null===Li||void 0===Li?void 0:Li.map(e=>r.a.createElement(Xi,{tab:e.title,key:e.route}))))},qi=n(661),Vi=n.n(qi);const Ki=r.a.createContext({});var Yi=r.a.memo((function(e){let{children:t}=e;const[n,a]=Object(o.useState)(!1);return r.a.createElement(Ki.Provider,{value:{isUserBlocked:n}},t)}));function _i(){return Object(o.useContext)(Ki)}const Ji=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  //top: 0;
  //position: absolute;
  z-index: 2;
  padding: 8px 24px;
`,Qi=ue.default.div`
  display: flex;
  align-items: center;
`,$i=ue.default.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`,Gi=ue.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`,Zi=ue.default.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  white-space: nowrap;
  justify-content: end;
  margin-right: 12px;
  :focus {
    border: 1px solid blue;
  }
`,el=ue.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,tl=ue.default.div`
  background: #7569e5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  img {
    margin-right: 12px;
  }
`;function nl(){const{account:e,chainId:t,library:n}=be(),{isUserBlocked:a}=_i();return Object(o.useEffect)(()=>{go.SHERPAX},[n,t,go.SHERPAX]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ji,null,r.a.createElement(Qi,null,r.a.createElement($i,{href:"/puppyswap"},r.a.createElement("img",{src:"https://sherpuppy.dog/puppyswap/static/media/inkpx-word-art (6).png",style:{marginLeft:"-20px"}})),r.a.createElement(Hi,null)),r.a.createElement(el,null,r.a.createElement(Qi,null,r.a.createElement(Zi,{active:!0,style:{pointerEvents:"auto"}},r.a.createElement(Bi,null)),r.a.createElement(Gi,{active:!!e,style:{pointerEvents:"auto"}},r.a.createElement(pi,null))),r.a.createElement(Mi,null))),a&&r.a.createElement(tl,null,r.a.createElement(Go,{iconSrc:Vi.a,width:24,height:24}),r.a.createElement(na.a,{fontWeight:500,fontSize:14,lineHeight:"20px",color:"#FFFFFF"},"\u60a8\u7684IP\u3001\u56fd\u7c4d\u663e\u793a\u60a8\u5904\u4e8eSoSwap\u670d\u52a1\u9650\u5236\u7684\u56fd\u5bb6/\u5730\u533a,SoSwap\u4e0d\u5411\u60a8\u6240\u5728\u7684\u56fd\u5bb6/\u5730\u533a\u63d0\u4f9b\u670d\u52a1.")))}var al=n(137),ol=n(152);const rl={pending:Object(Se.b)("lists/fetchTokenList/pending"),fulfilled:Object(Se.b)("lists/fetchTokenList/fulfilled"),rejected:Object(Se.b)("lists/fetchTokenList/rejected")},il=Object(Se.b)("lists/acceptListUpdate"),ll=Object(Se.b)("lists/addList"),sl=Object(Se.b)("lists/removeList"),cl=Object(Se.b)("lists/selectList");Object(Se.b)("lists/rejectVersionUpdate");function dl(e){let{popKey:t,listUrl:n,oldList:a,newList:i,auto:l}=e;const s=Pe(),u=Object(o.useCallback)(()=>s(t),[t,s]),m=Object(d.b)(),p=Object(o.useCallback)(()=>{l||(c.a.event({category:"Lists",action:"Update List from Popup",label:n}),m(il(n)),u())},[l,m,n,u]),{added:f,changed:b,removed:g}=Object(o.useMemo)(()=>Object(ol.b)(a.tokens,i.tokens),[i.tokens,a.tokens]),y=Object(o.useMemo)(()=>Object.keys(b).reduce((e,t)=>e+Object.keys(b[t]).length,0),[b]);return r.a.createElement(hn,null,r.a.createElement(gi,{style:{flex:"1"},gap:"8px"},l?r.a.createElement(Aa.body,{fontSize:16,fontWeight:600,color:"#281071",lineHeight:"20px"},'The token list "',a.name,'" has been updated'):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(na.a,{fontSize:16,fontWeight:600,color:"#281071",lineHeight:"20px",paddingBottom:"16px"},'An update is available for the token list "'),r.a.createElement("ul",null,f.length>0?r.a.createElement("li",null,f.map((e,t)=>r.a.createElement(r.a.Fragment,{key:`${e.chainId}-${e.address}`},r.a.createElement("strong",{title:e.address},e.symbol),t===f.length-1?null:", "))," ","added"):null,g.length>0?r.a.createElement("li",null,g.map((e,t)=>r.a.createElement(r.a.Fragment,{key:`${e.chainId}-${e.address}`},r.a.createElement("strong",{title:e.address},e.symbol),t===g.length-1?null:", "))," ","removed"):null,y>0?r.a.createElement("li",null,y," tokens updated"):null)),r.a.createElement(hn,null,r.a.createElement("div",{style:{flexGrow:1,marginRight:12}},r.a.createElement(ar,{onClick:p},"Accept update")),r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement(ar,{onClick:u},"Dismiss"))))))}var ul=n(662),ml=n.n(ul),pl=n(663),fl=n.n(pl);const bl=Object(ue.default)(hn)`
  flex-wrap: nowrap;
`,gl=ue.default.div`
  width: 260px;
  font-size: 16px;
  font-weight: 600;
  color: #281071;
  line-height: 20px;
  word-wrap: break-word;
`;function yl(e){let{type:t,hash:n,success:a,summary:o}=e;const{chainId:i}=be();return r.a.createElement(bl,null,r.a.createElement("div",{style:{paddingRight:16}},a?r.a.createElement("img",{src:ml.a,alt:""}):r.a.createElement("img",{src:fl.a,alt:""})),r.a.createElement(gi,{gap:"8px"},r.a.createElement(gl,null,null!==o&&void 0!==o?o:"Hash: "+n.slice(0,8)+"..."+n.slice(58,65)),n&&r.a.createElement(da,{href:t?((e,t,n)=>{if(e&&t)return e.includes("asset")?"https://scan.sherpax.io/trade/"+n:t.includes("from MiniX")?"https://miniscan.coming.chat/trade/"+n:t.includes("from SherpaX")?"https://scan.sherpax.io/trade/"+n:t.includes("from Polkadot")?"https://polkadot.subscan.io/extrinsic/"+n:t.includes("from Kusama")?"https://kusama.subscan.io/extrinsic/"+n:t.includes("from ChainX")?"https://scan.chainx.org/trade/"+n:void 0})(t,o,n):gt(i,n,"transaction")},"View on scan")))}const hl=Object(ue.default)(oa.a)`
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`,vl=ue.default.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  padding: 16px;
  background: #fafbfc;
  box-shadow: 5px 15px 15px 2px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  border: 1px solid #dce0e2;
  width: 390px;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    min-width: 290px;
  `}}
`,xl=ue.default.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background-color: #c8d0da;
`,El=Object(al.a)(xl);function wl(e){let{removeAfterMs:t,content:n,popKey:a}=e;const i=Pe(),l=Object(o.useCallback)(()=>i(a),[a,i]);Object(o.useEffect)(()=>{if(null===t)return;const e=setTimeout(()=>{l()},t);return()=>{clearTimeout(e)}},[t,l]);Object(o.useContext)(ue.ThemeContext);let s;if("txn"in n){const{txn:{type:e,hash:t,success:a,summary:o}}=n;s=r.a.createElement(yl,{type:e,hash:t,success:a,summary:o})}else if("listUpdate"in n){const{listUpdate:{listUrl:e,oldList:t,newList:o,auto:i}}=n;s=r.a.createElement(dl,{popKey:a,listUrl:e,oldList:t,newList:o,auto:i})}const c=Object(al.b)({from:{width:"100%"},to:{width:"0%"},config:{duration:null!==t&&void 0!==t?t:void 0}});return r.a.createElement(vl,null,r.a.createElement(hl,{color:"#371b99",size:20,onClick:l}),s,null!==t?r.a.createElement(El,{style:c}):null)}const Al=ue.default.div`
  position: relative;
  max-width: 100%;
  height: ${e=>{let{height:t}=e;return t}};
  margin: ${e=>{let{height:t}=e;return t?"0 auto;":0}};
  margin-bottom: ${e=>{let{height:t}=e;return t?"20px":0}}};
  display: none;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    display: block;
  `}};
`,kl=ue.default.div`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Cl=Object(ue.default)(gi)`
  position: fixed;
  top: 80px;
  right: 3.5rem;
  max-width: 355px !important;
  width: 100%;
  z-index: 2;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    display: none;
  `}};
`;function Sl(){const e=Fe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Cl,{gap:"20px"},e.map(e=>r.a.createElement(wl,{key:e.key,content:e.content,popKey:e.key,removeAfterMs:5e3}))),r.a.createElement(Al,{height:(null===e||void 0===e?void 0:e.length)>0?"fit-content":0},r.a.createElement(kl,null,e.slice(0).reverse().map(e=>r.a.createElement(wl,{key:e.key,content:e.content,popKey:e.key,removeAfterMs:5e3})))))}const Ol=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
`,Il=ue.default.h2`
  color: ${e=>{let{theme:t}=e;return t.secondary1}};
`;function Tl(e){let{children:t}=e;const{t:n}=Object(oe.b)(),{active:l}=Object(a.d)(),{active:s,error:c,activate:d}=Object(a.d)("NETWORK"),u=function(){const{activate:e,active:t}=Object(a.d)(),[n,r]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{N.isAuthorized().then(t=>{t||i.isMobile&&window.ethereum?e(N,void 0,!0).catch(()=>{r(!0)}):r(!0)})},[e]),Object(o.useEffect)(()=>{t&&r(!0)},[t]),n}();Object(o.useEffect)(()=>{!u||s||c||l||d(T)},[u,s,c,d,l]),function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{active:t,error:n,activate:r}=Object(a.d)();Object(o.useEffect)(()=>{const{ethereum:a}=window;if(a&&a.on&&!t&&!n&&!e){const e=()=>{r(N,void 0,!0).catch(e=>{console.error("Failed to activate after chain changed",e)})},t=e=>{e.length>0&&r(N,void 0,!0).catch(e=>{console.error("Failed to activate after accounts changed",e)})};return a.on("chainChanged",e),a.on("accountsChanged",t),()=>{a.removeListener&&(a.removeListener("chainChanged",e),a.removeListener("accountsChanged",t))}}},[t,n,e,r])}(!u);const[m,p]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{const e=setTimeout(()=>{p(!0)},600);return()=>{clearTimeout(e)}},[]),u?!l&&c?r.a.createElement(Ol,null,r.a.createElement(Il,null,n("unknownError"))):l||s?t:m?r.a.createElement(Ol,null,r.a.createElement(pn,null)):null:null}var jl=n(279);function Nl(e){let{location:{search:t}}=e;const n=Object(d.b)();return Object(o.useEffect)(()=>{if(!t)return;if(t.length<2)return;const e=Object(jl.parse)(t,{parseArrays:!1,ignoreQueryPrefix:!0}).theme;"string"===typeof e&&("light"===e.toLowerCase()?n(Dn({userDarkMode:!1})):"dark"===e.toLowerCase()&&n(Dn({userDarkMode:!0})))},[n,t]),null}const Rl=Object(ue.default)(bn.Box)`
  width: 100%;
  border-radius: 16px;
  padding: 1rem;
  padding: ${e=>{let{padding:t}=e;return t}};
  border: ${e=>{let{border:t}=e;return t}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t}};
`;var Bl=Rl;const Ul=Object(ue.default)(Rl)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.bg2}};
  background-color: transparent;
`,Pl=Object(ue.default)(Rl)`
  background-color: ${e=>{let{theme:t}=e;return t.bg3}};
  &.white {
    background-color: rgba(255, 255, 255, 0.13);
  }
`,Fl=(Object(ue.default)(Rl)`
  border: 1px solid ${e=>{let{theme:t}=e;return t.bg3}};
`,Object(ue.default)(Rl)`
  background-color: rgba(242, 132, 30, 0.15);
  color: ${e=>{let{theme:t}=e;return t.yellow2}};
  font-weight: 500;
`),Ml=Object(ue.default)(Rl)`
  background-color: rgba(255, 0, 122, 0.03);
  color: ${e=>{let{theme:t}=e;return t.primary1}};
  font-weight: 500;
`,Dl=Object(ue.default)(Rl)`
  background: #c9c8e7;
  border-radius: 24px;
  border: 1px solid #ffffff;
`,Ll=Object(ue.default)(Rl)`
  background: white;
  box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);
  border-radius: 24px;
  //border: 1px solid #c9c8e7;
`,zl=Object(ue.default)(Rl)`
  background: #dcdcf2;
  border-radius: 24px;
  border: 1px solid #ffffff;
  padding: 0;
`,Xl=Object(ue.default)(Rl)`
  border-radius: 16px;
  background: #d6d5f4;
  border: 1px solid rgba(153, 143, 184, 0.18);
  padding: 0;
  white-space: nowrap;
`,Wl=Object(ue.default)(Rl)`
  width: 100%;
  background: #b5adff;
  box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);
  border-radius: 24px;
  border: 2px solid #ffffff;
  padding: 16px 24px;
`,Hl=e=>{let{children:t,...n}=e;return r.a.createElement(Wl,n,r.a.createElement(na.a,{fontWeight:500,color:"#2172E5"},t))};var ql=n(511),Vl=(n(954),n(664));const Kl=Object(al.a)(ql.b),Yl=Object(ue.default)(Kl)`
  &[data-reach-dialog-overlay] {
    z-index: 2;
    background-color: transparent;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>{let{theme:t}=e;return t.modalBG}};
  }
`,_l=Object(al.a)(ql.a),Jl=Object(ue.default)(e=>{let{minHeight:t,maxHeight:n,maxWidth:a,mobile:o,isOpen:i,...l}=e;return r.a.createElement(_l,l)}).attrs({"aria-label":"dialog"})`
  &[data-reach-dialog-content] {
    margin: 0 0 2rem 0;
    border: 1px solid ${e=>{let{theme:t}=e;return t.bg1}};
    background-color: ${e=>{let{theme:t}=e;return t.bg1}};
    box-shadow: 0 4px 8px 0 ${e=>{let{theme:t}=e;return Object(aa.c)(.95,t.shadow1)}};
    padding: 0px;
    width: 50vw;
    overflow: hidden;

    align-self: ${e=>{let{mobile:t}=e;return t?"flex-end":"center"}};
    ${e=>{let{maxWidth:t}=e;return t?ue.css`
        max-width: ${t}px;
      `:ue.css`
        max-width: 405px;
      `}}
    ${e=>{let{maxHeight:t}=e;return t&&ue.css`
        max-height: ${t}vh;
      `}}
    ${e=>{let{minHeight:t}=e;return t&&ue.css`
        min-height: ${t}vh;
      `}}
    display: flex;
    border-radius: 20px;
    ${e=>{let{theme:t}=e;return t.mediaWidth.upToMedium`
      width: 65vw;
      margin: 0;
    `}}
    ${e=>{let{theme:t,mobile:n}=e;return t.mediaWidth.upToSmall`
      width:  85vw;
      ${n&&ue.css`
          width: 100vw;
          border-radius: 20px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `}
    `}}
  }
`;function Ql(e){let{isOpen:t,onDismiss:n,minHeight:a=!1,maxHeight:o=50,maxWidth:l,initialFocusRef:s,children:c}=e;const d=Object(al.c)(t,null,{config:{duration:200},from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),[{y:u},m]=Object(al.b)(()=>({y:0,config:{mass:1,tension:210,friction:20}})),p=Object(Vl.a)({onDrag:e=>{m({y:e.down?e.movement[1]:0}),(e.movement[1]>300||e.velocity>3&&e.direction[1]>0)&&n()}});return r.a.createElement(r.a.Fragment,null,d.map(e=>{let{item:t,key:d,props:m}=e;return t&&r.a.createElement(Yl,{key:d,style:m,onDismiss:n,initialFocusRef:s},r.a.createElement(Jl,Object.assign({},i.isMobile?{...p(),style:{transform:u.interpolate(e=>`translateY(${e>0?e:0}px)`)}}:{},{"aria-label":"dialog content",minHeight:a,maxHeight:o,maxWidth:l,mobile:i.isMobile}),!s&&i.isMobile?r.a.createElement("div",{tabIndex:1}):null,c))}))}var $l=n(1210),Gl=n(665),Zl=n.n(Gl);const es=ue.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 24px 24px 24px;
  height: fit-content;
  width: 100%;
`;function ts(e){let{topBox:t,bottomBox:n,operatorBox:a}=e;return r.a.createElement(es,null,t,n,a)}var ns=n(192),as=n.n(ns),os=n(484),rs=n.n(os),is=n(489),ls=n.n(is);const ss=ue.default.div`
  padding: 11px 12px;
  background: #e4e8f2;
  border-radius: 16px;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 8px;
  }
`;var cs=r.a.memo(e=>{let{address:t,symbol:n,decimals:a,image:i}=e;const[l,s]=Object(o.useState)({text:`Add ${n} token to Metamask`,icon:rs.a}),c=Object(o.useCallback)(async()=>{try{await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,symbol:n,decimals:a,image:i}}})?(s({text:`Added ${n} token`,icon:ls.a}),console.log("Thanks for your interest!")):console.log("Your loss!")}catch(e){console.log(e)}},[t,a,i,n]);return r.a.createElement(ss,{onClick:c},r.a.createElement(na.a,{fontSize:14,fontWeight:600,color:"#6D4EC9",lineHeight:"17px"},l.text),r.a.createElement(Go,{iconSrc:l.icon,height:24,width:24}))});const ds=ue.default.div`
  width: 100%;
  background: #f1f5fb;
  box-shadow: 0 4px 10px 0 rgba(0, 1, 1, 0.17);
  border: 1px solid #ffffff;
`,us=Object(ue.default)(gi)`
  padding: 24px;
`,ms=Object(ue.default)(bi)`
  padding: 30px 0;
`,ps=Object(ue.default)(ma)`
  height: ${e=>{let{size:t}=e;return t}};
  width: ${e=>{let{size:t}=e;return t}};
`;function fs(e){let{onDismiss:t,pendingText:n}=e;return r.a.createElement(ds,null,r.a.createElement(us,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"end"}},r.a.createElement(ia,{onClick:t})),r.a.createElement(ms,null,r.a.createElement(ps,{src:Zl.a,alt:"loader",size:"98px"})),r.a.createElement(gi,{justify:"center"},r.a.createElement(na.a,{fontWeight:600,fontSize:18,color:"#3B199F",paddingBottom:"16px"},"Waiting For Confirmation"),r.a.createElement(gi,{justify:"center"},r.a.createElement(na.a,{fontWeight:500,fontSize:16,color:"",textAlign:"center",paddingBottom:"8px"},n)),r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7",textAlign:"center"},"Confirm this transaction in your wallet"))))}function bs(e){let{onDismiss:t,chainId:n,hash:a,tokenAddress:i,tokenDecimals:l,tokenSymbol:s,tokenLogoURI:c}=e;Object(o.useContext)(ue.ThemeContext);return r.a.createElement(ds,null,r.a.createElement(us,null,r.a.createElement(yn,null,r.a.createElement("div",null),r.a.createElement(ia,{onClick:t})),r.a.createElement(ms,null,r.a.createElement($l.a,{strokeWidth:.5,size:72,color:"#37DCBF"})),r.a.createElement(gi,{gap:"12px",justify:"center"},r.a.createElement(na.a,{fontWeight:500,color:"#3B199F",fontSize:20},"Transaction Submitted"),r.a.createElement("a",{href:gt(n,a,"transaction"),target:"_blank",rel:"noreferrer"},r.a.createElement(na.a,{fontWeight:500,color:"#876CD7",fontSize:14},"View on scan")),i&&"KSX"!==s&&r.a.createElement(cs,{address:i,symbol:s,decimals:l,image:c}),r.a.createElement(er,{onClick:t,style:{margin:"20px 0 0 0"}},r.a.createElement(na.a,{fontWeight:500,fontSize:20},"Close")))))}function gs(e){let{title:t,bottomContent:n,onDismiss:a,topContent:o}=e;return r.a.createElement(Kr,{className:"currency-search-dialog",bodyStyle:{padding:"0"},visible:!0,title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},t),onCancel:a,footer:null},r.a.createElement(ts,{topBox:o(),bottomBox:n()}))}function ys(e){let{message:t,onDismiss:n}=e;const a=Object(o.useContext)(ue.ThemeContext);return r.a.createElement(Kr,{className:"currency-search-dialog",bodyStyle:{padding:"0"},visible:!0,title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},"Error"),onCancel:n,footer:null},r.a.createElement(ts,{topBox:r.a.createElement(gi,{style:{marginTop:20,padding:"2rem 0"},gap:"24px",justify:"center"},r.a.createElement("img",{src:as.a,alt:"",style:{width:"64px"}}),r.a.createElement(na.a,{fontWeight:500,fontSize:16,color:a.red1,style:{textAlign:"center",width:"85%"}},t)),bottomBox:r.a.createElement(er,{onClick:n},"Dismiss")}))}function hs(e){let{isOpen:t,onDismiss:n,attemptingTxn:a,hash:o,pendingText:i,content:l,tokenAddress:s,tokenDecimals:c,tokenSymbol:d,tokenLogoURI:u}=e;const{chainId:m}=be();return m?r.a.createElement(Ql,{isOpen:t,onDismiss:n,maxHeight:90},a?r.a.createElement(fs,{onDismiss:n,pendingText:i}):o?r.a.createElement(bs,{tokenAddress:s,tokenDecimals:c,tokenSymbol:d,tokenLogoURI:u,chainId:m,hash:o,onDismiss:n}):l()):null}var vs=n(478),xs=n.n(vs),Es=n(506),ws=n.n(Es),As=n(421),ks=n(422);const Cs=new TextDecoder;function Ss(e){const t=function(e){if((e=e.startsWith("0x")?e.substr(2):e).length%2!==0)throw new Error("hex must have length that is multiple of 2");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.substr(2*n,2),16);return t}(e),n=Object(As.getCodec)(t);switch(n){case"ipfs-ns":{const e=Object(As.rmPrefix)(t),n=new ws.a(e);return"ipfs://"+Object(ks.toB58String)(n.multihash)}case"ipns-ns":{const e=Object(As.rmPrefix)(t),n=new ws.a(e),a=Object(ks.decode)(n.multihash);return"identity"===a.name?"ipns://"+Cs.decode(a.digest).trim():"ipns://"+Object(ks.toB58String)(n.multihash)}default:throw new Error("Unrecognized codec: "+n)}}const Os=/^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;function Is(e){const t=e.match(Os);if(t)return{ensName:t[1].toLowerCase()+"eth",ensPath:t[3]}}function Ts(e){var t,n;switch(e.split(":")[0].toLowerCase()){case"https":return[e];case"http":return["https"+e.substr(4),e];case"ipfs":const a=null===(t=e.match(/^ipfs:(\/\/)?(.*)$/i))||void 0===t?void 0:t[2];return[`https://cloudflare-ipfs.com/ipfs/${a}/`,`https://ipfs.io/ipfs/${a}/`];case"ipns":const o=null===(n=e.match(/^ipns:(\/\/)?(.*)$/i))||void 0===n?void 0:n[2];return[`https://cloudflare-ipfs.com/ipns/${o}/`,`https://ipfs.io/ipns/${o}/`];default:return[]}}function js(e){const t=Object(o.useMemo)(()=>e?Is(e):void 0,[e]),n=function(e){var t,n,a;const r=Object(o.useMemo)(()=>{if(!e)return[void 0];try{return e?[Object(Ce.namehash)(e)]:[void 0]}catch(t){return[void 0]}},[e]),i=nt(Vt(!1),"resolver",r),l=null===(t=i.result)||void 0===t?void 0:t[0],s=nt(Kt(l&&kt(l)?void 0:l,!1),"contenthash",r);return{contenthash:null!==(n=null===(a=s.result)||void 0===a?void 0:a[0])&&void 0!==n?n:null,loading:i.loading||s.loading}}(null===t||void 0===t?void 0:t.ensName);return Object(o.useMemo)(()=>t?n.contenthash?Ts(Ss(n.contenthash)):[]:e?Ts(e):[],[t,n.contenthash,e])}var Ns=n(1211);const Rs={};function Bs(e){let{srcs:t,alt:n,...a}=e;const[,i]=Object(o.useState)(0),l=t.find(e=>!Rs[e]);return l?r.a.createElement("img",Object.assign({},a,{alt:n,src:l,onError:()=>{l&&(Rs[l]=!0),i(e=>e+1)}})):r.a.createElement(Ns.a,a)}const Us=["WKSX"],Ps=(e,t)=>(Us.includes(t)&&(t=null),`https://raw.githubusercontent.com/chainx-org/token-list/main/assets/${t||"Default"}.svg`),Fs=ue.default.img`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
  // box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`,Ms=Object(ue.default)(Bs)`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
`;function Ds(e){var t;let{currency:n,size:a="24px",style:i}=e;const l=js(n instanceof Sn?n.logoURI:void 0),s=Object(o.useMemo)(()=>n===u.ETHER?[]:n instanceof u.Token?n instanceof Sn?[...l,Ps(n.address)]:[Ps(n.address,n.symbol)]:[],[n,l]);return n===u.ETHER?r.a.createElement(Fs,{src:xs.a,size:a,style:i}):r.a.createElement(Ms,{size:a,srcs:s,alt:(null!==(t=null===n||void 0===n?void 0:n.symbol)&&void 0!==t?t:"token")+" logo",style:i})}const Ls=ue.default.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-right: ${e=>{let{sizeraw:t,margin:n}=e;return n&&(t/3+8).toString()+"px"}};
`,zs=Object(ue.default)(Ds)`
  z-index: 2;
`,Xs=Object(ue.default)(Ds)`
  position: absolute;
  left: ${e=>{let{sizeraw:t}=e;return(t/2).toString()+"px"}};
`;function Ws(e){let{currency0:t,currency1:n,size:a=16,margin:o=!1}=e;return r.a.createElement(Ls,{sizeraw:a,margin:o},t&&r.a.createElement(zs,{currency:t,size:a.toString()+"px"}),n&&r.a.createElement(Xs,{currency:n,size:a.toString()+"px",sizeraw:a}))}n(1004);var Hs=n(707),qs=n(490),Vs=n.n(qs);n(1006);var Ks=e=>{let{title:t,content:n,trigger:a,icon:o,...i}=e;return r.a.createElement(Hs.a,{trigger:a,content:n},r.a.createElement("img",Object.assign({src:o||Vs.a,alt:"",style:{width:"16px",height:"16px",marginLeft:"4px"}},i)))};function Ys(e){let{text:t,icon:n}=e;return r.a.createElement(Ks,{content:t,icon:n})}const _s=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>{let{padding:t}=e;return t||"14px 24px"}};
  border-bottom: ${e=>{let{hasBorder:t}=e;return t&&"1px solid white"}};
  position: relative;
  a {
    color: white !important;
  }
`,Js=ue.default.div`
  display: flex;
  flex-direction: row;
`,Qs=ue.default.div`
  background: rgba(109, 78, 201, 0.11);
  width: ${e=>{let{width:t}=e;return 2*t+"px"}};
  position: relative;
  z-index: -2;
  left: ${e=>{let{width:t}=e;return`-${2*t}px`}};
  border-radius: 16px;
`,$s=ue.default.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ffffff;
`,Gs=Object(ue.default)(ce.c).attrs({activeClassName:"ACTIVE"})`
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 33px;
  color: #fff !important;
  transition: color linear;
  opacity: 1;

  &.${"ACTIVE"} {
    opacity: 1;
    transition: color 0s;
    color: #281071 !important;
    font-size: 16px;
    font-weight: 600;
  }
`,Zs=ue.default.div`
  font-size: 16px;
  font-weight: 600;
  color: #281071;
  line-height: 20px;
`;Object(ue.default)(ra.a)`
  color: ${e=>{let{theme:t}=e;return t.text1}};
`;var ec=n(481),tc=n.n(ec);const nc={"Add Liquidity":{to:"/swap/pool",tipText:"When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time."},"Remove Liquidity":{to:"/swap/pool",tipText:"Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."},"Import Pool":{to:"/swap/pool",tipText:"Use this tool to find pairs that don't automatically appear in the interface."}},ac=[{title:"Swap",route:"swap"},{title:"Pool",route:"swap/pool"}],oc=[{title:"Trading(EVM)",route:"asset"},{title:"Funding(WASM)",route:"asset/funding"}],rc=[{title:"Farms",route:"earn"},{title:"Pools",route:"earn/pools"}],ic={Swap:ac,Pool:ac,"Trading(EVM)":oc,"Funding(WASM)":oc,Pools:rc,Farms:rc},lc=ue.default.div`
  color: #281071 !important;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgb(109 78 201 / 6%);
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  width: ${e=>{let{width:t}=e;return t+"px"}};
  height: 45px;
  line-height: 45px;
  text-align: center;
  position: absolute;
  transform: ${e=>{let{myStyle:t,width:n}=e;return`translateX(${t*n}px)`}};
  transition: all 0.2s;
  z-index: -1;
`,sc=e=>{let{label:t}=e;return r.a.createElement($s,null,r.a.createElement(yn,{style:{padding:"24px"}},r.a.createElement(ce.b,{style:{display:"flex",alignItems:"center"},to:nc[t].to},r.a.createElement(Go,{iconSrc:tc.a,width:16,height:16})),r.a.createElement(Zs,null,t),r.a.createElement(Ys,{text:nc[t].tipText})))};function cc(e){var t;let{active:n,padding:a,width:i}=e;const{pathname:l}=Object(de.g)(),[s,c]=Object(o.useState)(0),[,d]=Object(o.useState)(n);Object(o.useEffect)(()=>{const e=l.slice(1);c("swap"===e||"asset"===e||"earn"===e?0:1)},[l]);return r.a.createElement(_s,{padding:a},r.a.createElement(Js,null,null===(t=ic[n])||void 0===t?void 0:t.map((e,t)=>r.a.createElement(Gs,{key:e.title,to:"/"+e.route,isActive:()=>n===e.title,onClick:()=>((e,t)=>{c(e),d(t)})(t,e.title)},e.title)),r.a.createElement(Qs,{width:i}),r.a.createElement(lc,{myStyle:s,width:i})))}function dc(e,t){return t&&e===u.ETHER?u.WKSX[t]:e instanceof u.Token?e:void 0}function uc(e,t){const n=e&&t?dc(e.currency,t):void 0;return n&&e?new u.TokenAmount(n,e.raw):void 0}function mc(e){return e.equals(u.WKSX[e.chainId])?u.ETHER:e}const pc=new It.b(Ct.a);let fc;function bc(e){const{chainId:t}=be(),n=Object(o.useMemo)(()=>e.map(e=>{let[n,a]=e;return[dc(n,t),dc(a,t)]}),[t,e]),a=tt(Object(o.useMemo)(()=>n.map(e=>{let[t,n]=e;return t&&n&&!t.equals(n)?u.Pair.getAddress(t,n):void 0}),[n]),pc,"getReserves");return Object(o.useMemo)(()=>a.map((e,t)=>{const{result:a,loading:o}=e,r=n[t][0],i=n[t][1];if(o)return[fc.LOADING,null];if(!r||!i||r.equals(i))return[fc.INVALID,null];if(!a)return[fc.NOT_EXISTS,null];const{reserve0:l,reserve1:s}=a,[c,d]=r.sortsBefore(i)?[r,i]:[i,r];return[fc.EXISTS,new u.Pair(new u.TokenAmount(c,l.toString()),new u.TokenAmount(d,s.toString()))]}),[a,n])}function gc(e,t){return bc([[e,t]])[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(fc||(fc={}));var yc=n(187);function hc(){const{search:e}=Object(de.g)();return Object(o.useMemo)(()=>e&&e.length>1?Object(jl.parse)(e,{parseArrays:!1,ignoreQueryPrefix:!0}):{},[e])}let vc;!function(e){e.v1="v1",e.v2="v2"}(vc||(vc={}));const xc=vc.v2;function Ec(){const{use:e}=hc();return e&&"string"===typeof e?"v1"===e.toLowerCase()?vc.v1:xc:vc.v2}function wc(e){const t=Yt(),n=Object(o.useMemo)(()=>e?e.map(ft).filter(e=>!1!==e).sort():[],[e]),a=et(t,"getEthBalance",n.map(e=>[e]));return Object(o.useMemo)(()=>n.reduce((e,t,n)=>{var o,r;const i=null===a||void 0===a||null===(o=a[n])||void 0===o||null===(r=o.result)||void 0===r?void 0:r[0];return i&&(e[t]=u.CurrencyAmount.ether(u.JSBI.BigInt(i.toString()))),e},{}),[n,a])}function Ac(e,t){const n=Object(o.useMemo)(()=>{var e;return null!==(e=null===t||void 0===t?void 0:t.filter(e=>!1!==ft(null===e||void 0===e?void 0:e.address)))&&void 0!==e?e:[]},[t]),a=tt(Object(o.useMemo)(()=>n.map(e=>e.address),[n]),Rt,"balanceOf",[e]),r=Object(o.useMemo)(()=>a.some(e=>e.loading),[a]);return[Object(o.useMemo)(()=>e&&n.length>0?n.reduce((e,t,n)=>{var o,r;const i=null===a||void 0===a||null===(o=a[n])||void 0===o||null===(r=o.result)||void 0===r?void 0:r[0],l=i?u.JSBI.BigInt(i.toString()):void 0;return l&&(e[t.address]=new u.TokenAmount(t,l)),e},{}):{},[e,n,a]),r]}function kc(e,t){return Ac(e,t)[0]}function Cc(e,t){const n=kc(e,[t]);if(t)return n[t.address]}function Sc(e,t){const n=Object(o.useMemo)(()=>{var e;return null!==(e=null===t||void 0===t?void 0:t.filter(e=>e instanceof u.Token))&&void 0!==e?e:[]},[t]),a=kc(e,n),r=wc(Object(o.useMemo)(()=>{var e;return null!==(e=null===t||void 0===t?void 0:t.some(e=>e===u.ETHER))&&void 0!==e&&e},[t])?[e]:[]);return Object(o.useMemo)(()=>{var n;return null!==(n=null===t||void 0===t?void 0:t.map(t=>{if(e&&t)return t instanceof u.Token?a[t.address]:t===u.ETHER?r[e]:void 0}))&&void 0!==n?n:[]},[e,t,r,a])}function Oc(e,t){return Sc(e,[t])[0]}function Ic(e){var t,n;return null===(t=nt(Wt(),"getExchange",Object(o.useMemo)(()=>[e],[e])))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0]}class Tc extends u.Pair{constructor(e,t){super(t,new u.TokenAmount(u.WKSX[t.token.chainId],e))}}function jc(e){const t=e instanceof u.Token?e:void 0,n=Ic(Boolean(t&&t.equals(u.WKSX[t.chainId]))||null===t||void 0===t?void 0:t.address),a=Cc(n,t),r=wc([n])[null!==n&&void 0!==n?n:""];return Object(o.useMemo)(()=>t&&a&&r&&e?new Tc(r.raw,a):void 0,[r,e,t,a])}function Nc(){const e=Rn(),t=Wt(),n=Object(o.useMemo)(()=>Object.keys(e).map(e=>[e]),[e]),a=et(t,"getExchange",n,Je);return Object(o.useMemo)(()=>{var t;return null!==(t=null===a||void 0===a?void 0:a.reduce((t,a,o)=>{let{result:r}=a;return(null===r||void 0===r?void 0:r[0])&&r[0]!==rt.a&&(t[r[0]]=e[n[o][0]]),t},{}))&&void 0!==t?t:{}},[e,n,a])}function Rc(e){var t,n;const a=null===e||void 0===e||null===(t=e.route)||void 0===t||null===(n=t.pairs)||void 0===n?void 0:n.some(e=>e instanceof Tc);return a?vc.v1:!1===a?vc.v2:void 0}function Bc(e){return Ic(Object(o.useMemo)(()=>{if(!e)return;return Rc(e)===vc.v1?e.inputAmount instanceof u.TokenAmount?e.inputAmount.token.address:e.outputAmount instanceof u.TokenAmount?e.outputAmount.token.address:void 0:void 0},[e]))}const Uc=new u.Percent("0"),Pc=new u.Percent("1");function Fc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Uc;if(e&&!t)return!1;if(t&&!e)return!0;if(e&&t){if(e.tradeType!==t.tradeType||!Object(u.currencyEquals)(e.inputAmount.currency,t.inputAmount.currency)||!Object(u.currencyEquals)(t.outputAmount.currency,t.outputAmount.currency))throw new Error("Trades are not comparable");return n.equalTo(Uc)?e.executionPrice.lessThan(t.executionPrice):e.executionPrice.raw.multiply(n.add(Pc)).lessThan(t.executionPrice)}}let Mc;!function(e){e.INPUT="INPUT",e.OUTPUT="OUTPUT"}(Mc||(Mc={}));const Dc=Object(Se.b)("swap/selectCurrency"),Lc=Object(Se.b)("swap/switchCurrencies"),zc=Object(Se.b)("swap/typeInput"),Xc=Object(Se.b)("swap/replaceSwapState"),Wc=Object(Se.b)("swap/setRecipient"),Hc=new u.Percent(u.JSBI.BigInt(30),u.JSBI.BigInt(1e4)),qc=new u.Percent(u.JSBI.BigInt(1e4),u.JSBI.BigInt(1e4)),Vc=qc.subtract(Hc);function Kc(e){const t=e?qc.subtract(e.route.pairs.reduce(e=>e.multiply(Vc),qc)):void 0,n=e&&t?e.priceImpact.subtract(t):void 0;return{priceImpactWithoutFee:n?new u.Percent(null===n||void 0===n?void 0:n.numerator,null===n||void 0===n?void 0:n.denominator):void 0,realizedLPFee:t&&e&&(e.inputAmount instanceof u.TokenAmount?new u.TokenAmount(e.inputAmount.token,t.multiply(e.inputAmount.raw).quotient):u.CurrencyAmount.ether(t.multiply(e.inputAmount.raw).quotient))}}function Yc(e,t){const n=(a=t,new u.Percent(u.JSBI.BigInt(a),u.JSBI.BigInt(1e4)));var a;return{[Mc.INPUT]:null===e||void 0===e?void 0:e.maximumAmountIn(n),[Mc.OUTPUT]:null===e||void 0===e?void 0:e.minimumAmountOut(n)}}function _c(e){return(null===e||void 0===e?void 0:e.lessThan(ee))?(null===e||void 0===e?void 0:e.lessThan(G))?(null===e||void 0===e?void 0:e.lessThan($))?(null===e||void 0===e?void 0:e.lessThan(Q))?0:1:2:3:4}let Jc,Qc;function $c(e,t){const{account:n}=be(),a=e instanceof u.TokenAmount?e.token:void 0,r=function(e,t,n){const a=nt(qt(null===e||void 0===e?void 0:e.address,!1),"allowance",Object(o.useMemo)(()=>[t,n],[t,n])).result;return Object(o.useMemo)(()=>e&&a?new u.TokenAmount(e,a.toString()):void 0,[e,a])}(a,null!==n&&void 0!==n?n:void 0,t),i=function(e,t){const n=tn();return Object(o.useMemo)(()=>"string"===typeof e&&"string"===typeof t&&Object.keys(n).some(a=>{const o=n[a];if(!o)return!1;if(o.receipt)return!1;{const n=o.approval;return!!n&&(n.spender===t&&n.tokenAddress===e&&an(o))}}),[n,t,e])}(null===a||void 0===a?void 0:a.address,t),l=Object(o.useMemo)(()=>e&&t?e.currency===u.ETHER?Jc.APPROVED:r?r.lessThan(e)?i?Jc.PENDING:Jc.NOT_APPROVED:Jc.APPROVED:Jc.UNKNOWN:Jc.UNKNOWN,[e,r,i,t]),s=qt(null===a||void 0===a?void 0:a.address),c=en(),d=Object(o.useCallback)(async()=>{if(l!==Jc.NOT_APPROVED)return void console.error("approve was called unnecessarily");if(!a)return void console.error("no token");if(!s)return void console.error("tokenContract is null");if(!e)return void console.error("missing amount to approve");if(!t)return void console.error("no spender");let n=!1;const o=await s.estimateGas.approve(t,yc.b).catch(()=>(n=!0,s.estimateGas.approve(t,e.raw.toString())));return s.approve(t,n?e.raw.toString():yc.b,{gasLimit:ht(o)}).then(n=>{c(n,{summary:"Approve "+e.currency.symbol,approval:{tokenAddress:a.address,spender:t}})}).catch(e=>{throw console.debug("Failed to approve token",e),e})},[l,a,s,e,t,c]);return[l,d]}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(Jc||(Jc={})),function(e){e.CURRENCY_A="CURRENCY_A",e.CURRENCY_B="CURRENCY_B"}(Qc||(Qc={}));const Gc=Object(Se.b)("mint/typeInputMint"),Zc=Object(Se.b)("mint/resetMintState");function ed(e){var t,n;const a=null===(t=nt(qt(null===e||void 0===e?void 0:e.address,!1),"totalSupply"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0];return e&&a?new u.TokenAmount(e,a.toString()):void 0}function td(e){var t,n,a;const r=_t(e,200),i=Object(o.useMemo)(()=>{if(!r)return[void 0];try{return r?[Object(Ce.namehash)(r)]:[void 0]}catch(e){return[void 0]}},[r]),l=nt(Vt(!1),"resolver",i),s=null===(t=l.result)||void 0===t?void 0:t[0],c=nt(Kt(s&&!kt(s)?s:void 0,!1),"addr",i),d=r!==e;return{address:d?null:null!==(n=null===(a=c.result)||void 0===a?void 0:a[0])&&void 0!==n?n:null,loading:d||l.loading||c.loading}}function nd(e){const t=ft(e),n=Jt(t||void 0),a=td(e);return{loading:n.loading||a.loading,address:t||a.address,name:n.ENSName?n.ENSName:!t&&a.address&&e||null}}var ad=n(157);function od(e,t){const{chainId:n}=be(),a=n?W[n]:[],[r,i]=n?[dc(e,n),dc(t,n)]:[void 0,void 0],l=Object(o.useMemo)(()=>kn()(a,e=>a.map(t=>[e,t])).filter(e=>{let[t,n]=e;return t.address!==n.address}),[a]),s=bc(Object(o.useMemo)(()=>r&&i?[[r,i],...a.map(e=>[r,e]),...a.map(e=>[i,e]),...l].filter(e=>Boolean(e[0]&&e[1])).filter(e=>{let[t,n]=e;return t.address!==n.address}).filter(e=>{let[t,a]=e;if(!n)return!0;const o=H[n];if(!o)return!0;const r=o[t.address],i=o[a.address];return!r&&!i||!(r&&!r.find(e=>a.equals(e)))&&!(i&&!i.find(e=>t.equals(e)))}):[],[r,i,a,l,n]));return Object(o.useMemo)(()=>Object.values(s.filter(e=>Boolean(e[0]===fc.EXISTS&&e[1])).reduce((e,t)=>{var n;let[,a]=t;return e[a.liquidityToken.address]=null!==(n=e[a.liquidityToken.address])&&void 0!==n?n:a,e},{})),[s])}function rd(){return Object(d.c)(e=>e.swap)}function id(e,t){if(e&&t)try{const n=Object(ad.parseUnits)(e,t.decimals).toString();if("0"!==n)return t instanceof u.Token?new u.TokenAmount(t,u.JSBI.BigInt(n)):u.CurrencyAmount.ether(u.JSBI.BigInt(n))}catch(n){console.debug(`Failed to parse input amount: "${e}"`,n)}}const ld=["0xD78DdE1Ecc234335A06a1047263c3101f47B7959","0xC1123cA6E07dD41123926866Ec72dbAF7be9D487"];function sd(e,t){return e.route.path.some(e=>e.address===t)||e.route.pairs.some(e=>e.liquidityToken.address===t)}function cd(){var e,t;const{account:n}=be(),a=Ec(),{independentField:r,typedValue:i,[Mc.INPUT]:{currencyId:l},[Mc.OUTPUT]:{currencyId:s},recipient:c}=rd(),d=Fn(l),m=Fn(s),p=nd(null!==c&&void 0!==c?c:void 0),f=null!==(e=null===c?n:p.address)&&void 0!==e?e:null,b=Sc(null!==n&&void 0!==n?n:void 0,[null!==d&&void 0!==d?d:void 0,null!==m&&void 0!==m?m:void 0]),g=r===Mc.INPUT,y=id(i,null!==(t=g?d:m)&&void 0!==t?t:void 0),h=function(e,t){const n=od(null===e||void 0===e?void 0:e.currency,t);return Object(o.useMemo)(()=>{var a;return e&&t&&n.length>0&&null!==(a=u.Trade.bestTradeExactIn(n,e,t,{maxHops:3,maxNumResults:1})[0])&&void 0!==a?a:null},[n,e,t])}(g?y:void 0,null!==m&&void 0!==m?m:void 0),v=function(e,t){const n=od(e,null===t||void 0===t?void 0:t.currency);return Object(o.useMemo)(()=>{var a;return e&&t&&n.length>0&&null!==(a=u.Trade.bestTradeExactOut(n,e,t,{maxHops:3,maxNumResults:1})[0])&&void 0!==a?a:null},[n,e,t])}(null!==d&&void 0!==d?d:void 0,g?void 0:y),x=g?h:v,E={[Mc.INPUT]:b[0],[Mc.OUTPUT]:b[1]},w={[Mc.INPUT]:null!==d&&void 0!==d?d:void 0,[Mc.OUTPUT]:null!==m&&void 0!==m?m:void 0},A=function(e,t,n,a){const o=jc(t),r=jc(n),i=t===u.ETHER,l=n===u.ETHER;let s=[];i&&r?s=[r]:l&&o?s=[o]:o&&r&&(s=[o,r]);const c=t&&s&&s.length>0&&new u.Route(s,t,n);let d;try{d=c&&a?new u.Trade(c,a,e?u.TradeType.EXACT_INPUT:u.TradeType.EXACT_OUTPUT):void 0}catch(m){console.debug("Failed to create V1 trade",m)}return d}(g,w[Mc.INPUT],w[Mc.OUTPUT],y);let k;var C,S;(n||(k="Connect Wallet"),y)||(k=null!==(C=k)&&void 0!==C?C:"Enter an amount");w[Mc.INPUT]&&w[Mc.OUTPUT]||(k=null!==(S=k)&&void 0!==S?S:"Select a token");const O=ft(f);var I,T;f&&O?(-1!==ld.indexOf(O)||h&&sd(h,O)||v&&sd(v,O))&&(k=null!==(I=k)&&void 0!==I?I:"Invalid recipient"):k=null!==(T=k)&&void 0!==T?T:"Enter a recipient";const[j]=Qn(),N=x&&j&&Yc(x,j),R=A&&j&&Yc(A,j),[B,U]=[E[Mc.INPUT],a===vc.v1?R?R[Mc.INPUT]:null:N?N[Mc.INPUT]:null];return B&&U&&B.lessThan(U)&&(k="Insufficient "+U.currency.symbol+" balance"),{currencies:w,currencyBalances:E,parsedAmount:y,v2Trade:null!==x&&void 0!==x?x:void 0,inputError:k,v1Trade:A}}function dd(e){if("string"===typeof e){const t=ft(e);if(t)return t;if("KSX"===e.toUpperCase())return"KSX";if(!1===t)return"KSX"}return null!=="KSX"?"KSX":""}function ud(e){return"string"===typeof e&&"output"===e.toLowerCase()?Mc.OUTPUT:Mc.INPUT}const md=/^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,pd=/^0x[a-fA-F0-9]{40}$/;function fd(e){let t=dd(e.inputCurrency),n=dd(e.outputCurrency);t===n&&("string"===typeof e.outputCurrency?t="":n="");const a=function(e){if("string"!==typeof e)return null;const t=ft(e);return t||(md.test(e)||pd.test(e)?e:null)}(e.recipient);return{[Mc.INPUT]:{currencyId:t},[Mc.OUTPUT]:{currencyId:n},typedValue:(o=e.exactAmount,"string"!==typeof o||isNaN(parseFloat(o))?"":o),independentField:ud(e.exactField),recipient:a};var o}const bd=u.JSBI.BigInt(0);function gd(){return Object(d.c)(e=>e.mint)}function yd(e){if(e)return e.currency===u.ETHER?u.JSBI.greaterThan(e.raw,te)?u.CurrencyAmount.ether(u.JSBI.subtract(e.raw,te)):u.CurrencyAmount.ether(u.JSBI.BigInt(0)):e}const hd=ue.default.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  background: #f1f5fb;
  background: rgba(250, 250, 250, 0.5);
  border-radius: 24px;
  border: 1px solid #ffffff;
`;function vd(e){let{children:t,...n}=e;return r.a.createElement(hd,n,t)}const xd=ue.default.div`
  position: relative;
`,Ed=Object(ue.default)(na.a)`
  :hover {
    cursor: pointer;
  }
  color: ${e=>{let{theme:t}=e;return t.primary1}};
`,wd=ue.default.button`
  background: #E2FFFA;
  border-radius: 8px;
  font-size: 13px;
  line-height: 16px;
  padding: 6px 16px;
  border: none;
  outline: none;
  font-weight: 500;
  color: #38DCBF;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    padding: 0.25rem 0.5rem;
  `}};
  cursor: pointer;
  margin: ${e=>{let{margin:t}=e;return t||"0.25rem"}};
  overflow: hidden;
  :hover {
    //border: 1px solid ${e=>{let{theme:t}=e;return t.primary1}};
  }
  :focus {
    //border: 1px solid ${e=>{let{theme:t}=e;return t.primary1}};
    background: #48e8cc;
    font-weight: 600;
    color: #ffffff;
  }
`,Ad=ue.default.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,kd=ue.default.div`
  display: flex;
  position: relative;
  > div:nth-child(1) {
    width: 100%;
  }
  > div:nth-child(2) {
    width: fit-content;
    position: absolute;
    //right: 16px;
    //top: 16px;
    transform: translate(50%, 50%);
    right: 42px;
    z-index: 101;
  }
`;var Cd=r.a.memo(e=>{let{poolPriceInfoList:t,fontSizeOfPrice:n,fontSizeOfName:a}=e;return r.a.createElement(gi,{gap:"md"},r.a.createElement(hn,{justify:"space-around",gap:"4px"},t.map(e=>r.a.createElement(gi,{key:e.name,style:{width:"auto"},justify:"center"},r.a.createElement(Aa.black,{fontSize:n,fontWeight:600,color:"#281071"},e.price),r.a.createElement(na.a,{fontWeight:500,fontSize:a,color:"#988EB7",pt:1},e.name)))))});var Sd=r.a.memo(e=>{let{header:t,poolPriceInfoList:n,fontSizeOfPrice:a,fontSizeOfName:o}=e;return r.a.createElement(Dl,{padding:"0px",borderRadius:"20px"},r.a.createElement(yn,{padding:"1rem"},t)," ",r.a.createElement(Ll,{padding:"1rem",borderRadius:"20px"},r.a.createElement(Cd,{poolPriceInfoList:n,fontSizeOfPrice:a,fontSizeOfName:o})))});const Od=ue.default.div`
  position: relative;
`,Id=ue.default.div`
  padding: 2px;

  ${e=>{let{clickable:t}=e;return t?ue.css`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `:null}}
`,Td=ue.default.div`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  border: 0.5px solid #ffffff;
  margin: 6px 0;
`,jd=ue.default.div`
  margin-top: 16px;
`,Nd=Object(ue.default)(na.a)`
  color: ${e=>{let{theme:t,severity:n}=e;return 3===n||4===n?t.red1:2===n?t.yellow2:1===n?"#281071":"#48E8CC"}};
`,Rd=ue.default.button`
  height: 20px;
  width: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.bg2}};
  border: none;
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 0.875rem;
  font-weight: 400;
  margin-left: 0.4rem;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.text2}};
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;

  :hover {
    background-color: ${e=>{let{theme:t}=e;return t.bg3}};
  }
  :focus {
    background-color: ${e=>{let{theme:t}=e;return t.bg3}};
    outline: none;
  }
`,Bd=(Object(ue.default)(na.a)`
  text-overflow: ellipsis;
  width: 220px;
  overflow: hidden;
`,ue.default.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`),Ud=ue.default.div`
  background-color: ${e=>{let{theme:t}=e;return Object(aa.c)(.9,t.red1)}};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${e=>{let{theme:t}=e;return t.red1}};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`,Pd=ue.default.div`
  background-color: ${e=>{let{theme:t}=e;return Object(aa.c)(.9,t.red1)}};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`;function Fd(e){let{error:t}=e;return r.a.createElement(Ud,null,r.a.createElement(Pd,null,r.a.createElement("img",{src:as.a,alt:"",style:{width:"24px"}})),r.a.createElement("p",null,t))}const Md=Object(ue.default)(gi)`
  background-color: ${e=>{let{theme:t}=e;return Object(aa.c)(.9,t.primary1)}};
  color: ${e=>{let{theme:t}=e;return t.primary1}};
  padding: 0.5rem;
  border-radius: 12px;
  margin-top: 8px;
  border: 1px solid #ffffff;
`,Dd=ue.default.div`
  margin: ${e=>{let{padding:t}=e;return t||"0 0 16px;"}};
  background: #c9c8e7;
  border-radius: ${e=>{let{border:t}=e;return t||"24px"}};
  border: 1px solid #ffffff;
  padding: 14px 16px;
`,Ld=ue.default.span`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  line-height: 17px;
`,zd=ue.default.span`
  font-size: 14px;
  font-weight: 500;
  color: #3b199f;
  line-height: 17px;
  margin-left: 8px;
`,Xd=ue.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;var Wd=n(1212);var Hd=e=>{let{isInverted:t,toggleInverted:n,price:a,priceInvert:i,currencySymbolA:l,currencySymbolB:s}=e;const c=Object(o.useMemo)(()=>t?`${a} ${s} = 1 ${l}`:`${i} ${l} = 1 ${s}`,[t,i,a,l,s]);return r.a.createElement(Ld,{style:{width:"100%"}},r.a.createElement(yn,{padding:"0"},r.a.createElement(na.a,{style:{display:"flex",alignItems:"center"}},"Price",r.a.createElement(Rd,{onClick:n},r.a.createElement(Wd.a,{size:14}))),r.a.createElement(na.a,{style:{whiteSpace:"nowrap"}},c)))};const qd=e=>{let{allowedSlippagePercent:t}=e;return r.a.createElement(Aa.italic,{fontSize:12,textAlign:"left",padding:"16px 16px 0 16px"},`Output is estimated. If the price changes by more than ${t} your transaction will revert.`)};function Vd(e){var t,n;let{noLiquidity:a,price:i,currencies:l,parsedAmounts:s,poolTokenPercentage:c,onAdd:d,allowedSlippage:u}=e;const[m,p]=Object(o.useState)(!0),f=Object(o.useMemo)(()=>{var e,t,n,o;return[{price:null===(e=s[Qc.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6),name:(null===(t=l[Qc.CURRENCY_A])||void 0===t?void 0:t.symbol)+" Deposited"},{price:null===(n=s[Qc.CURRENCY_B])||void 0===n?void 0:n.toSignificant(6),name:(null===(o=l[Qc.CURRENCY_B])||void 0===o?void 0:o.symbol)+" Deposited"},{price:(a?"100":null===c||void 0===c?void 0:c.toSignificant(4))+"%",name:"Share of Pool"}]},[s,l,a,c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Sd,{header:r.a.createElement(r.a.Fragment,null,r.a.createElement(Hd,{isInverted:m,toggleInverted:()=>p(e=>!e),price:null===i||void 0===i?void 0:i.toSignificant(6),priceInvert:null===i||void 0===i?void 0:i.invert().toSignificant(6),currencySymbolA:null===(t=l[Qc.CURRENCY_A])||void 0===t?void 0:t.symbol,currencySymbolB:null===(n=l[Qc.CURRENCY_B])||void 0===n?void 0:n.symbol})),poolPriceInfoList:f,fontSizeOfPrice:16,fontSizeOfName:14}),!a&&r.a.createElement(qd,{allowedSlippagePercent:u/100+"%"}),r.a.createElement(er,{style:{margin:"20px 0 0 0"},onClick:d},r.a.createElement(na.a,{fontWeight:500,fontSize:20},a?"Create Pool & Supply":"Confirm Supply")))}function Kd(e){if(e===u.ETHER)return"KSX";if(e instanceof u.Token)return e.address;throw new Error("invalid currency")}const Yd=ue.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  > div:nth-child(1) {
    margin-bottom: 2px;
    z-index: 1;
    position: relative;
  }
`,_d=ue.default.div`
  ${e=>{let{position:t}=e;return t||"justify-content:center;"}}
  display: flex;
  flex-direction: row;
  position: ${e=>{let{isExpect:t}=e;return t?"relative":"absolute;"}}
  z-index: 2;
  width: 100%;
  align-items: center;
  ${e=>{let{isExpect:t}=e;return t&&"padding:12px 0;"}}
  ${e=>{let{isExpect:t}=e;return!t&&"transform: translateY(-50%);"}}
`,Jd=ue.default.div`
  border-radius: 20px;
  border: 2px solid white;
  background-color: white;
  :focus,
  :active,
  :hover {
    border: 2px solid rgba(109, 78, 201, 0.57);
  }
`,Qd=ue.default.div`
  background: #ffffff;
  border-radius: 12px;
  border: 2px solid #e3e7f9;
  width: fit-content;
  display: flex;
  justify-content: center;
  padding: 8px;
  :hover {
    border: 2px solid #e3e7f9;
    ${e=>{let{canChangeSwitchIcon:t}=e;return t&&"background: #b5adff; cursor: pointer;"}}
  }
  > svg {
    width: 17px;
  }
`;function $d(e){let{topBox:t,bottomBox:n,switchIcon:a,switchIconPosition:o,switchContent:i,onMouseLeave:l,onMouseOver:s,canChangeSwitchIcon:c,onClick:d}=e;return r.a.createElement(Yd,null,r.a.createElement(Jd,null,t,!i&&a&&r.a.createElement(_d,{position:o},r.a.createElement(Qd,{onClick:d,canChangeSwitchIcon:c,onMouseLeave:l,onMouseOver:s},a))),a&&i&&r.a.createElement(_d,{position:o,isExpect:!0},r.a.createElement(Qd,{onClick:d,canChangeSwitchIcon:c,onMouseLeave:l,onMouseOver:s},a),i),r.a.createElement(Jd,null,n))}const Gd=ue.default.input`
  color: #281071;
  width: 0;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: ${e=>{let{theme:t}=e;return t.bg1}};
  font-size: ${e=>{let{fontSize:t}=e;return null!==t&&void 0!==t?t:"24px"}};
  text-align: ${e=>{let{align:t}=e;return t&&t}};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  -webkit-appearance: textfield;
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.text4}};
  }
`,Zd=RegExp("^\\d*(?:\\\\[.])?\\d*$"),eu=r.a.memo((function(e){let{value:t,onUserInput:n,placeholder:a,...o}=e;return r.a.createElement(Gd,Object.assign({},o,{value:t,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,"."))||Zd.test(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")))&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:a||"0.0",minLength:1,maxLength:79,spellCheck:"false"}))}));var tu=eu;const nu=ue.default.button`
  background-color: #e2fffa;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 12px;
  padding: 5px 8px;
  font-weight: 500;
  cursor: pointer;
  color: #48e8cc;
  margin-left: 8px;
`,au=ue.default.span`
  font-size: 14px;
  font-weight: 500;
  color: #3B199F;
  line-height: 17px;
`,ou=ue.default.span`
  font-size: 14px;
  font-weight: 500;
  color: #988EB7;
  line-height: 17px;
`;var ru=n(666),iu=n.n(ru),lu=n(667),su=n.n(lu);const cu=ue.default.button`
  align-items: center;
  height: 2.2rem;
  font-size: 20px;
  font-weight: 500;
  background-color: ${e=>{let{purpleSelect:t}=e;return t||"#f5f6f9"}};
  border-radius: 16px;
  outline: none;
  cursor: pointer;
  // cursor: ${e=>{let{selectPointer:t}=e;return t?"pointer":""}}pointer;
  user-select: none;
  user-select: none;
  border: none;
  padding: 0 0.5rem;

  :hover {
    background-color: ${e=>{let{purpleSelect:t}=e;return t?"#908ACC":"#EAEAF3"}};
  }
`,du=ue.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,uu=ue.default.span`
  margin: 0 6px;
  font-size: 18px;
  color: ${e=>{let{isSelected:t}=e;return t?"#281071":"#FFFFFF"}};
`;function mu(e){let{backgroundPurple:t,onClick:n,currency:a,disableCurrencySelect:i,pair:l,currencySymbol:s,showOptionsList:c}=e;const d=Object(o.useCallback)(()=>{let e="";return e=s&&s.length>20?s.slice(0,4)+"..."+s.slice(s.length-5,s.length):s,e},[s]);return r.a.createElement(cu,{purpleSelect:t&&"#B5ADFF",className:"open-currency-select-button",onClick:n,selectPointer:i},r.a.createElement(du,null,l?r.a.createElement(Ws,{currency0:l.token0,currency1:l.token1,size:24,margin:!0}):a&&(null===a||void 0===a?void 0:a.logoURI)?r.a.createElement("img",{src:null===a||void 0===a?void 0:a.logoURI,alt:"",style:{width:"24px"}}):r.a.createElement(r.a.Fragment,null,(null===a||void 0===a?void 0:a.symbol)&&!(null===a||void 0===a?void 0:a.icon)&&r.a.createElement(Ds,{currency:a,size:"24px"}),(null===a||void 0===a?void 0:a.icon)&&r.a.createElement("img",{src:null===a||void 0===a?void 0:a.icon,alt:"",style:{width:"24px"}})),l?r.a.createElement(uu,null,null===l||void 0===l?void 0:l.token0.symbol,":",null===l||void 0===l?void 0:l.token1.symbol):r.a.createElement(uu,{isSelected:d()},d()||"select a token"),c&&r.a.createElement("img",{src:d()?iu.a:su.a,alt:""})))}function pu(e,t){const[n,a]=Object(o.useState)(t&&t(e)?e:void 0);return Object(o.useEffect)(()=>{a(n=>!t||t(e)?e:n)},[t,e]),n}var fu=n(1225),bu=n(244),gu=n.n(bu),yu=n(668),hu=n(669);new(n.n(hu).a)({allErrors:!0}).compile(yu);const vu=[{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"resolver",outputs:[{name:"resolverAddress",type:"address"}],payable:!1,stateMutability:"view",type:"function"}],xu=[{constant:!0,inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"contenthash",outputs:[{internalType:"bytes",name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"}];async function Eu(e,t){const n=new at.Contract("0xc6E6752F9829579C9753B197Ea0893D10d2A0E83",vu,t),a=Object(Ce.namehash)(e);return function(e,t){return new at.Contract(e,xu,t)}(await n.resolver(a),t).contenthash(a)}function wu(){const{chainId:e,library:t}=be(),n=Object(d.b)(),a=Object(o.useCallback)(n=>{if(!t||e!==u.ChainId.SHERPAX){if(I===u.ChainId.SHERPAX){const e=function(){var e;return j=null!==(e=j)&&void 0!==e?e:new m.a(T.provider)}();if(e)return Eu(n,e)}throw new Error("Could not construct mainnet ENS resolver")}return Eu(n,t)},[e,t]);return Object(o.useCallback)(async e=>{const t=Object(Se.e)();return n(rl.pending({requestId:t,url:e})),async function(e,t){const n=Is(e);let a;if(n){var o;let e,i;try{e=await t(n.ensName)}catch(r){throw console.debug("Failed to resolve ENS name: "+n.ensName,r),new Error("Failed to resolve ENS name: "+n.ensName)}try{i=Ss(e)}catch(r){throw console.debug("Failed to translate contenthash to URI",e),new Error("Failed to translate contenthash to URI: "+e)}a=Ts(`${i}${null!==(o=n.ensPath)&&void 0!==o?o:""}`)}else a=Ts(e);for(let i=0;i<a.length;i++){const t=a[i],n=i===a.length-1;let o;try{o=await fetch(t)}catch(r){if(console.debug("Failed to fetch list",e,r),n)throw new Error("Failed to download list "+e);continue}if(!o.ok){if(n)throw new Error("Failed to download list "+e);continue}return await o.json()}throw new Error("Unrecognized list URL protocol.")}(e,a).then(a=>(n(rl.fulfilled({url:e,tokenList:a,requestId:t})),a)).catch(a=>{throw console.debug("Failed to get list at url "+e,a),n(rl.rejected({url:e,requestId:t,errorMessage:a.message})),a})},[n,a])}function Au(e,t){const n=Object(o.useRef)(t);Object(o.useEffect)(()=>{n.current=t},[t]),Object(o.useEffect)(()=>{const t=t=>{var a,o;null!==(a=null===(o=e.current)||void 0===o?void 0:o.contains(t.target))&&void 0!==a&&a||n.current&&n.current()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[e])}const ku=Object(ue.default)(Bs)`
  width: ${e=>{let{size:t}=e;return t}};
  height: ${e=>{let{size:t}=e;return t}};
`;function Cu(e){let{logoURI:t,style:n,size:a="24px",alt:o}=e;const i=js(t);return r.a.createElement(ku,{alt:o,size:a,srcs:i,style:n})}ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  padding: 1rem 1rem;
  margin: 0.25rem 0.5rem;
  justify-content: center;
  flex: 1;
  user-select: none;
`;const Su=Object(ue.default)(vn)`
  color: ${e=>{let{theme:t}=e;return t.primary1}};
  font-size: 14px;
`,Ou=Object(ue.default)(gi)`
  padding: 20px;
  padding-bottom: 12px;

  &.currency-search {
    padding: 16px 24px 24px 24px;
    border-bottom: 1px solid #E8EAF1;
  }
`,Iu=Object(ue.default)(yn)`
  padding: 4px 24px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);
  grid-gap: 16px;
  cursor: ${e=>{let{disabled:t}=e;return!t&&"pointer"}};
  pointer-events: ${e=>{let{disabled:t}=e;return t&&"none"}};
  :hover {
    background-color: white;
  }
  opacity: ${e=>{let{disabled:t,selected:n}=e;return t||n?.5:1}};
`,Tu=ue.default.input`
  position: relative;
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.text1}};
  border: none;
  outline: 1px solid ${e=>{let{theme:t}=e;return t.bg3}};
  -webkit-appearance: none;
  font-size: 18px;
  transition: outline-color 0.1s ease-out, background-color 0.7s ease-out;
  box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);

  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.text3}};
  }
  :focus {
    outline: 2px solid #6d4ec9;
  }
`,ju=ue.default.div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.bg2}};
`,Nu=(ue.default.div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.bg3}};
`,Object(ue.default)(la)`
  padding: 0;
  font-size: 1rem;
  opacity: ${e=>{let{disabled:t}=e;return t?"0.4":"1"}};
`),Ru=ue.default.div`
  z-index: 100;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?1:0};
  transition: visibility 150ms linear, opacity 150ms linear;
  background: ${e=>{let{theme:t}=e;return t.bg2}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.bg3}};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  color: ${e=>{let{theme:t}=e;return t.text2}};
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 8px;
  font-size: 1rem;
  text-align: left;
`,Bu=ue.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
`,Uu=ue.default.div`
  max-width: 160px;
  opacity: 0.6;
  margin-right: 0.5rem;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;function Pu(e){let{listUrl:t}=e;const n=Object(o.useMemo)(()=>{var e;return null===(e=Is(t))||void 0===e?void 0:e.ensName},[t]),a=Object(o.useMemo)(()=>{if(n)return;const e=t.toLowerCase();if(e.startsWith("ipfs://")||e.startsWith("ipns://"))return t;try{return new URL(t).host}catch(a){return}},[t,n]);return r.a.createElement(r.a.Fragment,null,null!==n&&void 0!==n?n:a)}function Fu(e){return"list-row-"+e.replace(/\./g,"-")}const Mu=Object(o.memo)((function(e){let{listUrl:t,onBack:n}=e;const a=Object(d.c)(e=>e.lists.byUrl),i=jn(),l=Object(d.b)(),{current:s,pendingUpdate:u}=a[t],m=t===i,[p,f]=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const[t,n]=Object(o.useState)(e),a=Object(o.useCallback)(()=>n(e=>!e),[]);return[t,a]}(!1),b=Object(o.useRef)(),[g,y]=Object(o.useState)(),[h,v]=Object(o.useState)(),{styles:x,attributes:E}=Object(fu.a)(g,h,{placement:"auto",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[8,8]}}]});Au(b,p?f:void 0);const w=Object(o.useCallback)(()=>{m||(c.a.event({category:"Lists",action:"Select List",label:t}),l(cl(t)),n())},[l,m,t,n]),A=Object(o.useCallback)(()=>{u&&(c.a.event({category:"Lists",action:"Update List from List Select",label:t}),l(il(t)))},[l,t,u]),k=Object(o.useCallback)(()=>{c.a.event({category:"Lists",action:"Start Remove List",label:t}),"REMOVE"===window.prompt("Please confirm you would like to remove this list by typing REMOVE")&&(c.a.event({category:"Lists",action:"Confirm Remove List",label:t}),l(sl(t)))},[l,t]);return s?r.a.createElement(xn,{key:t,align:"center",padding:"16px",id:Fu(t)},s.logoURI?r.a.createElement(Cu,{style:{marginRight:"1rem"},logoURI:s.logoURI,alt:s.name+" list logo"}):r.a.createElement("div",{style:{width:"24px",height:"24px",marginRight:"1rem"}}),r.a.createElement(yi,{style:{flex:"1"}},r.a.createElement(xn,null,r.a.createElement(na.a,{fontWeight:m?500:400,fontSize:16,style:{overflow:"hidden",textOverflow:"ellipsis"}},s.name)),r.a.createElement(xn,{style:{marginTop:"4px"}},r.a.createElement(Uu,{title:t},r.a.createElement(Pu,{listUrl:t})))),r.a.createElement(Bu,{ref:b},r.a.createElement(or,{style:{width:"2rem",padding:".8rem .35rem",borderRadius:"12px",fontSize:"14px",marginRight:"0.5rem"},onClick:f,ref:y},r.a.createElement("img",{src:gu.a,alt:""})),p&&r.a.createElement(Ru,Object.assign({show:!0,ref:v,style:x.popper},E.popper),r.a.createElement(da,{href:""+t},"View list"),r.a.createElement(Nu,{onClick:k,disabled:1===Object.keys(a).length},"Remove list"),u&&r.a.createElement(Nu,{onClick:A},"Update list"))),m?r.a.createElement(er,{disabled:!0,className:"select-button",style:{width:"5rem",minWidth:"5rem",padding:"0.5rem .35rem",borderRadius:"12px",fontSize:"14px"}},"Selected"):r.a.createElement(r.a.Fragment,null,r.a.createElement(er,{className:"select-button",style:{width:"5rem",minWidth:"4.5rem",padding:"0.5rem .35rem",borderRadius:"12px",fontSize:"14px"},onClick:w},"Select"))):null})),Du=Object(ue.default)(nr)`
  /* height: 1.8rem; */
  max-width: 4rem;
  margin-left: 1rem;
  border-radius: 12px;
  padding: 10px 18px;
`,Lu=ue.default.div`
  flex: 1;
  overflow: auto;
`;function zu(e){var t;let{onDismiss:n,onBack:a}=e;const[i,l]=Object(o.useState)(""),s=Object(d.b)(),u=Object(d.c)(e=>e.lists.byUrl),m=Boolean(null===(t=u[i])||void 0===t?void 0:t.loadingRequestId),[p,f]=Object(o.useState)(null),b=Object(o.useCallback)(e=>{l(e.target.value),f(null)},[]),g=wu(),y=Object(o.useCallback)(()=>{m||(f(null),g(i).then(()=>{l(""),c.a.event({category:"Lists",action:"Add List",label:i})}).catch(e=>{c.a.event({category:"Lists",action:"Add List Failed",label:i}),f(e.message),s(sl(i))}))},[m,s,g,i]),h=Object(o.useMemo)(()=>Ts(i).length>0||Boolean(Is(i)),[i]),v=Object(o.useCallback)(e=>{h&&"Enter"===e.key&&y()},[y,h]),x=Object(o.useMemo)(()=>Object.keys(u).filter(e=>Boolean(u[e].current)).sort((e,t)=>{const{current:n}=u[e],{current:a}=u[t];return n&&a?n.name.toLowerCase()<a.name.toLowerCase()?-1:n.name.toLowerCase()===a.name.toLowerCase()?0:1:n?-1:a?1:0}),[u]);return r.a.createElement(yi,{style:{width:"100%",flex:"1 1"}},r.a.createElement(Ou,null,r.a.createElement(yn,null,r.a.createElement("div",null,r.a.createElement(ra.a,{style:{cursor:"pointer"},onClick:a})),r.a.createElement(na.a,{fontWeight:500,fontSize:20},"Manage Lists"),r.a.createElement(ia,{onClick:n}))),r.a.createElement(ju,null),r.a.createElement(Ou,{gap:"14px"},r.a.createElement(na.a,{fontWeight:600},"Add a list"," ",r.a.createElement(Ys,{text:"Token lists are an open specification for lists of ERC20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious ERC20 tokens."})),r.a.createElement(xn,null,r.a.createElement(Tu,{type:"text",id:"list-add-input",placeholder:"https:// or ipfs:// or ENS name",value:i,onChange:b,onKeyDown:v,style:{height:"2.75rem",borderRadius:12,padding:"12px"}}),r.a.createElement(Du,{onClick:y,disabled:!0},"Add")),p?r.a.createElement(Aa.error,{title:p,style:{textOverflow:"ellipsis",overflow:"hidden"},error:!0},p):null),r.a.createElement(ju,null),r.a.createElement(Lu,null,x.map(e=>r.a.createElement(Mu,{key:e,listUrl:e,onBack:a}))),r.a.createElement(ju,null))}const Xu=ue.default.div`
  border: 1px solid ${e=>{let{disable:t}=e;return t?"#E4E8F2":"#e8eaf1"}};

  border-radius: 16px;
  display: flex;
  padding: 12px 8px;

  align-items: center;
  :hover {
    cursor: ${e=>{let{disable:t}=e;return!t&&"pointer"}};
    background-color: ${e=>{let{disable:t}=e;return!t&&"white"}};
  }

  background-color: ${e=>{let{disable:t}=e;return t&&"#E4E8F2"}};
  // opacity: ${e=>{let{disable:t}=e;return t&&"0.4"}};
`;function Wu(e){let{chainId:t,onSelect:n,selectedCurrency:a}=e;return r.a.createElement(gi,{gap:"md"},r.a.createElement(hn,{gap:"4px"},r.a.createElement(Xu,{onClick:()=>{a&&Object(u.currencyEquals)(a,u.ETHER)||n(u.ETHER)},disable:a===u.ETHER},r.a.createElement(Ds,{currency:u.ETHER,style:{marginRight:8}}),r.a.createElement(na.a,{fontWeight:500,fontSize:16},"KSX")),(t?q[t]:[]).map(e=>{const t=a instanceof u.Token&&a.address===e.address;return r.a.createElement(Xu,{onClick:()=>!t&&n(e),disable:t,key:e.address},r.a.createElement(Ds,{currency:e,style:{marginRight:8}}),r.a.createElement(na.a,{fontWeight:500,fontSize:16},e.symbol))})))}var Hu=n(671);function qu(e){return e instanceof u.Token?e.address:e===u.ETHER?"ETHER":""}const Vu=Object(ue.default)(na.a)`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`,Ku=ue.default.div`
  background-color: ${e=>{let{theme:t}=e;return t.bg3}};
  color: ${e=>{let{theme:t}=e;return t.text2}};
  font-size: 14px;
  border-radius: 4px;
  padding: 0.25rem 0.3rem 0.25rem 0.3rem;
  max-width: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-self: flex-end;
  margin-right: 4px;
`;function Yu(e){let{balance:t}=e;return r.a.createElement(Vu,{title:t.toExact()},t.toSignificant(4))}const _u=ue.default.div`
  display: flex;
  justify-content: flex-end;
`;function Ju(e){let{currency:t}=e;if(!(t instanceof Sn))return r.a.createElement("span",null);const n=t.tags;if(!n||0===n.length)return r.a.createElement("span",null);const a=n[0];return r.a.createElement(_u,null,r.a.createElement(Ks,{content:a.description},r.a.createElement(Ku,{key:a.id},a.name)),n.length>1?r.a.createElement(Ks,{content:n.slice(1).map(e=>{let{name:t,description:n}=e;return`${t}: ${n}`}).join("; \n")},r.a.createElement(Ku,null,"...")):null)}function Qu(e){let{currency:t,onSelect:n,isSelected:a,otherSelected:i,style:l}=e;const{account:s,chainId:c}=be(),m=qu(t),p=At(Nn(),t),f=function(e){return!!Zn().find(t=>Object(u.currencyEquals)(e,t))}(t),b=Oc(null!==s&&void 0!==s?s:void 0,t),g=function(){const e=Object(d.b)();return Object(o.useCallback)((t,n)=>{e(Hn({chainId:t,address:n}))},[e])}(),y=Gn();return r.a.createElement(Iu,{style:l,className:"token-item-"+m,onClick:()=>a?null:n(),disabled:a,selected:i},r.a.createElement(Ds,{currency:t,size:"24px"}),r.a.createElement(yi,null,r.a.createElement(na.a,{title:t.name,fontWeight:500},t.symbol),r.a.createElement(Su,null,!p&&f?r.a.createElement(Aa.main,{fontWeight:500},"Added by user",r.a.createElement(la,{onClick:e=>{e.stopPropagation(),c&&t instanceof u.Token&&g(c,t.address)}},"(Remove)")):null,p||f?null:r.a.createElement(Aa.main,{fontWeight:500},"Found by address",r.a.createElement(la,{onClick:e=>{e.stopPropagation(),t instanceof u.Token&&y(t)}},"(Add)")))),r.a.createElement(Ju,{currency:t}),r.a.createElement(vn,{style:{justifySelf:"flex-end"}},b?r.a.createElement(Yu,{balance:b}):s?r.a.createElement(pn,null):null))}function $u(e){let{height:t,currencies:n,selectedCurrency:a,onCurrencySelect:i,otherCurrency:l,fixedListRef:s,showETH:c}=e;const d=Object(o.useMemo)(()=>c?[u.Currency.ETHER,...n]:n,[n,c]),m=Object(o.useCallback)(e=>{let{data:t,index:n,style:o}=e;const s=t[n],c=Boolean(a&&Object(u.currencyEquals)(a,s)),d=Boolean(l&&Object(u.currencyEquals)(l,s));return r.a.createElement(Qu,{style:o,currency:s,isSelected:c,onSelect:()=>i(s),otherSelected:d})},[i,l,a]),p=Object(o.useCallback)((e,t)=>qu(t[e]),[]);return r.a.createElement(Hu.a,{height:t,ref:s,width:"100%",itemData:d,itemCount:d.length,itemSize:56,itemKey:p},m)}function Gu(e){const t=function(){const{account:e}=be(),t=Rn(),n=kc(null!==e&&void 0!==e?e:void 0,Object(o.useMemo)(()=>Object.values(null!==t&&void 0!==t?t:{}),[t]));return null!==n&&void 0!==n?n:{}}(),n=Object(o.useMemo)(()=>function(e){return function(t,n){const a=function(e,t){return e&&t?e.greaterThan(t)?-1:e.equalTo(t)?0:1:e&&e.greaterThan("0")?-1:t&&t.greaterThan("0")?1:0}(e[t.address],e[n.address]);return 0!==a?a:t.symbol&&n.symbol?t.symbol.toLowerCase()<n.symbol.toLowerCase()?-1:1:t.symbol||n.symbol?-1:0}}(null!==t&&void 0!==t?t:{}),[t]);return Object(o.useMemo)(()=>e?(e,t)=>-1*n(e,t):n,[e,n])}var Zu=n(672);function em(e){let{selectedCurrency:t,onCurrencySelect:n,otherSelectedCurrency:a,showCommonBases:i,onDismiss:l,isOpen:s,onChangeList:m}=e;const{t:p}=Object(oe.b)(),{chainId:f}=be(),b=(Object(o.useContext)(ue.ThemeContext),Object(o.useRef)()),[g,y]=Object(o.useState)(""),[h,v]=Object(o.useState)(!1),x=Rn(),E=ft(g),w=Pn(g);Object(o.useEffect)(()=>{E&&c.a.event({category:"Currency Select",action:"Search by address",label:E})},[E]);const A=Object(o.useMemo)(()=>{const e=g.toLowerCase().trim();return""===e||"e"===e||"et"===e||"eth"===e},[g]),k=Gu(h),C=Object(o.useMemo)(()=>E?w?[w]:[]:function(e,t){if(0===t.length)return e;const n=ft(t);if(n)return e.filter(e=>e.address===n);const a=t.toLowerCase().split(/\s+/).filter(e=>e.length>0);if(0===a.length)return e;const o=e=>{const t=e.toLowerCase().split(/\s+/).filter(e=>e.length>0);return a.every(e=>0===e.length||t.some(t=>t.startsWith(e)||t.endsWith(e)))};return e.filter(e=>{const{symbol:t,name:n}=e;return t&&o(t)||n&&o(n)})}(Object.values(x),g),[E,w,x,g]),S=Object(o.useMemo)(()=>{if(w)return[w];const e=C.sort(k),t=g.toLowerCase().split(/\s+/).filter(e=>e.length>0);return t.length>1?e:[...w?[w]:[],...e.filter(e=>{var n;return(null===(n=e.symbol)||void 0===n?void 0:n.toLowerCase())===t[0]}),...e.filter(e=>{var n;return(null===(n=e.symbol)||void 0===n?void 0:n.toLowerCase())!==t[0]})]},[C,g,w,k]),O=Object(o.useCallback)(e=>{n(e),l()},[l,n]);Object(o.useEffect)(()=>{s&&y("")},[s]);const I=Object(o.useRef)(),T=Object(o.useCallback)(e=>{var t;const n=e.target.value,a=ft(n);y(a||n),null===(t=b.current)||void 0===t||t.scrollTo(0)},[]),j=Object(o.useCallback)(e=>{if("Enter"===e.key){if("eth"===g.toLowerCase().trim())O(u.ETHER);else if(S.length>0){var t;(null===(t=S[0].symbol)||void 0===t?void 0:t.toLowerCase())!==g.trim().toLowerCase()&&1!==S.length||O(S[0])}}},[S,O,g]),N=function(){var e,t;const n=jn(),a=Object(d.c)(e=>e.lists.byUrl),o=n?a[n]:void 0;return{current:null!==(e=null===o||void 0===o?void 0:o.current)&&void 0!==e?e:null,pending:null!==(t=null===o||void 0===o?void 0:o.pendingUpdate)&&void 0!==t?t:null,loading:null!==(null===o||void 0===o?void 0:o.loadingRequestId)}}(),R=Object(d.c)(e=>e.lists.byUrl);return r.a.createElement(yi,{style:{width:"100%",flex:"1 1"}},r.a.createElement(Ou,{className:"currency-search",gap:"16px"},r.a.createElement(Tu,{type:"text",id:"token-search-input",placeholder:"Search name or paste address",value:g,ref:I,onChange:T,onKeyDown:j}),r.a.createElement(Wu,{chainId:f,onSelect:O,selectedCurrency:t})),r.a.createElement(ju,null),r.a.createElement("div",{style:{flex:"1"}},r.a.createElement(Zu.a,{disableWidth:!0},e=>{let{height:n}=e;return r.a.createElement($u,{height:n,showETH:A,currencies:S,onCurrencySelect:O,otherCurrency:a,selectedCurrency:t,fixedListRef:b})})),r.a.createElement(ju,null),r.a.createElement(Bl,{backgroundColor:"#e5e8f1",padding:"10px 24px",borderRadius:"0 0 24px 24px"},r.a.createElement(yn,null,N.current?r.a.createElement(xn,null,N.current.logoURI?r.a.createElement(Cu,{size:"38px",style:{marginRight:12},logoURI:N.current.logoURI,alt:N.current.name+" list logo"}):null,r.a.createElement(Aa.main,{id:"currency-search-selected-list-name"},r.a.createElement(na.a,{fontWeight:500,color:"#3B199F",fontSize:16},N.current.name),r.a.createElement(fa,{fontWeight:400,color:"#ABA5BD",fontSize:14,maxWidth:"163px"},Object.keys(R)[0]))):null,r.a.createElement(da,{href:""+Object.keys(R)[0]},"View\u2197"))))}var tm=e=>{let{isOpen:t,onDismiss:n,onCurrencySelect:a,selectedCurrency:i,otherSelectedCurrency:l,showCommonBases:s=!1}=e;const[u,m]=Object(o.useState)(!1),p=pu(t),f=Object(d.b)();Object(o.useEffect)(()=>{t&&!p&&m(!1)},[t,p]);const b=Object(o.useCallback)(e=>{a(e),n()},[n,a]),g=Object(o.useCallback)(()=>{c.a.event({category:"Lists",action:"Change Lists"}),m(!0)},[]),y=Object(o.useCallback)(()=>{c.a.event({category:"Lists",action:"Back"}),m(!1)},[]);return Object(o.useEffect)(()=>{c.a.event({category:"Lists",action:"Select List",label:"https://raw.githubusercontent.com/RedPillPhil/token-list-1/patch-1/chainx.tokenlist.json"}),f(cl("https://raw.githubusercontent.com/RedPillPhil/token-list-1/patch-1/chainx.tokenlist.json"))},[f]),r.a.createElement(Kr,{className:"currency-search-dialog",bodyStyle:{padding:"0"},title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},"Select a token",r.a.createElement(Ys,{text:"Find a token by searching for its name or symbol or by pasting its address below."})),visible:t,onCancel:n,footer:null,minHeight:"80vh"},u?r.a.createElement(zu,{onDismiss:n,onBack:y}):r.a.createElement(em,{isOpen:t,onDismiss:n,onCurrencySelect:b,onChangeList:g,selectedCurrency:i,otherSelectedCurrency:l,showCommonBases:s}))};var nm=e=>{let{balanceValue:t,balanceOnMax:n,transferAll:a}=e;return r.a.createElement("div",{style:{minHeight:"29px",display:"flex",alignItems:"center"}},r.a.createElement(ou,null,""+(t?"Balance: "+t:" ")),a&&r.a.createElement(nu,{onClick:n},"MAX"))};const am=ue.default.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem 1rem 0.75rem 1rem;
`,om=ue.default.button`
  align-items: center;
  height: 2.2rem;
  font-size: 20px;
  font-weight: 500;
  background-color: #f5f6f9;
  border-radius: 16px;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0 0.5rem;

  :focus,
  :hover {
    background-color: ${e=>{let{purpleSelect:t}=e;return t||"#EAEAF3"}};
  }
`,rm=ue.default.div`
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
  span:hover {
    cursor: pointer;
  }
`,im=ue.default.div``,lm=ue.default.div`
  border-radius: 20px;
`;function sm(e){let{value:t,onUserInput:n,onMax:a,showMaxButton:i,label:l="Input",onCurrencySelect:s,currency:c,disableCurrencySelect:d=!1,hideBalance:u=!1,pair:m=null,hideInput:p=!1,otherCurrency:f,id:b,showCommonBases:g}=e;const[y,h]=Object(o.useState)(!1),{account:v}=be(),x=Oc(null!==v&&void 0!==v?v:void 0,null!==c&&void 0!==c?c:void 0),E=Object(o.useCallback)(()=>{h(!1)},[h]);return r.a.createElement(im,{id:b},r.a.createElement(lm,{hideInput:p},!p&&r.a.createElement(rm,null,r.a.createElement(yn,null,r.a.createElement(au,null,l),v&&r.a.createElement(nm,{balanceValue:!u&&!!c&&x&&(null===x||void 0===x?void 0:x.toSignificant(6)),balanceOnMax:a,transferAll:i}))),r.a.createElement(am,{selected:d},r.a.createElement(mu,{showOptionsList:!0,disableCurrencySelect:d,onClick:()=>{d||h(!0)},pair:m,currency:c,backgroundPurple:!(c&&c.symbol),currencySymbol:c&&c.symbol}),!p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tu,{className:"token-amount-input",value:t,align:"right",onUserInput:e=>{n(e)},style:{maxWidth:"270px"}})))),!d&&s&&r.a.createElement(tm,{isOpen:y,onDismiss:E,onCurrencySelect:s,selectedCurrency:c,otherSelectedCurrency:f,showCommonBases:g}))}var cm=n(479),dm=n.n(cm);function um(e){var t,n,a,i,l,s,m,p,f,b,g,y;let{match:{params:{currencyIdA:h,currencyIdB:v}},history:x}=e;const{account:E,chainId:w,library:A}=be(),{isUserBlocked:k}=(Object(o.useContext)(ue.ThemeContext),_i()),C=Fn(h),S=Fn(v),O=Be(),I=_n(),{independentField:T,typedValue:j,otherTypedValue:N}=gd(),{dependentField:R,currencies:B,pairState:U,currencyBalances:P,parsedAmounts:M,price:D,noLiquidity:L,liquidityMinted:z,poolTokenPercentage:X,error:W}=function(e,t){var n,a;const{account:r,chainId:i}=be(),{independentField:l,typedValue:s,otherTypedValue:c}=gd(),d=l===Qc.CURRENCY_A?Qc.CURRENCY_B:Qc.CURRENCY_A,m=Object(o.useMemo)(()=>({[Qc.CURRENCY_A]:null!==e&&void 0!==e?e:void 0,[Qc.CURRENCY_B]:null!==t&&void 0!==t?t:void 0}),[e,t]),[p,f]=gc(m[Qc.CURRENCY_A],m[Qc.CURRENCY_B]),b=ed(null===f||void 0===f?void 0:f.liquidityToken),g=p===fc.NOT_EXISTS||Boolean(b&&u.JSBI.equal(b.raw,bd)),y=Sc(null!==r&&void 0!==r?r:void 0,[m[Qc.CURRENCY_A],m[Qc.CURRENCY_B]]),h={[Qc.CURRENCY_A]:y[0],[Qc.CURRENCY_B]:y[1]},v=id(s,m[l]),x=Object(o.useMemo)(()=>{if(g)return c&&m[d]?id(c,m[d]):void 0;if(v){const n=uc(v,i),[a,o]=[dc(e,i),dc(t,i)];if(a&&o&&n&&f){const r=d===Qc.CURRENCY_B?t:e,i=d===Qc.CURRENCY_B?f.priceOf(a).quote(n):f.priceOf(o).quote(n);return r===u.ETHER?u.CurrencyAmount.ether(i.raw):i}}else;},[g,c,m,d,v,e,i,t,f]),E={[Qc.CURRENCY_A]:l===Qc.CURRENCY_A?v:x,[Qc.CURRENCY_B]:l===Qc.CURRENCY_A?x:v},w=Object(o.useMemo)(()=>{if(g){const{[Qc.CURRENCY_A]:e,[Qc.CURRENCY_B]:t}=E;return e&&t?new u.Price(e.currency,t.currency,e.raw,t.raw):void 0}{const t=dc(e,i);return f&&t?f.priceOf(t):void 0}},[i,e,g,f,E]),A=Object(o.useMemo)(()=>{const{[Qc.CURRENCY_A]:e,[Qc.CURRENCY_B]:t}=E,[n,a]=[uc(e,i),uc(t,i)];return f&&b&&n&&a?f.getLiquidityMinted(b,n,a):void 0},[E,i,f,b]),k=Object(o.useMemo)(()=>A&&b?new u.Percent(A.raw,b.add(A).raw):void 0,[A,b]);let C;var S,O;r||(C="Connect Wallet"),p===fc.INVALID&&(C=null!==(S=C)&&void 0!==S?S:"Invalid pair"),E[Qc.CURRENCY_A]&&E[Qc.CURRENCY_B]||(C=null!==(O=C)&&void 0!==O?O:"Enter an amount");const{[Qc.CURRENCY_A]:I,[Qc.CURRENCY_B]:T}=E;var j,N;return I&&(null===h||void 0===h||null===(n=h[Qc.CURRENCY_A])||void 0===n?void 0:n.lessThan(I))&&(C="Insufficient "+(null===(j=m[Qc.CURRENCY_A])||void 0===j?void 0:j.symbol)+" balance"),T&&(null===h||void 0===h||null===(a=h[Qc.CURRENCY_B])||void 0===a?void 0:a.lessThan(T))&&(C="Insufficient "+(null===(N=m[Qc.CURRENCY_B])||void 0===N?void 0:N.symbol)+" balance"),{dependentField:d,currencies:m,pair:f,pairState:p,currencyBalances:h,parsedAmounts:E,price:w,noLiquidity:g,liquidityMinted:A,poolTokenPercentage:k,error:C}}(null!==C&&void 0!==C?C:void 0,null!==S&&void 0!==S?S:void 0),{onFieldAInput:H,onFieldBInput:q}=function(e){const t=Object(d.b)();return{onFieldAInput:Object(o.useCallback)(n=>{t(Gc({field:Qc.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))},[t,e]),onFieldBInput:Object(o.useCallback)(n=>{t(Gc({field:Qc.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))},[t,e])}}(L),V=!W,[K,Y]=Object(o.useState)(!1),[J,Q]=Object(o.useState)(!1),[$]=$n(),[G]=Qn(),[Z,ee]=Object(o.useState)(""),te={[T]:j,[R]:L?N:null!==(t=null===(n=M[R])||void 0===n?void 0:n.toSignificant(6))&&void 0!==t?t:""},ne=[Qc.CURRENCY_A,Qc.CURRENCY_B].reduce((e,t)=>({...e,[t]:yd(P[t])}),{}),ae=[Qc.CURRENCY_A,Qc.CURRENCY_B].reduce((e,t)=>{var n,a;return{...e,[t]:null===(n=ne[t])||void 0===n?void 0:n.equalTo(null!==(a=M[t])&&void 0!==a?a:"0")}},{}),[oe,re]=$c(M[Qc.CURRENCY_A],F),[ie,le]=$c(M[Qc.CURRENCY_B],F),se=en();async function ce(){if(!w||!A||!E)return;const e=Et(0,A,E),{[Qc.CURRENCY_A]:t,[Qc.CURRENCY_B]:n}=M;if(!t||!n||!C||!S)return;const a={[Qc.CURRENCY_A]:vt(t,L?0:G)[0],[Qc.CURRENCY_B]:vt(n,L?0:G)[0]},o=Math.ceil(Date.now()/1e3)+$;let r,i,l,s;if(C===u.ETHER||S===u.ETHER){var d,m;const c=S===u.ETHER;r=e.estimateGas.addLiquidityETH,i=e.addLiquidityETH,l=[null!==(d=null===(m=dc(c?C:S,w))||void 0===m?void 0:m.address)&&void 0!==d?d:"",(c?t:n).raw.toString(),a[c?Qc.CURRENCY_A:Qc.CURRENCY_B].toString(),a[c?Qc.CURRENCY_B:Qc.CURRENCY_A].toString(),E,o],s=it.a.from((c?n:t).raw.toString())}else{var p,f,b,g;r=e.estimateGas.addLiquidity,i=e.addLiquidity,l=[null!==(p=null===(f=dc(C,w))||void 0===f?void 0:f.address)&&void 0!==p?p:"",null!==(b=null===(g=dc(S,w))||void 0===g?void 0:g.address)&&void 0!==b?b:"",t.raw.toString(),n.raw.toString(),a[Qc.CURRENCY_A].toString(),a[Qc.CURRENCY_B].toString(),E,o],s=null}Q(!0),await r(...l,s?{value:s}:{}).then(e=>{i(...l,{...s?{value:s}:{},gasLimit:ht(e)}).then(e=>{var t,n,a,o,r,i;Q(!1),se(e,{summary:"Add "+(null===(t=M[Qc.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3))+" "+(null===(n=B[Qc.CURRENCY_A])||void 0===n?void 0:n.symbol)+" and "+(null===(a=M[Qc.CURRENCY_B])||void 0===a?void 0:a.toSignificant(3))+" "+(null===(o=B[Qc.CURRENCY_B])||void 0===o?void 0:o.symbol)}),ee(e.hash),c.a.event({category:"Liquidity",action:"Add",label:[null===(r=B[Qc.CURRENCY_A])||void 0===r?void 0:r.symbol,null===(i=B[Qc.CURRENCY_B])||void 0===i?void 0:i.symbol].join("/")})}).catch(e=>{4001===(null===e||void 0===e?void 0:e.code)?Q(!1):console.error("Add Liquidity failed",e,l,s)})}).catch(e=>{Q(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)})}const de=()=>{var e,t,n,a;return r.a.createElement(Ll,{style:{border:"none",padding:"24px 16px",marginBottom:"16px"}},r.a.createElement(gi,{gap:"7px"},r.a.createElement(na.a,{paddingBottom:"8px",fontSize:16,fontWeight:500,color:"#281071",lineHeight:"20px"},L?"You are creating a pool":"You will receive:"),r.a.createElement(yn,{padding:"0"},r.a.createElement(na.a,{fontSize:28,fontWeight:600,color:"$281071",lineHeight:"34px",marginRight:10},L?(null===(e=B[Qc.CURRENCY_A])||void 0===e?void 0:e.symbol)+"/"+(null===(t=B[Qc.CURRENCY_B])||void 0===t?void 0:t.symbol):null===z||void 0===z?void 0:z.toSignificant(6)),r.a.createElement(ba,null,r.a.createElement(Ws,{currency0:B[Qc.CURRENCY_A],currency1:B[Qc.CURRENCY_B],size:24}))),!L&&r.a.createElement(xn,null,r.a.createElement(na.a,{fontStyle:"italic",fontSize:18,color:"#281071",lineHeight:"21px"},(null===(n=B[Qc.CURRENCY_A])||void 0===n?void 0:n.symbol)+"/"+(null===(a=B[Qc.CURRENCY_B])||void 0===a?void 0:a.symbol)+" Pool Tokens"))))},me=()=>r.a.createElement(Vd,{price:D,currencies:B,parsedAmounts:M,noLiquidity:L,onAdd:ce,poolTokenPercentage:X,allowedSlippage:G}),pe=`Supplying ${null===(a=M[Qc.CURRENCY_A])||void 0===a?void 0:a.toSignificant(6)} ${null===(i=B[Qc.CURRENCY_A])||void 0===i?void 0:i.symbol} and ${null===(l=M[Qc.CURRENCY_B])||void 0===l?void 0:l.toSignificant(6)} ${null===(s=B[Qc.CURRENCY_B])||void 0===s?void 0:s.symbol}`,fe=Object(o.useCallback)(e=>{const t=Kd(e);t===v?x.push(`/add/${v}/${h}`):x.push(`/add/${t}/${v}`)},[v,x,h]),ge=Object(o.useCallback)(e=>{const t=Kd(e);h===t?v?x.push(`/add/${v}/${t}`):x.push("/add/"+t):x.push(`/add/${h||"KSX"}/${t}`)},[h,x,v]),ye=Object(o.useCallback)(()=>{Y(!1),Z&&H(""),ee("")},[H,Z]),he=r.a.createElement(sm,{value:te[Qc.CURRENCY_A],onUserInput:H,onMax:()=>{var e,t;H(null!==(e=null===(t=ne[Qc.CURRENCY_A])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},onCurrencySelect:fe,showMaxButton:!ae[Qc.CURRENCY_A],currency:B[Qc.CURRENCY_A],id:"add-liquidity-input-tokena",showCommonBases:!0}),ve=r.a.createElement(sm,{value:te[Qc.CURRENCY_B],onUserInput:q,onCurrencySelect:ge,onMax:()=>{var e,t;q(null!==(e=null===(t=ne[Qc.CURRENCY_B])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"")},showMaxButton:!ae[Qc.CURRENCY_B],currency:B[Qc.CURRENCY_B],id:"add-liquidity-input-tokenb",showCommonBases:!0}),xe=Object(o.useMemo)(()=>{var e,t,n,a,o,r,i,l;return[{price:null!==(e=null===D||void 0===D?void 0:D.toSignificant(6))&&void 0!==e?e:"-",name:`${null===(t=B[Qc.CURRENCY_B])||void 0===t?void 0:t.symbol} per ${null===(n=B[Qc.CURRENCY_A])||void 0===n?void 0:n.symbol}`},{price:null!==(a=null===D||void 0===D||null===(o=D.invert())||void 0===o?void 0:o.toSignificant(6))&&void 0!==a?a:"-",name:`${null===(r=B[Qc.CURRENCY_A])||void 0===r?void 0:r.symbol} per ${null===(i=B[Qc.CURRENCY_B])||void 0===i?void 0:i.symbol}`},{price:(L&&D?"100":null!==(l=(null===X||void 0===X?void 0:X.lessThan(_))?"<0.01":null===X||void 0===X?void 0:X.toFixed(2))&&void 0!==l?l:"0")+"%",name:"Share of Pool"}]},[B,X,L,D]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(vd,null,r.a.createElement(sc,{label:"Add Liquidity"}),r.a.createElement(pa,null,r.a.createElement(xd,null,r.a.createElement(hs,{isOpen:K,onDismiss:ye,attemptingTxn:J,hash:Z,content:()=>r.a.createElement(gs,{title:"Confirm Supply",onDismiss:ye,topContent:de,bottomContent:me}),tokenAddress:null===z||void 0===z?void 0:z.token.address,tokenDecimals:null===z||void 0===z?void 0:z.token.decimals,tokenSymbol:`${null===(m=B[Qc.CURRENCY_A])||void 0===m?void 0:m.symbol}-${null===(p=B[Qc.CURRENCY_B])||void 0===p?void 0:p.symbol} LP`,pendingText:pe}),r.a.createElement(gi,{gap:"20px"},L&&r.a.createElement(bi,null,r.a.createElement(Hl,null,r.a.createElement(gi,{gap:"10px"},r.a.createElement(Aa.link,{fontWeight:600,color:"#ffffff"},"You are the first liquidity provider."),r.a.createElement(Aa.link,{fontWeight:400,color:"#ffffff"},"The ratio of tokens you add will set the price of this pool."),r.a.createElement(Aa.link,{fontWeight:400,color:"#ffffff"},"Once you are happy with the rate click supply to review.")))),r.a.createElement($d,{topBox:he,bottomBox:ve,switchIcon:r.a.createElement(Go,{iconSrc:dm.a,width:16,height:16})}),B[Qc.CURRENCY_A]&&B[Qc.CURRENCY_B]&&U!==fc.INVALID&&r.a.createElement(Sd,{header:r.a.createElement(Aa.subHeader,{color:"white",fontWeight:600,fontSize:16,lineHeight:"20px"},L?"Initial prices":"Prices"," and pool share"),poolPriceInfoList:xe,fontSizeOfPrice:18,fontSizeOfName:16}),E?r.a.createElement(gi,{gap:"md"},(oe===Jc.NOT_APPROVED||oe===Jc.PENDING||ie===Jc.NOT_APPROVED||ie===Jc.PENDING)&&V&&r.a.createElement(yn,null,oe!==Jc.APPROVED&&r.a.createElement(er,{onClick:re,disabled:oe===Jc.PENDING,width:ie!==Jc.APPROVED?"48%":"100%"},oe===Jc.PENDING?r.a.createElement(Ad,null,"Approving ",null===(f=B[Qc.CURRENCY_A])||void 0===f?void 0:f.symbol):"Approve "+(null===(b=B[Qc.CURRENCY_A])||void 0===b?void 0:b.symbol)),ie!==Jc.APPROVED&&r.a.createElement(er,{onClick:le,disabled:ie===Jc.PENDING,width:oe!==Jc.APPROVED?"48%":"100%"},ie===Jc.PENDING?r.a.createElement(Ad,null,"Approving ",null===(g=B[Qc.CURRENCY_B])||void 0===g?void 0:g.symbol):"Approve "+(null===(y=B[Qc.CURRENCY_B])||void 0===y?void 0:y.symbol))),r.a.createElement(mr,{onClick:()=>{I?ce():Y(!0)},disabled:k||!V||oe!==Jc.APPROVED||ie!==Jc.APPROVED,error:!V&&!!M[Qc.CURRENCY_A]&&!!M[Qc.CURRENCY_B]},r.a.createElement(na.a,{fontSize:20,fontWeight:600},null!==W&&void 0!==W?W:"Supply"))):r.a.createElement(tr,{onClick:O},"Connect Wallet"))))))}function mm(){return r.a.createElement(de.a,{to:"/add/"})}const pm=/^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;function fm(e){const{match:{params:{currencyIdA:t}}}=e,n=t.match(pm);return(null===n||void 0===n?void 0:n.length)?r.a.createElement(de.a,{to:`/add/${n[1]}/${n[2]}`}):r.a.createElement(um,e)}function bm(e){const{match:{params:{currencyIdA:t,currencyIdB:n}}}=e;return t.toLowerCase()===n.toLowerCase()?r.a.createElement(de.a,{to:"/add/"+t}):r.a.createElement(um,e)}function gm(e){let{message:t}=e;return r.a.createElement(gi,{style:{minHeight:200,justifyContent:"center",alignItems:"center"}},r.a.createElement(Aa.body,null,t))}var ym=n(1213);const hm=Object(ue.default)(yn)`
  height: 24px;
  &.show-more {
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f6f9;
    height: 100%;
  }
`,vm=Object(ue.default)(Bl)`
  border-radius: 24px;
  border: 1px solid #ffffff;
  background: #ffffff;

  :hover {
    border: 1px solid #ffffff;
  }
`;function xm(e){let{pair:t,showUnwrapped:n=!1,border:a}=e;const{account:i}=be(),l=n?t.token0:mc(t.token0),s=n?t.token1:mc(t.token1),[c,d]=Object(o.useState)(!1),m=Cc(null!==i&&void 0!==i?i:void 0,t.liquidityToken),p=ed(t.liquidityToken),[f,b]=t&&p&&m&&u.JSBI.greaterThanOrEqual(p.raw,m.raw)?[t.getLiquidityValue(t.token0,p,m,!1),t.getLiquidityValue(t.token1,p,m,!1)]:[void 0,void 0],g=m&&p&&u.JSBI.greaterThanOrEqual(p.raw,m.raw)?new u.Percent(m.raw,p.raw):void 0;return r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(Pl,{border:a,className:"white"},r.a.createElement(gi,{gap:"12px"},r.a.createElement(hm,null,r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:14,fontWeight:600,lineHeight:"17px",color:"#FFFFFF"},"Your position"))),r.a.createElement(hm,{onClick:()=>d(!c)},r.a.createElement(vn,null,r.a.createElement(Ws,{currency0:l,currency1:s,margin:!0,size:20}),r.a.createElement(na.a,{fontSize:18,fontWeight:600,color:"#FFFFFF"},l.symbol,"/",s.symbol)),r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:18,fontWeight:600,color:"#FFFFFF"},m?m.toSignificant(4):"-"))),r.a.createElement(gi,{gap:"4px"},r.a.createElement(hm,null,r.a.createElement(na.a,{fontSize:16,fontWeight:500,color:"#FFFFFF"},"Your pool share :"),r.a.createElement(na.a,{fontSize:16,fontWeight:500,marginLeft:"6px",color:"#FFFFFF"},g?g.toFixed(2)+"%":"-")),r.a.createElement(hm,null,r.a.createElement(na.a,{color:"#FFFFFF",fontSize:16},"Pooled ",l.symbol,":"),f?r.a.createElement(vn,null,r.a.createElement(na.a,{color:"#FFFFFF",fontSize:16,marginLeft:"6px"},null===f||void 0===f?void 0:f.toSignificant(6)," ",l.symbol)):"-"),r.a.createElement(hm,null,r.a.createElement(na.a,{color:"#FFFFFF",fontSize:16},"Pooled ",s.symbol,":"),b?r.a.createElement(vn,null,r.a.createElement(na.a,{color:"#FFFFFF",fontSize:16,marginLeft:"6px"},null===b||void 0===b?void 0:b.toSignificant(6)," ",s.symbol)):"-")))))}function Em(e){let{pair:t,border:n,isImportLiquidity:a}=e;const{account:i}=be(),l=mc(t.token0),s=mc(t.token1),[c,d]=Object(o.useState)(a),m=Cc(null!==i&&void 0!==i?i:void 0,t.liquidityToken),p=ed(t.liquidityToken),f=m&&p&&u.JSBI.greaterThanOrEqual(p.raw,m.raw)?new u.Percent(m.raw,p.raw):void 0,[b,g]=t&&p&&m&&u.JSBI.greaterThanOrEqual(p.raw,m.raw)?[t.getLiquidityValue(t.token0,p,m,!1),t.getLiquidityValue(t.token1,p,m,!1)]:[void 0,void 0];return r.a.createElement(vm,{border:n},r.a.createElement(gi,{gap:"12px"},r.a.createElement(hm,{onClick:()=>d(!c),style:{cursor:"pointer"},className:c?"show-more":""},r.a.createElement(vn,null,r.a.createElement(Ws,{currency0:l,currency1:s,margin:!0,size:20}),r.a.createElement(na.a,{fontWeight:500,fontSize:20},l&&s?`${l.symbol}/${s.symbol}`:r.a.createElement(Bd,null,"Loading"))),r.a.createElement(vn,null,c?r.a.createElement(ym.a,{size:"20",style:{marginLeft:"10px"}}):r.a.createElement(Jo.a,{size:"20",style:{marginLeft:"10px"}}))),c&&r.a.createElement(gi,{gap:"8px"},r.a.createElement(hm,null,r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7"},"Pooled ",l.symbol," :")),b?r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:14,fontWeight:500,marginLeft:"6px",color:"#3B199F"},null===b||void 0===b?void 0:b.toSignificant(6)," ",l.symbol)):"-"),r.a.createElement(hm,null,r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7"},"Pooled ",s.symbol," :")),g?r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:14,fontWeight:500,marginLeft:"6px",color:"#3B199F"},null===g||void 0===g?void 0:g.toSignificant(6)," ",s.symbol)):"-"),r.a.createElement(hm,null,r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7"},"Your pool tokens :"),r.a.createElement(na.a,{fontSize:14,fontWeight:500,marginLeft:"6px",color:"#3B199F"},m?m.toSignificant(4):"-")),r.a.createElement(hm,null,r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7"},"Your pool share :"),r.a.createElement(na.a,{fontSize:14,fontWeight:500,marginLeft:"6px",color:"#3B199F"},f?f.toFixed(2)+"%":"-")),!a&&r.a.createElement(yn,{marginTop:"10px"},r.a.createElement(nr,{className:"my-liquidity",as:ce.b,to:`/add/${Kd(l)}/${Kd(s)}`,width:"48%"},"Add"),r.a.createElement(nr,{className:"my-liquidity",as:ce.b,width:"48%",to:`/remove/${Kd(l)}/${Kd(s)}`},"Remove")))))}var wm=Object(de.h)((function(e){let{token:t,V1LiquidityBalance:n}=e;const a=Object(o.useContext)(ue.ThemeContext),{chainId:i}=be();return r.a.createElement(vm,null,r.a.createElement(gi,{gap:"12px"},r.a.createElement(hm,null,r.a.createElement(vn,null,r.a.createElement(Ws,{currency0:t,margin:!0,size:20}),r.a.createElement(na.a,{fontWeight:500,fontSize:20,style:{marginLeft:""}},(i&&t.equals(u.WKSX[i])?"WKSX":t.symbol)+"/KSX"),r.a.createElement(na.a,{fontSize:12,fontWeight:500,ml:"0.5rem",px:"0.75rem",py:"0.25rem",style:{borderRadius:"1rem"},backgroundColor:a.yellow1,color:"black"},"V1"))),r.a.createElement(gi,{gap:"8px"},r.a.createElement(yn,{marginTop:"10px"},r.a.createElement(nr,{width:"68%",as:ce.b,to:"/migrate/v1/"+n.token.address},"Migrate"),r.a.createElement(nr,{style:{backgroundColor:"transparent"},width:"28%",as:ce.b,to:"/remove/v1/"+n.token.address},"Remove")))))}));function Am(){var e;const t=Object(o.useContext)(ue.ThemeContext),{account:n,chainId:a}=be(),[i,l]=Object(o.useState)(""),s=Object(o.useCallback)(e=>l(e.target.value),[l]),c=Pn(i),d=At(Nn(),null!==c&&void 0!==c?c:void 0),m=Rn(),p=Gn();Object(o.useEffect)(()=>{!c||d||m[c.address]||p(c)},[c,d,p,m]);const f=Nc(),b=Object(o.useMemo)(()=>a?Object.keys(f).map(e=>new u.Token(a,e,18,"UNI-V1","Uniswap V1")):[],[a,f]),[g,y]=Ac(null!==n&&void 0!==n?n:void 0,b),h=b.filter(e=>{const t=null===g||void 0===g?void 0:g[e.address];return t&&u.JSBI.greaterThan(t.raw,u.JSBI.BigInt(0))}).map(e=>{const t=g[e.address];return t?r.a.createElement(wm,{key:e.address,token:f[e.address],V1LiquidityBalance:t}):null}),v=0===(null===(e=Object.keys(f))||void 0===e?void 0:e.length)||y;return r.a.createElement(hd,{style:{padding:24}},r.a.createElement(gi,{gap:"16px"},r.a.createElement(hn,{style:{alignItems:"center",justifyContent:"space-between"},gap:"8px"},r.a.createElement(ya,{to:"/pool"}),r.a.createElement(Aa.mediumHeader,null,"Migrate V1 Liquidity"),r.a.createElement("div",null,r.a.createElement(Ys,{text:"Migrate your liquidity tokens from Uniswap V1 to Uniswap V2."}))),r.a.createElement(Aa.body,{style:{marginBottom:8,fontWeight:400}},"For each pool shown below, click migrate to remove your liquidity from Uniswap V1 and deposit it into Uniswap V2."),n?v?r.a.createElement(Ul,{padding:"40px"},r.a.createElement(Aa.body,{color:t.text3,textAlign:"center"},r.a.createElement(Bd,null,"Loading"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(hn,null,r.a.createElement(Tu,{value:i,onChange:s,placeholder:"Enter a token address to find liquidity"})),(null===h||void 0===h?void 0:h.length)>0?r.a.createElement(r.a.Fragment,null,h):r.a.createElement(gm,{message:"No V1 Liquidity found."})):r.a.createElement(Ul,{padding:"40px"},r.a.createElement(Aa.body,{color:t.text3,textAlign:"center"},"Connect to a wallet to view your V1 liquidity."))))}const km=new u.Fraction(u.JSBI.BigInt(1),u.JSBI.BigInt(1e6)),Cm=u.JSBI.exponentiate(u.JSBI.BigInt(10),u.JSBI.BigInt(18)),Sm=u.JSBI.BigInt(0),Om=u.JSBI.BigInt(1),Im=new u.Fraction(Sm,Om),Tm=new u.Percent(u.JSBI.BigInt(9950),u.JSBI.BigInt(1e4));function jm(e){let{currencyAmount:t}=e;return r.a.createElement(r.a.Fragment,null,t.equalTo(u.JSBI.BigInt(0))?"0":t.greaterThan(km)?t.toSignificant(4):"<"+km.toSignificant(1))}function Nm(e){let{token:t,liquidityTokenAmount:n,tokenWorth:a,ethWorth:o}=e;const{chainId:i}=be();return r.a.createElement(r.a.Fragment,null,r.a.createElement(hn,{style:{justifyContent:"flex-start",width:"fit-content"}},r.a.createElement(Ds,{size:"24px",currency:t}),r.a.createElement("div",{style:{marginLeft:".75rem"}},r.a.createElement(Aa.mediumHeader,null,r.a.createElement(jm,{currencyAmount:n})," ",i&&t.equals(u.WKSX[i])?"WKSX":t.symbol,"/KSX"))),r.a.createElement(yn,{my:"1rem"},r.a.createElement(na.a,{fontSize:16,fontWeight:500},"Pooled ",i&&t.equals(u.WKSX[i])?"WKSX":t.symbol,":"),r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:16,fontWeight:500,marginLeft:"6px"},a.toSignificant(4)),r.a.createElement(Ds,{size:"20px",style:{marginLeft:"8px"},currency:t}))),r.a.createElement(yn,{mb:"1rem"},r.a.createElement(na.a,{fontSize:16,fontWeight:500},"Pooled KSX:"),r.a.createElement(vn,null,r.a.createElement(na.a,{fontSize:16,fontWeight:500,marginLeft:"6px"},r.a.createElement(jm,{currencyAmount:o})),r.a.createElement(Ds,{size:"20px",style:{marginLeft:"8px"},currency:u.Currency.ETHER}))))}function Rm(e){var t,n,a,i;let{liquidityTokenAmount:l,token:s}=e;const{account:d,chainId:m}=be(),p=ed(l.token),f=null===(t=wc([l.token.address]))||void 0===t?void 0:t[l.token.address],b=Cc(l.token.address,s),[g,y]=gc(m?u.WKSX[m]:void 0,s),h=g===fc.NOT_EXISTS,v=m&&y?y.reserveOf(s).divide(y.reserveOf(u.WKSX[m])):void 0,[x,E]=Object(o.useState)(!1),[w,A]=Object(o.useState)(null),k=p?new u.Percent(l.raw,p.raw):Im,C=f?u.CurrencyAmount.ether(f.multiply(k).multiply(Cm).quotient):u.CurrencyAmount.ether(Sm),S=b?new u.TokenAmount(s,k.multiply(b.raw).quotient):new u.TokenAmount(s,Sm),[O,I]=$c(l,Ut),T=b&&f?b.divide(new u.Fraction(f.raw,Cm)):null,j=T&&v?T.divide(v).multiply("100").subtract("100"):void 0,N=(null===j||void 0===j?void 0:j.lessThan(Sm))?null===j||void 0===j?void 0:j.multiply("-1"):j,R=v&&S?S.divide(v).multiply(Cm).multiply(Tm).quotient:null===C||void 0===C?void 0:C.numerator,B=v&&C?C.multiply(v).multiply(u.JSBI.exponentiate(u.JSBI.BigInt(10),u.JSBI.BigInt(s.decimals))).multiply(Tm).quotient:null===S||void 0===S?void 0:S.numerator,U=en(),P=nn(null!==w&&void 0!==w?w:void 0),F=Xt(Ut,Bt,!0),M=Object(o.useCallback)(()=>{B&&R&&F&&(E(!0),F.migrate(s.address,B.toString(),R.toString(),d,Math.floor((new Date).getTime()/1e3)+1200).then(e=>{c.a.event({category:"Migrate",action:"V1->V2",label:null===s||void 0===s?void 0:s.symbol}),U(e,{summary:`Migrate ${s.symbol} liquidity to V2`}),A(e.hash)}).catch(()=>{E(!1)}))},[B,R,F,s,d,U]),D=!!l&&l.equalTo(Sm),L=!!N&&!N.lessThan(u.JSBI.BigInt(5)),z=!!w&&D;return r.a.createElement(gi,{gap:"20px"},r.a.createElement(Aa.body,{my:9,style:{fontWeight:400}},"This tool will safely migrate your V1 liquidity to V2 with minimal price risk. The process is completely trustless thanks to the"," ",m&&r.a.createElement(da,{href:gt(m,Ut,"address")},r.a.createElement(Aa.blue,{display:"inline"},"Uniswap migration contract\u2197")),"."),!h&&L?r.a.createElement(Fl,null,r.a.createElement(Aa.body,{style:{marginBottom:8,fontWeight:400}},"It","'","s best to deposit liquidity into Uniswap V2 at a price you believe is correct. If the V2 price seems incorrect, you can either make a swap to move the price or wait for someone else to do so."),r.a.createElement(gi,{gap:"8px"},r.a.createElement(yn,null,r.a.createElement(Aa.body,null,"V1 Price:"),r.a.createElement(Aa.black,null,null===T||void 0===T?void 0:T.toSignificant(6)," ",s.symbol,"/KSX")),r.a.createElement(yn,null,r.a.createElement("div",null),r.a.createElement(Aa.black,null,null===T||void 0===T||null===(n=T.invert())||void 0===n?void 0:n.toSignificant(6)," KSX/",s.symbol)),r.a.createElement(yn,null,r.a.createElement(Aa.body,null,"V2 Price:"),r.a.createElement(Aa.black,null,null===v||void 0===v?void 0:v.toSignificant(6)," ",s.symbol,"/KSX")),r.a.createElement(yn,null,r.a.createElement("div",null),r.a.createElement(Aa.black,null,null===v||void 0===v||null===(a=v.invert())||void 0===a?void 0:a.toSignificant(6)," KSX/",s.symbol)),r.a.createElement(yn,null,r.a.createElement(Aa.body,{color:"inherit"},"Price Difference:"),r.a.createElement(Aa.black,{color:"inherit"},null===N||void 0===N?void 0:N.toSignificant(4),"%")))):null,h&&r.a.createElement(Ml,null,r.a.createElement(Aa.body,{style:{marginBottom:8,fontWeight:400}},"You are the first liquidity provider for this pair on Uniswap V2. Your liquidity will be migrated at the current V1 price. Your transaction cost also includes the gas to create the pool."),r.a.createElement(gi,{gap:"8px"},r.a.createElement(yn,null,r.a.createElement(Aa.body,null,"V1 Price:"),r.a.createElement(Aa.black,null,null===T||void 0===T?void 0:T.toSignificant(6)," ",s.symbol,"/KSX")),r.a.createElement(yn,null,r.a.createElement("div",null),r.a.createElement(Aa.black,null,null===T||void 0===T||null===(i=T.invert())||void 0===i?void 0:i.toSignificant(6)," KSX/",s.symbol)))),r.a.createElement(Ul,null,r.a.createElement(Nm,{token:s,liquidityTokenAmount:l,tokenWorth:S,ethWorth:C}),r.a.createElement("div",{style:{display:"flex",marginTop:"1rem"}},r.a.createElement(gi,{gap:"12px",style:{flex:"1",marginRight:12}},r.a.createElement(ur,{confirmed:O===Jc.APPROVED,disabled:O!==Jc.NOT_APPROVED,onClick:I},O===Jc.PENDING?r.a.createElement(Bd,null,"Approving"):O===Jc.APPROVED?"Approved":"Approve")),r.a.createElement(gi,{gap:"12px",style:{flex:"1"}},r.a.createElement(ur,{confirmed:z,disabled:z||D||P||O!==Jc.APPROVED||x,onClick:M},z?"Success":P?r.a.createElement(Bd,null,"Migrating"):"Migrate")))),r.a.createElement(Aa.darkGray,{style:{textAlign:"center"}},`Your Uniswap V1 ${s.symbol}/KSX liquidity will become Uniswap V2 ${s.symbol}/KSX liquidity.`))}function Bm(e){var t,n;let{history:a,match:{params:{address:i}}}=e;const l=ft(i),{chainId:s,account:c}=be(),d=null===(t=nt(Ht(l||void 0),"tokenAddress",void 0,Je))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0],m=Pn(d),p=Cc(null!==c&&void 0!==c?c:void 0,Object(o.useMemo)(()=>l&&s&&m?new u.Token(s,l,18,"UNI-V1-"+m.symbol,"Uniswap V1"):void 0,[s,l,m]));return l&&d!==rt.a?r.a.createElement(hd,{style:{padding:24}},r.a.createElement(gi,{gap:"16px"},r.a.createElement(hn,{style:{alignItems:"center",justifyContent:"space-between"},gap:"8px"},r.a.createElement(ya,{to:"/migrate/v1"}),r.a.createElement(Aa.mediumHeader,null,"Migrate V1 Liquidity"),r.a.createElement("div",null,r.a.createElement(Ys,{text:"Migrate your liquidity tokens from Uniswap V1 to Uniswap V2."}))),c?l&&s&&(null===m||void 0===m?void 0:m.equals(u.WKSX[s]))?r.a.createElement(r.a.Fragment,null,r.a.createElement(Aa.body,{my:9,style:{fontWeight:400}},"Because Uniswap V2 uses WKSX under the hood, your Uniswap V1 WKSX/KSX liquidity cannot be migrated. You may want to remove your liquidity instead."),r.a.createElement(ur,{onClick:()=>{a.push("/remove/v1/"+l)}},"Remove")):p&&m?r.a.createElement(Rm,{liquidityTokenAmount:p,token:m}):r.a.createElement(gm,{message:"Loading..."}):r.a.createElement(Aa.largeHeader,null,"You must connect an account."))):(console.error("Invalid address in path",i),r.a.createElement(de.a,{to:"/migrate/v1"}))}const Um=u.JSBI.exponentiate(u.JSBI.BigInt(10),u.JSBI.BigInt(18)),Pm=u.JSBI.BigInt(0),Fm=u.JSBI.BigInt(1),Mm=new u.Fraction(Pm,Fm);function Dm(e){var t;let{exchangeContract:n,liquidityTokenAmount:a,token:i}=e;const{chainId:l}=be(),s=ed(a.token),d=null===(t=wc([a.token.address]))||void 0===t?void 0:t[a.token.address],m=Cc(a.token.address,i),[p,f]=Object(o.useState)(!1),[b,g]=Object(o.useState)(null),y=s?new u.Percent(a.raw,s.raw):Mm,h=d?u.CurrencyAmount.ether(d.multiply(y).multiply(Um).quotient):u.CurrencyAmount.ether(Pm),v=m?new u.TokenAmount(i,y.multiply(m.raw).quotient):new u.TokenAmount(i,Pm),x=en(),E=nn(null!==b&&void 0!==b?b:void 0),w=Object(o.useCallback)(()=>{a&&(f(!0),n.removeLiquidity(a.raw.toString(),1,1,Math.floor((new Date).getTime()/1e3)+1200).then(e=>{c.a.event({category:"Remove",action:"V1",label:null===i||void 0===i?void 0:i.symbol}),x(e,{summary:`Remove ${l&&i.equals(u.WKSX[l])?"WKSX":i.symbol}/KSX V1 liquidity`}),g(e.hash)}).catch(e=>{console.error(e),f(!1)}))},[n,a,i,l,x]),A=!!a&&a.equalTo(Pm),k=!!b&&A;return r.a.createElement(gi,{gap:"20px"},r.a.createElement(Aa.body,{my:9,style:{fontWeight:400}},"This tool will remove your V1 liquidity and send the underlying assets to your wallet."),r.a.createElement(Ul,null,r.a.createElement(Nm,{token:i,liquidityTokenAmount:a,tokenWorth:v,ethWorth:h}),r.a.createElement("div",{style:{display:"flex",marginTop:"1rem"}},r.a.createElement(ur,{confirmed:k,disabled:k||A||E||p,onClick:w},k?"Success":E?r.a.createElement(Bd,null,"Removing"):"Remove"))),r.a.createElement(Aa.darkGray,{style:{textAlign:"center"}},`Your Uniswap V1 ${l&&i.equals(u.WKSX[l])?"WKSX":i.symbol}/KSX liquidity will be redeemed for underlying assets.`))}function Lm(e){var t,n;let{match:{params:{address:a}}}=e;const i=ft(a),{chainId:l,account:s}=be(),c=Ht(i||void 0,!0),d=null===(t=nt(c,"tokenAddress",void 0,Je))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0],m=Pn(d),p=Cc(null!==s&&void 0!==s?s:void 0,Object(o.useMemo)(()=>i&&l&&m?new u.Token(l,i,18,"UNI-V1-"+m.symbol,"Uniswap V1"):void 0,[l,i,m]));return i&&d!==rt.a?r.a.createElement(hd,{style:{padding:24},id:"remove-v1-exchange"},r.a.createElement(gi,{gap:"16px"},r.a.createElement(hn,{style:{alignItems:"center",justifyContent:"space-between"},gap:"8px"},r.a.createElement(ya,{to:"/migrate/v1"}),r.a.createElement(Aa.mediumHeader,null,"Remove V1 Liquidity"),r.a.createElement("div",null,r.a.createElement(Ys,{text:"Remove your Uniswap V1 liquidity tokens."}))),s?p&&m&&c?r.a.createElement(Dm,{exchangeContract:c,liquidityTokenAmount:p,token:m}):r.a.createElement(gm,{message:"Loading..."}):r.a.createElement(Aa.largeHeader,null,"You must connect an account."))):(console.error("Invalid address in path",a),r.a.createElement(de.a,{to:"/migrate/v1"}))}var zm=n(1214);const Xm=ue.default.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 12px;
  border: 2px solid #e3e7f9;
  z-index: 10;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;var Wm;function Hm(){var e;const{account:t}=be(),[n,a]=Object(o.useState)(!1),[i,l]=Object(o.useState)(Wm.TOKEN1),[s,c]=Object(o.useState)(u.ETHER),[m,p]=Object(o.useState)(null),[f,b]=gc(null!==s&&void 0!==s?s:void 0,null!==m&&void 0!==m?m:void 0),g=function(){const e=Object(d.b)();return Object(o.useCallback)(t=>{e(qn({serializedPair:ea(t)}))},[e])}();Object(o.useEffect)(()=>{b&&g(b)},[b,g]);const y=f===fc.NOT_EXISTS||Boolean(f===fc.EXISTS&&b&&u.JSBI.equal(b.reserve0.raw,u.JSBI.BigInt(0))&&u.JSBI.equal(b.reserve1.raw,u.JSBI.BigInt(0))),h=Cc(null!==t&&void 0!==t?t:void 0,null===b||void 0===b?void 0:b.liquidityToken),v=Boolean(h&&u.JSBI.greaterThan(h.raw,u.JSBI.BigInt(0))),x=Object(o.useCallback)(e=>{i===Wm.TOKEN0?c(e):p(e)},[i]),E=Object(o.useCallback)(()=>{a(!1)},[a]),w=r.a.createElement(Ul,{padding:"45px 10px"},r.a.createElement(na.a,{textAlign:"center",fontSize:16,fontWeight:500,color:"#988EB7"},t?"Select a token to find your liquidity.":"Connect to a wallet to find pools"));return r.a.createElement(vd,null,r.a.createElement(sc,{label:"Import Pool"}),r.a.createElement(pa,null,r.a.createElement(gi,{className:"fuck",gap:"24px"},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(pr,{onClick:()=>{a(!0),l(Wm.TOKEN0)},style:{marginBottom:"2px"}},s?r.a.createElement(xn,null,r.a.createElement(Ds,{currency:s}),r.a.createElement(na.a,{fontWeight:500,fontSize:20,marginLeft:"12px"},s.symbol)):r.a.createElement(na.a,{fontWeight:500,fontSize:20,marginLeft:"12px"},"Select a Token")),r.a.createElement(Xm,null,r.a.createElement(bi,null,r.a.createElement(zm.a,{size:"16",color:"#25116c"}))),r.a.createElement(pr,{onClick:()=>{a(!0),l(Wm.TOKEN1)}},m?r.a.createElement(xn,null,r.a.createElement(Ds,{currency:m}),r.a.createElement(na.a,{fontWeight:500,fontSize:20,marginLeft:"12px"},m.symbol)):r.a.createElement(na.a,{fontWeight:500,fontSize:20,marginLeft:"12px"},"Select a Token"))),v&&r.a.createElement(bi,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"}},r.a.createElement(na.a,{textAlign:"center",fontWeight:600,color:"#6D4EC9",fontSize:16},"Pool Found!")),s&&m?f===fc.EXISTS?v&&b?r.a.createElement(Em,{key:b.liquidityToken.address,pair:b,isImportLiquidity:!0}):r.a.createElement(Ul,{padding:"45px 10px"},r.a.createElement(gi,{gap:"sm",justify:"center"},r.a.createElement(na.a,{textAlign:"center",fontSize:16,fontWeight:500,color:"#988EB7"},"You don\u2019t have liquidity in this pool yet."),r.a.createElement(sa,{to:`/add/${Kd(s)}/${Kd(m)}`},r.a.createElement(na.a,{color:"#21D2B3",fontSize:14,fontWeight:600,textAlign:"center"},"Add liquidity.")))):y?r.a.createElement(Ul,{padding:"45px 10px"},r.a.createElement(gi,{gap:"sm",justify:"center"},r.a.createElement(na.a,{textAlign:"center",fontSize:16,fontWeight:500,color:"#988EB7"},"No pool found."),r.a.createElement(sa,{style:{color:"#21D2B3",fontSize:"14px",fontWeight:"600"},to:`/add/${Kd(s)}/${Kd(m)}`},"Create pool."))):f===fc.INVALID?r.a.createElement(Ul,{padding:"45px 10px"},r.a.createElement(gi,{gap:"sm",justify:"center"},r.a.createElement(na.a,{textAlign:"center",fontWeight:500,fontSize:16,color:"#988EB7"},"Invalid pair."))):f===fc.LOADING?r.a.createElement(Ul,{padding:"45px 10px"},r.a.createElement(gi,{gap:"sm",justify:"center"},r.a.createElement(na.a,{textAlign:"center",fontSize:16,fontWeight:500,color:"#988EB7"},"Loading",r.a.createElement(Ad,null)))):null:w)),r.a.createElement(tm,{isOpen:n,onCurrencySelect:x,onDismiss:E,showCommonBases:!0,selectedCurrency:null!==(e=i===Wm.TOKEN0?m:s)&&void 0!==e?e:void 0}))}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(Wm||(Wm={}));var qm=n(4),Vm=n(1215),Km=(n(1040),n(701));const Ym=Object(ue.default)(Km.a)`
  .ant-slider-rail {
    background: #e8f6f3;
    border-radius: 2px;

    &:hover {
      background: #e8f6f3;
    }
  }

  .ant-slider-handle {
    background: #47dfc4;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    border-radius: 100%;
    border: 2px solid #ffffff;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    margin-top: -11px;

    &:hover,
    &:focus {
      border-color: white;
    }
  }

  .ant-slider-track {
    background: #47dfc4;
    border-radius: 2px;
  }

  &:hover,
  &:focus {
    .ant-slider-rail {
      background: #e8f6f3 !important;
    }
    .ant-slider-handle {
      border-color: white !important;
    }
    .ant-slider-track {
      background: #47dfc4 !important;
    }
  }
`;function _m(e){let{value:t,onChange:n,min:a=0,step:i=1,max:l=100}=e;const s=Object(o.useCallback)(e=>{n(parseInt(e))},[n]);return r.a.createElement(Ym,{value:t,onChange:s,step:i,min:a,max:l,tooltipVisible:!1})}let Jm;!function(e){e.LIQUIDITY_PERCENT="LIQUIDITY_PERCENT",e.LIQUIDITY="LIQUIDITY",e.CURRENCY_A="CURRENCY_A",e.CURRENCY_B="CURRENCY_B"}(Jm||(Jm={}));const Qm=Object(Se.b)("burn/typeInputBurn");function $m(){return Object(d.c)(e=>e.burn)}const Gm=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  padding: ${e=>{let{selected:t}=e;return t?"18px 16px":"0.75rem 0.75rem 0.75rem 1rem"}};
`,Zm=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.text1}};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 7px 16px 16px 16px;
  span:hover {
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return Object(aa.a)(.2,t.text2)}};
  }
`,ep=ue.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,tp=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}}
  position: relative;
  border-radius: ${e=>{let{hideInput:t}=e;return t?"8px":"20px"}};
  background-color: ${e=>{let{theme:t}=e;return t.bg2}};
  z-index: 1;
`,np=ue.default.div`
  border-radius: ${e=>{let{hideInput:t}=e;return t?"8px":"20px"}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.bg2}};
  background-color: ${e=>{let{theme:t}=e;return t.bg1}};
`,ap=ue.default.span`
  ${e=>{let{active:t}=e;return t?"  margin: 0 0.25rem 0 0.75rem;":"  margin: 0 0.25rem 0 0.25rem;"}}
  font-size:  ${e=>{let{active:t}=e;return t?"20px":"16px"}};
`,op=ue.default.button`
  height: 28px;
  border: 1px solid transparent;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  color: #48e8cc;
  background: #e2fffa;
  border-radius: 8px;
  padding: 5px 8px;
  display: inline-flex;
  align-items: center;
  :hover {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary1}};
  }
  :focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary1}};
    outline: none;
  }

  margin-left: 8px;
`;var rp=e=>{let{value:t,onUserInput:n,onMax:a,showMaxButton:i,label:l="Input",onCurrencySelect:s,currency:c,disableCurrencySelect:d=!1,hideBalance:u=!1,pair:m=null,hideInput:p=!1,otherCurrency:f,id:b,showCommonBases:g}=e;const[y,h]=Object(o.useState)(!1),{account:v}=be(),x=Oc(null!==v&&void 0!==v?v:void 0,null!==c&&void 0!==c?c:void 0),E=Object(o.useCallback)(()=>{h(!1)},[h]);return r.a.createElement(tp,{id:b},r.a.createElement(np,{hideInput:p},r.a.createElement(Gm,{style:p?{padding:"0",borderRadius:"8px"}:{},selected:d},!p&&r.a.createElement(eu,{className:"token-amount-input",value:t,onUserInput:e=>{n(e)}}),r.a.createElement(om,{purpleSelect:!(c&&c.symbol)&&"#B5ADFF",className:"open-currency-select-button",onClick:()=>{d||h(!0)}},r.a.createElement(ep,null,m?r.a.createElement(Ws,{currency0:m.token0,currency1:m.token1,size:24,margin:!0}):c?r.a.createElement(Ds,{currency:c,size:"28px"}):null,m?r.a.createElement(ap,{className:"pair-name-container"},null===m||void 0===m?void 0:m.token0.symbol,":",null===m||void 0===m?void 0:m.token1.symbol):r.a.createElement(ap,{className:"token-symbol-container",active:Boolean(c&&c.symbol)},(c&&c.symbol&&c.symbol.length>20?c.symbol.slice(0,4)+"..."+c.symbol.slice(c.symbol.length-5,c.symbol.length):null===c||void 0===c?void 0:c.symbol)||"select a token"),!d&&r.a.createElement("img",{src:gu.a,alt:""})))),!p&&r.a.createElement(Zm,null,r.a.createElement(yn,null,r.a.createElement("div",null),v&&r.a.createElement(Aa.body,{onClick:a,color:"#988EB7",fontWeight:500,fontSize:14,lineHeight:"17px",style:{display:"inline",cursor:"pointer"}},!u&&c&&x?"Balance: "+(null===x||void 0===x?void 0:x.toSignificant(6)):" -",v&&c&&i&&"To"!==l&&r.a.createElement(op,{onClick:a},"MAX"))))),!d&&s&&r.a.createElement(tm,{isOpen:y,onDismiss:E,onCurrencySelect:s,selectedCurrency:c,otherSelectedCurrency:f,showCommonBases:g}))};var ip=e=>{let{value:t,onUserInput:n,onMax:a,showMaxButton:i,onCurrencySelect:l,currency:s,disableCurrencySelect:c=!1,pair:d=null,hideInput:u=!1,otherCurrency:m,id:p,showCommonBases:f}=e;const[b,g]=Object(o.useState)(!1),{account:y}=be(),h=Object(o.useCallback)(()=>{g(!1)},[g]);return r.a.createElement(tp,{id:p},r.a.createElement(np,{hideInput:u},r.a.createElement(Gm,{style:u?{padding:"0",borderRadius:"8px"}:{},selected:c},!u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(eu,{className:"token-amount-input",value:t,onUserInput:e=>{n(e)}}),y&&s&&i&&r.a.createElement(op,{style:{marginRight:"8px"},onClick:a},"MAX")),r.a.createElement(om,{purpleSelect:!(s&&s.symbol)&&"#B5ADFF",className:"open-currency-select-button",onClick:()=>{c||g(!0)}},r.a.createElement(ep,null,d?r.a.createElement(Ws,{currency0:d.token0,currency1:d.token1,size:24,margin:!0}):s?r.a.createElement(Ds,{currency:s,size:"28px"}):null,d?r.a.createElement(ap,{className:"pair-name-container"},null===d||void 0===d?void 0:d.token0.symbol,":",null===d||void 0===d?void 0:d.token1.symbol):r.a.createElement(ap,{className:"token-symbol-container",active:Boolean(s&&s.symbol)},(s&&s.symbol&&s.symbol.length>20?s.symbol.slice(0,4)+"..."+s.symbol.slice(s.symbol.length-5,s.symbol.length):null===s||void 0===s?void 0:s.symbol)||"select a token"),!c&&r.a.createElement("img",{src:gu.a,alt:""}))))),!c&&l&&r.a.createElement(tm,{isOpen:b,onDismiss:h,onCurrencySelect:l,selectedCurrency:s,otherSelectedCurrency:m,showCommonBases:f}))};const lp=ue.default.div`
  background: #c9c8e4;
  border-radius: 24px 24px 0 0;
  padding: 16px;
`,sp=ue.default.div`
  background: white;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);
  border: 1px solid #c9c8e7;
  padding: 16px;
`;function cp(e){var t,n,a,i,l,s,m,p,f,b,g,y;let{history:h,match:{params:{currencyIdA:v,currencyIdB:x}}}=e;const[E,w]=Object(o.useState)(!0),[A,k]=[null!==(t=Fn(v))&&void 0!==t?t:void 0,null!==(n=Fn(x))&&void 0!==n?n:void 0],{account:C,chainId:S,library:O}=be(),[I,T]=Object(o.useMemo)(()=>[dc(A,S),dc(k,S)],[A,k,S]),j=Object(o.useContext)(ue.ThemeContext),N=Be(),{independentField:R,typedValue:B}=$m(),{pair:U,parsedAmounts:P,error:M}=function(e,t){var n,a;const{account:o,chainId:r}=be(),{independentField:i,typedValue:l}=$m(),[,s]=gc(e,t),c=kc(null!==o&&void 0!==o?o:void 0,[null===s||void 0===s?void 0:s.liquidityToken]),d=null===c||void 0===c?void 0:c[null!==(n=null===s||void 0===s||null===(a=s.liquidityToken)||void 0===a?void 0:a.address)&&void 0!==n?n:""],[m,p]=[dc(e,r),dc(t,r)],f={[Jm.CURRENCY_A]:m,[Jm.CURRENCY_B]:p,[Jm.LIQUIDITY]:null===s||void 0===s?void 0:s.liquidityToken},b=ed(null===s||void 0===s?void 0:s.liquidityToken),g=s&&b&&d&&m&&u.JSBI.greaterThanOrEqual(b.raw,d.raw)?new u.TokenAmount(m,s.getLiquidityValue(m,b,d,!1).raw):void 0,y=s&&b&&d&&p&&u.JSBI.greaterThanOrEqual(b.raw,d.raw)?new u.TokenAmount(p,s.getLiquidityValue(p,b,d,!1).raw):void 0,h={[Jm.CURRENCY_A]:g,[Jm.CURRENCY_B]:y};let v=new u.Percent("0","100");if(i===Jm.LIQUIDITY_PERCENT)v=new u.Percent(l,"100");else if(i===Jm.LIQUIDITY){if(null===s||void 0===s?void 0:s.liquidityToken){const e=id(l,s.liquidityToken);e&&d&&!e.greaterThan(d)&&(v=new u.Percent(e.raw,d.raw))}}else if(f[i]){const e=id(l,f[i]),t=h[i];e&&t&&!e.greaterThan(t)&&(v=new u.Percent(e.raw,t.raw))}const x={[Jm.LIQUIDITY_PERCENT]:v,[Jm.LIQUIDITY]:d&&v&&v.greaterThan("0")?new u.TokenAmount(d.token,v.multiply(d.raw).quotient):void 0,[Jm.CURRENCY_A]:m&&v&&v.greaterThan("0")&&g?new u.TokenAmount(m,v.multiply(g.raw).quotient):void 0,[Jm.CURRENCY_B]:p&&v&&v.greaterThan("0")&&y?new u.TokenAmount(p,v.multiply(y.raw).quotient):void 0};let E;var w;return o||(E="Connect Wallet"),x[Jm.LIQUIDITY]&&x[Jm.CURRENCY_A]&&x[Jm.CURRENCY_B]||(E=null!==(w=E)&&void 0!==w?w:"Enter an amount"),{pair:s,parsedAmounts:x,error:E}}(null!==A&&void 0!==A?A:void 0,null!==k&&void 0!==k?k:void 0),{onUserInput:D}=function(){const e=Object(d.b)();return{onUserInput:Object(o.useCallback)((t,n)=>{e(Qm({field:t,typedValue:n}))},[e])}}(),L=!M,[z,X]=Object(o.useState)(!1),[W,H]=Object(o.useState)(!1),[q,V]=Object(o.useState)(!1),[K,Y]=Object(o.useState)(""),[_]=$n(),[J]=Qn(),Q={[Jm.LIQUIDITY_PERCENT]:P[Jm.LIQUIDITY_PERCENT].equalTo("0")?"0":P[Jm.LIQUIDITY_PERCENT].lessThan(new u.Percent("1","100"))?"<1":P[Jm.LIQUIDITY_PERCENT].toFixed(0),[Jm.LIQUIDITY]:R===Jm.LIQUIDITY?B:null!==(a=null===(i=P[Jm.LIQUIDITY])||void 0===i?void 0:i.toSignificant(6))&&void 0!==a?a:"",[Jm.CURRENCY_A]:R===Jm.CURRENCY_A?B:null!==(l=null===(s=P[Jm.CURRENCY_A])||void 0===s?void 0:s.toSignificant(6))&&void 0!==l?l:"",[Jm.CURRENCY_B]:R===Jm.CURRENCY_B?B:null!==(m=null===(p=P[Jm.CURRENCY_B])||void 0===p?void 0:p.toSignificant(6))&&void 0!==m?m:""},$=null===(f=P[Jm.LIQUIDITY_PERCENT])||void 0===f?void 0:f.equalTo(new u.Percent("1")),G=Xt(null===U||void 0===U||null===(b=U.liquidityToken)||void 0===b?void 0:b.address,Ct.a,Z);var Z;const[ee,te]=Object(o.useState)(null),[ne,ae]=$c(P[Jm.LIQUIDITY],F);const oe=Object(o.useCallback)((e,t)=>(te(null),D(e,t)),[D]),re=Object(o.useCallback)(e=>oe(Jm.LIQUIDITY,e),[oe]),ie=Object(o.useCallback)(e=>oe(Jm.CURRENCY_A,e),[oe]),le=Object(o.useCallback)(e=>oe(Jm.CURRENCY_B,e),[oe]),se=en();async function ce(){if(!S||!O||!C)throw new Error("missing dependencies");const{[Jm.CURRENCY_A]:e,[Jm.CURRENCY_B]:t}=P;if(!e||!t)throw new Error("missing currency amounts");const n=Et(0,O,C),a={[Jm.CURRENCY_A]:vt(e,J)[0],[Jm.CURRENCY_B]:vt(t,J)[0]};if(!A||!k)throw new Error("missing tokens");const o=P[Jm.LIQUIDITY];if(!o)throw new Error("missing liquidity amount");const r=k===u.ETHER,i=A===u.ETHER||r,l=Math.ceil(Date.now()/1e3)+_;if(!I||!T)throw new Error("could not wrap");let s,d;if(ne===Jc.APPROVED)i?(s=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],d=[r?I.address:T.address,o.raw.toString(),a[r?Jm.CURRENCY_A:Jm.CURRENCY_B].toString(),a[r?Jm.CURRENCY_B:Jm.CURRENCY_A].toString(),C,l]):(s=["removeLiquidity"],d=[I.address,T.address,o.raw.toString(),a[Jm.CURRENCY_A].toString(),a[Jm.CURRENCY_B].toString(),C,l]);else{if(null===ee)throw new Error("Attempting to confirm without approval or a signature. Please contact support.");i?(s=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],d=[r?I.address:T.address,o.raw.toString(),a[r?Jm.CURRENCY_A:Jm.CURRENCY_B].toString(),a[r?Jm.CURRENCY_B:Jm.CURRENCY_A].toString(),C,ee.deadline,!1,ee.v,ee.r,ee.s]):(s=["removeLiquidityWithPermit"],d=[I.address,T.address,o.raw.toString(),a[Jm.CURRENCY_A].toString(),a[Jm.CURRENCY_B].toString(),C,ee.deadline,!1,ee.v,ee.r,ee.s])}const m=await Promise.all(s.map(e=>n.estimateGas[e](...d).then(ht).catch(t=>{console.error("estimateGas failed",e,d,t)}))),p=m.findIndex(e=>it.a.isBigNumber(e));if(-1===p)console.error("This transaction would fail. Please contact support.");else{const e=s[p],t=m[p];V(!0),await n[e](...d,{gasLimit:t}).then(e=>{var t,n;V(!1),se(e,{summary:"Remove "+(null===(t=P[Jm.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3))+" "+(null===A||void 0===A?void 0:A.symbol)+" and "+(null===(n=P[Jm.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3))+" "+(null===k||void 0===k?void 0:k.symbol)}),Y(e.hash),c.a.event({category:"Liquidity",action:"Remove",label:[null===A||void 0===A?void 0:A.symbol,null===k||void 0===k?void 0:k.symbol].join("/")})}).catch(e=>{V(!1),console.error(e)})}}function de(){var e,t;return r.a.createElement(Ll,{style:{border:"none",padding:"24px 16px",marginBottom:"16px"}},r.a.createElement(gi,{gap:"11px"},r.a.createElement(na.a,{paddingBottom:"4px",fontSize:16,fontWeight:500,color:"#281071",lineHeight:"20px"},"You will receive:"),r.a.createElement(yn,{align:"flex-end",padding:"0"},r.a.createElement(na.a,{fontSize:28,fontWeight:600},null===(e=P[Jm.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)),r.a.createElement(ba,null,r.a.createElement(vn,{gap:"4px"},r.a.createElement(Ds,{currency:A,size:"24px"}),r.a.createElement(na.a,{fontSize:18,fontWeight:600,style:{marginLeft:"10px"}},null===A||void 0===A?void 0:A.symbol)))),r.a.createElement(vn,{marginLeft:"16px"},r.a.createElement(zm.a,{size:"16",color:"#25116c"})),r.a.createElement(yn,{align:"flex-end",padding:"0"},r.a.createElement(na.a,{fontSize:28,fontWeight:600},null===(t=P[Jm.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)),r.a.createElement(ba,null,r.a.createElement(vn,{gap:"4px"},r.a.createElement(Ds,{currency:k,size:"24px"}),r.a.createElement(na.a,{fontSize:18,fontWeight:600,style:{marginLeft:"10px"}},null===k||void 0===k?void 0:k.symbol))))))}function me(){var e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(lp,null,r.a.createElement(Hd,{price:U.priceOf(I).toSignificant(6),priceInvert:U.priceOf(T).toSignificant(6),currencySymbolA:null===A||void 0===A?void 0:A.symbol,currencySymbolB:null===k||void 0===k?void 0:k.symbol,isInverted:E,toggleInverted:()=>{w(e=>!e)}})),r.a.createElement(sp,null,r.a.createElement(yn,{padding:"0"},r.a.createElement(na.a,{color:"#988EB7",fontWeight:500,fontSize:14},(null===A||void 0===A?void 0:A.symbol)+"/"+(null===k||void 0===k?void 0:k.symbol)," Burned"),r.a.createElement(vn,null,r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",marginRight:"8px"},null===(e=P[Jm.LIQUIDITY])||void 0===e?void 0:e.toSignificant(6)),r.a.createElement(Ws,{currency0:A,currency1:k})))),r.a.createElement(qd,{allowedSlippagePercent:J/100+"%"}),r.a.createElement(er,{marginTop:"16px",disabled:!(ne===Jc.APPROVED||null!==ee),onClick:ce},r.a.createElement(na.a,{fontWeight:500,fontSize:20},"Confirm")))}const pe=`Removing ${null===(g=P[Jm.CURRENCY_A])||void 0===g?void 0:g.toSignificant(6)} ${null===A||void 0===A?void 0:A.symbol} and ${null===(y=P[Jm.CURRENCY_B])||void 0===y?void 0:y.toSignificant(6)} ${null===k||void 0===k?void 0:k.symbol}`,fe=Object(o.useCallback)(e=>{oe(Jm.LIQUIDITY_PERCENT,e.toString())},[oe]),ge=(A===u.ETHER||u.ETHER,Boolean(S&&(A&&Object(u.currencyEquals)(u.WKSX[S],A)||k&&Object(u.currencyEquals)(u.WKSX[S],k)))),ye=Object(o.useCallback)(e=>{x&&Kd(e)===x?h.push(`/remove/${Kd(e)}/${v}`):h.push(`/remove/${Kd(e)}/${x}`)},[v,x,h]),he=Object(o.useCallback)(e=>{v&&Kd(e)===v?h.push(`/remove/${x}/${Kd(e)}`):h.push(`/remove/${v}/${Kd(e)}`)},[v,x,h]),ve=Object(o.useCallback)(()=>{X(!1),te(null),K&&oe(Jm.LIQUIDITY_PERCENT,"0"),Y("")},[oe,K]),[xe,Ee]=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;const[a,r]=Object(o.useState)(()=>e),i=Object(o.useRef)(),l=Object(o.useCallback)(e=>{r(e),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{t(e),i.current=void 0},n)},[n,t]);return Object(o.useEffect)(()=>{i.current&&(clearTimeout(i.current),i.current=void 0),r(e)},[e]),[a,l]}(Number.parseInt(P[Jm.LIQUIDITY_PERCENT].toFixed(0)),fe),we=r.a.createElement(gi,{gap:"20px",style:{padding:"16px"}},r.a.createElement(yn,null,r.a.createElement(na.a,{fontWeight:500,fontSize:14,color:"#3B199F",lineHeight:"17px"},"Amount")),r.a.createElement(xn,{style:{alignItems:"center",justifyContent:"space-between"}},r.a.createElement(na.a,{fontSize:40,fontWeight:600,color:"#281071",lineHeight:"49px"},Q[Jm.LIQUIDITY_PERCENT],"%"),!W&&r.a.createElement(xn,{justifyContent:"flex-end"},r.a.createElement(wd,{onClick:()=>oe(Jm.LIQUIDITY_PERCENT,"25"),width:"20%"},"25%"),r.a.createElement(wd,{onClick:()=>oe(Jm.LIQUIDITY_PERCENT,"50"),width:"20%"},"50%"),r.a.createElement(wd,{onClick:()=>oe(Jm.LIQUIDITY_PERCENT,"75"),width:"20%"},"75%"),r.a.createElement(wd,{onClick:()=>oe(Jm.LIQUIDITY_PERCENT,"100"),width:"20%"},"Max"))),!W&&r.a.createElement(_m,{value:xe,onChange:Ee})),Ae=r.a.createElement(gi,{gap:"16px",style:{padding:"24px 16px 16px 16px"}},r.a.createElement(yn,null,r.a.createElement(na.a,{fontSize:20,fontWeight:600,color:"#281071",lineHeight:"24px"},Q[Jm.CURRENCY_A]||"-"),r.a.createElement(vn,{style:{padding:"8px 12px",background:"#F5F6F9",borderRadius:"16px"}},r.a.createElement(Ds,{currency:A,style:{marginRight:"6px"}}),r.a.createElement(na.a,{fontSize:18,fontWeight:600,color:"#281071",lineHeight:"21px",id:"remove-liquidity-tokena-symbol"},null===A||void 0===A?void 0:A.symbol))),r.a.createElement(yn,null,r.a.createElement(na.a,{fontSize:20,fontWeight:600,color:"#281071",lineHeight:"24px"},Q[Jm.CURRENCY_B]||"-"),r.a.createElement(vn,{style:{padding:"8px 12px",background:"#F5F6F9",borderRadius:"16px"}},r.a.createElement(Ds,{currency:k,style:{marginRight:"6px"}}),r.a.createElement(na.a,{fontSize:18,fontWeight:600,color:"#281071",lineHeight:"21px",id:"remove-liquidity-tokenb-symbol"},null===k||void 0===k?void 0:k.symbol)))),ke=r.a.createElement(ip,{value:Q[Jm.CURRENCY_A],onUserInput:ie,onMax:()=>oe(Jm.LIQUIDITY_PERCENT,"100"),showMaxButton:!$,currency:A,onCurrencySelect:ye,id:"remove-liquidity-tokena"}),Ce=r.a.createElement(ip,{value:Q[Jm.CURRENCY_B],onUserInput:le,onMax:()=>oe(Jm.LIQUIDITY_PERCENT,"100"),showMaxButton:!$,currency:k,onCurrencySelect:he,id:"remove-liquidity-tokenb"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(vd,null,r.a.createElement(sc,{label:"Remove Liquidity"}),r.a.createElement(pa,null,r.a.createElement(xd,null,r.a.createElement(hs,{isOpen:z,onDismiss:ve,attemptingTxn:q,hash:K||"",content:()=>r.a.createElement(gs,{title:"Confirm Remove",onDismiss:ve,topContent:de,bottomContent:me}),pendingText:pe}),r.a.createElement(gi,{gap:"md"},r.a.createElement(yn,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{marginRight:"10px",padding:"8px 10px",background:"rgba(0, 0 ,0 , 0.07)",borderRadius:"16px"}},r.a.createElement(Ws,{currency0:A,currency1:k,size:24})),r.a.createElement(na.a,{fontSize:18,fontWeight:500,color:"#281071",lineHeight:"21px",fontStyle:"oblique"},null===A||void 0===A?void 0:A.symbol,"/",null===k||void 0===k?void 0:k.symbol)),r.a.createElement(Ed,{fontWeight:500,onClick:()=>{H(!W)}},r.a.createElement(rr,null,W?"Simple":"Detailed"))),W?r.a.createElement(zl,null,we):r.a.createElement($d,{topBox:we,bottomBox:Ae,switchIcon:r.a.createElement(bi,null,r.a.createElement(Vm.a,{size:"16",color:j.text2}))}),W&&r.a.createElement(r.a.Fragment,null,r.a.createElement(rp,{value:Q[Jm.LIQUIDITY],onUserInput:re,onMax:()=>{oe(Jm.LIQUIDITY_PERCENT,"100")},showMaxButton:!$,disableCurrencySelect:!0,currency:null===U||void 0===U?void 0:U.liquidityToken,pair:U,id:"liquidity-amount"}),r.a.createElement(bi,null,r.a.createElement(Vm.a,{size:"16",color:"#28156e"})),r.a.createElement($d,{topBox:ke,bottomBox:Ce,switchIcon:r.a.createElement(bi,null,r.a.createElement(zm.a,{size:"16",color:"#28156e"}))})),U&&r.a.createElement("div",{style:{padding:"10px 20px"}},r.a.createElement(yn,null,"Price:",r.a.createElement("div",null,"1 ",null===A||void 0===A?void 0:A.symbol," = ",I?U.priceOf(I).toSignificant(6):"-"," ",null===k||void 0===k?void 0:k.symbol)),r.a.createElement(yn,null,r.a.createElement("div",null),r.a.createElement("div",null,"1 ",null===k||void 0===k?void 0:k.symbol," = ",T?U.priceOf(T).toSignificant(6):"-"," ",null===A||void 0===A?void 0:A.symbol))),r.a.createElement("div",{style:{position:"relative"}},C?r.a.createElement(yn,null,ne!==Jc.APPROVED&&!ee&&r.a.createElement(er,{disabled:ne!==Jc.NOT_APPROVED,onClick:async function(){if(!G||!U||!O)throw new Error("missing dependencies");const e=P[Jm.LIQUIDITY];if(!e)throw new Error("missing liquidity amount");const t=await G.nonces(C),n=Math.ceil(Date.now()/1e3)+_,a={name:"Uniswap V2",version:"1",chainId:S,verifyingContract:U.liquidityToken.address},o={owner:C,spender:F,value:e.raw.toString(),nonce:t.toHexString(),deadline:n},r=JSON.stringify({types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},domain:a,primaryType:"Permit",message:o});O.send("eth_signTypedData_v4",[C,r]).then(qm.splitSignature).then(e=>{te({v:e.v,r:e.r,s:e.s,deadline:n})}).catch(e=>{4001!==(null===e||void 0===e?void 0:e.code)&&ae()})},mr:"0.5rem",fontWeight:600,fontSize:20,lineHeight:"24px"},"Approve"),r.a.createElement(mr,{onClick:()=>{X(!0)},disabled:!L||null===ee&&ne!==Jc.APPROVED,error:!L&&!!P[Jm.CURRENCY_A]&&!!P[Jm.CURRENCY_B]},r.a.createElement(na.a,{fontSize:20,fontWeight:600,lineHeight:"24px"},M||"Remove"))):r.a.createElement(tr,{onClick:N},"Connect Wallet")))))),U?r.a.createElement(gi,{style:{minWidth:"20rem",marginTop:"1rem",maxWidth:"384px"}},r.a.createElement(xm,{showUnwrapped:ge,pair:U})):null)}const dp=/^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;function up(e){let{match:{params:{tokens:t}}}=e;if(!dp.test(t))return r.a.createElement(de.a,{to:"/pool"});const[n,a]=t.split("-");return r.a.createElement(de.a,{to:`/remove/${n}/${a}`})}function mp(e){let{location:t}=e;return r.a.createElement(de.a,{to:{...t,pathname:"/swap"}})}function pp(e){const{location:{search:t},match:{params:{outputCurrency:n}}}=e;return r.a.createElement(de.a,{to:{...e.location,pathname:"/swap",search:t&&t.length>1?`${t}&outputCurrency=${n}`:"?outputCurrency="+n}})}var fp=function(e,t){arguments.length>2&&void 0!==arguments[2]||t[0];const[n,a]=Object(o.useState)(""),{pathname:r}=Object(de.g)();return Object(o.useLayoutEffect)(()=>{const t=r.indexOf(e);a(r.slice(t+e.length+1))},[e,r]),{route:n}};const bp=ue.default.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  .token-icon {
    width: 38px;
    height: 38px;
    margin-right: 0.5rem;
  }

  .token-info {
    display: flex;
    flex-direction: column;

    .token-unit {
      font-size: 18px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-weight: 500;
      color: #000000;
      line-height: 24px;
    }

    .token-chain {
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-weight: 400;
      color: #919191;
      line-height: 20px;
    }
  }
`,gp=ue.default.div`
  padding: 16px 24px;
  border-radius: 24px;
  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  .ant-table {
    border-radius: 24px;
    background-color: transparent !important;
  }

  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table {
    border: none !important;
  }

  &.ant-table-wrapper {
    width: 100%;
  }
  .ant-table.ant-table-bordered > .ant-table-container {
    border: none !important;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: #f1f5fb;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > th,
  .ant-table tfoot > tr > td {
    padding: 12px;
  }

  .ant-table-tbody > tr > td,
  .ant-table-thead > tr > th {
    border: none !important;
  }
`,yp=ue.default.div`
  width: 100%;
  padding: 24px 0;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border-radius: 24px;
`,hp=ue.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(82deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0.4) 100%);
  padding: 12px 0;
  > div {
    font-size: 14px;
    font-weight: 500;
    color: #988eb7;
    line-height: 17px;
  }
  > div:nth-child(1) {
    padding-left: 78px;
  }
  > div:nth-child(3) {
    margin-right: 200px;
  }
`,vp=ue.default.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #48e8cc;
  padding: 12px 24px;
  box-shadow: 0px 2px 4px 0px rgba(78, 91, 201, 0.12), inset 0px 0px 5px 0px rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  border: none;
  :hover {
    cursor: pointer;
    background: #41d2b8;
  }
  > img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  > span {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    line-height: 20px;
  }
`,xp=ue.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .rowItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
    .title {
      font-size: 16px;
      font-weight: 600;
      color: #281071;
      line-height: 20px;
    }
  }
  .btnWrapper {
    display: flex;
    align-items: center;
    padding: 14px 34px;
    background: #dcdcf4;
    box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
    border-radius: 16px;
    border: 1px solid #ffffff;
    font-size: 18px;
    font-weight: 600;
    color: #281071;
    line-height: 21px;
    > img {
      margin-right: 8px;
    }
    > span {
      width: 66px;
      white-space: nowrap;
    }
  }
  .btnSwitch {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    background: #dcdcf4;
    box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
    border-radius: 12px;
    border: 1px solid #ffffff;
    > img {
      width: 16px;
      height: 16px;
    }
    //:hover{
    //  background: #988eb7;
    //}
  }
`,Ep=ue.default.div`
  display: flex;
  flex-direction: row;
`,wp=ue.default.div`
  border-radius: 16px;
  margin-right: 8px;
  border: 1px solid transparent;
  width: fit-content;
  justify-content: center;
  padding: 14px 0;
  :hover,
  :active {
    border:  ${e=>{let{canSelect:t}=e;return t?"":"1px solid #d0cfe4;"}};
    background: ${e=>{let{canSelect:t}=e;return t?"":"#b5adff"}};
    cursor: ${e=>{let{canSelect:t}=e;return t?"not-allowed":"pointer"}};
  }
  > span {
    padding: 0 22px;
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{let{canSelect:t}=e;return t?"#D3CEE0":"#3b199f"}};
    line-height: 20px;
  }
`,Ap=ue.default.div`
  .account-info {
    display: flex;
    align-items: center;
    margin: 24px 44px;
    .account-name-address {
      display: flex;
      flex-direction: column;
      > span {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: #988eb7;
        line-height: 17px;
        > img {
          width: 16px;
          height: 16px;
          margin: 0 4px;
        }
      }
      .account-name {
        font-size: 18px;
        font-weight: 600;
        color: #222222;
        line-height: 21px;
      }
    }
    .account-avatar {
      margin-right: 8px;
    }
  }
`;var kp=n(673),Cp=n.n(kp);const Sp=ue.default.div`
  min-height: 69px;
  display: flex;
  align-items: center;
  padding: 19px 16px;
  margin: 6px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border-radius: 20px;
  border: 1px solid #e8eaf1;
  .icon {
    width: 38px;
    height: 38px;
    margin-right: 10px;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
    color: #3b199f;
    line-height: 21px;
  }
  &:hover {
    cursor: pointer;
    background: #dcdcf4;
    box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
    border-radius: 20px;
    border: 1px solid #6d4ec9;
  }
  &.selected {
    background: #E4E8F2;
    border-radius: 24px;
    border: 1px solid transparent;
  }
  > img {
    border-radius: 50%;
  }
`;var Op=e=>{let{icon:t,name:n,onClick:a,className:o=""}=e;return r.a.createElement(Sp,{onClick:a,className:o},r.a.createElement("img",{className:"icon",src:t,alt:n}),r.a.createElement("span",{className:"name"},n))};const Ip=ue.default.div`
  display: grid;
  grid-template-columns: 50% 2fr;
  grid-gap: 5px;
  padding: 12px;
`;var Tp=r.a.memo(e=>{let{isOpen:t,closeModal:n,title:a,itemList:o,selectedName:i,handleChange:l}=e;return r.a.createElement(Kr,{className:"currency-search-dialog",bodyStyle:{padding:"0"},title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},a),visible:t,onCancel:n,footer:null,width:"570px"},r.a.createElement(gi,{gap:"lg"},r.a.createElement(Ip,null,o.map(e=>r.a.createElement(Op,{key:e.name,className:""+(i===e.name?"selected":""),icon:e.logo,name:e.name,onClick:()=>{l(e)}})))))});const jp=ue.default.ul`
  min-width: 280px;
  position: absolute;
  list-style: none;
  z-index: 2;
  top: 200px;
  right: 0;
  background: #f1f5fb;
  border-radius: 16px;
  border-top: 16px solid #f1f5fb;
  border-bottom: 16px solid #f1f5fb;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 1%), 0px 4px 8px rgb(0 0 0 / 4%), 0px 16px 24px rgb(0 0 0 / 4%),
    0px 24px 32px rgb(0 0 0 / 1%);
  max-height: 15rem;
  overflow-y: scroll;
  color: #565a69;
  font-weight: 500;
  margin: 0;
  padding-inline-start: 0;
  ${e=>{let{listStyle:t}=e;return t&&t}};

  li {
    padding: 0 16px;
    margin-bottom: 8px;
    &:hover {
      cursor: pointer;
      background: #ffffff;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .rowItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 280px;
    > img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    > div {
      flex-direction: row;
      justify-content: space-between;
      font-size: 16px;
      font-weight: 500;
      color: #281071;
      line-height: 20px;
    }
    .Title {
      flex-direction: column;
      padding: 11px 0;
      > div:nth-child(2) {
        font-size: 12px;
        font-weight: 400;
        color: #aba5bd;
        line-height: 17px;
      }
    }
    .balance {
      display: flex;
      justify-content: end;
      min-width: 120px;
      width: 100%;
    }
  }
`;var Np=e=>{let{value:t,setValue:n,options:a,setAssetsId:i,setAssetsObj:l,currentObj:s,listStyle:c}=e;const[d,u]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{const e=e=>{e.currentTarget.activeElement.className.includes("open-currency-select-button")?u(!d):u(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(mu,{backgroundPurple:s&&0===s.length,disableCurrencySelect:d,currency:s,currencySymbol:t,showOptionsList:a.length>1}),d&&a.length>1&&r.a.createElement(jp,{listStyle:c},null===a||void 0===a?void 0:a.map(e=>r.a.createElement("li",{key:null===e||void 0===e?void 0:e.symbol,onClick:()=>((e,t,a)=>{u(!1),n(e),i(t),l&&l(a)})(null===e||void 0===e?void 0:e.symbol,null===e||void 0===e?void 0:e.assetId,e)},r.a.createElement("div",{className:"rowItem"},(null===e||void 0===e?void 0:e.logoURI)&&r.a.createElement("img",{src:null===e||void 0===e?void 0:e.logoURI,alt:""}),r.a.createElement("div",{className:"Title"},r.a.createElement("div",null,null===e||void 0===e?void 0:e.symbol),r.a.createElement("div",null,null===e||void 0===e?void 0:e.name)),r.a.createElement("div",{className:"balance"},null===e||void 0===e?void 0:e.balance))))))};async function Rp(e){var t;let{library:n,chainId:a}=e;if(!(null===n||void 0===n||null===(t=n.provider)||void 0===t?void 0:t.request))return;const o=Object(qm.hexStripZeros)(it.a.from(a).toHexString());try{await n.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]})}catch(r){if(4902!==r.code)throw r;{const e=ho[a];await n.provider.request({method:"wallet_addEthereumChain",params:[{chainId:o,chainName:e.label,rpcUrls:[e.addNetworkInfo.rpcUrl],nativeCurrency:e.addNetworkInfo.nativeCurrency,blockExplorerUrls:[e.explorer]}]});try{await n.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]})}catch(r){console.debug("Added network but could not switch chains",r)}}}}const Bp=ue.default.div`
  padding: 16px 0;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    .title-left {
      margin-right: 10px;
      height: 20px;
      font-size: 16px;
      font-weight: 600;
      color: #281071;
      line-height: 20px;
    }
  }
  .wrapper {
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
    border-radius: 24px;
    border: 2px solid #f7f8fa;
    padding: 18px 16px;
    :hover{
      border: 2px solid rgba(109, 78, 201, 0.57);
    }
  }
  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;
    font-size: 14px;
    font-weight: 500;
    color: #3b199f;
    line-height: 17px;
    min-height: 29px;
    & > div {
      font-size: 14px;
      font-weight: 500;
      color: #988eb7;
      line-height: 17px;
    }
    .max {
      cursor: pointer;
    }
    .card-receive {
      display: flex;
      align-items: center;
      color: #3b199f;
      > img {
        margin-right: 4px;
      }
    }
  }
  .card-down {
    display: flex;
    .amount {
      flex: 1;
      background-color: transparent;
    }
    .selected-token {
      display: flex;
      align-items: center;
      cursor: pointer;
      &-icon,
      &-arrow {
        width: 24px;
        height: 24px;
      }
      &-icon {
        margin-right: 6px;
      }
      &-name {
        font-size: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
          sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        font-weight: 600;
        color: #000000;
        line-height: 28px;
        margin-right: 2px;
      }
      > img {
        border-radius: 50%;
      }
    }
  }
`,Up=ue.default.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background: #e4e8f2;
  border-radius: 16px;
  border: 1px solid #ffffff;
  padding: 8px 12px;
  :hover {
    cursor: pointer;
    background: #dcdcf4;
  }
  .from-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .from-text {
    padding: 0px 6px;
    font-size: 18px;
    font-weight: 600;
    color: #281071;
    line-height: 21px;
  }
  .icon-arrow {
    width: 16px;
    height: 16px;
  }
`;ue.default.div``;var Pp=e=>{let{amount:t,setAmount:n,currentObj:a,setCurrentObj:i,setSelectValue:l,setInsufficient:s,options:c,transferAll:d,setTransferAll:u}=e;const{chainList:m,fromChain:p,setFromChain:f,setToChain:b}=jo(),{chainId:g,library:y}=be(),[h,v]=Object(o.useState)(!1),[,x]=Object(o.useState)(1),E=Object(o.useCallback)(()=>{v(!1)},[]),w=Object(o.useCallback)(()=>{u(!d),a&&(null===a||void 0===a?void 0:a.balance)&&n(null===a||void 0===a?void 0:a.balance)},[a]),A=Object(o.useCallback)(e=>{e.metaMaskId&&g!==e.metaMaskId?Rp({library:y,chainId:e.metaMaskId}).then(()=>{f(e),v(!1),e.wssUrl&&window.localStorage.setItem("chain_node",e.wssUrl),window.location.reload()}).catch(e=>{console.error("Failed to switch networks",e)}):(f(e),v(!1),window.localStorage.setItem("chain_node",e.wssUrl),window.location.reload())},[]);return Object(o.useEffect)(()=>{var e;const t=window.localStorage.getItem("chain_node"),n=mt.includes(g)?m.filter(e=>""===e.wssUrl&&e.metaMaskId===g)[0]:m.filter(e=>e.wssUrl===t)[0];f(n),b(n.targetChains[0]),l(null===(e=c[0])||void 0===e?void 0:e.name)},[g]),Object(o.useEffect)(()=>{u(parseFloat(t)===parseFloat(a.balance)),a.balance&&s(a.balance)},[t,a.balance]),r.a.createElement(Bp,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"card-top"},r.a.createElement("span",null,"Amount"),(null===a||void 0===a?void 0:a.balance)&&r.a.createElement(nm,{balanceValue:null===a||void 0===a?void 0:a.balance,balanceOnMax:w,transferAll:!d})),r.a.createElement("div",{className:"card-down"},r.a.createElement(Np,{value:null===a||void 0===a?void 0:a.symbol,currentObj:a,setValue:l,setAssetsObj:i,setAssetsId:x,options:c,listStyle:"left:16px;top:300px;"}),r.a.createElement(eu,{className:"token-amount-input",value:t,align:"right",onUserInput:e=>{n(e)}}))),r.a.createElement(Tp,{title:"Select Source Chain",isOpen:h,closeModal:E,itemList:m,selectedName:p.name,handleChange:A}))},Fp=n(674),Mp=n.n(Fp);var Dp=e=>{let{from:t,to:n,changeTransferMethod:a}=e;return r.a.createElement(xp,null,r.a.createElement("div",{className:"rowItem"},r.a.createElement("div",{className:"title"},"From"),r.a.createElement("div",{className:"title"},"To")),r.a.createElement("div",{className:"rowItem"},r.a.createElement("div",{className:"btnWrapper"},r.a.createElement("img",{src:t.icon,alt:""}),r.a.createElement("span",null,t.name)),r.a.createElement("div",{className:"btnSwitch",onClick:()=>a("Funding"===t.name?"Trading":"Funding")},r.a.createElement("img",{src:Mp.a,alt:""})),r.a.createElement("div",{className:"btnWrapper"},r.a.createElement("img",{src:n.icon,alt:""}),r.a.createElement("span",null,n.name))))};const Lp=e=>"KSX"===e.key;var zp=e=>{let{isOpen:t,onDismiss:n,amount:i,setAmount:l,insufficient:s,selectValue:c,currentObj:d,setCurrentObj:u,setSelectValue:m,setInsufficient:p,options:f,transferAll:b,setTransferAll:g,from:y,to:h,changeTransferMethod:v}=e;const{isUserBlocked:x}=_i(),{currentAccount:E}=Object(o.useContext)(qo),[w,A]=Object(o.useState)([]),[k,C]=Object(o.useState)(""),[S,O]=Object(o.useState)([]),I=Object(a.d)(),{library:T}=I;Object(o.useEffect)(()=>{if(f.data.length<=0)return;const e=f.data.map(e=>{const t={params:{first:e.assetId,second:new br.a(Number(i)).multipliedBy(new br.a(Math.pow(10,e.decimals))).toFixed()}};return e={...e,...t}}),t=e.findIndex(Lp),n=e.find(Lp);n.params={first:new br.a(Number(i)).multipliedBy(new br.a(Math.pow(10,18))).toFixed(),second:"Funding"===y.name?"FromSubToEth":"FromEthToSub"},e.splice(t,1,n),A(e)},[f,i,y]),Object(o.useEffect)(()=>{((e,t)=>{if(0===e.length)return;const n=t.filter(t=>t.symbol===e.symbol)[0],a=null===n||void 0===n?void 0:n.assetsBridgeFun,o=[null===n||void 0===n?void 0:n.params.first,null===n||void 0===n?void 0:n.params.second];O(o),C(a)})(d,w)},[d,w]);const j=null===f||void 0===f?void 0:f.data.map(e=>99!==e.assetId?e:null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Kr,{overflow:"visible",className:"currency-search-dialog",bodyStyle:{padding:"16px",display:"flex",flexDirection:"column",overflowX:"inherit",overflowY:"inherit"},title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},"Transfer"),visible:t,onCancel:n,footer:null},r.a.createElement(Dp,{from:y,to:h,changeTransferMethod:v}),r.a.createElement(Pp,{amount:i,selectValue:c,setAmount:l,currentObj:d,setCurrentObj:u,options:j.filter(e=>e),transferAll:b,setTransferAll:g,setSelectValue:m,setInsufficient:p}),r.a.createElement(gr,{address:null===E||void 0===E?void 0:E.address,params:S,extrinsics:"assetsBridge."+k,beforeOnClick:()=>{},summary:`transfer ${i} ${d.symbol} to ${"Funding"===y.name?"trading account":"funding account"}`,disabled:x||0==Number(i)||s<Number(i)||0===d.length,handleModalOpen:n},r.a.createElement(na.a,{fontSize:20,fontWeight:500},s<Number(i)?"Insufficient balance":"Transfer"))))},Xp=n(328),Wp=n.n(Xp);const Hp=ue.default.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border-radius: 20px;
  border: 1px solid #e8eaf1;
  padding: 16px;
  margin-bottom: 24px;
  .item {
    font-size: 14px;
    font-weight: 500;
    color: #aba5bd;
    line-height: 17px;
    padding: 8px 0;
  }
  .bindContent {
    display: flex;
    flex-direction: column;
    justify-content: left;
    .itemContent {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      color: #3b199f;
      line-height: 24px;
    }
  }
`;var qp=e=>{let{}=e;const{account:t,connector:n}=Object(a.d)(),{currentAccount:i}=Object(o.useContext)(qo);return r.a.createElement(Hp,null,r.a.createElement("div",{className:"item"},"The two wallets need to be bound before trading. "),r.a.createElement("div",{className:"bindContent"},r.a.createElement("div",{className:"itemContent"},r.a.createElement(yr.a,{className:"imgIcon",value:i.address,size:16,theme:"polkadot",style:{marginRight:"8px"}}),r.a.createElement("div",null,Qa(null===i||void 0===i?void 0:i.address))),r.a.createElement("span",{style:{width:"8px",height:"20px",borderRight:"1px dashed #aba5bd",margin:"2px 0"}}),r.a.createElement("div",{className:"itemContent"},r.a.createElement("img",{src:Wp.a,alt:"",style:{width:"16px",height:"16px",marginRight:"8px"}}),r.a.createElement("span",{style:{marginRight:"8px"}},n&&r.a.createElement(ui,{connector:n,size:16})),yt(t))),r.a.createElement("div",{className:"item"},"This action will lock",r.a.createElement("span",{style:{color:"#8A6FD9"}}," 1 ksx "),"and be returned when unbound."))},Vp=n(675),Kp=n.n(Vp);var Yp=e=>{let{isOpen:t,onDismiss:n}=e;const{account:i}=Object(a.d)(),{currentAccount:l,setCurrentAccount:s}=Object(o.useContext)(qo),[c,d]=Object(o.useState)(!1);return r.a.createElement(Kr,{className:"currency-search-dialog",bodyStyle:{padding:"24px",display:"flex",flexDirection:"column"},title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},"Bond address"),visible:t,onCancel:n,footer:null},r.a.createElement(qp,null),r.a.createElement(gr,{address:null===l||void 0===l?void 0:l.address,params:[i],disabled:c,extrinsics:"assetsBridge.claimAccount",beforeOnClick:d,key:"checkout-confirm",handleModalOpen:n,summary:Qa(null===l||void 0===l?void 0:l.address)+" bind"},c?r.a.createElement(ma,{src:Kp.a,style:{height:"32px",width:"24px",margin:"0"}}):"Binding"))};var _p=e=>{let{isOpen:t,onDismiss:n,amount:i,setAmount:l,currentObj:s,setCurrentObj:c,activeEvmTab:d,from:u,to:m,changeTransferMethod:p,options:f,TransferMethod:b,openBindDialog:g,setOpenBindDialog:y}=e;const{account:h,connector:v}=Object(a.d)(),[x,E]=Object(o.useState)(!1),[w,A]=Object(o.useState)(""),[k,C]=Object(o.useState)(0),{currentAccount:S}=Object(o.useContext)(qo);return r.a.createElement(Ap,null,r.a.createElement(cc,{active:d?"Trading(EVM)":"Funding(WASM)",width:177}),(null===S||void 0===S?void 0:S.address)&&h&&r.a.createElement(vp,{onClick:b},r.a.createElement("img",{src:Cp.a,alt:""}),r.a.createElement("span",null,"Transfer")),r.a.createElement(zp,{isOpen:t,insufficient:k,amount:i,setAmount:l,onDismiss:n,selectValue:w,currentObj:s,setCurrentObj:c,transferAll:x,setTransferAll:E,setSelectValue:A,setInsufficient:C,from:u,to:m,changeTransferMethod:p,options:f}),r.a.createElement(Yp,{isOpen:g,onDismiss:()=>y(!1)}),d?r.a.createElement("div",{className:"account-info"},r.a.createElement("span",{className:"account-avatar"},v&&r.a.createElement(ui,{connector:v,size:38})),r.a.createElement("div",{className:"account-name-address"},r.a.createElement("span",{className:"account-name"},yt(h)),(null===S||void 0===S?void 0:S.isBridgeConnect)&&r.a.createElement("span",null,r.a.createElement("img",{src:Wp.a,alt:""}),Qa(null===S||void 0===S?void 0:S.address)))):r.a.createElement("div",{className:"account-info"},r.a.createElement(yr.a,{className:"account-avatar",value:null===S||void 0===S?void 0:S.address,size:44,theme:"polkadot"}),r.a.createElement("div",{className:"account-name-address"},r.a.createElement("span",{className:"account-name"},null===S||void 0===S?void 0:S.name),r.a.createElement("span",null,Qa(null===S||void 0===S?void 0:S.address),S.isBridgeConnect&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:Wp.a,alt:""}),yt(h))))))};const Jp="https://raw.githubusercontent.com/RedPillPhil/token-list-1/patch-1/chainx.tokenlist.json",Qp=[Jp];var $p=n(676),Gp=n.n($p);const Zp={name:"Default",logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/icon_soswap.svg",keywords:["default","defi"],timestamp:"2021-05-27T20:37:00.000+00:00",tokens:[{chainId:1506,address:"0x901D113C77a5e6D07e01b4Fa2569A3Bd3eC18970",assetId:0,name:"ChainX",symbol:"XBTC",decimals:8,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/XBTC.svg"},{chainId:1506,address:"0xc91a8e500E814990b06BDb4fC10745124fdBE748",assetId:1,name:"SherpaX",symbol:"sBTC",decimals:8,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/sBTC.svg"},{chainId:1506,address:"0xa10AF02fD7eD3B5FF107B57bB1068a3f54BcAE92",assetId:2,name:"ChainX",symbol:"PCX",decimals:8,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/PCX.svg"},{chainId:1506,address:"0x91AAC463B5473BDe2Fdd910f09101ed687BCB97A",assetId:3,name:"MiniX",symbol:"MINI",decimals:8,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/MINI.svg"},{chainId:1506,address:"0xE7e312dfC08e060cda1AF38C234AEAcc7A982143",assetId:4,name:"SherpaX",symbol:"USB",decimals:18,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/USB.svg"},{chainId:1506,address:"0x0F5d9Ac5833C4d089097Fe2eAbBE546b9f10c422",assetId:5,name:"Polkadot",symbol:"DOT",decimals:10,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/DOT.svg"},{chainId:1506,address:"0xb513E3Cf3BD0CcFfB02Aefbc4794df3D01aB2515",assetId:6,name:"Kusama",symbol:"KSM",decimals:12,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/KSM.svg"},{chainId:1506,address:"0xF02c1292f3cabf203d6Ae0b8c85D679B2D47001c",assetId:99,name:"Binance Smart Chain",symbol:"BNB",decimals:18,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/BNB.svg"},{chainId:1506,address:"0x37088186089c7D6BcD556d9A15087DFaE3Ba0C32",assetId:99,name:"Binance Smart Chain",symbol:"BUSD",decimals:18,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/BUSD.svg"},{chainId:1506,address:"0x935CC842f220CF3A7D10DA1c99F01B1A6894F7C5",assetId:99,name:"Binance Smart Chain",symbol:"USDC",decimals:18,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/USDC.svg"},{chainId:1506,address:"0x4B53739D798EF0BEa5607c254336b40a93c75b52",assetId:99,name:"Binance Smart Chain",symbol:"USDT",decimals:18,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/USDT.svg"},{chainId:1506,address:"0xF373b95a00662ed1211948F414b252E56c0fa0C4",assetId:99,name:"SherpaX",symbol:"SO",decimals:18,logoURI:"https://raw.githubusercontent.com/chainx-org/token-list/main/assets/SO.svg"}],version:{major:2,minor:1,patch:1}};var ef=()=>{var e;const t=Object(d.c)(e=>e.lists.byUrl),n=Object(o.useMemo)(()=>{var e,n;return!(null===(e=t[Jp].current)||void 0===e?void 0:e.tokens)||Gp()(null===(n=t[Jp].current)||void 0===n?void 0:n.tokens,Zp.tokens)},[null===(e=t[Jp].current)||void 0===e?void 0:e.tokens]),a=Object(o.useMemo)(()=>{var e;return(null===(e=t[Jp].current)||void 0===e?void 0:e.tokens)?n?Zp:t[Jp].current:Zp},[n,t[Jp].current]);return{isUpToDate:n,upToDateTokenList:a}};var tf=(e,t)=>{const{api:n,isApiReady:a}=Uo(),{isSherpaxNode:r,fromChain:i}=jo(),{upToDateTokenList:l}=ef(),[s,c]=Object(o.useState)({}),d=Object(o.useMemo)(()=>null===l||void 0===l?void 0:l.tokens.filter(e=>99!==e.assetId),[l.tokens]);async function u(t){return await Promise.all(t.map(async t=>{const{decimals:a,assetId:o,symbol:r,logoURI:i,name:l}=t,s=await n.query.assets.account(o,e);let c;s.toJSON()&&(c=(null===s||void 0===s?void 0:s.toJSON()).balance);const d=c?new br.a(c).dividedBy(Math.pow(10,a)).toFixed(8):(0).toFixed(8);return{name:l,usableBalance:d,totalBalance:d,frozenBalance:0,symbol:r,icon:i,decimals:a,assetId:o}}))}const m=Object(o.useCallback)(async()=>{var t;const{data:a}=await(null===(t=n.query.system)||void 0===t?void 0:t.account(e)),o=a.toJSON();return{name:"SherpaX",usableBalance:new br.a(o.free).minus(new br.a(o.miscFrozen)).dividedBy(Math.pow(10,i.decimals)).toNumber().toFixed(8),totalBalance:new br.a(o.free).plus(new br.a(o.reserved)).dividedBy(Math.pow(10,i.decimals)).toNumber().toFixed(8),frozenBalance:new br.a(0).toFixed(8),symbol:i.symbol,icon:eo.a}},[e,n.query.system,i.decimals,i.symbol]);return Object(o.useEffect)(()=>{d&&e&&a&&(r?Promise.all([u(d),m()]).then(e=>{const t=e[0].concat(e[1]),n={};for(let a=0;a<t.length;a++)n[t[a].symbol]=t[a];c(n)}).catch(e=>{console.error(e)}):m().then(e=>{const t={};t.SherpaX=e,c(t)}))},[d,e,a,r,t]),{...s}};var nf=()=>{const e=JSON.parse(window.localStorage.getItem("substrate_asset_list")||"[]"),{upToDateTokenList:t}=ef(),{currentAccount:n}=Object(o.useContext)(qo),a=Object(o.useRef)({data:e,noData:0===e.length,isLoading:!1}),r=Object(o.useMemo)(()=>null===t||void 0===t?void 0:t.tokens.filter(e=>99!==e.assetId),[t.tokens]),i=tf(null===n||void 0===n?void 0:n.address,n.hasTxPending),l=Object(o.useMemo)(()=>r.map(e=>({name:e.name,key:e.symbol,balance:"",symbol:e.symbol,logoURI:e.logoURI,address:e.address,assetId:e.assetId,decimals:e.decimals,assetsBridgeFun:"KSX"===e.symbol?"teleport":"deposit"})).concat({balance:"",logoURI:eo.a,symbol:"KSX",assetId:0,name:"SherpaX",decimals:18,key:"KSX",address:"",assetsBridgeFun:"teleport"}).reverse(),[r]),s=Object(o.useCallback)(e=>{Object.keys(e).forEach(t=>{const n=a.current.data.findIndex(n=>n.symbol===e[t].symbol),o=a.current.data.find(n=>n.symbol===e[t].symbol);a.current.data.splice(n,1,{...o,balance:new br.a(e[t].usableBalance).toFixed(8)})})},[a.current.data]);return Object(o.useEffect)(()=>{s(i)},[i,n.hasTxPending]),Object(o.useEffect)(()=>{a.current.data=l},[JSON.stringify(l)]),Object(o.useEffect)(()=>{window.localStorage.setItem("substrate_asset_list",JSON.stringify([...l]))},[JSON.stringify(l)]),a.current};var af=()=>{var e;const t=JSON.parse(window.localStorage.getItem("evm_asset_list")||"[]"),{currentAccount:n}=Object(o.useContext)(qo),r=Object(o.useRef)({data:t,noData:0===t.length,isLoading:!1}),{account:i,chainId:l}=Object(a.d)(),s=Oc(null!==i&&void 0!==i?i:void 0,null!==u.ETHER&&void 0!==u.ETHER?u.ETHER:void 0),{upToDateTokenList:c}=ef(),d=Tn(c),m=kc(null!==i&&void 0!==i?i:void 0,null!==(e=Object.values(d[l]||[]))&&void 0!==e?e:void 0),p=c.tokens.map(e=>({balance:"",symbol:e.symbol,key:e.symbol,decimals:e.decimals,name:e.name,address:e.address,logoURI:e.logoURI,assetId:e.assetId,assetsBridgeFun:"withdraw"})).concat({balance:"",logoURI:eo.a,symbol:"KSX",assetId:0,name:"SherpaX",decimals:18,key:"KSX",address:"",assetsBridgeFun:"teleport"}).reverse();Object(o.useEffect)(()=>{r.current.data=p},[JSON.stringify(p)]);const f=Object(o.useCallback)(e=>{Object.keys(e).forEach(t=>{var n,a,o;const i=null===(n=r.current.data)||void 0===n?void 0:n.findIndex(n=>n.symbol===e[t].currency.symbol),l=null===(a=r.current.data)||void 0===a?void 0:a.find(n=>n.symbol===e[t].currency.symbol);null===(o=r.current.data)||void 0===o||o.splice(i,1,{...l,balance:e[t].toSignificant(6)})})},[]),b=Object(o.useCallback)(()=>{var e,t;const n=r.current.data.findIndex(e=>"KSX"===e.symbol),a=null===(e=r.current.data)||void 0===e?void 0:e.find(e=>"KSX"===e.symbol);null===(t=r.current.data)||void 0===t||t.splice(n,1,{...a,balance:(null===s||void 0===s?void 0:s.toSignificant(6))||""})},[s,JSON.stringify(r.current.data)]);return Object(o.useEffect)(()=>{b(),f(m)},[JSON.stringify(m),n.hasTxPending]),Object(o.useEffect)(()=>{window.localStorage.setItem("evm_asset_list",JSON.stringify([...p]))},[JSON.stringify(p)]),r.current},of=(n(617),n(405)),rf=(n(351),n(200));var lf=e=>{let{content:t}=e;const{library:n}=be(),a=Object(o.useCallback)(()=>{Rp({library:n,chainId:go.SHERPAX}).then(()=>{window.localStorage.setItem("chain_node","wss://mainnet.sherpax.io"),console.log("chainId",go.SHERPAX),window.location.reload()}).catch(e=>{console.error("Failed to switch networks",e)})},[n]);return r.a.createElement(Ll,{padding:"73px 0",display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(na.a,{padding:"0 36px 26px 36px",maxWidth:384,fontWeight:500,fontSize:16,color:"#988EB7",lineHeight:"20px",textAlign:"center"},t||"Soswap requires you to connect to the SherpaX Mainnet."),r.a.createElement(er,{onClick:a,borderRadius:"24px",width:"fit-content",lineHeight:"20px",padding:"16px 28px"},"Switch Network"))};const sf=ue.default.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #222222;
  line-height: 20px;
`,cf=ue.default.div`
  width: 100%;
  display: flex;
  justify-content: end;
`,df=Object(ue.default)(rf.a)`
  .ant-skeleton-input {
  }
  .ant-skeleton-title {
    width: 155px !important;
    height: 18px !important;
    margin: 0 !important;
    border-radius: 9px !important;
  }
  .ant-skeleton-paragraph {
    display: none;
  }
`;var uf=e=>{var t;let{setCurrentObj:n,options:o,activeEvmTab:i,TransferMethod:l}=e;const s=(e,t,a,o,r)=>{n({address:e,assetsId:0,balance:t,key:"",logoURI:a,name:o,symbol:r}),l()},{chainId:c}=Object(a.d)(),{chainList:d,toChain:u,setToChain:m,fromChain:p,isSherpaxNode:f}=jo(),b=(e,t,n)=>{if("SherpaX"!==t)if("from"===e){const e=d.filter(e=>e.name===t)[0];window.localStorage.setItem("chain_node",null===e||void 0===e?void 0:e.wssUrl);const a=e.targetChains.filter(e=>e.tokens.filter(e=>e.symbol===n))[0];m(a),window.location.hash="/bridge?symbol="+n,window.location.reload()}else{const e=d.filter(e=>"SherpaX"===e.name)[0].targetChains.filter(e=>e.name===t)[0];m(e),window.localStorage.setItem("chain_node_to",null===e||void 0===e?void 0:e.name),window.location.hash="/bridge?symbol="+n}},g=[{title:r.a.createElement(r.a.Fragment,null,"Asset"),width:"420px",dataIndex:"token",key:"token",render:e=>r.a.createElement(r.a.Fragment,null,e)},{title:r.a.createElement(r.a.Fragment,null,"Value"),dataIndex:"available",key:"available",render:e=>e?r.a.createElement(sf,null,new br.a(e).toFixed(8)):r.a.createElement(df,{paragraph:{rows:0},active:!0})},{title:"operation",dataIndex:"operation",key:"operation",render:(e,t)=>r.a.createElement(cf,null,i?((e,t)=>r.a.createElement(Ep,null,r.a.createElement(ce.b,{to:"../swap?from="+e},r.a.createElement(wp,null,r.a.createElement("span",null,"Swap"))),r.a.createElement(ce.b,{to:`/add/${e}/`},r.a.createElement(wp,null,r.a.createElement("span",{id:"addBtn"+t.symbol},"Liquidity"))),r.a.createElement(wp,{canSelect:99===t.assetId,onClick:()=>99!==t.assetId&&s(e,t.available,t.logoURI,t.name,t.symbol)},r.a.createElement("span",null,"Transfer"))))(e,t):((e,t)=>r.a.createElement(Ep,null,r.a.createElement(wp,{onClick:()=>b("to",t.name,t.symbol),canSelect:"SherpaX"===t.name||"Bitcoin Signet"===t.name},r.a.createElement("span",null,"Withdraw")),r.a.createElement(wp,{onClick:()=>b("from",t.name,t.symbol),canSelect:"SherpaX"===t.name||"Bitcoin Signet"===t.name},r.a.createElement("span",null,"Deposit")),r.a.createElement(wp,{onClick:()=>s(e,t.available,t.logoURI,t.name,t.symbol)},r.a.createElement("span",null,"Transfer"))))(e,t))}],y=null===(t=o.data)||void 0===t?void 0:t.map(e=>({key:e.symbol,token:r.a.createElement(bp,null,r.a.createElement("img",{className:"token-icon",src:e.logoURI,alt:"token-icon"}),r.a.createElement("div",{className:"token-info"},r.a.createElement("span",{className:"token-unit"},e.symbol),r.a.createElement("span",{className:"token-chain"},e.name))),available:e.balance,operation:e.address,logoURI:e.logoURI,symbol:e.symbol,name:e.name,assetId:e.assetId}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(hp,null,g.map(e=>r.a.createElement("div",{key:e.key},e.title))),r.a.createElement(gp,null,f&&1506==c?r.a.createElement(yp,null,r.a.createElement(of.a,{loading:!o||0===o.length,columns:g,dataSource:y,bordered:!0,pagination:!1,showHeader:!1})):r.a.createElement(lf,{content:"Please connect to SherpaX Mainnet to check your assets."})))},mf=n(677),pf=n.n(mf),ff=n(678),bf=n.n(ff);var gf=()=>{const{route:e}=fp("trading",["trading","funding"]),[t,n]=Object(o.useState)(!1),[a,i]=Object(o.useState)(!1),[l,s]=Object(o.useState)([]),{currentAccount:c}=Object(o.useContext)(qo),[d,u]=Object(o.useState)(""),m=()=>{const t=e.split("/")[0];w(t?"Funding":"Trading")},p=()=>{(null===c||void 0===c?void 0:c.isBridgeConnect)?n(!0):i(!0)},f=nf(),b=af(),g={icon:pf.a,name:"Trading",method:""},y={icon:bf.a,name:"Funding",method:""},[h,v]=Object(o.useState)(g),[x,E]=Object(o.useState)(y),w=e=>{s([]),u(""),"Trading"===e?(v(g),E(y)):(v(y),E(g))};return Object(o.useEffect)(()=>{m()},[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(vd,{style:{maxWidth:"1200px",padding:"12px 0"}},r.a.createElement(_p,{activeEvmTab:"funding"!==e,isOpen:t,amount:d,setAmount:u,onDismiss:()=>{n(!1),s([]),u(""),m()},setIsOpen:n,currentObj:l,setCurrentObj:s,options:"Funding"===h.name?f:b,from:h,to:x,changeTransferMethod:w,TransferMethod:p,openBindDialog:a,setOpenBindDialog:i}),r.a.createElement(uf,{activeEvmTab:"funding"!==e,options:"funding"===e?f:b,currentObj:l,setCurrentObj:s,TransferMethod:p})))},yf=n(679),hf=n.n(yf);var vf=e=>{let{amount:t,setAmount:n,selectValue:a,setSelectValue:i,currentBscObj:l,setCurrentBscObj:s,setInsufficient:c,options:d,transferAll:u,setTransferAll:m}=e;const{chainList:p,fromChain:f,setFromChain:b,setToChain:g}=jo(),{chainId:y,library:h}=be(),[v,x]=Object(o.useState)(!1),[,E]=Object(o.useState)(1),w=Object(o.useCallback)(()=>{x(!0)},[]),A=Object(o.useCallback)(()=>{x(!1)},[]),k=Object(o.useCallback)(()=>{m(!u),(null===l||void 0===l?void 0:l.balance)&&n(null===l||void 0===l?void 0:l.balance)},[l]),C=Object(o.useCallback)(e=>{e.metaMaskId&&y!==e.metaMaskId?Rp({library:h,chainId:e.metaMaskId}).then(()=>{b(e),x(!1),e.wssUrl&&window.localStorage.setItem("chain_node",e.wssUrl),window.location.hash="/bridge",window.location.reload()}).catch(e=>{console.error("Failed to switch networks",e)}):(b(e),x(!1),window.localStorage.setItem("chain_node",e.wssUrl),window.location.hash="/bridge",window.location.reload())},[]);return Object(o.useEffect)(()=>{m(parseFloat(t)===parseFloat(null===l||void 0===l?void 0:l.balance)),(null===l||void 0===l?void 0:l.balance)&&c(null===l||void 0===l?void 0:l.balance)},[t,null===l||void 0===l?void 0:l.balance]),r.a.createElement(Bp,null,r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"title-left"},"From"),r.a.createElement(Up,{onClick:w},r.a.createElement("img",{className:"from-icon",src:f.logo,alt:f.name}),r.a.createElement("div",{className:"from-text"},f.name),r.a.createElement("img",{className:"icon-arrow",src:hf.a,alt:"arrow"}))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"card-top"},r.a.createElement("span",null,"Send: "),r.a.createElement(nm,{balanceValue:null===l||void 0===l?void 0:l.balance,balanceOnMax:k,transferAll:!u})),r.a.createElement("div",{className:"card-down"},r.a.createElement(eu,{className:"amount",value:t,onUserInput:e=>{n(e)}}),r.a.createElement(Np,{value:null===l||void 0===l?void 0:l.symbol,currentObj:l,setValue:i,setAssetsObj:s,setAssetsId:E,options:d}))),r.a.createElement(Tp,{title:"Select Source Chain",isOpen:v,closeModal:A,itemList:p,selectedName:f.name,handleChange:C}))},xf=n(172),Ef=n.n(xf);var wf=e=>{let{amount:t,setAmount:n,selectValue:a,setSelectValue:i}=e;const{chainId:l}=be(),[s,c]=Object(o.useState)(!1),{toChain:d,setToChain:u,fromChain:m,isSherpaxNode:p}=jo(),[f,b]=Object(o.useState)(""),g=Object(o.useCallback)(()=>{c(!0)},[]),y=Object(o.useCallback)(()=>{c(!1)},[]),h=Object(o.useCallback)((e,t)=>{u(e),i(e.symbol),window.localStorage.setItem("chain_node_to",null===e||void 0===e?void 0:e.name),c(!1),window.location.hash="/bridge"},[]),v=Object(o.useCallback)(e=>{const t={limitBalance:0,fee:0};return null===d||void 0===d||d.tokens.map(n=>{n.symbol===e&&(t.limitBalance=Number(((null===n||void 0===n?void 0:n.fee)?null===n||void 0===n?void 0:n.fee:0)+(n.limitBalance?n.limitBalance:0)),t.fee=(null===n||void 0===n?void 0:n.fee)?null===n||void 0===n?void 0:n.fee:0)}),t},[d,a]);return Object(o.useEffect)(()=>{if(ut.includes(l)){const e=new br.a(t),{limitBalance:n,fee:o}=v(a);t?e.toNumber()>n?b(e.minus(o).toString()):b("0"):b("")}else b(t)},[t,a,p,l,d]),r.a.createElement(Bp,null,r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"title-left"},"To"),r.a.createElement(Up,{onClick:g},r.a.createElement("img",{className:"from-icon",src:d.logo,alt:d.name}),r.a.createElement("div",{className:"from-text"},d.name),r.a.createElement("img",{className:"icon-arrow",src:$o.a,alt:"arrow"}))),r.a.createElement(vd,{style:{background:"#FFFFFF",boxShadow:"0px 2px 4px 0px rgba(109, 78, 201, 0.06)",borderRadius:"24px",border:"2px solid #F7F8FA",padding:"18px 16px"}},r.a.createElement("div",{className:"card-top"},r.a.createElement("div",{className:"card-receive"},r.a.createElement(Ks,{style:{marginLeft:"0px"},icon:Ef.a,content:"This amount is estimated based on the minimum transfer value and fees"}),"Receive (estimated):"," ")),r.a.createElement("div",{className:"card-down"},r.a.createElement(eu,{className:"amount",value:f,disabled:!0,onUserInput:e=>{n(e)}}))),r.a.createElement(Tp,{title:"Select Destination Chain",isOpen:s,closeModal:y,itemList:m.targetChains,selectedName:d.name,handleChange:h}))},Af=n(280);const kf=n(407),Cf=(e,t)=>kf.utils.hexZeroPad((e=>{let t="";for(;e;)t="0123456789abcdef"[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"})(e),t);var Sf=e=>{const{account:t,chainId:n,library:r}=Object(a.d)(),{chainList:i,toChain:l}=jo(),{api:s,isApiReady:c}=Uo(),d=window.localStorage.getItem("chain_node"),m=mt.includes(n)?i.filter(e=>""===e.wssUrl&&e.metaMaskId===n)[0]:i.filter(e=>e.wssUrl===d)[0],[p,f]=Object(o.useState)(m.targetChains[0].tokens);const b=Oc(null!==t&&void 0!==t?t:void 0,null!==u.ETHER&&void 0!==u.ETHER?u.ETHER:void 0),g=(e,n)=>e.balanceOf(t).then(e=>{l.tokens.map(t=>{t.address===n&&(t.balance=new br.a(Number(e.toString())/Math.pow(10,t.decimals)).toFixed())})});return Object(o.useEffect)(()=>{if(e&&c&&!mt.includes(n)&&!pt.includes(l.symbol)){const t=[];l.tokens.map(n=>{n&&(n.isXAssets?t.push(async function(t){const n=(await s.query.xAssets.assetBalance(e,t.assetId)).toJSON();t.balance=new br.a(n.Usable?n.Usable:0).dividedBy(Math.pow(10,t.decimals)).toFixed(8)}(n)):0!==n.assetId||n.isSherpax?t.push(async function(t){const n=(await s.query.assets.account(t.assetId,e)).toJSON();t.balance=new br.a((null===n||void 0===n?void 0:n.balance)?null===n||void 0===n?void 0:n.balance:"0").dividedBy(Math.pow(10,t.decimals)).toFixed(8)}(n)):t.push(async function(t){const{data:n}=await s.query.system.account(e),a=n.toJSON();t.balance=new br.a(a.free).minus(new br.a(a.miscFrozen)).dividedBy(Math.pow(10,t.decimals)).toNumber().toFixed(8)}(n)))}),Promise.all(t).then(()=>{f([...l.tokens])})}else if(mt.includes(n)||pt.includes(l.symbol)){var t;const e=[];null===(t=l.tokens)||void 0===t||t.map(t=>{t.address?e.push((e=>{if(!e)return;const t=new at.Contract(e,Af.abi,r);return g(t,e)})(t.address.toString())):e.push((e=>{const t=b&&b.toSignificant(6);e.balance=t})(t))}),Promise.all(e).then(()=>{f([...l.tokens])})}},[c,e,n,l,d]),p},Of=n(397),If=n.n(Of);const Tf=ue.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #565a69;
  font-size: 14px;
  padding: 0 0 1rem 0;
`;var jf=()=>{const{api:e,isApiReady:t}=Uo(),{isUserBlocked:n}=_i(),{account:i,chainId:l,library:s}=Object(a.d)(),{search:c}=Object(de.g)(),d=If.a.parse(c),{fromChain:u,toChain:m}=jo(),{currentAccount:p}=Object(o.useContext)(qo),f=Sf(null===p||void 0===p?void 0:p.address),b=en(),[g,y]=Object(o.useState)(""),[h,v]=Object(o.useState)(""),[x,E]=Object(o.useState)([]),[w,A]=Object(o.useState)(!1),[k,C]=Object(o.useState)(0);let[S,O]=m.extrinsic.split(".");const I={SherpaX:[new br.a(g).times(Math.pow(10,m.tokens[0].decimals)).toFixed(),{BackForeign:"ChainX"!==(null===m||void 0===m?void 0:m.name)?m.tokens[0].assetId:null===x||void 0===x?void 0:x.assetId}],MiniX:["5Rdq5HiDWdMbc5zbVwTzaVN6fc2EPVFUF1e4u4CmjasgKAAW",new br.a(g).times(Math.pow(10,m.tokens[0].decimals)).toFixed()],Kusama:["GCbp6hFZHaqHRzfmwvD89ViJmQEvURPrE2uZchjff4MifAX",new br.a(g).times(Math.pow(10,m.tokens[0].decimals)).toFixed()],Polkadot:["14dHJ7cSnhqNyKBjxtAANLxs1o7ep7AMULveLFR8jwsP9tJH",new br.a(g).times(Math.pow(10,m.tokens[0].decimals)).toFixed()],ChainX:["5Rdq5HiDWdMbc5zbVwTzaVN6fc2EPVFUF1e4u4CmjasgKAAW",new br.a(g).times(Math.pow(10,m.tokens[0].decimals)).toFixed()],XBTC:["5Rdq5HiDWdMbc5zbVwTzaVN6fc2EPVFUF1e4u4CmjasgKAAW",(null===x||void 0===x?void 0:x.isXAssets)&&x.assetId,new br.a(g).times(Math.pow(10,null===x||void 0===x?void 0:x.decimals)).toFixed()]},T=Object(o.useCallback)(async e=>{const t=new br.a(g).times(Math.pow(10,null===x||void 0===x?void 0:x.decimals)).toFixed();if(null===x||void 0===x?void 0:x.address){const e=new at.Contract(null===x||void 0===x?void 0:x.address,Af.abi,s);await e.connect(s.getSigner()).transfer("0x5055B7CA654E85C1A18fC360D7535ddc1310A833",t).then(e=>{b(e,{summary:"Transfer "+g+" "+(null===x||void 0===x?void 0:x.symbol)+" from "+(null===u||void 0===u?void 0:u.name)+" to "+m.name}),console.log(e)}).catch(e=>{console.error("transfer failed",e)})}else j(t)},[i,g,k,null===x||void 0===x?void 0:x.address]),j=async e=>{await ethereum.request({method:"eth_sendTransaction",params:[{from:i,to:"0x5055B7CA654E85C1A18fC360D7535ddc1310A833",value:Cf(e,32)}]}).then(t=>{b({hash:t},{summary:"Transfer "+e/Math.pow(10,18)+" "+(null===x||void 0===x?void 0:x.symbol)+" from "+(null===u||void 0===u?void 0:u.name)+" to "+m.name}),console.log(t)}).catch(e=>{console.error("transfer failed",e)})};return Object(o.useEffect)(()=>{if(d.symbol){const e=m.tokens.filter(e=>e.symbol===d.symbol)[0];v(null===e||void 0===e?void 0:e.name),E(e)}else v(m.tokens[0].name),E(m.tokens[0])},[m,d.symbol]),r.a.createElement(r.a.Fragment,null,r.a.createElement(vd,null,r.a.createElement(pa,null,r.a.createElement(vf,{amount:g,setAmount:y,currentBscObj:x,setCurrentBscObj:E,selectValue:h,setSelectValue:v,setInsufficient:C,options:f,transferAll:w,setTransferAll:A}),r.a.createElement(wf,{amount:g,selectValue:null===x||void 0===x?void 0:x.symbol,setSelectValue:v}),r.a.createElement(Tf,null,r.a.createElement("span",null,"Fee"),r.a.createElement("span",null,dt.includes(null===u||void 0===u?void 0:u.name)?(null===x||void 0===x?void 0:x.fee)+" "+((null===x||void 0===x?void 0:x.symbol)?null===x||void 0===x?void 0:x.symbol:"-"):"0 ")),ut.includes(l)&&"BSC"!==m.name&&r.a.createElement(gr,{address:null===p||void 0===p?void 0:p.address,params:I[u.name],extrinsics:`${S}.${O}`,beforeOnClick:()=>{},beforeTxInit:()=>((e,t)=>{let n=I[u.name];return e&&(S="xAssets",n=I[x.symbol]),t&&(O="transferAll",n=[n[0],!1]),{section:S,method:O,params:n}})(null===x||void 0===x?void 0:x.isXAssets,!(null===x||void 0===x?void 0:x.isXAssets)&&"SherpaX"!==(null===u||void 0===u?void 0:u.name)&&w&&"XBTC"!==(null===x||void 0===x?void 0:x.name)),summary:`transfer ${g} ${x.symbol} from ${u.name} to ${m.name}`,disabled:n||0==Number(g)||k<Number(g)||0===x.length},r.a.createElement(na.a,{fontSize:20,fontWeight:500},k<Number(g)?`Insufficient ${null===x||void 0===x?void 0:x.symbol} balance`:"Transfer")),(!ut.includes(l)||"BSC"===m.name)&&r.a.createElement(mr,{onClick:T,disabled:n||!g||!t||!(null===p||void 0===p?void 0:p.address)||k<Number(g)},r.a.createElement(na.a,{fontSize:20,fontWeight:500},k<Number(g)?`Insufficient ${null===x||void 0===x?void 0:x.symbol} balance`:"Transfer")))))};const Nf=Object(ue.default)(oa.a)`
  position: absolute;
  right: 10px;
  top: 10px;
  :hover {
    cursor: pointer;
  }
`,Rf=ue.default.div`
  display: flex;
  position: relative;
  padding: 16px;
  overflow: hidden;
  background: #fafbfc;
  box-shadow: 5px 15px 15px 2px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  border: 1px solid #dce0e2;
  width: 390px;
`,Bf=ue.default.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background-color: ${e=>{let{theme:t}=e;return"#C8D0DA"}};
`,Uf=Object(al.a)(Bf);function Pf(e){let{removeAfterMs:t,content:n,popKey:a,changeStatus:i}=e;const[l,s]=Object(o.useState)(!0),c=()=>{i(!1)};Object(o.useEffect)(()=>{if(null===t)return;const e=setTimeout(()=>{c()},t);return()=>{clearTimeout(e)}},[t]);Object(o.useContext)(ue.ThemeContext);let d;if("txn"in n){const{txn:{type:e,hash:t,success:a,summary:o}}=n;d=r.a.createElement(yl,{type:e,hash:t,success:a,summary:o})}else if("listUpdate"in n){const{listUpdate:{listUrl:e,oldList:t,newList:o,auto:i}}=n;d=r.a.createElement(dl,{popKey:a,listUrl:e,oldList:t,newList:o,auto:i})}const u=Object(al.b)({from:{width:"100%"},to:{width:"0%"},config:{duration:null!==t&&void 0!==t?t:void 0}});return r.a.createElement("div",{style:{position:"fixed",top:"5rem",right:"1rem",zIndex:"10001"}},l?r.a.createElement(Rf,null,d,null!==t?r.a.createElement(Uf,{style:u}):null,r.a.createElement(Nf,{color:"#3B199F",onClick:c,style:{top:"0px",right:"0px",position:"relative"}})):null)}function Ff(e){let{type:t,hash:n,operatorResult:a,messages:i,setAmount:l}=e;const[s,c]=Object(o.useState)(!1),[d,u]=Object(o.useState)({txn:{type:"",hash:"",success:!0,summary:""}}),m=Object(o.useCallback)((e,t,n,a)=>(c(!1),u({txn:{type:e,hash:t,success:n,summary:a}}),c(!0)),[]);return Object(o.useEffect)(()=>{m(t,n,a,i)},[]),r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(Pf,{popKey:"1",removeAfterMs:4e3,content:d,changeStatus:c}))}function Mf(e){let{version:t}=e;const n=Object(o.useContext)(ue.ThemeContext),a=Object(de.g)(),i=hc(),l=Object(o.useMemo)(()=>({...a,search:"?"+Object(jl.stringify)({...i,use:t!==xc?t:void 0})}),[a,i,t]);return r.a.createElement(Fl,{style:{marginTop:"12px",padding:"8px 4px"}},r.a.createElement(gi,{gap:"sm",justify:"center",style:{alignItems:"center",textAlign:"center"}},r.a.createElement(na.a,{lineHeight:"145.23%;",fontSize:14,fontWeight:400,color:n.text1},"There is a better price for this trade on"," ",r.a.createElement(sa,{to:l},r.a.createElement("b",null,"Uniswap ",t.toUpperCase()," \u2197")))))}var Df=n(1216);const Lf=ue.default.div`
  background: ${e=>{let{theme:t}=e;return Object(aa.c)(.6,t.bg3)}};
  padding: 0.75rem;
  border-radius: 20px;
`,zf=ue.default.div`
  max-width: 405px;
  width: 100%;
  padding: 1rem;
  background: rgba(242, 150, 2, 0.05);
  border: 1px solid #f3841e;
  border-radius: 20px;
  overflow: auto;
`,Xf=Object(ue.default)(Df.a)`
  stroke: ${e=>{let{theme:t}=e;return t.red2}};
`;function Wf(e){var t,n,a,i;let{token:l}=e;const{chainId:s}=be(),c=null!==(t=null===l||void 0===l||null===(n=l.symbol)||void 0===n?void 0:n.toLowerCase())&&void 0!==t?t:"",d=null!==(a=null===l||void 0===l||null===(i=l.name)||void 0===i?void 0:i.toLowerCase())&&void 0!==a?a:"",u=Rn(),m=Object(o.useMemo)(()=>!(!l||!s)&&Object.keys(u).some(e=>{var t,n;const a=u[e];return!a.equals(l)&&((null===(t=a.symbol)||void 0===t?void 0:t.toLowerCase())===c||(null===(n=a.name)||void 0===n?void 0:n.toLowerCase())===d)}),[l,s,u,c,d]);return l?r.a.createElement(Lf,{error:m},r.a.createElement(hn,{gap:"6px"},r.a.createElement(gi,{gap:"24px"},r.a.createElement(Ds,{currency:l,size:"16px"}),r.a.createElement("div",null," ")),r.a.createElement(gi,{gap:"10px",justify:"flex-start"},r.a.createElement(Aa.main,null,l&&l.name&&l.symbol&&l.name!==l.symbol?`${l.name} (${l.symbol})`:l.name||l.symbol," ")))):null}function Hf(e){let{isOpen:t,tokens:n,onConfirm:a}=e;const[i,l]=Object(o.useState)(!1),s=Object(o.useCallback)(()=>l(e=>!e),[]),c=Object(o.useCallback)(()=>null,[]);return r.a.createElement(Ql,{isOpen:t,onDismiss:c,maxHeight:90},r.a.createElement(zf,{className:"token-warning-container"},r.a.createElement(gi,{gap:"lg"},r.a.createElement(hn,{gap:"6px"},r.a.createElement(Xf,null),r.a.createElement(Aa.main,{color:"red2"},"Token imported")),r.a.createElement(Aa.body,{color:"red2"},"Anyone can create an ERC20 token on Ethereum with ",r.a.createElement("em",null,"any")," name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."),r.a.createElement(Aa.body,{color:"red2"},"This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary ERC20 tokens."),r.a.createElement(Aa.body,{color:"red2"},"If you purchase an arbitrary token, ",r.a.createElement("strong",null,"you may be unable to sell it back.")),n.map(e=>r.a.createElement(Wf,{key:e.address,token:e})),r.a.createElement(yn,null,r.a.createElement("div",null,r.a.createElement("label",{style:{cursor:"pointer",userSelect:"none"}},r.a.createElement("input",{type:"checkbox",className:"understand-checkbox",checked:i,onChange:s})," ","I understand")),r.a.createElement(mr,{disabled:!i,error:!0,width:"140px",padding:"0.5rem 1rem",className:"token-dismiss-button",style:{borderRadius:"10px"},onClick:()=>{a()}},r.a.createElement(Aa.body,{color:"white"},"Continue"))))))}var qf=n(680),Vf=n.n(qf),Kf=n(681),Yf=n.n(Kf);const _f=Object(ue.default)(gi)`
  margin-top: 1.25rem;
`,Jf=Object(ue.default)(yn)`
  width: 50%;
`,Qf=ue.default.div`
  min-width: 20px;
  min-height: 20px;
  background-color: ${e=>{let{theme:t,confirmed:n,disabled:a}=e;return a?t.bg4:n?"#38DCBF":"#6D4EC9"}};
  border-radius: 50%;
  color: ${e=>{let{theme:t}=e;return t.white}};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 8px;
  font-size: 12px;
  border: 1px solid white;
`,$f=ue.default.div`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
`,Gf=ue.default.div`
  width: 100%;
  height: 2px;
  background: white;
`;function Zf(e){let{steps:t}=e;return r.a.createElement(_f,{justify:"center"},r.a.createElement(Jf,null,t.map((e,n)=>r.a.createElement($f,{key:n},r.a.createElement(Qf,{confirmed:e,disabled:!t[n-1]&&0!==n},e?"\u2713":n+1),r.a.createElement("img",{src:Vf.a,alt:"",style:{position:"absolute",zIndex:"-1",left:"120px"}}),r.a.createElement(Gf,{prevConfirmed:e}),r.a.createElement("img",{src:Yf.a,alt:"",style:{position:"absolute",zIndex:"-1",right:"120px"}}))),r.a.createElement(Qf,{disabled:!t[t.length-1]},t.length+1)))}function eb(e){return"0x"+e.raw.toString(16)}function tb(e,t){if(Rc(e)!==vc.v1)throw new Error("invalid trade version");if(e.route.pairs.length>2)throw new Error("too many pairs");const n=e.tradeType===u.TradeType.EXACT_INPUT,a=e.inputAmount.currency===u.ETHER,o=e.outputAmount.currency===u.ETHER;if(a&&o)throw new Error("ETHER to ETHER");const r=eb(e.minimumAmountOut(t.allowedSlippage)),i=eb(e.maximumAmountIn(t.allowedSlippage)),l=(s=t.ttl,"0x"+(Math.floor((new Date).getTime()/1e3)+s).toString(16));var s;if(n){if(a)return{methodName:"ethToTokenTransferInput",args:[r,l,t.recipient],value:i};if(o)return{methodName:"tokenToEthTransferInput",args:[i,r,l,t.recipient],value:"0x0"};{const n=e.outputAmount.currency;if(!(n instanceof u.Token))throw new Error("token to token");return{methodName:"tokenToTokenTransferInput",args:[i,r,"0x1",l,t.recipient,n.address],value:"0x0"}}}if(a)return{methodName:"ethToTokenTransferOutput",args:[r,l,t.recipient],value:i};if(o)return{methodName:"tokenToEthTransferOutput",args:[r,i,l,t.recipient],value:"0x0"};{const n=e.outputAmount.currency;if(!(n instanceof u.Token))throw new Error("invalid output amount currency");return{methodName:"tokenToTokenTransferOutput",args:[r,i,yc.b.toHexString(),l,t.recipient,n.address],value:"0x0"}}}let nb,ab;function ob(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1200,a=arguments.length>3?arguments[3]:void 0;const{account:r,chainId:i,library:l}=be(),{address:s}=nd(a),c=null===a?r:s,d=Ht(Bc(e),!0);return Object(o.useMemo)(()=>{const a=Rc(e);if(!e||!c||!l||!r||!a||!i)return[];const o=a===vc.v2?Et(0,l,r):d;if(!o)return[];const s=[];switch(a){case vc.v2:s.push(u.Router.swapCallParameters(e,{feeOnTransfer:!1,allowedSlippage:new u.Percent(u.JSBI.BigInt(t),J),recipient:c,ttl:n})),e.tradeType===u.TradeType.EXACT_INPUT&&s.push(u.Router.swapCallParameters(e,{feeOnTransfer:!0,allowedSlippage:new u.Percent(u.JSBI.BigInt(t),J),recipient:c,ttl:n}));break;case vc.v1:s.push(tb(e,{allowedSlippage:new u.Percent(u.JSBI.BigInt(t),J),recipient:c,ttl:n}))}return s.map(e=>({parameters:e,contract:o}))},[r,t,i,n,l,c,e,d])}!function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.VALID=2]="VALID"}(nb||(nb={})),function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.WRAP=1]="WRAP",e[e.UNWRAP=2]="UNWRAP"}(ab||(ab={}));const rb={wrapType:ab.NOT_APPLICABLE};function ib(e,t,n){const{chainId:a,account:r}=be(),i=function(e){const{chainId:t}=be();return Xt(t?u.WKSX[t].address:void 0,Pt,e)}(),l=Oc(null!==r&&void 0!==r?r:void 0,e),s=Object(o.useMemo)(()=>id(n,e),[e,n]),c=en();return Object(o.useMemo)(()=>{if(!i||!a||!e||!t)return rb;const n=s&&l&&!l.lessThan(s);return e===u.ETHER&&Object(u.currencyEquals)(u.WKSX[a],t)?{wrapType:ab.WRAP,execute:n&&s?async()=>{try{const e=await i.deposit({value:"0x"+s.raw.toString(16)});c(e,{summary:`Wrap ${s.toSignificant(6)} KSX to WKSX`})}catch(e){console.error("Could not deposit",e)}}:void 0,inputError:n?void 0:"Insufficient KSX balance"}:Object(u.currencyEquals)(u.WKSX[a],e)&&t===u.ETHER?{wrapType:ab.UNWRAP,execute:n&&s?async()=>{try{const e=await i.withdraw("0x"+s.raw.toString(16));c(e,{summary:`Unwrap ${s.toSignificant(6)} WKSX to KSX`})}catch(e){console.error("Could not withdraw",e)}}:void 0,inputError:n?void 0:"Insufficient WKSX balance"}:rb},[i,a,e,t,s,l,c])}var lb=n(507),sb=n.n(lb),cb=n(682),db=n.n(cb);const ub=ue.default.div`
  box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
  border-radius: 16px;
  border: 2px solid #ffffff;
  margin: 16px 0 0;
`;function mb(e){let{content:t}=e;return r.a.createElement(ub,null,t)}function pb(e){let{priceImpact:t}=e;return r.a.createElement(Nd,{fontWeight:500,fontSize:14,severity:_c(t),lineHeight:"17px"},t?t.lessThan(_)?"<0.01%":t.toFixed(2)+"%":"-")}function fb(e){var t,n,a,i;let{trade:l,allowedSlippage:s,showSlippage:c,swapRoute:d,showRoute:m}=e;const[p,f]=Object(o.useState)(!1),b=Object(o.useMemo)(()=>Yc(l,s),[s,l]),{priceImpactWithoutFee:g,realizedLPFee:y}=Object(o.useMemo)(()=>Kc(l),[l]),h=Ue();return r.a.createElement(r.a.Fragment,null,!m&&r.a.createElement(gi,{gap:"0px"},c&&50!==s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(yn,{align:"center"},r.a.createElement(Ld,{onClick:h},"Slippage Tolerance"),r.a.createElement(Ld,{onClick:h},s/100,"%")),r.a.createElement(Td,null)),r.a.createElement(yn,null,r.a.createElement(vn,null,r.a.createElement(Ld,null,(null===l||void 0===l?void 0:l.tradeType)===u.TradeType.EXACT_INPUT?"Minimum received":"Maximum sold"),r.a.createElement(Ys,{text:"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."})),r.a.createElement(vn,null,r.a.createElement(Ld,null,(null===l||void 0===l?void 0:l.tradeType)===u.TradeType.EXACT_INPUT?null!==(t=null===(n=b[Mc.OUTPUT])||void 0===n?void 0:n.toSignificant(4))&&void 0!==t?t:"-":null!==(a=null===(i=b[Mc.INPUT])||void 0===i?void 0:i.toSignificant(4))&&void 0!==a?a:"-"),r.a.createElement(Ld,null,(null===l||void 0===l?void 0:l.tradeType)===u.TradeType.EXACT_INPUT?null===l||void 0===l?void 0:l.outputAmount.currency.symbol:null===l||void 0===l?void 0:l.inputAmount.currency.symbol))),r.a.createElement(yn,null,r.a.createElement(vn,null,r.a.createElement(Ld,null,"Price Impact"),r.a.createElement(Ys,{text:"The difference between the market price and your price due to trade size."})),r.a.createElement("div",{style:{background:"#FFFFFF",borderRadius:"8px",padding:"4px 8px"}},r.a.createElement(pb,{priceImpact:g}))),r.a.createElement(yn,null,r.a.createElement(vn,null,r.a.createElement(Ld,null,"Liquidity Provider Fee"),r.a.createElement(Ys,{text:"A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive."})),r.a.createElement(Ld,null,y?(null===y||void 0===y?void 0:y.toSignificant(6))+" "+(null===l||void 0===l?void 0:l.inputAmount.currency.symbol):"-"))))}var bb=n(683),gb=n.n(bb);function yb(e){let{content:t}=e;return r.a.createElement(Ks,{autoAdjustOverflow:!1,placement:"left",content:t,icon:gb.a})}var hb=n(314),vb=n.n(hb);const xb=ue.default.div`
  width: fit-content !important;
  border-radius: 16px;

  img {
    transition: all 0.2s;

    &.arrow-down {
      transform: rotate(-180deg);
    }
  }
`;var Eb=e=>{let{isUp:t}=e;return r.a.createElement(xb,null,r.a.createElement(Go,{className:t?"arrow-up":"arrow-down",iconSrc:vb.a,width:24,height:24}))};const wb=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 12px;
  :hover {
    cursor: pointer;
  }
  > div {
    display: flex;
    align-items: center;
  }
`;function Ab(e){let{trade:t,allowedSlippage:n,showInverted:a,showDetails:o,setShowDetails:i}=e;return r.a.createElement(wb,{onClick:()=>i(!o)},r.a.createElement("div",null,r.a.createElement(yb,{content:r.a.createElement(fb,{trade:t,allowedSlippage:n,showSlippage:!0})}),r.a.createElement(zd,null,function(e,t){return e?t?`${e.executionPrice.invert().toSignificant(6)} ${e.inputAmount.currency.symbol} = 1 ${e.outputAmount.currency.symbol}`:`${e.executionPrice.toSignificant(6)} ${e.outputAmount.currency.symbol} = ${e.inputAmount.currency.symbol}`:""}(t,!a))),r.a.createElement(Eb,{isUp:o}))}function kb(e){let{title:t,titleChild:n,showCom:a,content:o}=e;return r.a.createElement(Dd,{border:"16px",padding:"0 0 8px"},r.a.createElement(gi,{gap:"0px"},r.a.createElement(yn,{align:"center"},r.a.createElement(Xd,null,r.a.createElement(Ld,null,t),n),o)))}var Cb=n(684),Sb=n.n(Cb),Ob=Object(o.memo)((function(e){let{trade:t}=e;return r.a.createElement(Xd,null,t.route.path.map((e,t,n)=>{const a=t===n.length-1;return r.a.createElement(o.Fragment,{key:t},r.a.createElement(Ld,null,e.symbol),a?null:r.a.createElement("img",{src:Sb.a,alt:"",style:{margin:"0px 4px"}}))}))}));const Ib=ue.default.div`
  .details-close {
    transition: all 0.2s;
    height: 0;
    position: relative;
    overflow: hidden;
  }
  .details-open {
    margin-top: 16px;
    transition: all 0.2s;
    height: ${e=>{let{showSlippage:t}=e;return t?"192px":"234px;"}};
    position: relative;
    overflow: hidden;
  }
`;function Tb(e){let{trade:t,allowedSlippage:n,showInverted:a,showDetails:o,setShowDetails:i,showRoute:l}=e;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(Ib,{showSlippage:50===n},r.a.createElement(mb,{content:r.a.createElement(Ab,{trade:t,allowedSlippage:n,showInverted:a,showDetails:o,setShowDetails:i})}),r.a.createElement("div",{className:""+(o?"details-open":"details-close")},r.a.createElement(Dd,null,r.a.createElement(fb,{trade:t,allowedSlippage:n,showSlippage:!0})),r.a.createElement(kb,{title:"Route",titleChild:r.a.createElement(Ys,{text:"Routing through these tokens resulted in the best price for your trade."}),showCom:l,content:r.a.createElement(Ob,{trade:t})}))))}function jb(e){var t,n;let{trade:a,onConfirm:i,allowedSlippage:l,swapErrorMessage:s,showAcceptChanges:c,disabledConfirm:d,onAcceptChanges:m}=e;const p=Object(o.useContext)(ue.ThemeContext),f=Object(o.useMemo)(()=>Yc(a,l),[l,a]),{priceImpactWithoutFee:b,realizedLPFee:g}=Object(o.useMemo)(()=>Kc(a),[a]),y=_c(b),[h,v]=Object(o.useState)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Tb,{trade:a,allowedSlippage:l,showInverted:!0,showDetails:h,setShowDetails:v,showRoute:!1}),c?r.a.createElement(Md,{justify:"flex-start",gap:"0px"},r.a.createElement(yn,null,r.a.createElement(vn,null,r.a.createElement("img",{src:as.a,alt:"",style:{marginRight:"8px",width:"24px"}}),r.a.createElement(Aa.main,{color:p.primary1}," Price Updated")),r.a.createElement(er,{style:{padding:".5rem",width:"fit-content",fontSize:"0.825rem",borderRadius:"12px",color:"#E93E5E"},onClick:m},"Accept"))):null,r.a.createElement(gi,{justify:"flex-start",gap:"sm"},a.tradeType===u.TradeType.EXACT_INPUT?r.a.createElement(Aa.puple,{textAlign:"left",style:{width:"100%"}},"Output is estimated. You will receive at least ",r.a.createElement("b",{style:{color:"#876CD7"}},null===(t=f[Mc.OUTPUT])||void 0===t?void 0:t.toSignificant(6)," ",a.outputAmount.currency.symbol)," or the transaction will revert."):r.a.createElement(Aa.italic,{textAlign:"left",style:{width:"100%"}},"Input is estimated. You will sell at most ",r.a.createElement("b",null,null===(n=f[Mc.INPUT])||void 0===n?void 0:n.toSignificant(6)," ",a.inputAmount.currency.symbol)," or the transaction will revert.")),r.a.createElement(hn,null,r.a.createElement(mr,{onClick:i,disabled:d,error:y>2,style:{margin:"10px 0 0 0"},id:"confirm-swap-or-send"},r.a.createElement(na.a,{fontSize:20,fontWeight:500},y>2?"Swap Anyway":"Confirm Swap")),s?r.a.createElement(Fd,{error:s}):null))}var Nb=n(685),Rb=n.n(Nb);const Bb=ue.default.div`
  font-size: 24px;
  font-weight: 600;
  color: #281071;
  line-height: 29px;
`;function Ub(e){let{trade:t,recipient:n}=e;const a=r.a.createElement(yn,{align:"flex-end",padding:"18px 16px !important"},r.a.createElement(vn,{gap:"0px"},r.a.createElement(Bb,null," ",t.inputAmount.toSignificant(6))),r.a.createElement(vn,{gap:"0px"},r.a.createElement(mu,{disableCurrencySelect:!0,pair:null,currencySymbol:t.inputAmount.currency.symbol,currency:t.inputAmount.currency}))),o=r.a.createElement(yn,{align:"flex-end",padding:"18px 16px !important"},r.a.createElement(vn,{gap:"0px"},r.a.createElement(Bb,null," ",t.outputAmount.toSignificant(6))),r.a.createElement(vn,{gap:"0px"},r.a.createElement(mu,{disableCurrencySelect:!0,pair:null,currencySymbol:t.outputAmount.currency.symbol,currency:t.outputAmount.currency})));return r.a.createElement(gi,{gap:"md"},r.a.createElement($d,{topBox:a,bottomBox:o,switchIcon:r.a.createElement("img",{src:Rb.a}),switchIconPosition:"margin-left:44px"}),null!==n?r.a.createElement(gi,{justify:"flex-start",gap:"sm",style:{padding:"12px 0 0 0px"}},r.a.createElement(Aa.main,null,"Output will be sent to"," ",r.a.createElement("b",{title:n},ft(n)?yt(n):n))):null)}function Pb(e){var t,n,a,i,l,s,c,d,m,p,f,b,g,y,h,v,x,E;let{trade:w,originalTrade:A,onAcceptChanges:k,allowedSlippage:C,onConfirm:S,onDismiss:O,recipient:I,swapErrorMessage:T,isOpen:j,attemptingTxn:N,txHash:R}=e;const B=Object(o.useMemo)(()=>{return Boolean(w&&A&&(t=A,(e=w).tradeType!==t.tradeType||!Object(u.currencyEquals)(e.inputAmount.currency,t.inputAmount.currency)||!e.inputAmount.equalTo(t.inputAmount)||!Object(u.currencyEquals)(e.outputAmount.currency,t.outputAmount.currency)||!e.outputAmount.equalTo(t.outputAmount)));var e,t},[A,w]),U=Object(o.useCallback)(()=>w?r.a.createElement(Ub,{trade:w,allowedSlippage:C,recipient:I,showAcceptChanges:B,onAcceptChanges:k}):null,[C,k,I,B,w]),P=Object(o.useCallback)(()=>w?r.a.createElement(jb,{onConfirm:S,trade:w,disabledConfirm:B,swapErrorMessage:T,showAcceptChanges:B,allowedSlippage:C,onAcceptChanges:k}):null,[C,S,B,T,w]),F=`Swapping ${null===w||void 0===w||null===(t=w.inputAmount)||void 0===t?void 0:t.toSignificant(6)} ${null===w||void 0===w||null===(n=w.inputAmount)||void 0===n||null===(a=n.currency)||void 0===a?void 0:a.symbol} for ${null===w||void 0===w||null===(i=w.outputAmount)||void 0===i?void 0:i.toSignificant(6)} ${null===w||void 0===w||null===(l=w.outputAmount)||void 0===l||null===(s=l.currency)||void 0===s?void 0:s.symbol}`,M=Object(o.useCallback)(()=>T?r.a.createElement(ys,{onDismiss:O,message:T}):r.a.createElement(gs,{title:"Confirm Swap",onDismiss:O,topContent:U,bottomContent:P}),[O,P,U,T]);return r.a.createElement(hs,{isOpen:j,onDismiss:O,attemptingTxn:N,hash:R,content:M,pendingText:F,tokenAddress:null===(c=null===w||void 0===w||null===(m=w.outputAmount)||void 0===m?void 0:m.currency)||void 0===c||null===(d=c.tokenInfo)||void 0===d?void 0:d.address,tokenDecimals:null===(p=null===w||void 0===w||null===(b=w.outputAmount)||void 0===b?void 0:b.currency)||void 0===p||null===(f=p.tokenInfo)||void 0===f?void 0:f.decimals,tokenLogoURI:null===(g=null===w||void 0===w||null===(h=w.outputAmount)||void 0===h?void 0:h.currency)||void 0===g||null===(y=g.tokenInfo)||void 0===y?void 0:y.logoURI,tokenSymbol:null===(v=null===w||void 0===w||null===(E=w.outputAmount)||void 0===E?void 0:E.currency)||void 0===v||null===(x=v.tokenInfo)||void 0===x?void 0:x.symbol})}const Fb=ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexColumnNoWrap}}
  position: relative;
  border-radius: 1.25rem;
  background-color: transparent;
  z-index: 1;
  width: 100%;
`,Mb=ue.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${e=>{let{error:t,theme:n}=e;return t?n.red1:n.bg2}};
  transition: border-color 300ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}},
    color 500ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}};
  background-color: transparent;
`,Db=ue.default.div`
  flex: 1;
  padding: 1rem;
`,Lb=ue.default.input`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  transition: color 300ms ${e=>{let{error:t}=e;return t?"step-end":"step-start"}};
  color: ${e=>{let{error:t,theme:n}=e;return t?"#E93E5E":"#281071"}};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.text4}};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${e=>{let{theme:t}=e;return t.text4}};
  }
`;function zb(e){let{id:t,value:n,onChange:a}=e;const{chainId:i}=be(),{address:l,loading:s,name:c}=(Object(o.useContext)(ue.ThemeContext),nd(n)),d=Object(o.useCallback)(e=>{const t=e.target.value.replace(/\s+/g,"");a(t)},[a]),u=Boolean(n.length>0&&!s&&!l);return r.a.createElement(Fb,{id:t},r.a.createElement(Mb,{error:u},r.a.createElement(Db,null,r.a.createElement(gi,{gap:"md"},r.a.createElement(yn,null,r.a.createElement(Aa.black,{color:"#3B199F",fontWeight:500,fontSize:14},"Recipient"),l&&i&&r.a.createElement(da,{href:gt(i,null!==c&&void 0!==c?c:l,"address"),style:{fontSize:"14px",color:"#FFB14A"}},"(View on scan)")),r.a.createElement(Lb,{className:"recipient-address-input",type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address",error:u,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:d,value:n})))))}function Xb(){var e,t,n,a,i,l,s;const m=function(){const{chainId:e}=be(),t=Object(d.b)(),n=hc(),[a,r]=Object(o.useState)();return Object(o.useEffect)(()=>{if(!e)return;const a=fd(n);t(Xc({typedValue:a.typedValue,field:a.independentField,inputCurrencyId:a[Mc.INPUT].currencyId,outputCurrencyId:a[Mc.OUTPUT].currencyId,recipient:a.recipient})),r({inputCurrencyId:a[Mc.INPUT].currencyId,outputCurrencyId:a[Mc.OUTPUT].currencyId})},[t,e]),a}(),{isUserBlocked:p}=_i(),[f,b]=[Fn(null===m||void 0===m?void 0:m.inputCurrencyId),Fn(null===m||void 0===m?void 0:m.outputCurrencyId)],[g,y]=Object(o.useState)(!1),h=Object(o.useMemo)(()=>{var e,t;return null!==(e=null===(t=[f,b])||void 0===t?void 0:t.filter(e=>e instanceof u.Token))&&void 0!==e?e:[]},[f,b]),v=Object(o.useCallback)(()=>{y(!0)},[]),{account:x}=be(),E=(Object(o.useContext)(ue.ThemeContext),Be()),[w]=(Ue(),Jn()),[A]=$n(),[k]=Qn(),{independentField:C,typedValue:S,recipient:O}=rd(),{v1Trade:I,v2Trade:T,currencyBalances:j,parsedAmount:N,currencies:R,inputError:B}=cd(),{wrapType:U,execute:P,inputError:M}=ib(R[Mc.INPUT],R[Mc.OUTPUT],S),D=U!==ab.NOT_APPLICABLE,{address:L}=td(O),z=Ec(),X=D?void 0:{[vc.v1]:I,[vc.v2]:T}[z],W=z===vc.v2&&Fc(T,I,ne)?vc.v1:z===vc.v1&&Fc(I,T)?vc.v2:void 0,H=D?{[Mc.INPUT]:N,[Mc.OUTPUT]:N}:{[Mc.INPUT]:C===Mc.INPUT?N:null===X||void 0===X?void 0:X.inputAmount,[Mc.OUTPUT]:C===Mc.OUTPUT?N:null===X||void 0===X?void 0:X.outputAmount},{onSwitchTokens:q,onCurrencySelection:V,onUserInput:K,onChangeRecipient:Y}=function(){const e=Object(d.b)(),t=Object(o.useCallback)((t,n)=>{e(Dc({field:t,currencyId:n instanceof u.Token?n.address:n===u.ETHER?"KSX":""}))},[e]);return{onSwitchTokens:Object(o.useCallback)(()=>{e(Lc())},[e]),onCurrencySelection:t,onUserInput:Object(o.useCallback)((t,n)=>{e(zc({field:t,typedValue:n}))},[e]),onChangeRecipient:Object(o.useCallback)(t=>{e(Wc({recipient:t}))},[e])}}(),_=!B,J=C===Mc.INPUT?Mc.OUTPUT:Mc.INPUT,Q=Object(o.useCallback)(e=>{K(Mc.INPUT,e)},[K]),$=Object(o.useCallback)(e=>{K(Mc.OUTPUT,e)},[K]),[{showConfirm:ee,tradeToConfirm:te,swapErrorMessage:ae,attemptingTxn:oe,txHash:re},ie]=Object(o.useState)({showConfirm:!1,tradeToConfirm:void 0,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),le={[C]:S,[J]:D?null!==(e=null===(t=H[C])||void 0===t?void 0:t.toExact())&&void 0!==e?e:"":null!==(n=null===(a=H[J])||void 0===a?void 0:a.toSignificant(6))&&void 0!==n?n:""},se=null===X||void 0===X?void 0:X.route,ce=Boolean(R[Mc.INPUT]&&R[Mc.OUTPUT]&&(null===(i=H[C])||void 0===i?void 0:i.greaterThan(u.JSBI.BigInt(0)))),me=!se,[pe,fe]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=Object(o.useMemo)(()=>e?Yc(e,t)[Mc.INPUT]:void 0,[e,t]),a=Rc(e)===vc.v1,r=Bc(e);return $c(n,a?r:F)}(X,k),[ge,ye]=Object(o.useState)(!1);Object(o.useEffect)(()=>{pe===Jc.PENDING&&ye(!0)},[pe,ge]);const he=yd(j[Mc.INPUT]),{callback:ve,error:xe}=(Boolean(he&&(null===(l=H[Mc.INPUT])||void 0===l?void 0:l.equalTo(he))),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1200,a=arguments.length>3?arguments[3]:void 0;const{account:r,chainId:i,library:l}=be(),s=ob(e,t,n,a),c=en(),{address:d}=nd(a),u=null===a?r:d;return Object(o.useMemo)(()=>{if(!e||!l||!r||!i)return{state:nb.INVALID,callback:null,error:"Missing dependencies"};if(!u)return null!==a?{state:nb.INVALID,callback:null,error:"Invalid recipient"}:{state:nb.LOADING,callback:null,error:null};const t=Rc(e);return{state:nb.VALID,callback:async function(){const n=await Promise.all(s.map(e=>{const{parameters:{methodName:t,args:n,value:a},contract:o}=e,r=!a||kt(a)?{}:{value:a};return o.estimateGas[t](...n,r).then(t=>({call:e,gasEstimate:t})).catch(a=>(console.debug("Gas estimate failed, trying eth_call to extract error",e),o.callStatic[t](...n,r).then(t=>(console.debug("Unexpected successful call after failed estimate gas",e,a,t),{call:e,error:new Error("Unexpected issue with estimating the gas. Please try again.")})).catch(t=>{let n;switch(console.debug("Call threw error",e,t),t.reason){case"UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":case"UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":n="This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";break;default:n=`The transaction cannot succeed due to error: ${t.reason}. This is probably an issue with one of the tokens you are swapping.`}return{call:e,error:new Error(n)}})))})),o=n.find((e,t,n)=>"gasEstimate"in e&&(t===n.length-1||"gasEstimate"in n[t+1]));if(!o){const e=n.filter(e=>"error"in e);if(e.length>0)throw e[e.length-1].error;throw new Error("Unexpected error. Please contact support: none of the calls threw an error")}const{call:{contract:i,parameters:{methodName:l,args:d,value:m}},gasEstimate:p}=o;return i[l](...d,{gasLimit:ht(p),...m&&!kt(m)?{value:m,from:r}:{from:r}}).then(n=>{const o=e.inputAmount.currency.symbol,i=e.outputAmount.currency.symbol,l=`Swap ${e.inputAmount.toSignificant(3)} ${o} for ${e.outputAmount.toSignificant(3)} ${i}`,s=u===r?l:`${l} to ${a&&ft(a)?yt(a):a}`,d=t===vc.v2?s:`${s} on ${t.toUpperCase()}`;return c(n,{summary:d}),n.hash}).catch(e=>{throw 4001===(null===e||void 0===e?void 0:e.code)?new Error("Transaction rejected."):(console.error("Swap failed",e,l,d,m),new Error("Swap failed: "+e.message))})},error:null}},[e,l,r,i,u,a,s,c])}(X,k,A,O)),{priceImpactWithoutFee:Ee}=Kc(X),we=Object(o.useCallback)(()=>{Ee&&!function(e){return e.lessThan(Z)?!!e.lessThan(G)||window.confirm(`This swap has a price impact of at least ${G.toFixed(0)}%. Please confirm that you would like to continue with this swap.`):"confirm"===window.prompt(`This swap has a price impact of at least ${Z.toFixed(0)}%. Please type the word "confirm" to continue with this swap.`)}(Ee)||ve&&(ie({attemptingTxn:!0,tradeToConfirm:te,showConfirm:ee,swapErrorMessage:void 0,txHash:void 0}),ve().then(e=>{var t,n,a,o;ie({attemptingTxn:!1,tradeToConfirm:te,showConfirm:ee,swapErrorMessage:void 0,txHash:e}),c.a.event({category:"Swap",action:null===O?"Swap w/o Send":(null!==L&&void 0!==L?L:O)===x?"Swap w/o Send + recipient":"Swap w/ Send",label:[null===X||void 0===X||null===(t=X.inputAmount)||void 0===t||null===(n=t.currency)||void 0===n?void 0:n.symbol,null===X||void 0===X||null===(a=X.outputAmount)||void 0===a||null===(o=a.currency)||void 0===o?void 0:o.symbol,Rc(X)].join("/")})}).catch(e=>{ie({attemptingTxn:!1,tradeToConfirm:te,showConfirm:ee,swapErrorMessage:e.message,txHash:void 0})}))},[te,x,Ee,O,L,ee,ve,X]),[Ae,ke]=Object(o.useState)(!1),Ce=_c(Ee),Se=!B&&(pe===Jc.NOT_APPROVED||pe===Jc.PENDING||ge&&pe===Jc.APPROVED)&&!(Ce>3&&!w),Oe=Object(o.useCallback)(()=>{ie({showConfirm:!1,tradeToConfirm:te,attemptingTxn:oe,swapErrorMessage:ae,txHash:re}),re&&K(Mc.INPUT,"")},[oe,K,ae,te,re]),Ie=Object(o.useCallback)(()=>{ie({tradeToConfirm:X,swapErrorMessage:ae,txHash:re,attemptingTxn:oe,showConfirm:ee})},[oe,ee,ae,X,re]),Te=Object(o.useCallback)(e=>{ye(!1),V(Mc.INPUT,e)},[V]),je=Object(o.useCallback)(()=>{he&&K(Mc.INPUT,he.toExact())},[he,K]),Ne=Object(o.useCallback)(e=>V(Mc.OUTPUT,e),[V]),Re=r.a.createElement(sm,{label:C===Mc.OUTPUT&&!D&&X?"From (estimated)":"From",value:le[Mc.INPUT],showMaxButton:!!R[Mc.INPUT],currency:R[Mc.INPUT],onUserInput:Q,onMax:je,onCurrencySelect:Te,otherCurrency:R[Mc.OUTPUT],id:"swap-currency-input"}),Pe=r.a.createElement(sm,{value:le[Mc.OUTPUT],label:C===Mc.INPUT&&!D&&X?"To (estimated)":"To",showMaxButton:!!R[Mc.OUTPUT],onMax:je,onUserInput:$,currency:R[Mc.OUTPUT],onCurrencySelect:Ne,otherCurrency:R[Mc.INPUT],id:"swap-currency-output"}),[Fe,Me]=Object(o.useState)(!1);Object(o.useEffect)(()=>{Me(Boolean(X&&X.route.path.length>2))},[X]);const De=r.a.createElement(r.a.Fragment,null,null===O&&!D&&w?r.a.createElement(la,{id:"add-recipient-button",onClick:()=>Y("")},"+ Add a send (optional)"):null),Le=Rn(),{search:ze}=Object(de.g)(),Xe=If.a.parse(ze);Object(o.useEffect)(()=>{Xe.from&&V(Mc.INPUT,Le[Xe.from]),Xe.to&&V(Mc.OUTPUT,Le[Xe.to])},[Le,V,Xe.from,Xe.to]);const[We,He]=Object(o.useState)(!1),[qe,Ve]=Object(o.useState)(sb.a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Hf,{isOpen:h.length>0&&!g,tokens:h,onConfirm:v}),r.a.createElement(pa,null,r.a.createElement(Od,{id:"swap-page"},r.a.createElement(Pb,{isOpen:ee,trade:X,originalTrade:te,onAcceptChanges:Ie,attemptingTxn:oe,txHash:re,recipient:O,allowedSlippage:k,onConfirm:we,swapErrorMessage:ae,onDismiss:Oe}),r.a.createElement($d,{topBox:Re,bottomBox:Pe,canChangeSwitchIcon:!0,onMouseOver:()=>{Ve(db.a)},onMouseLeave:()=>{Ve(sb.a)},onClick:()=>{ye(!1),q()},switchIcon:r.a.createElement("img",{src:qe,alt:""}),switchIconPosition:w&&"justify-content:space-between",switchContent:w&&De}),null===O||D?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(hn,{justify:"space-between",style:{padding:"12px 16px"}},r.a.createElement(Id,{clickable:!1,style:{display:"flex",alignItems:"center"}},r.a.createElement(Vm.a,{size:"16",color:"#3B199F"})),r.a.createElement(la,{id:"remove-recipient-button",onClick:()=>Y(null)},"- Remove send")),r.a.createElement(zb,{id:"recipient",value:O,onChange:Y})),X&&r.a.createElement(Tb,{trade:X,allowedSlippage:k,showInverted:Ae,showDetails:We,setShowDetails:He,showRoute:Fe}),r.a.createElement(jd,null,x?D?r.a.createElement(er,{disabled:Boolean(M),onClick:P},null!==M&&void 0!==M?M:U===ab.WRAP?"Wrap":U===ab.UNWRAP?"Unwrap":null):me&&ce?r.a.createElement(mr,{disabled:!0,style:{textAlign:"center",borderRadius:"20px"}},r.a.createElement(Aa.main,{fontSize:"20px",lineHeight:"24px",color:"white"},"Insufficient liquidity for this trade.")):Se?r.a.createElement(yn,null,r.a.createElement(ur,{onClick:fe,disabled:pe!==Jc.NOT_APPROVED||ge,width:"48%",altDisabledStyle:pe===Jc.PENDING,confirmed:pe===Jc.APPROVED},pe===Jc.PENDING?r.a.createElement(hn,{gap:"6px",justify:"center"},r.a.createElement(Aa.main,{fontSize:"20px",lineHeight:"24px",color:"white"},"Approving"),r.a.createElement(pn,{stroke:"white"})):ge&&pe===Jc.APPROVED?r.a.createElement(Aa.main,{fontSize:"20px",lineHeight:"24px",color:"white"},"Approved"):r.a.createElement(Aa.main,{fontSize:"20px",lineHeight:"24px",color:"white"},"Approve "+(null===(s=R[Mc.INPUT])||void 0===s?void 0:s.symbol))),r.a.createElement(mr,{onClick:()=>{w?we():ie({tradeToConfirm:X,attemptingTxn:!1,swapErrorMessage:void 0,showConfirm:!0,txHash:void 0})},width:"48%",fontSize:20,id:"swap-button",disabled:p||!_||pe!==Jc.APPROVED||Ce>3&&!w,error:_&&Ce>2},r.a.createElement(na.a,{fontSize:20,fontWeight:500},Ce>3&&!w?"Price Impact High":"Swap"+(Ce>2?" Anyway":"")))):r.a.createElement(mr,{onClick:()=>{w?we():ie({tradeToConfirm:X,attemptingTxn:!1,swapErrorMessage:void 0,showConfirm:!0,txHash:void 0})},fontSize:20,id:"swap-button",disabled:p||!_||Ce>3&&!w||!!xe,error:_&&Ce>2&&!xe},r.a.createElement(na.a,{fontSize:20,fontWeight:500},B||(Ce>3&&!w?"Price Impact Too High":"Swap"+(Ce>2?" Anyway":"")))):r.a.createElement(tr,{onClick:E},"Connect Wallet"),Se&&r.a.createElement(Zf,{steps:[pe===Jc.APPROVED]}),w&&ae?r.a.createElement(Fd,{error:ae}):null,W&&r.a.createElement(Mf,{version:W})))))}var Wb,Hb,qb=n(480),Vb=n.n(qb);function Kb(){const e=Object(o.useContext)(ue.ThemeContext),{account:t}=be(),n=function(){const{chainId:e}=be(),t=Rn(),n=Object(o.useMemo)(()=>{var t;return e&&null!==(t=K[e])&&void 0!==t?t:[]},[e]),a=Object(o.useMemo)(()=>e?kn()(Object.keys(t),n=>{var a;const o=t[n];return(null!==(a=V[e])&&void 0!==a?a:[]).map(e=>e.address===o.address?null:[e,o]).filter(e=>null!==e)}):[],[t,e]),r=Object(d.c)(e=>{let{user:{pairs:t}}=e;return t}),i=Object(o.useMemo)(()=>{if(!e||!r)return[];const t=r[e];return t?Object.keys(t).map(e=>[Yn(t[e].token0),Yn(t[e].token1)]):[]},[r,e]),l=Object(o.useMemo)(()=>i.concat(a).concat(n),[a,n,i]);return Object(o.useMemo)(()=>{const e=l.reduce((e,t)=>{let[n,a]=t;const o=n.sortsBefore(a),r=o?`${n.address}:${a.address}`:`${a.address}:${n.address}`;return e[r]||(e[r]=o?[n,a]:[a,n]),e},{});return Object.keys(e).map(t=>e[t])},[l])}(),a=Object(o.useMemo)(()=>n.map(e=>({liquidityToken:ta(e),tokens:e})),[n]),i=Object(o.useMemo)(()=>a.map(e=>e.liquidityToken),[a]),[l,s]=Ac(null!==t&&void 0!==t?t:void 0,i),c=Object(o.useMemo)(()=>a.filter(e=>{var t;let{liquidityToken:n}=e;return null===(t=l[n.address])||void 0===t?void 0:t.greaterThan("0")}),[a,l]),m=bc(c.map(e=>{let{tokens:t}=e;return t})),p=s||(null===m||void 0===m?void 0:m.length)<c.length||(null===m||void 0===m?void 0:m.some(e=>!e)),f=m.map(e=>{let[,t]=e;return t}).filter(e=>Boolean(e)),b=function(){const{account:e,chainId:t}=be(),n=Nc(),a=kc(null!==e&&void 0!==e?e:void 0,Object(o.useMemo)(()=>t?Object.keys(n).map(e=>new u.Token(t,e,18,"UNI-V1","Uniswap V1")):[],[t,n]));return Object(o.useMemo)(()=>Object.keys(a).some(e=>{var t;const n=null===(t=a[e])||void 0===t?void 0:t.raw;return n&&u.JSBI.greaterThan(n,u.JSBI.BigInt(0))}),[a])}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(pa,null,r.a.createElement(gi,{gap:"lg",justify:"center"},r.a.createElement(er,{id:"join-pool-button",as:ce.b,style:{padding:16},to:"/add/KSX"},r.a.createElement(Go,{iconSrc:Vb.a,width:17,height:17}),r.a.createElement(na.a,{fontWeight:600,fontSize:20},"Add Liquidity")),r.a.createElement(gi,{gap:"12px",style:{width:"100%"}},r.a.createElement(xn,{padding:"0 8px"},r.a.createElement(na.a,{color:"#281071",fontWeight:600,fontSize:16},"Your Liquidity",r.a.createElement(Ks,{icon:Ef.a,content:"When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below."}))),t?p?r.a.createElement(Ul,{padding:"40px"},r.a.createElement(Aa.body,{color:e.text3,textAlign:"center"},r.a.createElement(Bd,null,"Loading"))):(null===f||void 0===f?void 0:f.length)>0?r.a.createElement(r.a.Fragment,null,f.map(e=>r.a.createElement(Em,{key:e.liquidityToken.address,pair:e,isImportLiquidity:!1}))):r.a.createElement(Ul,{padding:"40px"},r.a.createElement(Aa.body,{color:"#988EB7",fontSize:16,textAlign:"center"},"No liquidity found.")):r.a.createElement(Ul,{padding:"40px"},r.a.createElement(Aa.body,{color:e.text3,textAlign:"center"},"Connect to a wallet to view your liquidity.")),r.a.createElement("div",null,r.a.createElement(na.a,{color:"#3B199F",textAlign:"center",fontSize:14,style:{padding:"1rem 0 1rem 0"}},"Don't see a pool you joined?"," ",r.a.createElement(sa,{style:{color:"#21D2B3"},id:"import-pool-link",to:b?"/migrate/v1":"/find"},b?"Migrate now.":"Import it.")))))))}!function(e){e.InvalidInput="InvalidInput",e.RiskyLow="RiskyLow",e.RiskyHigh="RiskyHigh"}(Wb||(Wb={})),function(e){e.InvalidInput="InvalidInput"}(Hb||(Hb={}));const Yb=ue.default.button`
  color: ${e=>{let{theme:t}=e;return t.text1}};
  align-items: center;
  height: 2rem;
  border-radius: 36px;
  font-size: 12px;
  width: auto;
  min-width: 3rem;
  border: 1px solid ${e=>{let{theme:t}=e;return t.bg3}};
  outline: none;
  background: ${e=>{let{theme:t}=e;return t.bg1}};
  :hover {
    border: 1px solid ${e=>{let{theme:t}=e;return t.bg4}};
  }
  :focus {
    border: 1px solid ${e=>{let{theme:t}=e;return"#48E8CC"}};
  }
`,_b=Object(ue.default)(Yb)`
  margin-right: 8px;
  :hover {
    cursor: pointer;
  }
  background-color: ${e=>{let{active:t,theme:n}=e;return t&&"#48E8CC"}};
  color: ${e=>{let{active:t,theme:n}=e;return t?n.white:"#6D4EC9"}};
`,Jb=ue.default.input`
  background: ${e=>{let{theme:t}=e;return t.bg1}};
  font-size: 16px;
  width: auto;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  color: ${e=>{let{theme:t,color:n}=e;return"red"===n?t.red1:"#6D4EC9"}};
  text-align: right;
`,Qb=Object(ue.default)(Yb)`
  height: 2rem;
  position: relative;
  padding: 0 0.75rem;
  flex: 1;
  border: ${e=>{let{theme:t,active:n,warning:a}=e;return n&&"1px solid "+(a?t.red1:"#48E8CC")}};
  :hover {
    border: 1px solid #6d4ec9;
  }

  input {
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
  }
`,$b=ue.default.span`
  color: #f3841e;
  ${e=>{let{theme:t}=e;return t.mediaWidth.upToSmall`
    display: none;  
  `}}
`;function Gb(e){let{rawSlippage:t,setRawSlippage:n,deadline:a,setDeadline:i}=e;const l=Object(o.useContext)(ue.ThemeContext),s=Object(o.useRef)(),[c,d]=Object(o.useState)(""),[u,m]=Object(o.useState)(""),p=""===c||(t/100).toFixed(2)===Number.parseFloat(c).toFixed(2),f=""===u||(a/60).toString()===u;let b,g;function y(e){d(e);try{const t=Number.parseInt((100*Number.parseFloat(e)).toString());!Number.isNaN(t)&&t<5e3&&n(t)}catch{}}function h(e){m(e);try{const t=60*Number.parseInt(e);!Number.isNaN(t)&&t>0&&i(t)}catch{}}return b=""===c||p?p&&t<50?Wb.RiskyLow:p&&t>500?Wb.RiskyHigh:void 0:Wb.InvalidInput,g=""===u||f?void 0:Hb.InvalidInput,r.a.createElement(gi,{gap:"md"},r.a.createElement(gi,{gap:"sm"},r.a.createElement(vn,null,r.a.createElement(Aa.black,{fontWeight:400,fontSize:14,color:l.text2},"Slippage tolerance"),r.a.createElement(Ys,{icon:Ef.a,text:"Your transaction will revert if the price changes unfavorably by more than this percentage."})),r.a.createElement(yn,null,r.a.createElement(_b,{onClick:()=>{d(""),n(10)},active:10===t},"0.1%"),r.a.createElement(_b,{onClick:()=>{d(""),n(50)},active:50===t},"0.5%"),r.a.createElement(_b,{onClick:()=>{d(""),n(100)},active:100===t},"1%"),r.a.createElement(Qb,{active:![10,50,100].includes(t),warning:!p,tabIndex:-1},r.a.createElement(yn,null,!c||b!==Wb.RiskyLow&&b!==Wb.RiskyHigh?null:r.a.createElement($b,null,r.a.createElement("span",{role:"img","aria-label":"warning"},"\u26a0\ufe0f")),r.a.createElement(Jb,{ref:s,placeholder:(t/100).toFixed(2),value:c,onBlur:()=>{y((t/100).toFixed(2))},onChange:e=>y(e.target.value),color:p?"":"red"}),"%"))),!!b&&r.a.createElement(yn,{style:{fontSize:"14px",paddingTop:"7px",color:b===Wb.InvalidInput?"red":"#FFB14A"}},b===Wb.InvalidInput?"Enter a valid slippage percentage":b===Wb.RiskyLow?"Your transaction may fail":"Your transaction may be frontrun")),r.a.createElement(gi,{gap:"sm"},r.a.createElement(vn,null,r.a.createElement(Aa.black,{fontSize:14,fontWeight:400,color:l.text2},"Transaction deadline"),r.a.createElement(Ys,{icon:Ef.a,text:"Your transaction will revert if it is pending for more than this long."})),r.a.createElement(vn,null,r.a.createElement(Qb,{style:{width:"80px"},tabIndex:-1},r.a.createElement(Jb,{color:g?"red":void 0,onBlur:()=>{h((a/60).toString())},placeholder:(a/60).toString(),value:u,onChange:e=>h(e.target.value)})),r.a.createElement(Aa.puple,{style:{paddingLeft:"8px"},fontSize:14},"minutes"))))}const Zb=ue.default.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  border-radius: 14px;
  background: ${e=>{let{isActive:t,isOnSwitch:n}=e;return t?n?"#48E8CC":"#E1E0EA":"none"}};
  color: ${()=>"#FFFFFF"};
  opacity: 0.75;
  font-size: 0.825rem;
  font-weight: 400;
  > span {
    padding: 0 2px;
  }
`,eg=ue.default.button`
  border-radius: 16px;
  border: 0px;
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0;
  background-color: transparent;
`,tg=ue.default.div`
  background: #ffffff;
  height: 18px;
  width: 18px;
  border-radius: 18px;
`;function ng(e){let{id:t,isActive:n,toggle:a}=e;return r.a.createElement(eg,{id:t,isActive:n,onClick:a},n&&r.a.createElement(Zb,{isActive:n,isOnSwitch:!0},r.a.createElement("span",null,"On"),r.a.createElement(tg,null)),!n&&r.a.createElement(Zb,{isActive:!n,isOnSwitch:!1},r.a.createElement(tg,null),r.a.createElement("span",null,"Off")))}var ag=n(686),og=n.n(ag);const rg=ue.default.div`
  position: absolute;
  bottom: -6px;
  right: 0px;
  font-size: 14px;
`,ig=ue.default.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 12px;
  :hover,
  :active,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${e=>{let{theme:t}=e;return t.bg4}};
  }
  > img {
    width: 20px;
  }
`,lg=ue.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,sg=ue.default.span`
  min-width: 20.125rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
  background: #f1f5fb;
  box-shadow: 0px 4px 10px 0px rgba(0, 1, 1, 0.17);
  border-radius: 24px;
  border: 1px solid #ffffff;
`,cg=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${e=>{let{theme:t}=e;return t.bg2}};
  border-radius: 20px;
  width: 100%;
`,dg=(Object(ue.default)(oa.a)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${e=>{let{theme:t}=e;return t.text1}};
  }
`,ue.default.div`
  width: 100%;
  height: 1px;
  background-color: ${e=>{let{theme:t}=e;return t.bg3}};
`,ue.default.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  .warningWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px 0;
  }
`);function ug(){const e=Object(o.useRef)(),t=Object(d.c)(e=>e.application.settingsMenuOpen),n=Ue(),a=Object(o.useContext)(ue.ThemeContext),[i,l]=Qn(),[s,c]=$n(),[u,m]=Jn(),[p,f]=Object(o.useState)(!1);Au(e,t?n:void 0);const b=r.a.createElement(dg,null,r.a.createElement(na.a,{fontWeight:500,fontSize:16,color:"#222222"},"Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds."),r.a.createElement("div",{className:"warningWrapper"},r.a.createElement("img",{src:as.a,alt:"",style:{marginRight:"8px",width:"24px"}}),r.a.createElement(na.a,{fontWeight:600,fontSize:18,color:"#3B199F"},"ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.")));return r.a.createElement(lg,{ref:e},r.a.createElement(Ql,{isOpen:p,onDismiss:()=>f(!1),maxHeight:100},r.a.createElement(cg,null,r.a.createElement(Kr,{className:"currency-search-dialog",bodyStyle:{padding:"0"},visible:!0,title:r.a.createElement(na.a,{fontWeight:600,fontSize:16,color:"#281071",lineHeight:"20px"},"Are you sure?"),onCancel:()=>f(!1),footer:null},r.a.createElement(ts,{topBox:b,bottomBox:r.a.createElement(mr,{error:!0,padding:"16px",onClick:()=>{"confirm"===window.prompt('Please type the word "confirm" to enable expert mode.')&&(m(),f(!1))}},r.a.createElement(na.a,{fontSize:20,fontWeight:500,id:"confirm-expert-mode"},"Turn On Expert Mode"))})))),r.a.createElement(ig,{onClick:n,id:"open-settings-dialog-button"},r.a.createElement("img",{src:og.a,alt:""}),u&&r.a.createElement(rg,null,r.a.createElement("span",{role:"img","aria-label":"wizard-icon"},"\ud83e\uddd9"))),t&&r.a.createElement(sg,null,r.a.createElement(gi,{gap:"md",style:{padding:"1rem"}},r.a.createElement(na.a,{fontWeight:600,fontSize:14},"Transaction Settings"),r.a.createElement(Gb,{rawSlippage:i,setRawSlippage:l,deadline:s,setDeadline:c}),r.a.createElement(na.a,{fontWeight:600,fontSize:14},"Interface Settings"),r.a.createElement(yn,null,r.a.createElement(vn,null,r.a.createElement(Aa.black,{fontWeight:400,fontSize:14,color:a.text2},"Toggle Expert Mode"),r.a.createElement(Ys,{icon:Ef.a,text:"Bypasses confirmation modals and allows high slippage trades. Use at your own risk."})),r.a.createElement(ng,{id:"toggle-expert-mode-button",isActive:u,toggle:u?()=>{m(),f(!1)}:()=>{n(),f(!0)}})))))}var mg=e=>{let{}=e;const{route:t}=fp("swap",["Swap","Pool"]);return r.a.createElement(vd,null,r.a.createElement(kd,null,r.a.createElement(cc,{active:"pool"!==t?"Swap":"Pool",width:102}),r.a.createElement(ug,null)),"pool"!==t?r.a.createElement(Xb,null):r.a.createElement(Kb,null))};const pg={name:"Default",logoURI:"",keywords:["default","lp-token"],timestamp:"2021-05-27T20:37:00.000+00:00",tokens:[{address:"0xA53b55c5765D74590B030C6E74397B41F82a308C",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"PCX-XBTC LP",pair:"PCX-XBTC",poolId:0,reward:18,share:25},{address:"0x2E98727Fe6BE98EDD7FB0FF699c779092B391206",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"PCX-WKSX LP",pair:"PCX-WKSX",poolId:1,reward:2,share:2.77},{address:"0x98459db82dE19ABb0C6d61A41074e63045d335Be",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"WKSX-MINI LP",pair:"WKSX-MINI",poolId:2,reward:2,share:2.77},{address:"0x8bac6411c1fa1a53226dfd1Cb72aff57C20c2942",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"BNB-USB LP",pair:"BNB-USB",poolId:3,reward:1,share:1.38},{address:"0xFcc699c13F4aB88F2552b28Eaeff2dCC33E1854F",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"BUSD-USB LP",pair:"BUSD-USB",poolId:4,reward:1,share:1.38},{address:"0xFcA8cD6154614A8b514610516D60Cf92317CB5Aa",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"USDT-USB LP",pair:"USDT-USB",poolId:5,reward:1,share:1.38},{address:"0x132dFe277F1CaCBE58A95Ef9f07067ab39f33Bb1",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"USDC-USB LP",pair:"USDC-USB",poolId:6,reward:1,share:1.38},{address:"0xD29823e93F9aE1db89b526931Bc1179DF296F09f",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"DOT-USB LP",pair:"DOT-USB",poolId:7,reward:1,share:1.38},{address:"0x157AECA4E4864F528a6F3f7555663d5a5Eb592B8",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"KSM-USB LP",pair:"KSM-USB",poolId:8,reward:1,share:1.38},{address:"0x9150e72B9f5EBb7fAd5D87859e810DCBaB42c12C",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"PCX-USB LP",pair:"PCX-USB",poolId:9,reward:1,share:1.38},{address:"0x68A80bcD175d58643b82EB1d0F21D290bFA59265",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"PCX-BNB LP",pair:"PCX-BNB",poolId:10,reward:1,share:1.38},{address:"0xA1E8244f02862464EC745014FfF9E81E54DD35B0",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"XBTC-USB LP",pair:"XBTC-USB",poolId:11,reward:1,share:1.38},{address:"0x417437Ed46eD1c837f2099a0b762e2C627a04fe6",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"PCX-DOT LP",pair:"PCX-DOT",poolId:12,reward:1,share:1.38},{address:"0xD24e5A65a53c74253CEA65bC7F31bE946d8408aE",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"PCX-KSM LP",pair:"PCX-KSM",poolId:13,reward:1,share:1.38},{address:"0x8EF0a587be3017b0c2F4A856732a9Af6AE0FA970",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"PCX-SO LP",pair:"PCX-SO",poolId:14,reward:36,share:50},{address:"0xEB912DA68c627896271Aa3591275D951BCc17C40",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"SO-USB LP",pair:"SO-USB",poolId:15,reward:1,share:1.38},{address:"0xD0Ba13cC6398fc3a0495553D2237b065C2Ee6E40",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"SO-WKSX LP",pair:"SO-WKSX",poolId:16,reward:1,share:1.38},{address:"0x7935FAB37525EA7CC9334263AD23cB7F3F80fF15",assetId:99,chainId:1506,decimals:18,logoURI:"",name:"SherpaX",symbol:"SO-MINI LP",pair:"SO-MINI",poolId:17,reward:1,share:1.38}],version:{major:1,minor:1,patch:1}},fg=ue.default.div`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  margin-bottom: 14px;
  background: #d6d5f1;
  box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);
  border-radius: 24px;
  overflow-x: scroll;

  &:first-child {
  }

  .earn-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 24px;
    background: white;
    cursor: pointer;
    max-height: 104px;
    width: fit-content;
    z-index: 2;
    border-radius: 24px;

    &.details-open {
      border-bottom-right-radius: 24px;
      border-bottom-left-radius: 24px;
      padding-bottom: 28px;
    }
    &.details-close {
      //padding-bottom: 0;
    }

    table {
      margin-left: 16px;
      th {
        padding: 0 0 0 30px;
        text-align: left;
        font-size: 12px;
        font-weight: 400;
        color: #565a69;
        line-height: 17px;
        &:first-child {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          line-height: 22px;
          padding: 0;
        }
      }
      td {
        padding: 0 30px;
        font-size: 16px;
        font-weight: 500;
        color: #000000;
        line-height: 22px;
        &:first-child {
          padding-left: 0;
          font-size: 12px;
          font-weight: 400;
          color: #919191;
          line-height: 17px;
        }
      }

      &.pool-info {
        width: 100%;
      }
    }
    .arrow {
      width: 24px;
      height: 24px;
    }
  }
`,bg=Object(ue.default)(xn)`
  margin-right: 0;
  > div {
    margin-right: ${e=>{let{marginRight:t}=e;return t||"90px"}};
    width: ${e=>{let{width:t}=e;return t||"120px"}};
    &:last-child {
      margin-right: 0;
    }
  }
`,gg=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #d6d5f4;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  transition: all 0.2s;

  padding: ${e=>{let{isOpen:t}=e;return t?"24px":"0 24px"}};
  height: ${e=>{let{isOpen:t}=e;return t?"170px":"0"}};
  position: relative;
  overflow: hidden;

  .earn-item-details {
    display: flex;
    align-items: center;
    width: 100%;

    &-modal {
      min-width: 328px;
      max-height: 112px;
      padding: 16px 24px;
      margin-left: 22px;
      background: rgba(255, 255, 255, 0.23);
      box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);
      border-radius: 20px;
      border: 2px solid #ffffff;
      transition: all 0.2s;
      opacity: ${e=>{let{isOpen:t}=e;return t?"1":"0"}};

      &:first-child {
        margin-left: 0;
      }
      .modal-title {
        line-height: 20px;
        margin-bottom: 4px;
        &.stake {
          display: flex;
          align-items: center;
          .stake-amount {
            line-height: 33px;
            &::placeholder {
              font-size: 24px;
              font-weight: 500;
              color: #000000;
              line-height: 33px;
            }
          }
        }
        span.modal-balance {
          cursor: pointer;
        }
      }

      .stake-confirm {
        max-width: 144px;
        max-height: 50px;
      }

      &.farms-modal {
        min-width: 322px;
      }
    }
  }

  .line {
    width: 1px;
    height: 24px;
    background: #998fb8;
  }
`,yg={maxWidth:"1200px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",boxShadow:"none",borderRadius:"24px",border:"1px solid white",padding:"24px",background:"rgba(255, 255, 255, 0.3)"};var hg=(e,t)=>{const n=function(e,t,n){try{const a=Object(ad.parseUnits)(t,n).toString();if("0"!==a)return new u.TokenAmount(e,u.JSBI.BigInt(a))}catch(a){console.debug(`Failed to parse input amount: "${t}"`,a)}}(Pn(e),"1",18),[a,r]=$c(null!==n&&void 0!==n?n:void 0,t),[i,l]=Object(o.useState)(!0),s=Object(o.useMemo)(()=>a===Jc.UNKNOWN||a===Jc.PENDING,[a]);return Object(o.useEffect)(()=>{l(a!==Jc.APPROVED)},[a]),{isEnable:i,approveCallback:r,isPending:s}};const vg=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8;if(void 0!==e&&null!==e&&t)return new br.a(e).dividedBy(Math.pow(10,t)).toFixed(n)},xg=(e,t)=>{if(void 0!==e&&null!==e&&t)return new br.a(e).dividedBy(Math.pow(10,t)).toString()},Eg=Object(Se.b)("global/updateVersion");let wg,Ag;!async function(){fetch("https://raw.githubusercontent.com/RedPillPhil/token-list-1/patch-1/chainx.tokenlist.json").then(e=>e.json()).then(e=>{wg=e,Ag=e.tokens.filter(e=>99!==e.assetId)}).catch(e=>{console.error(e)})}();const kg={error:null,current:null,loadingRequestId:null,pendingUpdate:null},Cg={lastInitializedDefaultListOfLists:Qp,byUrl:{...Qp.reduce((e,t)=>(e[t]=kg,e),{}),[Jp]:{error:null,current:wg,loadingRequestId:null,pendingUpdate:null}},selectedListUrl:void 0};var Sg=Object(Se.c)(Cg,e=>e.addCase(rl.pending,(e,t)=>{let{payload:{requestId:n,url:a}}=t;e.byUrl[a]={current:null,pendingUpdate:null,...e.byUrl[a],loadingRequestId:n,error:null}}).addCase(rl.fulfilled,(e,t)=>{var n,a;let{payload:{requestId:o,tokenList:r,url:i}}=t;const l=null===(n=e.byUrl[i])||void 0===n?void 0:n.current,s=null===(a=e.byUrl[i])||void 0===a?void 0:a.loadingRequestId;if(l){if(Object(ol.c)(l.version,r.version)===ol.a.NONE)return;null!==s&&s!==o||(e.byUrl[i]={...e.byUrl[i],loadingRequestId:null,error:null,current:l,pendingUpdate:r})}else e.byUrl[i]={...e.byUrl[i],loadingRequestId:null,error:null,current:r,pendingUpdate:null}}).addCase(rl.rejected,(e,t)=>{var n;let{payload:{url:a,requestId:o,errorMessage:r}}=t;(null===(n=e.byUrl[a])||void 0===n?void 0:n.loadingRequestId)===o&&(e.byUrl[a]={...e.byUrl[a],loadingRequestId:null,error:r,current:null,pendingUpdate:null})}).addCase(cl,(e,t)=>{let{payload:n}=t;e.selectedListUrl=n,e.byUrl[n]||(e.byUrl[n]=kg)}).addCase(ll,(e,t)=>{let{payload:n}=t;e.byUrl[n]||(e.byUrl[n]=kg)}).addCase(sl,(e,t)=>{let{payload:n}=t;e.byUrl[n]&&delete e.byUrl[n],e.selectedListUrl===n&&(e.selectedListUrl=Object.keys(e.byUrl)[0])}).addCase(il,(e,t)=>{var n;let{payload:a}=t;if(!(null===(n=e.byUrl[a])||void 0===n?void 0:n.pendingUpdate))throw new Error("accept list update called without pending update");e.byUrl[a]={...e.byUrl[a],pendingUpdate:null,current:e.byUrl[a].pendingUpdate}}).addCase(Eg,e=>{if(e.lastInitializedDefaultListOfLists){if(e.lastInitializedDefaultListOfLists){const t=e.lastInitializedDefaultListOfLists.reduce((e,t)=>e.add(t),new Set),n=Qp.reduce((e,t)=>e.add(t),new Set);Qp.forEach(n=>{t.has(n)||(e.byUrl[n]=kg)}),e.lastInitializedDefaultListOfLists.forEach(t=>{n.has(t)||delete e.byUrl[t]})}}else e.byUrl=Cg.byUrl,e.selectedListUrl=void 0;e.lastInitializedDefaultListOfLists=Qp}));const Og="0xE7e312dfC08e060cda1AF38C234AEAcc7A982143",Ig=(e,t,n,r,i)=>{var l,s,c,d;const m=JSON.parse(window.localStorage.getItem(`farm-${e}-${i}`)||"{}"),{library:p,chainId:f,account:b}=Object(a.d)(),g=ed(t),y=Et(0,p,b),[h,v]=Object(o.useState)(m.APR||""),[x,E]=Object(o.useState)(m.liquidity||""),w=Fe(),A=Object(o.useMemo)(()=>((null===wg||void 0===wg?void 0:wg.tokens)||[]).concat([{...u.ETHER,address:"0x900639Cc5A37c519C9E32Bfa7EAdf747c53D9B0A"}]),[null===wg||void 0===wg?void 0:wg.tokens,u.ETHER]),k=Object(o.useMemo)(()=>e.split("-").map(e=>A.filter(t=>"WKSX"===e?t.symbol.includes("KSX"):t.symbol===e)[0]),[e,A]);async function C(e,t,a,o){try{const r=new at.Contract(e,Af.abi,p),i=await r.balanceOf(a);return new br.a(i.toString()).times(new br.a(n).times(Math.pow(10,18))).dividedBy(new br.a(o).times(Math.pow(10,18))).dividedBy(new br.a(1).times(Math.pow(10,t))).toFixed(18)}catch(r){console.error("error: ",r)}}return Object(o.useEffect)(()=>{var e,a,o,i,l,s;(async(e,t,a,o)=>{if(!e||!a||!n||!o)return;const i=await C(e,t,a,o),l=new br.a(1).times(Math.pow(10,t)).toString(),s=await y.getAmountsOut(l,[e,Og]),c=new br.a(s[1].toString()).times(new br.a(i)).toString(),d=await y.getAmountsOut("1000000000000000000",["0xF373b95a00662ed1211948F414b252E56c0fa0C4",Og]),u=new br.a(365*r).times(new br.a(d[1].toString())).dividedBy(new br.a(c).times(2)).times(100).toFixed(2);v(u)})(null===(e=k[0])||void 0===e?void 0:e.address,null===(a=k[0])||void 0===a?void 0:a.decimals,t.address,null===g||void 0===g?void 0:g.toFixed()),async function(e,t,a,o,r,i){if(!e||!t||!o||!a||!r||!n||!i)return;const l=await C(e,a,r,i),s=await C(t,o,r,i);let c,d;if(e===Og)c=new br.a(l).toNumber();else{const t=new br.a(1).times(Math.pow(10,a)).toString(),n=await y.getAmountsOut(t,[e,Og]);c=new br.a(n[1].toString()).times(new br.a(l)).toNumber()}if(t===Og)d=new br.a(s).toNumber();else{const e=new br.a(1).times(Math.pow(10,o)).toString(),n=await y.getAmountsOut(e,[t,Og]);d=new br.a(n[1].toString()).times(new br.a(s)).toNumber()}const u=new br.a(c+d).dividedBy(Math.pow(10,18)).toFixed(4);E(u)}(null===(o=k[0])||void 0===o?void 0:o.address,null===(i=k[1])||void 0===i?void 0:i.address,null===(l=k[0])||void 0===l?void 0:l.decimals,null===(s=k[1])||void 0===s?void 0:s.decimals,t.address,null===g||void 0===g?void 0:g.toFixed())},[null===(l=k[0])||void 0===l?void 0:l.address,null===(s=k[1])||void 0===s?void 0:s.address,null===(c=k[0])||void 0===c?void 0:c.decimals,null===(d=k[1])||void 0===d?void 0:d.decimals,t.address,n,g,r,w.length]),{annualizedRate:h,liquidity:x}},Tg=(e,t)=>{const{tokens:n}=pg,{pair:a}=n[t],r=JSON.parse(window.localStorage.getItem(`farm-${a}-${t}`)||"{}"),[i,l]=Object(o.useState)([r.tokenPairA,r.tokenPairB]),s=((null===wg||void 0===wg?void 0:wg.tokens)||[]).concat([{...u.ETHER,logoURI:eo.a,address:"KSX"}]);return Object(o.useEffect)(()=>{const e=a.split("-").map(e=>s.filter(t=>"WKSX"===e?t.symbol.includes("KSX"):t.symbol===e).map(e=>({symbol:e.symbol,logoURI:e.logoURI,address:e.address}))[0]);e[0]&&e[1]&&l([...e])},[a]),Object(o.useEffect)(()=>{i[0]&&i[1]&&window.localStorage.setItem(`farm-${a}-${t}`,JSON.stringify({...r,tokenPairA:i[0],tokenPairB:i[1]}))},[r,a,t,i]),i};function jg(){const e=Object(o.useRef)(!1);return Object(o.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}const Ng=(e,t,n,a,r,i)=>{const l=JSON.parse(window.localStorage.getItem(`farm-${a}-${t}`)||"{}"),s=jg(),[c,d]=Object(o.useState)({ownEarned:l.ownEarned||"",APR:l.APR||"",liquidity:l.liquidity||"",ownStaked:l.ownStaked||"",tokenPairA:null===l||void 0===l?void 0:l.tokenPairA,tokenPairB:null===l||void 0===l?void 0:l.tokenPairB,ownShared:l.ownShared||""}),u=Cc(M,null!==r&&void 0!==r?r:void 0),m=null===u||void 0===u?void 0:u.toSignificant(18),p=Fe(),{annualizedRate:f,liquidity:b}=Ig(a,r,m,i,t),g=Tg(0,t),y=Object(o.useCallback)(async(t,n,a)=>{try{const o=await e.pendingSoSwap(t,n),r=await e.user_info(t,n);a&&s.current&&d(e=>({...e,ownEarned:vg(o.toString(),18),ownStaked:vg(r.amount.toString(),18,18),ownShared:new br.a(vg(r.amount.toString(),18,18)).dividedBy(new br.a(a)).times(new br.a(100)).toFixed(4)}))}catch(o){console.error("error: ",o)}},[s]);return Object(o.useEffect)(()=>{y(t,n,m)},[t,n,p.length,m]),Object(o.useEffect)(()=>{g[0]&&g[1]&&s.current&&d(e=>({...e,tokenPairA:g[0],tokenPairB:g[1]}))},[g,s]),Object(o.useEffect)(()=>{s.current&&d(e=>({...e,APR:f,liquidity:b}))},[f,b,s]),Object(o.useEffect)(()=>{window.localStorage.setItem(`farm-${a}-${t}`,JSON.stringify({...c}))},[JSON.stringify(c)]),{...c}};var Rg=(e,t,n,a,r,i)=>{const l=en(),s=Object(o.useMemo)(()=>{switch(n){case"increase_stake":return"stake";case"unstake_all":return"claim";default:return n}},[n]);return Object(o.useCallback)(async()=>{try{const c=ht(await e.estimateGas[n](...a)),d=await e[n](...a,{gasLimit:c}).catch(e=>{console.error(n+" failed",e)});l(d,{summary:(o=s,o.slice(0,1).toUpperCase()+o.slice(1).toLowerCase()+" "+Number(t)+" "+r)}),i()}catch(c){console.error(c)}var o},[a,e,n,l,s,t,r,i])};var Bg=r.a.memo(e=>{let{balance:t,amount:n,setAmount:a,decimals:i}=e;const[l,s]=Object(o.useState)(0),c=Object(o.useCallback)(e=>{s(e);const n=function(e){const t=e.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);return e.toFixed(Math.max(0,(t[1]||"").length-t[2]))}(new br.a(t||0).times(e).dividedBy(100).toNumber()),o=n.indexOf("."),r=n.slice(o+1),l=n.slice(0,o),c=r.slice(0,i);r.length>i?a(`${l}.${c}`):a(n)},[t,a,i]);return r.a.createElement(gi,{gap:"20px",style:{padding:"16px",background:"#FFFFFF",boxShadow:"0 2px 4px 0 rgba(109, 78, 201, 0.06)",borderRadius:"24px",border:"2px solid rgba(109, 78, 201, 0.57)"}},r.a.createElement(xn,null,r.a.createElement(yn,null,r.a.createElement(na.a,{fontWeight:600,fontSize:24,color:"#281071",lineHeight:"29px"},n))),r.a.createElement(xn,null,r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7",lineHeight:"17px"},"Balance: ",t)),r.a.createElement(xn,{justifyContent:"flex-start"},r.a.createElement(wd,{margin:"8px 8px 8px 0",onClick:()=>c(25),width:"20%"},"25%"),r.a.createElement(wd,{margin:"8px",onClick:()=>c(50),width:"20%"},"50%"),r.a.createElement(wd,{margin:"8px",onClick:()=>c(75),width:"20%"},"75%"),r.a.createElement(wd,{margin:"8px",onClick:()=>c(100),width:"20%"},"Max")),r.a.createElement(_m,{value:l,onChange:c}))});var Ug=r.a.memo(e=>{let{title:t,symbol:n,currencyLogoA:a,currencyLogoB:o,amount:i,setAmount:l,balance:s,decimals:c}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(yn,{paddingBottom:"12px"},r.a.createElement(na.a,{fontSize:16,fontWeight:600,color:"#281071",lineHeight:"20px"},t,":"),r.a.createElement(vn,null,r.a.createElement(ba,{className:"overlay",style:{background:"rgba(0, 0, 0, 0.07)"}},r.a.createElement(Go,{iconSrc:a,width:24,height:24}),o&&r.a.createElement(Go,{className:"currency-logo-b",iconSrc:o,width:24,height:24})),r.a.createElement(na.a,{marginLeft:"10px",fontSize:18,fontWeight:600,color:"#281071",lineHeight:"21px"},n))),r.a.createElement(xn,null,r.a.createElement(Bg,{decimals:c,amount:i,setAmount:l,balance:s})))});var Pg=r.a.memo(e=>{let{isOpen:t,onClose:n,balance:a,symbol:o,decimals:i,currencyLogoA:l,currencyLogoB:s,amount:c,setAmount:d,onClick:u,linkTarget:m}=e;return r.a.createElement(Kr,{visible:t,onCancel:n,title:"Stake in Pool",footer:null},r.a.createElement(yi,{style:{width:"100%"}},r.a.createElement(Ug,{title:"Stake",symbol:o,balance:a,amount:c,decimals:i,setAmount:d,currencyLogoA:l,currencyLogoB:s}),r.a.createElement(xn,null,r.a.createElement(er,{disabled:Number(c)<=0,borderRadius:"24px",padding:"22px",onClick:u,style:{margin:"24px 0 12px 0"}},r.a.createElement(na.a,{lineHeight:"24px",fontSize:20,fontWeight:500},"Confirm Stake"))),r.a.createElement(xn,{marginBottom:"8px"},r.a.createElement(sr,{to:m},"Get ",o))))});var Fg=e=>{var t,n;let{isOpen:a,onClose:i,poolId:l,decimals:s,balance:c,symbol:d}=e;const{account:u,chainId:m,library:p}=be(),[f,b]=Object(o.useState)("0"),g=Tg(0,l),y=wt(0,p,u),h=Rg(y,f,"unstake",[l,new br.a(f).times(Math.pow(10,18)).toFixed()],d,i);return r.a.createElement(Kr,{visible:a,onCancel:i,title:"Unstake LP Token",footer:null},r.a.createElement(yi,{style:{width:"100%"}},r.a.createElement(Ug,{title:"Unstake",symbol:d,balance:c,amount:f,setAmount:b,currencyLogoA:null===(t=g[0])||void 0===t?void 0:t.logoURI,currencyLogoB:null===(n=g[1])||void 0===n?void 0:n.logoURI,decimals:s}),r.a.createElement(vn,{width:"100%",padding:"24px 0 8px 0"},r.a.createElement(er,{disabled:Number(f)<=0,marginRight:"12px",borderRadius:"24px",padding:"22px",onClick:h},r.a.createElement(na.a,{lineHeight:"24px",fontSize:20,fontWeight:500},"Unstake")),r.a.createElement(ir,{padding:"22px",borderRadius:"24px",onClick:i},r.a.createElement(na.a,{lineHeight:"24px",fontSize:20,fontWeight:500},"Cancel")))))},Mg=n(315),Dg=n.n(Mg);var Lg=r.a.memo(e=>{let{title:t,button:n,value:a}=e;return r.a.createElement("div",{className:"earn-item-details-modal farms-modal"},r.a.createElement(na.a,{className:"modal-title target",fontSize:14,fontWeight:500,color:"#281071"},t),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},a&&r.a.createElement(na.a,{fontSize:24,fontWeight:600,color:"#281071",className:"target-earned"},a),n))});const zg=ue.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: all 0.2s;
  opacity: ${e=>{let{isOpen:t}=e;return t?"1":"0"}};
`;var Xg=r.a.memo(e=>{let{leftInfoTitle:t,leftInfoValue:n,rightInfoTitle:a,rightInfoValue:o,viewContractLink:i,isOpen:l}=e;return r.a.createElement(zg,{isOpen:l},r.a.createElement(Xl,null,r.a.createElement(vn,null,r.a.createElement(bi,{style:{padding:"18px 20px"}},r.a.createElement(na.a,{fontSize:16,fontWeight:500,color:"#281071",lineHeight:"20px"},n),r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7",lineHeight:"17px",marginTop:"8px"},t)),r.a.createElement("div",{className:"line"}),r.a.createElement(bi,{style:{padding:"18px 20px"}},r.a.createElement(na.a,{fontSize:16,fontWeight:500,color:"#281071",lineHeight:"20px"},o),r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7",lineHeight:"17px",marginTop:"8px"},a)))),r.a.createElement(xn,{style:{width:"fit-content",marginTop:"7px",cursor:"pointer"}},r.a.createElement(na.a,{onClick:()=>window.open(i),fontSize:13,fontWeight:600,color:"#876CD7",lineHeight:"16px"},"View contract \u2197")))});var Wg=r.a.memo(e=>{var t,n,a,i;let{isOpen:l,poolId:s,isEnable:c,isPending:d,approveCallback:m}=e;const{account:p,chainId:f,library:b}=be(),[g,y]=Object(o.useState)("0"),[h,v]=Object(o.useState)(!1),[x,E]=Object(o.useState)(!1),w=wt(0,b,p),{tokens:A}=pg,{pair:k,symbol:C,address:S,decimals:O,reward:I}=A[s],T=new u.Token(f,S,O,C,"SherpaX"),j=Cc(null!==p&&void 0!==p?p:void 0,null!==T&&void 0!==T?T:void 0),N=Tg(0,s),{ownStaked:R,ownShared:B,ownEarned:U}=Ng(w,s,p,k,T,I),P=Rg(w,U,"claim",[s],"SO"),F=Object(o.useCallback)(()=>v(!1),[]),D=Rg(w,g,"stake",[s,new br.a(g).times(Math.pow(10,18)).toFixed()],C,F),L=Object(o.useMemo)(()=>[{title:"SO EARNED",value:U,button:r.a.createElement(er,{borderRadius:"16px",padding:"14px 24px",maxWidth:"110px",onClick:P,disabled:Number(U)<=0,className:"claim-confirm enable"},r.a.createElement(na.a,{lineHeight:"20px",fontSize:16,fontWeight:500},"Harvest"))},{title:"Enable Farms",button:c?r.a.createElement(er,{borderRadius:"16px",padding:"14px",onClick:m,className:"token-confirm enable"},r.a.createElement(na.a,{lineHeight:"20px",fontSize:16,fontWeight:500},d?r.a.createElement(ma,{src:Dg.a}):"Enable")):r.a.createElement(r.a.Fragment,null,r.a.createElement(ir,{width:"fit-content",padding:"14px 23px",onClick:()=>E(!0),className:"token-confirm enable",style:{flex:"1",width:"110px",marginRight:"12px"}},"Redeem"),r.a.createElement(er,{borderRadius:"16px",padding:"14px",onClick:()=>v(!0),className:"token-confirm enable",style:{flex:"2"}},r.a.createElement(na.a,{lineHeight:"20px",fontSize:16,fontWeight:500},"Stake")))}],[m,P,c,d,U]);return r.a.createElement(gg,{isOpen:l},r.a.createElement(Pg,{isOpen:h,poolId:s,onClose:F,balance:null===j||void 0===j?void 0:j.toFixed(18),symbol:C,currencyLogoA:null===(t=N[0])||void 0===t?void 0:t.logoURI,currencyLogoB:null===(n=N[1])||void 0===n?void 0:n.logoURI,amount:g,setAmount:y,onClick:D,decimals:O,linkTarget:`/add/${null===(a=N[0])||void 0===a?void 0:a.address}/${null===(i=N[1])||void 0===i?void 0:i.address}`}),r.a.createElement(Fg,{isOpen:x,onClose:()=>E(!1),poolId:s,balance:R,symbol:C,decimals:O}),r.a.createElement("div",{className:"earn-item-details"},L.map(e=>r.a.createElement(Lg,{key:e.title,title:e.title,value:e.value,button:e.button}))),r.a.createElement(Xg,{leftInfoTitle:"My Stake",leftInfoValue:R+" LP",rightInfoTitle:"My Share",rightInfoValue:B+" %",viewContractLink:"https://evm.sherpax.io/address/"+M,isOpen:l}))});const Hg=ue.default.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  .target-currency {
    width: 40px;
    height: 40px;
  }
  .stake-currency {
    width: 22px;
    height: 22px;
    position: absolute;
    bottom: -2px;
    right: -4px;
  }
`;var qg=e=>{let{TargetCurrencyIcon:t,stakeCurrencyIcon:n}=e;return r.a.createElement(Hg,null,r.a.createElement("img",{className:"target-currency",src:t,alt:"target-currency"}),r.a.createElement("img",{className:"stake-currency",src:n,alt:"stake-currency"}))};var Vg=e=>{var t,n;let{poolId:a}=e;const{tokens:o}=pg,{pair:i}=o[a],l=Tg(0,a);return r.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"122px"}},(null===(t=l[0])||void 0===t?void 0:t.logoURI)&&(null===(n=l[1])||void 0===n?void 0:n.logoURI)?r.a.createElement(qg,{stakeCurrencyIcon:l[1].logoURI,TargetCurrencyIcon:l[0].logoURI}):r.a.createElement(rf.a.Avatar,{active:!0,size:36,shape:"circle"}),r.a.createElement(na.a,{marginLeft:"12px",fontSize:18,fontWeight:600,color:"#281071",style:{whiteSpace:"nowrap"}},i))};const Kg=Object(ue.default)(rf.a)`
  .ant-skeleton-input {
  }
  .ant-skeleton-title {
    width: 97px !important;
    height: 20px !important;
    margin: 0 !important;
    border-radius: 9px !important;
  }
  .ant-skeleton-paragraph {
    display: none;
  }
`,Yg=Object(ue.default)(na.a)`
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_g=e=>{let{title:t,value:n,width:a,margin:o}=e;return r.a.createElement(yi,{width:a,margin:o},t?"string"===typeof n?r.a.createElement(Yg,{fontSize:16,fontWeight:500,color:"#281071",style:{whiteSpace:"nowrap"}},t):t:r.a.createElement(Kg,{paragraph:{rows:0},active:!0}),r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7",style:{whiteSpace:"nowrap"}},n))};var Jg=e=>{let{title:t,value:n,width:a,margin:o}=e;return r.a.createElement(yi,{width:a,margin:o},r.a.createElement(na.a,{fontSize:14,fontWeight:500,color:"#988EB7",style:{whiteSpace:"nowrap"}},t),n?"string"===typeof n?r.a.createElement(na.a,{fontSize:16,fontWeight:500,color:"#281071",style:{whiteSpace:"nowrap"}},n):n:r.a.createElement(Kg,{paragraph:{rows:0},active:!0}))};const Qg=ue.default.div`
  width: fit-content !important;
  padding: 12px;
  background: #fbfbfd;
  border-radius: 16px;
  border: 1px solid #f0f2f5;

  img {
    transition: all 0.2s;

    &.arrow-down {
      transform: rotate(-180deg);
    }
  }
`;var $g=e=>{let{isUp:t}=e;return r.a.createElement(Qg,null,r.a.createElement(Go,{className:t?"arrow-up":"arrow-down",iconSrc:vb.a,width:24,height:24}))};var Gg=e=>{let{poolId:t,pair:n,lpTokenAddress:a,lpTokenDecimals:i,lpTokenSymbol:l,reward:s,settingOption:c,updateObserver:d}=e;const{isUserBlocked:m}=_i(),p=jg(),{account:f,chainId:b,library:g}=be(),[y,h]=Object(o.useState)(!1),{isEnable:v,approveCallback:x,isPending:E}=hg(a,M),w=wt(0,g,f),A=new u.Token(b,a,i,l,"SherpaX"),{ownStaked:k,ownEarned:C,APR:S,liquidity:O}=Ng(w,t,f,n,A,s),I=Object(o.useMemo)(()=>[{title:"Earned",value:null!==C&&void 0!==C?C:void 0},{title:"APR",value:""+(S?S+"%":"")},{title:"Liquidity",value:""+(O?O+" LP":"")},{title:"Rewards",value:""+(s?s+" SO / DAY":void 0)}],[C,S,O,s]),T=Object(o.useMemo)(()=>r.a.createElement(fg,null,r.a.createElement("div",{className:"earn-item "+(y?"details-open":"details-close"),onClick:()=>!m&&h(!y)},r.a.createElement("div",{style:{display:"flex",alignItems:"center",width:"100%"}},r.a.createElement(bg,null,r.a.createElement(Vg,{poolId:t}),I.map(e=>r.a.createElement(Jg,{key:e.title,title:e.title,value:e.value})),r.a.createElement($g,{isUp:y})))),r.a.createElement(Wg,{isOpen:y,poolId:t,isEnable:v,isPending:E,approveCallback:x})),[y,t,I,v,E,x]),j=Object(o.useCallback)(e=>{p.current&&d(n=>({...n,[t]:{show:e}}))},[p,t,d]);return Object(o.useEffect)(()=>{c.stakedOnly?Number(k)>0?j(!0):j(!1):j(!0)},[c.stakedOnly,k,t,j]),Object(o.useMemo)(()=>c.stakedOnly?Number(k)>0?T:null:T,[c.stakedOnly,k,T])},Zg=n(483),ey=n.n(Zg);var ty=()=>{const{pathname:e}=Object(de.g)(),t=Object(o.useMemo)(()=>e.includes("asset")?"assets":"Staked",[e]);return r.a.createElement(Ll,{padding:"101px 0",display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(Go,{iconSrc:ey.a,width:44,height:44}),r.a.createElement(na.a,{paddingTop:"16px",fontSize:16,fontWeight:500,color:"#988EB7",lineHeight:"20px"},"You don't have any ",t," yet ."))};var ny=e=>{const[t,n]=Object(o.useState)(e),{chainId:a}=be();return{isEmpty:Object(o.useMemo)(()=>Object.values(t).filter(e=>e.show).length<=0&&1506===a,[a,t]),updateObserver:n}};const ay={0:{show:!0},1:{show:!0},2:{show:!0},3:{show:!0},4:{show:!0},5:{show:!0},6:{show:!0},7:{show:!0},8:{show:!0},9:{show:!0},10:{show:!0},11:{show:!0},12:{show:!0},13:{show:!0},14:{show:!0},15:{show:!0},16:{show:!0},17:{show:!0}};var oy=r.a.memo(e=>{let{settingOption:t}=e;const{chainId:n}=be(),{isEmpty:a,updateObserver:o}=ny(ay);return r.a.createElement(r.a.Fragment,null,1506===n?pg.tokens.length>0&&pg.tokens.map(e=>r.a.createElement(Gg,{key:e.symbol,pair:e.pair,poolId:e.poolId,reward:e.reward,lpTokenAddress:e.address,lpTokenDecimals:e.decimals,lpTokenSymbol:e.symbol,settingOption:t,updateObserver:o})):r.a.createElement(lf,null),a&&r.a.createElement(ty,null))}),ry=n(487),iy=n.n(ry),ly=n(488),sy=n.n(ly);const cy=()=>{const e=JSON.parse(window.localStorage.getItem("pools_amount")||"{}"),{account:t,chainId:n,library:a}=be(),r=function(e,t,n){return xt("0x5a8f56FF3dfbF579CaFd673f26C282fd911cb926",st,t,n)}(0,a,t),i=function(e,t,n){return xt("0x20dc6f916539d537108B5F9D634DCb3e6181BE08",st,t,n)}(0,a,t),l=function(e,t,n){return xt("0x196c7490d76D4d4324e5a35d5B98A995De5FDf82",st,t,n)}(0,a,t),[s,c]=Object(o.useState)({miniPcxPoolAmount:(null===e||void 0===e?void 0:e.miniPcxPoolAmount)||0,sbtcPcxPoolAmount:(null===e||void 0===e?void 0:e.sbtcPcxPoolAmount)||0,pcxSoPoolAmount:(null===e||void 0===e?void 0:e.pcxSoPoolAmount)||0}),[d,u]=Object(o.useState)([]),m=Object(o.useCallback)(async(e,t)=>{try{const n=await e.get_pool_index();c(e=>({...e,[t]:n.toNumber()}))}catch(n){console.error(n)}},[]);return Object(o.useEffect)(()=>{m(r,"miniPcxPoolAmount"),m(i,"sbtcPcxPoolAmount"),m(l,"pcxSoPoolAmount")},[]),Object(o.useEffect)(()=>{const e=new Array(s.miniPcxPoolAmount),t=new Array(s.sbtcPcxPoolAmount),n=new Array(s.pcxSoPoolAmount);for(let a=0;a<s.miniPcxPoolAmount;a++)e[a]={poolId:a,contract:r,type:"mini-pcx",contractAddress:"0x5a8f56FF3dfbF579CaFd673f26C282fd911cb926",earnedToken:{logoURI:oo.a,symbol:"MINI",decimals:8,address:"0x91AAC463B5473BDe2Fdd910f09101ed687BCB97A"},stakeToken:{logoURI:po.a,symbol:"PCX",decimals:8,address:"0xa10AF02fD7eD3B5FF107B57bB1068a3f54BcAE92"}};for(let a=0;a<s.sbtcPcxPoolAmount;a++)t[a]={poolId:a,contract:i,type:"sbtc-pcx",contractAddress:"0x20dc6f916539d537108B5F9D634DCb3e6181BE08",earnedToken:{logoURI:iy.a,symbol:"sBTC",decimals:8,address:"0xc91a8e500E814990b06BDb4fC10745124fdBE748"},stakeToken:{logoURI:po.a,symbol:"PCX",decimals:8,address:"0xa10AF02fD7eD3B5FF107B57bB1068a3f54BcAE92"}};for(let a=0;a<s.pcxSoPoolAmount;a++)n[a]={poolId:a,contract:l,type:"pcx-so",contractAddress:"0x196c7490d76D4d4324e5a35d5B98A995De5FDf82",earnedToken:{logoURI:po.a,symbol:"PCX",decimals:8,address:"0xa10AF02fD7eD3B5FF107B57bB1068a3f54BcAE92"},stakeToken:{logoURI:sy.a,symbol:"SO",decimals:18,address:"0xF373b95a00662ed1211948F414b252E56c0fa0C4"}};u([...n.reverse(),...e.reverse(),...t.reverse()])},[s.miniPcxPoolAmount,s.sbtcPcxPoolAmount,s.pcxSoPoolAmount,t,n,a]),Object(o.useEffect)(()=>{window.localStorage.setItem("pools_amount",JSON.stringify(s))},[JSON.stringify(s)]),{poolAmount:s,poolArr:d}};var dy=n(90),uy=n.n(dy);var my=e=>{let{earnedValue:t,earnedTokenSymbol:n,stakeTokenSymbol:a,margin:o}=e;return r.a.createElement(_g,{margin:o,title:t?`Earn ${t} ${n}`:void 0,value:a})};const py=ue.default.div`
  background: ${e=>{let{backgroundColor:t}=e;return t||"#b5adff"}};
  padding: ${e=>{let{padding:t}=e;return t||"4px 8px"}};
  border-radius: ${e=>{let{borderRadius:t}=e;return t||"10px"}};
  white-space: nowrap;
`;var fy=e=>{let{value:t,padding:n,borderRadius:a,backgroundColor:o}=e;return r.a.createElement(py,{padding:n,borderRadius:a,backgroundColor:o},r.a.createElement(na.a,{display:"flex",alignItems:"center",fontSize:16,fontWeight:500,color:"#FFFFFF",lineHeight:"20px"},t))},by=n(687),gy=n(482),yy=n.n(gy);const hy=e=>e.toString().length<2?"0"+e:e;var vy=e=>{let{restDay:t,restTime:n}=e;return r.a.createElement(by.a,{date:Date.now()+n,renderer:e=>{let{hours:n,minutes:a,seconds:o,completed:i}=e;return i?r.a.createElement(Jg,{title:"End time",value:"Ended"}):r.a.createElement(Jg,{title:"End time",value:r.a.createElement(fy,{value:r.a.createElement(r.a.Fragment,null,r.a.createElement(Go,{iconSrc:yy.a,width:17,height:17}),`${t} Days ${hy(n)}:${hy(a)}:${hy(o)}`)})})}})},xy=n(398),Ey=n.n(xy);var wy=r.a.memo(e=>{let{isOpen:t,contract:n,contractAddress:a,poolId:i,earnedTokenSymbol:l,earnedAmount:s,earnedTokenDecimals:c,stakeTokenSymbol:d,stakeTokenIcon:u,stakeTokenDecimals:m,stakeTokenAddress:p,harvestTime:f,stakeCurrencyBalance:b,isEnable:g,isPending:y,approveCallback:h,isClaimAvailable:v,isStakeAvailable:x,stakeTokenAmount:E}=e;const[w,A]=Object(o.useState)(!1),[k,C]=Object(o.useState)("0"),S=Object(o.useCallback)(()=>A(!1),[]),O=Rg(n,xg(s,c),"unstake_all",[i],l),I=Rg(n,k,"increase_stake",[i,new br.a(k).times(Math.pow(10,m)).toFixed()],d,S),T=Object(o.useCallback)(()=>{g?h():A(!0)},[g,h]),j=Object(o.useMemo)(()=>[{title:l+" EARNED",value:xg(s,c),button:r.a.createElement(er,{borderRadius:"16px",padding:"14px 24px",maxWidth:"110px",onClick:O,disabled:s<=0||!v,className:"claim-confirm enable"},r.a.createElement(na.a,{lineHeight:"20px",fontSize:16,fontWeight:500},"Harvest"))},{title:"Enable Pool",button:r.a.createElement(er,{borderRadius:"16px",padding:"14px",disabled:!x,onClick:T,className:"token-confirm enable"},r.a.createElement(na.a,{lineHeight:"20px",fontSize:16,fontWeight:500},y?r.a.createElement(ma,{src:Dg.a}):g?"Enable":"Stake"))}],[T,O,s,c,l,v,g,y,x]);return r.a.createElement(gg,{isOpen:t},r.a.createElement("div",{className:"earn-item-details"},r.a.createElement(Pg,{isOpen:w,onClose:S,poolId:i,symbol:d,balance:b,currencyLogoA:u,amount:k,setAmount:C,onClick:I,decimals:m,linkTarget:"/swap?to="+p}),r.a.createElement(yn,null,r.a.createElement(vn,null,j.map(e=>r.a.createElement(Lg,{key:e.title,title:e.title,value:e.value,button:e.button})))),r.a.createElement(Xg,{leftInfoTitle:"My Stake",leftInfoValue:`${vg(E,m,4)} ${d}`,rightInfoTitle:"Harvest Time",rightInfoValue:f,viewContractLink:"https://evm.sherpax.io/address/"+a,isOpen:t})))});const Ay=(e,t)=>{const n=vg(e,t,0),a=/\.0+$|(\.[0-9]*[1-9])0+$/;return Number(n)>=1e3?(Number(n)/1e3).toFixed(0).replace(a,"$1")+"k":n},ky=e=>{if(!e.toString().includes("."))return e.toFixed(2);const t=[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"}];let n;for(n=t.length-1;n>0&&!(e>=t[n].value);n--);return(e/t[n].value).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t[n].symbol};uy.a.extend(Ey.a);var Cy=e=>{let{contract:t,poolId:n,contractAddress:i,earnedTokenIcon:l,earnedTokenSymbol:s,earnedTokenDecimals:c,stakeTokenIcon:d,stakeTokenSymbol:m,stakeTokenAddress:p,stakeTokenDecimals:f,settingOption:b,updateObserver:g}=e;const{isUserBlocked:y}=_i(),h=jg(),{account:v,chainId:x}=Object(a.d)(),[E,w]=Object(o.useState)(!1),A=`pool-${s}-${m}-${n}`,{poolItemInfo:{totalPoolStaked:k,totalEarnedAmount:C,earnedBalanceAmount:S,stakeStartTimestamp:O,stakeEndTimestamp:I,harvestTimestamp:T,poolSharePercent:j,ownStakingBalance:N}}=((e,t,n)=>{const a=JSON.parse(window.localStorage.getItem(n)||"{}"),r=jg(),[i,l]=Object(o.useState)({totalPoolStaked:a.totalPoolStaked||"0",totalEarnedAmount:a.totalEarnedAmount||"0",ownStakingBalance:a.ownStakingBalance||"0",earnedBalanceAmount:a.earnedBalanceAmount||0,stakeStartTimestamp:a.stakeStartTimestamp||0,stakeEndTimestamp:a.stakeEndTimestamp||0,harvestTimestamp:a.harvestTimestamp||0,poolSharePercent:a.poolSharePercent||"0%"}),s=Fe(),c=Object(o.useCallback)(async(e,t)=>{const n=await e.index_pool(t);r.current&&l(e=>({...e,totalPoolStaked:n.total_balance.toString(),totalEarnedAmount:n.total_mini.toString()}))},[r]),d=Object(o.useCallback)(async(e,t)=>{const n=await e.get_share(t),[a,o]=n;r.current&&l(e=>({...e,ownStakingBalance:a.toString(),earnedBalanceAmount:o.toNumber()}))},[r]),u=Object(o.useCallback)(async(e,t)=>{const n=await e.get_pool_timestamp(t),[a,o,i]=n;r.current&&l(e=>({...e,stakeStartTimestamp:a.toNumber(),stakeEndTimestamp:o.toNumber(),harvestTimestamp:i.toNumber()}))},[r]);Object(o.useEffect)(()=>{let e="0%";Number(i.ownStakingBalance)&&Number(i.totalPoolStaked)>0&&(e=new br.a(i.ownStakingBalance).dividedBy(new br.a(i.totalPoolStaked)).times(Math.pow(10,2)).toFixed(4)+"%"),r.current&&l(t=>({...t,poolSharePercent:e}))},[r,i.ownStakingBalance,i.totalPoolStaked]);const m=Object(o.useCallback)(async()=>{c(e,t),d(e,t),u(e,t)},[e,t,d,c,u]);return Object(o.useEffect)(()=>{m()},[t,e,s.length]),Object(o.useEffect)(()=>{window.localStorage.setItem(n,JSON.stringify(i))},[JSON.stringify(i)]),{poolItemInfo:i}})(t,n,A),{isEnable:R,approveCallback:B,isPending:U}=hg(p,i),P=new u.Token(x,p,f,m,"SherpaX"),F=Cc(null!==v&&void 0!==v?v:void 0,null!==P&&void 0!==P?P:void 0),M=Object(o.useMemo)(()=>uy.a.unix(I).diff(uy()(),"day"),[I]),D=Object(o.useMemo)(()=>864e5*(uy.a.unix(I).diff(uy()(),"day",!0)-M),[M,I]),L=Object(o.useMemo)(()=>uy()().unix()>T,[T]),z=Object(o.useMemo)(()=>{const e=uy()().unix();return e>O&&e<I},[O,I]),X=Object(o.useMemo)(()=>[{title:"Pool Share",value:j},{title:"Total staked",value:`${vg(k,f,4)} ${m}`},{title:s+" Earned",value:vg(S,c,4)}],[j,k,f,m,s,S,c]),W=r.a.createElement(fg,null,r.a.createElement("div",{className:"earn-item "+(E?"details-open":"details-close"),onClick:()=>!y&&w(!E)},r.a.createElement(bg,{marginRight:"40px",width:"171px"},r.a.createElement(vn,null,r.a.createElement(qg,{stakeCurrencyIcon:d,TargetCurrencyIcon:l}),r.a.createElement(my,{margin:"0 0 0 12px",earnedValue:Ay(C,c),earnedTokenSymbol:s,stakeTokenSymbol:"Stake "+m})),X.map(e=>r.a.createElement(Jg,{key:e.title,title:e.title,value:e.value})),r.a.createElement(vy,{restDay:M,restTime:D}),r.a.createElement($g,{isUp:E}))),r.a.createElement(wy,{isOpen:E,poolId:n,contract:t,contractAddress:i,earnedAmount:S,earnedTokenDecimals:c,earnedTokenSymbol:s,stakeTokenSymbol:m,stakeTokenIcon:d,stakeTokenDecimals:f,stakeTokenAddress:p,stakeTime:`${uy.a.unix(O).format("MMM D,YYYY HH:mm")} ~ ${uy.a.unix(I).format("MMM D,YYYY HH:mm")}`,harvestTime:uy.a.unix(T).format("MMM D,YYYY HH:mm"),stakeCurrencyBalance:null===F||void 0===F?void 0:F.toFixed(),isEnable:R,isPending:U,approveCallback:B,isClaimAvailable:L,isStakeAvailable:z,stakeTokenAmount:N})),H=Object(o.useCallback)(e=>{h.current&&g(t=>({...t,[`${i}-${n}`]:{show:e}}))},[h,i,n,g]);return Object(o.useEffect)(()=>{b.stakedOnly?Number(N)>0?"Live"===b.status?H(D>0):H(D<=0):H(!1):"Live"===b.status?H(D>0):H(D<=0)},[H,N,D,b.stakedOnly,b.status]),Object(o.useMemo)(()=>b.stakedOnly?Number(N)>0?"Live"===b.status?D>0?W:null:D<=0?W:null:null:"Live"===b.status?D>0?W:null:D<=0?W:null,[W,N,D,b.stakedOnly,b.status])};var Sy=e=>{let{settingOption:t}=e;const{chainId:n}=be(),{poolArr:a}=cy(),{isEmpty:o,updateObserver:i}=ny(Object.fromEntries(a.map(e=>[`${e.contractAddress}-${e.poolId}`,{show:!0}])));return r.a.createElement(r.a.Fragment,null,1506===n?a.length>0&&a.map(e=>r.a.createElement(Cy,{key:`${e.type}-${e.poolId}`,contract:e.contract,poolId:e.poolId,contractAddress:e.contractAddress,earnedTokenIcon:e.earnedToken.logoURI,earnedTokenDecimals:e.earnedToken.decimals,earnedTokenSymbol:e.earnedToken.symbol,earnedTokenAddress:e.earnedToken.address,stakeTokenIcon:e.stakeToken.logoURI,stakeTokenDecimals:e.stakeToken.decimals,stakeTokenSymbol:e.stakeToken.symbol,stakeTokenAddress:e.stakeToken.address,settingOption:t,updateObserver:i})):r.a.createElement(lf,null),o&&r.a.createElement(ty,null))},Oy=(n(1058),n(704));const Iy=Object(ue.default)(Oy.a)`
  &.ant-switch-checked {
    background: #48e8cc;
  }
`;var Ty=e=>{let{...t}=e;return r.a.createElement(Iy,t)},jy=(n(589),n(285));const Ny=Object(ue.default)(jy.a)`
  .ant-radio-checked {
    .ant-radio-inner {
      border: 1px solid #48e8cc;
    }
  }
  .ant-radio-inner {
    border: 1px solid #d7f0ea;
    &:hover,
    &:focus,
    &:active {
      border: 1px solid #48e8cc;
    }
    &::after {
      background: #48e8cc;
    }
  }
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border: 1px solid #48e8cc;
  }
  &.ant-radio-wrapper:first-child {
    margin-right: 24px;
  }
`;var Ry=e=>{let{defaultValue:t,options:n,...a}=e;return r.a.createElement(Ny.Group,Object.assign({value:t},a),n.map(e=>r.a.createElement(Ny,{key:e,value:e},r.a.createElement(na.a,{fontSize:14,color:"#3B199F",lineHeight:"17px"},e))))};var By=e=>{let{settingOption:t,setSettingOption:n}=e;const a=Object(o.useCallback)(e=>{n({...t,stakedOnly:e})},[n,t]),i=Object(o.useCallback)(e=>{n({...t,status:e.target.value})},[n,t]);return r.a.createElement(xn,{maxWidth:"315px",alignItems:"center",justifyContent:""+(t.status?"space-between":"flex-end")},r.a.createElement(vn,null,r.a.createElement(Ty,{defaultChecked:t.stakedOnly,onChange:a}),r.a.createElement(na.a,{fontSize:14,color:"#3B199F",lineHeight:"17px",marginLeft:"8px"},"Staked only")),t.status&&r.a.createElement(Ry,{onChange:i,options:["Live","Finished"],defaultValue:t.status}))};var Uy=e=>{let{}=e;const{route:t}=fp("earn",["Farms","Pools"]),[n,a]=Object(o.useState)({stakedOnly:!1,status:""}),[i,l]=Object(o.useState)({stakedOnly:!1,status:"Live"});return r.a.createElement(vd,{style:yg},r.a.createElement(yn,null,r.a.createElement(cc,{padding:"12px 0",active:"pools"!==t?"Farms":"Pools",width:109}),"pools"!==t&&r.a.createElement(By,{settingOption:n,setSettingOption:a}),"pools"===t&&r.a.createElement(By,{settingOption:i,setSettingOption:l})),"pools"!==t?r.a.createElement(oy,{settingOption:n}):r.a.createElement(Sy,{settingOption:i}))},Py=n(688),Fy=n.n(Py);const My=(e,t)=>{const{notation:n="compact",displayThreshold:a,tokenPrecision:o,isInteger:r}=t||{notation:"compact"};if(0===e)return r?"0":"0.00";if(!e)return"-";if(a&&e<a)return"<"+a;if(e<1&&!o)return e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];let i=2;o&&(i=e<1?3:2);let l=`0.${"0".repeat(i)}a`;"standard"===n&&(l="0,0."+"0".repeat(i)),r&&e<1e3&&(l="0");const s=parseFloat(e.toFixed(i));return Fy()(s).format(l).toUpperCase()};var Dy=n(1217),Ly=n(1218),zy=n(403),Xy=n(404),Wy=n(338),Hy=n(699);const qy=e=>{let{locale:t,payload:n,setHoverValue:a,setHoverDate:r}=e;return Object(o.useEffect)(()=>{a(n.value),r(n.time)},[t,n.value,n.time,a,r]),null};var Vy=e=>{let{data:t,setHoverValue:n,setHoverDate:a}=e;return r.a.createElement(Dy.a,null,r.a.createElement(Ly.a,{data:t,width:300,height:100,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:()=>{a&&a(void 0),n&&n(void 0)}},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#d7caec",stopOpacity:.5}),r.a.createElement("stop",{offset:"100%",stopColor:"#7645D9",stopOpacity:0}))),r.a.createElement(zy.a,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:e=>uy()(e,{utc:!0}).format("MM/DD"),minTickGap:10}),r.a.createElement(Xy.a,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,fontSize:"12px",tickFormatter:e=>My(e),orientation:"left",tick:{fill:"#7A6EAA"}}),r.a.createElement(Wy.a,{cursor:{stroke:"#7645D9"},contentStyle:{display:"none"},formatter:(e,t,o)=>r.a.createElement(qy,{locale:"",payload:o.payload,setHoverValue:n,setHoverDate:a})}),r.a.createElement(Hy.a,{dataKey:"value",type:"monotone",stroke:"#7645D9",fill:"url(#gradient)",strokeWidth:2})))};const Ky=ue.default.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 44px;
  margin-top: -30px;
`,Yy=ue.default.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .title {
    padding: 16px 0;
    font-size: 18px;
    font-weight: 600;
    color: #281071;
    line-height: 21px;
  }
`,_y=ue.default.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 16px;
  .card {
    height: 390px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(109, 78, 201, 0.06);
    border-radius: 24px;
    padding: 24px;
  }
  .title {
    font-size: 14px;
    font-weight: 600;
    color: #6d4ec9;
    line-height: 22px;
  }
`,Jy=ue.default.div`
  color:  ${e=>{let{color:t}=e;return t||"#281071"}}
  font-size: ${e=>{let{fontSize:t}=e;return t||"14px"}};
  font-weight: ${e=>{let{bold:t}=e;return t||400}};
  line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis

`;var Qy=n(1222),$y=n(705);const Gy=e=>{let{x:t,y:n,width:a,height:o,fill:i}=e;return r.a.createElement("g",null,r.a.createElement("rect",{x:t,y:n,fill:i,width:a,height:o,rx:"2"}))},Zy=e=>{let{locale:t,payload:n,setHoverValue:a,setHoverDate:r}=e;return Object(o.useEffect)(()=>{a(n.value),r(n.time)},[t,n.value,n.time,a,r]),null};var eh,th,nh=e=>{let{data:t,setHoverValue:n,setHoverDate:a}=e;return r.a.createElement(Dy.a,{width:"100%",height:"100%"},r.a.createElement(Qy.a,{data:t,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:()=>{a(void 0),n(void 0)}},r.a.createElement(zy.a,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:e=>uy()(e,{utc:!0}).format("MM/DD"),minTickGap:10}),r.a.createElement(Xy.a,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,color:"#7A6EAA",fontSize:"12px",tickFormatter:e=>"$"+My(e),orientation:"left",tick:{fill:"#7A6EAA"}}),r.a.createElement(Wy.a,{cursor:{fill:"#E9EAEB"},contentStyle:{display:"none"},formatter:(e,t,o)=>r.a.createElement(Zy,{locale:"",payload:o.payload,setHoverValue:n,setHoverDate:a})}),r.a.createElement($y.a,{dataKey:"value",fill:"#1FC7D4",shape:e=>r.a.createElement(Gy,{height:e.height,width:e.width,x:e.x,y:e.y,fill:"#1FC7D4"})})))};function ah(){return(ah=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const oh=e=>{let{svgRef:t,title:n,...a}=e;return r.a.createElement("svg",ah({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:t},a),void 0===n?eh||(eh=r.a.createElement("title",null,"icon_back")):n?r.a.createElement("title",null,n):null,th||(th=r.a.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"info_Overview",transform:"translate(-563.000000, -1966.000000)"},r.a.createElement("g",{id:"\\u7F16\\u7EC4-15",transform:"translate(45.000000, 1359.000000)"},r.a.createElement("g",{id:"\\u7F16\\u7EC4-13",transform:"translate(0.000000, 12.000000)"},r.a.createElement("g",{id:"icon_back",transform:"translate(518.000000, 595.000000)"},r.a.createElement("path",{d:"M5.33333333,0 L10.6666667,0 C13.6121853,-5.41083001e-16 16,2.38781467 16,5.33333333 L16,10.6666667 C16,13.6121853 13.6121853,16 10.6666667,16 L5.33333333,16 C2.38781467,16 3.60722001e-16,13.6121853 0,10.6666667 L0,5.33333333 C-3.60722001e-16,2.38781467 2.38781467,5.41083001e-16 5.33333333,0 Z",id:"\\u77E9\\u5F62",opacity:0}),r.a.createElement("g",{id:"\\u7F16\\u7EC4-11",transform:"translate(0.117554, 0.170796)",fill:"#38DCBF"},r.a.createElement("path",{d:"M1.63412298,6.72925985 L14.4342352,6.72925985 C15.0417174,6.72925985 15.5341791,7.2217215 15.5341791,7.82920373 C15.5341791,8.43668597 15.0417174,8.92914762 14.4342352,8.92914762 L1.63412298,8.92914762 C1.02664074,8.92914762 0.534179094,8.43668597 0.534179094,7.82920373 C0.534179094,7.2217215 1.02664074,6.72925985 1.63412298,6.72925985 Z",id:"\\u77E9\\u5F62",transform:"translate(8.034179, 7.829204) rotate(-360.000000) translate(-8.034179, -7.829204) "}),r.a.createElement("path",{d:"M0.266808956,3.56692119 L9.06692119,3.56692119 C9.67440342,3.56692119 10.1668651,4.05938284 10.1668651,4.66686507 C10.1668651,5.27434731 9.67440342,5.76680896 9.06692119,5.76680896 L0.266808956,5.76680896 C-0.340673275,5.76680896 -0.833134926,5.27434731 -0.833134926,4.66686507 C-0.833134926,4.05938284 -0.340673275,3.56692119 0.266808956,3.56692119 Z",id:"\\u77E9\\u5F62",transform:"translate(4.666865, 4.666865) rotate(-45.000000) translate(-4.666865, -4.666865) "}),r.a.createElement("path",{d:"M0.266808956,9.89159851 L9.06692119,9.89159851 C9.67440342,9.89159851 10.1668651,10.3840602 10.1668651,10.9915424 C10.1668651,11.5990246 9.67440342,12.0914863 9.06692119,12.0914863 L0.266808956,12.0914863 C-0.340673275,12.0914863 -0.833134926,11.5990246 -0.833134926,10.9915424 C-0.833134926,10.3840602 -0.340673275,9.89159851 0.266808956,9.89159851 Z",id:"\\u77E9\\u5F62",transform:"translate(4.666865, 10.991542) scale(1, -1) rotate(-45.000000) translate(-4.666865, -10.991542) "})))))))))},rh=r.a.forwardRef((e,t)=>r.a.createElement(oh,ah({svgRef:t},e)));var ih,lh;n.p;function sh(){return(sh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const ch=e=>{let{svgRef:t,title:n,...a}=e;return r.a.createElement("svg",sh({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:t},a),void 0===n?ih||(ih=r.a.createElement("title",null,"icon_back")):n?r.a.createElement("title",null,n):null,lh||(lh=r.a.createElement("g",{id:"\\u9875\\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"info_Overview",transform:"translate(-702.000000, -1249.000000)"},r.a.createElement("g",{id:"\\u7F16\\u7EC4-7",transform:"translate(45.000000, 642.000000)"},r.a.createElement("g",{id:"icon_back",transform:"translate(665.000000, 615.000000) scale(-1, 1) translate(-665.000000, -615.000000) translate(657.000000, 607.000000)"},r.a.createElement("path",{d:"M5.33333333,0 L10.6666667,0 C13.6121853,-5.41083001e-16 16,2.38781467 16,5.33333333 L16,10.6666667 C16,13.6121853 13.6121853,16 10.6666667,16 L5.33333333,16 C2.38781467,16 3.60722001e-16,13.6121853 0,10.6666667 L0,5.33333333 C-3.60722001e-16,2.38781467 2.38781467,5.41083001e-16 5.33333333,0 Z",id:"\\u77E9\\u5F62",opacity:0}),r.a.createElement("g",{id:"\\u7F16\\u7EC4-11",transform:"translate(0.117554, 0.170796)",fill:"#38DCBF"},r.a.createElement("path",{d:"M1.63412298,6.72925985 L14.4342352,6.72925985 C15.0417174,6.72925985 15.5341791,7.2217215 15.5341791,7.82920373 C15.5341791,8.43668597 15.0417174,8.92914762 14.4342352,8.92914762 L1.63412298,8.92914762 C1.02664074,8.92914762 0.534179094,8.43668597 0.534179094,7.82920373 C0.534179094,7.2217215 1.02664074,6.72925985 1.63412298,6.72925985 Z",id:"\\u77E9\\u5F62",transform:"translate(8.034179, 7.829204) rotate(-360.000000) translate(-8.034179, -7.829204) "}),r.a.createElement("path",{d:"M0.266808956,3.56692119 L9.06692119,3.56692119 C9.67440342,3.56692119 10.1668651,4.05938284 10.1668651,4.66686507 C10.1668651,5.27434731 9.67440342,5.76680896 9.06692119,5.76680896 L0.266808956,5.76680896 C-0.340673275,5.76680896 -0.833134926,5.27434731 -0.833134926,4.66686507 C-0.833134926,4.05938284 -0.340673275,3.56692119 0.266808956,3.56692119 Z",id:"\\u77E9\\u5F62",transform:"translate(4.666865, 4.666865) rotate(-45.000000) translate(-4.666865, -4.666865) "}),r.a.createElement("path",{d:"M0.266808956,9.89159851 L9.06692119,9.89159851 C9.67440342,9.89159851 10.1668651,10.3840602 10.1668651,10.9915424 C10.1668651,11.5990246 9.67440342,12.0914863 9.06692119,12.0914863 L0.266808956,12.0914863 C-0.340673275,12.0914863 -0.833134926,11.5990246 -0.833134926,10.9915424 C-0.833134926,10.3840602 -0.340673275,9.89159851 0.266808956,9.89159851 Z",id:"\\u77E9\\u5F62",transform:"translate(4.666865, 10.991542) scale(1, -1) rotate(-45.000000) translate(-4.666865, -10.991542) "}))))))))},dh=r.a.forwardRef((e,t)=>r.a.createElement(ch,sh({svgRef:t},e)));n.p;const uh=Object(ue.default)(of.a)`
  .ant-table {
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    background: #ffffff;

    &.ant-table-empty {
      border-radius: 24px;
    }
  }
  .ant-spin-container {
    background: white;
    box-shadow: 0 2px 4px 0 rgba(109, 78, 201, 0.06);
    border-radius: 24px;
    &::after {
      border-radius: 24px;
    }
  }
  .ant-table-thead {
    .ant-table-cell {
      font-size: 14px;
      font-weight: 600;
      color: #6d4ec9;
      line-height: 22px;
      background: white;
      border-bottom: none;

      &.transaction-name {
        padding-left: 35px;
      }
      &:first-child {
        border-top-left-radius: 24px;
      }
      &:last-child {
        border-top-right-radius: 24px;
      }
      &::before {
        display: none;
      }
      .ant-table-column-sorters {
        width: fit-content;
      }
      .ant-table-column-sorter {
        display: flex;
        align-items: center;

        .ant-table-column-sorter-up,
        .ant-table-column-sorter-down {
          &.active {
            color: #38dcbf;
          }
        }
      }
    }
  }
  .ant-table-tbody {
    .ant-table-cell {
      font-size: 16px;
      font-weight: 600;
      color: #281071;
      line-height: 20px;
      border-bottom: none;
      width: 200px;

      &.token-name {
        width: 400px;
      }

      &.transaction-name {
        padding-left: 35px;
      }

      &.ant-table-column-sort {
        background: white;
      }

      &.ant-table-cell-row-hover {
        &.ant-table-column-sort {
          background: #f5f1fc;
        }
        background: #f5f1fc;
      }

      &.prefix-id {
        width: 5px;
        &-empty {
          width: 1px;
        }
      }
    }
  }

  .ant-pagination {
    padding-bottom: 22px;
    margin-top: 16px;
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    display: flex;
    align-items: center;
    justify-content: center;
    &.ant-pagination-disabled {
      svg path {
        fill: #e6e6e6;
      }
    }
  }

  .ant-pagination-simple-pager {
    font-size: 14px;
    font-weight: 600;
    color: #281071;
    line-height: 22px;
  }
`,mh=ue.default.div`
  font-size: 16px;
  font-weight: 600;
  color: #38dcbf;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,ph=ue.default.div`
  color: ${e=>{let{isRise:t}=e;return t?"#38DCBF":"#E93E5E"}};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,fh=ue.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .token-name {
    padding: 0 8px;
  }
`,bh=ue.default.div`
  font-size: 18px;
  font-weight: 600;
  color: #281071;
  line-height: 21px;
  padding: 32px 0 16px 0;
`,gh=ue.default.div`
  padding: 8px 0 16px 0;
`,yh=["ascend","descend","ascend"];var hh=r.a.memo(e=>{let{columns:t,transactionData:n,paginationClassName:a}=e;const[i,l]=Object(o.useState)(1),s=Object(o.useMemo)(()=>Math.ceil((null===n||void 0===n?void 0:n.length)/10)||0,[n]),c=document.getElementsByClassName(a);return Object(o.useLayoutEffect)(()=>{if(c.length>0)for(let e=0;e<c[0].childNodes.length;e++)"ant-pagination-simple-pager"===c[0].childNodes[e].className&&(c[0].childNodes[e].innerText=`Page ${i} of ${s}`)},[i,s,c]),r.a.createElement(uh,{loading:!n,columns:t,dataSource:n,pagination:{position:["bottomCenter"],itemRender:(e,t,n)=>"prev"===t?r.a.createElement(rh,null):"next"===t?r.a.createElement(dh,null):n,current:i,simple:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,total:null===n||void 0===n?void 0:n.length,onChange:e=>{l(e)},className:a}})}),vh=n(486),xh=n.n(vh),Eh=n(485),wh=n.n(Eh);var Ah=r.a.memo(e=>{let{priceChangePercent:t}=e;return r.a.createElement(ph,{isRise:t>=0},0!==t&&r.a.createElement(Go,{iconSrc:t>0?xh.a:wh.a,width:16,height:16}),ky(t),"%")}),kh=n(336),Ch=n.n(kh),Sh=n(337);uy.a.extend(Ey.a);const Oh="https://multiscan-api.coming.chat/sherpaxevm/info",Ih=e=>"$ "+ky(e),Th=(e,t,n)=>{const{data:a,error:o}=Object(Sh.a)(`${Oh}/daily/${e}?startTimestamp=${t}&endTimestamp=${n}`,async e=>{const{data:t}=await Ch.a.get(e);return null===t||void 0===t?void 0:t.data.map((e,t)=>{const{time:n,value:a}=e;return{time:1e3*n,value:a}})});return{data:a,error:o}};var jh=n(491),Nh=n.n(jh);var Rh=r.a.memo(e=>{var t;let{name:n,subName:a}=e;const i=Object(d.c)(e=>e.lists.byUrl),[l,s]=Object(o.useState)([]);return Object(o.useEffect)(()=>{var e;const t=n.includes("Token")?a.slice(1).slice(0,-1):n,o=null===(e=i[Jp].current)||void 0===e?void 0:e.tokens,r=t.indexOf("/"),l=r>0?[t.slice(0,r),t.slice(r+1)]:[t];for(let n=0;n<l.length;n++)s("WKSX"===l[n]?e=>e.concat(eo.a):e=>{var t,a;return e.concat(null!==(t=null===(a=o.find(e=>e.symbol===l[n]))||void 0===a?void 0:a.logoURI)&&void 0!==t?t:Nh.a)})},[null===(t=i[Jp].current)||void 0===t?void 0:t.tokens,n,a]),r.a.createElement(fh,null,l.map(e=>r.a.createElement(Go,{iconSrc:e,key:e,width:24,height:24})),r.a.createElement("span",{className:"token-name"},n),a)});const Bh=[{title:"#",dataIndex:"#",key:"#",align:"center",className:"prefix-id",render:(e,t,n)=>""+(n+1)},{title:"NAME",dataIndex:"name",key:"name",className:"token-name"},{title:"PRICE",dataIndex:"price",key:"price",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>e.priceNum-t.priceNum},{title:"PRICE CHANGE",dataIndex:"priceChange",key:"priceChange",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>e.priceChangePercent-t.priceChangePercent},{title:"VOLUME 24H",dataIndex:"volumeDaily",key:"volumeDaily",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>e.dailyVolumeUsdNum-t.dailyVolumeUsdNum},{title:"TVL",dataIndex:"tvl",key:"tvl",align:"left",sortDirections:yh,defaultSortOrder:"descend",showSorterTooltip:!1,sorter:(e,t)=>e.tvlNum-t.tvlNum}];var Uh=r.a.memo(()=>{const{data:e}=(()=>{const{data:e,error:t}=Object(Sh.a)(Oh+"/tokens",async e=>{const{data:t}=await Ch.a.get(e);return t.tokenList.map((e,t)=>{const{address:n,name:a,symbol:o,priceChangePercent:r,priceUsd:i,dailyVolumeUsd:l,liquidityUsd:s}=e;return{id:t+1,blockLink:"https://evm.sherpax.io/address/"+n,name:""+a,symbol:o,price:Ih(i),priceChangePercent:r,dailyVolumeUsd:Ih(l),liquidityUsd:Ih(s),priceNum:i,dailyVolumeUsdNum:l,tvlNum:s}})});return{data:e,error:t}})(),t=Object(o.useMemo)(()=>null===e||void 0===e?void 0:e.map((e,t)=>({key:Math.random(),name:r.a.createElement(Rh,{name:e.name+" Token",subName:`(${e.symbol})`}),price:e.price,priceChange:r.a.createElement(Ah,{priceChangePercent:e.priceChangePercent}),volumeDaily:e.dailyVolumeUsd,tvl:e.liquidityUsd,tvlNum:e.tvlNum,priceNum:e.priceNum,dailyVolumeUsdNum:e.dailyVolumeUsdNum,priceChangePercent:e.priceChangePercent})),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(bh,null,"Top Tokens"),r.a.createElement(hh,{columns:Bh,transactionData:t,paginationClassName:"pagination-top-tokens"}))});const Ph=[{title:"#",dataIndex:"#",key:"#",align:"center",className:"prefix-id",render:(e,t,n)=>""+(n+1)},{title:"POOL",dataIndex:"pool",key:"pool",align:"left"},{title:"TVL",dataIndex:"tvl",key:"tvl",align:"left",sortDirections:yh,defaultSortOrder:"descend",showSorterTooltip:!1,sorter:(e,t)=>e.tvlNum-t.tvlNum},{title:"VOLUME 24H",dataIndex:"volumeDaily",key:"volumeDaily",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>(console.log(e.volumeDailyNum),e.volumeDailyNum-t.volumeDailyNum)},{title:"VOLUME 7D",dataIndex:"volumeSevenDay",key:"volumeSevenDay",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>e.volumeSevenDayNum-t.volumeSevenDayNum}];var Fh=r.a.memo(()=>{const{data:e}=(()=>{const{data:e,error:t}=Object(Sh.a)(Oh+"/pairs",async e=>{const{data:t}=await Ch.a.get(e);return t.pairList.map((e,t)=>{const{token0Symbol:n,token1Symbol:a,feePercent:o,liquidityUsd:r,dailyVolumeUsd:i,sevenDayVolumeUsd:l}=e;return{id:t+1,poolName:`${n}/${a}`,feePercent:o.toFixed(2),liquidityUsd:Ih(r),dailyVolumeUsd:Ih(i),sevenDayVolumeUsd:Ih(l),liquidityUsdNum:r,dailyVolumeUsdNum:i,sevenDayVolumeUsdNum:l}})});return{data:e,error:t}})(),t=Object(o.useMemo)(()=>null===e||void 0===e?void 0:e.map(e=>({key:`${e.poolName}-${e.id}`,pool:r.a.createElement(Rh,{name:e.poolName,subName:null}),tvl:e.liquidityUsd,volumeDaily:e.dailyVolumeUsd,volumeSevenDay:e.sevenDayVolumeUsd,tvlNum:e.liquidityUsdNum,volumeDailyNum:e.dailyVolumeUsdNum,volumeSevenDayNum:e.sevenDayVolumeUsdNum})),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(bh,null,"Top Pools"),r.a.createElement(hh,{columns:Ph,transactionData:t,paginationClassName:"pagination-top-pools"}))});var Mh=r.a.memo(e=>{let{text:t,link:n}=e;const a=Object(o.useCallback)(()=>{window.open(n)},[n]);return r.a.createElement(mh,{onClick:a},t)});const Dh=[{title:"Action",dataIndex:"action",key:"action",className:"transaction-name"},{title:"TOTAL VALUE",dataIndex:"totalValue",key:"totalValue",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>e.totalValueNum-t.totalValueNum},{title:"TOKEN AMOUNT",dataIndex:"token0Amount",key:"token0Amount",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>e.token0AmountNum-t.token0AmountNum},{title:"TOKEN AMOUNT",dataIndex:"token1Amount",key:"token1Amount",align:"left",sortDirections:yh,showSorterTooltip:!1,sorter:(e,t)=>e.token1AmountNum-t.token1AmountNum},{title:"Account",dataIndex:"account",key:"account",align:"left"},{title:"Time",dataIndex:"time",key:"time",align:"left",sortDirections:yh,defaultSortOrder:"descend",showSorterTooltip:!1,sorter:(e,t)=>e.timeStamp-t.timeStamp}],Lh={SWAPS:"swap",ADDS:"add",REMOVES:"remove"};var zh=r.a.memo(()=>{const{data:e}=(()=>{const{data:e,error:t}=Object(Sh.a)(Oh+"/latestPairTx",async e=>{const{data:t}=await Ch.a.get(e);return t.txList.map((e,t)=>{const{actionType:n,actionName:a,totalValueUsd:o,token0Amount:r,token0Symbol:i,token1Amount:l,token1Symbol:s,account:c,txHash:d,blockTime:u}=e;return{id:t+1,actionType:n,actionName:a+"\u2197",txBlockLink:"https://evm.sherpax.io/tx/"+d,totalValue:Ih(o),token0Amount:`${Ih(r)} ${i}`,token1Amount:`${Ih(l)} ${s}`,account:c+"\u2197",accountBlockLink:"https://evm.sherpax.io/address/"+c,time:uy.a.unix(u).fromNow(),totalValueNum:o,token0AmountNum:r,token1AmountNum:l,timeStamp:u}})});return{data:e,error:t}})(),[t,n]=Object(o.useState)([]),[a,i]=Object(o.useState)("ALL"),l=Object(o.useMemo)(()=>null===e||void 0===e?void 0:e.map(e=>({key:e.id,actionType:e.actionType,action:r.a.createElement(Mh,{text:e.actionName,link:e.txBlockLink}),totalValue:e.totalValue,token0Amount:e.token0Amount,token1Amount:e.token1Amount,account:r.a.createElement(Mh,{text:Qa(e.account),link:e.accountBlockLink}),time:e.time,totalValueNum:e.totalValueNum,token0AmountNum:e.token0AmountNum,token1AmountNum:e.token1AmountNum,timeStamp:e.timeStamp})),[e]);return Object(o.useEffect)(()=>{n(null===l||void 0===l?void 0:l.filter(e=>"ALL"===a?e:e.actionType===Lh[a]))},[l,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(bh,null,"Transactions"),r.a.createElement(gh,null,r.a.createElement(Ry,{onChange:e=>i(e.target.value),options:["ALL","SWAPS","ADDS","REMOVES"],defaultValue:a})),r.a.createElement(hh,{columns:Dh,transactionData:t,paginationClassName:"pagination-transactions"}))});var Xh=()=>{const[e,t]=Object(o.useState)(),[n,a]=Object(o.useState)(),i=Number(new Date((new Date).setHours(0,0,0,0))),[l,s]=Object(o.useState)(),[c,d]=Object(o.useState)(),u=Th("liquidity",1645977600,i),m=Th("volume",1645977600,i);return Object(o.useEffect)(()=>{if(null==l&&m){var e;const t=null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.slice(-1)[0];s(null===t||void 0===t?void 0:t.value)}},[m,l]),Object(o.useEffect)(()=>{if(null==e&&u){var n;const e=null===u||void 0===u||null===(n=u.data)||void 0===n?void 0:n.slice(-1)[0];t(null===e||void 0===e?void 0:e.value)}},[e,u]),r.a.createElement(Ky,null,r.a.createElement(Yy,null,r.a.createElement("div",{className:"title"},"Soswap Overview")),r.a.createElement(_y,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"title"},"TVL"),e>0?r.a.createElement(Jy,{bold:600,fontSize:"24px"},"$",My(e)):r.a.createElement(rf.a.Input,{active:!0,size:"small"}),r.a.createElement(Jy,null,uy()(n||i,{utc:!0}).format("MM/DD")),r.a.createElement("div",{style:{height:"280px"}},r.a.createElement(Vy,{data:null===u||void 0===u?void 0:u.data,setHoverValue:t,setHoverDate:a}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"title"},"Volume 24H"),l>0?r.a.createElement(Jy,{bold:600,fontSize:"24px"},"$",My(l)):r.a.createElement(rf.a.Input,{active:!0,size:"small"}),r.a.createElement(Jy,null,uy()(null!==c&&void 0!==c?c:i).format("MM/DD")),r.a.createElement("div",{style:{height:"280px"}},r.a.createElement(nh,{data:null===m||void 0===m?void 0:m.data,setHoverValue:s,setHoverDate:d})))),r.a.createElement(Uh,null),r.a.createElement(Fh,null),r.a.createElement(zh,null))};const Wh=ue.default.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`,Hh=(ue.default.div`
  ${e=>{let{theme:t}=e;return t.flexRowNoWrap}}
  width: 100%;
  justify-content: space-between;
`,ue.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 58px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  ${e=>{let{theme:t}=e;return t.mediaWidth.upToExtraSmall`
      padding: 16px;
  `}};

  z-index: 1;
`),qh=ue.default.div`
  margin-top: 5rem;
`;function Vh(){Object(o.useEffect)(()=>{window.localStorage.removeItem("redux_localstorage_simple_lists")},[]);const{isShowPop:e,messageContent:t,txResult:n,type:a,hash:i}=Object(o.useContext)(Ko);return r.a.createElement(o.Suspense,{fallback:null},r.a.createElement(ce.a,null,r.a.createElement(de.b,{component:me}),r.a.createElement(de.b,{component:Nl}),r.a.createElement(Sl,null),e&&r.a.createElement(Ff,{type:a,hash:i,operatorResult:n,messages:t}),r.a.createElement(Tl,null,r.a.createElement(Wh,null,r.a.createElement(nl,null),r.a.createElement(Hh,null,r.a.createElement(de.d,null,r.a.createElement(de.b,{path:"/asset",component:gf}),r.a.createElement(de.b,{path:"/earn",component:Uy}),r.a.createElement(de.b,{path:"/swap",component:mg}),r.a.createElement(de.b,{path:"/info",component:Xh}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/bridge",component:jf}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/swap/:outputCurrency",component:pp}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/send",component:mp}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/find",component:Hm}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/create",component:mm}),r.a.createElement(de.b,{exact:!0,path:"/add",component:um}),r.a.createElement(de.b,{exact:!0,path:"/add/:currencyIdA",component:fm}),r.a.createElement(de.b,{exact:!0,path:"/add/:currencyIdA/:currencyIdB",component:bm}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/remove/v1/:address",component:Lm}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/remove/:tokens",component:up}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/remove/:currencyIdA/:currencyIdB",component:cp}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/migrate/v1",component:Am}),r.a.createElement(de.b,{exact:!0,strict:!0,path:"/migrate/v1/:address",component:Bm}),r.a.createElement(de.b,{component:mp})),r.a.createElement(qh,null))))))}var Kh=n(510);var Yh=Object(Se.c)({blockNumber:{},popupList:[],walletModalOpen:!1,settingsMenuOpen:!1},e=>e.addCase(Oe,(e,t)=>{const{chainId:n,blockNumber:a}=t.payload;"number"!==typeof e.blockNumber[n]?e.blockNumber[n]=a:e.blockNumber[n]=Math.max(a,e.blockNumber[n])}).addCase(Ie,e=>{e.walletModalOpen=!e.walletModalOpen}).addCase(Te,e=>{e.settingsMenuOpen=!e.settingsMenuOpen}).addCase(je,(e,t)=>{let{payload:{content:n,key:a,removeAfterMs:o=15e3}}=t;e.popupList=(a?e.popupList.filter(e=>e.key!==a):e.popupList).concat([{key:a||Object(Se.e)(),show:!0,content:n,removeAfterMs:o}])}).addCase(Ne,(e,t)=>{let{payload:{key:n}}=t;e.popupList.forEach(e=>{e.key===n&&(e.show=!1)})}));const _h=()=>(new Date).getTime();function Jh(e,t){return`${e};${t}`}const Qh={userDarkMode:null,matchesDarkMode:!1,userExpertMode:!1,userSlippageTolerance:50,userDeadline:1200,tokens:{},pairs:{},timestamp:_h()};var $h=Object(Se.c)(Qh,e=>e.addCase(Eg,e=>{"number"!==typeof e.userSlippageTolerance&&(e.userSlippageTolerance=50),"number"!==typeof e.userDeadline&&(e.userDeadline=1200),e.lastUpdateVersionTimestamp=_h()}).addCase(Dn,(e,t)=>{e.userDarkMode=t.payload.userDarkMode,e.timestamp=_h()}).addCase(Mn,(e,t)=>{e.matchesDarkMode=t.payload.matchesDarkMode,e.timestamp=_h()}).addCase(Ln,(e,t)=>{e.userExpertMode=t.payload.userExpertMode,e.timestamp=_h()}).addCase(zn,(e,t)=>{e.userSlippageTolerance=t.payload.userSlippageTolerance,e.timestamp=_h()}).addCase(Xn,(e,t)=>{e.userDeadline=t.payload.userDeadline,e.timestamp=_h()}).addCase(Wn,(e,t)=>{let{payload:{serializedToken:n}}=t;e.tokens[n.chainId]=e.tokens[n.chainId]||{},e.tokens[n.chainId][n.address]=n,e.timestamp=_h()}).addCase(Hn,(e,t)=>{let{payload:{address:n,chainId:a}}=t;e.tokens[a]=e.tokens[a]||{},delete e.tokens[a][n],e.timestamp=_h()}).addCase(qn,(e,t)=>{let{payload:{serializedPair:n}}=t;if(n.token0.chainId===n.token1.chainId&&n.token0.address!==n.token1.address){const t=n.token0.chainId;e.pairs[t]=e.pairs[t]||{},e.pairs[t][Jh(n.token0.address,n.token1.address)]=n}e.timestamp=_h()}).addCase(Vn,(e,t)=>{let{payload:{chainId:n,tokenAAddress:a,tokenBAddress:o}}=t;e.pairs[n]&&(delete e.pairs[n][Jh(a,o)],delete e.pairs[n][Jh(o,a)]),e.timestamp=_h()}));const Gh=()=>(new Date).getTime();var Zh=Object(Se.c)({},e=>e.addCase(Qt,(e,t)=>{var n,a;let{payload:{chainId:o,from:r,hash:i,approval:l,summary:s}}=t;if(null===(n=e[o])||void 0===n?void 0:n[i])throw Error("Attempted to add existing transaction.");const c=null!==(a=e[o])&&void 0!==a?a:{};c[i]={hash:i,approval:l,summary:s,from:r,addedTime:Gh()},e[o]=c}).addCase($t,(e,t)=>{let{payload:{chainId:n}}=t;e[n]&&(e[n]={})}).addCase(Zt,(e,t)=>{var n;let{payload:{chainId:a,hash:o,blockNumber:r}}=t;const i=null===(n=e[a])||void 0===n?void 0:n[o];i&&(i.lastCheckedBlockNumber?i.lastCheckedBlockNumber=Math.max(r,i.lastCheckedBlockNumber):i.lastCheckedBlockNumber=r)}).addCase(Gt,(e,t)=>{var n;let{payload:{hash:a,chainId:o,receipt:r}}=t;const i=null===(n=e[o])||void 0===n?void 0:n[a];i&&(i.receipt=r,i.confirmedTime=Gh())}));const ev={independentField:Mc.INPUT,typedValue:"",[Mc.INPUT]:{currencyId:""},[Mc.OUTPUT]:{currencyId:""},recipient:null};var tv=Object(Se.c)(ev,e=>e.addCase(Xc,(e,t)=>{let{payload:{typedValue:n,recipient:a,field:o,inputCurrencyId:r,outputCurrencyId:i}}=t;return{[Mc.INPUT]:{currencyId:r},[Mc.OUTPUT]:{currencyId:i},independentField:o,typedValue:n,recipient:a}}).addCase(Dc,(e,t)=>{let{payload:{currencyId:n,field:a}}=t;const o=a===Mc.INPUT?Mc.OUTPUT:Mc.INPUT;return n===e[o].currencyId?{...e,independentField:e.independentField===Mc.INPUT?Mc.OUTPUT:Mc.INPUT,[a]:{currencyId:n},[o]:{currencyId:e[a].currencyId}}:{...e,[a]:{currencyId:n}}}).addCase(Lc,e=>({...e,independentField:e.independentField===Mc.INPUT?Mc.OUTPUT:Mc.INPUT,[Mc.INPUT]:{currencyId:e[Mc.OUTPUT].currencyId},[Mc.OUTPUT]:{currencyId:e[Mc.INPUT].currencyId}})).addCase(zc,(e,t)=>{let{payload:{field:n,typedValue:a}}=t;return{...e,independentField:n,typedValue:a}}).addCase(Wc,(e,t)=>{let{payload:{recipient:n}}=t;e.recipient=n}));const nv={independentField:Qc.CURRENCY_A,typedValue:"",otherTypedValue:""};var av=Object(Se.c)(nv,e=>e.addCase(Zc,()=>nv).addCase(Gc,(e,t)=>{let{payload:{field:n,typedValue:a,noLiquidity:o}}=t;return o?n===e.independentField?{...e,independentField:n,typedValue:a}:{...e,independentField:n,typedValue:a,otherTypedValue:e.typedValue}:{...e,independentField:n,typedValue:a,otherTypedValue:""}}));const ov={independentField:Jm.LIQUIDITY_PERCENT,typedValue:"0"};var rv=Object(Se.c)(ov,e=>e.addCase(Qm,(e,t)=>{let{payload:{field:n,typedValue:a}}=t;return{...e,independentField:n,typedValue:a}}));var iv=Object(Se.c)({callResults:{}},e=>e.addCase(Xe,(e,t)=>{var n;let{payload:{calls:a,chainId:o,options:{blocksPerFetch:r=1}={}}}=t;const i=e.callListeners?e.callListeners:e.callListeners={};i[o]=null!==(n=i[o])&&void 0!==n?n:{},a.forEach(e=>{var t,n;const a=Le(e);i[o][a]=null!==(t=i[o][a])&&void 0!==t?t:{},i[o][a][r]=(null!==(n=i[o][a][r])&&void 0!==n?n:0)+1})}).addCase(We,(e,t)=>{let{payload:{chainId:n,calls:a,options:{blocksPerFetch:o=1}={}}}=t;const r=e.callListeners?e.callListeners:e.callListeners={};r[n]&&a.forEach(e=>{const t=Le(e);r[n][t]&&r[n][t][o]&&(1===r[n][t][o]?delete r[n][t][o]:r[n][t][o]--)})}).addCase(He,(e,t)=>{var n;let{payload:{chainId:a,fetchingBlockNumber:o,calls:r}}=t;e.callResults[a]=null!==(n=e.callResults[a])&&void 0!==n?n:{},r.forEach(t=>{const n=Le(t),r=e.callResults[a][n];if(r){var i;if((null!==(i=r.fetchingBlockNumber)&&void 0!==i?i:0)>=o)return;e.callResults[a][n].fetchingBlockNumber=o}else e.callResults[a][n]={fetchingBlockNumber:o}})}).addCase(qe,(e,t)=>{var n;let{payload:{fetchingBlockNumber:a,chainId:o,calls:r}}=t;e.callResults[o]=null!==(n=e.callResults[o])&&void 0!==n?n:{},r.forEach(t=>{const n=Le(t),r=e.callResults[o][n];r&&r.fetchingBlockNumber===a&&(delete r.fetchingBlockNumber,r.data=null,r.blockNumber=a)})}).addCase(Ve,(e,t)=>{var n;let{payload:{chainId:a,results:o,blockNumber:r}}=t;e.callResults[a]=null!==(n=e.callResults[a])&&void 0!==n?n:{},Object.keys(o).forEach(t=>{var n;const i=e.callResults[a][t];(null!==(n=null===i||void 0===i?void 0:i.blockNumber)&&void 0!==n?n:0)>r||(e.callResults[a][t]={data:o[t],blockNumber:r})})}));const lv=["user","transactions","lists"],sv=Object(Se.a)({reducer:{application:Yh,user:$h,transactions:Zh,swap:tv,mint:av,burn:rv,multicall:iv,lists:Sg},middleware:[...Object(Se.d)({thunk:!1}),Object(Kh.save)({states:lv})],preloadedState:Object(Kh.load)({states:lv})});sv.dispatch(Eg());var cv=sv;const dv="visibilityState"in document;function uv(){return!dv||"hidden"!==document.visibilityState}function mv(){const[e,t]=Object(o.useState)(uv()),n=Object(o.useCallback)(()=>{t(uv())},[t]);return Object(o.useEffect)(()=>{if(dv)return document.addEventListener("visibilitychange",n),()=>{document.removeEventListener("visibilitychange",n)}},[n]),e}function pv(){const{library:e,chainId:t}=be(),n=Object(d.b)(),a=mv(),[r,i]=Object(o.useState)({chainId:t,blockNumber:null}),l=Object(o.useCallback)(e=>{i(n=>t===n.chainId?"number"!==typeof n.blockNumber?{chainId:t,blockNumber:e}:{chainId:t,blockNumber:Math.max(e,n.blockNumber)}:n)},[t,i]);Object(o.useEffect)(()=>{if(e&&t&&a)return i({chainId:t,blockNumber:null}),e.getBlockNumber().then(l).catch(e=>console.error("Failed to get block number for chainId: "+t,e)),e.on("block",l),()=>{e.removeListener("block",l)}},[n,t,e,l,a]);const s=_t(r,100);return Object(o.useEffect)(()=>{s.chainId&&s.blockNumber&&a&&n(Oe({chainId:s.chainId,blockNumber:s.blockNumber}))},[a,n,s.blockNumber,s.chainId]),null}function fv(){const{library:e}=be(),t=Object(d.b)(),n=Object(d.c)(e=>e.lists.byUrl),a=mv(),r=wu();return function(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const a=Object(o.useRef)();Object(o.useEffect)(()=>{a.current=e},[e]),Object(o.useEffect)(()=>{function e(){const e=a.current;e&&e()}if(null!==t){n&&e();const a=setInterval(e,t);return()=>clearInterval(a)}},[t,n])}(Object(o.useCallback)(()=>{a&&Object.keys(n).forEach(e=>r(e).catch(e=>console.debug("interval list fetching error",e)))},[r,a,n]),e?6e5:null),Object(o.useEffect)(()=>{Object.keys(n).forEach(e=>{const t=n[e];t.current||t.loadingRequestId||t.error||r(e).catch(e=>console.debug("list added fetching error",e))})},[t,r,e,n]),Object(o.useEffect)(()=>{Object.keys(n).forEach(e=>{const a=n[e];if(a.current&&a.pendingUpdate){const n=Object(ol.c)(a.current.version,a.pendingUpdate.version);switch(n){case ol.a.NONE:throw new Error("unexpected no version bump");case ol.a.PATCH:case ol.a.MINOR:n>=Object(ol.d)(a.current.tokens,a.pendingUpdate.tokens)?(t(il(e)),t(je({key:e,content:{listUpdate:{listUrl:e,oldList:a.current,newList:a.pendingUpdate,auto:!0}}}))):console.error(`List at url ${e} could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR`);break;case ol.a.MAJOR:t(je({key:e,content:{listUpdate:{listUrl:e,auto:!1,oldList:a.current,newList:a.pendingUpdate}},removeAfterMs:null}))}}})},[t,n]),null}function bv(e,t){return n=e+Math.round(Math.random()*Math.max(0,t-e)),new Promise(e=>setTimeout(e,n));var n}class gv extends Error{constructor(){super("Cancelled")}}class yv extends Error{}function hv(){const e=Object(d.b)(),t=Object(d.c)(e=>e.multicall),n=_t(t.callListeners,100),a=Re(),{chainId:r}=be(),i=Yt(),l=Object(o.useRef)(),s=Object(o.useMemo)(()=>function(e,t){if(!e||!t)return{};const n=e[t];return n?Object.keys(n).reduce((e,t)=>{const a=n[t];return e[t]=Object.keys(a).filter(e=>{const t=parseInt(e);return!(t<=0)&&a[t]>0}).reduce((e,t)=>Math.min(e,parseInt(t)),1/0),e},{}):{}}(n,r),[n,r]),c=Object(o.useMemo)(()=>function(e,t,n,a){return n&&a?e[n]?Object.keys(t).filter(o=>{const r=t[o],i=e[n][o];if(!i)return!0;const l=a-(r-1);return!(i.fetchingBlockNumber&&i.fetchingBlockNumber>=l)&&(!i.blockNumber||i.blockNumber<l)}):Object.keys(t):[]}(t.callResults,s,r,a),[r,t.callResults,s,a]),u=Object(o.useMemo)(()=>JSON.stringify(c.sort()),[c]);return Object(o.useEffect)(()=>{var t;if(!a||!r||!i)return;const n=JSON.parse(u);if(0===n.length)return;const o=n.map(e=>ze(e)),s=function(e,t){if(t<1)throw new Error("maxChunkSize must be gte 1");if(e.length<=t)return[e];const n=Math.ceil(e.length/t),a=Math.ceil(e.length/n);return[...Array(n).keys()].map(t=>e.slice(t*a,t*a+a))}(o,500);var c,d;(null===(t=l.current)||void 0===t?void 0:t.blockNumber)!==a&&(null===(c=l.current)||void 0===c||null===(d=c.cancellations)||void 0===d||d.forEach(e=>e()));e(He({calls:o,chainId:r,fetchingBlockNumber:a})),l.current={blockNumber:a,cancellations:s.map((t,o)=>{const{cancel:c,promise:d}=function(e,t){let n,{n:a,minWait:o,maxWait:r}=t,i=!1;return{promise:new Promise(async(t,l)=>{for(n=l;;){let n;try{n=await e(),i||(t(n),i=!0);break}catch(s){if(i)break;if(a<=0||!(s instanceof yv)){l(s),i=!0;break}a--}await bv(o,r)}}),cancel:()=>{i||(i=!0,n(new gv))}}}(()=>async function(e,t,n){let a,o;console.debug("Fetching chunk",e,t,n);try{[a,o]=await e.aggregate(t.map(e=>[e.address,e.callData]))}catch(r){throw console.debug("Failed to fetch chunk inside retry",r),r}if(a.toNumber()<n)throw console.debug(`Fetched results for old block number: ${a.toString()} vs. ${n}`),new yv("Fetched for old block number");return{results:o,blockNumber:a.toNumber()}}(i,t,a),{n:1/0,minWait:2500,maxWait:3500});return d.then(t=>{let{results:i,blockNumber:c}=t;l.current={cancellations:[],blockNumber:a};const d=s.slice(0,o).reduce((e,t)=>e+t.length,0),u=d+i.length;e(Ve({chainId:r,results:n.slice(d,u).reduce((e,t,n)=>{var a;return e[t]=null!==(a=i[n])&&void 0!==a?a:null,e},{}),blockNumber:c}))}).catch(n=>{n instanceof gv?console.debug("Cancelled fetch for blockNumber",a):(console.error("Failed to fetch multicall chunk",t,r,n),e(qe({calls:t,chainId:r,fetchingBlockNumber:a})))}),c})}},[r,i,e,u,a]),null}function vv(){var e;const{chainId:t,library:n}=be(),a=Re(),r=Object(d.b)(),i=Object(d.c)(e=>e.transactions),l=t&&null!==(e=i[t])&&void 0!==e?e:{},s=function(){const e=Object(d.b)();return Object(o.useCallback)((t,n)=>{e(je({content:t,key:n}))},[e])}();return Object(o.useEffect)(()=>{t&&n&&a&&Object.keys(l).filter(e=>function(e,t){if(t.receipt)return!1;if(!t.lastCheckedBlockNumber)return!0;const n=e-t.lastCheckedBlockNumber;if(n<1)return!1;const a=((new Date).getTime()-t.addedTime)/1e3/60;return a>60?n>9:!(a>5)||n>2}(a,l[e])).forEach(e=>{n.getTransactionReceipt(e).then(n=>{var o;n?(r(Gt({chainId:t,hash:e,receipt:{blockHash:n.blockHash,blockNumber:n.blockNumber,contractAddress:n.contractAddress,from:n.from,status:n.status,to:n.to,transactionHash:n.transactionHash,transactionIndex:n.transactionIndex}})),s({txn:{hash:e,success:1===n.status,summary:null===(o=l[e])||void 0===o?void 0:o.summary}},e)):r(Zt({chainId:t,hash:e,blockNumber:a}))}).catch(t=>{console.error("failed to check transaction hash: "+e,t)})})},[t,n,l,a,r,s]),null}function xv(){const e=Object(d.b)();return Object(o.useEffect)(()=>{var t;const n=t=>{e(Mn({matchesDarkMode:t.matches}))},a=null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)");return e(Mn({matchesDarkMode:a.matches})),(null===a||void 0===a?void 0:a.addListener)?null===a||void 0===a||a.addListener(n):(null===a||void 0===a?void 0:a.addEventListener)&&(null===a||void 0===a||a.addEventListener("change",n)),()=>{(null===a||void 0===a?void 0:a.removeListener)?null===a||void 0===a||a.removeListener(n):(null===a||void 0===a?void 0:a.removeEventListener)&&(null===a||void 0===a||a.removeEventListener("change",n))}},[e]),null}function Ev(e){const t=new m.a(e);return t.pollingInterval=15e3,t}const wv=Object(a.c)("NETWORK");"ethereum"in window&&(window.ethereum.autoRefreshOnNetworkChange=!1);function Av(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(fv,null),r.a.createElement(xv,null),r.a.createElement(pv,null),r.a.createElement(vv,null),r.a.createElement(hv,null))}c.a.initialize("UA-128182339-4"),c.a.set({customBrowserType:i.isMobile?"web3"in window||"ethereum"in window?"mobileWeb3":"mobileRegular":"desktop"}),window.addEventListener("error",e=>{c.a.exception({description:`${e.message} @ ${e.filename}:${e.lineno}:${e.colno}`,fatal:!0})}),s.a.render(r.a.createElement(o.StrictMode,null,r.a.createElement(ka,null),r.a.createElement(a.b,{getLibrary:Ev},r.a.createElement(wv,{getLibrary:Ev},r.a.createElement(Yi,null,r.a.createElement(To,null,r.a.createElement(Bo,null,r.a.createElement(Vo,null,r.a.createElement(Yo,null,r.a.createElement(d.a,{store:cv},r.a.createElement(Av,null),r.a.createElement(Ea,null,r.a.createElement(Ca,null),r.a.createElement(Vh,null))))))))))),document.getElementById("root"))},121:function(e,t,n){e.exports=n.p+"static/media/icon_chainx.8096ae3a.svg"},172:function(e,t,n){e.exports="static/media/icon_tip_dark.ba94d4a7.svg"},192:function(e,t,n){e.exports="static/media/icon_warming.548f10c4.svg"},219:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFMklEQVR4XtVbvW4TQRhMSWwipYYngCeACsp0pEsJFZTp8gapaXgD6F0gETsIWaRIARIopAAJJAcJCgq4s5M4/zE3l6y1nv253fXe2R5plOR2787f7PfN7u05c3MVIGksLiYbNx92W/XnaavWSFv1TrpZT7Kfg5xXv3fQhj7oi3P4OjOD7ub8ahZUexjguGzW271W/THfZ+qAkYsauMJaI3mzsMz3nThG0rky1jr8OSpHPuJ57fKHq4q1zkRKI9moP5nMqJtYoRBwZ/UDTAdLnzmma9RNLMkb8rRXbjadjF4OfINZIccRhFkaeebYmZCWNMV1390enOy9GAgc7j5T+kRkwnE5oUy3vzxLh8ELXPR/Kv1i0Xt2KCPte1t3OWYtyhLCqxzSyKl//GNdO+omQIQSysKtFGKO/tm/LY5tBEff1wenf17z4REcZ17B1w0llu4cr4I0wuizyelw9ndr2P+iv8fNI4iXDQWLpDRC8KApoMuzZND/uqb0Fzz59ZJPGSJiJphLQdM5mP3dpxxDlhm3lH7M3vs7fNpg/8OS0m8cctw5ktbCMnd0YT9LT8Dk3giIj4EHH5eGAeqEwXm64ygvAcws3O5CrRdc79UpnW1kkzvv7Th9KPYHV9c/+ramzCZBpdGst0eC93V+Dpyxv31POQfEqNrq3OYPmDFsOMxKjs+xsducXx0K4LuPZxKgyOQEdSbpMpI28XwFGMkCpbGALMB5d0c76vAHpCwWQrp6xqgeflpRju9v38/vgTWCrqRgsFwK3gK0JDPkhiKyAEdZgNxHNjnAZJJM2eQEdCJwFgULkLT9H3psAmCki6ALiAXTQe4fQ4D8Iel6Z1dptPEoq3MZsgAuDz3IBlxDnMOCmiB/BlkA/G6abm3Mp8Or11VqowsPPq/kN/cVIBTyvXFfmKLOW1yJ2IPmfyZMSfxelQCnWfD8ObzZrDWC1v+oVz4mWJUAMmGcOl8pZvZwFLLVjZrFqo+Pgy4mGAq+lyCmxBATTPFgpDlYSNm0TNOb7qEmBFhc8bVBni4DBRiMLQCgWweAwiRDgdWhyeSQgTLCBQgsARkmAQSLngEYLsGwsC7naJiXQEfTYKVNAJiR6ckOu0BFwPKYzxM7TPKxOALABAOmwSIBBE5+vxpxZ90mCUO+D2Yb+V5yWxQBMA2GLIRcBQBkk/QVgCG3xRAgXwiFLIV9BABE27QJsL9540H0h6FZEmD4xogbimgTAMTUJe/giOOhAug2RWMIEG0/AGbHfUAx9Ym/fQXAIkg3KyDL4m6IRNoSY9dn+grAxKwAU9XBWwB5Syz/YiN3sNAkgIBp9TaOANgms8FXAOVlqW8WgEUwZQPXLyC/KpOJrXAbcC0+p5CY/xkh06HLEtfkD7JJ6kwOPO9+ka6kQucPLuy9rT3i+HNwRx/a0pv7utIEk2Cu5LiHCHkwkmnKBtGOOjaVBcgbLQyku2+tq6zgDTGyQa5z+fhVIKOvwuQvUMjXEYA/hGx6qiwIHgjxAhMFxN9cJsgG8XJVgM8PMjkDFec3YdxSMJEF0IHPiUeH0RfwfVnqykkK4Dz6AiEPSS607RWaFlDj0vtrcgJlloJskjA53cvVOPRIfR3KKgfQ9C2QWPROexP4wrNCjmMslJkJsRlt5BlphEVS6dy0fA0uBsqaHWIw2O19cV0OHf4AE2M26qWlvQ2TF6LWyXd2J410EiKUXeshwEZDyJsmZzbr7akY8SJc/2NlWwkglFng2Lfk+8wM4M4YuW7T4d/nsz7oW5Wj/wdXGukMTSgLegAAAABJRU5ErkJggg=="},227:function(e,t,n){e.exports=n.p+"static/media/icon_minix.d659409b.svg"},244:function(e,t,n){e.exports=n.p+"static/media/dropdown.7d32d2fa.svg"},252:function(e,t,n){e.exports=n.p+"static/media/icon_polka_logo.eebe8550.svg"},253:function(e,t,n){e.exports=n.p+"static/media/icon_kusama.90b7711a.svg"},307:function(e,t){e.exports="data:image/png;base64,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"},308:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},309:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADnElEQVR4XtVbTW6cMBTOsoFGyjXaE7Sr9gbNDdob5Cg9RA8wu4aZLlC7yDVIpXYNMyNF6kSZlGdgQj5jsM17GD7pU6KxDX7+3o8xM2dnEyBfXV7mN68/btfx12IdrYp1nBWbOC//PilW/2fURn2oL43B6ywG2835dWlUejJwLJM43a3jz3if2YGUYzVcY7TKv19c4X2D44U7T8Yow3lMDqW4il2c3FSMsiChkd/EX8KobuKEC0HZWZ/APCheOealuolCuUG5vXazeZI9HPAGSyHa4QVJ5Xe/3j7tb99rn3NxtCcUgiWOjG8guQglc7TLCpLZnox/vP99WoDjoRBdBOfqIO32JkguglM4FEKuj8ojhD3BLhSk1O9THoFjuUhbd7RXQyGg/pDybRwfcm08Hwc2SYWQ8bbY377TxgvQHAodnUeRQ3m6Bn42lmi3Qr6+uMKOY8ih/HM7b2LszAX1WZ3W2Yccyh/+fnvuw10dkjh9YTxn5udUHsG5CNvk/Pq0AFzneNzKI1g9oe0FWqMHJZVH7H6+0cb6kHUBiDbwUR6BY32pjM9T3oeewx+zIWOV/1deG8eOoXpIqk92tcYx7MKclG+oymH1ukpvHGIT85SYsI3Y9gQp5Y8PhWr3TYxku1f9x2xvmgBBSnm6ZwPv6pBEK+f9vynbmzyhi7YYUh7hvgjlw5HLUTcqj7CZAKfyCA9PyK1LoEl5RJ8n2MJVeYTLIlgvQN/KtzFFzA/BZaPkFAI0iT4VpLP9EB7v75yML+oQyDoajDQpsTTlK1IS9CiD6AkLVL4ilUHfjVCjzDKVr6g2QlNthbsQTPma+82rD/wPQwtQvuHpjRE2+NIWoZVvyHoeYLtRIuBY4pTKN3xeAKYjMawOiLkor9g+ElNfbMQOnuxTEvsO9UewGV9Se1nK5QVE9IRZKU+k+o/gLodtZbEN24fAanzJ3Y/oE9qvgB3H0jTxYMrXRLtPcHkw8mVI5SsGeEPcMLTyg8YTuHNBm7aQMb4j85sgFQpYHRByyhMt1G/A+bIU2ZcD5Ix3UL8B90NSm+gJssp7fE2ugVQoENueIGm8k+t3QTocJI13dnsT8MJLIdoxCpKewE025RGF4CaJjZuer8FxQLI6jKV3tndFHQ4ZTiAYS9XF3L4P4RciytTJbmgUIRZBOtZ9QAcNPm+arJnE6SwUH0L9w8pUM8CXpeF0bon3WQwoO5Ny28Ti5/NlH+o7VUb/D95+oUC15sWYAAAAAElFTkSuQmCC"},310:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADQ0lEQVR4XtXZMW4UQRCFYY7AEZyZC3ABTsAFOAEJiSVHhKQEJISkXAGRI5AQQrLkAAmRmBCcEBAZjYVX8rdV3bUzs7PjX/qTfa97unqN2LXv3VuI45OPP45PPl0VvXT9nSMYapLuv1o8+Nz6vFWw44/3XK7jn0lwsEX1PIvhQQ6t59srPnwtes7Z8YFr1XPPgg9Zu55/Em6+q6dvv2+91vPxy7Orh88/b72+i84xCjetKuY9xbyq8+yEm1XMsNczw15F5yrjRi3fn/32rLew37PF+c8/W/2WzlXCTVr2sF+1h/2WztfExS1b2B1rC7stnTPFhZkZ9uYyw16mc4a4KDPDXqaYZ2bYy3TeW1S/1WXYaynmLTPsZTr3BouRGfZ6innPDHuRzr3BYmSEnYpiXjHCTuTRsy/3nX3R4aO9zKtG2Il0/lEXYN6ziut6innk5OEH7GSOwT1aRtiJnHQB5i3H4j4txTyyfAERdjIj7GTdJ6/PtzqZEXZ09AWYtxRzFfOWYq7/h+9/+BHzzOEdFDsq5i3FPLL77j998819tzqZr95duHSrM6cyfEW3o90LEPOeYj63Yq6LX8AN9uZSzPVgFxDh2jGKue79AqI9KrhHVTHXRS4g26uH6yuKuS56ATcOv/Ov4tqeYq4HuYDIi19/fdQ19nqKua7mAm6MsNNSzHV1FxD9fcFOSzHX4QIufVHFPFPMM8U8U8wj9/plSMwjI+xkirnu/dtghB0V85ZirqMvYMBOZoSdMV2NsKPlCxgU88xd/s8X92op5pGbC6hcQoSdlrvi+pYRdvTW8JULGBTznhVcU1HMI53/GksaYaeqmFeNsKMPTj8cOfs1FiMj7FQU84oRdiKde8Nx4UPRYISdnmLeM8JOpnPfwnJkhr2WYt4yw16k84a4KDLD3txm2IsM/yga4cLMFnan2sJupnM2cXFmD/u72sN+pvOVcJOWPez37PHoxdetNZnOVcaNeraw27OF3Z7OtRNuVjHCTs8IOxWdZxRuWnXK4aesvdE5JuHma9fzz4IPWauee3Z84Fr0nHvFhx9az7cYHmRpyx9v94mHWkrPcXCGd8NDzm36y4y14cGn6v53Dgfq6fp98Q/twpmau6HU4QAAAABJRU5ErkJggg=="},311:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAADAFBMVEVHcEwA/wAmoXsAAAAAf38loHoAolUA//8moXomoHoAqqpVqqoloXomoXo/v38loXsAf38moHoloHomoHsloXsmoXomoXkloHolonslonkmoHsmo3wmn3kkoXs/f38mpH0mo3wloXsloXsloHkmonslonsmo30npX0mn3omo30lnXknp38moXwloHompH0non0moXsmoXkloXsmoXolonsloXsAAEcno34mpX0mpX4loHoloXwmo30mm3kAAP8ln3ompX4moHoknXkloXsknXcinHkloXsnpH0monsmoXsno30onnomoXsmo30moHomonomoXszmWYmoHoAmWYmoHompX4mpH4mpH0non0ko3YkmnYmoHomoXv///8pon39/v4oonwYm3P8/v0noXx3xKz+//4joHkin3nu+PUprYQloHrZ7uja7+k3qIUmonwoqIAbnHQop4Ano30VmnEoqYEprIMnoXsZm3MkoHononwcnXUXm3IproUprIQloXoanHT8/f0gn3gmo3wUmXAfnncennYproQoqoHY7ugdnXYhn3ggnnf5/PyJzLcXmnIro34pq4MnpH1Zt5r+/v4np38npX4npn8loXsin3jt+PT7/fz2+/o+rIrf8eszp4SU0b4spH9BrYwoq4IorIO239JauJu139Inp4BbuJt1xKwenXbK6N8loHvh8u1NspNxwahzw6o5qYfq9vM4qYZJsJCGy7WDyrQ2qIV7xq+74dZMsZKMzbkoon3S6+TU7OXb7+lPs5WOzronqIBnvaJvwaji8u4upYBUtpjd8Os2qIQpo307qoiu3M5nvaP1+/kqo32Nzbry+feV0b+/49gpon5kvKFRtJWPz7tqv6WT0L5ovqREro1twKd5xa4vpYBywqkypoJHsJCAyLKT0L0pq4LZ7+ic1MP9/v3a7+jX7uf5/ft4xK2Qz7t+x7Aponyz3tHk8+9gup6Z08HO6eHH593v+PYmoXzs9/Sr2sy44NSi18YAjmDx+fbD5dqn2coAkGT9IPnsAAAAXHRSTlMAAf4BAvsDAf3+AwP79wT6BP2Q/F26YvztFv6OKCkE9Ybqjvut+vz9a/4X/nfY00HVP9H4qagCbef0h4+nLgGOv/sVxGAsx+vv/OoZeHjq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"},313:function(e,t,n){e.exports="static/media/icon_arrow_down.7dffaf1e.webp"},314:function(e,t,n){e.exports="static/media/icon_arrow_up.7b1d0039.webp"},315:function(e,t,n){e.exports=n.p+"static/media/icon_loading.f15f3e5b.svg"},320:function(e,t,n){e.exports=n.p+"static/media/icon.xbtc.1b880dc5.svg"},328:function(e,t,n){e.exports=n.p+"static/media/icon_bind_asset.020c0d9b.svg"},371:function(e,t,n){e.exports=n.p+"static/media/icon_minix_chain.0d252259.svg"},417:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_mini","type":"address"},{"internalType":"address","name":"_erc20","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_index","type":"uint256"},{"indexed":false,"internalType":"address","name":"_caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"_share","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_total_mini","type":"uint256"}],"name":"CreateMINIPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_index","type":"uint256"},{"indexed":false,"internalType":"address","name":"_caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"IncreaseStaking","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_total_mini","type":"uint256"},{"internalType":"uint256","name":"_stake_end_timpstamp","type":"uint256"},{"internalType":"uint256","name":"_unstake_start_timpstamp","type":"uint256"}],"name":"create_mini_pool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get_erc20_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_mini_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_pool_index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"get_pool_timestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"get_share","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"increase_stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"index_pool","outputs":[{"internalType":"uint256","name":"total_mini","type":"uint256"},{"internalType":"uint256","name":"total_balance","type":"uint256"},{"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"internalType":"uint256","name":"create_timpstamp","type":"uint256"},{"internalType":"uint256","name":"stake_end_timpstamp","type":"uint256"},{"internalType":"uint256","name":"unstake_start_timpstamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"is_exist_remaining_balance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"pool_staking_info","outputs":[{"internalType":"uint256","name":"staking_balance","type":"uint256"},{"internalType":"bool","name":"is_claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"unstake_all","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},438:function(e,t,n){var a={"/static/media/KsxLogo.b4d66e60.svg":478,"./arrow-down-blue.svg":859,"./arrow-down-grey.svg":860,"./arrow-right-white.png":861,"./arrow-right.svg":862,"./blue-loader.svg":863,"./circle-grey.svg":864,"./circle.svg":865,"./coinbaseWalletIcon.svg":469,"./dropdown-blue.svg":866,"./dropdown.svg":244,"./dropup-blue.svg":867,"./ethereum-logo.png":868,"./fortmaticIcon.png":307,"./icon.xbtc.svg":320,"./icon_add.svg":479,"./icon_add_liquidity.webp":480,"./icon_arrow_down.webp":313,"./icon_arrow_left.svg":481,"./icon_arrow_up.webp":314,"./icon_bridge_message.svg":869,"./icon_bsc_busd.png":309,"./icon_bsc_logo.png":219,"./icon_bsc_usdc.png":310,"./icon_bsc_usdt.png":311,"./icon_chainx.svg":121,"./icon_clock.webp":482,"./icon_earn_empty.webp":870,"./icon_empty.svg":483,"./icon_kusama.svg":253,"./icon_loading.svg":315,"./icon_metamask.svg":484,"./icon_minix.svg":227,"./icon_minix_chain.svg":371,"./icon_next.svg":871,"./icon_polka_logo.svg":252,"./icon_previous.svg":872,"./icon_reduce.svg":485,"./icon_rise.svg":486,"./icon_sbtc.svg":487,"./icon_sherpax_logo.webp":97,"./icon_so.svg":488,"./icon_success.svg":489,"./icon_tip.svg":490,"./icon_tip_dark.svg":172,"./icon_unknown.svg":491,"./icon_warming.svg":192,"./link.svg":873,"./magnifying-glass.svg":874,"./menu.svg":875,"./metamask.png":492,"./plus-blue.svg":876,"./plus-grey.svg":877,"./portisIcon.png":470,"./question-mark.svg":878,"./question.svg":879,"./spinner.svg":880,"./token-list/lists-dark.png":881,"./token-list/lists-light.png":882,"./trustWallet.png":883,"./walletConnectIcon.svg":471};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=438},469:function(e,t,n){e.exports=n.p+"static/media/coinbaseWalletIcon.62578f59.svg"},470:function(e,t,n){e.exports=n.p+"static/media/portisIcon.b234b2bf.png"},471:function(e,t,n){e.exports="static/media/walletConnectIcon.8215855c.svg"},472:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')},473:function(e){e.exports=JSON.parse('[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]')},474:function(e){e.exports=JSON.parse('[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]')},478:function(e,t,n){e.exports="/static/KsxLogo.b4d66e60.svg"},479:function(e,t,n){e.exports="static/media/icon_add.7bf8383e.svg"},480:function(e,t,n){e.exports="static/media/icon_add_liquidity.c75689c7.webp"},481:function(e,t,n){e.exports="static/media/icon_arrow_left.6a7823fd.svg"},482:function(e,t,n){e.exports=n.p+"static/media/icon_clock.a3a30254.webp"},483:function(e,t,n){e.exports=n.p+"static/media/icon_empty.7bea6496.svg"},484:function(e,t,n){e.exports=n.p+"static/media/icon_metamask.74d2635a.svg"},485:function(e,t,n){e.exports=n.p+"static/media/icon_reduce.b3dbf668.svg"},486:function(e,t,n){e.exports=n.p+"static/media/icon_rise.2ae28675.svg"},487:function(e,t,n){e.exports=n.p+"static/media/icon_sbtc.4b00a805.svg"},488:function(e,t,n){e.exports=n.p+"static/media/icon_so.339e5885.svg"},489:function(e,t,n){e.exports=n.p+"static/media/icon_success.5ac9f1c5.svg"},490:function(e,t,n){e.exports="static/media/icon_tip.4aba285f.svg"},491:function(e,t,n){e.exports=n.p+"static/media/icon_unknown.1c9203e8.svg"},492:function(e,t,n){e.exports="static/media/metamask.023762b6.png"},494:function(e,t,n){e.exports=n.p+"static/media/icon_MetaMask.b4bf5e65.svg"},507:function(e,t,n){e.exports="static/media/icon_switch.8edbf41a.svg"},539:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},540:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')},631:function(e,t,n){e.exports=n.p+"https://sherpuppy.dog/puppyswap/static/media/inkpx-word-art (6).png"},633:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_lp_token","type":"address"},{"internalType":"uint256","name":"_alloc_point","type":"uint256"},{"internalType":"bool","name":"_without_update","type":"bool"}],"name":"add_pool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_lp_token","type":"address"},{"internalType":"uint256","name":"_alloc_point","type":"uint256"},{"internalType":"bool","name":"_without_update","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"add_pool_with_staking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract SoSwapToken","name":"_soswap","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewards","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current_stake","type":"uint256"}],"name":"Claim","type":"event"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergency_unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"}],"name":"EmergencyUnStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_alloc_point","type":"uint256"},{"internalType":"bool","name":"_without_update","type":"bool"}],"name":"set_pool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewards","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current_stake","type":"uint256"}],"name":"Stake","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewards","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current_stake","type":"uint256"}],"name":"UnStake","type":"event"},{"inputs":[],"name":"update_all_pools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"update_pool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingSoSwap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_lp_token","type":"address"}],"name":"pool_exsist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool_info","outputs":[{"internalType":"contract IERC20","name":"lp_token","type":"address"},{"internalType":"uint256","name":"alloc_point","type":"uint256"},{"internalType":"uint256","name":"last_reward_time","type":"uint256"},{"internalType":"uint256","name":"acc_reward_per_share","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool_length","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"soswap","outputs":[{"internalType":"contract SoSwapToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_alloc_point","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"user_info","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"mark_reward_per_share","type":"uint256"}],"stateMutability":"view","type":"function"}]')},634:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')},635:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')},636:function(e){e.exports=JSON.parse('[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]')},637:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')},642:function(e,t,n){e.exports=n.p+"static/media/icon_bind_purple.557be15a.svg"},647:function(e,t){},658:function(e,t,n){e.exports=n.p+"static/media/icon_back.0998f4d1.svg"},659:function(e,t,n){e.exports=n.p+"static/media/icon_polkadot.1e31f070.svg"},660:function(e,t,n){e.exports=n.p+"static/media/icon_Q&A.351dc93c.svg"},661:function(e,t,n){e.exports=n.p+"static/media/icon_warning.d439d85c.svg"},662:function(e,t,n){e.exports=n.p+"static/media/icon_success.521934f5.svg"},663:function(e,t,n){e.exports=n.p+"static/media/icon_failure.ad0fd5cb.svg"},665:function(e,t,n){e.exports="static/media/loading.4e262a93.svg"},666:function(e,t,n){e.exports="static/media/icon_dropDown_blue.1710bfd8.svg"},667:function(e,t,n){e.exports="static/media/icon_dropDown_white.04bdbe33.svg"},673:function(e,t,n){e.exports=n.p+"static/media/icon_asset_transfer.913631a6.svg"},674:function(e,t,n){e.exports=n.p+"static/media/icon_trande_exchange.4162fb30.svg"},675:function(e,t,n){e.exports=n.p+"static/media/loading.f15f3e5b.svg"},677:function(e,t,n){e.exports=n.p+"static/media/icon_trading.1edc9646.svg"},678:function(e,t,n){e.exports=n.p+"static/media/icon_funding.e95cbd31.svg"},679:function(e,t,n){e.exports=n.p+"static/media/selectIcon.4c3f11b6.svg"},680:function(e,t,n){e.exports=n.p+"static/media/lineRight.65bd8588.svg"},681:function(e,t,n){e.exports=n.p+"static/media/lineLeft.a075b0cc.svg"},682:function(e,t,n){e.exports="static/media/icon_trande_exchange.d8d66209.svg"},683:function(e,t,n){e.exports="static/media/icon_tip_purple.03b1b4d5.svg"},684:function(e,t,n){e.exports=n.p+"static/media/icon_route_arrow.c10dcbfd.svg"},685:function(e,t,n){e.exports="static/media/icon_trade_arrow.44a9f455.svg"},686:function(e,t,n){e.exports="static/media/icon_setting.8cd3d80e.svg"},761:function(e,t,n){e.exports=n(1151)},774:function(e,t){},824:function(e,t){},827:function(e,t){},837:function(e,t){},859:function(e,t,n){e.exports=n.p+"static/media/arrow-down-blue.cd061363.svg"},860:function(e,t,n){e.exports=n.p+"static/media/arrow-down-grey.c0dedd2f.svg"},861:function(e,t,n){e.exports=n.p+"static/media/arrow-right-white.337ad716.png"},862:function(e,t,n){e.exports=n.p+"static/media/arrow-right.d285b6cf.svg"},863:function(e,t,n){e.exports=n.p+"static/media/blue-loader.904b44c2.svg"},864:function(e,t,n){e.exports=n.p+"static/media/circle-grey.ed2a1dad.svg"},865:function(e,t,n){e.exports=n.p+"static/media/circle.2d975615.svg"},866:function(e,t,n){e.exports=n.p+"static/media/dropdown-blue.b20914ec.svg"},867:function(e,t,n){e.exports=n.p+"static/media/dropup-blue.b96d70e1.svg"},868:function(e,t){e.exports="data:image/png;base64,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"},869:function(e,t,n){e.exports=n.p+"static/media/icon_bridge_message.b8ddcf9d.svg"},870:function(e,t,n){e.exports=n.p+"static/media/icon_earn_empty.364fed9c.webp"},871:function(e,t,n){e.exports=n.p+"static/media/icon_next.2005f3c0.svg"},872:function(e,t,n){e.exports=n.p+"static/media/icon_previous.612ba7a0.svg"},873:function(e,t,n){e.exports=n.p+"static/media/link.50c67f3c.svg"},874:function(e,t,n){e.exports=n.p+"static/media/magnifying-glass.67440097.svg"},875:function(e,t,n){e.exports=n.p+"static/media/menu.4f2c4440.svg"},876:function(e,t,n){e.exports=n.p+"static/media/plus-blue.e8021e51.svg"},877:function(e,t,n){e.exports=n.p+"static/media/plus-grey.d8e0be7d.svg"},878:function(e,t,n){e.exports=n.p+"static/media/question-mark.1ae4d9f4.svg"},879:function(e,t,n){e.exports=n.p+"static/media/question.a46e8bc1.svg"},880:function(e,t,n){e.exports=n.p+"static/media/spinner.be00fc4a.svg"},881:function(e,t){e.exports="data:image/png;base64,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"},882:function(e,t){e.exports="data:image/png;base64,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"},883:function(e,t,n){e.exports=n.p+"static/media/trustWallet.edcc1ab5.png"},952:function(e,t){},97:function(e,t,n){e.exports=n.p+"https://soswap.finance/static/media/icon_sherpax_logo.cb8a5ebd.webp"}},[[761,2,3]]]);
//# sourceMappingURL=main.47e5ad78.chunk.js.map
