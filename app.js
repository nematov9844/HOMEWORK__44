// sodda kalkulyator yarating prompt dan foydalaning
//  2. prompt da kiritilgan son musbat bo’lsa unga qiymatini 1ga kamaytirsin manfiy bo’lsa 1 ga oshirsin 
// 3. argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin 
// 4. 3-savolni 3 xonali son uchun ham bajaring 
// 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50% contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student balini function ga argument sifatida kiritilsin


const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const num1 = parseFloat(document.getElementById('num1').value);
  const operator = document.getElementById('operator').value;
  const num2 = parseFloat(document.getElementById('num2').value);

  const result = calculator(num1, num2, operator);
  resultDiv.textContent = `Natija: ${result}`;
});

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
      case "**":
        result = num1 ** num2;
        break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Nolga bo'lish mumkin emas!";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Noto'g'ri amal kiritildi!";
  }
  return result;
}




// let num = prompt("Son kiriting:");

// if (num > 0) {
//   num--;
//   console.log(`Yangi qiymat: ${num}`);
// } else if (num < 0) {
//   num++;
//   console.log(`Yangi qiymat: ${num}`);
// } else {
//   console.log(`Kiritilgan son 0 ga teng`);
// }


// const reverseNumber = (num) => {
//     if (num >= 10 && num <= 99) {
//       const reversedNum = parseInt(num.toString().split('').reverse().join(''));
//       return reversedNum;
//     } else {
//       return "Kiritilgan son 2 xonali emas!";
//     }
//   };
  
//   console.log(reverseNumber(42)); 
//   console.log(reverseNumber(123)); 
  

//   const reverseNumber2 = (num) => {
//     if (num >= 100 && num <= 999) {
//       const reversedNum = parseInt(num.toString().split('').reverse().join(''));
//       return reversedNum;
//     } else {
//       return "Kiritilgan son 3 xonali emas!";
//     }
//   };
  
//   console.log(reverseNumber2(456)); 
//   console.log(reverseNumber2(42));
  

//   function studentStatus(grade) {
//     if (grade >= 70 && grade <= 100) {
//       return "Budjet";
//     } else if (grade >= 50 && grade < 70) {
//       return "Contract";
//     } else if (grade >= 0 && grade < 50) {
//       return "Yiqildi";
//     } else {
//       return "Noto'g'ri baho kiritildi!";
//     }
//   }
  
//   let studentGrade = prompt("Student bahosini kiriting (0-100):");
//   let status = studentStatus(studentGrade);
//   console.log(`Student mavqei: ${status}`);
  