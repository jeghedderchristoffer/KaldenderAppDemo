$(document).ready(function () {


    // Resize screen
    var wHeight = $(window).height() - 15;
    function resizedw() {
        wHeight = $(window).height() - 15;
        $('#calendar').fullCalendar('option', 'height', wHeight);
    };
    var doit;
    window.onresize = function () {
        clearTimeout(doit);
        doit = setTimeout(resizedw, 100);
    };


    // Calendar
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
        slotEventOverlap: false,
        events: [
            {
                title: 'Long Event 1',
                start: '2017-05-15 09:00',
                end: '2017-05-15 11:00', 
                url: ''
            },
            {
                title: 'Long Event 2',
                start: '2017-05-15 11:00',
                end: '2017-05-15 12:00'
            },
            {
                title: 'Long Event 3',
                start: '2017-05-15 12:00',
                end: '2017-05-15 14:00'
            },
            {
                title: 'Long Event 4',
                start: '2017-05-15 14:00',
                end: '2017-05-15 15:00'
            },
            {
                title: 'Long Event 5',
                start: '2017-05-15 15:00',
                end: '2017-05-15 17:00'
            },

            //
            {
                title: 'Long Event 1',
                start: '2017-05-16 09:00',
                end: '2017-05-16 11:00'
            },
            {
                title: 'Long Event 2',
                start: '2017-05-16 11:00',
                end: '2017-05-16 12:00'
            },
            {
                title: 'Long Event 3',
                start: '2017-05-16 12:00',
                end: '2017-05-16 14:00'
            },
            {
                title: 'Long Event 4',
                start: '2017-05-16 14:00',
                end: '2017-05-16 15:00'
            },
            {
                title: 'Long Event 5',
                start: '2017-05-16 15:00',
                end: '2017-05-16 17:00'
            },

            //
            {
                title: 'Long Event 1',
                start: '2017-05-17 09:00',
                end: '2017-05-17 11:00'
            },
            {
                title: 'Long Event 2',
                start: '2017-05-17 11:00',
                end: '2017-05-17 12:00'
            },
            {
                title: 'Long Event 3',
                start: '2017-05-17 12:00',
                end: '2017-05-17 14:00'
            },
            {
                title: 'Long Event 4',
                start: '2017-05-17 14:00',
                end: '2017-05-17 15:00'
            },
            {
                title: 'Long Event 5',
                start: '2017-05-17 15:00',
                end: '2017-05-17 17:00'
            },

            //
            {
                title: 'Long Event 1',
                start: '2017-05-18 09:00',
                end: '2017-05-18 11:00'
            },
            {
                title: 'Long Event 2',
                start: '2017-05-18 11:00',
                end: '2017-05-18 12:00'
            },
            {
                title: 'Long Event 3',
                start: '2017-05-18 12:00',
                end: '2017-05-18 14:00'
            },
            {
                title: 'Long Event 4',
                start: '2017-05-18 14:00',
                end: '2017-05-18 15:00'
            },
            {
                title: 'Long Event 5',
                start: '2017-05-18 15:00',
                end: '2017-05-18 17:00'
            },
            //

            {
                title: 'Long Event 1',
                start: '2017-05-19 09:00',
                end: '2017-05-19 11:00'
            },
            {
                title: 'Long Event 2',
                start: '2017-05-19 11:00',
                end: '2017-05-19 12:00'
            },
            {
                title: 'Long Event 3',
                start: '2017-05-19 12:00',
                end: '2017-05-19 14:00'
            },
            {
                title: 'Long Event 4',
                start: '2017-05-19 14:00',
                end: '2017-05-19 15:00'
            },
            {
                title: 'Long Event 5',
                start: '2017-05-19 15:00',
                end: '2017-05-19 17:00'
            }

        ]
    });
});