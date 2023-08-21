import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type HackerNewsResponse = {
  title?: string;
  url?: string;
};
function HackerNews() {
  const data = ["react", "javascript", "typescript", "vue"];
  const randomData = data[Math.floor(Math.random() * data.length)];
  const [hits, setHits] = useState<HackerNewsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${query}`,
          {
            signal: abortController.signal,
          }
        );
        const data: {
          hits: HackerNewsResponse[];
        } = await res.json();
        if (data && data.hits) {
          setHits(data.hits);
        }
      } catch (err: any) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [query]);
  useEffect(() => {
    const btnAttribute = document.querySelector(
      ".btn-attribute"
    ) as HTMLButtonElement;
    btnAttribute?.addEventListener("click", () => {
      console.log("running");
    });
    return () => {
      btnAttribute?.removeEventListener("click", () => {
        console.log("running");
      });
    };
  }, [mounted]);
  // if (!mounted) return <div>loading mounted</div>;
  return (
    <div>
      <button className="btn-attribute">Add attribute</button>
      <button onClick={() => setQuery(randomData)}>Change query</button>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {!loading &&
        hits.length > 0 &&
        hits.map((hit, index) => <div key={index}>{hit.title}</div>)}
    </div>
  );
}

export default HackerNews;
