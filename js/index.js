$(document).ready(function(){


  var playlist = [{
      title:"Kiss Me",
      artist:"MAGIC!",
      mp3:"https://riohsc.coding.me/music.io/8.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://i.loli.net/2018/09/15/5b9cd29fc9730.jpg"
    },{
      title:"My Favorite Part",
      artist:"Mac Miller/Ariana Grande",
      mp3:"https://riohsc.coding.me/music.io/7.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://i.loli.net/2018/09/09/5b9540c248a24.jpg"
    },{
      title:"Come Back to Earth",
      artist:"Mac Miller",
      mp3:"https://riohsc.coding.me/music.io/6.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://i.loli.net/2018/09/08/5b93d8f8d4f14.jpg"
    },{
      title:"Chasing All the Stars",
      artist:"Fleurie",
      mp3:"https://riohsc.coding.me/music.io/5.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://i.loli.net/2018/08/23/5b7e443468796.jpg"
    },{
      title:"Lego House",
      artist:"Ed Sheeran",
      mp3:"https://riohsc.coding.me/music.coding.me/music/Lego_House.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://file.mxpkx.com/dl/-1950460787.jpg"
    },{
      title:"I'll Get By",
      artist:"B.Reith",
      mp3:"https://file.mxpkx.com/dl/B.Reith - I'll Get By.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://file.mxpkx.com/dl/1706938418.jpg"
    },{
      title:"Lost In Your Maze",
      artist:"Anzol/LuckyMaxx",
      mp3:"https://riohsc.coding.me/music.io/1.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "http://wx1.sinaimg.cn/mw690/0060lm7Tly1fu9kprw0zlj31kw1kwqv5.jpg"
    },{
      title:"Not Who I Am",
      artist:"B.Reith",
      mp3:"https://riohsc.coding.me/music.coding.me/music/B.Reith%20Dave%20Barnes%20-%20Not%20Who%20I%20Am.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://file.mxpkx.com/dl/1706938418.jpg"
    },{
      title:"Chaperone",
      artist:"Hurts",
      mp3:"https://riohsc.coding.me/music.coding.me/music/Chaperone.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://file.mxpkx.com/dl/-1707976752.jpg"
    },{
      title:"Liquid",
      artist:"Asoto Union",
      mp3:"https://riohsc.coding.me/music.coding.me/music/Asoto%20Union%20-%20Liquid.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://file.mxpkx.com/dl/-645481345.jpg"
    },{
      title:"Sorry",
      artist:"Halsey",
      mp3:"https://riohsc.coding.me/music.io/2.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://i.loli.net/2018/08/19/5b7973259b055.jpg"
    },{
      title:"Grey Room",
      artist:"Damien Rice",
      mp3:"https://riohsc.coding.me/music.io/3.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "https://i.loli.net/2018/08/20/5b7a1acfdfec1.jpg"
    },{
      title:"Sth. About December",
      artist:"Christina Perri",
      mp3:"https://riohsc.coding.me/music.io/4.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "https://i.loli.net/2018/08/22/5b7d3c41bb019.jpg"
    },{
      title:"Bubble",
      m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
      oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
      poster: "http://31.media.tumblr.com/810b1125a8b9e9f192d009ef58dceb07/tumblr_nbe8wsmKuz1rknpqyo1_500.jpg"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});