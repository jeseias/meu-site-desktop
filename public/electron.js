const {app, BrowserWindow, Menu} = require('electron')
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  var menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
          {
            label:'Sair',
            click() {
              app.quit()
            }
          }
      ]
    } 
])
Menu.setApplicationMenu(menu); 
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});