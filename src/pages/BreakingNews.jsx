import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="my-3">
            <Marquee speed={200}>
             <button className="bg-red-500 text-white px-4 py-4 mr-3 rounded-lg">Breaking News</button>   I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;