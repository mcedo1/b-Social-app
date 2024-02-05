import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer.component/Footer";
import Login from "./components/log.reg.component/Login";
import Registration from "./components/log.reg.component/Registration";
import MainPage from "./components/main.page.component/MainPage";
import { Routes, Route } from "react-router-dom";
import AboutUsCommponent from "./components/about.us.component/AboutUs";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { getId } from "./API/Api";

function App() {


    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onmessage = async (event) => {
            const messageData = JSON.parse(event.data);

            if (messageData.userId) {
                if (messageData.userId == getId()) {
                    const postContent = messageData.postContent;
                    const first10 = postContent
                        .split(" ")
                        .slice(0, 10)
                        .join(" ");
                    const commenter = messageData.commenter;
                    const commentContent = messageData.commentContent;
                    console.log(  `You get new comment on your post "${first10}!" by ${commenter} message: ${commentContent}`)
                    toast.success(
                        `You get new comment on your post "${first10}!" by ${commenter} message: ${commentContent}`,
                        {
                            position: "top-right",
                            autoClose: 2000,
                            theme: "colored",
                            transition: Bounce,
                            progress: undefined,
                            closeOnClick: true,
                        }
                    );
                }
               
            }
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className="App">
            <ToastContainer />
            <div className="Main">
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="/reg" element={<Registration />} />
                    <Route
                        path="/main"
                        element={
                            <MainPage/>
                        }
                    />
                    <Route path="aboutUs" element={<AboutUsCommponent />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
