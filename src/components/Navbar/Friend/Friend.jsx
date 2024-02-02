import s from './Friend.module.scss'



const Friend = (props) => {
  return (
    <div className={s.friend}>
      <a href='#' className={s.avatar}>
        <img src={props.avatar} alt="avatar" />
      </a>
      <a href="#" className={s.name}>{props.name}</a>
    </div>
  )
};  

export default Friend;