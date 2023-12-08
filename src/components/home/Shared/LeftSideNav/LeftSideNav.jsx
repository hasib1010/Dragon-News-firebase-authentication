import { NavLink } from "react-router-dom";
import { SlCalender } from "react-icons/sl";    
import './nav.css'
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
 
const LeftSideNav = () => {
    const [category, setCateegory] = useState([])
    useEffect(()=>{
        fetch("categories.json")
        .then(res=> res.json())
        .then(data=>setCateegory(data))
    },[])
    return (
        <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">All Category</p>
            <div className="flex flex-col text-start pl-16 gap-4 mt-5">
                {category.map(cat=><NavLink key={cat.id} cat={cat} to={'/'}><li className="text-[#9F9F9F] list-none px-5 py-3 text-xl font-semibold link2">{cat.name}</li></NavLink> )}
                
            </div>
            <div className="mt-3 flex flex-col gap-5 w-[267px]">
                <div className="flex flex-col gap-2">
                    <img src="resourse/1.png" alt="" />
                    <p className="text-[#403F3F] text-normal font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between items-center">
                    <p>Sports</p>
                    <p className="flex gap-2 items-center justify-center text-[#9F9F9F]"><SlCalender></SlCalender> Jan 4, 2022</p>

                    </div>
                </div> 
                <div className="flex flex-col gap-2">
                    <img src="resourse/2.png" alt="" />
                    <p className="text-[#403F3F] text-normal font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between items-center">
                    <p>Sports</p>
                    <p className="flex gap-2 items-center justify-center text-[#9F9F9F]"><SlCalender></SlCalender> Jan 4, 2022</p>

                    </div>
                </div> 
                <div className="flex flex-col gap-2">
                    <img src="resourse/3.png" alt="" />
                    <p className="text-[#403F3F] text-normal font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex justify-between items-center">
                    <p>Sports</p>
                    <p className="flex gap-2 items-center justify-center text-[#9F9F9F]"><SlCalender></SlCalender> Jan 4, 2022</p>

                    </div>
                </div> 
            </div>
        </div>
    );
};

export default LeftSideNav;