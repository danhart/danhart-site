var core = {
    init: function() {
        core.siteLoad();
        core.captureLinksForOutro();
    },
    siteLoad: function() {
        $(window).load(function() {
            $('body').addClass('loaded');
        });
    },
    captureLinksForOutro: function() {
        $("a").click(function(e) {
            $('body').addClass('outro');

            $("#someSelector").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                // moo
            });
        });
    }
}

