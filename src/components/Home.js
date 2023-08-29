import React, { useEffect, useState } from 'react'
import "./Home.css"
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

/**
 * 
 * @returns ホーム画面コンポーネント
 */
const Home = () => {
  //投稿一覧
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getpost = async () => {
      //Firebaseから記事内容を取得
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getpost();
  }, []);

  /**
   * 記事削除処理
   * 
   * @param {*} id Firebaeの記事ID
   */
  const handleDelete = async (id) => {
    //Firebaseから記事を削除
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
             <h1>{post.title}</h1>
            </div>
  
            <div className="postTextContainer">
              {post.postsText}
            </div>
  
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id == auth.currentUser?.uid && (
              <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div> 
  );
};

export default Home;