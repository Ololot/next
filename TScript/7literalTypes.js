"use strict";
let m = 'test';
function performeAction(action) {
    switch (action) {
        case "down": return -1;
        case "up": return 1;
        default: return 0;
    }
}
