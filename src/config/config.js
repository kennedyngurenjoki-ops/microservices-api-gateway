module.exports = {
  // Server configuration
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 3000,
  env: process.env.NODE_ENV || 'development',

  // CORS configuration
  cors: {
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-API-Key']
  },

  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    issuer: process.env.JWT_ISSUER || 'api-gateway',
    audience: process.env.JWT_AUDIENCE || 'microservices'
  },

  // Rate limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW, 10) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100 // limit each IP to 100 requests per windowMs
  },

  // Redis configuration (for caching and session storage)
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
    db: parseInt(process.env.REDIS_DB, 10) || 0,
    retryDelayOnFailover: 100,
    maxRetriesPerRequest: 3
  },

  // Service registry - Define your microservices here
  services: {
    auth: {
      url: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
      timeout: 5000,
      retries: 3
    },
    user: {
      url: process.env.USER_SERVICE_URL || 'http://localhost:3002',
      timeout: 5000,
      retries: 3
    },
    product: {
      url: process.env.PRODUCT_SERVICE_URL || 'http://localhost:3003',
      timeout: 5000,
      retries: 3
    },
    order: {
      url: process.env.ORDER_SERVICE_URL || 'http://localhost:3004',
      timeout: 5000,
      retries: 3
    },
    notification: {
      url: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3005',
      timeout: 5000,
      retries: 3
    }
  },

  // Proxy configuration
  proxy: {
    timeout: parseInt(process.env.PROXY_TIMEOUT, 10) || 30000,
    retries: parseInt(process.env.PROXY_RETRIES, 10) || 3,
    retryDelay: parseInt(process.env.PROXY_RETRY_DELAY, 10) || 1000
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
    filename: process.env.LOG_FILE || 'logs/api-gateway.log',
    maxsize: parseInt(process.env.LOG_MAX_SIZE, 10) || 10485760, // 10MB
    maxFiles: parseInt(process.env.LOG_MAX_FILES, 10) || 5,
    colorize: process.env.NODE_ENV === 'development'
  },

  // Health check configuration
  healthCheck: {
    interval: parseInt(process.env.HEALTH_CHECK_INTERVAL, 10) || 30000, // 30 seconds
    timeout: parseInt(process.env.HEALTH_CHECK_TIMEOUT, 10) || 5000 // 5 seconds
  },

  // Security configuration
  security: {
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS, 10) || 12,
    csrfSecret: process.env.CSRF_SECRET || 'your-csrf-secret-key',
    sessionSecret: process.env.SESSION_SECRET || 'your-session-secret-key'
  }
};