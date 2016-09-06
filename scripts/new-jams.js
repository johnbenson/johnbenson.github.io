  var weeklyTop5 = [];

  function getRecentAlbums(){

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=bensonburner&api_key=" + config.API_KEY + "&format=json", function(data){
      weeklyTop5 = data.weeklyalbumchart.album;
        console.log(weeklyTop5);
        printRecentAlbums();
      //call the printFunction when json is loaded
    });
  };

  function printRecentAlbums(){
    // console.log("from printRecentAlbums", weeklyTop5);

    for (i = 0; i < 3; i++){

      // create a variable with album name wrapped in url a
      var albumURL = '<a href="' + weeklyTop5[i].url + '">' + weeklyTop5[i].name + '</a>';
      console.log(albumURL);

      // append Artist Name - Album Name w/ URL to ul
      $('#newJams').append("<li>" + weeklyTop5[i].artist["#text"] + " - " + albumURL + "</li>");

    }
  };
