Ext.define('MyApp.view.movieDB.MovieDB', {
  extend: 'Ext.panel.Panel',
  xtype: 'mainMovieDB',
  controller: 'mainController',
  viewModel: 'mainMovieModel',
  reference: 'mainMovieView',
  layout: {
    type: 'vbox'
  },
  height: '100%',
  header: {
    titlePosition: 0,
    height: 50,
    title: 'MovieDB',
    items: [{
      xtype: 'button',
      text: 'Favorite',
      listeners: {
        click: 'handleClickFavoriteBtn'
      }
    }, {
      xtype: 'button',
      text: 'Back to List',
      listeners: {
        click: 'handleBackToListBtn'
      }
    }]
  },
  
  width: '100%',
    scrollable: 'y',
    
    items: [{
    xtype: 'movie-list',
    height: '100%',
    width: '100%'
  }]
  
});