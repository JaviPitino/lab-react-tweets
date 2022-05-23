function User(props) {

    // const { name, handle } = props.tweet.user
    const { userData } = props
    return (
        <span className="
        ">
            <span className="name">{userData.name}</span>
            <span className="handle">{userData.handle}</span>
        </span>
    )
}

export default User;