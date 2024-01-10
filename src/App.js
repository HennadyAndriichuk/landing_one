import Header from './components/header'
import Recommended from './components/recomended';
import Categories from './components/categories';
import './styles/landingstyle.scss';
import Buydirect from './components/buyDirect';
import Contacts from './components/contacts';
import ModalMenu from './components/modal-menu';
import { useState } from 'react';
import Footerphoto from './assets/photofooter.png';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="main">
      <ModalMenu
        active={modalActive} 
        setActive={setModalActive}
      />
      <div className="mainflow">
        <Header
          active={modalActive} 
          setActive={setModalActive}
        />
        <Recommended/>
        <Categories/>
        <Buydirect/>
        <Contacts/>
        <img src={Footerphoto} alt='img' className='footer-style'></img>
      </div>
    </div>
  );
}

export default App;
