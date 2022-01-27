var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Colonnetextile_1 = new ol.format.GeoJSON();
var features_Colonnetextile_1 = format_Colonnetextile_1.readFeatures(json_Colonnetextile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonnetextile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonnetextile_1.addFeatures(features_Colonnetextile_1);
var lyr_Colonnetextile_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colonnetextile_1, 
                style: style_Colonnetextile_1,
                interactive: true,
                title: '<img src="styles/legend/Colonnetextile_1.png" /> Colonne textile'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Colonnetextile_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Colonnetextile_1];
lyr_Colonnetextile_1.set('fieldAliases', {'Nom': 'Nom', 'Type': 'Type', 'Longitude': 'Longitude', 'Latitudes': 'Latitudes', });
lyr_Colonnetextile_1.set('fieldImages', {'Nom': 'TextEdit', 'Type': 'TextEdit', 'Longitude': 'TextEdit', 'Latitudes': 'TextEdit', });
lyr_Colonnetextile_1.set('fieldLabels', {'Nom': 'no label', 'Type': 'no label', 'Longitude': 'no label', 'Latitudes': 'no label', });
lyr_Colonnetextile_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});