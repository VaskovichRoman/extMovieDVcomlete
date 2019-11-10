Ext.define('MyApp.view.movieDB.movieFavList.FavoriteController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.fav-list',


    backToMainList: function () {
        this.redirectTo('movieList');
    },

    onLoadFavList: function () {
        const vm = this.getViewModel();
        const favorList = vm.get('favList');
        debugger
        favorList.removeAll();
        favorList.add(JSON.parse(localStorage.getItem('favList')));
    },

    handleClickDeleteBtn: function (button, event, eOpts) {
        const vm = this.getViewModel();
        const store = vm.get('favList');
        var record = event.record;
        debugger
        store.remove(record);
        const movieArrayToLS = store.data.items.map(movie => {
            let movieData = movie.getData();
            return {
                title: movieData.title,
                poster: movieData.poster,
                description: movieData.description
            }
        });
        debugger
        localStorage.setItem('favList', JSON.stringify(movieArrayToLS));
    }
});
