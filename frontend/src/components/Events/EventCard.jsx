import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
          voluptatum. Dignissimos, minus ratione. Voluptates commodi voluptate
          saepe, magnam, expedita perspiciatis neque, sed quo atque explicabo
          eum quisquam praesentium rerum unde! <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
          iure. Cumque asperiores, velit, minus repellendus totam maiores ipsa
          sequi quaerat possimus porro quasi earum. Eveniet natus ut at vero
          ratione!
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
        <br />
        <div className="flex items-center">
          
          <div className={`${styles.button} text-[#fff] ml-5`}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
