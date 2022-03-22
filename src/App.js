
import StyleLink from "./components/style";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import { useState } from 'react';

function App() {

  const [blogs, setBlogs] = useState([
    {
      ptitle: '',
      user: '',
      blog: '',
    },
  ])

  return (
    <div className='container'>
      
      <StyleLink />
      <AddBlog  />
      <Blogs blogs={blogs} /> 

    </div>
  );
}

export default App;
