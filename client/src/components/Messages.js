import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import socket from '../connectSocket';
import StyledMessages from '../styles/Messages';
import StyledMessage from '../styles/Message';
import generate from 'shortid';
import LoadingDots from './LoadingDots';

export default ({messages, room, dateInt, loading}) => {

  const container = useRef({current: {scrollHeight: 0}});
  const bottomDiv = useRef(null);
  let newMessage = '';
  if(messages[messages.length-1]) {
    newMessage = messages[messages.length-1].dateTime.dateInt;
  }

  const [scrollBottom, setScrollBottom] = useState(0);
  const [loadingOldMessages, setLoadingOldMessages] = useState(false);

  const handleScroll = e => {
    const scrollBottom = e.target.scrollHeight - (e.target.clientHeight + e.target.scrollTop);
    setScrollBottom(scrollBottom);
    if(e.target.scrollTop===0) {
      socket.emit('get messages', room, dateInt);
      setLoadingOldMessages(true);
    }
  }

  useEffect(()=>{
    const loadingDone = () => setLoadingOldMessages(false);
    socket.on('loading done', loadingDone);
    return () => socket.removeListener('loading done', loadingDone);
  }, [])

  useLayoutEffect(()=>{
    if(true) {
      container.current.scrollTop = (container.current.scrollHeight - 25) - (scrollBottom + container.current.clientHeight);
    }
  }, [loadingOldMessages])

  useLayoutEffect(()=>{
    if(!loading) {
      bottomDiv.current.scrollIntoView();
    }
  },[newMessage, loading])

  const displayMessages = messages.map(message => {
    return (
      <StyledMessage key={generate()}>
        <div className="outer">
          <span className="name">{message.userName}</span> <span className="inner">{message.dateTime.dateString}</span> <br />
          {message.msg}
        </div>
      </StyledMessage>
    )
  })

  return (
    <StyledMessages ref={container} onScroll={handleScroll}>
      {loading ?
        <LoadingDots /> :
        <>
          {loadingOldMessages && <LoadingDots />}
          <>
            <div></div>
            {displayMessages}
            <div ref={bottomDiv}></div>
          </>
        </>
      }
    </StyledMessages>
  )
}
