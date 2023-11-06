import {Link, Outlet, useNavigate} from "react-router-dom";


const UserRoot = () => {
    const navigate = useNavigate();
    const logOutHandler = () => {
        navigate("/"); // home page
        // navigate("/", { replace: true});
        // navigate(-1); // return back
    }
    const userId = 1;
    return (
        <div className="wrapper2">
            <div className="nav">
                <ul>
                    <li>
                        <Link to="info">info</Link>
                    </li>
                    <li>
                        <Link to={userId + '/edit'}>edit</Link>
                    </li>
                    <li onClick={logOutHandler}>logout</li>
                </ul>
            </div>
            <div className="content"><Outlet/></div>
        </div>
    );
};

export default UserRoot;