import Redis from "ioredis";

export default async function handler(_req, res) {
  const scores = [
    { name: "Patty", score: 7 },
    { name: "Leigh", score: 5 },
    { name: "Ebert", score: 2 },
  ];

  res.status(200).json(scores);
}
