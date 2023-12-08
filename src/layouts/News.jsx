import React, { useState } from 'react';
import NewsLayout from './NewsLayout';

const News = () => {

    const [newses, setNewses]=useState([]);
    useState(()=>{
        fetch("news.json")
        .then(res=> res.json())
        .then(data=> setNewses(data))
    },[])
console.log(newses);
    return (
        <div>
            <p className='text-3xl font-bold text-start'>Dragon News Home</p>
            {
                newses.map(news=> <NewsLayout news={news} key={news.id}></NewsLayout>)
            }
        </div>
    );
};

export default News;