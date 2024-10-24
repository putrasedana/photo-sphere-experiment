import React from 'react';
import './styles/styles.css';
import PhotoSphereWithMarkers from './components/PhotoSphereWithMarkers';
// import PhotoSphereViewerVirtualTour from './components/PhotoSphereViewerVirtualTour';
// import PhotoSphereWithAutorotate from './components/PhotoSphereWithAutorotate';
// import PhotoSphereViewer from './components/PhotoSphereViewer';
// import PhotoSphereWithGallery from './components/PhotoSphereWithGallery';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>360° Photo Sphere Viewer</h1>
      {/* <PhotoSphereViewer/> */}
      {/* <PhotoSphereWithGallery /> */}
      {/* <PhotoSphereWithAutorotate /> */}
      <PhotoSphereWithMarkers />
      {/* <PhotoSphereViewerVirtualTour /> */}
    </div>
  );
};

export default App;
