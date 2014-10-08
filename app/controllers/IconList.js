var args = arguments[0] || {};

$.list.loadFont(args.font);

$.section.setItems($.list.toJSON());

$.section.headerTitle = args.font;


function openItem(e){
	$.selected = e.section.getItemAt(e.itemIndex);
	$.dialog.show();
	Ti.API.info($.selected);
	$.source = e.source;
}


function copyToClipboard(e) {
	var template = '{"font":{"fontFamily": "%ff%"}, "text":"\\u%txt%"}';
	switch(e.index) {
		case 0:
		break;
		case 1:
		template = '<Widget id="" src="ip.ui.iconbutton" height="44" width="44" size="22" iconFont="%ff%" icon="%name%" onClick="onClick"></Widget>';
		break;
		case 2:
		break;
		default:
			return;
	}
	
	var res = template.replace(/%name%/gi, $.selected.properties.subtitle).
			  replace(/%ff%/gi, $.selected.properties.font.fontFamily).
			  replace(/%txt%/, $.selected.properties.charCode.toString(16).toUpperCase());
	
	$.text.value = res;
	$.text.setSelection(0, res.length);
	
	$.popover.show({view: $.source});
}

