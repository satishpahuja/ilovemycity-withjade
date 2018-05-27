var citiesHashMap;

function renderHome(req, res) {

    res.render('home', {
        title: 'iLoveMyCity',
        headline: 'We believe that every city has something to say'
    })

}

function renderCity(req, res) {

    var cityName = req.params.city;

    var cityObj = citiesHashMap[cityName];

    res.render('city', {
        title: cityObj.title,
        headline: cityObj.heading,
        city: cityName,
        numberOfImages: cityObj.imageCount
    });

}

function fillCitiesHashMap() {

    citiesHashMap = {

        berlin: {
            title: "Berlin",
            heading: "Berlin: Where love is in the air",
            imageCount: 4
        },

        paris: {
            title: "Paris",
            heading: "Paris: Good talkers are only found in Paris",
            imageCount: 4
        },

        madrid: {
            title: "Madrid",
            heading: "Madrid: Buzz, Beautiful architecture and Football",
            imageCount: 4
        },

        london: {
            title: "London",
            heading: "London: Sparkling, Still, Food, Gorgeous",
            imageCount: 4
        },

        newyork: {
            title: "New York",
            heading: "New York: Come to New York to become someone new",
            imageCount: 6
        }
    };
}

exports.fillCitiesHashMap = fillCitiesHashMap;
exports.renderHome = renderHome;
exports.renderCity = renderCity;