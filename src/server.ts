import setupApp from './app';
import logger from './logger';

const port = 3333;

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