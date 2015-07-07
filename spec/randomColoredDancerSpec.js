describe("randomColoredDancer", function() {

  var randomColoredDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    randomColoredDancer = new RandomColoredDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(randomColoredDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(randomColoredDancer, "step");
      expect(randomColoredDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(randomColoredDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(randomColoredDancer.step.callCount).to.be.equal(2);
    });
  });
});
