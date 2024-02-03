import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FollowerCard = ({ firstName, lastName }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width:'400px', height: '200px' }}>
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
          <button className="btn btn-primary">Follow</button>
        </div>
      </div>
    </div>
  );
};

const FollowerComponent = () => {
  return (
    <div className="container mt-5" style={{overflow:'auto'}}>
      <div className="column" >
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="John" lastName="Doe" />
        <FollowerCard firstName="Jane" lastName="Smith" />
      </div>
    </div>
  );
};
export default FollowerComponent;