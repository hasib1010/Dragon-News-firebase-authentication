import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle  } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
const RightSideNav = () => {
    return (
        <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-3xl font-bold">Login With</h1>
                <Link className="flex font-bold items-center justify-center gap-3 border-2 w-fit border-black rounded-lg p-3"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />Sign In With Google</Link>

                <Link className="flex justify-center items-center font-bold gap-3 border-2 w-fit border-black rounded-lg p-2"><img className="w-8 h-8" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" />Sign In With GitHub</Link>
            </div>
            <div className="w-3/4 flex flex-col items-start">
                <h1 className="text-3xl font-bold">Find Us On</h1>
                <div className="flex flex-col gap-5 border mt-6 w-3/4 rounded-lg  p-4">
                <Link className="flex border-b  w-full items-center font-bold gap-3"><FaFacebook className="text-4xl"></FaFacebook> Facebook</Link>
                <Link className="flex border-b w-full items-center font-bold gap-3"><AiFillTwitterCircle className="text-4xl"></AiFillTwitterCircle> Twitter</Link>
                <Link className="flex border-b w-full items-center font-bold gap-3"><FaInstagram  className="text-4xl"></FaInstagram > Instagram</Link>
                </div>
            </div>
            <div className="bg-[#F3F3F3] pb-4">
                <h1 className="text-3xl font-bold mt-4 ">Q-Zone</h1>
                <div className="flex flex-col gap-10 mt-10">
                    <img src="resourse/qZone1.png" alt="" />
                    <img src="resourse/qZone2.png" alt="" />
                    <img src="resourse/qZone3.png" alt="" />
                </div>
            </div>
            <div>
                <div className="bg-[url('resourse/bg.png')] h-[509px] px-3 w-[267px] flex flex-col justify-center items-center gap-10">
                    <p className="text-3xl font-bold text-white leading-10">Create an Amazing Newspaper</p>
                    <p className="text-xl font-semibold text-white leading-7">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="bg-[#D72050] text-white text-4xl p-5 rounded-lg">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;