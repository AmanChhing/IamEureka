# IamEureka

var API_KEY = '14504884-37a6f8698d3129414ea58584c';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});






------Google Images
function getImageUrl() 
{
  // Google image search - 100 searches per day.
  // https://developers.google.com/image-search/
  // var searchUrl = 'https://ajax.googleapis.com/ajax/services/search/images' +
  //   '?v=1.0&q=' + encodeURIComponent(searchTerm);
  //alert('clicked');
  /*var searchUrl = 'https://www.googleapis.com/customsearch/v1' +'?key=' + 'AIzaSyAymbD4C8RpXxAYNuUMvIl47nQY5hahEg4' + '&cx=' + '012729109891803392179:eyp6gi9w6xy' + '&searchType=image'+'&imgSize=xxlarge'+'&q=who%20is%20sashi%20tharoor'
  */
var searchUrl = 'https://www.googleapis.com/customsearch/v1' +'?key=' + 'AIzaSyAymbD4C8RpXxAYNuUMvIl47nQY5hahEg4' + '&cx=' + '012729109891803392179:eyp6gi9w6xy'+'&q='+'what%20is%20Conversational%20AI'+'&searchType='+'image'+'&imgSize=xxlarge'

  var x = new XMLHttpRequest();
  x.open('GET', searchUrl);
  // The Google image search API responds with JSON, so let Chrome parse it.
  x.responseType = 'json';
  //alert("came");
  x.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = x.response;
    var firstResult = response.items[0];
    console.log(response.items);
    // Take the thumbnail instead of the full image to get an approximately
    // consistent image size.
    var imageUrl = firstResult.image.link;
    alert(imageUrl);
    }
  x.send();
 
}
