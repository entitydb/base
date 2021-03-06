var expect = require('chai').expect;

var Base;
var Meme;

describe("Base", function () {

  it("should load Base", function () {
    Base = require('../');
    expect(Base).to.exist;
  });

  it("should create base", function () {
    var base = new Base()
    expect(base).to.exist;
  });

  it("should extend Base", function () {
    Meme = Base.extend({
      very: "extend",
    }, {
      such: "class",
      extended: function (Child) {
        Child.prototype.wow = true;
      }
    });
    expect(Meme).to.exist;
    expect(Meme.prototype.very).to.equal("extend");
    expect(Meme.such).to.equal("class");
  });

  it("should extend Meme", function () {
    var Doge = Meme.extend();

    expect(Doge).to.exist;
    expect(Doge.prototype.wow).to.equal(true);
  });

  it("should throw Base.Error", function () {
    var fn = function () {
      throw new Base.Error("error!");
    };
    expect(fn).to.throw(Base.Error);
  });

  it("should extend and throw ExtendedError", function () {
    var ExtendedError = Base.Error.extend('ExtendedError');
    var fn = function () {
      throw new ExtendedError("error!");
    };
    expect(fn).to.throw(Base.Error);
    expect(fn).to.throw(ExtendedError);
  });
});