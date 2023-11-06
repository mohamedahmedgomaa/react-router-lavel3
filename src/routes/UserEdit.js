import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

const UserEdit = () => {
    const {userId} = useParams();
    console.log(userId);

    // useEffect(() => {
    //     // api
    //     axios
    // }, [userId]);
    return (
        <div className="main">User Edit</div>
    );
};

export default UserEdit;