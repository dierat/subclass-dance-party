var RandomColoredDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.setColor = function(){
    // Use css to set color of dancer. See http://api.jquery.com/css/
    var chars = '1234567890ABCDEF'.split('');
    var ranNum = function(){
      return Math.floor(Math.random() * 16);
    };
    var ranColor = function(){
      var hexCode = '#';
      for (var i=0; i<6; i++){
        hexCode += chars[ranNum()];
      }
      return hexCode;
    };
    var color = ranColor();

    var styleSettings = {
      "border-color": color
    };
    this.$node.css(styleSettings);
  };

  this.setColor();

};

RandomColoredDancer.prototype = Object.create(Dancer.prototype);
