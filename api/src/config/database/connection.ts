import { createConnection } from "typeorm";
import mongoConnectionConfig from "./ormconfig";

export enum EnumConnections {
  MongoDB,
}
export const createConnectionUsing = async (
  name: EnumConnections
): Promise<void> => {
  try {
    if (name === EnumConnections.MongoDB) {
      await createConnection(mongoConnectionConfig);
    }
    console.log(
      `📣✅ Connection using config: ${name.toString()} was created successfully`
    );
  } catch (error) {
    console.log(`📣🛑 Can't create connection using: ${name.toString()}.`);
    console.log(`      Errors: ${error}`);
  }
};
