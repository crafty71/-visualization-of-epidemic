import 'element-plus/dist/index.css'
import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElInput,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElCarousel,
  ElCarouselItem,
  ElScrollbar,
  ElCol,
  ElRow,
  ElBacktop,
  ElAffix,
  ElAvatar
} from 'element-plus'
import { App } from 'vue'

const components = [
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElInput,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElCarousel,
  ElCarouselItem,
  ElScrollbar,
  ElCol,
  ElRow,
  ElBacktop,
  ElAffix,
  ElAvatar
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
