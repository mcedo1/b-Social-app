import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import api, { getId } from "../../API/Api";
import "react-toastify/dist/ReactToastify.min.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NewFollowerCard = ({ username, userId }) => {
    let navigate = useNavigate()
    const handleFollowReq = () => {
        console.log('to je to', userId);
        api("/api/follow/" + getId(), { followeeId: userId }, "post").then(
            (res) => {
                if (res.status === "ok"){
                  toast.success("New following", {
                      position: "top-right",
                      autoClose: 1000,
                      theme: "colored",
                      transition: Bounce,
                      progress: undefined,
                  });
                  setTimeout(()=>                   navigate('/main')
                  , 1400)
                }
            }
        );
    };
    return (
        <div className="col-md-3" style={{ height: "50px" }}>
            <div className="card">
                <div className="card-body col d-flex justify-content-between">
                    <p>{username}</p>{" "}
                    <Button className="btn-success" onClick={handleFollowReq}>
                        Follow
                    </Button>
                </div>
            </div>
        </div>
    );
};
const NewFollowerComponent = () => {
    const [followes, setFollowers] = useState([]);
    useEffect(() => {
        api("/api/follow/un/" + getId(), {}, "get").then((res) => {
            console.log(res);
            if (res.status === "ok") setFollowers(res.data);
        });
    }, []);
    return (
        <div
            className="row d-flex flex-nowrap overflow-auto"
            style={{ height: "120px" }}>
            {followes.map((follower, index) => {
                return (
                    <NewFollowerCard
                        username={follower.username}
                        userId={follower.userId}
                    />
                );
            })}
        </div>
    );
};

function NewFollowers() {
    return (
        <div>
            <ToastContainer />
            <div className="container mt-5">
                <NewFollowerComponent />
            </div>
        </div>
    );
}

export default NewFollowers;
