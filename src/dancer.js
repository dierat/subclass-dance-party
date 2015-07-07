var Dancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  var styleSettings = {
    'transition': 'all ' + (timeBetweenSteps / 1000) + 's'
  };
  this.$node.css(styleSettings);

  this.timeBetweenSteps = timeBetweenSteps;
  
  this.step();

  this.setPosition(top, left);

};


Dancer.prototype.step = function(transformString){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

  var moveString = this.getMoveString();

  if (transformString){
    moveString = moveString + ' ' + transformString;
  }

  var styleSettings = {
    'transform': moveString
  };
  this.$node.css(styleSettings);
};


Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


Dancer.prototype.getMoveString = function(){
  var moveTop = Math.floor(Math.random() * 70) - 35;
  var moveLeft = Math.floor(Math.random() * 70) - 35;
  var top = this.$node.css('top');
  top = +top.slice(0, top.length - 2) + moveTop;
  var left = this.$node.css('left');
  left = +left.slice(0, left.length - 2) + moveLeft;

  return 'translateX(' + moveLeft + 'px) translateY(' + moveTop + 'px)';
};
