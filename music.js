// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Use JavaScript to create a list of songs in the index.html file for your Music History project. Download the songs.js file, which contains an array of strings with song information.

// Add one song to the beginning and the end of the array.
// Loop over the array, and remove any words or characters that obviously don't belong.
// Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.
// Example output:

// {Song name} by {Artist} on the album {Album}

// {Song name} by {Artist} on the album {Album}

var songs = [];
var songDiv = document.getElementById("songName")

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Human - by Krewella on the album Ammunition");
songs.unshift("Warrior Concerto - by Glitch Mob on the album We Can Make the World Stop");

for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace('*', '').replace('@', '').replace('(', '').replace('!', '').replace('>', '-');


songDiv.innerHTML += "<div>" + songs[i] + "</div>"

}
console.log("This is supposed to fix my strings ", songs);


