import s from './Music.module.scss';


const Music = (props) => {
    return (
        <div className={s.music}>Music {props.type}</div>
    );
};

export default Music;
