import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nestcqrs',
  entities: ['dist/src/entities/**/*.js'],
  migrations: ['dist/db/migrations/*.js'],
  logger: 'file',
  logging: 'all',
};

const dataSource = new DataSource(dataSourceOptions); // This replaces the TypeORMConfigOptions

export default dataSource;
