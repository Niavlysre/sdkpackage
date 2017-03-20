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

(function() {

	org_scn_community_require.knownComponents.databound.UI5Table.spec = 
{
  "DAllowColumnReorder": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Reorder of Columns",
      "tooltip": "Allow Reorder of Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DAllowFilter": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Filter in Columns",
      "tooltip": "Allow Filter in Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DAllowSelection": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Selection in the Table",
      "tooltip": "Allow Selection in the Table",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DAllowSort": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Interaction",
      "desc": "Allow Sort in Columns",
      "tooltip": "Allow Sort in Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DDataColWidths": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"columnWidthEntry": {
        "key": {
          "desc": "Column index (0-based)",
          "type": "String"
        },
        "sequence": "key,width",
        "type": "Array",
        "width": {
          "desc": "Width with unit (e.g. 200px | 30%)",
          "type": "String"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Columns",
      "desc": "Data Column Widths",
      "tooltip": "List of Elements",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DDataProvisioner": {
    "opts": {
      "apsControl": "text",
      "cat": "Special",
      "desc": "Central Result Set with Data",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Central Data Provisioner for Result Set",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "DEmptyDataValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Empty Value For Data Cell",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Empty Value For Data Cell",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "DEmptyHeaderValue": {
    "opts": {
      "apsControl": "text",
      "cat": "Data",
      "desc": "Empty Value For Header Cell",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Empty Value For Header Cell",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": true
  },
  "DFixedHeader": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Fix Header Rows",
      "tooltip": "Fix Header Rows",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DFormattingContentCondition": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"rule": {
        "columnHeaderId": {
          "desc": "Column Header Id",
          "type": "String"
        },
        "condition": {
          "apsControl": "combobox",
          "desc": "Condition",
          "options": [
            {
              "key": "equals",
              "text": "Equals"
            },
            {
              "key": "contains",
              "text": "Contains"
            },
            {
              "key": "pattern",
              "text": "Pattern"
            },
            {
              "key": "empty",
              "text": "Empty"
            }
          ],
          "type": "String",
          "value": "contains"
        },
        "desc": "Rule",
        "description": {
          "desc": "Optional Description",
          "type": "String"
        },
        "exclude": {
          "desc": "Exclude",
          "type": "boolean"
        },
        "key": {
          "desc": "Unique Rule Key",
          "type": "String"
        },
        "members": {
          "desc": "Members",
          "key": {
            "desc": "Content",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key",
          "type": "Array"
        },
        "sequence": "key,description,condition,columnHeaderId,exclude,simpleFormat,members",
        "simpleFormat": {
          "desc": "Simple Format Name",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Conditional Formats",
      "desc": "Rules for String Content",
      "tooltip": "List of Conditional Content Rules",
      "ztlFunction": "-unique",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DFormattingOperator": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Conditional Formats",
      "choiceType": "FormattingOperator",
      "desc": "Formatting Operator",
      "options": [
        {
          "key": "UseFirst",
          "text": "Use First Matching Format"
        },
        {
          "key": "UseLast",
          "text": "Use Last Matching Format"
        },
        {
          "key": "Collect",
          "text": "Collect All Formats"
        }
      ],
      "tooltip": "Formatting Operator",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "UseFirst",
    "visible": true
  },
  "DFormattingValueCondition": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"rule": {
        "columnHeaderId": {
          "desc": "Column Header Id",
          "type": "String"
        },
        "desc": "Rule",
        "description": {
          "desc": "Optional Description",
          "type": "String"
        },
        "exclude": {
          "desc": "Exclude",
          "type": "boolean"
        },
        "key": {
          "desc": "Unique Rule Key",
          "type": "String"
        },
        "sequence": "key,description,sign,value,columnHeaderId,exclude,simpleFormat",
        "sign": {
          "apsControl": "combobox",
          "desc": "Sign",
          "options": [
            {
              "key": ">",
              "text": "Bigger (>)"
            },
            {
              "key": "<",
              "text": "Smaller (<)"
            },
            {
              "key": "=",
              "text": "Equals (=)"
            }
          ],
          "type": "String",
          "value": "="
        },
        "simpleFormat": {
          "desc": "Simple Format Name",
          "type": "String"
        },
        "type": "Array",
        "value": {
          "desc": "Value to Compare",
          "type": "float"
        }
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Conditional Formats",
      "desc": "Rules for Number Values",
      "tooltip": "List of Conditional Value Rules",
      "ztlFunction": "-unique",
      "ztlType": "SingleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "DHeaderColWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Header Column Width in px",
      "tooltip": "Header Column Width in px",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 200,
    "visible": true
  },
  "DHeaderColumnFixed": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Fixed Column Index (-1 means Row Dimensions)",
      "tooltip": "Fixed Column Index (-1 means Row Dimensions)",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": -1,
    "visible": true
  },
  "DIgnoreResults": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Data",
      "desc": "Ignore Results",
      "tooltip": "Ignore Results on Rows and Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "DNavigationMode": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "NavigationMode",
      "desc": "Navigation Mode",
      "options": [
        {
          "key": "Paginator",
          "text": "Use Page Paginator"
        },
        {
          "key": "Scrollbar",
          "text": "Use Scrollbar"
        }
      ],
      "tooltip": "Navigation Mode",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Paginator",
    "visible": true
  },
  "DSelectionMode": {
	    "opts": {
	      "apsControl": "combobox",
	      "cat": "Display",
	      "choiceType": "SelectionMode",
	      "desc": "Selection Mode",
	      "options":[
	                 {
	                    "key":"None",
	                    "text":"None"
	                 },
	                 {
	                    "key":"Single",
	                    "text":"Single Row Selection"
	                 },
	                 {
	                    "key":"Multi",
	                    "text":"Multiple Row Selection"
	                 }
	              ],
	      "tooltip": "Selection Mode",
	      "ztlFunction": "",
	      "ztlType": "Choice"
	    },
	    "type": "String",
	    "value": "None",
	    "visible": true
	  },
  "DOnlyHeaderColumns": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Only Header Columns",
      "tooltip": "Show Only Header Columns",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": true
  },
  "DRowHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Row Height in px",
      "tooltip": "Row Height in px",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 20,
    "visible": true
  },
  "DSelection": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Selection Content for Cell",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Selection Content for Cell",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "DVisibleRowCount": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Visible Row Count",
      "tooltip": "Visible Row Count",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": 12,
    "visible": true
  },
  "data": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Data",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Data List",
      "type": "data",
      "value": null,
      "ztlFunction": ""
    },
    "type": "ResultSet",
    "value": "null",
    "visible": false
  },
  "onCellSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Cell Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Cell Selected"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onRowSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Row Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Row Selected"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  }
};

	org_scn_community_require.knownComponents.databound.UI5Table.specInclude = 
{};

	org_scn_community_require.knownComponents.databound.UI5Table.specAbout = 
{
  "description": "UI5 Table - A simple table with rows and columns",
  "icon": "UI5Table.png",
  "title": "UI5 Table 2.0",
  "topics": [
    {
      "content": "Can display data in form of a normal table which is simplifying the multidimensional model into row/column visualization",
      "title": "UI5 Table"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.databound.UI5Table.specComp = 
{
  "cssIncludes": [{"name": "res/_css/simple_formats.css"}],
  "databound": true,
  "extension": "DataComponent",
  "group": "ScnCommunityDataBound",
  "handlerType": "sapui5",
  "height": "600",
  "id": "UI5Table",
  "package": "databound",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "common_databound",
      "space": "known"
    },
    {
      "id": "jshashtable",
      "space": "known"
    },
    {
      "id": "numberformatter",
      "space": "known"
    }
  ],
  "title": "UI5 Table 2.0",
  "tooltip": "UI5 Table - A simple table with rows and columns",
  "width": "800"
};

})();// End of closure
