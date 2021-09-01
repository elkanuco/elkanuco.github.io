/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });


    $('#testposition').hide();
    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }

        document.Form1.posx.value = event.pageX;
        document.Form1.posy.value = event.pageY;
        document.Form1.maxx.value = $(window).width();
        document.Form1.maxy.value = $(window).height();


        let box = document.querySelector("#box");
        let boxBoundingRect = box.getBoundingClientRect();
        let boxCenter = {
            x: boxBoundingRect.left + boxBoundingRect.width / 2,
            y: boxBoundingRect.top + boxBoundingRect.height / 2
        };

        let angle = Math.atan2(event.pageX - boxCenter.x, -(event.pageY - boxCenter.y)) * (180 / Math.PI);

        document.Form1.angle.value = angle;

        if (angle>-22.5 && angle < 22.5) {
            document.getElementById("profilepic").src = "assets/img/profile - up.jpg";
        } else if (angle>22.5 && angle <45) {
            document.getElementById("profilepic").src = "assets/img/profile - right - 45.jpg";
        } else if (angle>45 && angle <135) {
            document.getElementById("profilepic").src = "assets/img/profile - right.jpg";
        } else if (angle>135 && angle <157.5) {
            document.getElementById("profilepic").src = "assets/img/profile - right - down - 45.jpg";
        } else if ((angle>157.5 && angle <180) || (angle>-180 && angle <-157.5)){
            document.getElementById("profilepic").src = "assets/img/profile - down.jpg";
        } else if (angle>-157.5 && angle <-135) {
            document.getElementById("profilepic").src = "assets/img/profile - left - down - 45.jpg";
        } else if (angle>-135 && angle <-90) {
            document.getElementById("profilepic").src = "assets/img/profile - left.jpg";
        } else if (angle>-90 && angle <-22.5) {
            document.getElementById("profilepic").src = "assets/img/profile - left - 45.jpg";
        } else {
            document.getElementById("profilepic").src = "assets/img/profile.jpg";
        }

        document.body.addEventListener('mouseout', function(e) {
            document.getElementById("profilepic").src = "assets/img/profile.jpg";
        });



    }

})(jQuery); // End of use strict
