Ext.define('MyApp.view.movieDB.MovieDBController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainController',

    routes: {
        'movieList/:id': 'onMovieList',
        'favoriteList': 'onFavoriteList',
        'movieInfo/:id': {
            action: 'onMovieInfo',
            conditions: {
                ':id': '([0-9a-zA-Z\=]+)'
            }
        },
    },

    onFavoriteList: function (id) {
        const view = this.getView();
        debugger
        view.removeAll();
        view.add({
            xtype: 'fav-list'
        });
    },

    onMovieList: function () {
        const view = this.getView();

        view.removeAll();
        view.add({
            xtype: 'movie-list'
        });
    },

    onMovieInfo: function (id) {
        const view = this.getView();
        const vm = this.getViewModel();

        view.removeAll();
        vm.set('selectIdMovie', id);
        view.add({
            xtype: 'movie-info',
            selectIdMovie: id
        });
    },

    handleClickFavoriteBtn: function () {
        this.redirectTo('favoriteList');
    },

    handleBackToListBtn: function () {
            debugger
            const vm = this.getViewModel();
            const movieDB = vm.get('movieDB');
            let page = vm.data.movieDB.lastOptions.page;
            this.redirectTo(`movieList/${page}`);
    }


});
