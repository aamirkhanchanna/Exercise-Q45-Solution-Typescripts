"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let guest_list = ['Aamir', 'Ashfaque', 'Mushtaque', 'Jawad'];
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank You`)
// }
let not_present = 'Ashfaque';
let new_guest = 'Sarfraz';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank You\n`);
}
guest_list.unshift('M.Daud', 'Umair', 'Qaisar');
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n`);
}
