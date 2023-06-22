import React from 'react';
import { FC } from "react";
import { IStats } from "../../types/pokemons-responss";

interface IStat {
  stats: IStats[];
}

const Stats: FC<IStat> = ({ stats }) => {
  return (
    <div className="p-4 w-full flex flex-col rounded-lg" style={{border: '1px solid black'}} >
      <h4 className="font-bold text-2xl">Stats:</h4>
      <ul className="w-full">
        {stats &&
          stats.map((stat) => (
            <li key={stat.stat.name} className="flex justify-between">
              <span className="font-bold">{stat.stat.name}:</span> <span className="font-semibold">{stat.base_stat}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stats;
