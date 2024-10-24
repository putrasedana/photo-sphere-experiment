import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_römischer_Schiffe-0010560.jpg';

interface PhotoSphereViewerProps {}

const PhotoSphereViewer: React.FC<PhotoSphereViewerProps> = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let viewer: Viewer | undefined;

    if (viewerRef.current) {
      viewer = new Viewer({
        container: viewerRef.current,
        panorama: imageUrl,
        defaultYaw: 0.3,
        navbar: ['autorotate', 'zoom', 'fullscreen'],
      });
    }

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{
        width: '100%',
        height: '500px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default PhotoSphereViewer;
