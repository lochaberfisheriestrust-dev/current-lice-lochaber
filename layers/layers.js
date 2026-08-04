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
                interactive: false,
                title: '<img src="styles/legend/SalmonFarms_2.png" /> Salmon Farms'
            });
var format_Wildfishsealiceriskcatergory_3 = new ol.format.GeoJSON();
var features_Wildfishsealiceriskcatergory_3 = format_Wildfishsealiceriskcatergory_3.readFeatures(json_Wildfishsealiceriskcatergory_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wildfishsealiceriskcatergory_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wildfishsealiceriskcatergory_3.addFeatures(features_Wildfishsealiceriskcatergory_3);
var lyr_Wildfishsealiceriskcatergory_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wildfishsealiceriskcatergory_3, 
                style: style_Wildfishsealiceriskcatergory_3,
                popuplayertitle: 'Wild fish sea lice risk catergory',
                interactive: true,
    title: 'Wild fish sea lice risk catergory<br />\
    <img src="styles/legend/Wildfishsealiceriskcatergory_3_0.png" /> 0 - 20 % <br />\
    <img src="styles/legend/Wildfishsealiceriskcatergory_3_1.png" /> 20 -50 %<br />\
    <img src="styles/legend/Wildfishsealiceriskcatergory_3_2.png" /> 50 - 75 %<br />\
    <img src="styles/legend/Wildfishsealiceriskcatergory_3_3.png" />  75 -100 %<br />\
    <img src="styles/legend/Wildfishsealiceriskcatergory_3_4.png" /> NA<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Lochaber_1.setVisible(true);lyr_SalmonFarms_2.setVisible(true);lyr_Wildfishsealiceriskcatergory_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Lochaber_1,lyr_SalmonFarms_2,lyr_Wildfishsealiceriskcatergory_3];
lyr_Lochaber_1.set('fieldAliases', {'fid': 'fid', 'RptOrder': 'RptOrder', 'SFDCode': 'SFDCode', 'SFDName': 'SFDName', 'CSSR16_ID': 'CSSR16_ID', 'CSSR16Name': 'CSSR16Name', });
lyr_SalmonFarms_2.set('fieldAliases', {'id': 'id', 'Score': 'Score', 'Date': 'Date', 'Farm': 'Farm', 'Company': 'Company', 'Lice No': 'Lice No', });
lyr_Wildfishsealiceriskcatergory_3.set('fieldAliases', {'field_1': 'field_1', 'Site': 'Site', 'Date': 'Date', 'No. fish sampled': 'No. fish sampled', 'Median Lice/fish': 'Median Lice/fish', 'Taranger Total Risk (%)': 'Taranger Total Risk (%)', '2026 Taranger Total Risk (%)': '2026 Taranger Total Risk (%)', '2025 Taranger Total Risk (%)': '2025 Taranger Total Risk (%)', 'Taranger Total risk Score': 'Taranger Total risk Score', 'x': 'x', 'y': 'y', });
lyr_Lochaber_1.set('fieldImages', {'fid': 'TextEdit', 'RptOrder': 'TextEdit', 'SFDCode': 'Range', 'SFDName': 'TextEdit', 'CSSR16_ID': 'Range', 'CSSR16Name': 'TextEdit', });
lyr_SalmonFarms_2.set('fieldImages', {'id': 'TextEdit', 'Score': 'TextEdit', 'Date': 'TextEdit', 'Farm': 'TextEdit', 'Company': 'TextEdit', 'Lice No': 'TextEdit', });
lyr_Wildfishsealiceriskcatergory_3.set('fieldImages', {'field_1': 'Range', 'Site': 'TextEdit', 'Date': 'TextEdit', 'No. fish sampled': 'Range', 'Median Lice/fish': 'TextEdit', 'Taranger Total Risk (%)': 'TextEdit', '2026 Taranger Total Risk (%)': 'TextEdit', '2025 Taranger Total Risk (%)': 'Range', 'Taranger Total risk Score': 'TextEdit', 'x': 'Range', 'y': 'Range', });
lyr_Lochaber_1.set('fieldLabels', {'fid': 'no label', 'RptOrder': 'no label', 'SFDCode': 'no label', 'SFDName': 'no label', 'CSSR16_ID': 'no label', 'CSSR16Name': 'no label', });
lyr_SalmonFarms_2.set('fieldLabels', {'id': 'no label', 'Score': 'no label', 'Date': 'no label', 'Farm': 'no label', 'Company': 'no label', 'Lice No': 'no label', });
lyr_Wildfishsealiceriskcatergory_3.set('fieldLabels', {'field_1': 'hidden field', 'Site': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'No. fish sampled': 'inline label - visible with data', 'Median Lice/fish': 'inline label - visible with data', 'Taranger Total Risk (%)': 'inline label - visible with data', '2026 Taranger Total Risk (%)': 'inline label - visible with data', '2025 Taranger Total Risk (%)': 'inline label - visible with data', 'Taranger Total risk Score': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', });
lyr_Wildfishsealiceriskcatergory_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});