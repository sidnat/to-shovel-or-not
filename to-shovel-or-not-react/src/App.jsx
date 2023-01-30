import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className='flex flex-col' style={{height: '100vh'}}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
