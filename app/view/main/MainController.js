Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'movieDB' : 'onMovieDB',
        'toDoList' : "onToDoList"
    },

    onShowMoreClick: function () {
        const vm = this.getViewModel();
    debugger
        Ext.create({
            xtype: 'full-info-window',
            viewModel: {
                parent: vm
            }
        }).show();
    },

    onAddTaskClick: function () {
        var vm = this.getViewModel();

        Ext.create({
            xtype: 'add-edit-task-window',
            viewModel: {
                data: {
                    date: new Date(),
                    isEdit: false
                },
                parent: vm
            }
        }).show();
    },

    onEditTaskClick: function () {
        var vm = this.getViewModel(),
            selRecord = vm.get('selToDo');
        debugger
        Ext.create({
            xtype: 'add-edit-task-window',
            viewModel: {
                data: {
                    date: selRecord.get('date'),
                    task: selRecord.get('task'),
                    description: selRecord.get('description'),
                    isEdit: true
                },
                parent: vm
            }
        }).show();
    },

    onRemoveTask: function () {
        var vm = this.getViewModel(),
            selRecord = vm.get('selToDo');
        vm.get('toDoList').remove(selRecord);
    },

    onRemoveAll: function () {
        const vm = this.getViewModel();

        vm.get('toDoList.data').removeAll(true);
    },

    loadLocalStorage: function () {
        const vm = this.getViewModel();
        const store = vm.get('toDoList');

        store.add(JSON.parse(localStorage.getItem('toDoList')));
    },

    // onLoadFavList: function () {
    //     const vm = this.getViewModel();
    //     //const loc = JSON.parse(localStorage.getItem('favList'));
    //     const favList = vm.get('favMovies');
    //     debugger
    //     const moviesLS = JSON.parse(localStorage.getItem('favList'));
    //     favList.add(moviesLS);
    // },

    saveLocalStorage: function () {
        var taskArray = [],
            vm = this.getViewModel(),
            currentList = vm.get('toDoList.data.items');

        Ext.Array.each(currentList, (item) => {
            taskArray.push({
                date: item.get('date'),
                task: item.get('task'),
                description: item.get('description'),
                dateEnd: item.get('dateEnd'),
                active: item.get('active')
            });
        });
        localStorage.setItem('toDoList', JSON.stringify(taskArray));
    },

    beforeEditRow: function (editor, context) {
        return !context.record.get('active');
    },

    getEndDate: function (cmp, newValue) {
        var rec = cmp.getWidgetRecord();

        if (newValue && !rec.get('dateEnd')) {
            rec.set('dateEnd', new Date());
            rec.set('active', newValue);
            cmp.setDisabled(true);
        }
    },

    afterrenderCheckbox: function (cmp) {
        var rec = cmp.getWidgetRecord();

        if (rec.get('active')) {
            cmp.setDisabled(true);
        }
    },

    renderStatus: function (val, metaData) {
        if (val) {
            return 'DONE';
        } else {
            return 'In progress';
        }
    },

});
