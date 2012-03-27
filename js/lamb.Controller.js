(function() {

  lamb.Controller = Controller;

  function Controller() {
    this.background = new lamb.Background();
    this.radio = new lamb.Radio();
  }

  Controller.prototype.visit = function(location) {
    this.radio.setSource(
      new lamb.Radio.Source({
        type: 'youtube',
        youtubeID: 'V44Kj9FfBMg'
      })
    );
  };

}());