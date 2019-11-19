switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      server.listen(++port);
      console.error(`try http://localhost:${port}`);
      // process.exit(1);
      break;
    default:
      throw error;
  }
