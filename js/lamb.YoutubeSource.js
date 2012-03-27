(function() {

  lamb.YoutubeSource = YoutubeSource;
  lamb.Radio.Source.types.youtube = YoutubeSource;

  var ytEvents = new lamb.EventEmitter;

  window.onYouTubePlayerReady = function(id) {
    ytEvents.emit('ready:' + id);
  };

  function YoutubeSource(data, id) {
    console.log(this);
    this.data = data;
    this.id = id;
    this.setupDOM();
    this.setupEvents();
  }

  YoutubeSource.prototype = Object.create(lamb.EventEmitter.prototype);

  YoutubeSource.prototype.setupDOM = function() {
    this.dom = $('<div>').attr('id', this.id).css({
      //position: 'absolute',
      //top: -9999,
      //left: -9999,
      //visibility: 'hidden'
    }).appendTo(
      YoutubeSource.container ||
      (YoutubeSource.container = $('<div>').appendTo('body'))
    );
  };

  YoutubeSource.prototype.setupEvents = function() {
    ytEvents.on('ready:' + this.id, this.emit.bind(this, 'ready'));
    ytEvents.on('statusUpdate:' + this.id, this.emit.bind(this, 'statusUpdate'));
  };

  YoutubeSource.prototype.get = function() {

    // Assuming yt

    this.once('ready', function() {
      alert('I am ready');
      this.ytElement = document.getElementById(this.id);
      this.emit('load');
    });

    console.log('Get->',       'http://www.youtube.com/v/' +
        this.data.youtubeID +
      '?enablejsapi=1&playerapiid=' +
        this.id +
      '&version=3')

    swfobject.embedSWF(
      'http://www.youtube.com/v/' +
        this.data.youtubeID +
      '?enablejsapi=1&playerapiid=' +
        this.id +
      '&version=3',
      this.id,
      '425',
      '356',
      '8',
      null,
      null, 
      { allowScriptAccess: 'always' },
      { id: this.id }
    );

    

  };

  YoutubeSource.prototype.play = function() {
    console.log(this.ytElement);
    this.ytElement.playVideo();
  };

}());