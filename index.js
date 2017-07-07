const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "Dummy",
        fullscreenable: false,
        resizable: false,
        alwaysOnTop: false,
        width: 420,
        height: 250,
        'web-preferences': {
            'web-security': false
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
    }
})
