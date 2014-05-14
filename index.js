function Base () {
}

// function to extend new type
Base.extend = require('simple-extend');
Base.extended = function (Child) {};

module.exports = Base;