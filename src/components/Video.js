import './Video.css';

function Video({title, channel, views, time}) {
    let bg='light';
  return (
    <>
    <div className='container'>
      <div>
      <img
        src="https://i.pinimg.com/736x/c2/55/30/c25530ab671a4098de5598e047a9a985--purple-sunset-natural-beauty.jpg"
        alt="Pretty Sunset" style={{width: "300px"}}
      /> </div>
      <div className='video-details'>
      <div className='title'>{title}</div>
      <div className='channel'>{channel}</div>
      <div className='time'>{time}</div>
      <div className='views'>
        {views} <span>.</span></div>
      </div>
      </div>
    </>
  );
}

export default Video;
