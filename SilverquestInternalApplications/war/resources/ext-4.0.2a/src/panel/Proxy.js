/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.panel.Proxy
 * @extends Object
 * A custom drag proxy implementation specific to {@link Ext.panel.Panel}s. This class
 * is primarily used internally for the Panel's drag drop implementation, and
 * should never need to be created directly.
 */
Ext.define('Ext.panel.Proxy', {
    
    alternateClassName: 'Ext.dd.PanelProxy',

    /**
     * Creates new panel proxy.
     * @param {Ext.panel.Panel} panel The {@link Ext.panel.Panel} to proxy for
     * @param {Object} config (optional) Config object
     */
    constructor: function(panel, config){
        /**
         * @property panel
         * @type Ext.panel.Panel
         */
        this.panel = panel;
        this.id = this.panel.id +'-ddproxy';
        Ext.apply(this, config);
    },

    /**
     * @cfg {Boolean} insertProxy True to insert a placeholder proxy element
     * while dragging the panel, false to drag with no proxy (defaults to true).
     * Most Panels are not absolute positioned and therefore we need to reserve
     * this space.
     */
    insertProxy: true,

    // private overrides
    setStatus: Ext.emptyFn,
    reset: Ext.emptyFn,
    update: Ext.emptyFn,
    stop: Ext.emptyFn,
    sync: Ext.emptyFn,

    /**
     * Gets the proxy's element
     * @return {Element} The proxy's element
     */
    getEl: function(){
        return this.ghost.el;
    },

    /**
     * Gets the proxy's ghost Panel
     * @return {Panel} The proxy's ghost Panel
     */
    getGhost: function(){
        return this.ghost;
    },

    /**
     * Gets the proxy element. This is the element that represents where the
     * Panel was before we started the drag operation.
     * @return {Element} The proxy's element
     */
    getProxy: function(){
        return this.proxy;
    },

    /**
     * Hides the proxy
     */
    hide : function(){
        if (this.ghost) {
            if (this.proxy) {
                this.proxy.remove();
                delete this.proxy;
            }

            // Unghost the Panel, do not move the Panel to where the ghost was
            this.panel.unghost(null, false);
            delete this.ghost;
        }
    },

    /**
     * Shows the proxy
     */
    show: function(){
        if (!this.ghost) {
            var panelSize = this.panel.getSize();
            this.panel.el.setVisibilityMode(Ext.core.Element.DISPLAY);
            this.ghost = this.panel.ghost();
            if (this.insertProxy) {
                // bc Panels aren't absolute positioned we need to take up the space
                // of where the panel previously was
                this.proxy = this.panel.el.insertSibling({cls: Ext.baseCSSPrefix + 'panel-dd-spacer'});
                this.proxy.setSize(panelSize);
            }
        }
    },

    // private
    repair: function(xy, callback, scope) {
        this.hide();
        if (typeof callback == "function") {
            callback.call(scope || this);
        }
    },

    /**
     * Moves the proxy to a different position in the DOM.  This is typically
     * called while dragging the Panel to keep the proxy sync'd to the Panel's
     * location.
     * @param {HTMLElement} parentNode The proxy's parent DOM node
     * @param {HTMLElement} before (optional) The sibling node before which the
     * proxy should be inserted (defaults to the parent's last child if not
     * specified)
     */
    moveProxy : function(parentNode, before){
        if (this.proxy) {
            parentNode.insertBefore(this.proxy.dom, before);
        }
    }
});
