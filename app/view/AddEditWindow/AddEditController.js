Ext.define('MyApp.view.AddEditWindow.AddEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.add-edit-ctrl',

    handlerSaveBtn: function (btn) {
        var vm = this.getViewModel(),
            form = btn.up('form'),
            store = vm.get('toDoList'),
            selToDo = vm.get('selToDo');
        if (!form.isValid()) {
            return;
        }
        if (!vm.get('isEdit')) {
            store.add({
                date: vm.get('date'),
                task: vm.get('task'),
                description: vm.get('description'),
                active: false
            });
        } else {
            selToDo.set('date', vm.get('date'));
            selToDo.set('task', vm.get('task'));
            selToDo.set('description', vm.get('description'))
        }
        this.handlerCancelBtn(btn);
    },
    handlerCancelBtn: function (btn) {
        btn.up('window').close();
    }
});
