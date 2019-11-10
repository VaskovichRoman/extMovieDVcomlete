Ext.define('MyApp.view.AddEditWindow.ShowFullInfoWindow', {
    extend: 'Ext.window.Window',
    title: 'Full Information',
    xtype: 'full-info-window',
    width: 500,
    padding: 10,
    modal: true,
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'Date',
            dateFormat: 'd.m.Y h:i:s A',
            bind: {
                value: '{selToDo.date:date("d.m.Y")}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Task',
            bind: {
                value: '{selToDo.task}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Description',
            bind: {
                value: '{selToDo.description}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Status',
            bind: {
                value: '{selToDo.active}',
            },
            renderer: 'renderStatus'
        }],
    }]
});