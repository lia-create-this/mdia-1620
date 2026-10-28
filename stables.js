E// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in

// let blue = {
//     name: "blue",
//     age: 3,
//     favoriteSnack: "carrot",
//     montlyCost: 100,
//     lateFee: 100 * 0.2,
// };

// let berry = {
//     name: "berry",
//     age: 6,
//     favoriteSnack: "grass",
//     monthlyCost: 350,
//     lateFee: 350 * 0.2,
// };

// let cake = {
//     name: "cake",
//     age: 9,
//     favoriteSnack: "potato",
//     monthlyCost: 250,
//     lateFee: 250 * 0.2,
// };

// let stableName = "happyHorses";

// // let horseNames = ["blue", "berry", "cake"]
// // console.log(horseName[1]);

// // stable.name;
// console.log(stableName);
// console.log("Hello welcome to") + stableName;
// // console.log('Hello welcome to $"stableName'!);
// console.log("I hope you are doing well!" + berry.name + "'s payment is currently overdue" + (berry.monthlyCost + berry.lateFee) + "Thank you so much for taking care of this" );

// // MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH
// // MAKING ANOTHER CHANGE TO THIS FILE!

// //  BLAH BLAH BLAH
// it (true) {
//     console.log("HI");
// }

//------------------------- First day (Assignment 2) -------------------------//

// Move the horses in your stables into objects, if they aren't already. Each horse should have its own object.
// (After you are done, your horse variables from Assignment 1 should be deleted)
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" array.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

let HorseOne = {
    name: "blue",
    nickname: "boo",
    favoriteTreat: "🥕carrot",
    age: 3,
    monthlyRent: 100,
    horseColor: "brown",
    favoriteNumber: 6,
};

let HorseTwo = {
    name: "berry",
    nickname:"bebe",
    favoriteTreat: "🥔potato",
    age: 6,
    monthlyRent: 350,
    horseColor: "white",
    favoritenumber: 7,
};

let HorseThree = {
    name: "cake",
    nickname: "coco",
    favoriteTreat: "🍎apple",
    age: 9,
    monthlyRent: 250,
    horseColor: "gold",
    favoriteNumber: 12,
};

let HorseFour = {
    name: "banny",
    nickname: "boing",
    favoriteTreat: "🍞bread",
    age: 11,
    monthlyRent: 600,
    horseColor: "Rainbow",
    favoriteNumber: 67,

}

// horses array

let horses [blue, berry, cake, banny];

// a boolean that allows you to check if your horses hungry or not. Use dot notation

let isHorseHungry = true;

if (isHorseHungry) {
    console.log("Need to feed horse");
}

blue.isHorseHungry = true;
berry.isHorseHungry = true;
cake.isHorseHungry = false;
banny.isHorseHungry = true;

// total number of stalls

let totalStalls = 15;

 function availableStalls() {
    console.log (totalStalls-horses.length);
 }

// how much will an individual horse will owe if the rent is paid late. Invoke the function

function lateFee (monthlyRent) {
    let lateFee = 100;
    console.log(monthlyRent + lateFee);
}

lateFee (berry);

// invoke a function that returns (not logs) the nickname of a chosen horse

function getNickname (horse) {
    return horse.nickname;
}

console.log (getNickname);

