import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PostlistTable from './containers/postslist';
import PostEditor from './containers/posteditor';
import Modal from './components/modal';
function App() {
  return (
    <div className="App">
      <h1><strong>Blog entries</strong></h1>
      <PostlistTable></PostlistTable>
      <PostEditor></PostEditor>
    </div>
  );
}

export default App;
