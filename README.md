# My Babe App
This is my first React App, and will be aimed at advancing a love calculator model. It will however use a different and more personalized method.

## Overview
The app will follow a simple concept. The user meets 4 input fields; **Male Name, Female Name, Male State, and Female State.**

Once the user enters these info and submit the form, it renders a result based on some if and else algorithm ran on the background, thats it.

## Design Concept
The app will start with a preloader, after which a header image will be displayed with 4 input forms and a submit button.
The main loader was added in the body of index.html located in the public folder

The fields will all be required for the submit button to work, onclick a popup modal will be initiated.

The modal will also contain a preloader, then text feedback from the algorithm ran in the background based on the input.

Also on the result modal, a section to show user input will also be made available.

## Folder Structure
1. Two general stylesheets are inside the CSS folder containing App.css and index.css
2. The FORM folder contains the component for the forms and an imported header image, all coming after a preloader.
3. The IMAGES folder contains the images needed for this project
4. On click of the form, a result which is contained in the RESULT folder will be triggered, also coming after a preloader.


## Developer Approach
All names here are just for explanatory purposes and do not have any ulterior motives.

input my Name = userName;
input her Name = babeName;
input my State = userState;
input her State = babeState;

 userName = Gee Brain;
 babeName = Didi Amore;

We add both names together

var newBond = userName.concat(babeName);

This will join both names

newBond = Gee BrainDidi Amore;


Now we turn this string back to an array

newBonds = newBond.split("");

The new results becomes 

newBonds = G,e,e, ,B,r,a,i,n,D,i,d,i, ,A,m,o,r,e;

Now that we have turned it back to an array, we need a function to eliminate reoccurring or duplicate characters in the array

Using Extra Space. Expected results becomes

myBonds = [...new Set(newBonds.filter(char => char !== ""))];
myBonds = G,e, ,B,r,a,i,n,D,d,A,m,o

Now we can present if statements using myBonds.length 

We can use myBonds.length x 10 to place percentage as ourBonds.
we can use ourSpace = userState.length - babeState.length 




Total fields:
Your Name
Partner's name
Your Location
Partner's Location 


## Rules for Grade
1. if myBonds is greater than or equal to 120 and ourSpace is less than or equal to 90, call Result 1
2. if ourSpace is greater than ourBonds, call result 2
3. if babeName.length is equal to ourSpace, call Result 3
4. if ourBonds is greater than  80, and ourSpace is greater than 40, call Result 4
5. if ourBonds is less than or equal to 60, call result 5
6. if babeName is less than or equal to 60, call result 6
7. if ourBonds plus ourSpace is greater than or equal to 150, call result 7
8. if babeName.length plus userName.length is an even number, call result 8
9. if babeName.length plus userName.length is an odd number, call result 9
10. if userName.length is an even number, call result 10
11. if babeName.length plus babeLocation is an odd number, call result 11

## Dev Note
I may have altered some of the rules, and results just to get an even better outcome.

## Results :
1. Don’t worry your partner is faithful, send them chocolate or flowers, they deserve it.
2. Roses are red, Violets are blue; see they are sharing your babe with you.
3. Your partner is cheating, you just haven’t found out. They are really good at it and you may never even find out.
4. Your partner may cheat soon, they are starving from attention. Make out time this weekend and take them to the movies.
5. Forget about cheating, they don’t even love you. You’re just being used!
6. Come on, do you even love babeName? Why are you even doing this?
7. Yes they love you but they are going through stuff - its normal. You need to pay more attention to things they are not saying more than things they actually say.
8. I don't know how to say this but, you both have a twin flame. Fight as much as you want, but you will always be back together.
9. LOL small nyash dey shake sha, you wey they cheat wan know if your babe dey cheat. Rest!
10. This relationship is on one bar, somehow i even think everything is your fault.
11. I will say it, they are cheating on you with your friend. How come you have not noticed yet?

## Final Note


