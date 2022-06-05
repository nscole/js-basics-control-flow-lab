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


function switchOnCharmFromTip(tip){
  let message;
 switch (tip) {
  case 'generous':
    message = "Thank you so much.";
    break;
  case 'not as generous':
    message = "Thank you.";
    break;
  case 'thanks for everything' :
    message = "Bye.";
    break;
 } 
 return message;
}


/*
 describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
*/
