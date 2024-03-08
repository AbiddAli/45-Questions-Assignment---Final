// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Name Array
var guest_list = ['Bilal', 'Zaid', 'Anas'];
// Can not make dinner
var not_present = 'Zaid';
// Invite new guest
var new_guest = 'Ahmed';
guest_list[guest_list.indexOf(not_present)] = new_guest;
// Function for begining array.
guest_list.unshift('Huzaifa');
// Function for middle array.
var middleGuest = "Shahid";
var middleIndex = guest_list.length / 2;
guest_list.splice(middleIndex, 0, middleGuest);
guest_list.push("Farhan");
console.log(guest_list);
console.log("We can invite only two people for dinner!");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("\nSorry ".concat(remove_guest, " We cant invite you to dinner!"));
}
;
guest_list.map(function (person) { return console.log("\n".concat(person, " You are still invited to dinner!\n")); });
guest_list.pop();
guest_list.pop();
console.log(guest_list);
