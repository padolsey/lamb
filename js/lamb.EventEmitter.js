(function() {

  lamb.EventEmitter = EventEmitter;

  function EventEmitter() {}

  EventEmitter.prototype = {
    _init: function() {
      this._ee = $(this);
      this._initialised = true;
    },
    emit: function(evt, data) {
      !this._initialised && this._init();
      this._ee.trigger(evt, data);
    },
    once: function(evt, handler, thisArg) {
      !this._initialised && this._init();
      this._ee.one(evt, handler);
    },
    on: function(evt, handler, thisArg) {
      !this._initialised && this._init();
      this._ee.bind(evt, handler);
    },
    off: function(evt, handler) {
      !this._initialised && this._init();
      this._ee.unbind(evt, handler);
    }
  };

}());