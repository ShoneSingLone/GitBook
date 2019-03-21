import {
    ipcMaiin,
    ipcRenderer
} from "electron";

ipcRenderer.send("VueToRequire", fileInfo);
ipcRenderer.on("VueToRequire.over", (event, arg) => {
    console.log("over", arg);
});

/* ipcMain listener */
ipcMain.on("VueToRequire", (event, args) => {
    console.log(Date.now(), args);
    let tools = new ToolRunner(args)
    tools.output();
    mainWindow.webContents.send("VueToRequire.over", Date.now());
})