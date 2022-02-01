import React from 'react';
import style from './Message.module.css';

type MessagePropsType = {
   avatar: string,
   name: string,
   message: string,
   time: string
}

function Message(props: MessagePropsType) {
   return <div className={style.message}>
      <div className={style.message__ava}>
         <img src={props.avatar} alt=":(" />
      </div>
      <div className={style.message__content}>
         <div className={style.name}>
            {props.name}
         </div>
         <div className={style.text}>
            {props.message}
         </div>
         <div className={style.time}>
            {props.time}
         </div>
      </div>
   </div>
}

export default Message;
