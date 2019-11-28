const exec = require('child_process').exec;

function winExec(command) {
    let proc = exec(command, this.puts);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stdout);
    proc.on('close', (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log("stdout", stdout);
        console.log("stderr", stderr);
    });
}
winExec("npm run desk");