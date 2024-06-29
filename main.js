// 1. sodda kalkulyator yarating prompt dan foydalaning
// 2. prompt da kiritilgan son musbat bo’lsa unga qiymatini 1ga kamaytirsin manfiy bo’lsa 1 ga oshirsin
// 3. argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin
// 4. 3-savolni 3 xonali son uchun ham bajaring
// 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50% contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student balini function ga argument sifatida kiritilsin

// function calculator(num, symbol1, num3) {
//   let result;
//   switch (symbol1) {
//     case "+":
//       result = num + num3;
//       break;
//     case "-":
//       result = num - num3;
//       break;
//     case "*":
//       result = num * num3;
//       break;
//     case "/":
//       if (num3 === 0) {
//         result = "Nolga bo'lish mumkin emas!";
//       } else {
//         result = num / num3;
//       }
//       break;
//     default:
//       result = "Noto'g'ri amal kiritildi!";
//   }
//   return result;
// }

// let num = parseFloat(prompt("Son kiriting:"))
// let symbol1 = prompt("belgi kiriting:")
// let num3 = parseFloat(prompt("Son kiriting:"))

// function calculator(num, symbol1, num3) {
//   let result;
//   if (symbol1 === "+") {
//     result = num + num3;
//   } else if (symbol1 === "-") {
//     result = num - num3;
//   } else if (symbol1 === "*") {
//     result = num * num3;
//   } else if (symbol1 === "/") {
//     if (num3 === 0) {
//       result = "Nolga bo'lish mumkin emas!";
//     } else {
//       result = num / num3;
//     }
//   } else {
//     result = "Noto'g'ri amal kiritildi!";
//   }
//   return result;
// }

// const calculator = function(num, symbol1, num3) {
//   let result;
//   if (symbol1 === "+") {
//     result = num + num3;
//   } else if (symbol1 === "-") {
//     result = num - num3;
//   } else if (symbol1 === "*") {
//     result = num * num3;
//   } else if (symbol1 === "/") {
//     if (num3 === 0) {
//       result = "Nolga bo'lish mumkin emas!";
//     } else {
//       result = num / num3;
//     }
//   } else {
//     result = "Noto'g'ri amal kiritildi!";
//   }
//   return result;
// }

// console.log(calculator(num, symbol1, num3));

// let number = parseFloat( prompt("Musbat yoki manfiy son kiriting: "))
// function musbat(a) {
//   if (a > 0) {
//     a--;
//   } else if (a < 0) {
//     a++;
//   } else {
//     return "Noto'g'ri kiritildi.";
//   }
//   return a;
// }

// let number = parseFloat( prompt("Musbat yoki manfiy son kiriting: "))

// const musbat = function(a) {
//     if (a > 0) {
//         a--;
//     } else if (a < 0) {
//         a++;
//     } else {
//         return "Noto'g'ri kiritildi.";
//     }
//     return a;
// }

// const musbatArrow = (a) => {
//     if (a > 0) {
//         a--;
//     } else if (a < 0) {
//         a++;
//     } else {
//         return "Noto'g'ri kiritildi.";
//     }
//     return a;
// }

// console.log(musbat(number));
// console.log(musbatArrow(number));

// function reverseNumber10(num) {
//   if (num >= 10 && num <= 99) {
//     const reversedNum = parseInt(num % 10) * 10 + parseInt(num / 10);
//     return reversedNum;
//   } else {
//     return "Kiritilgan son 2 xonali emas!";
//   }
// }
// console.log(reverseNumber10(42));

// const reverseNumber10 = (num) => {
//   if (num >= 10 && num <= 99) {
//     const reversedNum = parseInt(num % 10) * 10 + parseInt(num / 10);
//     return reversedNum;
//   } else {
//     return "Kiritilgan son 2 xonali emas!";
//   }
// };

// const reverseNumber10Arrow = (num) => parseInt(num % 10) * 10 + parseInt(num / 10);

// console.log(reverseNumber10(42));

// function reverseNumber100(num) {
//   if (num >= 100 && num <= 999) {
//     const reversedNum =
//       parseInt(num % 10) * 100 +
//       (parseInt(num / 10) % 10) * 10 +
//       parseInt(num / 100);
//     return reversedNum;
//   } else {
//     return "Kiritilgan son 3 xonali emas!";
//   }
// }
// const reverseNumber100Arrow = (num) => parseInt(num % 10) * 100 + (parseInt(num / 10) % 10) * 10 + parseInt(num / 100);


// 1. sodda kalkulyator yarating prompt dan foydalaning
// 2. prompt da kiritilgan son musbat bo’lsa unga qiymatini 1ga kamaytirsin manfiy bo’lsa 1 ga oshirsin
// 3. argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin
// 4. 3-savolni 3 xonali son uchun ham bajaring
// 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50% contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student balini function ga argument sifatida kiritilsin
// 6. 5-savolga qaraganda kirgan mavqeini aniqlang 100% bo’lsa budjet, 70% dan kam bo’lsa contract, 50% dan kam bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student balini function ga argument sifatida kiritilsin

// function studentStatus(grade) {
//   if (grade >= 70 && grade <= 100) {
    // return "Budjet";
//   } else if (grade >= 50 && grade < 70) {
    // return "Contract";
//   } else {
    // return "Yiqilgan";
//   }
// }
// 
// const studentStatus = (grade) => {
//   if (grade >= 70 && grade <= 100) {
    // return "Budjet";
//   } else if (grade >= 50 && grade < 70) {
    // return "Contract";
//   } else {
    // return "Yiqilgan";
//   }
// };
// 
// 
// console.log(studentStatus(70));
// console.log(studentStatus(50));
// 