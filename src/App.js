import { useState } from 'react';
import './App.css';
import Auth from './Auth';
import AtuhContext from "./context/auth-contest"
//genel bir kapsayıcı olmasını istresek index.js içinde kurmamız gerekirdi. fakat biz genel bir kapsayıcı olmasına gerek yok diyorsak
//yapıyı direkt app den de kurabiliriz.
function App() {
  const [buttonValue, setButtonValue] = useState(false)
  const loginAuth=()=>{
    buttonValue ? setButtonValue(false) : setButtonValue(true)
  }
  return(

    //bize sunduğu avantaj propslarla data taşımak zorunda kalmayız
    //context içidneki değeri başka complerde de kullanmak istersek AuthContext kapsayısıcının içinde yazmamız gerekmektedir.
    //kullanacağımız değer ve methodları value içinde veriyoruz
    <AtuhContext.Provider value={{status:buttonValue, login:loginAuth}}>
    <Auth/>
  </AtuhContext.Provider>
    )
}

export default App;
