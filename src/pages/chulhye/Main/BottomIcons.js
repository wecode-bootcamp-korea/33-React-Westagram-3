import React from 'react';
import { useEffect, useState } from 'react';
import './Main.scss';

const BottomIcons = () => {
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/imgData.json')
      .then(res => res.json())
      .then(data => {
        setIconList(data);
      });
  }, []);

  return (
    <div className="contentsBottom">
      {iconList.map(icons => (
        <img
          key={icons.id}
          src={icons.src}
          className={icons.className}
          alt="contentsImg"
        />
      ))}
    </div>
  );
};
export default BottomIcons;
