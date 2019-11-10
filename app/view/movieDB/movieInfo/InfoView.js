Ext.define('MyApp.view.movieDB.movieInfo.InfoView', {
    extend: 'Ext.panel.Panel',
    xtype: 'movie-info',
    controller: 'info',
    listeners: {
        beforerender: 'beforerenderInfoPanel'
    },
    layout: {
        type: 'table',
        columns: 3,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },
    items: [
        {
            xtype: 'image',
            height: '500px',
            rowspan: 2,
            bind: {
                src: 'http://image.tmdb.org/t/p/w342{selMovie.poster}'
            }
        },
        {
            xtype: 'displayfield',
            colspan: 2,
            bind: {
                value: '{selMovie.title}'
            }
        },
        {
            xtype: 'displayfield',
            //cellCls: 'highlight',
            padding: 20,
            bind: {
                value: '{selMovie.description}'
            }
        }
    ],
    tbar: [{
        text: 'Add to favorite',
        handler: 'handlerAddToFavoriteBtn',
    }, {
            text: 'Next Movie',
            handler: 'handlerNextMovieBtn',
        }]
});
