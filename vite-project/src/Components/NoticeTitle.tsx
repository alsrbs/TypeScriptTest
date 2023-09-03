import React from 'react'
import { GiWireCoil } from 'react-icons/gi';
import style from './NoticeTitle.module.css';

function NoticeTitle(){
    return(
        <div className={style.NoticeTitle}>
            <GiWireCoil className={style.TodoTitleIcon} />
            <div className={style.NoticeTitleTitle}>TodoList With Recoil</div>
        </div>
    );
};

export default NoticeTitle;