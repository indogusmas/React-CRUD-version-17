import { useState } from 'react'
import { useHistory } from 'react-router-dom';
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit  = (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = {
            title,
            body,
            author
        }
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(()=>{
            setIsPending(false);
            history.push("/");
        });
    }
    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                type="text"
                required
                value={ title }
                onChange={ (e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={ body }
                onChange= { (e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select 
                    value={author}
                    onChange={ (e) => setAuthor(e.target.value)}
                >
                    <option value="indo">Indo</option>
                    <option value="gusmas">Gusmas</option>
                </select>
                { !isPending && <button> Add Blog</button>}
                { isPending && <button disabled> Add blog .....</button>}
            </form>
        </div>
     );
}
 
export default Create;