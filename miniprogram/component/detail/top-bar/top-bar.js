"use strict";
Component({
    properties: {
        editting: Boolean,
        selectCount: Number,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        outEdit: function () {
            this.triggerEvent('outEdit');
        },
        onSelectAll: function () {
            this.triggerEvent('selectAll');
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvcC1iYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxNQUFNO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFJRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUtQLE9BQU87WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlCLENBQUM7UUFLRCxXQUFXO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNoQyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnQvZGV0YWlsL3RvcC1saW5lL3RvcC1saW5lLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZWRpdHRpbmc6IEJvb2xlYW4sXG4gICAgc2VsZWN0Q291bnQ6IE51bWJlcixcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcblxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSru+8jOmAgOWHuue8lui+keaooeW8jyBcbiAgICAgKi9cbiAgICBvdXRFZGl0KCl7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnb3V0RWRpdCcpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWFqOmAieS6i+S7tlxuICAgICAqL1xuICAgIG9uU2VsZWN0QWxsKCl7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VsZWN0QWxsJylcbiAgICB9LFxuICB9XG59KVxuIl19