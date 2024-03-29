var langCodeList = "english,hindi,gujarati,bengali,marathi,tamil,telugu,kannada,malayalam,punjabi";
function SetLanguage() {
	var e = getMoxCookie("Finlang"),
	a = document.getElementById("P9LngDdl");
	e && window.location.pathname.indexOf(e) < 0 && RedurectUrl(e),
	e && a && (document.getElementById("P9LngDdl").value = e)
}
function ChangeLanguage(e) {
	var a = e.options[e.selectedIndex].value;
	removeMoxCookie("Finlang", ""),
	"english" != a && setMoxCookie("Finlang", a),
	RedurectUrl(a)
}
function RedurectUrl(e) {
	var a = "",
	s = window.location.pathname.substr(1).split("/"),
	i = s[0];
	if (langCodeList.indexOf(i) > -1)
		if ("english" == e)
			s = s.slice(1), a = window.location.protocol + "//" + window.location.host + "/" + s.join("/");
		else {
			s[0] = e;
			var n = s.join("/");
			a = n == e ? window.location.protocol + "//" + window.location.host + "/" + n + "/" : window.location.protocol + "//" + window.location.host + "/" + n
		}
	else
		a = window.location.protocol + "//" + window.location.host + "/" + e + window.location.pathname;
	window.location = a
}
function setMoxCookie(e, a) {
	getMoxCookie(e)
}
function getMoxCookie(e) {
	var a = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
	return a ? a[2] : null
}
function removeMoxCookie(e) {
	document.cookie = "Finlang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}
$(document).ready(function () {
	SetLanguage(),
	$(".language").focus(function () {
		$(this).parents("li").addClass("activelang")
	}),
	$(".language").blur(function () {
		$(this).parents("li").removeClass("activelang")
	}),
	$(".language").change(function () {
		$(this).parents("li").removeClass("activelang")
	}),
	window.location.href;
	var e = window.location.pathname.split("/")[1];
	$(".language option").each(function () {
		e == $(this).val() && ($(".language option").attr("selected", ""), $(this).attr("selected", "selected"))
	})
}), $(document).ready(function () {
	if ($("body").on("click", ".v1_EmiPageHeader ul >li >a", function (e) {
			e.stopPropagation(),
			$(".v1_EmiSubHeadMenuBox").hide(),
			$(this).siblings(".v1_EmiSubHeadMenuBox").css("display", "table")
		}), $(window).scroll(function () {
			var e = $(window).scrollTop();
			$(".headerFormNew").length > 0 && ($(".headerFormNew").position().top + 50 < e ? $(".homePageSearchHeader").show() : $(".homePageSearchHeader").hide())
		}), $(window).width() > 767) {
		if ($(window).width() > 1340) {
			var e = $(window).width() - 1345;
			e += 340,
			$(".v1_searchInputHead").css("width", e)
		} else
			$(".v1_searchInputHead").removeAttr("style");
		$(window).width() < 990 && (e = $(window).width() - 180, $(".v1_searchInputHead").css("width", e))
	} else
		$(".v1_searchInputHead").width($(window).width() - 134);
	$(window).resize(function () {
		if ($(window).width() > 767) {
			if ($(window).width() > 1340) {
				var e = $(window).width() - 1345;
				e += 340,
				$(".v1_searchInputHead").css("width", e)
			} else
				$(".v1_searchInputHead").removeAttr("style");
			$(window).width() < 990 ? (e = $(window).width() - 180, $(".v1_searchInputHead").css("width", e)) : $(".v1_headerLink").attr("page")
		} else
			$(".headlogo img").attr("src", "/sites/bajaj/banner_form_latest/images/mo-logo.png"), $(".headlogoCampign img").attr("src", "/sites/bajaj/banner_form_latest/images/logo.png"), $(".v1_searchInputHead").width($(window).width() - 134)
	}),
	$(".v1_submenuBox >ul>li>a").click(function () {
		if ($(window).width() < 990 ? $(".v1_submenuBox").css("width", "100%") : $(this).hasClass("v1_siglenavigation") || $(".v1_submenuBox").css("width", "65%"), $(window).width() < 990 ? $(".v1_submenuBox >ul>li>a").css("width", "100%") : $(".v1_submenuBox >ul>li>a").css("width", "26%"), $(".v1_submenuBox >ul>li>a").removeClass("v1_activeSubmenu"), $(this).addClass("v1_activeSubmenu"), $(".v1_subSubmenuBox").removeAttr("style"), $(".v1_subSubmenuBox").hide(), "companies" == $(this).parents("ul").attr("id") ? $(window).width() < 990 && $(this).siblings(".v1_subSubmenuBox").show() : $(this).siblings(".v1_subSubmenuBox").show(), $(window).width() < 990 && $(this).siblings(".v1_subSubmenuBox").length > 0) {
			$(".v1_submenuBox >ul>li>a").hide();
			var e = $(this).text();
			0 == $(this).siblings(".v1_subSubmenuBox").children(".v1_SubsidemenuHeader").length && $(this).siblings(".v1_subSubmenuBox").prepend('\u003cdiv class=\"v1_SubsidemenuHeader\"\u003e\u003ca href=\"#;\" class=\"v1_backlevel1 v1_backArrowMoMenu\" \u003e\u003cspan class=\"glyphicon glyphicon-menu-left v1_doublebackarrw\" \u003e\u003c/span\u003e \u003c/a\u003e \u003ca href=\"#;\" class=\"v1_backlevel2 v1_backArrowMoMenu\" \u003e\u003cspan class=\"glyphicon glyphicon-menu-left\"\u003e\u003c/span\u003e\u003c/a\u003e\u003ca href=\"#;\" class=\"v1_sublevel2 v1_backlevel2\"\u003e  ' + e + "</a></div>")
		}
		if ($(this).siblings(".v1_subSubmenuBox").length > 0) {
			$(".v1_submenuBox >ul>li>a").css("box-shadow", "none");
			var a,
			s = $(this).siblings(".v1_subSubmenuBox").height(),
			i = $(this).parents("ul").height();
			if (a = i > s ? i : s, $(window).width() > 768)
				$(".v1_subSubmenuBox").height(a), $(".v1_submenuBox").height(a);
			else {
				var n = $(window).height();
				n -= 10,
				$(".v1_subSubmenuBox").height(n)
			}
			"companies" == $(this).parents("ul").attr("id") || $(".v1_submenuBox").css({
				"box-shadow": "0px 3px 3px #bbb",
				background: "#f9f9f9"
			})
		} else
			$(".v1_submenuBox >ul>li>a").removeAttr("style"), $(window).width() > 989 && $(".v1_submenuBox").css({
				"box-shadow": "none",
				background: "transparent"
			});
		if ("language" == $(this).parents("ul").attr("id")) {
			var o = $(this).text();
			$(".v1_homepageShowMDmenu a[href$='#language']").html(o + '\u003cp\u003e(भाषाएं)\u003c/p\u003e\u003cspan class=\"caret\"\u003e\u003c/span\u003e'),
			$(".v1_headerLink a[href$='#language']").html(o + '\u003cp\u003e(भाषाएं)\u003c/p\u003e\u003cspan class=\"caret\"\u003e\u003c/span\u003e')
		}
	}),
	$(".v1_mobsearchInputbox input").focus(),
	$(".v1_mobsearchInputbox input").keyup(function () {
		$(this).val().length > 0 ? ($(".ontypesearch").show(), $(".v1_mobsearchInputbox i").removeClass("glyphicon-search").addClass("glyphicon-search")) : ($(".ontypesearch").hide(), $(".v1_mobsearchInputbox i").removeClass("glyphicon-search").addClass("glyphicon-search"))
	}),
	$(".v1_mobsearchInputbox .left").click(function (e) {
		e.preventDefault(),
		window.history.back()
	}),
	$(".v1_searchInputHead input").keydown(function (e) {
		var a = $(this).val();
		$(window).width() > 750 && (a.length > 0 ? ($(".v1_headerForm .v1_seachDropBox").show(), $(".v1_headerForm .v1_searchInputHead i").removeClass("glyphicon-search").addClass("glyphicon-search")) : ($(".v1_headerForm .v1_seachDropBox").hide(), $(".v1_headerForm .v1_searchInputHead i").removeClass("glyphicon-search").addClass("glyphicon-search")))
	}),
	$(".v1_searchInputHeadNew input").keydown(function (e) {
		var a = $(this).val();
		$(window).width() > 750 && (a.length > 0 ? ($(".headerFormNew .v1_seachDropBox").show(), $(".headerFormNew .v1_searchInputHeadNew i").removeClass("glyphicon-search").addClass("glyphicon-search")) : ($(".headerFormNew .v1_seachDropBox").hide(), $(".headerFormNew .v1_searchInputHeadNew i").removeClass("glyphicon-search").addClass("glyphicon-search")))
	}),
	$(".v1_homepageShowMDmenu  a").click(function (e) {
		if (e.stopPropagation(), $(this).parent("li").hasClass("v1_activeHeaderMainMenu"))
			$(".v1_nextarrowhideofall").hide(), $(".v1_homepageShowMDmenu").removeClass("v1_activeHeaderMainMenu"), $(".v1_submenuBox").hide();
		else {
			$(".v1_submenuBox").show();
			var a = $(this).attr("href"),
			s = $(this).offset().left;
			if ($(window).width() < 1199 ? s -= 140 : s -= 165, "#payonline" == a);
			else if ("#contactus" == a);
			else if ($(".v1_headerLink li").removeClass("v1_activeHeaderMainMenu"), $(".v1_homepageShowMDmenu").removeClass("v1_activeHeaderMainMenu"), $(".v1_subSubmenuBox").hide(), $(this).parent("li").addClass("v1_activeHeaderMainMenu"), $(".v1_submenuBox >ul").hide(), $(".v1_submenuBox >ul>li>a").show(), $(a).slideToggle(300), $(".v1_submenuBox").css({
					"margin-left": s,
					width: "15%"
				}), $(".v1_submenuBox >ul>li>a").removeAttr("style"), $(window).width() < 990) {
				$(".v1_headerLink").hide();
				var i = $(this).text();
				0 == $(a).children(".v1_sidemenuHeader").length && $(a).prepend('<li class="v1_sidemenuHeader"> <a href="#;" class="v1_backlevel1 v1_backArrowMoMenu"><span class="glyphicon glyphicon-menu-left "></span></a><a href="#;" class="v1_backlevel1 v1_firstbackmenutxt"> ' + i + "</a></li>");
				var n = $(window).height();
				$(".v1_submenuBox").css({
					"box-shadow": "none",
					background: "#fff",
					height: n + "px"
				})
			} else
				$(".v1_submenuBox").css({
					"box-shadow": "none",
					background: "transparent"
				})
		}
	}),
	$("body").on("click", ".v1_headerLink li a", function (e) {
		if (e.stopPropagation(), $(this).parent("li").hasClass("v1_activeHeaderMainMenu"))
			$(".v1_headerLink li").removeClass("v1_activeHeaderMainMenu"), $(".v1_submenuBox >ul>li>a").removeClass("v1_activeSubmenu"), $(".v1_submenuBox").hide(), $(".v1_submenuBox > ul").hide(), $(".v1_submenuBox").css({
				"box-shadow": "none",
				background: "transparent"
			}), $(".v1_homepageShowMDmenu").removeClass("v1_activeHeaderMainMenu"), $(".v1_seachDropBox").hide(), $(".v1_searchInputHead i").removeClass("glyphicon-remove").addClass("glyphicon-search");
		else if ($(this).hasClass("v1_backArrowMoMenu"))
			$(".v1_subSubmenuBox").hide(), $(".v1_headerLink>li>a").show();
		else {
			$(".v1_submenuBox").show();
			var a = $(this).attr("page"),
			s = $(this).attr("href"),
			i = $(this).offset().left;
			if ($(window).width() < 1199 ? i -= 140 : i -= 165, $(this).parents("div").hasClass("v1_subSubmenuBox") && ($(".v1_headerLink li").each(function (e) {
						e > 2 && $(this).remove()
					}), $(".v1_headerLink>li>a").show(), $(".v1_headerLink").hide(), $(".v1_subSubmenuBox").removeAttr("style"), $(".v1_menubtnofHeader a").children("img").attr("src", "/sites/bajaj/banner_form_latest/images/menu.png"), $(".v1_submenuBox").height(0).hide()), $(".v1_submenuBox >ul>li>a").removeAttr("style"), "#" == s) {
				var n = $(this).text();
				$(this).siblings(".v1_subSubmenuBox").length > 0 && ($(".v1_headerLink>li>a").hide(), $("#more").show(), $("#more>li>a").hide(), $(this).siblings(".v1_subSubmenuBox").show(), 0 == $(this).siblings(".v1_subSubmenuBox").children(".v1_sidemenuHeader").length && $(this).siblings(".v1_subSubmenuBox").prepend('<div class="v1_sidemenuHeader v1_calculatorSidemenu"> <a href="#;" class="v1_backlevel1 v1_backArrowMoMenu"><span class="glyphicon glyphicon-menu-left "></span></a><a href="#;" class="v1_backlevel1 v1_firstbackmenutxt"> ' + n + "</a></div>"))
			} else if ("#payonline" == s);
			else if ("#contactus" == s);
			else if ($(window).width() < 990 ? "#more" == s ? $(".v1_submenuBox").css("width", "100%") : $(".v1_submenuBox").css("width", "") : "#more" == s ? $(".v1_submenuBox").css("width", "17%") : $(".v1_submenuBox").css("width", ""), $(".v1_headerLink li").removeClass("v1_activeHeaderMainMenu"), $(".v1_homepageShowMDmenu").removeClass("v1_activeHeaderMainMenu"), $(".v1_subSubmenuBox").hide(), $(this).parent("li").addClass("v1_activeHeaderMainMenu"), $(".v1_submenuBox >ul").hide(), $(".v1_submenuBox >ul>li>a").show(), $(s).slideToggle(300), $(".v1_submenuBox").css("margin-left", i), $(window).width() < 990) {
				$(".v1_headerLink").hide();
				var o = $(this).html(),
				t = o.indexOf("<");
				o = o.substring(0, t),
				0 == $(s).children(".v1_sidemenuHeader").length && $(s).prepend('<li class="v1_sidemenuHeader"> <a href="#;" class="v1_backlevel1 v1_backArrowMoMenu"><span class="glyphicon glyphicon-menu-left "></span></a><a href="#;" class="v1_backlevel1 v1_firstbackmenutxt"> ' + o + "</a></li>");
				var h = $(window).height();
				h = h,
				$(".v1_submenuBox").css({
					"box-shadow": "none",
					background: "#f9f9f9",
					height: h + "px"
				}),
				"corporatepage" == a && $(".v1_corporateclick").trigger("click")
			} else
				$(".v1_submenuBox").css({
					"box-shadow": "none",
					background: "transparent"
				})
		}
	}),
	$("body").on("click", ".v1_submenuBox", function (e) {
		e.stopPropagation()
	}),
	$(".v1_submenuBox >ul>li>a").click(function (e) {
		if (e.stopPropagation(), $(".v1_submenuBox >ul>li>a").removeClass("v1_activeSubmenu"), $(this).addClass("v1_activeSubmenu"), $(".v1_subSubmenuBox").removeAttr("style"), $(".v1_subSubmenuBox").hide(), "companies" == $(this).parents("ul").attr("id") ? $(window).width() < 990 && $(this).siblings(".v1_subSubmenuBox").show() : $(this).siblings(".v1_subSubmenuBox").show(), $(window).width() < 990 && $(this).siblings(".v1_subSubmenuBox").length > 0) {
			$(".v1_submenuBox >ul>li>a").hide();
			var a = $(this).text();
			0 == $(this).siblings(".v1_subSubmenuBox").children(".v1_SubsidemenuHeader").length && $(this).siblings(".v1_subSubmenuBox").prepend('\u003cdiv class=\"v1_SubsidemenuHeader\"\u003e\u003ca href=\"#;\" class=\"v1_backlevel1 v1_backArrowMoMenu\" \u003e\u003cspan class=\"glyphicon glyphicon-menu-left v1_doublebackarrw\"\u003e\u003c/span\u003e \u003c/a\u003e \u003ca href=\"#;\" class=\"v1_backlevel2 v1_backArrowMoMenu\" \u003e\u003cspan class=\"glyphicon glyphicon-menu-left\"\u003e\u003c/span\u003e\u003c/a\u003e\u003ca href=\"#;\" class=\"v1_sublevel2 v1_backlevel2\"\u003e  ' + a + "</a></div>")
		}
		if ($(this).siblings(".v1_subSubmenuBox").length > 0) {
			$(".v1_submenuBox >ul>li>a").css("box-shadow", "none");
			var s,
			i = $(this).siblings(".v1_subSubmenuBox").height(),
			n = $(this).parents("ul").height();
			if (s = n > i ? n + 5 : i + 5, $(window).width() > 768)
				$(".v1_subSubmenuBox").height(s), $(".v1_submenuBox").height(s);
			else {
				var o = $(window).height();
				o -= 10,
				$(".v1_subSubmenuBox").height(o)
			}
			"companies" == $(this).parents("ul").attr("id") || $(".v1_submenuBox").css({
				"box-shadow": "0px 3px 3px #bbb",
				background: "#f9f9f9"
			})
		}
	}),
	$("body").on("click", ".v1_backlevel1", function (e) {
		e.stopPropagation(),
		e.stopImmediatePropagation(),
		$(".v1_submenuBox>ul").hide(),
		$(".v1_headerLink").show()
	}),
	$("body").on("click", ".v1_backlevel2", function (e) {
		e.stopPropagation(),
		e.stopImmediatePropagation(),
		$(this).parents(".v1_subSubmenuBox").hide(),
		$(this).parents("ul").show(),
		$(".v1_submenuBox >ul>li>a").show()
	}),
	$(".v1_searchInputHead input").keydown(function (e) {
		var a = $(this).val();
		$(window).width() > 750 && (a.length > 0 ? ($(".v1_headerForm .v1_seachDropBox").show(), $(".v1_headerForm .v1_searchInputHead i").removeClass("glyphicon-search").addClass("glyphicon-search")) : ($(".v1_headerForm .v1_seachDropBox").hide(), $(".v1_headerForm .v1_searchInputHead i").removeClass("glyphicon-search").addClass("glyphicon-search")))
	}),
	$(document).on("click", function () {
		$(".v1_headerLink li").removeClass("v1_activeHeaderMainMenu"),
		$(".v1_submenuBox >ul>li>a").removeClass("v1_activeSubmenu"),
		$(".v1_submenuBox").hide(),
		$(".v1_submenuBox > ul").hide(),
		$(".v1_submenuBox").css({
			"box-shadow": "none",
			background: "transparent"
		}),
		$(".v1_homepageShowMDmenu").removeClass("v1_activeHeaderMainMenu"),
		$(".v1_seachDropBox").hide(),
		$(".v1_searchInputHead i").removeClass("glyphicon-remove").addClass("glyphicon-search")
	}),
	$(".v1_menubtnofHeader a").click(function (e) {
		e.stopImmediatePropagation();
		var a = $(this).children("img").attr("src"),
		s = $(this).attr("page");
		if ("/sites/bajaj/banner_form_latest/images/menu.png" == a) {
			if ($(window).width() < 990) {
				var i = $(window).height();
				i = i,
				$(".v1_headerLink").show().height(i)
			}
			$(this).children("img").attr("src", "/sites/bajaj/banner_form_latest/images/close.png");
			$(".v1_headerLink").attr("page");
			"corporatepage" ? $(".v1_headerLink li").each(function (e) {
				e > 5 && $(this).remove()
			}) : $(".v1_headerLink li").each(function (e) {
				e > 2 && $(this).remove()
			});
			var n = "";
			$(".v1_rightmenu li").each(function () {
				if ($(this).hasClass("v1_homepageShowMDmenu")) {
					var e = $(this).html();
					n += e = "<li class='rightsideelement'>" + e + "</li>"
				}
			}),
			$(".v1_headerLink").append(n),
			$(".v1_headerLink li").each(function () {
				0 == $(this).children("a").find(".caret").length && $(this).children(".v1_subSubmenuBox").length > 0 && $(this).children("a").append('<span class="caret"></span>')
			}),
			$(window).width() < 990 && "corporatemenu" == s && $(".v1_corporatefisrtmenu").trigger("click")
		} else
			$(".v1_headerLink li").each(function (e) {
				$(this).hasClass("rightsideelement") && $(this).remove()
			}), $(".v1_headerLink>li>a").show(), $(".v1_headerLink").hide(), $(".v1_subSubmenuBox").removeAttr("style"), $(this).children("img").attr("src", "/sites/bajaj/banner_form_latest/images/menu.png"), $(".v1_submenuBox").height(0).hide()
	})
})
/* 31 December 2018 */