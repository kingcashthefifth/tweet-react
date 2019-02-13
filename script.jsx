
// class HoverProfile extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {

//     return (

//     )
//   }
// }


class Username extends React.Component {
  constructor() {
    super();
  }
  render() {
    // console.log('Username component: ', this.props.user.screen_name)
    var name = this.props.user.name
    var username = this.props.user.screen_name
    return (
      <p style={{ display: 'inline' }}><strong>{name}</strong><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2000px-Twitter_Verified_Badge.svg.png" height="25px" width="25px"></img>&nbsp;
        <span style={{ color: 'grey' }}>@{username} .</span></p>
    )
  }
}

class ProfilePic extends React.Component {
  constructor() {
    super();
  }
  render() {
    var propic = this.props.user.profile_image_url
    return (
      <img src={propic} style={{ display: 'inline', borderRadius: '10px' }} />
    )
  }

}

class ShowDate extends React.Component {
  constructor() {
    super();
  }
  render() {
    var showDate = this.props.showDate
    return (
      <p style={{ display: 'inline', color: 'grey' }}>{showDate}</p>
    )
  }
}

class Top extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('in Top component this.props: ', this.props.user)

    return (
      <div className="card-title"><ProfilePic user={this.props.user} /><Username user={this.props.user} /> <ShowDate showDate={this.props.showDate} /></div>
    )
  }
}

// ==================================


class Text extends React.Component {
  constructor() {
    super();
  }
  render() {
    var text = this.props.text
    return (
      <p className="card-text">{text}</p>
    )
  }

}


// ==================================


class Reply extends React.Component {
  constructor() {
    super();
  }
  render() {
    var reply = this.props.like
    return (
      <a href="#" className="card-link"><i className="far fa-comment-alt"></i> {reply}&nbsp;</a>
    )
  }
}

class Retweet extends React.Component {
  constructor() {
    super();
  }
  render() {
    var retweet = this.props.retweet
    return (
      <a href="#" className="card-link"><i className="fas fa-retweet"></i> {retweet}&nbsp;</a>
    )
  }
}

class Like extends React.Component {
  constructor() {
    super();
  }
  render() {
    var like = this.props.like
    return (
      <a href="#" className="card-link"><i className="far fa-heart"></i> {like}&nbsp;</a>
    )
  }
}

class Bottom extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <Reply like={this.props.like} />
        <Retweet retweet={this.props.retweet} />
        <Like like={this.props.like} />
      </div>
    )
  }
}

// ==================================



class Tweets extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.tweets)
    var tweetList = this.props.tweets.map(tweet => {
      return (
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <Top user={tweet.user} showDate={tweet.created_at} />
            <Text text={tweet.text} />
            <Bottom retweet={tweet.retweet_count} like={tweet.favorite_count} />
          </div>
        </div>
      )
    })
    return (
      <div>
        {tweetList}
      </div>
    )
  }
}






ReactDOM.render(< Tweets tweets={tweets} />,
  document.getElementById('root')
);