/**
 * ================
 * Pair Programming
 * ================
 *
 * Instruction
 * -----------
 * Buatlah funtion pair untuk mengembalikan sebuah array of names, dimana names tersebut
 * adalah pasangan dari 2 nama yang digabung ke dalam 1 string, jika ada yang tidak mendapatkan
 * pasangan maka orang tersebut dianggap sendirian.
 *
 * Example
 * -------
 * @input = 'vindo,marcel,isni,ajeng,kevin'
 * proses:
 * vindo dipasangkan dengan marcel -> 'vindo dan marcel'
 * isni dipasangkan dengan ajeng -> 'isni dan ajeng'
 * kevin tidak punya pasangan -> 'kevin sendirian'
 *
 * maka @output = [
 *  'vindo dan marcel',
 *  'isni dan ajeng',
 *  'kevin sendirian'
 * ]
 *
 * Rules
 * -----
 * 1. Tidak boleh menggunakan built-in function: split, slice, splice, join
 */

function pair(str) {
    // Write your code here
    var stringResult = [];
    var stringTemp = '';
    if (str === '') {
        return "No Pair"
    }
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === ',' || i === str.length) {
            if (stringTemp !== '') {
                stringResult.push(stringTemp);
                stringTemp = '';
            }
        } else stringTemp += str[i];
    }
    var finalResult = [];
    for (i = 0; i < stringResult.length; i += 2) {
        if (stringResult[i + 1]) {
            finalResult.push(stringResult[i] + ' dan ' + stringResult[i + 1])
        } else if (!stringResult[i + 1]) {
            finalResult.push(stringResult[i] + ' sendirian')
        }
    }
    return finalResult
}
console.log(pair('yusuf,tony,adiel'));
// [ 'yusuf dan tony', 'adiel sendirian' ]
console.log(pair('fajrin,sahata,onesinus,jetly'));
// [ 'fajrin dan sahata', 'onesinus dan jetly' ]

console.log(pair('refqi,fahmi,sinung,arif,gusti'));
// [ 'refqi dan fahmi', 'sinung dan arif', 'gusti sendirian' ]

console.log(pair(''));
// No pair