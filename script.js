// definitions
function manageLocalStorage(key, value, modify, log) {
    switch (modify) {
        case create:
        localStorage.setItem(key, value);
        if (log = true) {
            console.log(localStorage.getItem(key))
        }
        break;
        case remove:
            localStorage.removeItem(key);
        break;
        default:
        localStorage.setItem(key, value);
        if (log = true) {
            console.log(localStorage.getItem(key))
        }
        break;
    }
}

// actual code