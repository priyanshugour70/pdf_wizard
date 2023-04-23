import { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import moment from 'moment';

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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Certificate of Completion</h1>


      <div className="p-8 border border-gray-400 max-w-md mx-auto" id="certificate">
      <h1 className="text-2xl font-bold mb-4">Certificate of Completion</h1>
      <p className="mb-4">This certificate is awarded to:</p>
      <p className="font-semibold text-lg mb-4">{name}</p>
      <p className="mb-4">For successfully completing the course:</p>
      <p className="font-semibold text-lg mb-4">{cname}</p>
      <p className="mb-4">Date of completion:</p>
      <p className="font-semibold text-lg mb-4">{currentDate}</p>
      <p className="text-gray-700 text-sm">This certificate is issued by <span className='font-semibold'>{iname}</span>.</p>
    </div>



      <div className="mb-6">
        <label htmlFor="name" className="mr-2">Enter Your Name:</label>
        <input type="text" id="name" value={name} onChange={handleInputChange} className="border px-2 py-1 rounded" />
      </div>
      <div className="mb-6">
        <label htmlFor="cname" className="mr-2">Enter Your Course Name:</label>
        <input type="text" id="cname" value={cname} onChange={handleInputChange1} className="border px-2 py-1 rounded" />
      </div>
      <div className="mb-6">
        <label htmlFor="iname" className="mr-2">Enter Issuer Name:</label>
        <input type="text" id="iname" value={iname} onChange={handleInputChange2} className="border px-2 py-1 rounded" />
      </div>


      <button onClick={handleDownload} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Download Certificate
      </button>
    </div>
  );
}
