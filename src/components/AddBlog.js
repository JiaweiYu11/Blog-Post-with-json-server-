import React from 'react';
import { useState } from 'react';
import axios, { Axios } from 'axios';


function AddBlog() {
    const api = 'http://localhost:3000/posts'
    const [data, setData] = useState({
        ptitle: "",
        user: "",
        blog: ""
    })
    function submit(e) {
         e.preventDefault();
         axios.post(api,{
             ptitle: data.ptitle,
             user: data.user,
             blog: data.blog
         })
         .then(res=>{
             console.log(res.data)
         })
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function Reload(){
        window.location.reload();
    }

  return (
    <div className="container">
            <div className="col-md-6 mb-4">
                <h1>React Blog</h1>
                <form onSubmit={(e)=> submit(e)}>
                    <div className="mb-2">
                        <select className="form-select" aria-label="User select" id="user" value={data.user} onChange={(e) => handle(e)}>
                            <option value="defaultValue">Select the user</option>
                            <option value="1- Leanne Graham">1 - Leanne Graham</option>
                            <option value="2- Ervin Howell">2 - Ervin Howell</option>
                            <option value="3- Clementine Bauch">3 - Clementine Bauch</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="postTitle" className="form-label">Post Title</label>
                        <input className="form-control" id="ptitle" value={data.ptitle} onChange={(e) => handle(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contentInput" className="form-label">Blog Post</label>
                        <textarea className="form-control" id="blog" rows="3" value={data.blog} onChange={(e) => handle(e)}></textarea>
                    </div>
                    <div>
                        <button onClick={Reload} type="submit" className="btn btn-primary">New Post</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AddBlog
