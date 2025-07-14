const { app, BrowserWindow, screen } = require('electron')

function createWindow() {
  // Obtenemos todas las pantallas
  const displays = screen.getAllDisplays()
  
  // Suponemos que la segunda pantalla es displays[1] (ajustar si hay menos)
  const externalDisplay = displays.length > 1 ? displays[1] : null
  
  // Opciones ventana
  let winOpts = {
    fullscreen: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  }

  if (externalDisplay) {
    winOpts.x = externalDisplay.bounds.x
    winOpts.y = externalDisplay.bounds.y
    winOpts.width = externalDisplay.bounds.width
    winOpts.height = externalDisplay.bounds.height
  }

  const win = new BrowserWindow(winOpts)

  win.loadFile('index.html')
  // win.webContents.openDevTools() // Descomenta para debug
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  // En macOS apps normalmente siguen abiertas hasta Cmd+Q
  if (process.platform !== 'darwin') app.quit()
})
