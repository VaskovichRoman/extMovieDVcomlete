Ext.define('MyApp.view.movieDB.movieList.MovieListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.movieList',


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

    redirectToMovieInfoPanel: function (event) {
        const vm = this.getViewModel();
        const store = vm.get('movieDB');
        const currentId = event.currentTarget.getAttribute('id');
        const selectMovieData = store.getById(currentId).getData();
        const indexOfSelMovie = store.data.indexOf(selectMovieData);
        const objectMovieData = {
            title: selectMovieData.original_title,
            description: selectMovieData.overview,
            poster: selectMovieData.poster_path,
            index: indexOfSelMovie
        };
        const encodeMovie = btoa(JSON.stringify(objectMovieData));
        debugger
        this.redirectTo(`movieInfo/${encodeMovie}`);
    },
    
    handleBtnNextPage: function () {
        const vm = this.getViewModel();
        const movieDB = vm.get('movieDB');
        let page = vm.data.movieDB.lastOptions.page;
        debugger
        movieDB.loadPage(++page);
        this.redirectTo(`movieList/${page}`);
    },

    handleBtnPrevPage: function () {
        const vm = this.getViewModel();
        const movieDB = vm.get('movieDB');
        let page = vm.data.movieDB.lastOptions.page;
        if(page>1){
            movieDB.loadPage(--page);
        }
        this.redirectTo(`movieList/${page}`);
    }
});
