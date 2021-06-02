import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Comments from './components/Comments/Comments';
import MainVideo from './components/MainVideo/MainVideo';
import Suggestions from './components/Suggestions/Suggestions';

function App() {
  return (
    <div>
     <div className="row">
     <div className="col-md-8">
     <MainVideo/>
     <Comments/>
     </div>
     <Suggestions/>
     </div>
    </div>
  );
}

export default App;
