import React, { useState, useEffect } from 'react';
import axios from 'axios';

const subreddit = 'reactjs';

const ReactThread = () => {
  const [feed, setFeed] = useState([]);
  const [baseUrl, setBaseUrl] = useState('https://www.reddit.com');

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
      setFeed(res.data.data.children)
    })
  }, []);

  return (
    <>
      <ul>
        {feed.map(post => {
          // return <li a href={`baseUrl{post.data.permalink}`}> {post.data.title}</li>
          return (
            <>
              <a key={post.data.id} href={`${baseUrl}${post.data.permalink}`}> {post.data.title}</a>
              <br />
            </>
          )
        })}
      </ul>
    </>
  )
}

export default ReactThread;