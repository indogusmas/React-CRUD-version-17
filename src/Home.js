import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, Error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { Error && <p>{Error}</p>}
            { isPending && <p>Loading ganteng....</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;