



function getWeather () {
  //get zip from ip-api
  $.getJSON("https://ipapi.co/json/", function(data) {
    var gzip = data.postal;
    var loc = data.city + " " + data.region;
    $("#zipcode").html(gzip);
    $("#location").html(loc);
    //alert(data.postal);
    
    //alert("test");
    //use zip from ip-api to get weather data
    var apikey = "869f9f521f1aa819";
    var units = "imperial";
    var url = "https://api.wunderground.com/api/da2eea185551b3cf/forecast/geolookup/conditions/q/" + gzip +".json"
    $.getJSON(url, function(data){
      var temp = Math.round(data.current_observation.temp_f);
      var iconURL = data.current_observation.icon_url;
     // alert(temp);
      $("#weather-status").html(data.current_observation.weather);
      $("#temp").html(temp + " " + "F");
      $("#img-src").attr("src",iconURL);
      
      $("#metricBtn").on("click",function() {
        $("#temp").html(Math.round((temp-37)*(5/9)) + " " + "C");
      });
      
      $("#imperialBtn").on("click",function() {
        $("#temp").html(temp + " " + "F");
      });
    });
  
  });
}
    
$(document).ready(function() {
  getWeather();
  
});