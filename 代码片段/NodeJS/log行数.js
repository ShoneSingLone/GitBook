function log(...args) {
    try {
        throw new Error(args);
    } catch (error) {
        var optionString = error.stack.split("\n")[2];
        let regex = new RegExp(`\(.*\)`);
        let regexMatch = optionString.match(/\((.*)\)/ig);
        console.log(regex);
        console.log("regexMatch", regexMatch[0]);
    }
}


log()
