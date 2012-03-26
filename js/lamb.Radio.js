(function() {

  lamb.Radio = Radio;
  lamb.Radio.Source = RadioSource;

  function Radio() {

  }

  function RadioSource(o) {
    this.id = 'radioSource' + ++RadioSource.id;
    this.type = o.type;
    this.data = o;
    this.source = new RadioSource.types[this.type](this.data);
  }

  RadioSource.prototype = Object.create(lamb.EventEmitter);

  RadioSource.id = 0;
  
}());