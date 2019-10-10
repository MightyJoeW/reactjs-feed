import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const subreddit = 'reactjs';

const ReactThread = () => {
  const [feed, setFeed] = useState([]);
  const [baseUrl] = useState('https://www.reddit.com');

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
      setFeed(res.data.data.children)
    })
  }, []);

  return (
    <>
      <ul>
        {feed.map(post => {
          return (
            <Fragment key={post.data.id}>
              <p>
                <a href={`${baseUrl}${post.data.permalink}`}>{post.data.title}</a>
              </p>
            </Fragment>
          )
        })}
      </ul>
    </>
  )
}

export default ReactThread;