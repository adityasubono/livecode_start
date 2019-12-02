/**
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 *
 *
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*',
 *
 * contoh :
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 *
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 *
 * RULES:
 *  1. Wajib menggunakan pseudocode
 *
 */
function secretPhoneNumber (numbers) {
    // your code here
    if (numbers.length >= 10) {
        numbersResult = '';
        numbersFinal = '';
        for (i = 0; i < numbers.length; i++) {
            if (i > numbers.length - 6) {
                numbersResult += 'x';
            } else if (i < numbers.length - 6) {
                numbersFinal += numbers[i]
            }
        }
    } else if (numbers.length < 10) {
        return "Invalid phone number"
    }
    return numbersFinal + numbersResult;
}

console.log(secretPhoneNumber("081267465370"));
// 0812674*****
console.log(secretPhoneNumber("08537582711"));
// 085375*****
console.log(secretPhoneNumber("085758271523"));
// 0857582*****
console.log(secretPhoneNumber("0811739915"));
// 08117*****
console.log(secretPhoneNumber("08238797"));
// "Invalid phone number"