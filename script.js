$(document).ready(function() {


//Click on image, logs that person.
$("img").on("click", function(){
var characterName = $(this).attr("value");
console.log(characterName + " clicked.");

var gifApiKey = "3jMvNzOuh5eBAmKGoigDH6ZFcSFVgdoG";
var gifURL= "https://api.giphy.com/v1/gifs/translate?api_key="+ gifApiKey + "&s=" + characterName;

$.ajax({
    url: gifURL,
    method: "GET",
  }).then(function(response){
//   console.log(response.data.images.original.url);

var imageUrl = response.data.images.original.url;
console.log(imageUrl);
var characterGifDisplay = $("<img>");

// Setting the catImage src attribute to imageUrl
characterGifDisplay.attr("src", imageUrl);
$("#gifUrl").append(characterGifDisplay);


// if (imageValue === "Leslie Knope"){
//     //Search gif and quote for leslie
// }
// else if (imageValue === "Ron Swanson"){
//   //Search gif and quote for ron
// }
// else if (imageValue === "April Ludgate"){
//       //Search gif and quote for april
// }
// else if (imageValue === "Ben Wyatt"){
//       //Search gif and quote for ben
// }
// else if (imageValue === "Tom Haverford"){
//       //Search gif and quote for tom
// }
// else if (imageValue === "Jerry Gergic"){
//       //Search gif and quote for jerry
// }
// else if (imageValue === "Andy Dwyer"){
//       //Search gif and quote for andy
// }
// else if (imageValue === "Donna Meagle"){
//       //Search gif and quote for donna
// }

})
})

});