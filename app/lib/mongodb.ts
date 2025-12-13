import mongoose from "mongoose";

const MONGODB_URI = process.env.PROCESS_BACKEND_URL;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the PROCESS_BACKEND_URL in .env.local");
}

// Global cache to avoid multiple connections in dev/hot-reload
const globalForMongoose = global as typeof globalThis & {
  mongooseConn?: typeof mongoose;
  mongoosePromise?: Promise<typeof mongoose>;
};

export const db = globalForMongoose.mongooseConn || (async () => {
  if (!globalForMongoose.mongoosePromise) {
    globalForMongoose.mongoosePromise = mongoose.connect(MONGODB_URI);
  }
  const conn = await globalForMongoose.mongoosePromise;
  globalForMongoose.mongooseConn = conn;
  console.log("✅ MongoDB connected");
  return conn;
})();