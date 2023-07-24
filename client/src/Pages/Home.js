import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useGetUserID} from '../hooks/useGetUserID';

function Home() {
  const userID = useGetUserID();
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSavedPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/savedPosts/ids/${userID}`);
        setSavedPosts(response.data.savedPosts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
    fetchSavedPost();

  }, [userID]);

  const savePost = async (postID) => {
    try {
      const response = await axios.put("http://localhost:3001/posts", {postID, userID});
      setSavedPosts(response.data.savedPosts);
    } catch (error) {
      console.error(error);
    }
  }

  const isPostSaved = (id) => savedPosts.includes(id);

  return (
    <div className='browser'>
      <h1 className='title'>All Posts ...</h1>
      {posts.map((post) => (
        
        <div className='article' key={post._id}>
          <ul>
            <li>
              <h1>{post.title}</h1>
            </li>
            <li>
              <span>Tags</span>
            </li>
            <li>
              <div className="img_container">
                <img src={post.imgUrl} alt={post.title}/>
              </div>
            </li>
            <li>
              <p>
                {post.content}
              </p>
            </li>
            <li>
              <button 
                onClick={() => savePost(post._id)} 
                type='button'
                disabled={isPostSaved(post._id)}
              >
                {isPostSaved(post._id) ? "unsave" : "save"}
              </button>
            </li>
          </ul>
        </div>
      ))
    }     
    </div>
  )
}

export default Home