import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useGetUserID} from '../hooks/useGetUserID';
import { useCookies } from 'react-cookie';

function Home() {
  const userID = useGetUserID();
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  // eslint-disable-next-line
  const [cookies, _] = useCookies(["access_token"]);

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
    // eslint-disable-next-line
    if (cookies.access_token) {
      fetchSavedPost();
    }

  }, [userID, cookies.access_token]);

  const savePost = async (postID) => {
    try {
      const response = await axios.put("http://localhost:3001/posts",
      {postID, userID},
      {headers: {Authorization: cookies.access_token}}
      );
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
              {post.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
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