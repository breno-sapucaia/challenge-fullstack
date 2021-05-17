import { createConnection } from "typeorm";
import connectionOptions from "./ormconfig";

export const initializeMongoDB = async (): Promise<void> => {
  try {
    await createConnection(connectionOptions);
    console.log(
      `📣  ✅ Connection using config: MongoDB was created successfully`
    );
  } catch (error) {
    console.log(`Database failed to connect ${error.message}`);
  }
};
