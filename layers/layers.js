var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Incheonretry_1 = new ol.format.GeoJSON();
var features_Incheonretry_1 = format_Incheonretry_1.readFeatures(json_Incheonretry_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incheonretry_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incheonretry_1.addFeatures(features_Incheonretry_1);
var lyr_Incheonretry_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incheonretry_1, 
                style: style_Incheonretry_1,
                popuplayertitle: "Incheon retry",
                interactive: true,
                title: '<img src="styles/legend/Incheonretry_1.png" /> Incheon retry'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Incheonretry_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Incheonretry_1];
lyr_Incheonretry_1.set('fieldAliases', {'Date': 'Date', 'Address': 'Address', 'width': 'width', 'length': 'length', 'depth': 'depth', 'Cause': 'Cause', 'Precipitation': 'Precipitation', 'Y': 'Y', 'X': 'X', });
lyr_Incheonretry_1.set('fieldImages', {'Date': '', 'Address': '', 'width': '', 'length': '', 'depth': '', 'Cause': '', 'Precipitation': '', 'Y': '', 'X': '', });
lyr_Incheonretry_1.set('fieldLabels', {'Date': 'no label', 'Address': 'no label', 'width': 'no label', 'length': 'no label', 'depth': 'no label', 'Cause': 'no label', 'Precipitation': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_Incheonretry_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});