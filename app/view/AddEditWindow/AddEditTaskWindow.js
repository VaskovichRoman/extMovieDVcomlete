Ext.define('MyApp.view.AddEditWindow.AddEditTaskWindow', {
    extend: 'Ext.window.Window',
    title: 'Add Task',
    xtype: 'add-edit-task-window',
    controller: 'add-edit-ctrl',
    width: 300,
    modal: true,
    padding: 10,
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'datefield',
            fieldLabel: 'Date',
            allowBlank: false,
            format: 'd.m.Y',
            bind: {
                value: '{date}'
            }
        }, {
            xtype: 'textfield',
            allowBlank: false,
            fieldLabel: 'Task',
            bind: {
                value: '{task}'
            }
        }, {
            xtype: 'textarea',
            fieldLabel: 'description',
            bind: {
                value: '{description}'
            }
        }],
        bbar: ['->',
            {
            xtype: 'button',
            text: 'Save',
            handler: 'handlerSaveBtn'
        }, {
            xtype: 'button',
            text: 'Cancel',
            handler: 'handlerCancelBtn'
        }]
    }]
});
