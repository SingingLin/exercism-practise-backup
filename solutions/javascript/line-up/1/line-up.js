//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {

  if([11, 12, 13].includes(num % 100)) {
    return `${name}, you are the ${num}th customer we serve today. Thank you!`;
  }

  const suffixes = {1: 'st', 2: 'nd', 3: 'rd'}

  return `${name}, you are the ${num}${suffixes[num % 10] || 'th'} customer we serve today. Thank you!`;
  
  // const endingNum = num % 10;
  // let formatNum = '';
  // if(endingNum === 1 && num % 100 !== 11) {
  //   formatNum = `${num}st`
  // } else if(endingNum === 2 && num % 100 !== 12) {  
  //   formatNum = `${num}nd`
  // } else if(endingNum === 3 && num % 100 !== 13) {
  //   formatNum = `${num}rd`
  // } else{
  //   formatNum = `${num}th`
  // }
  // return `${name}, you are the ${formatNum} customer we serve today. Thank you!`;
};