export type UploadedMedia = {
  id: string
  name: string
  kind: 'Video' | 'Image'
  size: string
  uploadedAt: string
  location: string
  duration?: string
  previewUrl?: string
  file?: File
}

export type AlertItem = {
  id: string
  title: string
  detail: string
  media: string
  location: string
  time: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  status: 'New' | 'Acknowledged' | 'Dismissed'
}

export const initialMedia: UploadedMedia[] = [
  { id: 'MED-1048', name: 'north-ridge-evening-patrol.mp4', kind: 'Video', size: '248 MB', uploadedAt: '12 min ago', location: 'North Ridge', duration: '04:32' },
  { id: 'MED-1047', name: 'river-crossing-frame-08.jpg', kind: 'Image', size: '3.8 MB', uploadedAt: '38 min ago', location: 'River Crossing' },
  { id: 'MED-1046', name: 'sector-a-perimeter.mp4', kind: 'Video', size: '186 MB', uploadedAt: '1 hr ago', location: 'Sector A', duration: '03:18' },
  { id: 'MED-1045', name: 'east-checkpoint-vehicle.jpg', kind: 'Image', size: '4.2 MB', uploadedAt: '2 hr ago', location: 'East Checkpoint' },
  { id: 'MED-1044', name: 'south-pass-review.mp4', kind: 'Video', size: '312 MB', uploadedAt: 'Yesterday', location: 'South Pass', duration: '06:41' },
  { id: 'MED-1043', name: 'watchtower-04-still.jpg', kind: 'Image', size: '2.9 MB', uploadedAt: 'Yesterday', location: 'Watchtower 04' },
]

export const initialAlerts: AlertItem[] = [
  { id: 'ALT-2841', title: 'Unidentified movement in footage', detail: 'Flagged for manual review in an uploaded video', media: 'north-ridge-evening-patrol.mp4', location: 'North Ridge', time: '12 min ago', severity: 'Critical', status: 'New' },
  { id: 'ALT-2840', title: 'Perimeter crossing for review', detail: 'Possible crossing visible in uploaded footage', media: 'sector-a-perimeter.mp4', location: 'Sector A', time: '38 min ago', severity: 'High', status: 'New' },
  { id: 'ALT-2839', title: 'Vehicle near access route', detail: 'Vehicle visible in an uploaded image', media: 'east-checkpoint-vehicle.jpg', location: 'East Checkpoint', time: '1 hr ago', severity: 'Medium', status: 'Acknowledged' },
  { id: 'ALT-2838', title: 'Activity near restricted area', detail: 'Flagged for follow-up during footage review', media: 'south-pass-review.mp4', location: 'South Pass', time: '2 hr ago', severity: 'Low', status: 'Acknowledged' },
  { id: 'ALT-2837', title: 'Unidentified figure in image', detail: 'Uploaded still image requires operator review', media: 'river-crossing-frame-08.jpg', location: 'River Crossing', time: '3 hr ago', severity: 'High', status: 'New' },
]

export const activity = [24, 32, 28, 46, 38, 58, 49, 66, 55, 76, 61, 70, 58, 84, 68, 92, 74, 82, 64, 78, 57, 73, 61, 88]
