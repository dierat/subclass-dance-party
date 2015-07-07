var RandomColoredBlinkyDancer = function(top, left, delay){
  RandomColoredDancer.call(this, top, left, delay);

  this.setColor = function(){
    var color = ranColor();

    var styleSettings = {
      "border-color": color
    };
    
    this.$node.css(styleSettings);
  };

}

RandomColoredBlinkyDancer.prototype = Object.create(RandomColoredDancer.prototype);
RandomColoredBlinkyDancer.prototype.constructor = RandomColoredBlinkyDancer;

RandomColoredBlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.setColor();

  this.$node.toggle();
};
