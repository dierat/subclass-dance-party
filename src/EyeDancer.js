var EyeDancer = function(top, left, delay){
  Dancer.call(this, top, left, delay);

  var width = Math.floor(Math.random() * 100) + 20;
  var height = width * 0.68;
  var styleSettings = {
    'width': width,
    'height': height,
    'border': 'none',
    'background-image': "url('eye_edited.png')",
    'background-size': '100%'
  };
  this.$node.css(styleSettings);
};


EyeDancer.prototype = Object.create(Dancer.prototype);
EyeDancer.prototype.constructor = EyeDancer;


EyeDancer.prototype.getRotateString = function(){
  var rotate = Math.floor((Math.random() * 200) - 100);

  return 'rotateZ(' + rotate + 'deg)';
};


EyeDancer.prototype.step = function(){
  var rotateString = this.getRotateString();

  Dancer.prototype.step.call(this, rotateString);
};
