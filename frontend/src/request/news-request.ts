async function fetchingHits(query: string) {
  const response = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const data = await response.json();
  return data?.hits || [];
}
export { fetchingHits };
