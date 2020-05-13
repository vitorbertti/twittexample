import React from 'react'

import {apiTweetAction} from './lookup'

export function ActionBtn(props) {
   const {tweet, action, didPerformAction} = props;
   const likes = tweet.likes ? tweet.likes : 0;
   const className = props.className ? props.className : 'btn btn-primary btn-sm';
   const actionDisplay = action.display ? action.display : 'Action';

   const handleActionBackendEvent = (response, status) =>{
      if ((status === 200 || status === 201) && didPerformAction){
         didPerformAction(response, status);
      }
    }

   const handleClick = (e) => {
      e.preventDefault();
      apiTweetAction(tweet.id, action.type, handleActionBackendEvent)
   }

   const display = action.type === 'like' ? `${likes} ${action.display}` : actionDisplay
   return <button onClick={handleClick} className={className}> {display} </button>
 }