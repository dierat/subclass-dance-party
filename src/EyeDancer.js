var EyeDancer = function(top, left, delay){
  Dancer.call(this, top, left, delay);

  this.setBackground = function(){
    // Use css to set the background. See http://api.jquery.com/css/
    var styleSettings = {
      'width': '100px',
      'height': '68px',
      'border': 'none',
      'background-image': "url('eye.png')",
      'background-size': 100
    };
    this.$node.css(styleSettings);
  };
  this.setBackground();
};

EyeDancer.prototype = Object.create(Dancer.prototype);
EyeDancer.prototype.constructor = EyeDancer;
