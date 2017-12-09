// ***Assignment: Get Hooked On Bass***

/*Script 1: 
validates contact form 
checks whether essential fields are filled out
also checks whether email address is valid
when submit button is clicked
REFERENCE: CODED WITH REFERENCE TO https://www.w3schools.com/js/js_validation.asp
*/
function validateForm() {
    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var e = document.getElementById("email").value;
    var atpos = e.indexOf("@");
    var dotpos = e.lastIndexOf(".");
    var p = document.getElementById("phone").value;
      if (f == "") {
          alert("First Name must be filled out");
          return false;
      } else if (l == "") {
          alert("Last name must be filled out");
          return false;
      } else if (e == "") {
          alert("Email must be filled out");
          return false;
      } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length) {
        alert("Not a valid e-mail address");
        return false;
      } else if (p == "") {
          alert("Phone must be filled out");
          return false;
      } else {
        alert("Hello " + f + ", This website is under construction. Please email roryfeeney@gmail.com if you would like to get in touch");
         return false;
      }
}
/*Script 2: 
resets all contact form fields 
when submit button is clicked
REFERENCE: coded with reference to https://www.w3schools.com/jsref/met_form_reset.asp
*/
function resetForm() {
    document.getElementById("contactForm").reset()
}
/*Script 3:
smooth scroll from menu to primary navigation
calls JQuery to do this
REFERENCE: coded with reference to 
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
https://www.w3schools.com/jquery/jquery_get_started.asp
*/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

/*Script 4
Leaflet is an open-source JavaScript library 
for mobile friendly interactive mapping
code calls in OpenStreetMap and populates it 
with custom markers coded below
*/
var mymap = L.map('mapid').setView([52.800, -8.200], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);

  L.marker([53.731173, -6.261339]).addTo(mymap)
  .bindPopup("<b>Louth</b><br>Mouth of the Boyne Estuary.");

  L.marker([53.374099, -6.164579]).addTo(mymap)
  .bindPopup("<b>Dublin</b><br>Any beach to the north or south of the city.<br>The Rogerstown, Malahide and Liffey Estuaries.");

  L.marker([52.965342, -5.997724]).addTo(mymap)
  .bindPopup("<b>North Wicklow</b><br>The many beaches from Greystones to Arklow.");
  
  L.marker([52.793431, -6.136792]).addTo(mymap)
  .bindPopup("<b>South Wicklow</b><br>Rocky headlands south of Arklow.");

  L.marker([52.351574, -6.362569]).addTo(mymap)
  .bindPopup("<b>East Wexford</b><br>Along the coast from Kilmichael Point to Raven's Point. Wexford Harbour.");

  L.marker([52.171058, -6.587009]).addTo(mymap)
  .bindPopup("<b>South Wexford</b><br>Beaches along the coast from Rosslare to Burrow Strand.");

  L.marker([52.138162, -7.365975]).addTo(mymap)
  .bindPopup("<b>Waterford</b><br>Along the Copper Coast from Tramore to Dungarvan.");

  L.marker([51.803716, -8.264457]).addTo(mymap)
  .bindPopup("<b>Cork Harbour</b><br>In the outer reaches of the harbour. Small, sandy beaches and rocky headlands.");

  L.marker([51.547949, -8.930930]).addTo(mymap)
  .bindPopup("<b>West Cork</b><br>The many beaches, headlands and piers around Courtmacsharry, Clonakilty and Rosscarbery.");

  L.marker([51.829238, -10.174641]).addTo(mymap)
  .bindPopup("<b>Ring of Kerry</b><br>Some of the sandy surf beaches, such as Inny Strand and Rossbeigh Strand.");

  L.marker([52.273343, -10.033332]).addTo(mymap)
  .bindPopup("<b>Dingle</b><br>Huge sandy beaches: Inch Beach and Brandon Bay.");

  L.marker([52.486571, -9.685579]).addTo(mymap)
  .bindPopup("<b>North Kerry</b><br>Beaches from Fenit to Ballybunion.");

  L.marker([52.758213, -9.492192]).addTo(mymap)
  .bindPopup("<b>West Clare</b><br>Beaches and rock fishing from Loop Head to Black Head. <a href='http://irish-trophy-fish.com/irish-record-fish/marine-species/bass-dicentrarchus-labrax/'>Irish record bass</a> caught at Doughmore Strand.").openPopup();
;