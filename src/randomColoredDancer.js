var RandomColoredDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.setColor();
};

RandomColoredDancer.prototype = Object.create(Dancer.prototype);
RandomColoredDancer.prototype.constructor = RandomColoredDancer;

RandomColoredDancer.prototype.setColor = function(){
  var color = ranColor();

  var styleSettings = {
    "border-color": color
  };
  
  this.$node.css(styleSettings);
};
