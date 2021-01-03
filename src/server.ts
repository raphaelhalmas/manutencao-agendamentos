import setupApp from './app';
import config from 'config';
import logger from './logger';

const port = config.get('App.port');

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(port, () =>
      logger.info(`Aplicacao iniciada na porta ${port}`)
    );
  } 
  catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();