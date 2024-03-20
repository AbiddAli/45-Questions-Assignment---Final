// Name Array
var guest_list = ['Bilal', 'Zaid', 'Anas'];
// Can not make dinner
var not_present = 'Zaid';
// Invite new guest
var new_guest = 'Ahmed';
guest_list[guest_list.indexOf(not_present)] = new_guest;
console.log(guest_list);
// console.log('Welcome All Fortunately We found a bigger table for dinner party so we can invite more guests.');
