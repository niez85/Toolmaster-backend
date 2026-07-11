const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'ToolMaster Hub API is running!',
    timestamp: new Date().toISOString()
  });
});

// Test endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to ToolMaster Hub API!',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      auth: '/api/auth'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
