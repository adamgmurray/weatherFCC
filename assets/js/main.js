$(document).ready(function(){
var api;
var lat;
var lon;
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
     lat = position.coords.latitude;
     lon = position.coords.longitude
     api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=8122c51d479c71e4388bbaf48646d76e';
    // api = 'http://api.openweathermap.org/data/2.5/weather?lat=41&lon=-81&appid=8122c51d479c71e4388bbaf48646d76e';
      $.getJSON(api, function(data){
        var temp = data.main.temp;
        var desc = data.weather[0].description;
        var background = data.weather[0].description;
        var cels= (temp-273.15).toFixed(1);
        var fahren= cels * 9 / 5 + 32;
        $("#temp").html(fahren);
        $("#weather").html(desc);

switch (background) {
	 case 'overcast clouds':
		 $('body').css('background-image', 'url("http://hd.freewallpaper-s.net/wp-content/uploads/nature/Sky-colors-weather-clouds-landscape-high-resolution-2560x1600.jpg")');
    break;

	case 'clear sky':
		 $('body').css('background-image', 'url("http://www.okahandja.org.na/wp-content/uploads/2015/04/clear-sky-japan.jpg")');
    break;

	case 'scattered clouds':
		 $('body').css('background-image', 'url("https://i.ytimg.com/vi/z2UDZMu2GLU/maxresdefault.jpg")');
    break;

	case 'broken clouds':
		 $('body').css('background-image', 'url("http://www.sgsweather.com/Images/Glossary1/Fractus%20clouds.jpg")');
    break;

	case 'shower rain':
		 $('body').css('background-image', 'url("http://hd.freewallpaper-s.net/wp-content/uploads/nature/Sky-colors-weather-clouds-landscape-high-resolution-2560x1600.jpg")');
    break;

	case 'rain':
		 $('body').css('background-image', 'url("http://onpasture.com/wp-content/uploads/2015/02/rain-04.jpg")');
    break;

	case 'thunderstorm':
		 $('body').css('background-image', 'url("http://vignette1.wikia.nocookie.net/cardfight/images/9/98/Lightning-thunderstorm-vista-background.jpg/revision/latest?cb=20131112124822")');
    break;

	case 'snow':
		 $('body').css('background-image', 'url("https://wallpaperscraft.com/image/background_glass_point_snowfall_imagination_36833_1920x1200.jpg")');
    break;

	case 'mist':
		 $('body').css('background-image', 'url("http://vignette1.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040")');
    break;

	default:
		alert('No weather background.');
    }




        $("#conversion").on("click", function(){
         $("#temp").html(cels);
  });
        $("#fahr").on("click", function(){
         $("#temp").html(fahren);
  });
        })
      });
   }

})
