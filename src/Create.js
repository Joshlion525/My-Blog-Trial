import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handlleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true)
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1)
            history.push('/');
        })

        
    }
    return ( 
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form action="" onSubmit={handlleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange = {(e)=> setTitle(e.target.value)} 
                />
                <label htmlFor="">Blog body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="">Blog author:</label>
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                </input>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled >Adding Blog...</button> }

            </form>
        </div>
     );
}
 
export default Create;