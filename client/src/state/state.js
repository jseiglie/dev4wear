import { proxy, useSnapshot } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['react', 'three2', 'pmndrs'],
  color: '#EFBD4E',
  decal: 'three2',
  auth: localStorage.getItem("token")? true: false,
  user: localStorage.getItem("user")? localStorage.getItem("user"): false,
})

export { state }