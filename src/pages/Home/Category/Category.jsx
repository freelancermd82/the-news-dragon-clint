import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h3>This Category news: {categoryNews.length}</h3>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;