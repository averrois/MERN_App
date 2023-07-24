// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

function Home() {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/posts", post);
  //       setPost(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchPost();

  // });
  return (
    <div className='browser'>
      <ul>
        <li>
          <h1>Title</h1>
        </li>
        <li>
          <span>Tags</span>
        </li>
        <li>
          <p>Lorem LoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Home