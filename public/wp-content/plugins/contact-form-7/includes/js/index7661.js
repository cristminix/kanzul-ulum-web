(function () {
	function n(r) {
		if (t[r]) {
			return t[r].exports;
		}
		var o = (t[r] = { i: r, l: false, exports: {} });
		e[r].call(o.exports, o, o.exports, n);
		o.l = true;
		return o.exports;
	}
	var e = [
		function (e, t) {
			e.exports = function (e, t, n) {
				if (t in e) {
					Object.defineProperty(e, t, {
						value: n,
						enumerable: true,
						configurable: true,
						writable: true,
					});
				} else {
					e[t] = n;
				}
				return e;
			};
			e.exports.default = e.exports;
			e.exports.__esModule = true;
		},
		function (e, t, n) {
			var r = n(2);
			e.exports = function (e, t) {
				if (e == null) {
					return {};
				}
				var n;
				var o;
				var a = r(e, t);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(e);
					for (o = 0; o < c.length; o++) {
						n = c[o];
						if (!(t.indexOf(n) >= 0)) {
							if (Object.prototype.propertyIsEnumerable.call(e, n)) {
								a[n] = e[n];
							}
						}
					}
				}
				return a;
			};
			e.exports.default = e.exports;
			e.exports.__esModule = true;
		},
		function (e, t) {
			e.exports = function (e, t) {
				if (e == null) {
					return {};
				}
				var n;
				var o = {};
				var a = Object.keys(e);
				for (var r = 0; r < a.length; r++) {
					n = a[r];
					if (!(t.indexOf(n) >= 0)) {
						o[n] = e[n];
					}
				}
				return o;
			};
			e.exports.default = e.exports;
			e.exports.__esModule = true;
		},
		function (e, t, n) {
			"use strict";
			function l(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					if (t) {
						r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						});
					}
					n.push.apply(n, r);
				}
				return n;
			}
			function f(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t] != null ? arguments[t] : {};
					if (t % 2) {
						l(Object(n), true).forEach(function (t) {
							i()(e, t, n[t]);
						});
					} else if (Object.getOwnPropertyDescriptors) {
						Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
					} else {
						l(Object(n)).forEach(function (t) {
							Object.defineProperty(
								e,
								t,
								Object.getOwnPropertyDescriptor(n, t),
							);
						});
					}
				}
				return e;
			}
			function v(e, t = {}) {
				const n = new FormData(e);
				if (t.submitter && t.submitter.name) {
					n.append(t.submitter.name, t.submitter.value);
				}
				const r = {
					contactFormId: e.wpcf7.id,
					pluginVersion: e.wpcf7.pluginVersion,
					contactFormLocale: e.wpcf7.locale,
					unitTag: e.wpcf7.unitTag,
					containerPostId: e.wpcf7.containerPost,
					status: e.wpcf7.status,
					inputs: Array.from(n, (e) => {
						const t = e[0];
						const n = e[1];
						return !t.match(/^_/) && { name: t, value: n };
					}).filter((e) => e !== false),
					formData: n,
				};
				const c = (t) => {
					const n = document.createElement("li");
					n.setAttribute("id", t.error_id);
					if (t.idref) {
						n.insertAdjacentHTML(
							"beforeend",
							`<a href="#${t.idref}">${t.message}</a>`,
						);
					} else {
						n.insertAdjacentText("beforeend", t.message);
					}
					e.wpcf7.parent
						.querySelector(".screen-reader-response ul")
						.appendChild(n);
				};
				const i = (t) => {
					const n = e.querySelector(t.into);
					const r = n.querySelector(".wpcf7-form-control");
					r.classList.add("wpcf7-not-valid");
					r.setAttribute("aria-describedby", t.error_id);
					const o = document.createElement("span");
					o.setAttribute("class", "wpcf7-not-valid-tip");
					o.setAttribute("aria-hidden", "true");
					o.insertAdjacentText("beforeend", t.message);
					n.appendChild(o);
					n.querySelectorAll("[aria-invalid]").forEach((e) => {
						e.setAttribute("aria-invalid", "true");
					});
					if (r.closest(".use-floating-validation-tip")) {
						r.addEventListener("focus", (e) => {
							o.setAttribute("style", "display: none");
						});
						o.addEventListener("mouseover", (e) => {
							o.setAttribute("style", "display: none");
						});
					}
				};
				p({
					endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
					method: "POST",
					body: n,
					wpcf7: { endpoint: "feedback", form: e, detail: r },
				})
					.then((t) => {
						const n = o(e, t.status);
						r.status = t.status;
						r.apiResponse = t;
						if (["invalid", "unaccepted", "spam", "aborted"].includes(n)) {
							a(e, n, r);
						} else if (["sent", "failed"].includes(n)) {
							a(e, "mail" + n, r);
						}
						a(e, "submit", r);
						return t;
					})
					.then((t) => {
						if (t.posted_data_hash) {
							e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
								t.posted_data_hash;
						}
						if (t.status === "mail_sent") {
							e.reset();
							e.wpcf7.resetOnMailSent = true;
						}
						if (t.invalid_fields) {
							t.invalid_fields.forEach(c);
							t.invalid_fields.forEach(i);
						}
						e.wpcf7.parent
							.querySelector('.screen-reader-response [role="status"]')
							.insertAdjacentText("beforeend", t.message);
						e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
							e.innerText = t.message;
						});
					})
					.catch((e) => console.error(e));
			}
			function w(e) {
				var t = new FormData(e);
				var n = {
					contactFormId: e.wpcf7.id,
					pluginVersion: e.wpcf7.pluginVersion,
					contactFormLocale: e.wpcf7.locale,
					unitTag: e.wpcf7.unitTag,
					containerPostId: e.wpcf7.containerPost,
					status: e.wpcf7.status,
					inputs: Array.from(t, function (e) {
						var t = e[0];
						var n = e[1];
						return !t.match(/^_/) && { name: t, value: n };
					}).filter(function (e) {
						return e !== false;
					}),
					formData: t,
				};
				p({
					endpoint: "contact-forms/".concat(e.wpcf7.id, "/refill"),
					method: "GET",
					wpcf7: { endpoint: "refill", form: e, detail: n },
				})
					.then(function (t) {
						if (e.wpcf7.resetOnMailSent) {
							delete e.wpcf7.resetOnMailSent;
							o(e, "mail_sent");
						} else {
							o(e, "init");
						}
						n.apiResponse = t;
						a(e, "reset", n);
					})
					.catch(function (e) {
						return console.error(e);
					});
			}
			function y(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					if (t) {
						r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						});
					}
					n.push.apply(n, r);
				}
				return n;
			}
			function g(e) {
				var t = new FormData(e);
				e.wpcf7 = {
					id: r(t.get("_wpcf7")),
					status: e.getAttribute("data-status"),
					pluginVersion: t.get("_wpcf7_version"),
					locale: t.get("_wpcf7_locale"),
					unitTag: t.get("_wpcf7_unit_tag"),
					containerPost: r(t.get("_wpcf7_container_post")),
					parent: e.closest(".wpcf7"),
				};
				e.querySelectorAll(".wpcf7-submit").forEach(function (e) {
					e.insertAdjacentHTML("afterend", '<span class="ajax-loader"></span>');
				});
				(function (e) {
					e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach(function (t) {
						t.addEventListener("change", function (t) {
							var n = t.target.getAttribute("name");
							e.querySelectorAll(
								'input[type="checkbox"][name="'.concat(n, '"]'),
							).forEach(function (e) {
								if (e !== t.target) {
									e.checked = false;
								}
							});
						});
					});
				})(e);
				(function (e) {
					e.querySelectorAll(".has-free-text").forEach(function (t) {
						var n = t.querySelector("input.wpcf7-free-text");
						var r = t.querySelector(
							'input[type="checkbox"], input[type="radio"]',
						);
						n.disabled = !r.checked;
						e.addEventListener("change", function (e) {
							n.disabled = !r.checked;
							if (e.target === r && r.checked) {
								n.focus();
							}
						});
					});
				})(e);
				(function (e) {
					e.querySelectorAll(".wpcf7-validates-as-url").forEach(function (e) {
						e.addEventListener("change", function (t) {
							var n = e.value.trim();
							if (
								n &&
								!n.match(/^[a-z][a-z0-9.+-]*:/i) &&
								n.indexOf(".") !== -1
							) {
								n = "http://" + (n = n.replace(/^\/+/, ""));
							}
							e.value = n;
						});
					});
				})(e);
				(function (e) {
					if (
						e.querySelector(".wpcf7-acceptance") &&
						!e.classList.contains("wpcf7-acceptance-as-validation")
					) {
						var t = function () {
							var t = true;
							e.querySelectorAll(".wpcf7-acceptance").forEach(function (e) {
								if (t && !e.classList.contains("optional")) {
									var n = e.querySelector('input[type="checkbox"]');
									if (
										(e.classList.contains("invert") && n.checked) ||
										(!e.classList.contains("invert") && !n.checked)
									) {
										t = false;
									}
								}
							});
							e.querySelectorAll(".wpcf7-submit").forEach(function (e) {
								e.disabled = !t;
							});
						};
						t();
						e.addEventListener("change", function (e) {
							t();
						});
						e.addEventListener("wpcf7reset", function (e) {
							t();
						});
					}
				})(e);
				(function (e) {
					var t = function (e, t) {
						var n = r(e.getAttribute("data-starting-value"));
						var o = r(e.getAttribute("data-maximum-value"));
						var a = r(e.getAttribute("data-minimum-value"));
						var c = e.classList.contains("down")
							? n - t.value.length
							: t.value.length;
						e.setAttribute("data-current-value", c);
						e.innerText = c;
						if (o && o < t.value.length) {
							e.classList.add("too-long");
						} else {
							e.classList.remove("too-long");
						}
						if (a && t.value.length < a) {
							e.classList.add("too-short");
						} else {
							e.classList.remove("too-short");
						}
					};
					var n = function (n) {
						n = (function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t] != null ? arguments[t] : {};
								if (t % 2) {
									y(Object(n), true).forEach(function (t) {
										i()(e, t, n[t]);
									});
								} else if (Object.getOwnPropertyDescriptors) {
									Object.defineProperties(
										e,
										Object.getOwnPropertyDescriptors(n),
									);
								} else {
									y(Object(n)).forEach(function (t) {
										Object.defineProperty(
											e,
											t,
											Object.getOwnPropertyDescriptor(n, t),
										);
									});
								}
							}
							return e;
						})({ init: false }, n);
						e.querySelectorAll(".wpcf7-character-count").forEach(function (r) {
							var o = r.getAttribute("data-target-name");
							var a = e.querySelector('[name="'.concat(o, '"]'));
							if (a) {
								a.value = a.defaultValue;
								t(r, a);
								if (n.init) {
									a.addEventListener("keyup", function (e) {
										t(r, a);
									});
								}
							}
						});
					};
					n({ init: true });
					e.addEventListener("wpcf7reset", function (e) {
						n();
					});
				})(e);
				window.addEventListener("load", function (t) {
					if (wpcf7.cached) {
						e.reset();
					}
				});
				e.addEventListener("reset", function (t) {
					wpcf7.reset(e);
				});
				e.addEventListener("submit", function (t) {
					var n = t.submitter;
					wpcf7.submit(e, { submitter: n });
					t.preventDefault();
				});
				e.addEventListener("wpcf7submit", function (t) {
					if (t.detail.apiResponse.captcha) {
						m(e, t.detail.apiResponse.captcha);
					}
					if (t.detail.apiResponse.quiz) {
						h(e, t.detail.apiResponse.quiz);
					}
				});
				e.addEventListener("wpcf7reset", function (t) {
					if (t.detail.apiResponse.captcha) {
						m(e, t.detail.apiResponse.captcha);
					}
					if (t.detail.apiResponse.quiz) {
						h(e, t.detail.apiResponse.quiz);
					}
				});
			}
			n.r(t);
			var r = function (e) {
				return Math.abs(parseInt(e, 10));
			};
			var o = function (e, t) {
				var n = new Map([
					["init", "init"],
					["validation_failed", "invalid"],
					["acceptance_missing", "unaccepted"],
					["spam", "spam"],
					["aborted", "aborted"],
					["mail_sent", "sent"],
					["mail_failed", "failed"],
					["submitting", "submitting"],
					["resetting", "resetting"],
				]);
				if (n.has(t)) {
					t = n.get(t);
				}
				if (!Array.from(n.values()).includes(t)) {
					t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-");
					t = "custom-".concat(t);
				}
				var r = e.getAttribute("data-status");
				e.wpcf7.status = t;
				e.setAttribute("data-status", t);
				e.classList.add(t);
				if (r && r !== t) {
					e.classList.remove(r);
				}
				return t;
			};
			var a = function (e, t, n) {
				var r = new CustomEvent("wpcf7".concat(t), {
					bubbles: true,
					detail: n,
				});
				if (typeof e == "string") {
					e = document.querySelector(e);
				}
				e.dispatchEvent(r);
			};
			var c = n(0);
			var i = n.n(c);
			var s = n(1);
			var u = n.n(s);
			var p = function (e) {
				var t = { root: "/", namespace: "api" };
				console.log(t);
				var n = t.root;
				var r = t.namespace;
				var o = r === void 0 ? "contact-form-7/v1" : r;
				console.log(o);
				return d.reduceRight(
					function (e, t) {
						return function (n) {
							return t(n, e);
						};
					},
					function (e) {
						e.endpoint = "contact";
						var t;
						var r;
						var a = e.url;
						var c = e.path;
						var i = e.endpoint;
						console.log(a, c, i);
						var s = e.headers;
						var l = e.body;
						var p = e.data;
						var d = u()(e, [
							"url",
							"path",
							"endpoint",
							"headers",
							"body",
							"data",
						]);
						if (typeof i == "string") {
							t = o.replace(/^\/|\/$/g, "");
							c = (r = i.replace(/^\//, "")) ? t + "/" + r : t;
						}
						if (typeof c == "string") {
							if (n.indexOf("?") !== -1) {
								c = c.replace("?", "&");
							}
							c = c.replace(/^\//, "");
							a = n + c;
						}
						delete (s = f({ Accept: "application/json, */*;q=0.1" }, s))[
							"X-WP-Nonce"
						];
						if (p) {
							l = JSON.stringify(p);
							s["Content-Type"] = "application/json";
						}
						var v = {
							code: "fetch_error",
							message: "You are probably offline.",
						};
						var b = {
							code: "invalid_json",
							message: "The response is not a valid JSON response.",
						};
						return window
							.fetch(
								a || c || window.location.href,
								f(f({}, d), {}, { headers: s, body: l }),
							)
							.then(
								function (e) {
									return Promise.resolve(e)
										.then(function (e) {
											if (e.status >= 200 && e.status < 300) {
												return e;
											}
											throw e;
										})
										.then(function (e) {
											if (e.status === 204) {
												return null;
											}
											if (e && e.json) {
												return e.json().catch(function () {
													throw b;
												});
											}
											throw b;
										});
								},
								function () {
									throw v;
								},
							);
					},
				)(e);
			};
			var d = [];
			p.use = function (e) {
				d.unshift(e);
			};
			p.use((e, t) => {
				if (e.wpcf7 && e.wpcf7.endpoint === "feedback") {
					const { form: t, detail: n } = e.wpcf7;
					b(t);
					a(t, "beforesubmit", n);
					o(t, "submitting");
				}
				return t(e);
			});
			const b = (e) => {
				e.wpcf7.parent.querySelector(
					'.screen-reader-response [role="status"]',
				).innerText = "";
				e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText =
					"";
				e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e) => {
					e.remove();
				});
				e.querySelectorAll("[aria-invalid]").forEach((e) => {
					e.setAttribute("aria-invalid", "false");
				});
				e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
					e.removeAttribute("aria-describedby");
					e.classList.remove("wpcf7-not-valid");
				});
				e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
					e.innerText = "";
				});
			};
			p.use(function (e, t) {
				if (e.wpcf7 && e.wpcf7.endpoint === "refill") {
					var n = e.wpcf7;
					var r = n.form;
					n.detail;
					b(r);
					o(r, "resetting");
				}
				return t(e);
			});
			var m = function (e, t) {
				for (var r in t) {
					(function (n) {
						var r = t[n];
						e.querySelectorAll('input[name="'.concat(n, '"]')).forEach(
							function (e) {
								e.value = "";
							},
						);
						e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach(
							function (e) {
								e.setAttribute("src", r);
							},
						);
						var o = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
						if (o) {
							e.querySelectorAll(
								'input[name="_wpcf7_captcha_challenge_'.concat(n, '"]'),
							).forEach(function (e) {
								e.value = o[1];
							});
						}
					})(r);
				}
			};
			var h = function (e, t) {
				for (var r in t) {
					(function (n) {
						var r = t[n][0];
						var o = t[n][1];
						e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach(
							function (e) {
								e.querySelector('input[name="'.concat(n, '"]')).value = "";
								e.querySelector(".wpcf7-quiz-label").textContent = r;
								e.querySelector(
									'input[name="_wpcf7_quiz_answer_'.concat(n, '"]'),
								).value = o;
							},
						);
					})(r);
				}
			};
			document.addEventListener("DOMContentLoaded", (e) => {
				var t;
				if (typeof wpcf7 == "undefined") {
					console.error("wpcf7 is not defined.");
					return;
				}
				if (wpcf7.api === void 0) {
					console.error("wpcf7.api is not defined.");
					return;
				}
				if (typeof window.fetch != "function") {
					console.error("Your browser doesn't support window.fetch().");
					return;
				}
				if (typeof window.FormData != "function") {
					console.error("Your browser doesn't support window.FormData().");
					return;
				}
				const n = document.querySelectorAll(".wpcf7 > form");
				if (typeof n.forEach == "function") {
					wpcf7 = {
						init: g,
						submit: v,
						reset: w,
						...((t = wpcf7) !== null && t !== void 0 ? t : {}),
					};
					n.forEach((e) => wpcf7.init(e));
				} else {
					console.error("Your browser doesn't support NodeList.forEach().");
				}
			});
		},
	];
	var t = {};
	n.m = e;
	n.c = t;
	n.d = function (e, t, r) {
		if (!n.o(e, t)) {
			Object.defineProperty(e, t, { enumerable: true, get: r });
		}
	};
	n.r = function (e) {
		if (typeof Symbol != "undefined" && Symbol.toStringTag) {
			Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
		}
		Object.defineProperty(e, "__esModule", { value: true });
	};
	n.t = function (e, t) {
		if (1 & t) {
			e = n(e);
		}
		if (8 & t) {
			return e;
		}
		if (4 & t && typeof e == "object" && e && e.__esModule) {
			return e;
		}
		var r = Object.create(null);
		n.r(r);
		Object.defineProperty(r, "default", { enumerable: true, value: e });
		if (2 & t && typeof e != "string") {
			for (var o in e) {
				n.d(
					r,
					o,
					function (t) {
						return e[t];
					}.bind(null, o),
				);
			}
		}
		return r;
	};
	n.n = function (e) {
		var t =
			e && e.__esModule
				? function () {
						return e.default;
					}
				: function () {
						return e;
					};
		n.d(t, "a", t);
		return t;
	};
	n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	};
	n.p = "";
	n((n.s = 3));
})();
