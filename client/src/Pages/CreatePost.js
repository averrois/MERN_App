import React, { useState } from 'react'

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    tags: [],
    imgUrl: "",
    userOwner: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // If the input is for tags, split the comma-separated string into an array
    if (name === "tags") {
      const tagsArray = value.split(",");
      setPost({ ...post, [name]: tagsArray });
    } else {
      // Otherwise, update the state normally
      setPost({ ...post, [name]: value });
    }
  };
  

  const addTag = (e) => {
    e.preventDefault();
    setPost({ ...post, tags: [...post.tags, ""] });
  };  

  return (
    <div className='post'>
      <div className="post-container">
          <form>
              <h3>Create Post</h3>
              <div className='row title_inp'>
                <label htmlFor='title'>title</label>
                <input 
                  type="text" 
                  placeholder="Title Of Post"
                  name='title' 
                  onChange={handleChange}
                />
              </div>
              <div className='row'>
                <label htmlFor='title'>Content</label>
                <textarea 
                  type="text" 
                  placeholder="Content Of Post"
                  name='content' 
                  onChange={handleChange} 
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
                      onChange={handleChange}// Join the tags array into a comma-separated string
                    />
                    <button onClick={addTag}>+</button>
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
                  onChange={handleChange}
                />
              </div>
              <div className='row'>
                <button>
                  Create Post
                </button> 
              </div>
          </form>
      </div>
    </div>
  )
}

export default CreatePost