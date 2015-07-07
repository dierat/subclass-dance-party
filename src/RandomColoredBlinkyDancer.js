var RandomColoredBlinkyDancer = function(top, left, delay){
  RandomColoredDancer.call(this, top, left, delay);

  this.setColor = function(){
    // Use css to set color of dancer. See http://api.jquery.com/css/
    var color = ranColor();

    var styleSettings = {
      "border-color": color
    };
    this.$node.css(styleSettings);
  };


  this.oldStep = this.step;
  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.setColor();
    this.$node.toggle();
  };
}

RandomColoredBlinkyDancer.prototype = Object.create(RandomColoredDancer.prototype);
RandomColoredBlinkyDancer.prototype.constructor = RandomColoredBlinkyDancer;
