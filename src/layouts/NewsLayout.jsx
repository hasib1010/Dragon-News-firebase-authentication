import React from 'react';
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const NewsLayout = ({ news }) => {
    const { author, details, image_url, rating, thumbnail_url, title,_id, total_view } = news;
    const date = author.published_date;

    return (
        <div className='border text-left p-5 my-5'>
            <div className='my-5 bg-[#F3F3F3]  flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div><img className='w-12 rounded-full h-12' src={author.img} alt="" /></div>
                    <div className='block'>
                        <p className='text-xl font-semibold'>{author.name}</p>
                        <h1 className='text-[9px]'>{date}</h1>
                    </div>
                </div>
                <div className='flex gap-5 justify-end pr-52 text-3xl'>
                    <FaBookmark className='cursor-pointer'></FaBookmark>
                    <FaShareAlt className='cursor-pointer'></FaShareAlt>
                </div>
            </div>
            <div>
                <p className='text-xl font-bold my-4    ' >{title}</p>
                <img className='w-full' src={image_url} alt="" />
                {
                    details.length > 200
                        ? <p>{details.slice(0,200) }
                        <Link 
                        to={`/news/${_id}`}
                         className='text-red-600'> Read More</Link></p>
                        : <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsLayout;