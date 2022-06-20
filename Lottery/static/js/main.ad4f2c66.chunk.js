(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
	[0], {
		408: function(e) {
			e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
		},
		409: function(e) {
			e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyReferredAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name": "enterWithLGOLD","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "ref","type": "address"},{"internalType": "uint256","name": "value","type": "uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEntries","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"constant": true,"inputs": [{"internalType": "address","name": "adr","type": "address"}],"name": "getMyReferredAmount","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "PotOGoldStart","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"seedMarket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"beans","type":"uint256"}],"name":"setBeansInCan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
		},
		410: function(e) {
			e.exports = JSON.parse('[{"q":"What happens when I buy cats?","a":"When you buy cats, your LGOLD gets locked into the LGOLD Cats smart contract and rewards you with 8% daily return every day."},{"q":"Can I take my initial LGOLD back?","a":"Over Time! Cats are not bought, Cats are mined therefore they can\'t be sold. Once cats are mined they work for you indefinitely, providing you with an unlimited amount of LGOLD at a starting rate of 8% daily."},{"q":"How much are my fees?","a":"There is a small 1% dev fee in order to pay for marketing costs and developing the LGOLD Cats ecosystem"},{"q":"When is the best time to buy cats?","a":"Always! No matter when you hire miners, you will begin with a return rate of 8% daily."},{"q":"How often should I compound?","a":"WE recommend that you compound at least once per day but you are free to do so as often as you wish."},{"q":"How is LGOLD Cats sustainable?","a":"Cats are sustained by continued community support, just as every other crypto coin, token or project. The difference is that since there is no token, there is no price to dump. As long as cats are mining in the contract, there will be rewards!"},{"q":"How to use Cats on my phone?","a":"You can either use an app with a dapp browser and choose the Metamask/Injected option or simply use any browser that you want and choose WalletConnect to connect to your wallet\'s app on your phone."},{"q":"Is it better to Compound or Harvest?","a":"By design, compounding will be more profitable than Harvesting in the long-term."},{"q":"How do referrals work?","a":"Once your BSC wallet is connected to the LGOLD Miner website, you will notice your referral address appear at the bottom of the page. When a new user hires miners after clicking your personal referral link, the contract will send a LGOLD value equal to 12% instantly to your LGOLD Cats. Be smart, use it to buy cats and build yourself a stream of income."},{"q":"When did LGOLDCats launch?","a":"It launched March. 5th, 2022."}]')
		},
		429: function(e, t, n) {},
		442: function(e, t) {},
		445: function(e, t) {},
		447: function(e, t) {},
		451: function(e, t) {},
		476: function(e, t) {},
		478: function(e, t) {},
		487: function(e, t) {},
		489: function(e, t) {},
		499: function(e, t) {},
		501: function(e, t) {},
		616: function(e, t) {},
		618: function(e, t) {},
		625: function(e, t) {},
		626: function(e, t) {},
		644: function(e, t) {},
		652: function(e, t) {},
		659: function(e, t) {},
		707: function(e, t) {},
		732: function(e, t) {},
		765: function(e, t) {},
		838: function(e, t) {},
		856: function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n(0),
				r = n.n(a),
				i = n(80),
				o = n.n(i),
				s = n(906),
				c = (n(429), n(907)),
				u = n(171),
				l = n(16),
				d = n(894),
				p = n(910),
				b = n(3),
				A = n.n(b),
				y = n(6),
				m = n(20),
				h = n(394),
				f = n(55),
				g = n.n(f),
				j = n(396),
				x = n.n(j),
				v = n(414),
				O = n(902),
				w = n(901),
				C = n(1),
				T = Object(a.createContext)({
					address: null,
					connect: function() {
						return null
					},
					loading: !1,
					disconnect: function() {
						return null
					},
					chainId: null,
					setSnackbar: function() {
						return null
					}
				}),
				B = {
					walletconnect: {
						package: v.a,
						options: {
							rpc: {
								3: "https://ropsten.infura.io/v3/"
							},
							network: "Ropsten"
						}
					}
				},
				S = Object(a.forwardRef)((function(e, t) {
					return Object(C.jsx)(w.a, Object(h.a)({
						elevation: 6,
						ref: t,
						variant: "filled"
					}, e))
				})),
				M = new x.a({
					cacheProvider: !0,
					providerOptions: B
				}),
				k = function(e) {
					var t = e.children,
						n = Object(a.useState)(),
						r = Object(m.a)(n, 2),
						i = r[0],
						o = r[1],
						s = Object(a.useState)(!1),
						c = Object(m.a)(s, 2),
						u = c[0],
						l = c[1],
						d = Object(a.useState)(null),
						p = Object(m.a)(d, 2),
						b = p[0],
						h = p[1],
						f = Object(a.useState)(null),
						j = Object(m.a)(f, 2),
						x = j[0],
						v = j[1],
						w = function(e) {
							e.on("disconnect", (function(e) {
								console.log(e), v(null), o(null)
							})), e.on("accountsChanged", (function(e) {
								o(e[0]), h({
									type: "info",
									message: "Account Changed"
								})
							})), e.on("chainChanged", (function(e) {
								v(e)
							}))
						},
						B = function() {
							var e = Object(y.a)(A.a.mark((function e() {
								var t, n, a, r;
								return A.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!i) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return l(!0), e.prev = 3, t = new g.a(g.a.givenProvider), e.next = 7, M.connect();
										case 7:
											return n = e.sent, t = new g.a(n), w(n), e.next = 12, t.eth.getAccounts();
										case 12:
											return a = e.sent, e.next = 15, t.eth.getChainId();
										case 15:
											r = e.sent, o(a[0]), v(r), e.next = 24;
											break;
										case 20:
											e.prev = 20, e.t0 = e.catch(3), console.error(e.t0), h({
												type: "error",
												message: "Failed to connect"
											});
										case 24:
											l(!1);
										case 25:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[3, 20]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						k = function(e, t) {
							"clickaway" !== t && h(null)
						};
					return Object(a.useEffect)((function() {
						M.cachedProvider && B()
					}), []), Object(C.jsxs)(T.Provider, {
						value: {
							address: i,
							loading: u,
							connect: B,
							disconnect: function() {
								M.clearCachedProvider(), o(null), v(null)
							},
							chainId: x,
							setSnackbar: h
						},
						children: [t, b && Object(C.jsx)(O.a, {
							open: !!b,
							autoHideDuration: 4e3,
							onClose: k,
							children: Object(C.jsx)(S, {
								onClose: k,
								severity: null === b || void 0 === b ? void 0 : b.type,
								sx: {
									width: "100%"
								},
								children: null === b || void 0 === b ? void 0 : b.message
							})
						})]
					})
				},
				I = function() {
					return Object(a.useContext)(T)
				},
				W = Object(d.a)(p.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({
						position: "fixed",
						right: 48,
						top: 48
					}, t.breakpoints.down("md"), {
						display: "none"
					})
				})),
				E = Object(d.a)(p.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({
						display: "none",
						marginTop: -10,
						marginBottom: 48,
						width: "95%",
						marginLeft: "auto",
						marginRight: "auto"
					}, t.breakpoints.down("md"), {
						display: "block"
					})
				}));

			function Y(e) {
				var t = e.responsive,
					n = void 0 === t || t,
					a = I(),
					r = a.address,
					i = a.loading,
					o = a.connect,
					s = a.disconnect;
				return n ? Object(C.jsx)(W, {
					color: "secondary",
					variant: "contained",
					disabled: i,
					onClick: function() {
						return r ? s() : o()
					},
					children: r ? "Disconnect" : "Connect"
				}) : Object(C.jsx)(E, {
					color: "secondary",
					variant: "contained",
					disabled: i,
					onClick: function() {
						return r ? s() : o()
					},
					children: r ? "Disconnect" : "Connect"
				})
			}
			var Z = n(904),
				F = n(911),
				R = n.p + "static/media/FullLogo.e313bec7.png",
				Q = Object(d.a)("div")((function(e) {
					var t = e.theme;
					return Object(l.a)({
						textAlign: "center",
						paddingBottom: 24
					}, t.breakpoints.down("md"), {
						h5: {
							fontSize: 20,
							margin: 0
						}
					})
				})),
				U = Object(d.a)(Z.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({}, t.breakpoints.down("sm"), {
						flexDirection: "column",
						"> div": {
							marginLeft: 0,
							marginRight: 0
						}
					})
				}));

			function L() {
				return Object(C.jsxs)(Q, {
					children: [Object(C.jsx)("img", {
						src: R,
						alt: "",
						width: "100%",
						style: {
							marginTop: -48
						}
					}), Object(C.jsx)(Y, {
						responsive: !1
					}), Object(C.jsx)(F.a, {
						variant: "h6",
						marginTop: 3,
						children: "Pot O' Gold is a completely decentralized, transparent and autonomous lottery with a BUSD jackppot."
					}), Object(C.jsxs)(U, {
						container: !0,
						children: [Object(C.jsx)(Z.a, {
							item: !0,
							flexGrow: 1,
							marginRight: 1,
							marginTop: 3,
							alignItems: "center",
							children: Object(C.jsx)(p.a, {
								variant: "contained",
								color: "primary",
								fullWidth: !0,
								onClick: function(e) {
									e.preventDefault(), window.location.href = "https://LGOLDcat.money/"
								},
								children: "Home"
							})
						}), Object(C.jsx)(Z.a, {
							item: !0,
							flexGrow: 1,
							marginRight: 1,
							marginTop: 3,
							alignItems: "center",
							children: Object(C.jsx)(p.a, {
								variant: "contained",
								color: "primary",
								fullWidth: !0,
								onClick: function(e) {
									e.preventDefault(), window.location.href = "https://pancakeswap.finance/swap?outputCurrency=0x51626AD5346e7Be227D8341204a0447077963481"
								},
								children: "Swap"
							})
						})]
					})]
				})
			}
			var D = n(914),
				V = n(912),
				G = n(913),
				H = n(915),
				z = n(25),
				P = Object(d.a)("input")({
					fontSize: 24,
					fontWeight: 500,
					padding: "12px 90px 12px 16px",
					textAlign: "right",
					borderRadius: 0,
					border: "1px solid #555",
					background: "white",
					width: "100%",
					outline: "none",
					"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
						WebkitAppearance: "none",
						margin: 0,
						MozAppearance: "textfield"
					}
				});

			function J(e) {
				var t = e.value,
					n = e.max,
					a = e.onChange,
					r = void 0 === a ? function() {} : a;
				return Object(C.jsxs)(c.a, {
					position: "relative",
					children: [Object(C.jsx)(P, {
						type: "number",
						min: 0,
						max: n,
						value: t,
						onChange: function(e) {
							return r(e.target.value)
						}
					}), Object(C.jsx)(F.a, {
						fontSize: 20,
						position: "absolute",
						top: 9,
						right: 18,
						fontWeight: 500,
						color: "black",
						children: "LGOLD"
					})]
				})
			}
			var K = n(408),
				N = n(409),
				q = 3,
				X = "0x2ED8DbFd903454B0E2D1e3525E77D4e5795d502d",
				_ = "https://www.bscscan.com/address/0x2ED8DbFd903454B0E2D1e3525E77D4e5795d502d",
				$ = Object(a.createContext)({
					busdcontract: null,
					contract: null,
					web: null,
					wrongNetwork: !1,
					getBusdBalance: function() {
						return null
					},
					fromWei: function() {
						return null
					},
					toWei: function() {
						return null
					},
					getBusdApproved: function() {
						return null
					}
				}),
				ee = function(e) {
					var t = e.children,
						n = Object(a.useState)(),
						r = Object(m.a)(n, 2),
						i = r[0],
						o = r[1],
						s = Object(a.useState)(),
						c = Object(m.a)(s, 2),
						u = c[0],
						l = c[1],
						d = I(),
						p = d.chainId,
						b = d.setSnackbar,
						A = Object(a.useState)(!1),
						y = Object(m.a)(A, 2),
						h = y[0],
						f = y[1];
					Object(a.useEffect)((function() {
						if (p) {
							if (parseInt(p) !== q) return b({
								type: "error",
								message: "Wrong network"
							}), void f(!0);
							f(!1);
							var e = new g.a;
							e.setProvider(g.a.givenProvider), l(e);
							var t = new e.eth.Contract(N, X);
							o(t)
						}
					}), [p]);
					var j = new g.a;
					j.setProvider(g.a.givenProvider);
					var x = new j.eth.Contract(K, "0x51626AD5346e7Be227D8341204a0447077963481");
					var x2 = new j.eth.Contract(K, "0x3aC22795304A27edb04Cfe2475DCEf0c5C8B5539");
					return Object(C.jsx)($.Provider, {
						value: {
							web3: u,
							busdcontract: x,
							contract: i,
							wrongNetwork: h,
							getBusdBalance: function(e) {
								return x2.methods.balanceOf(e).call()
							},
							fromWei: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
								return parseFloat(g.a.utils.fromWei(e, t)).toFixed(3)
							},
							toWei: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
								return g.a.utils.toWei(e, t)
							},
							getBusdApproved: function(e) {
								return x.methods.allowance(e, X).call()
							}
						},
						children: t
					})
				},
				te = Object(d.a)(V.a)({
					background: "rgb(251 241 225)",
					marginBottom: 24
				}),
				ne = Object(d.a)(Z.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({}, t.breakpoints.down("sm"), {
						flexDirection: "column",
						"> div": {
							marginLeft: 0,
							marginRight: 0
						}
					})
				}));

			function ae() {
				var e = Object(a.useContext)($),
					t = e.busdcontract,
					n = e.contract,
					r = e.wrongNetwork,
					i = e.getBusdBalance,
					o = e.fromWei,
					s = e.toWei,
					u = e.getBusdApproved,
					l = e.web3,
					d = I(),
					b = d.address,
					h = d.chainId,
					f = Object(a.useState)(0),
					j = Object(m.a)(f, 2),
					x = j[0],
					v = j[1],
					O = Object(a.useState)({
						busd: 0,
						beans: 0,
						rewards: 0,
						approved: 0
					}),
					w = Object(m.a)(O, 2),
					T = w[0],
					B = w[1],
					S = Object(a.useState)(0),
					M = Object(m.a)(S, 2),
					k = M[0],
					W = M[1],
					E = Object(a.useState)(0),
					Y = Object(m.a)(E, 2),
					R = (Y[0], Y[1], Object(a.useState)(!1)),
					Q = Object(m.a)(R, 2),
					U = Q[0],
					L = Q[1],
					V = new URLSearchParams(Object(z.c)().search),
					P = function() {
						l && !r ? i(X).then((function(e) {
							v(o(e))
						})) : v(0)
					},
					K = function() {
						var e = Object(y.a)(A.a.mark((function e() {
							var t, a, s, c, d, p;
							return A.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (l && !r && b) {
											e.next = 3;
											break
										}
										return B({
											busd: 0,
											beans: 0,
											rewards: 0,
											approved: 0
										}), e.abrupt("return");
									case 3:
										return e.prev = 3, e.next = 6, Promise.all([i(b), n.methods.getMyEntries(b).call().catch((function(e) {
											return console.error("myminers", e), 0
										})), n.methods.getMyReferredAmount(b).call().catch((function(e) {
											return console.error("getMyReferredAmount", e), 0
										})), u(b)]);
									case 6:
										t = e.sent, a = Object(m.a)(t, 4), s = a[0], c = a[1], d = a[2], p = a[3], B({
											busd: o("".concat(s)),
											beans: c,
											rewards: d,
											approved: p
										}), e.next = 19;
										break;
									case 15:
										e.prev = 15, e.t0 = e.catch(3), console.error(e.t0), B({
											busd: 0,
											beans: 0,
											rewards: 0,
											approved: 0
										});
									case 19:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[3, 15]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();

				Object(a.useEffect)((function() {
					P()
				}), [l, h]), Object(a.useEffect)((function() {
					K()
				}), [b, l, h]);
				var N = function() {
						return g.a.utils.isAddress(V.get("ref")) ? V.get("ref") : "0xdF0833C041db53856380CF1e64CD6428A9e41D3d"
					},
					q = function() {
						var e = Object(y.a)(A.a.mark((function e() {
							var t, a;
							return A.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return L(!0), t = N(), a = s("".concat(k)), e.prev = 3, e.next = 6, n.methods.enterWithLGOLD(t, a).send({
											from: b,
											value: 0
										});
									case 6:
										e.next = 11;
										break;
									case 8:
										e.prev = 8, e.t0 = e.catch(3), console.error(e.t0);
									case 11:
										K(), P(), L(!1);
									case 14:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[3, 8]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					_ = function() {
						var e = Object(y.a)(A.a.mark((function e() {
							return A.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return L(!0), "0x2ED8DbFd903454B0E2D1e3525E77D4e5795d502d", e.prev = 2, e.next = 5, t.methods.approve("0x2ED8DbFd903454B0E2D1e3525E77D4e5795d502d", "1000000000000000000000000000000").send({
											from: b
										});
									case 5:
										e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
									case 10:
										L(!1);
									case 11:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[2, 7]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					ee = function() {
						var e = Object(y.a)(A.a.mark((function e() {
							var t;
							return A.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return L(!0), t = N(), e.prev = 2, e.next = 5, n.methods.PotOGoldStart().send({
											from: b
										});
									case 5:
										e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
									case 10:
										L(!1);
									case 11:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[2, 7]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					ae = function() {
						var e = Object(y.a)(A.a.mark((function e() {
							return A.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return L(!0), e.prev = 1, e.next = 4, n.methods.pickWinner().send({
											from: b
										});
									case 4:
										e.next = 9;
										break;
									case 6:
										e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
									case 9:
										K(), P(), L(!1);
									case 12:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 6]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
				return Object(C.jsxs)(te, {
					children: [U && Object(C.jsx)(G.a, {
						color: "secondary"
					}), Object(C.jsxs)(D.a, {
						children: [Object(C.jsxs)(Z.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(C.jsx)(F.a, {
								variant: "body1",
								children: "Lottery Value"
							}), Object(C.jsxs)(F.a, {
								variant: "h5",
								children: [x, " BUSD"]
							})]
						}), Object(C.jsxs)(Z.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(C.jsx)(F.a, {
								variant: "body1",
								children: "Wallet"
							}), Object(C.jsxs)(F.a, {
								variant: "h5",
								children: [T.busd, " LGOLD"]
							})]
						}), Object(C.jsxs)(Z.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(C.jsx)(F.a, {
								variant: "body1",
								children: "Your Entries"
							}), Object(C.jsxs)(F.a, {
								variant: "h5",
								children: [T.beans, " Entries"]
							})]
						}), Object(C.jsxs)(Z.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(C.jsx)(F.a, {
								variant: "body1",
								children: "Referral Count"
							}), Object(C.jsxs)(F.a, {
								variant: "h5",
								children: [T.rewards, " Referred"]
							})]
						}), Object(C.jsxs)(c.a, {
							paddingTop: 4,
							paddingBottom: 3,
							children: [Object(C.jsx)(c.a, {
								children: Object(C.jsx)(J, {
									max: +T.busd,
									value: k,
									onChange: function(e) {
										return function(e) {
											W(e)
										}(e)
									}
								})
							}), Object(C.jsx)(c.a, {
								marginTop: 3,
								marginBottom: 3,
								children: Object(C.jsx)(p.a, {
									variant: "contained",
									fullWidth: !0,
									disabled: r || !b || U || 0 != +T.approved,
									onClick: _,
									children: "Approve"
								})
							}), Object(C.jsx)(c.a, {
								marginTop: 3,
								marginBottom: 3,
								children: Object(C.jsx)(p.a, {
									variant: "contained",
									fullWidth: !0,
									disabled: r || !b || 0 === +k || U || 0 === +T.approved,
									onClick: q,
									children: "Enter Lottery"
								})
							}),  Object(C.jsxs)(ne, {
								container: !0,
								children: [Object(C.jsx)(Z.a, {
									item: !0,
									flexGrow: 1,
									marginRight: 1,
									marginTop: 3,
									children: Object(C.jsx)(p.a, {
										variant: "contained",
										color: "secondary",
										fullWidth: !0,
										disabled: r || !b || U,
										onClick: ee,
										children: "Start Lottery"
									})
								}), Object(C.jsx)(Z.a, {
									item: !0,
									flexGrow: 1,
									marginLeft: 1,
									marginTop: 3,
									children: Object(C.jsx)(p.a, {
										variant: "contained",
										color: "secondary",
										fullWidth: !0,
										disabled: r || !b || U,
										onClick: ae,
										children: "Pick Winner"
									})
								})]
							})]
						})]
					})]
				})
			}
			var re = Object(d.a)(V.a)({
					background: "rgb(255 252 248)",
					marginBottom: 24
				}),
				ie = [{
					label: "Daily Return",
					value: 8
				}, {
					label: "APR",
					value: "2,920"
				}, {
					label: "Burn Fee",
					value: 2
				}];

			function oe() {
				return Object(C.jsx)(re, {
					children: Object(C.jsxs)(D.a, {
						children: [Object(C.jsx)(F.a, {
							variant: "h5",
							borderBottom: "6px solid",
							paddingBottom: 1,
							children: "LGOLD Cat Details"
						}), Object(C.jsx)(c.a, {
							paddingTop: 2,
							children: ie.map((function(e) {
								return Object(C.jsxs)(Z.a, {
									container: !0,
									justifyContent: "space-between",
									children: [Object(C.jsx)(F.a, {
										variant: "body1",
										gutterBottom: !0,
										children: e.label
									}), Object(C.jsxs)(F.a, {
										gutterBottom: !0,
										children: [e.value, "%"]
									})]
								}, e.label)
							}))
						})]
					})
				})
			}
			var se = Object(d.a)(V.a)({
					background: "rgb(251 241 225)"
				}),
				ce = Object(d.a)("input")((function(e) {
					return {
						fontSize: 10,
						fontWeight: 300,
						padding: "10px 12px",
						borderRadius: 0,
						border: "1px solid #555",
						background: "white",
						width: "100%",
						outline: "none",
						color: e.theme.palette.primary.main
					}
				}));

			function ue(e) {
				var t = e.address,
					n = "".concat(window.origin, "/lottery/?ref=").concat(t);
				return Object(C.jsx)(se, {
					children: Object(C.jsxs)(D.a, {
						style: {
							paddingLeft: 8,
							paddingRight: 8
						},
						children: [Object(C.jsx)(F.a, {
							gutterBottom: !0,
							variant: "h5",
							textAlign: "center",
							children: "Referral Link"
						}), Object(C.jsx)(ce, {
							value: t ? n : "",
							readOnly: !0
						}), Object(C.jsx)(F.a, {
							textAlign: "center",
							variant: "body2",
							marginTop: 2,
							paddingX: 3,
							children: "Earn 12% of the LGOLD from anyone who uses your referral link"
						})]
					})
				})
			}

			function le() {
				return Object(C.jsxs)(Z.a, {
					container: !0,
					justifyContent: "center",
					spacing: 2,
					marginTop: 4,
					children: [Object(C.jsx)(Z.a, {
						item: !0,
						children: Object(C.jsx)("a", {
							href: _,
							target: "__blank",
							children: Object(C.jsx)("img", {
								src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADWElEQVRo3u2av3HbMBSHPycunDsXcsWU4gSmJzA9ge0FaHkCyRPEnkDSBOJxActVSjFVylBdOsglOzYq0qUg7FAQSIkU+Cd3/t2pEIgD34cH4AEPhA91S0d1NWzZngP0lOIoFkHSaRBp+A1wCbgFVVdABLwAYSyCVesglu31gQFwB/QrNhMBU2B+iLcqgUiAbxLClBIJNKkCVBrEsr1HYMj2+DelFXAfiyCsBUTOgRng1ASgahKL4MEoiGV7LvBMfV7IUwRc7TPUPu0BMQAWLUBA6v2FZXs7310IkhlObcoh7chCfS6A6AM/gZOWQQC+np6d99fJ8iWvQpFHZrQznPI0sGzvphSInBduA8b5gB2L4OjtB9ySxhSdZnnzZWtoyYrfaWBIxSK4WCfLDaPXyfL36dn5F/QdeQL8WSfLUH2g88iIbg0pVUOdV3Qgd21bukM90s7OB5GTqW/wpREQyl9isN2hWnCs/L82CLAVkS3bGwFjA+33LNtzs/sxdWjdGAKZ6rYVsQgmhtrf0jtIzomuqlZ1GZxRpAWhmbhhSk+qx7Nz5HzPRhJgDrzK/5ekC0S/IQg/FsGjWpgF2deQq1gEkVpo2d6C+r3qxyK41z3YuY1XFOogpH40CWHZ3kCeViuBtCUVwkFZxv8HkIkC0UOzMz8u12ajSoCHWAS+Uv6MJm+QBVm1bXlGIelw2rDJsr0ZmwtKqAN5pSPSpYIkxEApjnQgIWnSrVOSc2KsgVhlg+L7ZC+bEDOgaE+IBfqM5oa96qo1bxBkugPCAX6RnxDciFsqSG6WwqAeSM/pfgHESEL0c6okKJ2+sfzGIvAt2xtT41G3aCsvU1DqyqTTVuZeFxCnHKaECkt5xgu7IACe1AJdQJxQLdseSoBS9xwyrzxm/+S4r7sc0iax5URT870J+khbSRLgG+V2zAnp/NrqqMJsvHwZpGv2CgOSCY5hSYA33cYimOse1HYZqhjfI40FQ6ofwArvS+q81e2RJjOuOTypkXugqgVEzi1XGu8aajaMRXC1q9Kht7ou6WrzdiXdM9kx7OGJSiByuIzYfZduQk+6JEOeSp0QM8ueUyNABFyUgYDu3bNXjlOd+fLh0EBr+lsUl38JO0dTLZGGR8ASg9+ifKhr+gvf9S3/pZ723AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",
								alt: "",
								width: 48,
								height: 48
							})
						})
					}), Object(C.jsx)(Z.a, {
						item: !0,
						children: Object(C.jsx)("a", {
							href: "https://t.me/LGOLDCatMoney",
							target: "__blank",
							children: Object(C.jsx)("img", {
								src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADW0lEQVRo3u2aP3KbQBSHvyQuPRNUqTScQOQG+ARWLkCsE0Tp0sU6QewTWOYCQSewbmB0AnBJtylUpEuxawVhFnYRCM3EvxmPR+Lt4316+/cBvOm09K5rh2Mv9AEfcDUmGZDkaZScFMjYCx1gClyp/6YSwBpYAXGeRmIQkLEXusAPFbxz4O8hgBhY5GmUHQVEZWCuIPrQAri1zZAViOr/v9D3/66UAbM8jdamDd5bQFwDT0eAQN3jUd3TSEYZGXvhPWDstGMt8zSaNRl9OHEIAP98NHG3YrNqDTL2wjnwfUCIIszzVmwSnYG2a429MAAehyYo6ZNuIa0EUVPssQa2jTIFI8oXdLPW/AQhUDHNqy68yohasdOhI26QV94BVGWkrxW7SWsL21cx7oEUNoDHUgZ8A0Z5Gl0Ct4btpirWnc7KBhy+ATRRDNxVbEF+G7Z3VKxLHchVj8EL4A65Umcam48W/q7qQKY9AKyBhzyNlga2voXfoPhhB6J2tl1J8K/7JMULqm87mqy4Fvdwxl7ov/gvDvYuQDJghpweZxUQN8ip/VrT3gZkz/7sACdFLZHdZ111UWX7Xv1YCRWzk9oS2cpHZv7VGLFRBjzQcJpTWXiZ9xPgUmPvHBBLK5AY+evHdUalLDRBQLuufdEGJAE+mxQHSlkwgQCYtADZyQbEBMBFZiGwhIB2Xeu5DcgUuTVIkGMjLmZHHcJ+lAIyOqYqBYZ2lSqCZIZtfPX3U0EJ5IznluyMIVQm22gXcxEkaeHI13wfW2QC2k/9u5h3C2LHtVi3vDttUNDmJsWYy+eRuCMQH1mX8g3tLwzttLGWQVbmfoxh5ga2bgv/e7FWZUR0COMgJ4XHhgEdWPoV1GVEzfWxqTcLBcBTVXYsx9KLluV1qerMvugBBPTZCSz9COQBbU+6utYN/RchlsiV+St2q/oiT6Ob8pe6lf0W+EK/ta3rFm0yNAWKupKpj6w2npK0JVPt8xHVwGZ17luzukW7thq/FZvkfDRx6eYYfIiWeRrVTkKNz0e2YrMaGMZo82n8DFE9Brs/MsTMsIxk/TA0UDBuzwAZ8jSamDZo7FpFbcUmOx9NHoA/HHgQqtECmYnMptH/+8JABZBDu1c4UMEP+wpHDZjPAC/VvOnU9BdAxzlbow3rDQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",
								alt: "",
								width: 48,
								height: 48
							})
						})
					}), Object(C.jsx)(Z.a, {
						item: !0,
						children: Object(C.jsx)("a", {
							href: "https://twitter.com/LGOLDCatBUSD",
							target: "__blank",
							children: Object(C.jsx)("img", {
								src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD0UlEQVRo3u2aMVbjOBjHf7BTbMF761Ru4247zAnGdNMRLuBJTsBwgiEnAE4A+AKEE+DpttvkBPJ0484UKbbbQjKjcaRYsmNIMf/3eM/Ykvz9pE9fPkmG39ovHey6wTBKAyBWf4GhSA4UpciKvQMJo3QCfAQmwNixWqWgnoBFKbLqXUBUz0+BCw/jt0HdA7ddR6oTSBilU+Aas+v01Ry48R0hL5AwSsfAHZAMAKCrAGalyHLXCn94QCTAM/D3wBAgR3p6NDp+WVerf3YGolzpEfjzDSB0fToaHY/X1eqpN4iCuHtjAF2xC8xWEOVOj+8IocMcrKtVbitgnewqvAqGiUxddWoLAIdbKj3uGQTAo+pgNxA1L5KBjCmAGRCVIjsAToEbQ7nKcC9A/n5tyOhaYZQK7L/WeQ/Iy1JkJqMJozRGhvcCeFBGf7W0EzUzgENDg9MtEEUpslNkOuGrmQ0CoBTZshTZqBTZieqsiy1tbQAeuhTStFAvnWF2B5vmpcic4FX28FV1VmEpNlXlzCBqeMfY9aL14CVwjtmXm3KCUO0WpcjOge8ttkysIMDnlvecNV66AKIWQ73XHmGUXmOZ1DZbmyBJS+VYjZoOUylXi5CZq5fRFn1xKBProfhD86FDA3fASfOm6vUr4Er5b+zYXh/FyMDwM/xq2e02VciweK9GYedytKPWvBTZFfzqWoFDxQXShR6GgPCwo9Zf9YXuWrFDxUSNRDEgiIsdG2UPPSoBjNXQD6mzLpV8QUAmbnGHeq3SgsSbgATA80AjM+laUQcpOsBY0+qOuvAsX9UX+mT3AQFDBtpHYZRe4b8/tqov9BFZejays3W8mhu+owFa57+CqA2xwqORZIeu1XU1mm+ANB84agKIMEqvu07+MErv6BapfklGmyCt+0cGBcgk78J3dBTEtEsHoNZGtTaWui3LXJNyZM6TewAEyDk26QgBcFKKbFn/88FQ4AH7KnGJDHnfkPMp77DWSBSET2c1lesQNpAbZAQJDM/GwC0y+/UFmKh2kx4AtebNG7ZdlC+0r9CWyDmVm9xKpTEx8gAoof8ZSq1cbYC0gyhD/mX4hZGvKuTcKJoPtuVaM9w2Ft5SlzaXtm5ir6vVj6PRcUm/yLJL3Zcim9sebt2NX1er5dHo+PsewLQurVvPR/YAxml/wOnE6h1hnDc5fA9DY2SCNx4YoEJO7HvXCs6HofAaAB6A/xju2GEBnPukPNDvg4ExMpWZ7hDg1hegN4gGFCiYM/xHaYnM7RZ9V5s7/ahG+6CmBvpoMPwFmTEv+35/8lv7rP8Bk+NXaD4vbEEAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAEnRFWHRFWElGOk9yaWVudGF0aW9uADGEWOzvAAAAAElFTkSuQmCC",
								alt: "",
								width: 48,
								height: 48
							})
						})
					}), Object(C.jsx)(Z.a, {
						item: !0,
						children: Object(C.jsx)("a", {
							href: "https://discord.gg/Q4SSpzFCH2",
							target: "__blank",
							children: Object(C.jsx)("img", {
								src: "data:image/png;base64,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",
								alt: "",
								width: 48,
								height: 48
							})
						})
					})]
				})
			}
			var de = n(909),
				pe = n(899),
				be = n(410),
				Ae = n(411),
				ye = n.n(Ae),
				me = n(412),
				he = n.n(me),
				fe = {
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					maxWidth: 600,
					maxHeight: 800,
					bgcolor: "background.paper",
					boxShadow: 24,
					px: 4,
					py: 6,
					borderRadius: 8,
					overflow: "auto"
				};

			function ge() {
				var e = a.useState(!1),
					t = Object(m.a)(e, 2),
					n = t[0],
					r = t[1],
					i = function() {
						return r(!1)
					};
				return Object(C.jsxs)(c.a, {
					pt: 4,
					children: [Object(C.jsx)(p.a, {
						variant: "contained",
						fullWidth: !0,
						onClick: function() {
							return r(!0)
						},
						startIcon: Object(C.jsx)(ye.a, {}),
						children: "FAQs"
					}), Object(C.jsx)(pe.a, {
						open: n,
						onClose: i,
						"aria-labelledby": "modal-modal-title",
						"aria-describedby": "modal-modal-description",
						children: Object(C.jsx)(c.a, {
							sx: fe,
							className: "scrollbox",
							children: Object(C.jsxs)(Z.a, {
								container: !0,
								spacing: 2,
								direction: "column",
								position: "relative",
								children: [be.map((function(e, t) {
									return Object(C.jsxs)(Z.a, {
										item: !0,
										children: [Object(C.jsxs)(F.a, {
											variant: "h5",
											gutterBottom: !0,
											children: [t + 1, ": ", e.q]
										}), Object(C.jsx)(F.a, {
											variant: "body1",
											children: e.a
										})]
									}, e.q)
								})), Object(C.jsx)(de.a, {
									color: "primary",
									style: {
										position: "absolute",
										right: -25,
										top: -24
									},
									onClick: i,
									children: Object(C.jsx)(he.a, {})
								})]
							})
						})
					})]
				})
			}
			var je = Object(d.a)(V.a)({
					background: "rgb(255 252 248)",
					marginBottom: 24
				}),
				xe = [{
					label: "•Enter with BUSD or LGOLD."
				},{
					label: "•After 7 days any user can pick winner. "
				},{
					label: "•Earn instantly from a 4 tier referral system. "
				}];

			function ve() {
				return Object(C.jsx)(je, {
					children: Object(C.jsxs)(D.a, {
						children: [Object(C.jsx)(F.a, {
							variant: "h5",
							borderBottom: "6px solid",
							paddingBottom: 1,
							children: "How to Play"
						}), Object(C.jsxs)(c.a, {
							paddingTop: 2,
							children: [xe.map((function(e) {
								return Object(C.jsx)(Z.a, {
									container: !0,
									justifyContent: "space-between",
									children: Object(C.jsx)(F.a, {
										variant: "body1",
										gutterBottom: !0,
										children: e.label
									})
								}, e.label)
							})), Object(C.jsx)(F.a, {
								children: "•For more details read the FAQ below."
							})]
						})]
					})
				})
			}
			var Oe = Object(d.a)("div")((function(e) {
				var t = e.theme;
				return Object(l.a)({
					maxWidth: 400,
					margin: "0 auto"
				}, t.breakpoints.down("sm"), {
					maxWidth: "100%"
				})
			}));

			function we() {
				var e = I().address;
				return Object(C.jsxs)(Oe, {
					children: [Object(C.jsx)(Y, {}), Object(C.jsx)(L, {}), Object(C.jsx)(ve, {}), Object(C.jsx)(ae, {}), Object(C.jsx)(oe, {}), Object(C.jsx)(ue, {
						address: e
					}), Object(C.jsx)(ge, {}), Object(C.jsx)(le, {})]
				})
			}
			var Ce = function() {
					return Object(C.jsx)(u.a, {
						children: Object(C.jsx)(c.a, {
							paddingY: 6,
							paddingX: 2,
							children: Object(C.jsx)(we, {})
						})
					})
				},
				Te = function(e) {
					e && e instanceof Function && n.e(3).then(n.bind(null, 917)).then((function(t) {
						var n = t.getCLS,
							a = t.getFID,
							r = t.getFCP,
							i = t.getLCP,
							o = t.getTTFB;
						n(e), a(e), r(e), i(e), o(e)
					}))
				},
				Be = n(413),
				Se = n(905),
				Me = Object(Be.a)({
					palette: {
						primary: {
							main: "#17215E"
						},
						secondary: {
							main: "#f4b52d"
						},
						text: {
							primary: "#17215E"
						}
					},
					typography: {
						fontFamily: "Montserrat",
						body1: {
							fontSize: 20
						},
						body2: {
							fontSize: 16
						},
						allVariants: {
							color: "#17215E"
						},
						h4: {
							fontWeight: 600,
							fontSize: 32
						},
						h5: {
							fontSize: 24,
							fontWeight: 500
						}
					},
					components: {
						MuiCard: {
							styleOverrides: {
								root: {
									boxShadow: "6px 6px 20px 6px #00000096",
									borderRadius: 20
								}
							}
						},
						MuiCardContent: {
							styleOverrides: {
								root: {
									padding: "12px 24px"
								}
							}
						},
						MuiButton: {
							styleOverrides: {
								root: {
									borderRadius: 8,
									fontWeight: 400,
									fontSize: "1.2rem",
									padding: "10px",
									minWidth: 138
								},
								contained: {
									boxShadow: "6px 6px 20px 6px #00000096"
								},
								containedSecondary: {
									color: "#17215E"
								}
							}
						}
					}
				});

			function ke(e) {
				var t = e.children;
				return Object(C.jsx)(Se.a, {
					theme: Me,
					children: t
				})
			}
			o.a.render(Object(C.jsxs)(r.a.StrictMode, {
				children: [Object(C.jsx)(s.a, {}), Object(C.jsx)(ke, {
					children: Object(C.jsx)(k, {
						children: Object(C.jsx)(ee, {
							children: Object(C.jsx)(Ce, {})
						})
					})
				})]
			}), document.getElementById("root")), Te()
		}
	},
	[
		[856, 1, 2]
	]
]);
//# sourceMappingURL=main.ad4f2c66.chunk.js.map
