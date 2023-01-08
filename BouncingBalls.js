/*
Bouncing Balls:
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

*/

/*Solution:  This solution first checks if any of the three conditions for a valid experiment are not met. If any of them are not met, it returns -1. Otherwise, it counts the number of times the ball bounces by simulating the bouncing process. It does this by repeatedly multiplying the height of the ball by the bounce factor until the ball's height becomes less than the window height. Finally, it returns the number of bounces.*/


function bouncingBall(h, bounce, window) {

    if (h>0 && bounce>0 && bounce <1 && h>window) {

        let bounces = 1;  // Initialize bounces to 1 to account for the first drop
        current = h*bounce;

        while (current > window) {
            bounces += 2;
            current *= bounce;
        }
        return bounces;
    }
    return -1;
}



//Solution

function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
}


console.log(bouncingBall(30.0, 0.666, 1.5))