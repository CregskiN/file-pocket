"use strict";
Component({
    properties: {},
    options: {
        addGlobalClass: true,
    },
    data: {
        inputing: false,
        searching: false,
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
        onCancel: function () {
            this.setData({
                inputing: false,
                searching: false
            });
        },
        onFocus: function () {
            this.setData({
                inputing: true,
                searching: false
            });
        },
        onInput: function () {
            this.setData({
                inputing: true,
                searching: true
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFDWDtJQUVELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0lBSUQsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixhQUFhLEVBQUUsQ0FBQztnQkFDZCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsMEVBQTBFO2FBQ3BGLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLFNBQVM7YUFDbkIsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsTUFBTTthQUNoQixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxRQUFRO2FBQ2xCLENBQUM7S0FDSDtJQUtELE9BQU8sRUFBRTtRQUNQLFFBQVE7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxPQUFPO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsT0FBTztZQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUVGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L3NlYXJjaC9zZWFyY2gudHNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgfSxcblxuICBvcHRpb25zOiB7XG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBpbnB1dGluZzogZmFsc2UsXG4gICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICBzZWFyY2hSZWNvcmRzOiBbe1xuICAgICAgaWQ6IDAsXG4gICAgICBjb250ZW50OiAn5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yf5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yf5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yf5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yf5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yf5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yf5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yf5aaC5L2V5b2T5LiK576O5Zu95oC757uf77yfJyxcbiAgICB9LCB7XG4gICAgICBpZDogMSxcbiAgICAgIGNvbnRlbnQ6ICflpoLkvZXpgb/lhY05OTYnLFxuICAgIH0sIHtcbiAgICAgIGlkOiAyLFxuICAgICAgY29udGVudDogJ+e+juiCoeeGlOaWrSdcbiAgICB9LCB7XG4gICAgICBpZDogMyxcbiAgICAgIGNvbnRlbnQ6ICflk4jlk4jlk4jlk4jwn5iEJ1xuICAgIH1dXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5wdXRpbmc6IGZhbHNlLFxuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBvbkZvY3VzKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW5wdXRpbmc6IHRydWUsXG4gICAgICAgIHNlYXJjaGluZzogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIG9uSW5wdXQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnB1dGluZzogdHJ1ZSxcbiAgICAgICAgc2VhcmNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgfVxufSlcbiJdfQ==