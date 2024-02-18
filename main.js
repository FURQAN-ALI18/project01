// 1) Install Node.js, TypeScript and VS Code on your computer.
// done
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 2)Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var message = "Hello Eric, would you like to learn some Python today?";
console.log(message);
// done
// 3)Name Cases: Store a person’s name in a variable, and then print that person’s name in 
// lowercase, uppercase, and titlecase.
var namecases = "Furqan Ali";
console.log(namecases.toLowerCase());
console.log(namecases.toUpperCase());
//done
// 4)Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Allama Iqbal once said,\"Leave Somwthing for someone but don\'t leave someone for something\"");
// done
// 5)Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable 
// called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Tipu Sultan once said";
var famous_person_message = "\"Better to live one day as a lion, than a hundred years as a sheep.\"";
console.log(famous_person + "," + famous_person_message);
//done
// 6)Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination,
//  "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person_name = "\tFurqan Ali\t";
console.log(person_name);
console.log(person_name.trim());
//done
// 7 & 8)Number Eight: Write addition, subtraction, multiplication, and division operations that each result 
// in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
//done
//9)Favorite Number: Store your favorite number in a variable. Then,
//  using that variable, create a message that reveals your favorite number. Print that message.
var favorite_number = 1;
console.log("My favourite number is " + favorite_number.toString());
//done
// 10)Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t
// have anything specific to write because your programs are too simple at this point, just add your name 
//  and the current date at the top of each program file. Then write one sentence describing what the program does.
//done
//11)Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing 
// each element in the list, one at a time.
var names = ["Talha", "Furqan", "Farhan", "Feroz"];
for (var index = 0; index < names.length; index++) {
    var element = names[index];
    console.log(element);
}
//done
//12)Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names_message = ["Talha", "Furqan", "Farhan", "Feroz"];
for (var i = 0; i < names_message.length; i++) {
    var element = names_message[i];
    console.log("My Friend name is " + element);
}
//done
// 13)Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about
//  these items, such as “I would like to own a Honda motorcycle.”
var favorite_transportation = ['Civic car', 'Honda motorcycle'];
for (var i = 0; i < favorite_transportation.length; i++) {
    var element = favorite_transportation[i];
    console.log("I would like to own a " + element);
}
//done
// 14)Guest List: If you could invite anyone, living or deceased, to dinner, who would you 
// invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ['Furqan', 'Talha', 'Farhat'];
for (var i = 0; i < guest_list.length; i++) {
    var element = guest_list[i];
    console.log(element + " You are invited at dinner");
}
//done
// 15)Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log('\n');
guest_list[1] = "Farhan";
for (var i = 0; i < guest_list.length; i++) {
    var element = guest_list[i];
    console.log(element + " You are invited at dinner");
}
console.log("Guest Talha is change with Farhan");
//done
// 16)More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
console.log('\n');
guest_list.unshift('feroz');
guest_list.splice(1, 0, 'Nasreen');
guest_list.push('Farhan');
for (var i = 0; i < guest_list.length; i++) {
    var element = guest_list[i];
    console.log(element + " You are invited at dinner");
}
console.log("Guest were feroz added");
console.log("Guest were Nasreen added");
console.log("Guest were Farhan added");
//done
// 17)Shrinking Guest List: You just found out that your
//  new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("");
console.log("You can invite only two people for dinner.");
var removeItem0 = guest_list.splice(0, 1);
var removeItem1 = guest_list.splice(0, 1);
var removeItem2 = guest_list.splice(0, 1);
var removeItem3 = guest_list.splice(0, 1);
console.log("Sorry You are not invited " + removeItem0[0]);
console.log("Sorry You are not invited " + removeItem1[0]);
console.log("Sorry You are not invited " + removeItem2[0]);
console.log("Sorry You are not invited " + removeItem3[0]);
console.log("");
var removeItem3 = guest_list.splice(0, 1);
var removeItem3 = guest_list.splice(0, 1);
console.log(guest_list);
for (var i = 0; i < guest_list.length; i++) {
    var element = guest_list[i];
    console.log(element);
}
//done
//18)
// Store the locations in an array
var placesToVisit = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal order (restored):");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nReverse alphabetical order:");
console.log(placesToVisit);
//19)Think of something you could store in a array. For example, you could 
// make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
//  Write a program that creates a list containing these items.
var landmarks = [
    "Eiffel Tower",
    "Great Wall of China",
    "Machu Picchu",
    "Taj Mahal",
    "Statue of Liberty",
    "Colosseum",
    "Pyramids of Giza",
    "Sydney Opera House",
    "Petra",
    "Angkor Wat"
];
console.log("List of famous landmarks:");
console.log(landmarks);
//done
//20)They think of something you could store
// in a TypeScript Object. Write a program that creates Objects containing these items.
var employee_details = {
    Empname: "Talha",
    Empage: 24,
    Empemail: "abc@gmail.com"
};
console.log(employee_details.Empname);
console.log(employee_details.Empage);
console.log(employee_details.Empemail);
//done
// 22) Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.
console.log(landmarks[10]);
console.log(landmarks[9]);
//done
// 23)Conditional Tests: Write a series of conditional tests. Print a statement describing each 
// test and your prediction for the results of each test. Your code should look something like this:
var car = "Civic";
var bike = "cd 70";
var person = "Talha";
var age = 30;
var no = 20;
console.log("Is car == 'Civic'? I predict True.");
console.log(car == "Civic");
console.log("\nIs bike != 'honda'? I predict True.");
console.log(bike != "honda");
console.log("\nIs age >= 30? I predict True.");
console.log(age >= 30);
console.log("\nIs number >= 39? I predict True.");
console.log(age < 39);
console.log("\nIs number == 20? I predict True.");
console.log(no == 20);
console.log("\nIs person != 'Talha'? I predict false.");
console.log(person != "Talha");
console.log("\nIs car == 'Corolla'? I predict False.");
console.log(car == "Corolla");
console.log("\nIs bike != 'cd 70'? I predict false.");
console.log(bike != "cd 70");
console.log("\nIs age > 30? I predict false.");
console.log(age > 30);
console.log("\nIs number < 20? I predict false.");
console.log(age < 20);
//24)More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False
//  result for each of the following:
// • Tests for equality and inequality with strings
var str = "Talha";
console.log("\nTests for equality  with strings");
console.log(str == "Talha");
console.log("\nTests for  inequality with strings");
console.log(str != "Talha");
var num = 10;
console.log("\nTests for greater than with numbers");
console.log(num > 5);
console.log("\nTests for less than with numbers");
console.log(num < 10);
console.log("\nTests for greater than equal to with numbers");
console.log(num >= 5);
console.log("\nTests for less than equal to with numbers");
console.log(num <= 5);
console.log("\nTests using \"and\" operators");
console.log(num >= 10 && num == 10);
console.log("\nTests using \"or\" operators");
console.log(num == 10 || num != 10);
var arr = [2, true, "Talha"];
console.log("Test whether an item is in a array");
console.log(arr.sort().reverse());
