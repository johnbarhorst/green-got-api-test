export default function handler(req, res) {
  if (req.method !== "GET") {
    res.json({ payload: "This endpoint only accepts GET requests. Please check your method and try again." });
  }
  const greeting = `Hello ${req.query.first_name}!`;
  res.json({ payload: greeting });
}