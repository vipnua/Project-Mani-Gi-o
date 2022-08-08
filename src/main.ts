
import './style.css';
import Navigo from 'navigo';
import Home from './pages/home';
import dangky from './pages/signup';
import dangnhap from './pages/signin';
import addProduct from './pages/admin/add';
import updateProduct from './pages/admin/update';
import productDetail from './pages/detail';

import homeadmin from './pages/admin/product-manage';
import HomeMangage from './pages/admin/home';
import cartProduct from './pages/cartProduct';
// import express from 'express';
const router = new Navigo('/', { linksSelector: "a",hash:true});

const app = document.querySelector<HTMLDivElement>('#app')!;
type ComponentBase = {
  render: (id: any) => Promise<string>;
  afterRender?: (id: any) => void
}
const print = async (component: ComponentBase, params?: any) => {
  app.innerHTML = await component.render(params);
  if (component.afterRender) {
    await component.afterRender(params)
  }
}

router.on({
  '/': () => print(Home, ""),
  '/product/:id': (param: any) => { let id = param.data.id; print(productDetail, id); },
  '/admin': () => print(HomeMangage, ""),
  '/admin/product': () => print(homeadmin, ""),
  '/cartProduct':()=>print(cartProduct,''),
  '/admin/add': () => print(addProduct, ""),
  '/admin/update/:id': (param: any) => { const id = param.data.id; print(updateProduct, id); },
  '/signup': () => print(dangky, ''),
  '/signin': () => print(dangnhap, ''),
})
router.resolve();