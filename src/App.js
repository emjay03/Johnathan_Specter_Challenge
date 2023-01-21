
import Content from './Components/Content';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
 
    <div className='max-w-[1440px] w-full m-auto p-auto bg-black'>
    <Header/>
    <Hero/>
    <Content/>
    <Content2/>
    <Content3/>
    <Footer/>
    </div>
  
  );
}

export default App;
