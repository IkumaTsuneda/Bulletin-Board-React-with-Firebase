import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

/**
 * 
 * @param {isAuth} ログイン状態 
 * @returns ナビゲーションバーコンポーネント
 */
function Navbar({isAuth}) {
  return (
    <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          ホーム
        </Link>
        {isAuth ?
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
         </Link>
        </> 
         :
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
          </Link> 
         }
    </nav>
  );
};

export default Navbar;