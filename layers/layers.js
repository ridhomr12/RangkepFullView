ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_SsateliteGoogle_0 = new ol.layer.Tile({
            'title': 'Ssatelite Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_fixbidang_1 = new ol.format.GeoJSON();
var features_fixbidang_1 = format_fixbidang_1.readFeatures(json_fixbidang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_fixbidang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fixbidang_1.addFeatures(features_fixbidang_1);
var lyr_fixbidang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fixbidang_1, 
                style: style_fixbidang_1,
                popuplayertitle: "fixbidang",
                interactive: true,
    title: 'fixbidang<br />\
    <img src="styles/legend/fixbidang_1_0.png" /> -<br />\
    <img src="styles/legend/fixbidang_1_1.png" /> Jalan 3.5-4 m<br />\
    <img src="styles/legend/fixbidang_1_2.png" /> Jalan 6m<br />\
    <img src="styles/legend/fixbidang_1_3.png" /> Other Land<br />\
    <img src="styles/legend/fixbidang_1_4.png" /> <br />'
        });

lyr_SsateliteGoogle_0.setVisible(true);lyr_fixbidang_1.setVisible(true);
var layersList = [lyr_SsateliteGoogle_0,lyr_fixbidang_1];
lyr_fixbidang_1.set('fieldAliases', {'Polygon_id': 'Polygon_id', 'CLASSNAME': 'CLASSNAME', 'STRING': 'STRING', 'AREA': 'AREA', });
lyr_fixbidang_1.set('fieldImages', {'Polygon_id': 'TextEdit', 'CLASSNAME': 'TextEdit', 'STRING': 'TextEdit', 'AREA': 'TextEdit', });
lyr_fixbidang_1.set('fieldLabels', {'Polygon_id': 'no label', 'CLASSNAME': 'no label', 'STRING': 'no label', 'AREA': 'no label', });
lyr_fixbidang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});