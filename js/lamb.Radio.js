(function() {

  lamb.Radio = Radio;
  lamb.Radio.Source = RadioSource;

  function Radio() {
    this.source = null;
  }

  Radio.prototype = Object.create(lamb.EventEmitter.prototype);

  Radio.prototype.setSource = function(rs) {
    this.source = rs.source;
    rs.source.on('load', function() {
      rs.source.play();
    })
    console.log('Get', rs);
    rs.source.get();
  };

  RadioSource.types = {};

  function RadioSource(o) {
    this.id = 'radioSource' + ++RadioSource.id;
    this.type = o.type;
    this.data = o;
    this.source = new RadioSource.types[this.type](this.data, this.id);
  }

  RadioSource.prototype = Object.create(lamb.EventEmitter.prototype);

  RadioSource.id = 0;
  
}());