/**
 * This file will get loaded by index.html
 */
'use strict';

// document.getElementById("unique_id").addEventListener(TYPE, FUNCTION_TO_CALL)

// Example
let clicks = 0;
document.getElementById("add_click_btn").addEventListener("click", clicks + 1)

document.getElementById("min_click_btn").addEventListener("click", clicks - 1)

document.getElementById("rst_click_btn").addEventListener("click", clicks = 0)

document.getElementById("click_count").textContent = clicks