import React, { useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const userID = useGetUserID() ; 

  const [post, setPost] = useState({
    title: "",
    content: "",
    tags: [],
    imgUrl: "",
    userOwner: userID
  });

  const navigate = useNavigate();

  const addTag = (e) => {
    e.preventDefault();
    setPost({ ...post, tags: [...post.tags, post.tagsInput] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/posts", post);
      alert("Post Created!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='post'>
      <div className="post-container">
        <form onSubmit={onSubmit}>
          <h3>Create Post</h3>
          <div className='row title_inp'>
            <label htmlFor='title'>title</label>
            <input 
              type="text" 
              placeholder="Title Of Post"
              name='title' 
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>
          <div className='row'>
            <label htmlFor='title'>Content</label>
            <textarea 
              type="text" 
              placeholder="Content Of Post"
              name='content' 
              onChange={(e) => setPost({ ...post, content: e.target.value })}
            />
          </div>
          <div className='row'>
            <label htmlFor='title'>Tags</label>
            <div className='tags'>
              <div className='tags-row'>
                <input 
                  type="text" 
                  placeholder="Tags..."
                  name='tags' 
                  onChange={(e) => {
                      setPost({ ...post, tagsInput: e.target.value });
                    } 
                  }
                />
                <button 
                  onClick={addTag}
                  type='button'
                >
                  +
                </button>
              </div>
              <div className='tags-row'>
                {post.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className='row'>
            <label htmlFor='title'>Image Url</label>
            <input 
              type="text" 
              placeholder="Image URL"
              name='imgUrl' 
              onChange={(e) => setPost({ ...post, imgUrl: e.target.value })}
            />
          </div>
          <div className='row'>
            <button type='submit'>
              Create Post
            </button> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost;
