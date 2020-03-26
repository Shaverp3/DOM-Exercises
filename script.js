// var movieObject = {
//     title: "Star Wars: A New Hope",
//     genre: "Science Fiction",
//     releaseDate: "May 25, 1977"
//   }


//   Use document.querySelector() to grab a reference to each element in your HTML. Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

// document.querySelector("#title").innerHTML = movieObject.title;
// document.querySelector("#genre").innerHTML = movieObject.genre;
// document.querySelector("#release-date").innerHTML = movieObject.releaseDate;

// var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];


// for (var i = 0; i < downtownRestaurants.length; ++i){
//      document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
//     //console.log(downtownRestaurants[i])
// }

// var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

// for(var i=0;i < sandwichToppings.length; ++i){
//     document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
// }
function printMovie(movieSchedule){
    console.log("this is movieSchedule", movieSchedule)
    document.querySelector("#movie-schedule").innerHTML += `<div class="movie-item">
    <h4>${movieSchedule.title}</h4>
    <p>${movieSchedule.rating}</p>
    <img class="movie-img" src=${movieSchedule.poster} alt="No Poster" />
</div>`
}

// printMenuItem(beansAndRice)
// printMenuItem(beansAndGreens)

var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

  for(var i=0; i < movieSchedule.length; i++){
    printMovie(movieSchedule[i])
}
