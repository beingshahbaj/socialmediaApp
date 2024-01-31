import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { postrequest } from "../../Redux/Actions/PostAction";


const Postapp = () => {

const { loding, data, error } = useSelector((state) => state.post);

console.log(loding , data, error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postrequest());
  },[data]);

    
    
    return (
      <div>
        {data.length > 0 &&
          data.map((post) => (
            <div key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <hr />
            </div>
          ))}
      </div>
    );
};

export default Postapp;
