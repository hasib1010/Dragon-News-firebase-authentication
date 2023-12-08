import { useParams } from "react-router-dom";
import RightSideNav from "../components/home/Shared/RightSideNav/RightSideNav";
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";

const NewsDetails = () => {
    const {id} = useParams();
    

    return (
        <div>  
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <p>Details of {id}</p>
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div> 
        </div>
    );
};

export default NewsDetails;