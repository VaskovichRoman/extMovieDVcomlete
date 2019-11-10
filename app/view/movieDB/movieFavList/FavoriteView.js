Ext.define('MyApp.view.movieDB.movieFavList.FavoriteView', {
    extend: 'Ext.Container',
    xtype: 'fav-list',
    controller: 'fav-list',
    scrollable: 'y',
    height: 500,

    width: '100%',
    margin: '0 0 20 0',


    listeners: {
        beforerender: 'onLoadFavList'
    },

    layout: {
        type: 'vbox'
    },
    items: [
        {
            xtype: 'grid',
            bind: {
                store: '{favList}'
            },
            width: '100%',
            height: '100%',
            columns: {
                items: [
                    {
                        dataIndex: 'http://image.tmdb.org/t/p/w342{recData.poster}',
                        flex: 1,
                        renderer: function (value, metaData, record) {
                            const recData = record.getData();

                            return `<div style="margin:10px;">
                                    <img src="http://image.tmdb.org/t/p/w342${recData.poster}" height = 500> 
                                    </div>`;
                        }
                    },
                    {
                        dataIndex: 'description',
                        type: 'textarea',
                        flex: 1,
                        renderer: function (value, metaData, record) {
                            const recData = record.getData();

                            return `<div>${recData.title}</div> <p></p><div style="white-space:normal;">${recData.description}</div>`;
                        }
                    },
                    {
                        xtype: 'widgetcolumn',
                        widget: {
                            xtype: 'button',
                            text: 'Unfavorite',
                            listeners: {
                                buffer: 1,
                                click : 'handleClickDeleteBtn'
                            }
                        },
                    }
                ]
            }
        }
    ]
});
