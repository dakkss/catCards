import Card from './Components/Card'
import AddCard from './Components/AddCard'
import './App.css';

function App() {


  return (
    <body className='w-screen h-screen overflow-y-scroll   '>
      <main className=''>
        <div className='flex flex-col items-center justify-center mt-10'>
          <h1>Add a Card:</h1>
          <AddCard />
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center'>
          <Card />
        </div>
      </main>
    </body>
  );
}

export default App;
