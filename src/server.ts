import app from "./app";
import { connectDatabase } from "./config/database";
import { env } from "./config/env";
import { syncDatabase } from "./models";

const startServer = async (): Promise<void> => {
  await connectDatabase();
  await syncDatabase();

  app.listen(env.port, () => {
    console.log(`Server listening on port ${env.port}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
