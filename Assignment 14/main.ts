// 16.More Guests:You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.


// Name Array
let guest_list: string[] = ['Bilal','Zaid','Anas'];

// Can not make dinner
let not_present : string = 'Zaid';

// Invite new guest
let new_guest : string = 'Ahmed';

guest_list[guest_list.indexOf(not_present)]=new_guest;


console.log('Welcome All Fortunately We found a bigger table for dinner party so we can invite more guests.');

// Function for begining array.
guest_list.unshift('Huzaifa');

// Function for middle array.
let middleGuest: string = "Shahid"
let middleIndex = guest_list.length/2
guest_list.splice(middleIndex,0,middleGuest);

guest_list.push("Farhan");


guest_list.map((person)=> console.log(`\nDear ${person} You are cordially invited to dinner!`));


