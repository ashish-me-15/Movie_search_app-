import './App.css';

function App() {
  return (
    <>

    <MyName display="Ashish" />
    <MyName display="sharma" />
    </>
  );
}

function MyName({display}) {
  return (
    <>
    <div>
      <p>{display}</p>
    </div>
    
    </>
  )
}

export default App;
