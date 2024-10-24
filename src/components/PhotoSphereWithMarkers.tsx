import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';

const PhotoSphereViewer: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = new Viewer({
      container: viewerRef.current,
      panorama: baseUrl + 'sphere.jpg',
      caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
      loadingImg: baseUrl + 'loader.gif',
      touchmoveTwoFingers: true,
      mousewheelCtrlKey: true,

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
              {
                id: 'pano-5',
                name: 'Panorama 5',
                panorama: baseUrl + 'sphere.jpg',
                thumbnail: baseUrl + 'sphere.jpg',
              },
            ],
          },
        ],
        [
          AutorotatePlugin,
          {
            autostartDelay: 100000,
            autorotatePitch: '5deg',
          },
        ],
        [
          MarkersPlugin,
          {
            markers: [
              {
                id: 'image',
                position: { yaw: 0.32, pitch: 0.11 },
                image: baseUrl + 'pictos/pin-blue.png',
                size: { width: 32, height: 32 },
                anchor: 'bottom center',
                zoomLvl: 100,
                tooltip: 'A image marker. <b>Click me!</b>',
                content: document.getElementById('lorem-content')?.innerHTML,
              },
            ],
          },
        ],
      ],
    });

    const markersPlugin = viewer.getPlugin(MarkersPlugin);

    viewer.addEventListener('click', ({ data }) => {
      if (!data.rightclick) {
        markersPlugin.addMarker({
          id: '#' + Math.random(),
          position: { yaw: data.yaw, pitch: data.pitch },
          image: baseUrl + 'pictos/pin-red.png',
          size: { width: 32, height: 32 },
          anchor: 'bottom center',
          tooltip: 'Generated pin',
          data: {
            generated: true,
          },
        });
      }
    });

    markersPlugin.addEventListener(
      'select-marker',
      ({ marker, doubleClick, rightClick }) => {
        if (marker.data?.generated) {
          if (doubleClick) {
            markersPlugin.removeMarker(marker);
          } else if (rightClick) {
            markersPlugin.updateMarker({
              id: marker.id,
              image: baseUrl + 'pictos/pin-blue.png',
            });
          }
        }
      }
    );

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div>
      <div id="lorem-content" style={{ display: 'none' }}>
        {/* Hidden content template */}
        <h1>HTML Ipsum Presents</h1>
        <p>
          <strong>Pellentesque habitant morbi tristique</strong> senectus et
          netus et malesuada fames ac turpis egestas.
        </p>
      </div>
      <div ref={viewerRef} style={{ height: '500px' }}></div>
    </div>
  );
};

export default PhotoSphereViewer;
