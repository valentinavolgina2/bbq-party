import AirDatepicker from 'air-datepicker';

document.addEventListener("turbo:load", function() {
  const datetimeInput = document.getElementById('event-date')
  if (!datetimeInput) return

  let selectedDate = []
  if (datetimeInput.value) {
    selectedDate = [new Date(datetimeInput.value.replace(' UTC',''))]
  }

  new AirDatepicker('#event-date', {
    timepicker: true,
    selectedDates: selectedDate,
    dateFormat: 'd MMMM'
  });
})
