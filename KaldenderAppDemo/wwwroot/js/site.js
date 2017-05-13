$(document).ready(function () {

    var wHeight = $(window).height(); 

    function resizedw() {
        wHeight = $(window).height();
        $('#calendar').fullCalendar('option', 'height', wHeight);
    }

    var doit;
    window.onresize = function () {
        clearTimeout(doit);
        doit = setTimeout(resizedw, 100);
    };

    $('#calendar').fullCalendar({
        height: wHeight,
        allDaySlot: false,
        lang: 'da',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'agendaWeek',
        editable: true,
        events: [
            {
                title: 'Long Event',
                start: '2017-05-11 09:00',
                end: '2017-05-11 11:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-06-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-06-16T16:00:00'
            },
            {
                title: 'Meeting',
                start: '2014-06-12T10:30:00',
                end: '2014-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2014-06-12T12:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2014-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-06-28'
            }
        ]
    });
});