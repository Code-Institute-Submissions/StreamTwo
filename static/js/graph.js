queue()
    .defer(d3.json, "EuropeanUnion/members2") 
    .await(makeGraphs);
 
function makeGraphs(error, EuropeanUnionmembers2) { 
    if (error) {
        console.error("makeGraphs error on receiving dataset:", error.statusText);
        throw error;
    }
 
    //EuropeanMembers data
    var dateFormat = d3.time.format("%m/%d/%Y"); 
    EuropeanUnionmembers2.forEach(function (d) { 
        d["accession_year"] = dateFormat.parse(d["accession_year"]); 
        d["european_parliament_seats"] = +d["european_parliament_seats"]; 
    });
 
 
    //Crossfilter creation
    var ndx = crossfilter(EuropeanUnionmembers2); 
 
    //Define Dimensions
    var dateDim = ndx.dimension(function (d) {
        return d["accession_year"]; 
    });
    var europeanMonetaryUnionDim = ndx.dimension(function (d) {
        return d["european_monetary_union"];
    });
    var languageDim = ndx.dimension(function (d) {
        return d["language"]; 
    });
    var countryDim = ndx.dimension(function (d) {
        return d["country"];
    });
    var currencyStatus = ndx.dimension(function (d) {
        return d["currency"]; 
    });
 

    //Calculate metrics
    var numProjectsByDate = dateDim.group();
    var numProjectsByEuropeanMonetaryUnion = europeanMonetaryUnionDim.group();
    var numProjectsByLanguage = languageDim.group();
    var numProjectsByCurrencyStatus = currencyStatus.group();
    var seatsByCountry = countryDim.group().reduceSum(function (d) {
        return d["european_parliament_seats"]; 
    });
    var countryGroup = countryDim.group();
 
 
    var all = ndx.groupAll();
    var seatsInEU = ndx.groupAll().reduceSum(function (d) {
        return d["european_parliament_seats"]; 
    });
 
    //Define values (to be used in charts)
    var minDate = dateDim.bottom(1)[0]["accession_year"]; 
    var maxDate = dateDim.top(1)[0]["accession_year"];
 
    //Charts
    var timeChart = dc.barChart("#time-chart");
    var europeanMonetaryUnionChart = dc.rowChart("#european-monetary-union-row-chart");
    var languageChart = dc.rowChart("#language-row-chart");
    var numberCountriesND = dc.numberDisplay("#number-countries-nd");
    var seatsInEUND = dc.numberDisplay("#seats-in-eu-nd");
    var currencyStatusChart = dc.pieChart("#currency-chart");
    var selectField = dc.selectMenu('#menu-select');
 
 
    selectField
        .dimension(countryDim)
        .group(countryGroup);
 
    numberCountriesND
        .formatNumber(d3.format("d"))
        .valueAccessor(function (d) {
            return d;
        })
        .group(all);
 
    seatsInEUND
        .formatNumber(d3.format("d"))
        .valueAccessor(function (d) {
            return d;
        })
        .group(seatsInEU)
        .formatNumber(d3.format(".3s"));
 
    timeChart
        .ordinalColors(["#C96A23"])
        .width(900)
        .height(300)
        .margins({top: 30, right: 50, bottom: 30, left: 50})
        .dimension(dateDim)
        .group(numProjectsByDate)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxis().ticks(6);
 
    europeanMonetaryUnionChart
        .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
        .width(300)
        .height(250)
        .dimension(europeanMonetaryUnionDim)
        .group(numProjectsByEuropeanMonetaryUnion)
        .xAxis().ticks(5);
 
    languageChart
        .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
        .width(300)
        .height(550)
        .dimension(languageDim)
        .group(numProjectsByLanguage)
        .xAxis().ticks(2);
 
    currencyStatusChart
        .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
        .height(220)
        .radius(90)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(currencyStatus)
        .group(numProjectsByCurrencyStatus);
 
 
    dc.renderAll();
}