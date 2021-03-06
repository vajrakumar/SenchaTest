/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('simple.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'simple.view.main.MainController',
        'simple.view.main.MainModel',
        'simple.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: {
            xtype: 'mainlist',
            title: 'In tab1',
            buttons: [{
                text: 'refresh',
                tooltip: 'Refresh form Data',
                // hidden:true,
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey refresh clicked!');
                }
            },
            {
                text: 'help',
                tooltip: 'Get Help',
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey help clicked!');
                }
            }]
        }
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: {
            xtype: 'mainlist',
            title: 'In tab2',
            buttons: [{
                text: 'refresh',
                tooltip: 'Refresh form Data',
                // hidden:true,
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey refresh clicked!');
                }
            },
            {
                text: 'help',
                tooltip: 'Get Help',
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey help clicked!');
                }
            }]
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        items: {
            xtype: 'mainlist',
            title: 'In tab3',
            buttons: [{
                text: 'refresh',
                tooltip: 'Refresh form Data',
                // hidden:true,
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey refresh clicked!');
                }
            },
            {
                text: 'help',
                tooltip: 'Get Help',
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey help clicked!');
                }
            }]
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        items: {
            xtype: 'mainlist',
            title: 'In tab4',
            buttons: [{
                text: 'refresh',
                tooltip: 'Refresh form Data',
                // hidden:true,
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey refresh clicked!');
                }
            },
            {
                text: 'help',
                tooltip: 'Get Help',
                handler: function (btn) {
                    var pnl = btn.up('panel');
                    pnl.setTitle(pnl.getTitle() + ' : Hey help clicked!');
                }
            }]
        }
    }]
});
