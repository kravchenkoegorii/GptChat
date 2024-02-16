import { DataSource } from "typeorm";

import { TypeormNamingStrategy } from "./typeorm-naming-strategy";

import { MessageEntity, UserEntity } from "@module/modules/users/entities";

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [UserEntity, MessageEntity],
  namingStrategy: new TypeormNamingStrategy(),
  ssl:
    process.env.DB_USE_SSL === "true"
      ? {
        rejectUnauthorized: true,
        ca: process.env.DB_SSL_CERTS,
      }
      : false,
  extra: {
    max: 60,
  },
});
