import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const ViewerComponent: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = new Viewer({
        container: viewerRef.current,
        panorama: baseUrl + 'sphere.jpg',
        caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
        loadingImg: baseUrl + 'loader.gif',
        touchmoveTwoFingers: true,
        mousewheelCtrlKey: true,

        plugins: [
          [
            CompassPlugin,
            {
              hotspots: [
                { yaw: '0deg' },
                { yaw: '90deg' },
                { yaw: '180deg' },
                { yaw: '270deg' },
              ],
            },
          ],
          [
            MarkersPlugin,
            {
              markers: [
                {
                  id: 'pin',
                  position: { yaw: 0.11, pitch: 0.32 },
                  image: baseUrl + 'pictos/pin-blue.png',
                  size: { width: 32, height: 32 },
                  anchor: 'bottom center',
                  data: { compass: '#304ACC' },
                },
                {
                  id: 'polygon',
                  polygonPixels: [
                    2941, 1413, 3042, 1402, 3222, 1419, 3433, 1463, 3480, 1505,
                    3438, 1538, 3241, 1543, 3041, 1555, 2854, 1559, 2739, 1516,
                    2775, 1469, 2941, 1413,
                  ],
                  svgStyle: {
                    fill: 'rgba(255,0,0,0.2)',
                    stroke: 'rgba(255, 0, 50, 0.8)',
                    strokeWidth: '2px',
                  },
                  data: { compass: 'rgba(255, 0, 50, 0.8)' },
                },
                {
                  id: 'polyline',
                  polylinePixels: [
                    2478, 1635, 2184, 1747, 1674, 1953, 1166, 1852, 709, 1669,
                    301, 1519, 94, 1399, 34, 1356,
                  ],
                  svgStyle: {
                    stroke: 'rgba(80, 150, 50, 0.8)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '20px',
                  },
                  data: { compass: 'rgba(80, 150, 50, 0.8)' },
                },
              ],
            },
          ],
        ],
      });

      // Clean up on component unmount
      return () => {
        viewer.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={viewerRef}
      id="viewer"
      style={{ width: '100%', height: '500px' }}
    />
  );
};

export default ViewerComponent;
