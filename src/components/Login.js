import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {setIsAuth} ログイン状態を設定する関数 
 * @returns ログイン画面コンポーネント
 */
const Login = ({ setIsAuth })  => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      //ログイン状態をローカルストレージに保存
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      //ホーム画面に遷移
      navigate("/")
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;