function Message(props) {
    const { messageTweet } = props
    return (
        <p className="message">
          {messageTweet}
        </p>
    )
}

export default Message