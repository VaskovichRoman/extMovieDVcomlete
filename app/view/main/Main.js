Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    controller: 'main',
    scrollable: 'y',
    viewModel: 'main',
    height: '100%',
    items: [{xtype:'tab-panel'}],
});
