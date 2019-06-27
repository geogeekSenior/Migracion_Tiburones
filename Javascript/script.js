require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/Expand",
      "esri/widgets/Legend",
      "esri/widgets/BasemapGallery",
      
    ], function(WebMap,MapView,Expand,Legend, BasemapGallery) {

      /*var map = new WebMap({
        portalItem: {
          id: "205a07f1418642f3baab335020f2b1d1"
        }
      });
      
     /*var view = new SceneView({
        container: "viewDiv",
        map: map,
        center: [-84.67,6.071],
        zoom: 4
      });*/
      var view = new MapView({
        container: "viewDiv",
        map: map,
        //center: [-84.67,6.071],
        center: [-81.608889, 4.002778],
        zoom: 1
      });

      var zoom = new Zoom({
      view: view,
      });
      view.ui.add(zoom, "bottom-left");

      var basemapGallery = new BasemapGallery({
          view: view,
          container: document.createElement("div")
        });

      var bgExpand = new Expand({
          view: view,
          content: basemapGallery
        });

      basemapGallery.watch("activeBasemap", function() {
          var mobileSize =
            view.heightBreakpoint === "xsmall" ||
            view.widthBreakpoint === "xsmall";

          if (mobileSize) {
            bgExpand.collapse();
          }
        });

      view.when(function() {
        // get the first layer in the collection of operational layers in the WebMap
        // when the resources in the MapView have loaded.
        var featureLayer = webmap.layers.getItemAt(0);

        var legend = new Legend({
          view: view,
          layerInfos: [
            {
              layer: featureLayer,
              title: "Movimientos de tiburones_WFL1 - Tiburones_Ballena"
            }
          ]
        });
        view.ui.add(legend, "bottom-right");
      });


      view.ui.add(bgExpand, "top-left");
        
        
    });




