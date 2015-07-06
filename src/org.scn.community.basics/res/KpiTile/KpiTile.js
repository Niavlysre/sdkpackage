/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
 
 (function(){

var myComponentData = org_scn_community_require.knownComponents.basics.KpiTile;

KpiTile = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		that._oRoot = {}; // dummy root for API
		that._oRoot.dummy = true;
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that.addStyleClass("scn-pack-KpiTile");
		
		that._oComponents = {};
		that.nextKey = 1;
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		that.onAfterRendering = function () {
			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		}
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		var spec = that.getComponentsSpec();
		spec = JSON.parse(spec);
		spec = that.buildTree (spec);

		var layout = that.getLayoutSpec();
		layout = JSON.parse(layout);
		layout = that.buildTree (layout);

		var idPrefix = that.getId();
		that._content = that.calculateContent(owner, spec, layout, idPrefix);

		// processing on data
		that.afterPrepare(that);
	},

	buildTree: function (spec) {
		var specTree = [];
		var specHelper = {};
		var specHelperRoot = {};
		
		for (var compSpecInt in spec) {
			var compSpec = spec[compSpecInt];

			if(compSpec.parentKey != "ROOT") {
				specHelper[compSpec.parentKey + compSpec.key] = compSpec;
				var parent = specHelper[compSpec.parentKey];
				if (parent.properties == undefined) {
					parent.properties = [];
				}

				parent.properties.push(compSpec);
				specHelper[compSpec.parentKey + compSpec.key] = parent;
			} else {
				specHelper[compSpec.key] = compSpec;
				specHelperRoot[compSpec.key] = compSpec;
			}
		}

		for (var compSpecKey in specHelperRoot) {
			var content = specHelper[compSpecKey];
			specTree.push(content);
		}
		return specTree;
	},

	calculateContent: function (owner, spec, layout, idPrefix) {
		var that = owner;
		var componentInstances = [];

		for (var compSpecInt in spec) {
			var compSpec = spec[compSpecInt];

			var componentInstance = that.createComponent(owner, compSpec, idPrefix);
			if(componentInstance != undefined) {
				componentInstances.push(componentInstance);
			}
		}
		
		if(layout.length > 0) {
			layout[0].properties = layout;
			var componentInstance = that.createComponent(owner, layout[0], idPrefix);
			if(componentInstance != undefined) {
				componentInstance.__techKey = "__LAYOUT__";
				componentInstances.push(componentInstance);
			}
		}

		return componentInstances;
	},

	createComponent: function(owner, spec, idPrefix) {
		var that = owner;

		spec = that.assureSpecIsCorrect(that, spec);

		var properties = {};

		var finalProperties = {};
		if(spec.specification && spec.specification.length > 0) {
			specProperties = that.readFullSpec(that, spec.specification);

			var content = specProperties[spec.componentType];
			for (var prName in content) {
				var propDef = {};
				propDef.key = prName;
				propDef.value = content[prName];

				if(typeof propDef.value == "Array") {

				}
				finalProperties[prName] = propDef;
			}
		}
		for (var prName in spec.properties) {
			var prop = spec.properties[prName];
			finalProperties[prName] = prop;

			if(!prop.value) {
				prop.value = "";
			}

			if(prop.value.indexOf("[") == 0 || prop.value.indexOf("/") == 0) {
				var realValue = prop.value;
				if(realValue.indexOf("/") == 0) {
					realValue = realValue.substring(1);
				}
				realValue = JSON.parse(realValue);
				prop.value = realValue;
			}
		}
		for (var prName in finalProperties) {
			var prop = finalProperties[prName];
			prop.key = prop.key.replace(spec.key + "/", "");

			var process = {};
			process[prop.key] = prop.value;
			var ret = that.processContentJson(that, process);

			// return always first if length = 1;
			if(ret.length == 1) {
				ret[prop.key] = ret[0];	
			} else {
				ret = ret;
			}

			prop.value = ret;

			properties[prop.key] = prop.value[prop.key];
		}

		properties["width"] = spec.width + "px";
		properties["height"] = spec.height + "px";

		var comp = {};
		comp.__specification = properties;

		comp.__layoutSettings = {};
		if(spec.left == "-1") {
			comp.__layoutSettings.right = parseInt(spec.right) + "px";
		} else {
			comp.__layoutSettings.left = parseInt(spec.left) + "px";
		}
		if(spec.top == "-1") {
			comp.__layoutSettings.bottom = parseInt(spec.bottom) + "px";
		} else {
			comp.__layoutSettings.top = parseInt(spec.top) + "px";
		}

		comp.__techKey = spec.key;
		comp.__componentType = spec.componentType;
		return comp;
	},

	assureSpecIsCorrect: function (that, spec) {
		if(!spec.componentType) {spec.componentType = ""};
		if(!spec.top || spec.top == "") {spec.top = "10"};
		if(!spec.bottom || spec.bottom == "") {spec.bottom = "10"};
		if(!spec.left || spec.left == "") {spec.left = "10"};
		if(!spec.right || spec.right == "") {spec.right = "10"};
		if(!spec.width || spec.width == "") {spec.width = "100"};
		if(!spec.height || spec.height == "") {spec.height = "25"};
		if(!spec.specification || spec.specification == "") {spec.specification = ""};

		return spec;
	},

	readFullSpec: function (that, fullSpec) {
		var spec = fullSpec;

		if(spec.indexOf("<") == 0) {
			// xml
			var converter = new X2JS({
				 attributePrefix : ""
			});
			specJ = converter.xml_str2json(spec);

			spec = specJ;
		} else {
			spec = {};
		}

		return spec;
	},

	processContentJson: function (owner, iPropValue) {
		var propValue = iPropValue;
		var that = owner;

		var isJson = (typeof propValue == "object");
		if(isJson) {
			var content = undefined;
			var isJsonArray = false;

			for (var loopOnIndex in propValue) {
				var entryArrayId = loopOnIndex;
				var entryArray = propValue[entryArrayId];
				isJsonArray = entryArray instanceof Array;

				if(isJsonArray) {
					if(isJsonArray & content == undefined) {content = []};
					var retObjectS = {};
					var output = that.processContentJson(that, entryArray, retObjectS);

					var obj = {};
					obj[entryArrayId] = output;
					return obj;
				} else {
					var isJsonObject = (typeof entryArray == "object");
					if(isJsonObject) {
						if(content == undefined) {content = []};
						// create object here;
						var properties = {}
						for (var loopOnIndexEntry in entryArray) {
							var entryObjectId = loopOnIndexEntry;
							var entryObject = entryArray[entryObjectId];
							var retObjectS = {};

							if(entryObject instanceof Array) {
								// special case for transformed XML

								var newArray = [];
								for (var outputEntryIndex in entryObject) {
									var newEntry = {};
									newEntry[entryObjectId] = entryObject[outputEntryIndex];
									newArray.push(newEntry);
								}
								entryObject = newArray;
								var output = that.processContentJson(that, entryObject);
								for (var compInd in output) {
									content.push(output[compInd]);
								}

								var mixedContent = {};
								mixedContent[loopOnIndex] = content;

								content = mixedContent;
							} else {
								var properties = {};
								var output = that.processContentJson(that, entryObject);
								for (var outputEntryIndex in output) {
									properties[outputEntryIndex] = output[outputEntryIndex];
								}

								var comp = that.createComponentByJson(that, entryObjectId, properties, true);
								comp.__clName = entryObjectId;
								content.push(comp);
							}
						}
					} else {
						if(content == undefined) {content = {}};
						// simple text
						var valueRet = that.fixValue(that, entryArrayId, entryArray);
						content[valueRet.entryArrayId] = valueRet.entryArray;
					}
				}
			}
			return content;
		}

		return propValue;
	},

	fixValue: function (owner, entryArrayId, entryArray) {
		var that = owner;

		if(entryArrayId.indexOf("-") == 0 || entryArrayId.indexOf("_") == 0) {
			entryArrayId = entryArrayId.substring(1);
		}

		if(entryArray.indexOf("<") == 0) {
			entryArray = that.readFullSpec(owner, entryArray);
			var parsedValue = that.processContentJson (owner, entryArray);
			entryArray = parsedValue[0];
		} else {
			if(entryArray.indexOf("sap.") == 0) {
				// a class
				entryArray = eval(entryArray);
			} else {
				// boolean or value?
				if(entryArray == "true" || entryArray == "false") {
					entryArray = (entryArray == "true");
				} else {
					var intValue = parseInt(entryArray, 10);
					if(!isNaN(intValue)) {
						entryArray = intValue;
					}
				}
			}
		} 

		var valueRet = {};
		valueRet.entryArrayId = entryArrayId;
		valueRet.entryArray = entryArray;

		return valueRet;
	},

	createComponentByJson: function (owner, name, jsonDef, createUnique) {
		var that = owner;
		var loopObject = undefined;
		
		if(createUnique) {
			jsonDef.id = that.getId() + name + that.nextKey;
			that.nextKey = that.nextKey + 1;
		}

		if(sap.m[name] != undefined) {
			loopObject = new sap.m[name](jsonDef);
		} else if(sap.suite.ui.commons[name] != undefined) {
			loopObject = new sap.suite.ui.commons[name](jsonDef);
		}

		return loopObject;
	},

	afterPrepare: function (owner) {
		var that = owner;

		// visualization on processed data
		for (var compIndex in that._content) {
			var comp = that._content[compIndex];

			if(comp.__techKey == "__LAYOUT__") {
				// special case, niy
				var compObj = that;
				
				for (var o in comp.__specification) {
					if(o == "press") {
						// for event there will be special logic
						continue;
					}
					if(o == "width" || o == "height" || o == "top"  || o == "bottom"  || o == "left"  || o == "right") {
						// for layout we have to ignore all properties which are originally in ds runtime
						continue;
					}
					var propValue = comp.__specification[o];
					var propKey = o;

					var propKeySetter = "set" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);
					var propKeyGetter = "get" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);
					if(compObj[propKeyGetter]) {
						var old = compObj[propKeyGetter]();
						if(old.destroy) {
							old.destroy();
						}
					}
					if(propValue != "-clean-") {
						if(compObj[propKeySetter]) {compObj[propKeySetter](propValue);}	
					}
				}
			} else {
				if(comp.__componentType == "") {
					continue;
				}
				var compObj = that._oComponents[comp.__techKey];
				if(compObj != null) {
					for (var o in comp.__specification) {
						if(o == "press") {
							// for event there will be special logic
							continue;
						}
						var propValue = comp.__specification[o];
						var propKey = o;

						var propKeySetter = "set" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);
						var propKeyGetter = "get" + propKey.substring(0,1).toUpperCase() + propKey.substring(1);
						if(compObj[propKeyGetter]) {
							var old = compObj[propKeyGetter]();
							if(old && old.destroy) {
								old.destroy();
							}
						}
						if(propValue != "-clean-") {
							if(compObj[propKeySetter]) {compObj[propKeySetter](propValue);}
						}
					}

					that.setPositionOfChild(compObj, comp.__layoutSettings);
				} else {
					compObj = that.createComponentByJson(that, comp.__componentType, comp.__specification, false);
					if(compObj != undefined) {
						compObj.__specification = comp;

						that.addContent(compObj, comp.__layoutSettings);
						that._oComponents[comp.__techKey] = compObj;
					}
				}
			}

			// modify the custom style classes
			if(comp.__specification.styleClass) {
				var customStyles = compObj.aCustomStyleClasses;
				if(customStyles) {
					for (var stClInt in customStyles) {
						if(customStyles[stClInt].indexOf("scn-pack-") == -1) {
							compObj.removeStyleClass(customStyles[stClInt]);
						}
					}
				}
				var classes = comp.__specification.styleClass.split(" ");
				for (var classInd in classes) {
					compObj.addStyleClass(classes[classInd]);
				}
			}
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
		var k = 0;
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(basicskpitile){
	myComponentData.instance = KpiTile;
	return myComponentData.instance;
});

}).call(this);	