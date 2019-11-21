// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';

// COMPONENT DEFINITION
const ReactThread = props => {
  return (
    <>
      // {props.isUserLoggedIn && <p>Hello {props.userName}</p>}
      <ul>
        {props.feed.length > 0
          ? props.feed.map(post => {
            return (
              <Fragment key={post.data.id}>
                <li>
                  <p><a href={`${props.baseUrl}${post.data.permalink}`}>{post.data.title}</a></p>
                </li>
              </Fragment>
            )
          })
          : 'Feed unavailable. Try again later.'
        }
      </ul>
    </>
  )
}

export default ReactThread;