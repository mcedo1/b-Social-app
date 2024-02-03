import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { delIdentity, delToken } from "../../API/Api";

function SideBar() {
     const [show, setShow] = useState(false);
     const navigate = useNavigate();
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const handleLogOut = () => {
          delIdentity()
          delToken()
          navigate("/");
     };

     return (
          <>
               <div className="Naslov">
                    <div style={{ flex: "1" }}></div>
                    <div>
                         <p style={{ fontFamily: "cursive" }}>B Social group</p>
                    </div>
                    <div className="Setting-button">
                         <Button
                              style={{
                                   width: "90px",
                                   height: "40px",
                                   fontFamily: "cursive",
                              }}
                              variant="primary"
                              onClick={handleShow}>
                              Settings
                         </Button>
                    </div>
                    <hr />
               </div>

               <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                         <Offcanvas.Title
                              style={{
                                   fontFamily: "cursive",
                                   fontSize: "35px",
                              }}>
                              B-social routes
                         </Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <Offcanvas.Body
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                         }}>
                         <div>
                              <p>
                                   <Link
                                        to={"/main"}
                                        style={{
                                             textDecoration: "none",
                                             fontFamily: "cursive",
                                             fontSize: "23px",
                                        }}>
                                        Main Panel
                                   </Link>
                              </p>
                              <p>
                                   <Link
                                        to={"/aboutUs"}
                                        style={{
                                             textDecoration: "none",
                                             fontFamily: "cursive",
                                             fontSize: "20px",
                                        }}>
                                        New people and about Us!
                                   </Link>
                              </p>
                         </div>
                         <Button
                              style={{
                                   alignSelf: "end",
                                   fontFamily: "cursive",
                              }}
                              variant="danger"
                              onClick={handleLogOut}>
                              Sign Out!
                         </Button>
                    </Offcanvas.Body>
               </Offcanvas>
          </>
     );
}

export default SideBar;
