var StreamPlayer = require('stream-player');
var sleep = require('sleep');
var player = new StreamPlayer();

// Add a song url to the queue

//player.add('http://path-to-mp3.com/example.mp3', metaData);

// Add a song url to the queue along with some metadata about the song
// Metadata can be any object that you want in any format you want
/*
var metaData = {
  "title": "Humble",
  "artist": "Kendrick Lamarr",
  "duration": 184000,
  "humanTime": "3:04"
};
*/

//player.add('./Humble.mp3', metaData);

// Start playing all songs added to the queue (FIFO)
//player.play();

// Get the metadata for the current playing song and a time stamp when it started playing
//player.nowPlaying();

// Get an array of metadata for the songs in the queue (excludes the current playing song)
//player.getQueue();

// Get if the player is currently playing
//player.isPlaying();

exports.startAudio = (songName) => {
  // EMIT EVENTS
  player.on('play start', function () {
    // Code here is executed every time a song starts playing
    console.log("Playing song: " + songName);
  });

  player.on('play end', function () {
    // Code here is executed every time a song ends
    console.log("Song ended");
  });

  player.on('song added', function () {
    // Code here is executed every time a song is added to the queue
    console.log("Song added to the queue");
  });

  //if (player.isPlaying()) {
    //player.pause();
    //sleep.sleep(5);
    //player.remove(0);
    // console.log(player.getQueue());
    // player.add('./' + songName + ".mp3");
    // console.log(player.getQueue());
    //player.play();
  //}
  //else {
    player.add('./' + songName + ".mp3");

    player.play();
    sleep.sleep(3);
    player.pause();
    sleep.sleep(3);
    player.play();
  //}
}