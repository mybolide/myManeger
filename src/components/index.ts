import Vue from 'vue'
import header from './Header.vue'
import Icon from './Icons.vue'
import ElButton from '@/components/button/src/button.vue'

Vue.component(ElButton.name, ElButton)

Vue.component('page-header', header)
Vue.component('font-icon', Icon)
