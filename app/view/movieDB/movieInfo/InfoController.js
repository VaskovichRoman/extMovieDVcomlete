Ext.define('MyApp.view.movieDB.movieInfo.InfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.info',

    beforerenderInfoPanel: function () {
        const vm = this.getViewModel();
        const idMovie = vm.get('selectIdMovie');
        const decodeObject = JSON.parse(atob(idMovie));
        debugger
        vm.set('selMovie', decodeObject);
    },


    backToMainList: function () {
        this.redirectTo('movieList');
    },

    handlerAddToFavoriteBtn: function () {

        const vm = this.getViewModel();
        const selMovie = vm.get('selMovie');
        const favMovie = vm.get('favList');
        favMovie.add(selMovie);
        //const movieArrayToLS = favMovie.data.items.map(movie => movie.getData());

        const movieArrayToLS = favMovie.data.items.map(movie => {
            let movieData = movie.getData();
            return {
                title: movieData.title,
                poster: movieData.poster,
                description: movieData.description,

            }
        });

        debugger
        localStorage.setItem('favList', JSON.stringify(movieArrayToLS));
    },

    handlerNextMovieBtn: function () {
        const vm = this.getViewModel();
        const movieDB = vm.get('movieDB');
        const view = this.getView();
        let selMovie = vm.get('selMovie');
        //var record = movieDB.getNode()
        //let rowIndex = movieDB.indexOf(selMovie);
        debugger
        let nextMovieData = {
                    title:  movieDB.data.items[selMovie.index + 1].data.title,
                    poster:  movieDB.data.items[selMovie.index + 1].data.poster_path,
                    description:  movieDB.data.items[selMovie.index + 1].data.overview,
                    index: selMovie.index + 1
        };
        //
        const encodeMovie = btoa(JSON.stringify(nextMovieData));
        this.redirectTo(`movieInfo/${encodeMovie}`);

    }
});
