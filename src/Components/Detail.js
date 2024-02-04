import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Detail() {

  const [userInfo, setUserInfo] = useState([]);

  const Navigate = useNavigate();

  const postDetail = useSelector((state) => state.detail);

  localStorage.setItem("post", JSON.stringify(postDetail));

  const details = JSON.parse(localStorage.getItem("post"));

  return (
    <div className="detail">
      {details.length > 0 &&
        details.map((post) => (
          <>
            <div>
              <button onClick={() => Navigate(-1)}>Back</button>
              <h1>Post Number {post.id}</h1>
            </div>
            <div className="detail-post" key={post.id}>
              <img
                src={`https://picsum.photos/400/300?random=${post.id}`}
                alt=""
              ></img>

              <div className="detail-content">
                <div className="detail-info">
                  <button onClick={() => setUserInfo(post.id)}>Detail</button>
                  <button onClick={() => setUserInfo(post.body)}>
                    user UserInfo
                  </button>
                </div>

                <div>
                  <h3>{post.title}</h3>
                  <p className="">{userInfo}</p>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default Detail;
