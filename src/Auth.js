import { useContext, useState } from "react";
import AuthContext from "./context/auth-contest";

function Auth() {
  const { status, login } = useContext(AuthContext);
  //2. yol olarak bu şekilde de kullanılabilir
  //1 -const auth = useContext(AuthContext)
  //2- bu şekilde yazarsak auth.status olarak kullanılır
  return (
    <div>
        {
            status ? <p>giriş yapıldı</p> : <p>Giriş yapınız</p>
        }
        <button onClick={login}>Grişiniz yapınız</button>
    </div>
  );
}

export default Auth;
