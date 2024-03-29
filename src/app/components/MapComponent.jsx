"use client"

// pages/index.js
import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

const MapComponent = () => {
    const initMap = async () => {
      try {
        const [
          esriConfig,
          WebMap,
          MapView,
        ] = await loadModules([
          'esri/config',
          'esri/WebMap',
          'esri/views/MapView',
        ]);

        // Set the API key
        esriConfig.apiKey =
          'AAPKca075d6f572f4dca93e2ca65ab5d9e82cYUJxP885KUznqys4px8KMYgYyn7Nahp7QHA2a51OgRP2pKs-wyM_hR1dl7OU0-f';

        // Load additional styles for widgets
        await loadModules(['esri/widgets/support/widget', 'esri/widgets/Widget'], {
          css: 'https://js.arcgis.com/4.27/esri/widgets/support/widget.css'
        });

        // Load webmap
        const webmap = new WebMap({
          portalItem: {
            id: 'f3f426905a964dfd8b2ae73756fce077'
          }
        });

        // Create a MapView
        const view = new MapView({
          container: 'viewDiv',
          map: webmap
        });

      } catch (error) {
        console.error('Error loading ArcGIS modules:', error);
      }
    };

    useEffect(()=>{
      initMap();
    }, []);

  return <div id="viewDiv" className='w-[93vw] md:w-[94vw] xl:w-[96vw] h-[200px] md:h-[250px] xl:h-[350px]' />;
};

export default MapComponent;