import { useEffect, useState } from 'react'
import './styles/App.css'
import serverUrls from './assets/config.json';
import Table from './componets/table';
import FormCreatePost from './componets/createPost';
import Filter from './componets/filter';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(serverUrls.LIST_URL);
        const json = await response.json();
        setPosts(json.posts);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);


  const updateFilter = (e) => {
    setFilter(e.target.value)
  }

  const submitPost = async (formBody) => {
    try {
      const response = await fetch(serverUrls.CREATE_URL,
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formBody)
        });
      const json = await response.json();
      setPosts([...posts, json]);
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async (formBody) => {
    try {
      const response = await fetch(serverUrls.DELETE_URL,
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formBody)
        });
      const json = await response.json();      
      setPosts(posts.filter((post) => {
        return post.id !== json.id;
      }));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="">
        <p>Hello Vite + React!</p>
      </header>
      <Filter updateFilter={updateFilter} />
      <Table
        posts={filter.length ? posts.filter((post) => { return post.postName.toLowerCase().includes(filter.toLowerCase()) }) : posts}
        sendDeletePost={deletePost}
      />
      <FormCreatePost submitPost={submitPost} />
    </div>
  )
}

export default App
