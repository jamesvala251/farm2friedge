// Simple script to start development server
const { spawn } = require('child_process');

console.log('Starting eGroceryMart development server...');

const child = spawn('npx', ['next', 'dev', '-p', '3003'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

child.on('error', (error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`Server exited with code ${code}`);
  process.exit(code);
}); 