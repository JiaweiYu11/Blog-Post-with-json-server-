import DeleteBlog from "./DeleteBlog"

const Blog = ({ blog, onDelete }) => {
    return (
        <div className="col-md-6 mb-4">
        <DeleteBlog />
        </div>
    )
}

export default Blog

