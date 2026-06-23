import React, { useState } from 'react'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [msg, setMsg] = useState('')

  const handleUpload = async () => {
    if (!file) return
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('http://localhost:8000/upload/', { method: 'POST', body: fd })
    const data = await res.json()
    setMsg(JSON.stringify(data, null, 2))
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>Upload</h1>
      <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
      <button onClick={handleUpload} style={{ marginLeft: 8 }}>Upload</button>
      <pre>{msg}</pre>
    </div>
  )
}
