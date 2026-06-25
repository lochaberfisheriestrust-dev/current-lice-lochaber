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
var format_SalmonFarms_2 = new ol.format.GeoJSON();
var features_SalmonFarms_2 = format_SalmonFarms_2.readFeatures(json_SalmonFarms_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SalmonFarms_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SalmonFarms_2.addFeatures(features_SalmonFarms_2);
var lyr_SalmonFarms_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SalmonFarms_2, 
                style: style_SalmonFarms_2,
                popuplayertitle: 'Salmon Farms',
                interactive: true,
                title: '<img src="styles/legend/SalmonFarms_2.png" /> Salmon Farms'
            });
var format_WildfishliceTarangerscore_3 = new ol.format.GeoJSON();
var features_WildfishliceTarangerscore_3 = format_WildfishliceTarangerscore_3.readFeatures(json_WildfishliceTarangerscore_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildfishliceTarangerscore_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildfishliceTarangerscore_3.addFeatures(features_WildfishliceTarangerscore_3);
var lyr_WildfishliceTarangerscore_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildfishliceTarangerscore_3, 
                style: style_WildfishliceTarangerscore_3,
                popuplayertitle: 'Wild fish lice Taranger score (%)',
                interactive: true,
    title: 'Wild fish lice Taranger score (%)<br />\
    <img src="styles/legend/WildfishliceTarangerscore_3_0.png" /> 0 % mortality<br />\
    <img src="styles/legend/WildfishliceTarangerscore_3_1.png" /> 20 % mortality<br />\
    <img src="styles/legend/WildfishliceTarangerscore_3_2.png" /> 50% mortality<br />\
    <img src="styles/legend/WildfishliceTarangerscore_3_3.png" /> 100 % mortality<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Lochaber_1.setVisible(true);lyr_SalmonFarms_2.setVisible(true);lyr_WildfishliceTarangerscore_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Lochaber_1,lyr_SalmonFarms_2,lyr_WildfishliceTarangerscore_3];
lyr_Lochaber_1.set('fieldAliases', {'fid': 'fid', 'RptOrder': 'RptOrder', 'SFDCode': 'SFDCode', 'SFDName': 'SFDName', 'CSSR16_ID': 'CSSR16_ID', 'CSSR16Name': 'CSSR16Name', });
lyr_SalmonFarms_2.set('fieldAliases', {'id': 'id', 'Score': 'Score', 'Date': 'Date', 'Farm': 'Farm', 'Company': 'Company', 'Lice No': 'Lice No', });
lyr_WildfishliceTarangerscore_3.set('fieldAliases', {'field_1': 'field_1', 'Site': 'Site', 'Date': 'Date', 'fish_number': 'fish_number', 'Average Lice /g': 'Average Lice /g', 'Taranger Total risk (%)': 'Taranger Total risk (%)', 'x': 'x', 'y': 'y', });
lyr_Lochaber_1.set('fieldImages', {'fid': 'TextEdit', 'RptOrder': 'TextEdit', 'SFDCode': 'Range', 'SFDName': 'TextEdit', 'CSSR16_ID': 'Range', 'CSSR16Name': 'TextEdit', });
lyr_SalmonFarms_2.set('fieldImages', {'id': 'TextEdit', 'Score': 'TextEdit', 'Date': 'TextEdit', 'Farm': 'TextEdit', 'Company': 'TextEdit', 'Lice No': 'TextEdit', });
lyr_WildfishliceTarangerscore_3.set('fieldImages', {'field_1': 'Range', 'Site': 'TextEdit', 'Date': 'DateTime', 'fish_number': 'Range', 'Average Lice /g': 'TextEdit', 'Taranger Total risk (%)': 'Range', 'x': 'Range', 'y': 'Range', });
lyr_Lochaber_1.set('fieldLabels', {'fid': 'no label', 'RptOrder': 'no label', 'SFDCode': 'no label', 'SFDName': 'no label', 'CSSR16_ID': 'no label', 'CSSR16Name': 'no label', });
lyr_SalmonFarms_2.set('fieldLabels', {'id': 'no label', 'Score': 'no label', 'Date': 'no label', 'Farm': 'no label', 'Company': 'no label', 'Lice No': 'no label', });
lyr_WildfishliceTarangerscore_3.set('fieldLabels', {'field_1': 'hidden field', 'Site': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'fish_number': 'inline label - visible with data', 'Average Lice /g': 'inline label - visible with data', 'Taranger Total risk (%)': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', });
lyr_WildfishliceTarangerscore_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});