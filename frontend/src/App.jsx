import Card from './Components/Card'
import AddCard from './Components/AddCard'
import './App.css';

function App() {


  return (
    <main className='w-screen h-screen overflow-y-scroll   '>
      <body className=''>
        <div className='flex flex-col items-center justify-center mt-10'>
          <h1>Add a Card:</h1>
          <AddCard />
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center'>
          <Card />
        </div>
      </body>
    </main>
  );
}

export default App;
