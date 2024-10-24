import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/gallery-plugin/index.css';

const PhotoSphereWithGallery: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = new Viewer({
      container: viewerRef.current,
      panorama:
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_römischer_Schiffe-0010560.jpg',
      plugins: [
        [
          GalleryPlugin,
          {
            items: [
              {
                id: 'pano-1',
                name: 'Panorama 1',
                panorama:
                  'https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_römischer_Schiffe-0010560.jpg',
                thumbnail:
                  'https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_römischer_Schiffe-0010560.jpg',
              },
              {
                id: 'pano-2',
                name: 'Panorama 2',
                panorama:
                  'https://www.shutterstock.com/image-photo/drone-spherical-image-downtown-west-260nw-1039960549.jpg',
                thumbnail:
                  'https://www.shutterstock.com/image-photo/drone-spherical-image-downtown-west-260nw-1039960549.jpg',
              },
              {
                id: 'pano-3',
                name: 'Panorama 3',
                panorama:
                  'https://t4.ftcdn.net/jpg/02/86/08/85/360_F_286088509_GZFeghJcoPjVCLotBR5AgDi3pf1Fjfxp.jpg',
                thumbnail:
                  'https://t4.ftcdn.net/jpg/02/86/08/85/360_F_286088509_GZFeghJcoPjVCLotBR5AgDi3pf1Fjfxp.jpg',
              },
              {
                id: 'pano-4',
                name: 'Panorama 4',
                panorama:
                  'https://www.shutterstock.com/image-photo/beautiful-360-degree-panorama-spring-260nw-404515528.jpg',
                thumbnail:
                  'https://www.shutterstock.com/image-photo/beautiful-360-degree-panorama-spring-260nw-404515528.jpg',
              },
            ],
          },
        ],
      ],
    });

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

export default PhotoSphereWithGallery;
