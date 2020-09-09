import setupApp from './app';
const port = 3333;

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(port, () =>
      console.info(`Aplicacao iniciada na porta ${port}`)
    );
  } 
  catch (error) {
    console.error(error);
    process.exit(1);
  }
})();