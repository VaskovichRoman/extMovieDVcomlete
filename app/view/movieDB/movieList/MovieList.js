Ext.define('MyApp.view.movieDB.movieList.MovieList', {
  extend: 'Ext.panel.Panel',
  xtype: 'movie-list',
  controller: 'movieList',
  scrollable: 'y',
  flex: 1,
  bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true,
    bind: '{movieDB}'
  },
  layout: {
    type: 'column',
    align: 'center'
  },
  width: '100%',
  items: [
    {
      xtype: 'box',
      tpl: [
        `<tpl for=".">
                <div id="{data.id}" style="display:inline-block; margin:10px;">
                <img src="http://image.tmdb.org/t/p/w342{data.poster_path}" height=500>
                </div>
                </tpl>`
      ],
      // margin: 'auto auto auto 40',
      height: '100%',
      bind: {
        data: '{movieDB.data.items}'
      },
      listeners: {
        element: 'el',
        delegate: 'div',
        click: 'redirectToMovieInfoPanel'
      }
    }
  ],
  tbar: [{
    text: 'previous page',
    handler: 'handleBtnPrevPage',
  }, {
    text: 'next page',
    handler: 'handleBtnNextPage',
  }]
});
