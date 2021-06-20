import React, {useState} from 'react';
import Header from "../header/header";
import MainBody from "../main-body/main-body";
import Footer from "../footer/footer";
import PopupForm from "../popup-form/popup-form";

const MainScreen = () => {
  const [popUpActive, setPopUpActive] = useState(true);

  return <React.Fragment>
    <Header />
    <MainBody />
    <Footer />
    <PopupForm active={popUpActive} setActive={setPopUpActive}/>
  </React.Fragment>;
};

export default MainScreen;
