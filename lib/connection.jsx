import sql from 'mssql';

const config = {
  user: 'user',
  password: 'abc123',
  server: 'localhost',
  database: 'nba_stickers',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function connectDB() {
  try {
      await sql.connect(config);
      console.log('Connected to SQL Server');
  } catch (err) {
      console.error('Error connecting to SQL Server:', err);
  }
}

export { sql, connectDB };