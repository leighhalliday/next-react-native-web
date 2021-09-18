import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req, res) {
  const { name, score } = req.body;

  await redis.zadd("scores", score, name);
  const rank = await redis.zrevrank("scores", name);

  res.status(200).json({ success: true, rank });
}
