"use strict";
Component({
    properties: {},
    options: {
        addGlobalClass: true,
    },
    data: {
        inputing: false,
        searchRecords: [{
                id: 0,
                content: '如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？',
            }, {
                id: 1,
                content: '如何避免996',
            }, {
                id: 2,
                content: '美股熔断'
            }, {
                id: 3,
                content: '哈哈哈哈😄'
            }]
    },
    methods: {
        onCalcel: function () {
            this.setData({ inputing: false });
        },
        onInput: function () {
            this.setData({ inputing: true });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFDWDtJQUVELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0lBSUQsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEtBQUs7UUFDZixhQUFhLEVBQUUsQ0FBQztnQkFDZCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsMEVBQTBFO2FBQ3BGLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLFNBQVM7YUFDbkIsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsTUFBTTthQUNoQixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxRQUFRO2FBQ2xCLENBQUM7S0FDSDtJQUtELE9BQU8sRUFBRTtRQUNQLFFBQVE7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDakMsQ0FBQztRQUNELE9BQU87WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7UUFDaEMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L3NlYXJjaC9zZWFyY2gudHNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgfSxcblxuICBvcHRpb25zOiB7XG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBpbnB1dGluZzogZmFsc2UsXG4gICAgc2VhcmNoUmVjb3JkczogW3tcbiAgICAgIGlkOiAwLFxuICAgICAgY29udGVudDogJ+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8nycsXG4gICAgfSwge1xuICAgICAgaWQ6IDEsXG4gICAgICBjb250ZW50OiAn5aaC5L2V6YG/5YWNOTk2JyxcbiAgICB9LCB7XG4gICAgICBpZDogMixcbiAgICAgIGNvbnRlbnQ6ICfnvo7ogqHnhpTmlq0nXG4gICAgfSwge1xuICAgICAgaWQ6IDMsXG4gICAgICBjb250ZW50OiAn5ZOI5ZOI5ZOI5ZOI8J+YhCdcbiAgICB9XVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNhbGNlbCgpe1xuICAgICAgdGhpcy5zZXREYXRhKHtpbnB1dGluZzogZmFsc2V9KVxuICAgIH0sXG4gICAgb25JbnB1dCgpe1xuICAgICAgdGhpcy5zZXREYXRhKHtpbnB1dGluZzogdHJ1ZX0pXG4gICAgfVxuICB9XG59KVxuIl19