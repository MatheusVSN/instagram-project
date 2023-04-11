export default async function Handler(request, result) {
  const Request = await fetch(`https://picsum.photos/200/300`);
  return result.status(200).json({ url: Request.url });
}
