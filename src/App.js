import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <div className='App-header' style={{border: "10px solid pink"}}>
        Hello World!
      </div>
      <br className='space'></br>
      <div className='video-container'>
        <Video title="React Tutorial"
          views="1k"
          time="1 Month" channel="AG">
        </Video>
        <Video title="React Tutorial"
          views="1k"
          time="1 Month" channel="AG">
        </Video>
        <Video title="React Tutorial"
          views="1k"
          time="1 Month" channel="AG">
        </Video>
      </div>
    </div>
  );
}

export default App;
