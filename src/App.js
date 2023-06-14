import './App.css';
import AddFormPost from './feature/post/AddFormPost';
import PostList from './feature/post/PostList';

function App() {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <AddFormPost />
      <PostList />
    </div>
  );
}

export default App;
