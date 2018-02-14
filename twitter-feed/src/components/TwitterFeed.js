import React from 'react';
import Tweet from './Tweet';

//from console.log
/// data[4].entities.media[0].media_url
// "https://s3.amazonaws.com/horizon-production/images/twitter-feed-react-media.jpg"

const TwitterFeed = (props) => {


let tweetInfoArray = props.dataprops.map( (eachTweet) => {
  let retweeted_color,favorited_color,media,message
  if (eachTweet.entities.media != null) {
    media= eachTweet.entities.media[0].media_url
  } else{
    media=""
  }
  if (eachTweet.favorited === true){
    favorited_color = "red"
  }
  if (eachTweet.retweeted === true){
    retweeted_color = "green"
  }

  return(
    <Tweet
      key={eachTweet.id_str}
      media={media}
      name={eachTweet.user.name}
      profile_image_url={eachTweet.user.profile_image_url}
      screen_name={eachTweet.user.screen_name}
      timestamp_ms={eachTweet.timestamp_ms}
      text={eachTweet.text}
      retweet_count={eachTweet.retweet_count}
      favorite_count={eachTweet.favorite_count}
      favorited={eachTweet.favorited}
      favorited_color={favorited_color}
      retweeted={eachTweet.retweeted}
      retweeted_color={retweeted_color}
      message={message}
      handleClick={(event) => {
        alert(`${event.target.getAttribute("data-name")} icon was clicked`)
      }}
    />
  )
})
return (
  <div className="tweetsMainDiv">
    <h1 className="title">Fake Feed Jawn</h1>
    <ul>{tweetInfoArray}</ul>
  </div>
)
}
export default TwitterFeed;
