const { DataSource } = require("typeorm");
const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "rahim",
  password: "rahim",
  database: "new_algo",
  synchronize: true,
  logging: true,
  entities: ["./src/entities/*.js"],
  migrations: ["./src/migrations/*.ts"],
  subscribers: ["./src/subscriber/*.js"],
  cli: {
    entitiesDir: "./src/entities",
    migrationsDir: "./src/migrations",
    subscribersDir: "./src/subscriber",
  },
});

module.exports = {AppDataSource}