import mysql from 'mysql2/promise';

let connection: mysql.Connection;
(async () => {
  // 创建 MySQL 连接  
  connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
})()

// @ts-ignore
export default connection;
