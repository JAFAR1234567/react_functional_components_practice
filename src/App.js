import './App.css';

function App() {
  const nayoks = ['razak', 'alomgir', 'riaz', 'maruf'];
  return (
    <div>
      {
        nayoks.map((nayok) => <Person name={nayok} />)
      }
    </div>
  );
}

function Person({ name }) {
  return (
    <div className='person'>
      <h1>{name ? name : 'name'}</h1>
    </div>
  )
}
export default App;
