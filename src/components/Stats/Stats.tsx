import { FC } from "react";
import { IStats } from "../../types/pokemons-responss";

interface IStat {
  stats: IStats[];
}

const Stats: FC<IStat> = ({ stats }) => {
  return (
    <div className="p-4 w-full flex rounded-lg" style={{border: '1px solid black'}} >
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
