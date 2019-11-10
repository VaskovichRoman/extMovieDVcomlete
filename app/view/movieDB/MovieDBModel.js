Ext.define('MyApp.view.movieDB.MovieDBModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainMovieModel',
  
  stores: {
    movieDB: {
      fields: [],
      data: [],
      pageSize: 20,
      proxy: {
        
        type: 'ajax',
        url: `http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-EN`,
        reader: {
          type: 'json',
          rootProperty: 'results',
          totalProperty: 'total_results'
        }
      },
      autoLoad: true
    },
    
    favList: {
      fields: [],
      data: []
    }
  }
});
