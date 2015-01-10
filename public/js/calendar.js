$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    googleCalendarApiKey: 'AIzaSyCpuxmxvYu_ch56BOxwvRr_lWhBSpSYSdw',
    events: {
      googleCalendarId: '45qblop08sqnk5fcvb7hb4kkq0@group.calendar.google.com',
      timezone: 'America/New_York'
    }
  });
});
