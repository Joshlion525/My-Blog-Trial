import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick= () =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className = "blog-details">
           { isPending && <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> }
           { error && <div>{ error }</div>}
           { blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <div>{ blog.body}</div>
                   <p>Written by { blog.author}</p>
                   <button onClick={handleClick}>Delete post</button>
               </article>
           )}
        </div>
     );
}
 
export default BlogDetails;