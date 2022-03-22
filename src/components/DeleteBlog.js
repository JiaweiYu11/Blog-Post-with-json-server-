import axios from "axios";
import { Component } from "react/cjs/react.production.min";


const api = axios.create({
    baseURL: 'http://localhost:3000/posts'
  })

class DeleteBlog extends Component {

    state = {
      posts: []
    }

    constructor() {
      super();
      this.getPosts();
    }

    getPosts = async () => {
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ posts: data })
    }
    

    //delete blog include in api
    deletePost = async (id) => {
        await api.delete(`/${id}`)
        this.getPosts();
    }


    render() {
      return (
          
        <div className="container">
          {this.state.posts.map(post =>
            <div key={post.id}>
              <h3>
                  {post.ptitle}
                  <button type="button" 
                    className="float-end btn btn-secondary"
                    onClick={()=>this.deletePost(post.id)}>Delete Post</button>
              </h3>
              <p>By {post.user}</p>
              <p>{post.blog}</p>
            </div>
          )}
        </div>
      )
    }
  }

  export default DeleteBlog