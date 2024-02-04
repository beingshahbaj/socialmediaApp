import React ,{useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchPosts } from '../Redux/feature/FetchpostSlice'
import { useNavigate } from 'react-router-dom'
import { getPost } from '../Redux/feature/GetDetails'

function Home() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.posts.posts)
  const loading = useSelector(state => state.posts.loading)
  const Navigate = useNavigate();

  
  
  
  useEffect(() => {
    dispatch(fetchPosts())
  },[])

  

  if (loading) {
    return (
      <div className="loader">
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    );
  }

  return (
    <div>
      <div className="home">
        <h1>Social Media For Travellers</h1>
        <input type="search" placeholder="Search for a place" />
      </div>
      <div className="post-container">
        {user.length > 0 &&
          user.map((post) => (
            <div
              onClick={() => {
                dispatch(getPost(post));
                Navigate(`details/${post.id}`);
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
                    dispatch(getPost(post));
                    Navigate(`details/${post.id}`);

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

export default Home