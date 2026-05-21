var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lochaber_1 = new ol.format.GeoJSON();
var features_Lochaber_1 = format_Lochaber_1.readFeatures(json_Lochaber_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lochaber_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lochaber_1.addFeatures(features_Lochaber_1);
var lyr_Lochaber_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lochaber_1, 
                style: style_Lochaber_1,
                popuplayertitle: 'Lochaber ',
                interactive: false,
                title: '<img src="styles/legend/Lochaber_1.png" /> Lochaber '
            });
var format_Salmonfarms_2 = new ol.format.GeoJSON();
var features_Salmonfarms_2 = format_Salmonfarms_2.readFeatures(json_Salmonfarms_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salmonfarms_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salmonfarms_2.addFeatures(features_Salmonfarms_2);
var lyr_Salmonfarms_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salmonfarms_2, 
                style: style_Salmonfarms_2,
                popuplayertitle: 'Salmon farms',
                interactive: true,
                title: '<img src="styles/legend/Salmonfarms_2.png" /> Salmon farms'
            });
var format_Tarangerrisk_3 = new ol.format.GeoJSON();
var features_Tarangerrisk_3 = format_Tarangerrisk_3.readFeatures(json_Tarangerrisk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tarangerrisk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tarangerrisk_3.addFeatures(features_Tarangerrisk_3);
var lyr_Tarangerrisk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tarangerrisk_3, 
                style: style_Tarangerrisk_3,
                popuplayertitle: 'Taranger risk (%)',
                interactive: true,
    title: 'Taranger risk (%)<br />\
    <img src="styles/legend/Tarangerrisk_3_0.png" /> 0<br />\
    <img src="styles/legend/Tarangerrisk_3_1.png" /> 20<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Lochaber_1.setVisible(true);lyr_Salmonfarms_2.setVisible(true);lyr_Tarangerrisk_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Lochaber_1,lyr_Salmonfarms_2,lyr_Tarangerrisk_3];
lyr_Lochaber_1.set('fieldAliases', {'fid': 'fid', 'RptOrder': 'RptOrder', 'SFDCode': 'SFDCode', 'SFDName': 'SFDName', 'CSSR16_ID': 'CSSR16_ID', 'CSSR16Name': 'CSSR16Name', });
lyr_Salmonfarms_2.set('fieldAliases', {'id': 'id', });
lyr_Tarangerrisk_3.set('fieldAliases', {'field_1': 'field_1', 'Site': 'Site', 'Year': 'Year', 'fish_number': 'fish_number', 'Lice_count': 'Lice_count', 'Total risk': 'Total risk', 'x': 'x', 'y': 'y', });
lyr_Lochaber_1.set('fieldImages', {'fid': 'TextEdit', 'RptOrder': 'TextEdit', 'SFDCode': 'Range', 'SFDName': 'TextEdit', 'CSSR16_ID': 'Range', 'CSSR16Name': 'TextEdit', });
lyr_Salmonfarms_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Tarangerrisk_3.set('fieldImages', {'field_1': 'Range', 'Site': 'TextEdit', 'Year': 'Range', 'fish_number': 'Range', 'Lice_count': 'Range', 'Total risk': 'Range', 'x': 'Range', 'y': 'Range', });
lyr_Lochaber_1.set('fieldLabels', {'fid': 'no label', 'RptOrder': 'no label', 'SFDCode': 'no label', 'SFDName': 'no label', 'CSSR16_ID': 'no label', 'CSSR16Name': 'no label', });
lyr_Salmonfarms_2.set('fieldLabels', {'id': 'no label', });
lyr_Tarangerrisk_3.set('fieldLabels', {'field_1': 'hidden field', 'Site': 'inline label - visible with data', 'Year': 'hidden field', 'fish_number': 'inline label - visible with data', 'Lice_count': 'inline label - visible with data', 'Total risk': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', });
lyr_Tarangerrisk_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});