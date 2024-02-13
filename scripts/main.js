"use strict";
!function(c, t, e) {
    var r, s, l = c("body");
    s = 1024 < c(window).width() ? c("[data-scroll-container]") : l,
    gsap.registerPlugin(ScrollTrigger),
    gsap.config({
        force3D: !1
    }),
    (r = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: !0,
        getDirection: !0,
        lerp: .05
    })).on("scroll", function(t) {
        ScrollTrigger.update(),
        document.documentElement.setAttribute("data-direction", t.direction)
    }),
    ScrollTrigger.create({
        trigger: "body",
        start: "top 0%",
        end: "bottom 100%",
        onUpdate: function(t) {
            1 === t.direction ? c("html").attr("data-direction", "down") : c("html").attr("data-direction", "up")
        }
    }),
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop: function(t) {
            return arguments.length ? r.scrollTo(t, 0, 0) : r.scroll.instance.scroll.y
        },
        getBoundingClientRect: function() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    }),
    ScrollTrigger.addEventListener("refresh", function() {
        return r.update()
    }),
    ScrollTrigger.refresh();
    var u = {
        cursorElement: "",
        setCursor: function(t) {
            u.cursorElement = t,
            u.updateCursor()
        },
        removeCursor: function() {
            u.cursorElement = ""
        },
        updateCursor: function() {
            gsap.set("#" + u.cursorElement, {
                xPercent: -50,
                yPercent: -50
            });
            var t = document.getElementById(u.cursorElement)
              , n = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            }
              , i = {
                x: n.x,
                y: n.y
            }
              , r = gsap.quickSetter(t, "x", "px")
              , s = gsap.quickSetter(t, "y", "px");
            window.addEventListener("pointermove", function(t) {
                i.x = t.x,
                i.y = t.y,
                c("#" + u.cursorElement).css({
                    opacity: 1
                })
            }),
            gsap.ticker.add(function(t, e) {
                var o = .1 * e
                  , a = 1 - Math.pow(.75, o);
                n.x += (i.x - n.x) * a,
                n.y += (i.y - n.y) * a,
                r(n.x),
                s(n.y)
            })
        }
    };
    c(document).ready(function() {
        var t, e, o, a, n, i;
        t = .01 * window.innerHeight,
        document.documentElement.style.setProperty("--vh", "".concat(t, "px")),
        o = gsap.timeline({
            scrollTrigger: {
                scroller: s,
                trigger: ".tai__hero",
                start: "top 0%",
                end: "bottom 100%",
                scrub: !0,
                pin: ".tai__hero__sticky",
                pinSpacer: !1,
                toggleActions: "play auto auto reverse"
            }
        }),
        e = 1360 <= c(window).width() ? "61.5% 52.5%" : "63.5% 52.5%",
        1200 <= c(window).width() ? o.to(c(".overlay"), {
            scale: 17,
            transformOrigin: e,
            duration: 1
        }).to(c(".overlay__inner"), {
            autoAlpha: 0
        }, "<").to(c(".taiko-logo-o"), {
            autoAlpha: 0
        }, "<") : o.to(c(".overlay"), {
            autoAlpha: 0,
            duration: 1
        }).to(c(".tai__hero .scroller .btn"), {
            scale: 0
        }, "<"),
        ScrollTrigger.create({
            scroller: s,
            trigger: ".tai__hero",
            start: "top 0%",
            onEnter: function() {
                gsap.to(c(".tai__hero .scroller .btn span"), {
                    autoAlpha: 0,
                    duration: .4,
                    ease: "expo.out"
                })
            },
            onLeaveBack: function() {
                gsap.to(c(".tai__hero .scroller .btn span"), {
                    autoAlpha: 1,
                    duration: .4,
                    ease: "expo.out"
                })
            }
        }),
        (a = gsap.timeline({
            paused: !0,
            repeat: -1
        })).to(c(".tai__menu__toggle .inner > span:first-child"), {
            rotate: 105,
            duration: .25,
            ease: "expo.in"
        }).to(c(".tai__menu__toggle .inner > span.circle"), {
            scale: 1,
            duration: .2,
            ease: "expo.in"
        }, ">-.2").to(c(".tai__menu__toggle .inner > span:first-child"), {
            rotate: 25,
            duration: .5,
            ease: "expo.in"
        }).to(c(".tai__menu__toggle .inner > span.circle"), {
            scale: 1.1,
            duration: .2,
            ease: "expo.in"
        }, ">-.2").to(c(".tai__menu__toggle .inner > span:last-child"), {
            rotate: -105,
            duration: .25,
            ease: "expo.in"
        }).to(c(".tai__menu__toggle .inner > span.circle"), {
            scale: 1,
            duration: .2,
            ease: "expo.in"
        }, ">-.2").to(c(".tai__menu__toggle .inner > span:last-child"), {
            rotate: -25,
            duration: .5,
            ease: "expo.in"
        }).to(c(".tai__menu__toggle .inner > span.circle"), {
            scale: 1.1,
            duration: .2,
            ease: "expo.in"
        }, ">-.2"),
        c(".tai__menu__toggle").on("mouseenter", function() {
            a.play()
        }),
        c(".tai__menu__toggle").on("mouseleave", function() {
            a.restart().pause()
        }),
        c(".back-to-top").on("click", function(t) {
            t.preventDefault(),
            1024 < c(window).width() ? r.scrollTo(0, 0) : window.scrollTo(0, 0)
        }),
        c("[data-has-switcher]").each(function() {
            for (var t = c(this).find("[data-text]"), e = t.data("text").split(", "), o = gsap.timeline({
                repeat: -1,
                scrollTrigger: {
                    scroller: s,
                    trigger: this,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play pause play pause"
                }
            }), a = 0; a < e.length; a++)
                o.set(t, {
                    y: "110%",
                    force3D: !0,
                    text: e[a]
                }),
                o.to(t, {
                    y: "0%",
                    force3D: !0,
                    duration: .4,
                    ease: "expo.out"
                }).to(t, {
                    y: "-110%",
                    force3D: !0,
                    duration: .4,
                    ease: "expo.in"
                }, ">1")
        }),
        function() {
            if (1200 < c(window).width()) {
                var t = document.querySelector(".tai__partners");
                gsap.timeline({
                    scrollTrigger: {
                        scroller: s,
                        trigger: t,
                        invalidateOnRefresh: !0,
                        // pin: ".tai__partners__sticky",
                        toggleActions: "play none none reverse",
                        scrub: 1,
                        start: "top 0%",
                        end: function() {
                            return "+=" + t.offsetWidth
                        }
                    }
                }).to(".tai__partners__logos", {
                    x: function() {
                        return -(t.scrollWidth - document.documentElement.clientWidth) - 200 + "px"
                    },
                    ease: "none"
                })
            }
        }(),
        n = gsap.timeline({
            paused: !0
        }),
        i = new Howl({
            src: ["taiko-hit.wav"],
            volume: .25
        }),
        gsap.set(c(".tai__contact__inner .h1 > span > span"), {
            y: "100%"
        }),
        gsap.set(c(".tai__contact__inner button"), {
            y: "120%"
        }),
        gsap.set(c(".tai__contact__inner input"), {
            y: "100%"
        }),
        gsap.set(c(".tai__contact__inner small span"), {
            y: "100%"
        }),
        n.to(c(".tai__contact__inner .h1 > span > span"), {
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            delay: .8
        }).to(c(".tai__contact__inner input"), {
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            onStart: function() {
                c(".tai__contact__inner .input-wrapper").toggleClass("--scale-before")
            },
            onReverseComplete: function() {
                c(".tai__contact__inner .input-wrapper").toggleClass("--scale-before")
            }
        }, "<").to(c(".tai__contact__inner button"), {
            y: 0,
            duration: 1.2,
            ease: "expo.out"
        }, "<").to(c(".tai__contact__inner small span"), {
            y: 0,
            duration: 1.2,
            ease: "expo.out"
        }, "<"),
        c(".tai__menu__toggle, .tai__footer > a").on("click", function() {
            var t = c(".tai__menu__toggle").offset()
              , e = c(".tai__menu__toggle").width()
              , o = t.left + e / 2;
            c(".tai__contact").addClass("is-open"),
            l.addClass("modal-is-open"),
            gsap.set(c(".tai__contact"), {
                clipPath: "circle(0% at " + o + "px 38px)"
            }),
            i.play(),
            gsap.to(c(".tai__contact"), {
                clipPath: "circle(140% at " + o + "px 38px)",
                duration: 1.2,
                ease: "expo.inOut",
                onStart: function() {
                    return n.timeScale(1).play()
                },
                onComplete: function() {
                    document.querySelector(".tai__contact").style = {
                        "clip-path": null
                    }
                }
            })
        }),
        c(".tai__contact .close").on("click", function() {
            var t = c(".tai__menu__toggle").offset()
              , e = c(".tai__menu__toggle").width()
              , o = t.left + e / 2;
            gsap.set(c(".tai__contact"), {
                clipPath: "circle(140% at " + o + "px 38px)"
            }),
            gsap.to(c(".tai__contact"), {
                clipPath: "circle(0% at " + o + "px 38px)",
                duration: 1.2,
                ease: "expo.inOut",
                onComplete: function() {
                    n.timeScale(5).reverse(),
                    c(".tai__contact").removeClass("is-open"),
                    l.removeClass("modal-is-open")
                }
            })
        }),
        c(".tai__contact form").on("submit", function() {
            var t = {
                name: c("#taiko-contact-name").val(),
                email: c("#taiko-contact-email").val(),
                phone: c("#taiko-contact-phone").val()
            };
            return c.ajax({
                method: "POST",
                url: "https://formsubmit.co/ajax/contact@taiko.studio",
                dataType: "json",
                accepts: "application/json",
                data: t,
                success: function(t) {
                    c(".form-group.--submit").addClass("--success")
                },
                error: function(t) {}
            }),
            !1
        }),
        c(".tai__footer__bottom a[data-modal]").on("click", function() {
            var t = c('[data-modal="aviso-de-privacidad"]').offset()
              , e = c('[data-modal="aviso-de-privacidad"]').width()
              , o = (c('[data-modal="aviso-de-privacidad"]').height(),
            t.left + e / 2);
            c(".tai__mentions").css({
                "clip-path": "circle(0% at " + o + "px 95%)"
            }),
            c(".tai__mentions").addClass("is-open"),
            l.addClass("modal-is-open"),
            gsap.to(c(".tai__mentions"), {
                clipPath: "circle(140% at " + o + "px 95%)",
                duration: 1.2,
                ease: "expo.inOut",
                onComplete: function() {
                    document.querySelector(".tai__mentions").style = {
                        "clip-path": null
                    }
                }
            })
        }),
        c(".tai__mentions .close").on("click", function() {
            var t = c('[data-modal="aviso-de-privacidad"]').offset()
              , e = c('[data-modal="aviso-de-privacidad"]').width()
              , o = (c('[data-modal="aviso-de-privacidad"]').height(),
            t.left + e / 2);
            c(".tai__mentions").css({
                "clip-path": "circle(140% at " + o + "px 95%)"
            }),
            gsap.to(c(".tai__mentions"), {
                clipPath: "circle(0% at " + o + "px 95%)",
                duration: 1.2,
                ease: "expo.inOut",
                onComplete: function() {
                    c(".tai__mentions").removeClass("is-open"),
                    l.removeClass("modal-is-open")
                }
            })
        }),
        ScrollTrigger.create({
            scroller: s,
            trigger: ".tai__wrapper",
            start: "top 0%",
            pin: ".tai__nav",
            pinSpacing: !1
        }),
        c("[data-reveal]").each(function() {
            var t, e = c(this).find("> * > *"), o = c(this).data("reveal"), a = gsap.timeline({
                scrollTrigger: {
                    scroller: s,
                    trigger: this,
                    start: "top 60%",
                    toggleActions: "play reverse play reverse"
                }
            });
            if (t = c(this).data("reveal-speed") ? c(this).data("reveal-speed") : .1,
            "inline" == o) {
                var n = c(this).find(".highlight");
                a.to(n, {
                    backgroundPosition: "-100%",
                    ease: "expo.inOut",
                    duration: .8,
                    stagger: .2
                }).to(n, {
                    color: "#FBFAEA",
                    ease: "linear",
                    duration: .8,
                    stagger: .2
                }, "<")
            } else
                gsap.set(e, {
                    y: "140%"
                }),
                a.to(e, {
                    y: "0%",
                    ease: "expo.out",
                    duration: 1.2,
                    stagger: t
                })
        }),
        c("[data-background]").each(function() {
            var t = this;
            ScrollTrigger.create({
                scroller: s,
                trigger: this,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function() {
                    c("body").attr("data-theme", c(t).data("background"))
                },
                onEnterBack: function() {
                    c("body").attr("data-theme", c(t).data("background"))
                }
            })
        }),
        c(".tai__zoom").each(function() {
            gsap.timeline({
                scrollTrigger: {
                    scroller: s,
                    trigger: this,
                    scrub: !0,
                    start: "top 100%",
                    end: "bottom 50%",
                    toggleActions: "pause none none reverse"
                }
            }).to(c(this).find("img"), {
                scale: 1
            })
        }),
        c(".tai__esprit__item__content").each(function() {
            var t = c(this).find("h3 > span > span, p > span > span")
              , e = gsap.timeline({
                scrollTrigger: {
                    scroller: s,
                    trigger: this,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
            gsap.set(t, {
                y: "120%"
            }),
            e.to(t, {
                y: "0%",
                duration: .8,
                stagger: .01,
                ease: "expo.out"
            })
        }),
        c(window).width() < 992 ? c(".tai__formules article").on("click", ".toggler", function() {
            c(this).toggleClass("is-active"),
            c(this).parent().toggleClass("is-active"),
            c(this).parent().siblings().removeClass("is-active")
        }) : (c(".tai__formules article").on("mouseenter", function(t) {
            var e = t.pageX - c(this).offset().left
              , o = t.pageY - c(this).offset().top;
            gsap.fromTo(c(this).find(".inner"), {
                clipPath: "circle(0% at " + e + "px " + o + "px)"
            }, {
                clipPath: "circle(150% at " + e + "px " + o + "px)",
                ease: "cubic.out",
                duration: .8
            })
        }),
        c(".tai__formules article").on("mouseleave", function(t) {
            var e = t.pageX - c(this).offset().left
              , o = t.pageY - c(this).offset().top;
            gsap.to(c(this).find(".inner"), {
                clipPath: "circle(0% at " + e + "px " + o + "px)",
                ease: "cubic.out",
                duration: .8
            })
        })),
        u.setCursor("c-cursor"),
        c(document).on("mouseenter", "body", function() {
            c("#" + u.cursorElement).css({
                opacity: 1
            })
        }),
        c(document).on("mouseleave", "body", function() {
            c("#" + u.cursorElement).css({
                opacity: 0
            })
        }),
        c(document).on("mouseenter", "[data-cursor]", function() {
            var t = c(this).data("cursor");
            if ("big" == t ? gsap.to(c("#" + u.cursorElement), {
                width: 130,
                height: 130,
                duration: .8,
                transformOrigin: "50% 50%",
                ease: "expo.out"
            }) : "bigger" == t && gsap.to(c("#" + u.cursorElement), {
                width: 226,
                height: 226,
                duration: .8,
                transformOrigin: "50% 50%",
                ease: "expo.out"
            }),
            this.hasAttribute("data-cursor-text")) {
                var e = c(this).data("cursor-text");
                c(".c-cursor__inner").html(e)
            }
            this.hasAttribute("data-cursor-difference") && c(".c-cursor-wrapper").addClass("--difference")
        }),
        c(document).on("mouseenter", "[data-cursor-difference]", function() {
            gsap.to(c(".c-cursor__difference"), {
                autoAlpha: 1,
                duration: .8,
                ease: "expo.out"
            })
        }),
        c(document).on("mouseleave", "[data-cursor-difference]", function() {
            gsap.to(c(".c-cursor__difference"), {
                autoAlpha: 0,
                duration: .8,
                ease: "expo.out"
            })
        }),
        c(document).on("mouseleave", "[data-cursor]", function() {
            gsap.to(c("#" + u.cursorElement), {
                width: 16,
                height: 16,
                duration: .8,
                ease: "expo.out"
            }),
            c(".c-cursor__inner").text("")
        }),
        c("body").on("contextmenu", function(t) {
            return !1
        })
    });
    var o = gsap.timeline({
        paused: !0
    });
    o.to(c(".tai__loader"), {
        autoAlpha: 0,
        ease: "power2.inOut",
        duration: .8
    }).to(c(".tai__hero"), {
        autoAlpha: 1,
        ease: "power2.inOut",
        duration: .8
    }).to(c(".tai__hero .scroller__inner"), {
        y: "0%",
        ease: "expo.out",
        duration: .8
    }),
    c(window).on("load", function() {
        l.addClass("--loaded"),
        o.play(),
        setTimeout(function() {
            r.update()
        }, 250)
    })
}(jQuery);
