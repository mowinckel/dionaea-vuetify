import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {
    colors
} from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: colors.blue.darken4,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3
            }
        }
    }
});