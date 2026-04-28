document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
  });
});

/* ── Add-to-Calendar helpers ────────────────────────────────────────── */

var ZOOM_URL = 'https://uni-graz.zoom.us/j/69588616456?pwd=CnjYI539FaYbpnVC37v9ir8fWA2hvM.1';

/**
 * Parse a DD.MM.YYYY date string into { day, month, year } zero-padded strings.
 */
function parseDateParts(dateStr) {
  var p = dateStr.split('.');
  return { day: p[0], month: p[1], year: p[2] };
}

/**
 * Google Calendar — opens in a new tab with pre-filled event.
 */
function openOutlookCalendar(title, dateStr, startTime, endTime) {
  var d = parseDateParts(dateStr);
  var isoDate = d.year + '-' + d.month + '-' + d.day;

  var url = 'https://outlook.live.com/calendar/0/deeplink/compose?' + [
    'subject='  + encodeURIComponent('AGKI-DH Webinar: ' + title),
    'startdt='  + encodeURIComponent(isoDate + 'T' + startTime + ':00'),
    'enddt='    + encodeURIComponent(isoDate + 'T' + endTime   + ':00'),
    'body='     + encodeURIComponent('Webinar der DHd-AG AGKI-DH\n\nZoom: ' + ZOOM_URL),
    'location=' + encodeURIComponent('Zoom (Online)')
  ].join('&');

  window.open(url, '_blank');
}

/**
 * Outlook.com — opens in a new tab with pre-filled event.
 */
function openOutlookCalendar(title, dateStr, startTime, endTime) {
  var d = parseDateParts(dateStr);
  var isoDate = d.year + '-' + d.month + '-' + d.day;

  var params = [
    'path=/calendar/action/compose',
    'rru=addevent',
    'subject='  + encodeURIComponent('AGKI-DH Webinar: ' + title),
    'startdt='  + isoDate + 'T' + startTime + ':00',
    'enddt='    + isoDate + 'T' + endTime   + ':00',
    'body='     + encodeURIComponent('Webinar der DHd-AG AGKI-DH\n\nZoom: ' + ZOOM_URL),
    'location=' + encodeURIComponent('Zoom (Online)')
  ];

  window.open('https://outlook.live.com/calendar/0/action/compose?' + params.join('&'), '_blank');
}

/**
 * .ics download — works with Apple Calendar, Thunderbird, etc.
 */
function downloadICS(title, dateStr, startTime, endTime) {
  var d = parseDateParts(dateStr);
  var icsStart = d.year + d.month + d.day + 'T' + startTime.replace(':', '') + '00';
  var icsEnd   = d.year + d.month + d.day + 'T' + endTime.replace(':', '')   + '00';

  var ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AGKI-DH//Webinar//DE',
    'BEGIN:VEVENT',
    'DTSTART;TZID=Europe/Vienna:' + icsStart,
    'DTEND;TZID=Europe/Vienna:'   + icsEnd,
    'SUMMARY:AGKI-DH Webinar: '  + title,
    'DESCRIPTION:Webinar der DHd-AG AGKI-DH\\n\\nZoom: ' + ZOOM_URL,
    'URL:' + ZOOM_URL,
    'LOCATION:Zoom (Online)',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'agki-dh-webinar.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
