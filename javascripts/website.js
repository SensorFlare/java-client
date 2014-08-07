/* Display the navbar when passing the first section
 ====================================================== */
$(document).scroll(function () {
    var y = $(this).scrollTop();
    var firstSectHgt = $("#firstSect").height();
    if (y > firstSectHgt) {
        $('#btn-signIn-nav').hide();
        $('#btn-getStarted-nav').show();
        $('#btn-getStarted-nav').css("display", "inline-block");
    } else {
        $('#btn-getStarted-nav').hide();
        $('#btn-signIn-nav').show();
    }
});

/* Hide menu in login and signup pages
====================================================== */
function getLastPart(url) {
    var parts = url.split("/");
    return (url.lastIndexOf('/') !== url.length - 1
    ? parts[parts.length - 1]
    : parts[parts.length - 2]);
    }

var lastPart = getLastPart(window.location.href);

if (lastPart.indexOf("login") >= 0 || lastPart.indexOf("signup") >= 0)  {
    $(".web-menu-item").remove();
    }

/* Hover effect on AppStore button 'Available Soon'
 ====================================================== */
$("#btn-appStore").mouseenter(
    function() {
        $("#btn-appStore > img").attr("src","/img/sensorflare-soon-on-app-store.png");
});
$("#btn-appStore").mouseleave(
    function() {
        $("#btn-appStore > img").attr("src", "/img/sensorflare-on-app-store.png");
});

function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined: shift = 0;
        break;
        case 'h': shift = el.eq(0).outerHeight();
        break;
        case 'h/2': shift = el.eq(0).outerHeight() / 2;
        break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity : 1
                    }, 1000);
                });
            }
        }
    });
};

(function($) {
    $(function() {
        var videobackground = new $.backgroundVideo($('#bgVideo'), {
            "align" : "centerXY",
            "path" : "video/",
            "width": 1280,
            "height": 720,
            "filename" : "preview",
            "types" : ["mp4", "ogg", "webm"]
        });
        // Sections height & scrolling
        $(window).resize(function() {
            var sH = $(window).height();
            $('section.header-10-sub').css('height', (sH) + 'px');
           // $('section.header-10-sub').css('height', (sH - $('header').outerHeight()) + 'px');
           // $('section:not(.header-10-sub):not(.content-11)').css('height', sH + 'px');
        });        

        // Parallax
        $('.header-10-sub, .content-23').each(function() {
            $(this).parallax('50%', 0.3, true);
        });


        /* For the section content-7 */

        if ($('.content-7').length > 0) {

            // Faded elements
            fadedEls($('.content-7'), 300);

            // Ani screen
            (function(el) {
                $('img:first-child', el).css('left', '-29.7%');

                $(window).resize(function() {
                    if (!el.hasClass('ani-processed')) {
                        el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
                    }
                }).scroll(function() {
                    if (!el.hasClass('ani-processed')) {
                        if ($(window).scrollTop() >= el.data('scrollPos')) {
                            el.addClass('ani-processed');
                            $('img:first-child', el).animate({
                                left : 0
                            }, 500);
                        }
                    }
                });
            })($('.screen'));
        }

       
//        (function(el) {
//            el.css('left', '-100%');
//
//            $(window).resize(function() {
//                if (!el.hasClass('ani-processed')) {
//                    el.data('scrollPos', el.offset().top - $(window).height() + el.outerHeight());
//                }
//            }).scroll(function() {
//                if (!el.hasClass('ani-processed')) {
//                    if ($(window).scrollTop() >= el.data('scrollPos')) {
//                        el.addClass('ani-processed');
//                        el.animate({
//                            left : 0
//                        }, 500);
//                    }
//                }
//            });
//        })($('.content-11 > .container'));

        $(window).resize().scroll();

    });

    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });
})(jQuery);

