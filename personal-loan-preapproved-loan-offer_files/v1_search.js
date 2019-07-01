$(document).ready(function() {
    $(document).on("click", "#searchPageResult1 li", function() {
        if ($('#searchBox1').val()) {
            $('#searchBox1').val($(this).children("a").text());
            setTimeout(function() {
                $("#searchformId").submit()
            }, 100)
        }
    })
});
var searchRequest = null;
var searchRequest1 = null;
$(function() {
    var minlength = 3;
    $("#searchBox1").keyup(function() {
        var that = this,
            query = $(this).val().trim();
        if (query.length < minlength) {
            $("#searchPageResult").hide()
        }
        if (query.length >= minlength) {
            if (searchRequest != null)
                searchRequest.abort();
            if (searchRequest1 != null)
                searchRequest1.abort();
            $("#searchPageResult").html("");
            var showData = "";
            showData = $("#searchBox1").val().trim().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "");
            console.log("showdata" + showData);
            if (typeof showData != "undefined" && showData.trim() != "") {
                var url = "/call-to-service&";
                url = url + "PageName=searchautosuggestions&ProductIds=" + showData.trim();
                searchRequest = $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "text",
                    success: function(msg) {
                        var sec1 = $(msg).filter('#childURL').html();
                        if (typeof sec1 != "undefined") {
                            $("#searchPageResult").show();
                            $("#searchPageResult").html(sec1);
                            $("#searchPageResult").append("<h4 id='suggestedsearches'>Suggested Searches</h4><ul class='v1_sugestUl' id='searchPageResult1'></ul>");
                            var URL_PREFIX = "/solr/Bajaj/select?q=name:";
                            var URL_SUFFIX = "&rows=8&start=0&wt=json";
                            var URL1 = URL_PREFIX + $("#searchBox1").val().trim().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "") + "*" + URL_SUFFIX;
                            searchRequest1 = $.ajax({
                                url: URL1,
                                success: function(msg) {
                                    var docs = JSON.stringify(msg.response.docs);
                                    var jsonData = JSON.parse(docs);
                                    if (jsonData != "") {
                                        $.each(jsonData, function(i) {
                                            $("#searchPageResult1").append("<li><a href='#;'>" + jsonData[i].name + "</a></li>")
                                        })
                                    } else {
                                        $('#suggestedsearches').hide();
                                        $('#searchPageResult1').hide()
                                    }
                                },
                                dataType: 'jsonp',
                                jsonp: 'json.wrf'
                            })
                        } else {
                            $("#searchPageResult").show();
                            $("#searchPageResult").html("<h4 id='suggestedsearches'>Suggested Searches</h4><ul class='v1_sugestUl' id='searchPageResult1'></ul>");
                            var URL_PREFIX = "/solr/Bajaj/select?q=name:";
                            var URL_SUFFIX = "&rows=8&start=0&wt=json";
                            var URL1 = URL_PREFIX + $("#searchBox1").val().trim().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "") + "*" + URL_SUFFIX;
                            searchRequest1 = $.ajax({
                                url: URL1,
                                success: function(msg) {
                                    var docs = JSON.stringify(msg.response.docs);
                                    var jsonData = JSON.parse(docs);
                                    if (jsonData != "") {
                                        $.each(jsonData, function(i) {
                                            $("#searchPageResult1").append("<li><a href='#;'>" + jsonData[i].name + "</a></li>")
                                        })
                                    } else {
                                        $('#suggestedsearches').hide();
                                        $('#searchPageResult1').hide()
                                    }
                                },
                                dataType: 'jsonp',
                                jsonp: 'json.wrf'
                            })
                        }
                        if (query == $(that).val()) {}
                    }
                })
            } else {
                $("#searchPageResult").show();
                $("#searchPageResult").html("<h4 id='suggestedsearches'>Suggested Searches</h4><ul class='v1_sugestUl' id='searchPageResult1'></ul>");
                var URL_PREFIX = "/solr/Bajaj/select?q=name:";
                var URL_SUFFIX = "&rows=8&start=0&wt=json";
                var URL1 = URL_PREFIX + $("#searchBox1").val().trim().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "") + "*" + URL_SUFFIX;
                searchRequest1 = $.ajax({
                    url: URL1,
                    success: function(msg) {
                        var docs = JSON.stringify(msg.response.docs);
                        var jsonData = JSON.parse(docs);
                        if (jsonData != "") {
                            $.each(jsonData, function(i) {
                                $("#searchPageResult1").append("<li><a href='#;'>" + jsonData[i].name + "</a></li>")
                            })
                        } else {
                            $('#suggestedsearches').hide();
                            $('#searchPageResult1').hide()
                        }
                    },
                    dataType: 'jsonp',
                    jsonp: 'json.wrf'
                })
            }
        }
    })
})

