// Name Array
let guest_list: string[] = ['Bilal','Zaid','Anas'];

// Can not make dinner
let not_present : string = 'Zaid';

// Invite new guest
let new_guest : string = 'Ahmed';

guest_list[guest_list.indexOf(not_present)]=new_guest;

console.log(guest_list);


// console.log('Welcome All Fortunately We found a bigger table for dinner party so we can invite more guests.');