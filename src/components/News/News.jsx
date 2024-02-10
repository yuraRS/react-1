import s from './News.module.scss';
import React from 'react';



const News = (props) => {

    return (
        <>
            <div className={s.news}>News info</div>
            <div className={s.body}>

            </div>
            <textarea className={s.area} ></textarea>
            <button type='button' className={s.button} >Send</button>
        </>
    );
};

export default News;

