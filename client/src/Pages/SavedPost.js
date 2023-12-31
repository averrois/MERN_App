import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useGetUserID} from '../hooks/useGetUserID';

function SavedPost() {
  const userID = useGetUserID();
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const fetchSavedPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/savedPosts/${userID}`);
        setSavedPosts(response.data.savedPosts);
      } catch (error) {
        if (error.response.status === 404) {
          console.log('User not found or has no saved posts.');
        } else {
          console.error(error);
        }
      }      
    };
    fetchSavedPost();

  }, [userID]);

  return (
    <div className='browser'>
      <h1 className='title'>Saved Posts ...</h1>
      {savedPosts.map((post) => (
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
                <img src={post.imgUrl} alt={post.title} />
              </div>
            </li>
            <li>
              <p>{post.content}</p>
            </li>
          </ul>
        </div>
      ))}

    </div>
  )
}

export default SavedPost;