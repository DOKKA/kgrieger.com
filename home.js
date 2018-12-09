$(document).ready(() => {
    $.get('Felix_the_cat.svg').done((data) => {
        var svg = $('svg', data);
        $('#column1').append(svg);
        var felix = $('#body')[0];
        var yyy = function() {
            sweep(felix, 'fill', '#a8f', '#a8f', {
                direction: -1,
                duration: 2000,
                callback: yyy
            });
        };
        sweep(felix, 'fill', '#a8f', '#a8f', {
            direction: -1,
            duration: 2000,
            callback: yyy
        });
        var svg2 = $('svg')
        svg2.addClass('flip');
    });
});