import "./Profile.css";

function Profile(props) {

    return (
        <div className="profile-container">
            <div className="profile-container-upper">
                <img 
                    className="profile-img"
                    width="100"
                    src={props.image}
                />
                <h1 className="profile-name">{props.name}</h1>
            </div>
            <p className="profile-desc">{props.description}</p>
        </div>
    )

}

export default Profile;