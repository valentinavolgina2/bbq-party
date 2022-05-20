import AirDatepicker from 'air-datepicker';

document.addEventListener("turbo:load", function() {
    const datetime_input = document.getElementById('event-date')
    if (datetime_input == null) return

    var selected_date = []
    if(datetime_input.dataset.datetime){
        selected_date = [new Date(datetime_input.dataset.datetime.replace(' UTC',''))]
    }

    new AirDatepicker('#event-date', {
        timepicker: true,
        selectedDates: selected_date,
        dateFormat: 'd MMMM'
    });
})
