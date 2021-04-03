export async function fetcher(url) {
  const res = await fetch(url);
  return await res.json();
}