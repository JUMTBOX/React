import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:4000/');
    const data = await res.json();
    setDataArr(data);
    console.log(dataArr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((item) => {
        return (
          <ProfileComponent
            key={item.name}
            name={item.name}
            age={item.age}
            nickname={item.nickName}
          />
        );
      })}
    </>
  );
}
