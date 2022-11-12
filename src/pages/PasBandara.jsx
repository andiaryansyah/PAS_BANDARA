import React, { useState, useEffect } from "react";

import { images } from "../constants";
import logo from "../assets/logo.png";
import UploadFile from "../components/UploadFIle";

const PasBandara = () => {
  const [enabled, setEnabled ] = useState(false);
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState({
    file1:null,
    file2:null,
    file3:null,
    file4:null,
    file5:null,
    file6:null,
    file7:null,
    file8:null,
  })
  const [files, setFiles] = useState({
    file1:null,
    file2:null,
    file3:null,
    file4:null,
    file5:null,
    file6:null,
    file7:null,
    file8:null,
  })

  const handleSubmit = () => {
    
  }

  const handleChange = (e) => {
    const image = e.target.files[0]
    const name = e.target.name

        if (image && image.size > 1048576 ) {
            setMsg({
              ...msg,
              [name] : "Melebihi ukuran file"
            })
        } else {
    setFiles({
      ...files,
      [name] : image
    })
  }
  }

  const handleDelete = (name) => {
    setFiles({
      ...files,
      [name] : null
    })
    setMsg({...msg, [name] : null})
  }

  useEffect(() => {
    if (files.file1 && files.file2 && files.file3 && files.file4 && files.file5 && files.file7) {
      setEnabled(true)
    } else {
      setEnabled(false)
    }
  },[files])

  return (
    <div>
      <div className="relative">
        <img
          src={images.PasBandara}
          alt="pas-bandara"
          className="w-full h-72"
        />
        <div className="absolute right-8 left-px top-10 text-center text-white uppercase flex flex-col justify-center items-center">
          <img src={logo} alt="logo" className="mb-3 h-16 w-14" />
          <h1 className="mb-3 font-bold text-hxl">Permohonan Pas Bandara</h1>
          <h3 className="font-semibold">
            Badan layanan umum UPBU Sultan Bantilan
          </h3>
        </div>
      </div>

      <div className="m-10">
        <h1 className="font-semibold text-2xl mb-1">
          Form Permohonan PAS Bandara
        </h1>
        <p className="text-gray-400">
          Silahkan lengkapi dokumen permohonan anda di bawah ini
        </p>

        <div className="rounded bg-blue-50 px-8 py-5 " role="alert">
          <p>Unduh form persyaratan :</p>
          <div>
            <a
              href="https://drive.google.com/u/0/uc?id=161yFXdTcjg9OMdljE5uG_aUbXEQO0CfX&export=download"
              download="Contoh Surat Permohonan"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-500 hover:text-blue-700"
            >
              1. Surat Permohonan
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/u/0/uc?id=161yFXdTcjg9OMdljE5uG_aUbXEQO0CfX&export=download"
              download="Contoh surat pernyataan dari atasan ditempat bekerja"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-500 hover:text-blue-700"
            >
              2. Contoh surat pernyataan dari atasan ditempat bekerja
            </a>
          </div>
        </div>

        <div className="mt-10">
        <label className="block">
                <span className="block text-slate-700 mb-1">
                  <b>Email</b> <span className="text-red-600">*</span>
                </span>
                <input
                  type="email"
                  placeholder="Cth: example@gmail.com"
                  className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none 
                     border-gray-400 focus:ring-blue-500 focus:border-blue-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Upload Surat Permohonan (Dari Kantor Admin Bandara) <span className="text-red-600">*</span></h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file1}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file1}
              note={"* Hanya format file : .pdf"}
              accepted=".pdf"
              name="file1"
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Pas Foto ukuran 3x4 cm <span className="text-red-600">*</span></h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file2}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file2}
              note={"* Hanya format file : .jpeg, .jpg"}
              accepted="image/*"
              name="file2"
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Pernyataan dari atasan tempat bekerja <span className="text-red-600">*</span></h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file3}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file3}
              note={"* Hanya format file : .pdf"}
              accepted='.pdf'
              name="file3"
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Daftar riwayat hidup <span className="text-red-600">*</span></h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file4}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file4}
              note={"* Hanya format file : .pdf"}
              accepted='.pdf'
              name="file4"
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Identitas diri (KTP, Paspor atau KITAS) <span className="text-red-600">*</span></h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file5}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file5}
              note={"* Hanya format file : .pdf"}
              accepted='.pdf'
              name="file5"
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Keterangan Catatan Kepolisian (SKCK) kecuali bagi pegawai pemerintah dan pegawai BUMN</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file6}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file6}
              note={"* Hanya format file : .pdf"}
              accepted='.pdf'
              name="file6"
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Keterangan Pegawai Kontrak <span className="text-red-600">*</span></h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file7}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file7}
              note={"* Hanya format file : .pdf"}
              accepted='.pdf'
              name="file7"
              />
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 font-semibold text-xl">
            <h1>Surat Bebas Narkoba dari Rumah Sakit (Khusus yang bekerja di operasional terminal bandar udara)</h1>
          </div>
          <div className="w-full">
            <UploadFile
              file={files.file8}
              onChange={handleChange}
              onDelete={handleDelete}
              msg={msg.file8}
              note={"* Hanya format file : .pdf"}
              accepted='.pdf'
              name="file8"
              />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            onClick={enabled === true ? handleSubmit : null}
            className={`text-white py-4 px-4 mt-8 w-96 cursor-pointer
                 rounded border transition duration-200 ease-in-out font-semibold ${
                   enabled === true
                     ? "bg-[#182A68] border-[#182A68] hover:bg-blue-700 "
                     : "bg-gray-300 border-gray-300 cursor-not-allowed"
                 } `}
          >
            Kirim Permohonan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasBandara;
