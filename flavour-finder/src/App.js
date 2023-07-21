import logo from './logo.svg';
import './App.css';

import FoodCardCollection from './ui-components/FoodCardCollection'
import HeroLayout1 from './ui-components/HeroLayout1'
import Footer from './ui-components/Footer'
import FoodCreateForm from './ui-components/FoodCreateForm'

function App() {
  return (
    <div className="h-100 d-flex flex-column centered-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: '20px',
    }}>
      <HeroLayout1 style={{ width: '100% !important' }} />

      <FoodCardCollection />
      <FoodCreateForm />
      <Footer />
    </div>
  );
}

export default App;
