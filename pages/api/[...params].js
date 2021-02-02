export default function (req, res) {
  const { query: { params } } = req;
  res.status(404).json({ payload: `/api/${params.join('/')} is not a valid API route. Please double check your request and try again.` });

}