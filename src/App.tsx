import video from "./NeoIsTheOne.mp4" 
function App() {
  return (
    <div className="App absolute text-white w-screen h-screen">
      <div className="flex flex-col h-full w-full items-center justify-center">
        <video className="w-11/12" controls>
          <source src={video} type="video/mp4"></source>
        </video>
        <span className="text-shadow-border text-sm">The Matrix&copy; is owned by Warner Bros. Pictures.</span>
      </div>
    </div>
  );
}

export default App;
