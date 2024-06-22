import preloader from '../../../assets/images/loader.gif';





let Preloader = () => {
    return (
        <div style={{maxWidth: '30px'}} >
            <img style={{maxWidth: '100%', }} src={preloader} alt="" />
        </div>
    )
};




export default Preloader;

