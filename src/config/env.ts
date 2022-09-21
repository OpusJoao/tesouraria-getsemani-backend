import dotEnv from 'dotenv'
dotEnv.config()
export default { 
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/treasury',
  port: process.env.PORT || 3000
}