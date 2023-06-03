import React from "react";

//Context yapısını bu şekilde oluşturuyoruz. Süslü içine kullanacağımız değerler ve methodları yazıyoruz
//React.createContext({status:null, login : () => {}}) --Bu haliyle dışardan erişemeyceğimiz için dışarıya açmamız gerekir 

const auth = React.createContext({status:null, login:()=>{}})

export default auth

//biz bunu kullanmak istediğimiz yerde önce tanılıyoruz. örn;App.js de kullanmak istiyoruz o zaman oraya gidip tanımlamamız gerekir.