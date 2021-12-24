import PostImage from '../assets/img/hero-img.png';
export default function Post(){
    const name= "Sourav Samanta";
    const timeDate=" 1 FEB 2021";
    const title= "Testing";
    const likes= "2", comments="4", shares="1", views="2";
    return (
        <>
        <div className="row justify-content-center">
        <div className="post-container col-md-5 col-sm-5 col-lg-5">
            <div className="top">
                <div className="dfc">
                <div className="image"></div>
                <div className="title">
                    <h3>{name}</h3>
                    <p>{timeDate}</p>
                </div>
                </div>
                <div className="option">
                <i class='bx bx-dots-horizontal-rounded'></i>
                </div>
            </div>
            <div className="image-container">
                <img src={PostImage} alt="post image" />
            </div>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <hr className="mx-2"/>
            {/* <div className="view">
                {views}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444444"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </div> */}
            <div className="actions">
                <div className="action">
                <i class='bx bx-like'></i>
                <p>{likes} Like</p>
                </div>
                <div className="action">
                <i class='bx bx-comment'></i>
                <p>{comments} Comment</p>
                </div>
                <div className="action">
                <i class='bx bx-share bx-flip-horizontal' ></i>
                <p>{shares} Share</p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}