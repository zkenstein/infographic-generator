angular.bootstrap(document, ['infographicApp']);

FastClick.attach(document.body);
$(window).on("resize", function() {
    $('[data-equal-height]').make_children_equal_height();
});
$(window).trigger("resize");
