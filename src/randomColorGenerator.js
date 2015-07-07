var ranNum = function(){
  return Math.floor(Math.random() * 16);
};

var ranColor = function(){
  var chars = '1234567890ABCDEF'.split('');
  var hexCode = '#';
  for (var i=0; i<6; i++){
    hexCode += chars[ranNum()];
  }
  return hexCode;
};
