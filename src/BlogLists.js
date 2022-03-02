import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogLists = ({blogs, title, handleDelete}) => {


    return ( 
       <div className="blog-list">
           <h1> { title }</h1>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title}</h2>
                    <h5>{blog.body.slice(0, 55) + '....'}</h5>
                    <p> Written by {blog.author}</p>
                    <p>{}</p>
                </Link>
            </div>
        ))}
       </div>
     );
}
 
export default BlogLists;