import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AlertsPage } from './pages/AlertsPage'
import { DashboardPage } from './pages/DashboardPage'
import { ReportsPage } from './pages/ReportsPage'
import { SettingsPage } from './pages/SettingsPage'
import { MediaUploadPage, UploadHistoryPage } from './pages/UploadsPage'
import { initialMedia, type UploadedMedia } from './data'

export default function App() {
  const [media, setMedia] = useState(initialMedia)

  const addMedia = (files: File[]) => {
    const uploaded = files.map((file, index): UploadedMedia => ({
      id: `MED-${Date.now()}-${index}`,
      name: file.name,
      kind: file.type.startsWith('video/') ? 'Video' : 'Image',
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadedAt: 'Just now',
      location: 'Unassigned',
      previewUrl: URL.createObjectURL(file),
      file,
    }))
    setMedia((current) => [...uploaded, ...current])
  }

  const removeMedia = (id: string) => {
    setMedia((current) => {
      const item = current.find((entry) => entry.id === id)
      if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl)
      return current.filter((entry) => entry.id !== id)
    })
  }

  return <Routes><Route element={<Layout />}><Route index element={<DashboardPage media={media} />} /><Route path="uploads" element={<MediaUploadPage media={media} onUpload={addMedia} />} /><Route path="uploads/history" element={<UploadHistoryPage media={media} onRemove={removeMedia} />} /><Route path="cameras/live" element={<Navigate to="/uploads" replace />} /><Route path="cameras" element={<Navigate to="/uploads/history" replace />} /><Route path="alerts" element={<AlertsPage />} /><Route path="reports" element={<ReportsPage />} /><Route path="settings" element={<SettingsPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Route></Routes>
}