function findlist1() {
    if ($("#searchIn").val().length > 2) {
        var e = $("#searchIn").val(),
            s = e.substr(e.length - 3);
        isNaN(s) ? $(".exportal").hide() : $(".exportal").show()
    }
    var t, i, a;
    for (t = document.getElementById("searchIn").value.toUpperCase(), i = document.getElementById("findList").getElementsByTagName("div"), a = 0; a < i.length; a++) i[a].getElementsByTagName("h4")[0].innerHTML.toUpperCase().indexOf(t) > -1 ? i[a].style.display = "" : i[a].style.display = "none"
}

function numload() {
    if ($("#search_input").val().length > 2) {
        var e = $("#search_input").val(),
            s = e.substr(e.length - 3);
        isNaN(s) ? ($(".exportal").hide(), $(".secotypesujj").show()) : ($(".exportal").show(), $(".secotypesujj").hide())
    }
}
$(document).ready(function() {
    $(".sudjestUl li:first-child a").click(function() {
        $(this).parents(".padspace").toggleClass("padspacefull"), $(this).parents(".padspace").siblings().removeClass("padspacefull"), $(this).parents(".padspace").siblings().children("ul").children("li").children("a").children("p").text("+"), "+" == $(this).children("p").text() ? $(this).children("p").text("-") : $(this).children("p").text("+")
    }), $(".bannertabUl li a").click(function(e) {
        $(this).parent("li").siblings().children("a").removeClass("active"), $(this).toggleClass("active");
        var s = $(this).attr("data-tab");
        $(window).width() >= 768 && ($("#" + s).toggleClass("bnrsearchdis"), $("#" + s).siblings().removeClass("bnrsearchdis")), $(window).width() < 768 && ("offers" == $(this).attr("data-tab") ? ($("#offers").removeClass("bnrsearchdis"), window.location.href = "offer-pro.html") : "allcategories" == $(this).attr("data-tab") && (window.location.href = "top-categories.html")), e.stopPropagation(), $(".sujjestpart").slideUp(100)
    }), $(document).click(function() {
        $(".sujjestpart").slideUp(200), $(".seachDropBox1").show(), $(".offersimp").removeClass("bnrsearchdis"), $(".searchpartimp").removeClass("bnrsearchdis"), $(".bannertabUl li a").removeClass("active"), $(".searchBoximp").removeClass("inputradius"), $(".offersimp").removeClass("headeroffer"), $(".offerhead").removeClass("active"), $(".sujjestpart1").slideUp()
    }), $(".searchcontantMain").click(function(e) {
        e.stopPropagation()
    }), $(".sujjestpart").click(function(e) {
        e.stopPropagation()
    }), $(".impserchoption>ul>li>a").click(function() {
        $(this).toggleClass("active"), $(this).parent("li").siblings().children("a").removeClass("active"), $(this).parent("li").siblings().children("a").children("p").text("+"), "+" == $(this).children("p").text() ? $(this).children("p").text("-") : $(this).children("p").text("+"), $(this).next().slideToggle(), $(this).parent("li").siblings().children("a").next().slideUp()
    }), $(window).width() < 768 ? $(".searchBoximp").click(function() {
        window.location.href = "mo_search.html"
    }) : $(".searchBoximp").focus(function() {
        $(".sujjestpart").slideDown(300), $(this).addClass("inputradius")
    }), $(".impserchoneblock>h4").click(function() {
        $(this).next().slideToggle(), $(this).parent().siblings().children("h4").next().slideUp(), $(this).parent().siblings().children("h4").children("p").text("+"), "+" == $(this).children("p").text() ? $(this).children("p").text("-") : $(this).children("p").text("+")
    }), $(".impserchinp").click(function(e) {
        e.stopPropagation()
    }), $(".problock h4").click(function() {
        $(window).width() < 768 && ($(this).next().slideToggle(), $(this).parent(".problock").siblings().children("ul").slideUp(), "images/plus_one2.png" == $(this).children("img").attr("src") ? $(this).children("img").attr("src", "images/minus_one2.png") : $(this).children("img").attr("src", "images/plus_one2.png"), $(this).parent(".problock").siblings().children("h4").children("img").attr("src", "images/plus_one2.png"))
    }), $(".searchBoximp").keyup(function() {
        "" !== $(this).val() ? ($(".impserchoneblock .btnTopicUl").show(), $(".impserchoneblock h4").children("p").text("-")) : ($(".impserchoneblock .btnTopicUl").hide(), $(".impserchoneblock h4").children("p").text("+"))
    }), $(".searchBoxCol").click(function() {
        $(".sujjestpart").slideDown(300)
    }), $(".mysearchInputHeadNew").click(function(e) {
        e.stopPropagation()
    }), $(".offerhead").click(function(e) {
        e.stopPropagation(), $(window).width() > 991 ? ($(".offersimp").addClass("headeroffer"), $(".sujjestpart1").fadeOut()) : window.location.href = "offer-pro.html "
    }), $(".v1_HomeserchtHead1 input").click(function(e) {
        $(window).width() > 991 ? (e.stopPropagation(), $(".sujjestpart1").addClass("searchsujjesthead"), $(".sujjestpart1").slideDown(300), $(".offersimp").removeClass("headeroffer"), $(".offerhead").removeClass("active")) : window.location.href = "mo_search.html "
    }), $(".sujjestpart1").click(function(e) {
        e.stopPropagation()
    })
}), $(function() {
    $("#searchformId").submit(function(e) {
        e.preventDefault();
        var s = $("#searchBox1").val().trim().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, ""),
            t = $("#searchformId").attr("action");
        if (/\s/.test(s)) {
            var i = "&spellcheck=on&wt=json&spellcheck.count=10&spellcheck.maxCollationTries=5&spellcheck=on&spellcheck.collate=true",
                a = "/solr/BajajSpellChecker/spell?indent=on&rows=1000&q=name:" + $("#searchBox1").val().trim().toLowerCase().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "") + i;
            $.ajax({
                url: a,
                success: function(e) {
                    var i, a = 0;
                    i = e.replace(/"collation"/g, function() {
                        return '"collation' + ++a + '"'
                    });
                    var o = JSON.parse(i);
                    if (void 0 !== o.spellcheck.collations[1]) {
                        n = (n = o.spellcheck.collations[1].collationQuery).split(":")[1], window.location = t + "?searchKeyword=" + s + "&OgSearchKeyword=" + n
                    } else {
                        var n = s;
                        window.location = t + "?searchKeyword=" + n
                    }
                }
            })
        } else i = "&wt=json&suggest.count=10", a = "/solr/BajajSuggester/suggesthandler?indent=on&suggest.q=" + $("#searchBox1").val().trim().toLowerCase().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "") + i, $.ajax({
            url: a,
            success: function(e) {
                var i = JSON.parse(e).suggest.mySuggester;
                for (var a in i) {
                    var o = i[a].suggestions[0];
                    if (i.hasOwnProperty(a))
                        if (void 0 !== o) {
                            var n = i[a].suggestions[0].term;
                            window.location = t + "?searchKeyword=" + s + "&OgSearchKeyword=" + n
                        } else {
                            n = a;
                            window.location = t + "?searchKeyword=" + n
                        }
                }
            }
        })
    }), $("#searchformIdBanner").submit(function(e) {
        e.preventDefault();
        var s = $("#search_input").val().trim().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, ""),
            t = $("#searchformIdBanner").attr("action");
        if (/\s/.test(s)) {
            var i = "&spellcheck=on&wt=json&spellcheck.count=10&spellcheck.maxCollationTries=5&spellcheck=on&spellcheck.collate=true",
                a = "/solr/BajajSpellChecker/spell?indent=on&rows=1000&q=name:" + $("#search_input").val().trim().toLowerCase().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "") + i;
            $.ajax({
                url: a,
                success: function(e) {
                    var i, a = 0;
                    i = e.replace(/"collation"/g, function() {
                        return '"collation' + ++a + '"'
                    });
                    var o = JSON.parse(i);
                    if (void 0 !== o.spellcheck.collations[1]) {
                        n = (n = o.spellcheck.collations[1].collationQuery).split(":")[1], window.location = t + "?searchKeyword=" + s + "&OgSearchKeyword=" + n
                    } else {
                        var n = s;
                        window.location = t + "?searchKeyword=" + n
                    }
                }
            })
        } else i = "&wt=json&suggest.count=10", a = "/solr/BajajSuggester/suggesthandler?indent=on&suggest.q=" + $("#search_input").val().trim().toLowerCase().replace(/[<>\/]/g, "").replace(/%3C/g, "").replace(/%3E/g, "").replace(/%2F/g, "").replace(/%3c/g, "").replace(/%3e/g, "").replace(/%2f/g, "") + i, $.ajax({
            url: a,
            success: function(e) {
                var i = JSON.parse(e).suggest.mySuggester;
                for (var a in i) {
                    var o = i[a].suggestions[0];
                    if (i.hasOwnProperty(a))
                        if (void 0 !== o) {
                            var n = i[a].suggestions[0].term;
                            window.location = t + "?searchKeyword=" + s + "&OgSearchKeyword=" + n
                        } else {
                            n = a;
                            window.location = t + "?searchKeyword=" + n
                        }
                }
            }
        })
    })
});
