import s from './Content.module.scss';


const Content = () => {
    return (
        <div className={s.content}>
        <div className={s.image}>
          <img src="https://media.istockphoto.com/id/1628580367/pl/zdj%C4%99cie/t%C5%82o-%C5%9Bwi%C4%85teczne.jpg?s=612x612&w=0&k=20&c=cCysQFkHa-4mQNWszo04OkCuQ_PhW8Uz76SYztS64Uw=" alt="image"/>
        </div>
        <div className={s.body}>
          <a href="#" className={s.avatar}>
            <img src="https://mighty.tools/mockmind-api/content/human/54.jpg" alt="avatar"/>
          </a>
          <div className={s.info}>
            <a href="#" className={s.name}>Yurii</a>
            <div className={s.date}>Date of birth: 2 january</div>
            <div className={s.city}>City: Lviv</div>
            <div className={s.education}>Education: LCA</div>
            <div className={s.site}>Web site: https://www.test.com</div>
          </div>
        </div>
        <div className={s.posts}>
          <div className={s.postsTitle}>My posts</div>
          <div className={s.newPost}>
            <form action="#" method='POST' className={s.form}>
              <input type="text" className={s.input} placeholder='your news...' />
              <button type='submit' className={s.button}>Send</button>
            </form>
          </div>
          <div className={s.post}>Hey, why nobody love my</div>
          <div className={s.post}>It's our new progtam! Hey</div>
        </div>
      </div>
    );
};

export default Content;