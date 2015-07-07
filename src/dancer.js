// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  var styleSettings = {
    'transition': 'all ' + (timeBetweenSteps / 1000) + 's'
  };
  this.$node.css(styleSettings);

  this.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  this.getMoveString = function(){
    var moveTop = Math.floor(Math.random() * 30) - 15;
    var moveLeft = Math.floor(Math.random() * 30) - 15;
    var top = this.$node.css('top');
    top = +top.slice(0, top.length - 2) + moveTop;
    var left = this.$node.css('left');
    left = +left.slice(0, left.length - 2) + moveLeft;

    return 'translateX(' + moveLeft + 'px) translateY(' + moveTop + 'px)';
  };

  
  this.step = function(transformString){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), timeBetweenSteps);

    var moveString = this.getMoveString();

    var styleSettings = {
      'transform': moveString
    };
    this.$node.css(styleSettings);
  };
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};
