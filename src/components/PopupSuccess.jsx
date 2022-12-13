import React, {useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie_success.json";

const PopupSuccess = ({openModal}) => {
    
const [showModal, setShowModal] = useState(openModal);

  useEffect(() => {
    const interval = setInterval(() => {
        setShowModal(false)
    }, 8000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);


  return (
    <>
      {showModal ? (
        <>
          <div className=" justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none" onClick={() => setShowModal(false)}>
            <div className=" relative w-11/12 md:w-1/2 my-6 mx-auto max-w-5xl h-6/6" onClick={e => { e.stopPropagation()}}>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative text-center p-5">
                    <Lottie style={{ height: "130px" }} animationData={animationData} />
                    <h1 className="text-2xl font-medium mb-3">Dokumen anda telah berhasil terkirim.</h1>
                    <p className="mb-2">
                    Selanjutnya, silahkan verifikasi berkas dengan datang ke kantor UPBU Sultan Bantilan Tolitoli membawa dokumen asli pada jam kerja. Terimakasih.
                    </p>
                    <p>
                    Kontak : 0813-5147-7225
                    </p>
                </div>
                {/*footer*/}
                <div className="flex justify-center px-5 py-5 pb-10">
                    <button onClick={() => setShowModal(false)} className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-800 shadow-blue-600/50 text-white text-xs font-semibold py-2 px-5 rounded-md m-auto">TUTUP</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );

};

export default PopupSuccess;
