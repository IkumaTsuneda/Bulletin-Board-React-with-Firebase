import { signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {setIsAuth} ログイン状態を設定する関数 
 * @returns ログアウト画面コンポーネント
 */
const Logout = ({ setIsAuth })  => {
  const navigate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      //ログイン状態をローカルストレージから削除
      localStorage.clear();
      setIsAuth(false);
      //ログイン画面に遷移
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;