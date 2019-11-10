Ext.define('MyApp.view.main.DescriptionBlock', {
    extend: 'Ext.form.Panel',
    xtype: 'description-panel',
    title: 'Description',
    height: 600,
    hidden: true,
    bind: {
        hidden: '{!selToDo}'
    },
    defaults: {
        padding: 10
    },
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'StartDate',
            dateFormat: 'd.m.Y',
            bind: {
                value: '{selToDo.date:date("d.m.Y")}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'StartTime',
            dateFormat: 'h:i:s A',
            bind: {
                value: '{selToDo.date:date("h:i:s A")}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'FinishDate',
            dateFormat: 'd.m.Y',
            hidden: true,
            bind: {
                value: '{selToDo.dateEnd:date("d.m.Y")}',
                hidden: '{!selToDo.active}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'FinishTime',
            dateFormat: 'h:i:s A',
            hidden: true,
            bind: {
                value: '{selToDo.dateEnd:date("h:i:s A")}',
                hidden: '{!selToDo.active}'
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
                value: '{selToDo.active}'
            },
            renderer: function (value) {
                return value ? 'DONE' : 'In Progress'
            }
        }],
    }],
});