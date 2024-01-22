import { Button, useBodyScroll } from '@geist-ui/core';
import { Plus, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/Navbar';
import NewsItem from '../components/NewsItem';
import newsData from '../data/newsData';

function News() {
  const [hidden, setHidden] = useBodyScroll();

  function toggleScroll(state) {
    setHidden(state);
  }

  const articleItems = newsData.map((article) => (
    <NewsItem key={article.title} handleScroll={setHidden} data={article} />
  ));

  return (
    <>
      <Navbar toggleScroll={toggleScroll} />
      <div className="content">
        <h2>News</h2>
        <div className="news--actions">
          <Button width="78%" type="secondary" icon={<Plus />}>
            Post News
          </Button>
          <Button width="20%" icon={<SlidersHorizontal />}></Button>
        </div>
        <div className="news--articles">{articleItems}</div>
      </div>
    </>
  );
}

export default News;
