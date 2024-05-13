// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
// name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
// have an empty list at the end of your program.


let guest_list : string [] = ['Aamir','Ashfaque','Mushtaque','Jawad'];
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank You`)
// }
let not_present : string = 'Ashfaque';
let new_guest : string = 'Sarfraz';
guest_list[1] = new_guest
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank You`)
// }
guest_list.unshift('M.Daud','Umair','Qaisar');
// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You`)
// }
console.log(`\nUnfortunately we can not arrange big table, only two peole allow.\n`)
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam ${remove_guest} You are not invited for dinner.\n`);
}
for(let i=0; i<guest_list.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nYess you are still invited on tomorrow dinner.\nThank You\n`)
}
guest_list.splice(0,2)
console.log(guest_list)