import React, { useEffect, useState } from 'react'
import "./CreatePost.css";
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {*} isAuth ログイン状態 
 * @returns 記事投稿画面コンポーネント
 */
const CreatePost = ({isAuth}) => {
  //タイトルの状態変数
  const [title, setTitle] = useState();
  //タイトルの状態変数
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  /**
   * 記事投稿処理
   */
  const CreatePost = async() => {
    //Firebaseにドキュメントを追加
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });
    navigate("/");
  };

  useEffect(() => {
    //ログアウト状態の場合、ログイン画面にリダイレクト
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
            <input type="text" placeholder="タイトルを記入" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="inputPost">
          <div>投稿</div>
            <textarea placeholder="投稿内容を記入" onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button className="postButton" onClick={CreatePost}>投稿する</button>
      </div>
    </div>
  );
};

export default CreatePost;