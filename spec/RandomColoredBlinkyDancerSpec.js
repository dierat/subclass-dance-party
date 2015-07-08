describe("randomColoredBlinkyDancer", function() {

  var randomColoredBlinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    randomColoredBlinkyDancer = new RandomColoredBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(randomColoredBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(randomColoredBlinkyDancer, "step");
      expect(randomColoredBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(randomColoredBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(randomColoredBlinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
