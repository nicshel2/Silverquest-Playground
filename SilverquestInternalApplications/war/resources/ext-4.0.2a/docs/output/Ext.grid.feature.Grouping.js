Ext.data.JsonP.Ext_grid_feature_Grouping({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.util.Observable",
    "Ext.grid.feature.Feature"
  ],
  "inheritable": false,
  "subclasses": [
    "Ext.grid.feature.GroupingSummary"
  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Grouping.html#Ext-grid-feature-Grouping",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-depthToIndent",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "static": false,
        "name": "depthToIndent",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p>Number of pixels to indent per grouping level</p>\n",
        "linenr": 96,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-enableGroupingMenu",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "static": false,
        "name": "enableGroupingMenu",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p><tt>true</tt> to enable the grouping control in the header menu (defaults to <tt>true</tt>)</p>\n",
        "linenr": 126,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-enableNoGroups",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "static": false,
        "name": "enableNoGroups",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p><tt>true</tt> to allow the user to turn off grouping (defaults to <tt>true</tt>)</p>\n",
        "linenr": 131,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-groupByText",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "static": false,
        "name": "groupByText",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p>Text displayed in the grid header menu for grouping by header\n(defaults to 'Group By This Field').</p>\n",
        "linenr": 105,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-groupHeaderTpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "shortDoc": "Template snippet, this cannot be an actual template. ...",
        "static": false,
        "name": "groupHeaderTpl",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p>Template snippet, this cannot be an actual template. {name} will be replaced with the current group.\nDefaults to 'Group: {name}'</p>\n",
        "linenr": 89,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-hideGroupedHeader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "static": false,
        "name": "hideGroupedHeader",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p><tt>true</tt> to hide the header that is currently grouped (defaults to <tt>false</tt>)</p>\n",
        "linenr": 116,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.grid.feature.Grouping-method-addListener\" rel=\"Ext.grid.feature.Grouping-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-showGroupsText",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "static": false,
        "name": "showGroupsText",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p>Text displayed in the grid header for enabling/disabling grouping\n(defaults to 'Show in Groups').</p>\n",
        "linenr": 110,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Grouping.html#Ext-grid-feature-Grouping-cfg-startCollapsed",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "static": false,
        "name": "startCollapsed",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "<p><tt>true</tt> to start all groups collapsed (defaults to <tt>false</tt>)</p>\n",
        "linenr": 121,
        "html_filename": "Grouping.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.feature.Grouping-method-fireEvent\" rel=\"Ext.grid.feature.Grouping-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Feature.html#Ext-grid-feature-Feature-method-attachEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Approriate place to attach events to the view, selectionmodel, headerCt, etc ...",
        "static": false,
        "name": "attachEvents",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Approriate place to attach events to the view, selectionmodel, headerCt, etc</p>\n",
        "linenr": 89,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Feature.html#Ext-grid-feature-Feature-method-disable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Disable a feature ...",
        "static": false,
        "name": "disable",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Disable a feature</p>\n",
        "linenr": 140,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Feature.html#Ext-grid-feature-Feature-method-enable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Enable a feature ...",
        "static": false,
        "name": "enable",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Enable a feature</p>\n",
        "linenr": 133,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.grid.feature.Grouping-method-addListener\" rel=\"Ext.grid.feature.Grouping-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.grid.feature.Grouping-method-enableBubble\" rel=\"Ext.grid.feature.Grouping-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The data for this particular record.</p>\n",
            "name": "data"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The row index for this record.</p>\n",
            "name": "idx"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record instance</p>\n",
            "name": "record"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The original result from the prepareData call to massage.</p>\n",
            "name": "orig"
          }
        ],
        "href": "Feature.html#Ext-grid-feature-Feature-method-getAdditionalData",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Provide additional data to the prepareData call within the grid view. ...",
        "static": false,
        "name": "getAdditionalData",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Provide additional data to the prepareData call within the grid view.</p>\n",
        "linenr": 122,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "eventName"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "view"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "featureTarget"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "e"
          }
        ],
        "href": "Feature.html#Ext-grid-feature-Feature-method-getFireEventArgs",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Abstract method to be overriden when a feature should add additional\narguments to its event signature. ...",
        "static": false,
        "name": "getFireEventArgs",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Abstract method to be overriden when a feature should add additional\narguments to its event signature. By default the event will fire:\n- view - The underlying <a href=\"#/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.view.Table</a>\n- featureTarget - The matched element by the defined <a href=\"#/api/Ext.grid.feature.Grouping-property-eventSelector\" rel=\"Ext.grid.feature.Grouping-property-eventSelector\" class=\"docClass\">eventSelector</a></p>\n\n<p>The method must also return the eventName as the first index of the array\nto be passed to fireEvent.</p>\n",
        "linenr": 76,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Feature.html#Ext-grid-feature-Feature-method-getMetaRowTplFragments",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Allows a feature to inject member methods into the metaRowTpl. ...",
        "static": false,
        "name": "getMetaRowTplFragments",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Allows a feature to inject member methods into the metaRowTpl. This is\nimportant for embedding functionality which will become part of the proper\nrow tpl.</p>\n",
        "linenr": 109,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.feature.Grouping-method-addManagedListener\" rel=\"Ext.grid.feature.Grouping-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.feature.Grouping-method-removeManagedListener\" rel=\"Ext.grid.feature.Grouping-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.feature.Grouping-method-mon\" rel=\"Ext.grid.feature.Grouping-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "metaRowTplArray"
          }
        ],
        "href": "Feature.html#Ext-grid-feature-Feature-method-mutateMetaRowTpl",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Allows a feature to mutate the metaRowTpl. ...",
        "static": false,
        "name": "mutateMetaRowTpl",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Allows a feature to mutate the metaRowTpl.\nThe array received as a single argument can be manipulated to add things\non the end/begining of a particular row.</p>\n",
        "linenr": 100,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.feature.Grouping-method-fireEvent\" rel=\"Ext.grid.feature.Grouping-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.feature.Grouping-method-addListener\" rel=\"Ext.grid.feature.Grouping-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.feature.Grouping-method-addListener\" rel=\"Ext.grid.feature.Grouping-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.feature.Grouping-method-mon\" rel=\"Ext.grid.feature.Grouping-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.grid.feature.Grouping-method-suspendEvents\" rel=\"Ext.grid.feature.Grouping-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.grid.feature.Grouping-method-resumeEvents\" rel=\"Ext.grid.feature.Grouping-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.grid.feature.Grouping-method-resumeEvents\" rel=\"Ext.grid.feature.Grouping-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.feature.Grouping-method-addListener\" rel=\"Ext.grid.feature.Grouping-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.feature.Grouping-method-removeListener\" rel=\"Ext.grid.feature.Grouping-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "html_filename": "Observable.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.Table",
            "optional": false,
            "doc": "\n",
            "name": "view"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "\n",
            "name": "node"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the group</p>\n",
            "name": "group"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Grouping.html#Ext-grid-feature-Grouping-event-groupclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "groupclick",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "\n",
        "linenr": 49,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.Table",
            "optional": false,
            "doc": "\n",
            "name": "view"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "\n",
            "name": "node"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the group</p>\n",
            "name": "group"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Grouping.html#Ext-grid-feature-Grouping-event-groupcollapse",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "groupcollapse",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "\n",
        "linenr": 73,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.Table",
            "optional": false,
            "doc": "\n",
            "name": "view"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "\n",
            "name": "node"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the group</p>\n",
            "name": "group"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Grouping.html#Ext-grid-feature-Grouping-event-groupcontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "groupcontextmenu",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "\n",
        "linenr": 65,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.Table",
            "optional": false,
            "doc": "\n",
            "name": "view"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "\n",
            "name": "node"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the group</p>\n",
            "name": "group"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Grouping.html#Ext-grid-feature-Grouping-event-groupdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "groupdblclick",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "\n",
        "linenr": 57,
        "html_filename": "Grouping.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.Table",
            "optional": false,
            "doc": "\n",
            "name": "view"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "\n",
            "name": "node"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the group</p>\n",
            "name": "group"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Grouping.html#Ext-grid-feature-Grouping-event-groupexpand",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "groupexpand",
        "owner": "Ext.grid.feature.Grouping",
        "doc": "\n",
        "linenr": 81,
        "html_filename": "Grouping.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Feature.html#Ext-grid-feature-Feature-property-collectData",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Most features will not modify the data returned to the view. ...",
        "static": false,
        "name": "collectData",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Most features will not modify the data returned to the view.\nThis is limited to one feature that manipulates the data per grid view.</p>\n",
        "linenr": 66,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Feature.html#Ext-grid-feature-Feature-property-eventPrefix",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "shortDoc": "Prefix to use when firing events on the view. ...",
        "static": false,
        "name": "eventPrefix",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Prefix to use when firing events on the view.\nFor example a prefix of group would expose \"groupclick\", \"groupcontextmenu\", \"groupdblclick\".</p>\n",
        "linenr": 41,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Feature.html#Ext-grid-feature-Feature-property-eventSelector",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "static": false,
        "name": "eventSelector",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Selector used to determine when to fire the event with the eventPrefix.</p>\n",
        "linenr": 48,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "type": "Ext.grid.Panel",
        "deprecated": null,
        "href": "Feature.html#Ext-grid-feature-Feature-property-grid",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "static": false,
        "name": "grid",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Reference to the grid panel</p>\n",
        "linenr": 60,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Feature.html#Ext-grid-feature-Feature-property-hasFeatureEvent",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "static": false,
        "name": "hasFeatureEvent",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Most features will expose additional events, some may not and will\nneed to change this to false.</p>\n",
        "linenr": 34,
        "html_filename": "Feature.html"
      },
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "type": "Ext.view.Table",
        "deprecated": null,
        "href": "Feature.html#Ext-grid-feature-Feature-property-view",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Feature.js",
        "private": false,
        "static": false,
        "name": "view",
        "owner": "Ext.grid.feature.Feature",
        "doc": "<p>Reference to the TableView.</p>\n",
        "linenr": 54,
        "html_filename": "Feature.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": "Nicolas Ferrero",
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/feature/Grouping.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.grid.feature.Grouping",
  "doc": "<p>This feature allows to display the grid rows aggregated into groups as specified by the <a href=\"#/api/Ext.data.Store-property-groupers\" rel=\"Ext.data.Store-property-groupers\" class=\"docClass\">Ext.data.Store.groupers</a>\nspecified on the Store. The group will show the title for the group name and then the appropriate records for the group\nunderneath. The groups can also be expanded and collapsed.</p>\n\n<h2>Extra Events</h2>\n\n<p>This feature adds several extra events that will be fired on the grid to interact with the groups:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.grid.feature.Grouping-event-groupclick\" rel=\"Ext.grid.feature.Grouping-event-groupclick\" class=\"docClass\">groupclick</a></li>\n<li><a href=\"#/api/Ext.grid.feature.Grouping-event-groupdblclick\" rel=\"Ext.grid.feature.Grouping-event-groupdblclick\" class=\"docClass\">groupdblclick</a></li>\n<li><a href=\"#/api/Ext.grid.feature.Grouping-event-groupcontextmenu\" rel=\"Ext.grid.feature.Grouping-event-groupcontextmenu\" class=\"docClass\">groupcontextmenu</a></li>\n<li><a href=\"#/api/Ext.grid.feature.Grouping-event-groupexpand\" rel=\"Ext.grid.feature.Grouping-event-groupexpand\" class=\"docClass\">groupexpand</a></li>\n<li><a href=\"#/api/Ext.grid.feature.Grouping-event-groupcollapse\" rel=\"Ext.grid.feature.Grouping-event-groupcollapse\" class=\"docClass\">groupcollapse</a></li>\n</ul>\n\n\n<h2>Menu Augmentation</h2>\n\n<p>This feature adds extra options to the grid column menu to provide the user with functionality to modify the grouping.\nThis can be disabled by setting the <a href=\"#/api/Ext.grid.feature.Grouping-cfg-enableGroupingMenu\" rel=\"Ext.grid.feature.Grouping-cfg-enableGroupingMenu\" class=\"docClass\">enableGroupingMenu</a> option. The option to disallow grouping from being turned off\nby thew user is <a href=\"#/api/Ext.grid.feature.Grouping-cfg-enableNoGroups\" rel=\"Ext.grid.feature.Grouping-cfg-enableNoGroups\" class=\"docClass\">enableNoGroups</a>.</p>\n\n<h2>Controlling Group Text</h2>\n\n<p>The <a href=\"#/api/Ext.grid.feature.Grouping-cfg-groupHeaderTpl\" rel=\"Ext.grid.feature.Grouping-cfg-groupHeaderTpl\" class=\"docClass\">groupHeaderTpl</a> is used to control the rendered title for each group. It can modified to customized\nthe default display.</p>\n\n<h2>Example Usage</h2>\n\n<pre><code>var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {\n    groupHeaderTpl: 'Group: {name} ({rows.length})', //print the number of items in the group\n    startCollapsed: true // start all groups collapsed\n});\n</code></pre>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Grouping.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.grid.feature.Feature"
});