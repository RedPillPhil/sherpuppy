(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
	[0], {
		408: function(e) {
			e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"usertotalEntries","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"enter","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"usertotalEntries","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"usertotalEntries1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
		},
		409: function(e) {
			e.exports = JSON.parse('[{"q":"What happens when I buy cats?","a":"When you buy cats, your BNB gets locked into the Lucky Cat smart contract and rewards you with 8% daily return every day."},{"q":"Can I take my initial BNB back?","a":"Over Time! Cats are not bought, Cats are fed and therefore they can\'t be sold. Once Cats are bought they work for you indefinitely, providing you with an unlimited amount of BNB at a starting rate of 8% daily."},{"q":"How much are my fees?","a":"There is a small 1% dev fee in order to pay for marketing costs and developing the Lucky Cat ecosystem"},{"q":"When is the best time to Buy Cats?","a":"Always! No matter when you hire miners, you will begin with a return rate of 8% daily."},{"q":"How often should I re-bake (compound)?","a":"WE recommend that you compound at least once per day but you are free to do so as often as you wish."},{"q":"How is Lucky Cat sustainable?","a":"Lucky Cat is sustained by continued community support, just as every other crypto coin, token or project. The difference is that since there is no token, there is no price to dump. As long as BNB is in the contract, there will be rewards!"},{"q":"How to use Lucky Cat on my phone?","a":"You can either use an app with a dapp browser and choose the Metamask/Injected option or simply use any browser that you want and choose WalletConnect to connect to your wallet\'s app on your phone."},{"q":"Is it better to feed cats or pet cats?","a":"By design, feeding will be more profitable than petting in the long-term."},{"q":"How do referrals work?","a":"Once your BSC wallet is connected to the BNB Miner website, you will notice your referral address appear at the bottom of the page. When a new user hires miners after clicking your personal referral link, the contract will send a BNB value equal to 12% instantly to your Cats. Be smart, use it to feed cats and build yourself a stream of income."},{"q":"When did Lucky Cat launch?","a":"It launched 4/9/2022."}]')
		},
		428: function(e, t, n) {},
		441: function(e, t) {},
		444: function(e, t) {},
		446: function(e, t) {},
		450: function(e, t) {},
		475: function(e, t) {},
		477: function(e, t) {},
		486: function(e, t) {},
		488: function(e, t) {},
		498: function(e, t) {},
		500: function(e, t) {},
		615: function(e, t) {},
		617: function(e, t) {},
		624: function(e, t) {},
		625: function(e, t) {},
		643: function(e, t) {},
		651: function(e, t) {},
		658: function(e, t) {},
		706: function(e, t) {},
		731: function(e, t) {},
		764: function(e, t) {},
		837: function(e, t) {},
		855: function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n(0),
				r = n.n(a),
				i = n(80),
				c = n.n(i),
				o = n(905),
				s = (n(428), n(906)),
				u = n(237),
				l = n(16),
				d = n(893),
				A = n(909),
				b = n(3),
				p = n.n(b),
				h = n(7),
				j = n(20),
				g = n(394),
				m = n(63),
				f = n.n(m),
				y = n(396),
				x = n.n(y),
				O = n(413),
				v = n(91),
				w = n(900),
				B = n(1),
				C = Object(a.createContext)({
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
				S = {
					walletconnect: {
						package: O.a,
						options: {
							rpc: {
								3: "https://ropsten.infura.io/v3/"
							},
							network: "Ropsten"
						}
					}
				},
				k = Object(a.forwardRef)((function(e, t) {
					return Object(B.jsx)(w.a, Object(g.a)({
						elevation: 6,
						ref: t,
						variant: "filled"
					}, e))
				})),
				I = new x.a({
					cacheProvider: !0,
					providerOptions: S
				}),
				W = function(e) {
					var t = e.children,
						n = Object(a.useState)(),
						r = Object(j.a)(n, 2),
						i = r[0],
						c = r[1],
						o = Object(a.useState)(!1),
						s = Object(j.a)(o, 2),
						u = s[0],
						l = s[1],
						d = Object(a.useState)(null),
						A = Object(j.a)(d, 2),
						b = A[0],
						g = A[1],
						m = Object(a.useState)(null),
						y = Object(j.a)(m, 2),
						x = y[0],
						O = y[1],
						w = function(e) {
							e.on("disconnect", (function(e) {
								console.log(e), O(null), c(null)
							})), e.on("accountsChanged", (function(e) {
								c(e[0]), g({
									type: "info",
									message: "Account Changed"
								})
							})), e.on("chainChanged", (function(e) {
								O(e)
							}))
						},
						S = function() {
							var e = Object(h.a)(p.a.mark((function e() {
								var t, n, a, r;
								return p.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!i) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return l(!0), e.prev = 3, t = new f.a(f.a.givenProvider), e.next = 7, I.connect();
										case 7:
											return n = e.sent, t = new f.a(n), w(n), e.next = 12, t.eth.getAccounts();
										case 12:
											return a = e.sent, e.next = 15, t.eth.getChainId();
										case 15:
											r = e.sent, c(a[0]), O(r), e.next = 24;
											break;
										case 20:
											e.prev = 20, e.t0 = e.catch(3), console.error(e.t0), g({
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
						W = function(e, t) {
							"clickaway" !== t && g(null)
						};
					return Object(a.useEffect)((function() {
						I.cachedProvider && S()
					}), []), Object(B.jsxs)(C.Provider, {
						value: {
							address: i,
							loading: u,
							connect: S,
							disconnect: function() {
								I.clearCachedProvider(), c(null), O(null)
							},
							chainId: x,
							setSnackbar: g
						},
						children: [t, b && Object(B.jsx)(v.a, {
							open: !!b,
							autoHideDuration: 4e3,
							onClose: W,
							children: Object(B.jsx)(k, {
								onClose: W,
								severity: null === b || void 0 === b ? void 0 : b.type,
								sx: {
									width: "100%"
								},
								children: null === b || void 0 === b ? void 0 : b.message
							})
						})]
					})
				},
				E = function() {
					return Object(a.useContext)(C)
				},
				T = Object(d.a)(A.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({
						position: "fixed",
						right: 48,
						top: 48
					}, t.breakpoints.down("md"), {
						display: "none"
					})
				})),
				M = Object(d.a)(A.a)((function(e) {
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

			function Z(e) {
				var t = e.responsive,
					n = void 0 === t || t,
					a = E(),
					r = a.address,
					i = a.loading,
					c = a.connect,
					o = a.disconnect;
				return n ? Object(B.jsx)(T, {
					color: "secondary",
					variant: "contained",
					disabled: i,
					onClick: function() {
						return r ? o() : c()
					},
					children: r ? "Disconnect" : "Connect"
				}) : Object(B.jsx)(M, {
					color: "secondary",
					variant: "contained",
					disabled: i,
					onClick: function() {
						return r ? o() : c()
					},
					children: r ? "Disconnect" : "Connect"
				})
			}
			var R = n(903),
				Y = n(910),
				Q = n.p + "static/media/FullLogo.e313bec7.png",
				F = Object(d.a)("div")((function(e) {
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
				D = Object(d.a)(R.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({}, t.breakpoints.down("sm"), {
						flexDirection: "column",
						"> div": {
							marginLeft: 0,
							marginRight: 0
						}
					})
				}));

			function V() {
				return Object(B.jsxs)(F, {
					children: [Object(B.jsx)("img", {
						src: Q,
						alt: "",
						width: "100%",
						style: {
							marginTop: -48
						}
					}), Object(B.jsx)(Z, {
						responsive: !1
					}), Object(B.jsx)(Y.a, {
						variant: "h6",
						marginTop: 2,
						children: "Lucky Cat has the highest rewards and lowest fees."
					}), Object(B.jsxs)(D, {
						container: !0,
						children: [Object(B.jsx)(R.a, {
							item: !0,
							flexGrow: 1,
							marginRight: 1,
							marginTop: 3,
							alignItems: "center",
							children: Object(B.jsx)(A.a, {
								variant: "contained",
								color: "primary",
								fullWidth: !0,
								onClick: function(e) {
									e.preventDefault(), window.location.href = "https://luckycat.money/"
								},
								children: "Home"
							})
						}), Object(B.jsx)(R.a, {
							item: !0,
							flexGrow: 1,
							marginRight: 1,
							marginTop: 3,
							alignItems: "center",
							children: Object(B.jsx)(A.a, {
								variant: "contained",
								color: "primary",
								fullWidth: !0,
								onClick: function(e) {
									e.preventDefault(), window.location.href = "https://pancakeswap.finance/swap"
								},
								children: "Swap"
							})
						})]
					})]
				})
			}
			var U = n(913),
				L = n(911),
				G = n(912),
				H = n(914),
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
				return Object(B.jsxs)(s.a, {
					position: "relative",
					children: [Object(B.jsx)(P, {
						type: "number",
						min: 0,
						max: n,
						value: t,
						onChange: function(e) {
							return r(e.target.value)
						}
					}), Object(B.jsx)(Y.a, {
						fontSize: 24,
						position: "absolute",
						top: 9,
						right: 18,
						fontWeight: 500,
						color: "black",
						children: "BNB"
					})]
				})
			}
			var N = n(408),
				q = 3,
				K = "0xfff5361f6b97eb2225208665f973cef019a14c13",
				X = "https://www.bscscan.com/address/0xb50e74A6b82F59c4058b5D798E3D9C9D9B8c6e16",
				_ = Object(a.createContext)({
					contract: null,
					web: null,
					wrongNetwork: !1,
					getBnbBalance: function() {
						return null
					},
					fromWei: function() {
						return null
					},
					toWei: function() {
						return null
					}
				}),
				$ = function(e) {
					var t = e.children,
						n = Object(a.useState)(),
						r = Object(j.a)(n, 2),
						i = r[0],
						c = r[1],
						o = Object(a.useState)(),
						s = Object(j.a)(o, 2),
						u = s[0],
						l = s[1],
						d = E(),
						A = d.chainId,
						b = d.setSnackbar,
						p = Object(a.useState)(!1),
						h = Object(j.a)(p, 2),
						g = h[0],
						m = h[1];
					Object(a.useEffect)((function() {
						if (A) {
							if (parseInt(A) !== q) return b({
								type: "error",
								message: "Wrong network"
							}), void m(!0);
							m(!1);
							var e = new f.a;
							e.setProvider(f.a.givenProvider), l(e);
							var t = new e.eth.Contract(N, K);
							c(t)
						}
					}), [A]);
					return Object(B.jsx)(_.Provider, {
						value: {
							web3: u,
							contract: i,
							wrongNetwork: g,
							getBnbBalance: function(e) {
								return u.eth.getBalance(e)
							},
							fromWei: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
								return parseFloat(f.a.utils.fromWei(e, t)).toFixed(5)
							},
							toWei: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
								return f.a.utils.toWei(e, t)
							}
						},
						children: t
					})
				},
				ee = Object(d.a)(L.a)({
					background: "rgb(251 241 225)",
					marginBottom: 24
				}),
				te = Object(d.a)(R.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({}, t.breakpoints.down("sm"), {
						flexDirection: "column",
						"> div": {
							marginLeft: 0,
							marginRight: 0
						}
					})
				}));

			function ne() {
				var e = Object(a.useContext)(_),
					t = e.contract,
					n = e.wrongNetwork,
					r = e.getBnbBalance,
					i = e.fromWei,
					c = e.toWei,
					o = e.web3,
					u = E(),
					l = u.address,
					d = u.chainId,
					b = Object(a.useState)(0),
					g = Object(j.a)(b, 2),
					m = g[0],
					y = g[1],
					x = Object(a.useState)({
						bnb: 0,
						userentries: 0,
						rewards: 0
					}),
					O = Object(j.a)(x, 2),
					v = O[0],
					w = O[1],
					C = Object(a.useState)(0),
					S = Object(j.a)(C, 2),
					k = S[0],
					I = S[1],
					W = Object(a.useState)(0),
					T = Object(j.a)(W, 2),
					M = (T[0], T[1], Object(a.useState)(!1)),
					Z = Object(j.a)(M, 2),
					Q = Z[0],
					F = Z[1],
					D = new URLSearchParams(Object(z.c)().search),
					V = function() {
						o && !n ? r(K).then((function(e) {
							y(i(e))
						})) : y(0)
					},
					L = function() {
						var e = Object(h.a)(p.a.mark((function e() {
							var a, c, s, u, d;
							return p.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (o && !n && l) {
											e.next = 3;
											break
										}
										return w({
											bnb: 0,
											userentries: 0,
											rewards: 0
										}), e.abrupt("return");
									case 3:
										return e.prev = 3, e.next = 6, Promise.all([r(l), t.methods.usertotalEntries(l).call().catch((function(e) {
											return console.error("usertotalEntries", e), 0
										})), t.methods.usertotalEntries(l).call().catch((function(e) {
											return console.error("usertotalEntries", e), 0
										}))]);
									case 6:
										a = e.sent, c = Object(j.a)(a, 3), s = c[0], u = c[1], d = c[2], w({
											bnb: i("".concat(s)),
											userentries: u,
											rewards: i("".concat(d))
										}), e.next = 18;
										break;
									case 14:
										e.prev = 14, e.t0 = e.catch(3), console.error(e.t0), w({
											bnb: 0,
											userentries: 0,
											rewards: 0
										});
									case 18:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[3, 14]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
				Object(a.useEffect)((function() {
					V()
				}), [o, d]), Object(a.useEffect)((function() {
					L()
				}), [l, o, d]);
				var P = function() {
						return f.a.utils.isAddress(D.get("ref")) ? D.get("ref") : "0xa09b260809915dA08f831A53da431Aa3c1d03618"
					},
					N = function() {
						var e = Object(h.a)(p.a.mark((function e() {
							var n;
							return p.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return F(!0), n = P(), e.prev = 2, e.next = 5, t.methods.enter(n).send({
											from: l,
											value: c("".concat(k))
										});
									case 5:
										e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
									case 10:
										L(), V(), F(!1);
									case 13:
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
					q = function() {
						var e = Object(h.a)(p.a.mark((function e() {
							return p.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return F(!0), e.prev = 1, e.next = 4, t.methods.lotteryStart().send({
											from: l
										});
									case 4:
										e.next = 9;
										break;
									case 6:
										e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
									case 9:
										L(), V(), F(!1);
									case 12:
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
					X = function() {
						var e = Object(h.a)(p.a.mark((function e() {
							return p.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return F(!0), e.prev = 1, e.next = 4, t.methods.pickWinner().send({
											from: l
										});
									case 4:
										e.next = 9;
										break;
									case 6:
										e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
									case 9:
										L(), V(), F(!1);
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
				return Object(B.jsxs)(ee, {
					children: [Q && Object(B.jsx)(G.a, {
						color: "secondary"
					}), Object(B.jsxs)(U.a, {
						children: [Object(B.jsxs)(R.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(B.jsx)(Y.a, {
								variant: "body1",
								children: "Lottery Value"
							}), Object(B.jsxs)(Y.a, {
								variant: "h5",
								children: [m, " BNB"]
							})]
						}), Object(B.jsxs)(R.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(B.jsx)(Y.a, {
								variant: "body1",
								children: "Wallet"
							}), Object(B.jsxs)(Y.a, {
								variant: "h5",
								children: [v.bnb, " BNB"]
							})]
						}), Object(B.jsxs)(R.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(B.jsx)(Y.a, {
								variant: "body1",
								children: "My Entries"
							}), Object(B.jsxs)(Y.a, {
								variant: "h5",
								children: [v.userentries, " "]
							})]
						}), Object(B.jsxs)(R.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(B.jsx)(Y.a, {
								variant: "body1",
								children: "Total Entries"
							}), Object(B.jsxs)(Y.a, {
								variant: "h5",
								children: [v.userentries, " "]
							})]
						}), Object(B.jsxs)(R.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(B.jsx)(Y.a, {
								variant: "body1",
								children: "My total referred"
							}), Object(B.jsxs)(Y.a, {
								variant: "h5",
								children: [v.userentries, " "]
							})]
						}), Object(B.jsxs)(R.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(B.jsx)(Y.a, {
								variant: "body1",
								children: "Ticket price 0.01 BNB, Confirm by typing 0.01 below. *Any other value will cause the transaction to fail!*"
							}), Object(B.jsxs)(Y.a, {
								variant: "h5",
								children: [" "]
							})]
						}), , Object(B.jsxs)(s.a, {
							paddingTop: 4,
							paddingBottom: 3,
							children: [Object(B.jsx)(s.a, {
								children: Object(B.jsx)(J, {
									max: +v.bnb,
									value: k,
									onChange: function(e) {
										return function(e) {
											I(e)
										}(e)
									}
								})
							}), Object(B.jsx)(s.a, {
								marginTop: 3,
								marginBottom: 3,
								children: Object(B.jsx)(A.a, {
									variant: "contained",
									fullWidth: !0,
									disabled: n || !l || 0 === +k || Q,
									onClick: N,
									children: "Buy Lottery Entry"
								})
							}), Object(B.jsx)(H.a, {}), Object(B.jsxs)(R.a, {
								container: !0,
								justifyContent: "space-between",
								alignItems: "center",
								mt: 3,
								children: [Object(B.jsx)(Y.a, {
									variant: "body1",
									fontWeight: "bolder",
									children: "Your Rewards"
								}), Object(B.jsxs)(Y.a, {
									variant: "h5",
									fontWeight: "bolder",
									children: [v.rewards, " BNB"]
								})]
							}), Object(B.jsxs)(te, {
								container: !0,
								children: [Object(B.jsx)(R.a, {
									item: !0,
									flexGrow: 1,
									marginRight: 1,
									marginTop: 3,
									children: Object(B.jsx)(A.a, {
										variant: "contained",
										color: "secondary",
										fullWidth: !0,
										disabled: n || !l || Q,
										onClick: q,
										children: "Start Lottery"
									})
								}), Object(B.jsx)(R.a, {
									item: !0,
									flexGrow: 1,
									marginLeft: 1,
									marginTop: 3,
									children: Object(B.jsx)(A.a, {
										variant: "contained",
										color: "secondary",
										fullWidth: !0,
										disabled: n || !l || Q,
										onClick: X,
										children: "End Lottery"
									})
								})]
							})]
						})]
					})]
				})
			}
			var ae = Object(d.a)(L.a)({
					background: "rgb(255 252 248)",
					marginBottom: 24
				}),
				re = [{
					label: "Feed your cats, six times a week."
				}, {
					label: "Pet your cats, one time a week."
				}];

			function ie() {
				return Object(B.jsx)(ae, {
					children: Object(B.jsxs)(U.a, {
						children: [Object(B.jsx)(Y.a, {
							variant: "h5",
							borderBottom: "6px solid",
							paddingBottom: 1,
							children: "How to Play"
						}), Object(B.jsxs)(s.a, {
							paddingTop: 2,
							children: [re.map((function(e) {
								return Object(B.jsx)(R.a, {
									container: !0,
									justifyContent: "space-between",
									children: Object(B.jsx)(Y.a, {
										variant: "body1",
										gutterBottom: !0,
										children: e.label
									})
								}, e.label)
							})), Object(B.jsx)(Y.a, {
								children: "If you pet your cats too much you will stop earning!"
							})]
						})]
					})
				})
			}
			var ce = Object(d.a)(L.a)({
					background: "rgb(255 252 248)",
					marginBottom: 24
				}),
				oe = [{
					label: "Daily Return",
					value: 8
				}, {
					label: "APR",
					value: "2,920"
				}, {
					label: "Dev Fee",
					value: 1
				}];

			function se() {
				return Object(B.jsx)(ce, {
					children: Object(B.jsxs)(U.a, {
						children: [Object(B.jsx)(Y.a, {
							variant: "h5",
							borderBottom: "6px solid",
							paddingBottom: 1,
							children: "Lucky Cat Details"
						}), Object(B.jsx)(s.a, {
							paddingTop: 2,
							children: oe.map((function(e) {
								return Object(B.jsxs)(R.a, {
									container: !0,
									justifyContent: "space-between",
									children: [Object(B.jsx)(Y.a, {
										variant: "body1",
										gutterBottom: !0,
										children: e.label
									}), Object(B.jsxs)(Y.a, {
										gutterBottom: !0,
										children: [e.value, "%"]
									})]
								}, e.label)
							}))
						})]
					})
				})
			}
			var ue = Object(d.a)(L.a)({
					background: "rgb(251 241 225)"
				}),
				le = Object(d.a)("input")((function(e) {
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

			function de(e) {
				var t = e.address,
					n = "".concat(window.origin, "?ref=").concat(t);
				return Object(B.jsx)(ue, {
					children: Object(B.jsxs)(U.a, {
						style: {
							paddingLeft: 8,
							paddingRight: 8
						},
						children: [Object(B.jsx)(Y.a, {
							gutterBottom: !0,
							variant: "h5",
							textAlign: "center",
							children: "Referral Link"
						}), Object(B.jsx)(le, {
							value: t ? n : "",
							readOnly: !0
						}), Object(B.jsx)(Y.a, {
							textAlign: "center",
							variant: "body2",
							marginTop: 2,
							paddingX: 3,
							children: "Earn 12% of the BNB used to feed cats from anyone who uses your referral link"
						})]
					})
				})
			}

			function Ae() {
				return Object(B.jsxs)(R.a, {
					container: !0,
					justifyContent: "center",
					spacing: 2,
					marginTop: 4,
					children: [Object(B.jsx)(R.a, {
						item: !0,
						children: Object(B.jsx)("a", {
							href: X,
							target: "__blank",
							children: Object(B.jsx)("img", {
								src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADWElEQVRo3u2av3HbMBSHPycunDsXcsWU4gSmJzA9ge0FaHkCyRPEnkDSBOJxActVSjFVylBdOsglOzYq0qUg7FAQSIkU+Cd3/t2pEIgD34cH4AEPhA91S0d1NWzZngP0lOIoFkHSaRBp+A1wCbgFVVdABLwAYSyCVesglu31gQFwB/QrNhMBU2B+iLcqgUiAbxLClBIJNKkCVBrEsr1HYMj2+DelFXAfiyCsBUTOgRng1ASgahKL4MEoiGV7LvBMfV7IUwRc7TPUPu0BMQAWLUBA6v2FZXs7310IkhlObcoh7chCfS6A6AM/gZOWQQC+np6d99fJ8iWvQpFHZrQznPI0sGzvphSInBduA8b5gB2L4OjtB9ySxhSdZnnzZWtoyYrfaWBIxSK4WCfLDaPXyfL36dn5F/QdeQL8WSfLUH2g88iIbg0pVUOdV3Qgd21bukM90s7OB5GTqW/wpREQyl9isN2hWnCs/L82CLAVkS3bGwFjA+33LNtzs/sxdWjdGAKZ6rYVsQgmhtrf0jtIzomuqlZ1GZxRpAWhmbhhSk+qx7Nz5HzPRhJgDrzK/5ekC0S/IQg/FsGjWpgF2deQq1gEkVpo2d6C+r3qxyK41z3YuY1XFOogpH40CWHZ3kCeViuBtCUVwkFZxv8HkIkC0UOzMz8u12ajSoCHWAS+Uv6MJm+QBVm1bXlGIelw2rDJsr0ZmwtKqAN5pSPSpYIkxEApjnQgIWnSrVOSc2KsgVhlg+L7ZC+bEDOgaE+IBfqM5oa96qo1bxBkugPCAX6RnxDciFsqSG6WwqAeSM/pfgHESEL0c6okKJ2+sfzGIvAt2xtT41G3aCsvU1DqyqTTVuZeFxCnHKaECkt5xgu7IACe1AJdQJxQLdseSoBS9xwyrzxm/+S4r7sc0iax5URT870J+khbSRLgG+V2zAnp/NrqqMJsvHwZpGv2CgOSCY5hSYA33cYimOse1HYZqhjfI40FQ6ofwArvS+q81e2RJjOuOTypkXugqgVEzi1XGu8aajaMRXC1q9Kht7ou6WrzdiXdM9kx7OGJSiByuIzYfZduQk+6JEOeSp0QM8ueUyNABFyUgYDu3bNXjlOd+fLh0EBr+lsUl38JO0dTLZGGR8ASg9+ifKhr+gvf9S3/pZ723AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",
								alt: "",
								width: 48,
								height: 48
							})
						})
					}), Object(B.jsx)(R.a, {
						item: !0,
						children: Object(B.jsx)("a", {
							href: "https://t.me/LuckyCatBNB",
							target: "__blank",
							children: Object(B.jsx)("img", {
								src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADW0lEQVRo3u2aP3KbQBSHvyQuPRNUqTScQOQG+ARWLkCsE0Tp0sU6QewTWOYCQSewbmB0AnBJtylUpEuxawVhFnYRCM3EvxmPR+Lt4316+/cBvOm09K5rh2Mv9AEfcDUmGZDkaZScFMjYCx1gClyp/6YSwBpYAXGeRmIQkLEXusAPFbxz4O8hgBhY5GmUHQVEZWCuIPrQAri1zZAViOr/v9D3/66UAbM8jdamDd5bQFwDT0eAQN3jUd3TSEYZGXvhPWDstGMt8zSaNRl9OHEIAP98NHG3YrNqDTL2wjnwfUCIIszzVmwSnYG2a429MAAehyYo6ZNuIa0EUVPssQa2jTIFI8oXdLPW/AQhUDHNqy68yohasdOhI26QV94BVGWkrxW7SWsL21cx7oEUNoDHUgZ8A0Z5Gl0Ct4btpirWnc7KBhy+ATRRDNxVbEF+G7Z3VKxLHchVj8EL4A65Umcam48W/q7qQKY9AKyBhzyNlga2voXfoPhhB6J2tl1J8K/7JMULqm87mqy4Fvdwxl7ov/gvDvYuQDJghpweZxUQN8ip/VrT3gZkz/7sACdFLZHdZ111UWX7Xv1YCRWzk9oS2cpHZv7VGLFRBjzQcJpTWXiZ9xPgUmPvHBBLK5AY+evHdUalLDRBQLuufdEGJAE+mxQHSlkwgQCYtADZyQbEBMBFZiGwhIB2Xeu5DcgUuTVIkGMjLmZHHcJ+lAIyOqYqBYZ2lSqCZIZtfPX3U0EJ5IznluyMIVQm22gXcxEkaeHI13wfW2QC2k/9u5h3C2LHtVi3vDttUNDmJsWYy+eRuCMQH1mX8g3tLwzttLGWQVbmfoxh5ga2bgv/e7FWZUR0COMgJ4XHhgEdWPoV1GVEzfWxqTcLBcBTVXYsx9KLluV1qerMvugBBPTZCSz9COQBbU+6utYN/RchlsiV+St2q/oiT6Ob8pe6lf0W+EK/ta3rFm0yNAWKupKpj6w2npK0JVPt8xHVwGZ17luzukW7thq/FZvkfDRx6eYYfIiWeRrVTkKNz0e2YrMaGMZo82n8DFE9Brs/MsTMsIxk/TA0UDBuzwAZ8jSamDZo7FpFbcUmOx9NHoA/HHgQqtECmYnMptH/+8JABZBDu1c4UMEP+wpHDZjPAC/VvOnU9BdAxzlbow3rDQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",
								alt: "",
								width: 48,
								height: 48
							})
						})
					}), Object(B.jsx)(R.a, {
						item: !0,
						children: Object(B.jsx)("a", {
							href: "https://twitter.com/LuckyCatBNB",
							target: "__blank",
							children: Object(B.jsx)("img", {
								src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD0UlEQVRo3u2aMVbjOBjHf7BTbMF761Ru4247zAnGdNMRLuBJTsBwgiEnAE4A+AKEE+DpttvkBPJ0484UKbbbQjKjcaRYsmNIMf/3eM/Ykvz9pE9fPkmG39ovHey6wTBKAyBWf4GhSA4UpciKvQMJo3QCfAQmwNixWqWgnoBFKbLqXUBUz0+BCw/jt0HdA7ddR6oTSBilU+Aas+v01Ry48R0hL5AwSsfAHZAMAKCrAGalyHLXCn94QCTAM/D3wBAgR3p6NDp+WVerf3YGolzpEfjzDSB0fToaHY/X1eqpN4iCuHtjAF2xC8xWEOVOj+8IocMcrKtVbitgnewqvAqGiUxddWoLAIdbKj3uGQTAo+pgNxA1L5KBjCmAGRCVIjsAToEbQ7nKcC9A/n5tyOhaYZQK7L/WeQ/Iy1JkJqMJozRGhvcCeFBGf7W0EzUzgENDg9MtEEUpslNkOuGrmQ0CoBTZshTZqBTZieqsiy1tbQAeuhTStFAvnWF2B5vmpcic4FX28FV1VmEpNlXlzCBqeMfY9aL14CVwjtmXm3KCUO0WpcjOge8ttkysIMDnlvecNV66AKIWQ73XHmGUXmOZ1DZbmyBJS+VYjZoOUylXi5CZq5fRFn1xKBProfhD86FDA3fASfOm6vUr4Er5b+zYXh/FyMDwM/xq2e02VciweK9GYedytKPWvBTZFfzqWoFDxQXShR6GgPCwo9Zf9YXuWrFDxUSNRDEgiIsdG2UPPSoBjNXQD6mzLpV8QUAmbnGHeq3SgsSbgATA80AjM+laUQcpOsBY0+qOuvAsX9UX+mT3AQFDBtpHYZRe4b8/tqov9BFZejays3W8mhu+owFa57+CqA2xwqORZIeu1XU1mm+ANB84agKIMEqvu07+MErv6BapfklGmyCt+0cGBcgk78J3dBTEtEsHoNZGtTaWui3LXJNyZM6TewAEyDk26QgBcFKKbFn/88FQ4AH7KnGJDHnfkPMp77DWSBSET2c1lesQNpAbZAQJDM/GwC0y+/UFmKh2kx4AtebNG7ZdlC+0r9CWyDmVm9xKpTEx8gAoof8ZSq1cbYC0gyhD/mX4hZGvKuTcKJoPtuVaM9w2Ft5SlzaXtm5ir6vVj6PRcUm/yLJL3Zcim9sebt2NX1er5dHo+PsewLQurVvPR/YAxml/wOnE6h1hnDc5fA9DY2SCNx4YoEJO7HvXCs6HofAaAB6A/xju2GEBnPukPNDvg4ExMpWZ7hDg1hegN4gGFCiYM/xHaYnM7RZ9V5s7/ahG+6CmBvpoMPwFmTEv+35/8lv7rP8Bk+NXaD4vbEEAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAEnRFWHRFWElGOk9yaWVudGF0aW9uADGEWOzvAAAAAElFTkSuQmCC",
								alt: "",
								width: 48,
								height: 48
							})
						})
					}), Object(B.jsx)(R.a, {
						item: !0,
						children: Object(B.jsx)("a", {
							href: "https://discord.gg/Q4SSpzFCH2",
							target: "__blank",
							children: Object(B.jsx)("img", {
								src: "data:image/png;base64,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",
								alt: "",
								width: 48,
								height: 48
							})
						})
					})]
				})
			}
			var be = n(908),
				pe = n(898),
				he = n(409),
				je = n(410),
				ge = n.n(je),
				me = n(411),
				fe = n.n(me),
				ye = {
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

			function xe() {
				var e = a.useState(!1),
					t = Object(j.a)(e, 2),
					n = t[0],
					r = t[1],
					i = function() {
						return r(!1)
					};
				return Object(B.jsxs)(s.a, {
					pt: 4,
					children: [Object(B.jsx)(A.a, {
						variant: "contained",
						fullWidth: !0,
						onClick: function() {
							return r(!0)
						},
						startIcon: Object(B.jsx)(ge.a, {}),
						children: "FAQs"
					}), Object(B.jsx)(pe.a, {
						open: n,
						onClose: i,
						"aria-labelledby": "modal-modal-title",
						"aria-describedby": "modal-modal-description",
						children: Object(B.jsx)(s.a, {
							sx: ye,
							className: "scrollbox",
							children: Object(B.jsxs)(R.a, {
								container: !0,
								spacing: 2,
								direction: "column",
								position: "relative",
								children: [he.map((function(e, t) {
									return Object(B.jsxs)(R.a, {
										item: !0,
										children: [Object(B.jsxs)(Y.a, {
											variant: "h5",
											gutterBottom: !0,
											children: [t + 1, ": ", e.q]
										}), Object(B.jsx)(Y.a, {
											variant: "body1",
											children: e.a
										})]
									}, e.q)
								})), Object(B.jsx)(be.a, {
									color: "primary",
									style: {
										position: "absolute",
										right: -25,
										top: -24
									},
									onClick: i,
									children: Object(B.jsx)(fe.a, {})
								})]
							})
						})
					})]
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

			function ve() {
				var e = E().address;
				return Object(B.jsxs)(Oe, {
					children: [Object(B.jsx)(Z, {}), Object(B.jsx)(V, {}), Object(B.jsx)(ie, {}), Object(B.jsx)(ne, {}), Object(B.jsx)(se, {}), Object(B.jsx)(de, {
						address: e
					}), Object(B.jsx)(xe, {}), Object(B.jsx)(Ae, {})]
				})
			}
			var we = function() {
					return Object(B.jsx)(u.a, {
						children: Object(B.jsx)(s.a, {
							paddingY: 6,
							paddingX: 2,
							children: Object(B.jsx)(ve, {})
						})
					})
				},
				Be = function(e) {
					e && e instanceof Function && n.e(3).then(n.bind(null, 916)).then((function(t) {
						var n = t.getCLS,
							a = t.getFID,
							r = t.getFCP,
							i = t.getLCP,
							c = t.getTTFB;
						n(e), a(e), r(e), i(e), c(e)
					}))
				},
				Ce = n(412),
				Se = n(904),
				ke = Object(Ce.a)({
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

			function Ie(e) {
				var t = e.children;
				return Object(B.jsx)(Se.a, {
					theme: ke,
					children: t
				})
			}
			c.a.render(Object(B.jsxs)(r.a.StrictMode, {
				children: [Object(B.jsx)(o.a, {}), Object(B.jsx)(Ie, {
					children: Object(B.jsx)(W, {
						children: Object(B.jsx)($, {
							children: Object(B.jsx)(we, {})
						})
					})
				})]
			}), document.getElementById("root")), Be()
		}
	},
	[
		[855, 1, 2]
	]
]);
//# sourceMappingURL=main.8d7310a7.chunk.js.map
