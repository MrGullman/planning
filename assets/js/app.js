// Set Timezone
var m = moment().tz("Europe/Stockholm");
m.locale("sv");

// Set todays date
var today = m.format("YYYYMMDD");
// today = m.add(7,'days');

var app = new Vue({
  el: '#app-container',
  data: {
    title: 'Raporteringssystem',
    date: m.format('LLLL')
  }
})

