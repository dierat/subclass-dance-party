var EyeDancer = function(top, left, delay){
  Dancer.call(this, top, left, delay);

  // Use css to set the background. See http://api.jquery.com/css/
  var styleSettings = {
    'width': '100px',
    'height': '68px',
    'border': 'none',
    'background-image': "url('eye.png')",
    'background-size': 100
  };
  this.$node.css(styleSettings);

  this.getRotateString = function(){
    var rotate = Math.floor((Math.random() * 360) - 150);

    return 'rotateZ(' + rotate + 'deg)';
  };

  this.oldStep = this.step;
  this.step = function(){
    var rotateString = this.getRotateString();

    this.oldStep(rotateString);

  };

};

EyeDancer.prototype = Object.create(Dancer.prototype);
EyeDancer.prototype.constructor = EyeDancer;
