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

	org_scn_community_require.knownComponents.basics.Accordion.spec = 
{
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Nodes",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Elements",
      "refProperty": "elementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Nodes",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Image",
      "desc": "Default Image",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Default Image",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "Url",
    "value": "",
    "visible": true
  },
  "elementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"section": {
        "element": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "key,text,url,parentKey",
          "text": {
            "desc": "Given Text",
            "type": "String"
          },
          "type": "Array",
          "url": {
            "desc": "Given Url",
            "type": "Url"
          }
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,url,element",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "url": {
          "desc": "Given Url",
          "type": "Url"
        }
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content",
      "desc": "Elements",
      "tooltip": "List of Elements",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "expandedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Expaned Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Expaned Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "imageSize": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Image",
      "desc": "Size of the Image",
      "options": [
        {
          "key": "16px",
          "text": "16x16 pixels"
        },
        {
          "key": "32px",
          "text": "32x32 pixels"
        }
      ],
      "tooltip": "Size of the Image",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "16px",
    "visible": true
  },
  "maxSectionHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Image",
      "desc": "Max Height for Section",
      "tooltip": "Max Height for Section",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "int",
    "value": "200",
    "visible": true
  },
  "onFirstExpand": {
    "opts": {
      "cat": "Events",
      "desc": "On First Expand",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event for On First Expand"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onSelectionChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Selection Changed"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Key",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "String",
    "value": "-get",
    "visible": false
  },
  "withImage": {
    "onSet": "flattenData",
    "opts": {
      "apsControl": "checkbox",
      "cat": "Image",
      "desc": "Use Images",
      "tooltip": "Use Images",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  }
};

	org_scn_community_require.knownComponents.basics.Accordion.specAbout = 
{
  "description": "Accordion - Dynamic List of Entries",
  "icon": "Accordion.png",
  "title": "Accordion 2.0",
  "topics": [
    {
      "content": "Displays collapsible content panels for presenting information in a limited amount of space.",
      "title": "Accordion"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	org_scn_community_require.knownComponents.basics.Accordion.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "600",
  "id": "Accordion",
  "package": "basics",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Accordion 2.0",
  "tooltip": "Accordion - Dynamic List of Entries",
  "width": "260"
};

})();// End of closure
