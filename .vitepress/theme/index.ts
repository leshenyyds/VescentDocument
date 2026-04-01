import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import LangSwitch from '../components/LangSwitch.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LangSwitch', LangSwitch)
  },
} satisfies Theme
