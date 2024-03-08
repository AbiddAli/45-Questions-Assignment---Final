// 16.More Guests:You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.
// Name Array
var guest_list = ['Bilal', 'Zaid', 'Anas'];
// Can not make dinner
var not_present = 'Zaid';
// Invite new guest
var new_guest = 'Ahmed';
guest_list[guest_list.indexOf(not_present)] = new_guest;
console.log('Welcome All Fortunately We found a bigger table for dinner party so we can invite more guests.');
// Function for begining array.
guest_list.unshift('Huzaifa');
// Function for middle array.
var middleGuest = "Shahid";
var middleIndex = guest_list.length / 2;
guest_list.splice(middleIndex, 0, middleGuest);
guest_list.push("Farhan");
guest_list.map(function (person) { return console.log("\nDear ".concat(person, " You are cordially invited to dinner!")); });
