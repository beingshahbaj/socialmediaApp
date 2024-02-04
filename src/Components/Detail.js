import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";


function Detail() {

  const [userInfo, setUserInfo] = useState([]);

  const Navigate = useNavigate();

  const postDetail = useSelector((state) => state.detail);

  const user = useSelector((state) => state.posts.posts);
  
  console.log(user);

  const newUser = [];
  for (let i = 0; i <= 5; i++) {
    newUser.push(user[i]);
    
  }

  console.log(newUser);

  const details = JSON.parse(localStorage.getItem("post"));

  return (
    <div className="detail">
      <div>
        {postDetail.length > 0 &&
          postDetail.map((post) => (
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
      <h1>More</h1>
      <div className="post-container">
        {newUser.length > 0 &&
          newUser.map((post) => (
            <div
              onClick={() => {
                // dispatch(getPost(post));
                // Navigate(`details/${post.id}`);
              }}
              className="post"
              key={post.id}
            >
              <img
                src={`https://picsum.photos/300/150?random=${post.id}`}
                alt=""
              ></img>
              <h3>{post.title}</h3>
              <div className="post-content">
                <p className="ellipsis">{post.body}</p>
                <button
                  className="material-symbols-outlined"
                  onClick={() => {
                    //
                  }}
                >
                  arrow_forward_ios
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Detail;
