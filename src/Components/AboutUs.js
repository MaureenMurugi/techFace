import ProfileForm from "./ProfileForm"

function AboutUs() {
    return (
        <div className="aboutUs">
            <h1 className="pra-about">Know us, Then Join us</h1>
            <p className="tell-me">Hey! This is a tech social media'tech-insta' platform, where techies show-off their designs,skills
                even to employers and entreprenuers. The best of the designs get upvotes, worst downvotes.
                It's as easy is just registering, then lets start your <span>tech-stardom</span>
            </p>
           
            <ProfileForm />

        </div>
    )
}

export default AboutUs