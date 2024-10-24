import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core'; // Import the core viewer
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'; // Import the autorotate plugin
import '@photo-sphere-viewer/core/index.css'; // Core viewer CSS

const PhotoSphereWithAutorotate: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    // Initialize the Viewer with AutorotatePlugin
    const viewer = new Viewer({
      container: viewerRef.current,
      panorama:
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_römischer_Schiffe-0010560.jpg', // Replace with your panorama image
      plugins: [
        [
          AutorotatePlugin,
          {
            autorotatePitch: '5deg', // Rotate the pitch by 5 degrees
          },
        ],
      ],
    });

    // Cleanup viewer on component unmount
    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={viewerRef} style={{ height: '600px' }}></div>
    </div>
  );
};

export default PhotoSphereWithAutorotate;
