/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
// 1. Імпортуємо HTTP-функцію
import {  useState } from "react";
import { fetchArticlesWithTopic } from "../articles-api.js";
import { SearchForm } from "./SearchForm";

const App = () => {
	const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
	  setArticles([]);
	  setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
