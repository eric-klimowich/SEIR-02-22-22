<img src="https://i.imgur.com/VLZ6O5Y.png" width="8%">
<img src="https://i.imgur.com/f4G6A0J.png" width="8%">
<img src="https://i.imgur.com/u5SGLpz.png" width="8%">

# Holiday Lab

## Objective

Build a Rock-Paper-Scissors game incorporating the web technologies and techniques you've worked with thus far:

- HTML
- CSS
- JavaScript
- DOM Manipulation

## Setup

Create a new HTML/CSS/JS repl at [replit.com](https://replit.com)

## This Assignment is a Deliverable

This lab is **a 2-point DELIVERABLE**.

Be sure to submit the link to your repl in Google Classroom prior to the due date.
 
## Minimum Requirements (MVP)

1. Upon loading, render an interface similar to the following:

    <img src="https://i.imgur.com/pBso9hi.png">

    > The actual layout and styling is up to you!

2. The player will click one of the three buttons (shown as `R`, `P` or `S`) to make their choice and to play a round...

    <img src="https://i.imgur.com/c8tpz76.png">

3. When the round is played (the user clicked one of the 3 buttons), your event listener will randomly generate a choice for the "computer", determine the winner (or tie), update the score and ultimately call the `render` function.

4. The `render` function should visualize the winner/tie and the score. How you actually visualize the winner/tie is up to you. For example, you could display a border around the winner or not show a border in the case of a tie.  Here's how it might look if the player wins:

    <img src="https://i.imgur.com/aBJ3o2k.png">
    if the computer wins...
    <img src="https://i.imgur.com/G7fIPbe.png">
    or if it's a tie...
    <img src="https://i.imgur.com/jeq9SZ8.png">

#### Have Fun!

## Bonus User Stories

Feel free to implement any of the following optional user stores:

- As a player, I'd like to be able to reset the score if the computer keeps kicking my butt.

- As a player, I'd like the current "session" to be over when x number of wins occurs by either the computer or myself.

- As a player, when I click a button to play, I'd like to see a countdown before the result is revealed.

- As a player, I'd like to hear a "beep" or other audio clip during the countdown.

- As a player, I'd like to hear a congratulatory sound if I win and a bogus sound if I lose and whatever if it's a tie.

### Getting Started / Hints

- Follow the **data-centric** approach as described in the [Guide on How to Build a Browser Game](https://gist.github.com/jim-clark/6f1919291f6007b2c0b2c93d925d6bac).

- Feel free to use the images shown at the top of this assignment by right-clicking them and choosing `Save image as...`.

- Pseudocode the overall game play to help you write the event listener (play) function.


