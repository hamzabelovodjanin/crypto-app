import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../common/context";
import { Sparklines, SparklinesLine } from "react-sparklines";
import CalcModal from "../../components/CalcModal/CalcModal";

function CardCoin({
  uuid,
  rank,
  iconUrl,
  name,
  price,
  hVolume,
  marketCap,
  onClick,
  sparkline,
  coinData,
}) {
  const { favouriteCoins } = useContext(appContext);
  const navigate = useNavigate();
  return (
    <div>
      <div
        key={uuid}
        className="flex justify-around items-center rounded-md mt-2 mb-2 h-[50px] overflow-hidden"
      >
        <p className="w-5">{rank}</p>
        <img
          src={iconUrl}
          width={50}
          alt={name}
          onClick={() => navigate(`/coins/${uuid}`)}
          className="cursor-pointer"
        />
        <div
          className="w-20 cursor-pointer"
          onClick={() => navigate(`/coins/${uuid}`)}
        >
          <p>{name}</p>
        </div>
        <div className="w-20">
          <p className="font-bold text-sm">${Number(price).toLocaleString()}</p>
        </div>
        <div className="w-20 font-bold text-sm">
          ${Number(hVolume).toLocaleString()}
        </div>
        <div className="w-20 font-bold text-sm ml-5">
          ${Number(marketCap).toLocaleString()}
        </div>
        <div className="w-32">
          <Sparklines data={sparkline.map((el) => el)}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <button onClick={onClick}>
          {!favouriteCoins[uuid] ? (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              className="w-5 text-red-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              className="w-5 text-red-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              ></path>
            </svg>
          )}
        </button>
        <CalcModal coinData={coinData} />
      </div>
      <hr className="border-t-1 border-indigo-200" />
    </div>
  );
}

export default CardCoin;
