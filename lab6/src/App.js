import {getForecast, getLocalisation} from "./api.js";


new Vue({
    el: "#locationPanel",
    data: {
        locationValue: "",
    },
    methods: {
    },
    async beforeCreate() {
        const data = await getLocalisation();
        this.locationValue = data;
    }
})

new Vue({
    el: "#forecastPanel",
    data: {
        forecast: [],
    },
    methods: {
    },
    async beforeCreate() {
        const data = await getForecast();
        this.forecast = data;
    }
})