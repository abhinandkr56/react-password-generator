export function generatePassword(config){
  let result ="";
  let characterToSkip = 1;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const specials = "!@#$%^&*(){}[]_-"

  let alphabet = lowerCase; // setting all lowercase to alphabet
  result+=getRandomCharacter(lowerCase); // adding one lowercase character

  if(config.uppercase){
    alphabet+= upperCase;
    result+=getRandomCharacter(upperCase); 
    characterToSkip+=1;
  }

  if(config.numbers){
    alphabet+= numbers;
    result+=getRandomCharacter(numbers); 
    characterToSkip+=1;

  }

  if(config.specials){
    alphabet+= specials;
    result+=getRandomCharacter(specials); 
    characterToSkip+=1;
  }

  for(var i = characterToSkip; i < config.size; i++){
    result+=getRandomCharacter(alphabet);
  }
  return shuffle(result).join("");
}

function getRandomCharacter(text){
  return text[Math.floor(Math.random() * text.length)];
}

function shuffle(result){
  const array = [...result];

  for(var i = array.length-1; i >= 0 ; i--){
    var randomNumber = Math.floor(Math.random() * (i+1));

    array[i, randomNumber] = array[randomNumber, i];
  }

  return array;
}