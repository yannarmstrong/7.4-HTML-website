/**
 * This file will get loaded by index.html
 */
'use strict';

// document.getElementById("unique_id").addEventListener(TYPE, FUNCTION_TO_CALL)

// Example
let clicks = 0;
document.getElementById("add_click_btn").addEventListener("click", click_add)

document.getElementById("min_click_btn").addEventListener("click", click_min)

document.getElementById("rst_click_btn").addEventListener("click", click_rst)

function click_add(){
    document.getElementById("click_count").textContent = clicks+1;
    clicks++;
}
function click_min(){
    document.getElementById("click_count").textContent = clicks-1;
    clicks--;
}
function click_rst(){
    document.getElementById("click_count").textContent = clicks=0;
    clicks=0;
}