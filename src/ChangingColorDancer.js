var ChangingColorDancer = function(top, left, delay){
  RandomColoredBlinkyDancer.call(this, top, left, delay);

  this.oldBlinkyStep = this.step;
  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldBlinkyStep();
    var newColor = ranColor();
  };
};

ChangingColorDancer.prototype = Object.create(RandomColoredBlinkyDancer.prototype);
ChangingColorDancer.prototype.constructor = ChangingColorDancer;
