/**
 * http://usejsdoc.org/
 */

$.fn.colorify = function(config) {

	var defaultConfig = {
		border : '1px solid green',
		color : 'green',
		text : 'BOX'
	};
	
	$.extend(defaultConfig, config);

	this.css("border", defaultConfig.border);
	this.css("color", defaultConfig.color);
	this.text(defaultConfig.text);

};