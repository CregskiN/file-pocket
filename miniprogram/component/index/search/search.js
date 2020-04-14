"use strict";
Component({
    properties: {},
    options: {
        addGlobalClass: true,
    },
    data: {
        inputing: false,
        searching: false,
        inputValue: '',
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
                searching: false,
                inputValue: ''
            });
        },
        onFocus: function () {
            this.setData({
                inputing: true,
                searching: false
            });
        },
        onInput: function (e) {
            this.setData({
                inputing: true,
                searching: true,
                inputValue: e.detail.value
            });
        },
        onSearch: function (e) {
            console.log(e);
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFDWDtJQUVELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0lBSUQsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEtBQUs7UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsRUFBRTtRQUNkLGFBQWEsRUFBRSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSwwRUFBMEU7YUFDcEYsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsU0FBUzthQUNuQixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxNQUFNO2FBQ2hCLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLFFBQVE7YUFDbEIsQ0FBQztLQUNIO0lBS0QsT0FBTyxFQUFFO1FBSVAsUUFBUTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFVBQVUsRUFBRSxFQUFFO2FBQ2YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUtELE9BQU87WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxPQUFPLFlBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzthQUMzQixDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsUUFBUSxZQUFDLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpCLENBQUM7S0FFRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudC9zZWFyY2gvc2VhcmNoLnRzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gIH0sXG5cbiAgb3B0aW9uczoge1xuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlLFxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaW5wdXRpbmc6IGZhbHNlLFxuICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgc2VhcmNoUmVjb3JkczogW3tcbiAgICAgIGlkOiAwLFxuICAgICAgY29udGVudDogJ+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8n+WmguS9leW9k+S4iue+juWbveaAu+e7n++8nycsXG4gICAgfSwge1xuICAgICAgaWQ6IDEsXG4gICAgICBjb250ZW50OiAn5aaC5L2V6YG/5YWNOTk2JyxcbiAgICB9LCB7XG4gICAgICBpZDogMixcbiAgICAgIGNvbnRlbnQ6ICfnvo7ogqHnhpTmlq0nXG4gICAgfSwge1xuICAgICAgaWQ6IDMsXG4gICAgICBjb250ZW50OiAn5ZOI5ZOI5ZOI5ZOI8J+YhCdcbiAgICB9XVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiDlj5bmtojngrnlh7tcbiAgICAgKi9cbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlucHV0aW5nOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiBmueEplxuICAgICAqL1xuICAgIG9uRm9jdXMoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnB1dGluZzogdHJ1ZSxcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6L6T5YWlXG4gICAgICovXG4gICAgb25JbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnB1dGluZzogdHJ1ZSxcbiAgICAgICAgc2VhcmNoaW5nOiB0cnVlLFxuICAgICAgICBpbnB1dFZhbHVlOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Zue6L2m5LqL5Lu2XG4gICAgICovXG4gICAgb25TZWFyY2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIFxuICAgIH0sXG5cbiAgfVxufSlcbiJdfQ==