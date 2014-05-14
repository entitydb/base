function Base () {
}

// function to extend new type
Base.extend = require('simple-extend');
Base.extended = function (Child) {};
Base.Error = require('node-error').LoggableError;

module.exports = Base;