import React from 'react';
import styles from './index.module.css'


export const Home= () => {
  return (
    <div>
        <div>
        <img
          alt=""
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-collection/subhome-xmedia-14//w/1219/IMAGE-landscape-fill-f730f86a-6a75-4546-9a3e-4b9d09800f18-default_0.jpg?ts=1680706119360"
          className="h-full w-full"
        />
        <img
          alt=""
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-jackets/subhome-xmedia-14//w/1219/IMAGE-landscape-fill-6574930c-a2ec-488f-93c9-8c1f74d92a56-default_0.jpg?ts=1680706460668"
          className="h-full w-full"
        />
        <img
          alt=""
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-14-2//w/1219/IMAGE-landscape-default-fill-e81dc618-e4e8-44fe-a92b-564e446fc63c-default_0.jpg?ts=1680707420548"
          className="h-full w-full"
        />
        <div
          // style={{
          //   // height:'100%',
          //   objectFit:'contain',
          //   backgroundPosition:'center',
          //   backgroundSize:'auto',
          //   backgroundRepeat:'no-repeat',
          //   backgroundImage:
          //     "https://images.unsplash.com/photo-1587304791558-bee9492162ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          // }}





          className={styles?.imgBox}
        />
      </div>
    </div>
  )
}
