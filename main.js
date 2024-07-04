/*
Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

* Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

* Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

* Print a message to each of the two people still on your list, letting them know they’re still invited.

* Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/
var guest = ["Ayaan", "Sana", "Sajida", "Atif"];
guest.unshift("Arman");
guest.splice(0, 0, "Anmol");
guest.push("Aliya");
console.log("\nSorry we can't arrange big table,only two person will be invited.\n");
while (guest.length > 2) {
    var removesguest = guest.pop();
    console.log("Sorry ".concat(removesguest, ", You are not invited for dinner.\n"));
}
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], ", You are still invited for dinner.\n"));
}
