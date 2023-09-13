import Card from './Components/Card'
import AddCard from './Components/AddCard'
import './App.css';

function App() {


  return (
    <body className='w-screen h-screen overflow-y-scroll   '>
      <main className=''>
        <h1 className='flex items-center justify-center text-5xl mt-3'>CAT CARDS!</h1>
        <div className='flex flex-col items-center justify-center mt-10'>
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
