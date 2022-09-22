import { APP_PORT } from './app/config/index.js';
import { app } from './app/app.js';

/* ----------------------------- server settings ---------------------------- */
const PORT = APP_PORT;
app.listen(PORT, (error) => {
  if (error) throw `${error}`;
  console.info(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
