import React, { useState } from 'react';
import DateTimePretty from './DateTimePretty/DateTimePretty';
import moment from 'moment';

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

const getCurrentDateTimeCaption = (date) => {
  const millisecondsPerHour = 3600000;
  const millisecondsPerDay = 86400000;
  const currentDate = new Date();
  const differenceInMilliseconds = moment(currentDate).diff(moment(date));
  const differenceInDays = moment(currentDate).diff(moment(date), 'days');
  let timeCaption;

  if (differenceInMilliseconds > millisecondsPerDay) {
    timeCaption = `${differenceInDays} дней назад`;
  } else if (differenceInMilliseconds <= millisecondsPerHour) {
    timeCaption = '12 минут назад';
  } else {
    timeCaption = '5 часов назад';
  }

  return timeCaption;
}

function Video({ url, date }) {
  const CurrentDateTime = DateTimePretty(getCurrentDateTimeCaption, 'date')(DateTime);
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <CurrentDateTime date={date} />
    </div>
  )
}

function VideoList({ list }) {
  return list.map((item, idx) => <Video key={idx} url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2020-10-15 02:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2020-10-15 01:40:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2020-10-13 00:00:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}
