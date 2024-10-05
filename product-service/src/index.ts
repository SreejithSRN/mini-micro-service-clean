import dbconnections from "./infrastructure/database/dbconnections";
import server from "./presentation/server";
(async () => {
  try {
    server;
    await dbconnections();
  } catch (error) {
    console.error("Error during initializing the server", error);
    process.exit(1);
  }
  
})();
