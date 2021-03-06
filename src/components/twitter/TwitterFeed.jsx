import { useState, useEffect } from "react";
// import tweets from '../../assets/tweets.json';
import './twitter.scss'

function TwitterFeed() {

    const [Tweets, setTweets] = useState([{name: "Loading...", username: "Loading...", text: "Loading..."}]);
    // const [Tweets, setTweets] = useState(tweets);

    // http://localhost:8888/.netlify/functions/apihandler
    // https://roaring-cactus-4a1a3c.netlify.app/.netlify/functions/apihandler

    async function fetchNetlify() {
        fetch('/.netlify/functions/apihandler')
            .then(response => response.json())
            .then(data => {
                setTweets(data);
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        setInterval(() => {
            fetchNetlify();
        }, 10000);
    }, []);

    return (
        <div className="TwitterWrapper">

            {Tweets.map((tweet, index) => {
                return (
                    <div className="Tweet" key={index}>
                        <div className="TweetHandle">
                            <h3>{tweet.name}</h3>
                        </div>
                        <div className="TweetContent">
                            <p>{tweet.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TwitterFeed;

