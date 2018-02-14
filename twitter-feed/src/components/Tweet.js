import React from 'react';


const Tweet = (props) => {

  let date = new Date(parseInt(props.timestamp_ms));
   let monthNames = [
     "Jan", "Feb", "Mar",
     "Apr", "May", "Jun", "Jul",
     "Aug", "Sep", "Oct",
     "Nov", "Dec"
   ];
   let day = date.getDate();
   let monthIndex = date.getMonth();
   date = monthNames[monthIndex] + ' ' + day;

  return(
      <div className="tweetContainer">
        <div className="profile_image">
          <img src={props.profile_image_url} />
        </div>
        <div className="profile_body">
          <p>{props.name}
            <span className="handle"><a href="#">@{props.screen_name}</a></span>
            <span className="timestamp_ms">{date}</span>
          </p>
          <p>{props.text}</p>
          <div className="media">
            <img src={props.media}/>
          </div>
          <div className="states_of_tweet">
            <span data-name="reply" className="fa fa-reply retweeted" onClick={props.handleClick} >{props.retweeted}</span>
            <span data-name="retweet" className={`fa fa-retweet retweet ${ props.retweeted_color }`} onClick={props.handleClick}></span>
            <span data-name="retweet count" className={`retweet_count ${ props.retweeted_color }`} onClick={props.handleClick}>{props.retweet_count}</span>
            <span data-name="liked" className={`fa fa-heart favorited ${ props.favorited_color }`} onClick={props.handleClick}>{props.favorited}</span>
            <span data-name="favorite count" className={`favorite_count ${ props.favorited_color }`} onClick={props.handleClick}>{props.favorite_count}</span>
            <span data-name="ellipsis" className="fa fa-ellipsis-h ellipsis" onClick={props.handleClick}></span>
          </div>
        </div>
      </div>

  )
}

export default Tweet;
