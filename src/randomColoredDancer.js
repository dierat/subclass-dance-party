var RandomColoredDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.setColor = function(){
    // Use css to set color of dancer. See http://api.jquery.com/css/
    var color = ranColor();

    var styleSettings = {
      "border-color": color
    };
    this.$node.css(styleSettings);
  };

  this.setColor();

};

RandomColoredDancer.prototype = Object.create(Dancer.prototype);
