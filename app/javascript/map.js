document.addEventListener("turbo:load", function() {
    const eventMap = document.getElementById('map')
    if (eventMap != null) showMap()

    function showMap(){
        mapboxgl.accessToken = eventMap.dataset.mapboxApiKey

        if (!mapboxgl.supported()) {
            eventMap.querySelector('.no-support').classList.remove('d-none')
            return
        }

        const mapboxClient = mapboxSdk( { accessToken: mapboxgl.accessToken } )
        const location = eventMap.dataset.mapboxAddress

        mapboxClient.geocoding.forwardGeocode({
            query: location,
            limit: 1
        }).send().then(
            function (res) {
                if (res.body.features.length == 0){
                    eventMap.querySelector('.invalid-address').classList.remove('d-none')
                    return
                }

                const coordinates = res.body.features[0].geometry.coordinates

                const map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: coordinates,
                    zoom: 14
                })

                map.addControl(new mapboxgl.FullscreenControl());
                map.addControl(new MapboxLanguage({  defaultLanguage: 'ru'}));

                new mapboxgl.Marker({
                    color: 'red'
                }).setLngLat(coordinates).addTo(map)

            }, function (err) {
                eventMap.querySelector('.geocode-error').classList.remove('d-none')
            }
        )
    }
})

