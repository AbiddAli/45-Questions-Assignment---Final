// 15.Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.

let guest_list: string [] = ['Bilal','Zaid','Anas','Zubair','Khalid'];
for(let i=0; i <guest_list.length; i++) {
   console.log('Respected Sir ' + guest_list [i] + ',\nWe invited you on dinner tomorrow.\nThank you!');
 } 

let not_present : string = 'Zaid';
let new_guest : string = 'Ahmed';
guest_list[1] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n');  
}

console.log(`Sir ${not_present} will not come to dinner tomorrow.`);


export{guest_list};
