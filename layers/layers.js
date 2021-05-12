ol.proj.proj4.register(proj4);
ol.proj.get("IGNF:LAMB93").setExtent([666898.549117, 6155663.575000, 694716.450883, 6174875.425000]);
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
var format_CCaspres_1 = new ol.format.GeoJSON();
var features_CCaspres_1 = format_CCaspres_1.readFeatures(json_CCaspres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_CCaspres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCaspres_1.addFeatures(features_CCaspres_1);
var lyr_CCaspres_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCaspres_1, 
                style: style_CCaspres_1,
                interactive: true,
                title: '<img src="styles/legend/CCaspres_1.png" /> CC aspres'
            });
var format_Emplacementcolonnesverre_2 = new ol.format.GeoJSON();
var features_Emplacementcolonnesverre_2 = format_Emplacementcolonnesverre_2.readFeatures(json_Emplacementcolonnesverre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Emplacementcolonnesverre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emplacementcolonnesverre_2.addFeatures(features_Emplacementcolonnesverre_2);
var lyr_Emplacementcolonnesverre_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Emplacementcolonnesverre_2, 
                style: style_Emplacementcolonnesverre_2,
                interactive: true,
                title: '<img src="styles/legend/Emplacementcolonnesverre_2.png" /> Emplacement colonnes à verre'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_CCaspres_1.setVisible(true);lyr_Emplacementcolonnesverre_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CCaspres_1,lyr_Emplacementcolonnesverre_2];
lyr_CCaspres_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COMM': 'CODE_COMM', 'INSEE_COM': 'INSEE_COM', 'NOM_COMM': 'NOM_COMM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_CANT': 'CODE_CANT', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REGION': 'NOM_REGION', });
lyr_Emplacementcolonnesverre_2.set('fieldAliases', {'Nom du rep': 'Nom du rep', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CCaspres_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COMM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COMM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_CANT': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REGION': 'TextEdit', });
lyr_Emplacementcolonnesverre_2.set('fieldImages', {'Nom du rep': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CCaspres_1.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COMM': 'no label', 'INSEE_COM': 'no label', 'NOM_COMM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_CANT': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REGION': 'no label', });
lyr_Emplacementcolonnesverre_2.set('fieldLabels', {'Nom du rep': 'header label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Emplacementcolonnesverre_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});