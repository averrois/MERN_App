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
          <div className="img_container">
            <img src="https://avatars.githubusercontent.com/u/70775489?v=4"/>
          </div>
        </li>
        <li>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis sed lectus vestibulum eleifend. Etiam fringilla magna sit amet arcu facilisis, ac auctor neque bibendum. Sed eleifend libero non nibh sagittis, eget malesuada arcu scelerisque. Sed auctor facilisis massa, ac facilisis arcu euismod in. Duis tincidunt elit quis metus feugiat, ac consectetur quam ultrices. Proin nec justo mauris. Proin vehicula libero nec lectus scelerisque malesuada.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Home