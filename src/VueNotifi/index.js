import NotifiTemplate from "./Notifi";

export default {
    install: function (Vue) {

        function createNotifi({ type, message }) {

            let ComponentClass = Vue.extend(NotifiTemplate);

            let newComponent = new ComponentClass({
                el: document.createElement("div"),
                propsData: {
                    type, message
                }
            });
            notifi.push(newComponent);
        }

        // add an instance method
        let notifi = [];
        Vue.prototype.$notifi = {
            new: function (message) {
                return createNotifi({ type: 'default', message });
            },
            message: function (message) {
                return createNotifi({ type: 'default', message });
            },
            error: function (message) {
                return createNotifi({ type: 'error', message });
            },
            warning: function (message) {
                return createNotifi({ type: 'warning', message });
            },
            success: function (message) {
                return createNotifi({ type: 'success', message });
            },
        };
    }
};

