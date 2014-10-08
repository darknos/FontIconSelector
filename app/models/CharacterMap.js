exports.definition = {
	config : {

		adapter : {
			type : "properties",
			collection_name : "CharacterMap"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			comparator: function(m) {
  				return m.get("properties").subtitle;
			},
			loadFont : function(name) {
				var icons = require(name);
				var list = [];
				_.each(icons.charcode, function(ch, name) {
					list.push(Alloy.createModel("CharacterMap", {
						properties : {
							font : {
								fontFamily : icons.fontfamily,
								fontSize: 32,
							},
							subtitle : name,
							title :String.fromCharCode(ch),
							searchableText : name,
							charCode: ch
						}
					}));
					//console.log(ch, name);
				});

				this.reset(list);
			}
		});

		return Collection;
	}
};
