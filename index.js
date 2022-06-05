function scuberGreetingForFeet(feet){
  // Write your code here!

  if (feet <= 400){
    return 'This one is on me!';
  }
  else if (feet > 2500) {
    return 'No can do.'
  }
  else if (feet > 2000){
    return 'I will gladly take your thirty bucks.';
  }
  
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return "Ok, sounds good.";
  }
  else if (city === 'Pittsburgh'){
    return 'No go.';
  }
}

/*
  describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });
*/











function switchOnCharmFromTip(){
  // Write your code here! 
}