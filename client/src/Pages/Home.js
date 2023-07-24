import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts", posts);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();

  });
  return (
    <div className='browser'>
      <h1 className='title'>All Posts ...</h1>
      {posts.map((post) => (
        
        <div className='article'>
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
                type='button'
              >
                Save
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