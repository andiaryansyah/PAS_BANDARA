const uploadFiles = (file, preset) => {
    let url
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset);
    setLoading(true)
    axios({
      method: 'POST',
      url: process.env.REACT_APP_CLOUDINARY_UPLOAD,
      data: formData
    }).then(({data}) => {
      url = data.secure_url;
    }).catch(err => {
      console.log(err);
    }).finally(_ => {
        setLoading(false)
    })
    return url
  }

  if (files.file1) {
    const data = await uploadFiles(files.file1, 'permohonan-preset');
    payload.surat_permohonan = data
  }
  if (files.file2) {
    const data = await uploadFiles(files.file2, 'foto-preset');
    payload.foto = data
  }
  if (files.file3) {
    const data = await uploadFiles(files.file3, 'atasan-preset');
    payload.pernyataan_atasan = data
  }
  if (files.file4) {
    const data = await uploadFiles(files.file4, 'riwayat-preset');
    payload.riwayat_hidup = data
  }
  if (files.file5) {
    const data = await uploadFiles(files.file2, 'identitas-preset');
    payload.identitas = data
  }
  if (files.file6) {
    const data = await uploadFiles(files.file6, 'skck-preset');
    payload.skck = data
  }
  if (files.file7) {
    const data = await uploadFiles(files.file7, 'skpegawai-preset');
    payload.sk_pegawai = data
  }
  if (files.file8) {
    const data = await uploadFiles(files.file8, 'bebasnarkoba-preset');
    payload.bebas_narkoba = data
  }