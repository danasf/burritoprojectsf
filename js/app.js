function nextProject() {
  return (moment() > moment().endOf('month').startOf('isoweek').add(16, 'hours') ? moment().add(1,'months').endOf('month').startOf('isoweek').startOf('day') : moment().endOf('month').startOf('isoweek').add(16, 'hours'));
}

$(document).ready(function(){

  // map stuff

  var mymap = L.map('map').setView([37.766624, -122.407286], 16);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    minZoom: 14,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGFuYXNmIiwiYSI6ImNpcTFrbG4xbzAwMWVmeG00anRxNmQ2ZzcifQ.QM3LzzOMq1bZa328oBF51Q'
  }).addTo(mymap);
  L.marker([37.766624, -122.407286]).addTo(mymap)

  // time stuff 
  var burritoProjectDate = nextProject();

  $("#nextServing").html("The next Burrito Project is "+burritoProjectDate.fromNow()+" on Monday, "+burritoProjectDate.format("LL")+".");
  $("#curYear").text(moment().format("YYYY"));

  // smooth scrolling

  $("nav ul li a[href^='#']").on('click', function(e) {
     // prevent default anchor click behavior
     e.preventDefault();

     // store hash
     var hash = this.hash;

     // animate
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = hash;
       });
  });

});