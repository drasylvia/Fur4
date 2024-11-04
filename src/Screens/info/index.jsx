import React from 'react';

import styles from './style.module.scss';

const infoItems = [
  {
    pet: './pet3.png',
    color: 'bg-orange-300',
    pethair: 'Long',
    petgene: 'Dogs',
  },
  {
    pet: './pet1.png',
    color: 'bg-green-300',
    pethair: 'Short',
    petgene: 'Dogs',
  },
  {
    pet: './pet2.png',
    color: 'bg-purple-300',
    pethair: 'Long',
    petgene: 'Cats',
  },
  {
    pet: './pet4.png',
    color: 'bg-yellow-300',
    pethair: 'Short',
    petgene: 'Cats',
  },
];

export default function Info() {
  return (
    <section className={styles.wrapper}>
      {infoItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <InfoPanel
            key={index}
            pet={item.pet}
            color={item.color}
            pethair={item.pethair}
            petgene={item.petgene}
          />
        </div>
      ))}
    </section>
  );
}

const InfoPanel = ({ pet, color, pethair, petgene }) => {
  return (
    <div className="w-full max-w-[350px] aspect-square bg-blue-50 border-2 border-[#00aeef] rounded-xl p-4 overflow-hidden">
      <div className="w-full relative ">
        <div className="w-full flex flex-col">
          <img src={pet} className="w-16 -mb-2 h-20" />
          <div
            className={`${color} w-[40%] p-2 rounded-lg border-2 border-gray-500 flex flex-col`}>
            <p>For</p>
            <p>{pethair}</p>
            <p>Hair</p>
            <p>{petgene}</p>
          </div>
        </div>
        <img
          src="./frontView90.png"
          alt=""
          className="absolute top-0 -right-16 h-80"
        />
      </div>
      <div className="mt-3 w-full flex justify-center items-center gap-2">
        <button className="bg-gray-800 text-white font-bold p-2 px-3 rounded-lg">
          Buy Now
        </button>
        <button className="bg-[#00aeef] p-2 px-3 rounded-lg text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};
