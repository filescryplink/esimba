require('dotenv').config();
const { createClient } = require('@libsql/client');

async function testDb() {
  try {
    console.log('Connecting to Turso...');
    const client = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    console.log('Testing query...');
    const rs = await client.execute('SELECT 1 AS test');
    console.log('✅ Turso connected! Result:', rs);

    // Check if users table exists
    const tablesRs = await client.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'");
    console.log('Tables found:', tablesRs.rows);
  } catch (e) {
    console.error('❌ Error testing DB:', e);
  } finally {
    process.exit(0);
  }
}

testDb();