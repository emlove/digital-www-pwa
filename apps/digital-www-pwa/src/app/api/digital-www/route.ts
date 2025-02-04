export async function GET(request: Request) {
  const response = await fetch('/digital-www.json');
  const data = await response.json();
  return Response.json(data);
}
