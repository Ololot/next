
let m: 'test' = 'test';

type actionType = "up" | "down";

function performeAction(action: actionType | CompleteAction): 1 | -1 | 0 {
    switch (action) {
        case "down": return -1;
        case "up": return 1;
        default: return 0
    }
}

interface CompleteAction {
    s: string
}