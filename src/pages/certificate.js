import { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import moment from 'moment';
import React from "react";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";




export default function Certificate() {
  const nameRef = useRef(null);

//   for Name 
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

//   For Course Name
  const [cname, setCName] = useState('');

  const handleInputChange1 = (event) => {
    setCName(event.target.value);
  };

//   For issuer
const [iname, setIName] = useState('');

  const handleInputChange2 = (event) => {
    setIName(event.target.value);
  };



  const currentDate = moment().format('DD/MM/YYYY');

  const handleDownload = () => {
    html2canvas(document.querySelector("#certificate")).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save(`${name}_certificate.pdf`);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center ">

    <>
  {/* component */}
  <div className="bg-white min-h-screen flex justify-center items-center">
    <div className="space-y-16">
      <div id="certificate" className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src="https://i.imgur.com/kGkSg1v.png"
        />
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light">Name</p>
              <p className="font-medium tracking-widest">{name}</p>
            </div>
            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
          </div>
          <div className="pt-1">
            <p className="font-light">Card Number</p>
            <p className="font-medium tracking-more-wider">
              {cname}
            </p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-xs">Valid</p>
                <p className="font-medium tracking-wider text-sm">11/15</p>
              </div>
              <div className="">
                <p className="font-light text-xs">Expiry</p>
                <p className="font-medium tracking-wider text-sm">{iname}</p>
              </div>
              <div className="">
                <p className="font-light text-xs">CVV</p>
                <p className="font-bold tracking-more-wider text-sm">···</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src="https://i.imgur.com/Zi6v09P.png"
        />
        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light">Name</p>
              <p className="font-medium tracking-widest">Karthik P</p>
            </div>
            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
          </div>
          <div className="pt-1">
            <p className="font-light">Card Number</p>
            <p className="font-medium tracking-more-wider">
              4642 3489 9867 7632
            </p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-xs">Valid</p>
                <p className="font-medium tracking-wider text-sm">11/15</p>
              </div>
              <div className="">
                <p className="font-light text-xs text-xs">Expiry</p>
                <p className="font-medium tracking-wider text-sm">03/25</p>
              </div>
              <div className="">
                <p className="font-light text-xs">CVV</p>
                <p className="font-bold tracking-more-wider text-sm">···</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</>


      <div className="mb-6">
        <label htmlFor="name" className="mr-2">Enter Your Name:</label>
        <input type="text" id="name" value={name} onChange={handleInputChange} className="border px-2 py-1 rounded" />
      </div>
      <div className="mb-6">
        <label htmlFor="cname" className="mr-2">Enter Your Card Number :</label>
        <input type="text" id="cname" value={cname} onChange={handleInputChange1} className="border px-2 py-1 rounded" />
      </div>
      <div className="mb-6">
        <label htmlFor="iname" className="mr-2">Enter Expier Date :</label>
        <input type="text" id="iname" value={iname} onChange={handleInputChange2} className="border px-2 py-1 rounded" />
      </div>


      <button onClick={handleDownload} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Download Card
      </button>
    </div>
  );
}
