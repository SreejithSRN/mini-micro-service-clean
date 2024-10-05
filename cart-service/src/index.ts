import server from "./presentation/server";
import dbConnection from "./infrastructure/database/dbConnection";
import { runConsumer } from "./infrastructure/kafka/consumer";
(async () => {
  try {
    server;
    await Promise.all([dbConnection(), runConsumer()])
      .then(() => console.log("kafka consumer is running"))
      .catch((error) => {
        console.error(`Error while initializing kafka consumer:${error}`);
        process.exit(1);
      });
  } catch (error: any) {
    console.error(`Error during initialization: ${error.message}`);
    process.exit(1);
  } finally {
    process.on("SIGINT", async () => {
      console.log("\n\nServer is shutting down....");
      process.exit(0);
    });
  }
  
})();
