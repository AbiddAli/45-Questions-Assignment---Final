"use strict";
// 15.Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ['Bilal', 'Zaid', 'Anas', 'Zubair', 'Khalid'];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you!');
}
var not_present = 'Zaid';
var new_guest = 'Ahmed';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n');
}
console.log("Sir ".concat(not_present, " will not come to dinner tomorrow."));
