Ext.define('MyApp.view.main.TabPanel', {
  extend: 'Ext.tab.Panel',
  xtype: 'tab-panel',
  controller: 'main',
  viewModel: 'main',
  height: '100%',
  scrollable: 'y',
  
  defaults: {
    height: '100%',
    scrollable: 'y'
  },
  items: [{
    xtype: 'container',
    title: 'MovieBD',
    layout: {
      type: 'vbox'
    },
    items: [{
      xtype: 'mainMovieDB'
    }]
  }, {
    xtype: 'container',
    title: 'ToDoList',
    items: [{
      xtype: 'list-grid'
    }, {
      xtype: 'description-panel'
    }]
  }]
});
