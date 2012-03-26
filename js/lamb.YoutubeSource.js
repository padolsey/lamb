(function() {

  lamb.YoutubeSource = YoutubeSource;
  lamb.Radio.Source.types.youtube = YoutubeSource;

  var ytEvents = new lamb.EventEmitter;

  window.onYouTubePlayerReady = function(id) {
    ytEvents.emit('ready:' + id);
  };



  function YoutubeSource(data) {
    this.data = data;
    this.setupDOM();
    this.setupEvents();
    this.get();
  }

  YoutubeSource.prototype = Object.create(lamb.EventEmitter);

  YoutubeSource.prototype.setupDOM = function() {
    this.dom = $('<div>').css({
      position: 'absolute',
      top: -9999,
      left: -9999,
      visibility: 'hidden'
    }).appendTo(
      RadioSource.container ||
      (RadioSource.container = $('<div>').appendTo('body'))
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
    });

    swfobject.embedSWF(
      'http://www.youtube.com/v/' +
        this.data.youtubeID +
      '?enablejsapi=1&playerapiid=' +
        this.id +
      '&version=3',
      'ytapiplayer',
      '425',
      '356',
      '8',
      null,
      null, 
      { allowScriptAccess: 'always' },
      { id: this.id }
    );

  }

}());