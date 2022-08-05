import { apiGet, getAll, remove } from "../../api/products";
import AdminHeader from "../../components/admin/header";
import { priceToVnd, reRender } from "../../config";
import Product from '../../models/product.interface'

const homeadmin = {
    async render() {
        const paramUrl = new URLSearchParams(location.search);
        const paramCate = new URLSearchParams(location.search)
        const dataOg = await getAll()
        let data = {}

        const test = await apiGet('?q=abc')
        console.log(test);

        if (paramUrl.get('key')) {
            data = await apiGet(`?q=${paramUrl.get('key')}`)
        } else if (paramCate.get('key')) {
            data = await apiGet(`?category=${paramCate.get('key')}`)
        } else {
            data = await apiGet("")
        }
        const Cellphone: Product[] = data.data.product;

        const dataCate: any[] = dataOg.data.product
        let categories = dataCate.map(i => i.category)
        categories = categories.filter(function (item, pos) {
            return categories.indexOf(item) == pos;
        })
        // else {
        //     if (localStorage.getItem('cellphone') != '' && localStorage.getItem('cellphone') != null) {
        //         const retrievedObject: any = localStorage.getItem('cellphone');
        //         let cellphone = JSON.parse(retrievedObject);
        //         Cellphone = cellphone;
        //     } else {
        //         let cellphone: Product[] = datacellphone.data;
        //         cellphone = Cellphone;
        //     }
        // }


        return /*html*/`
          ${AdminHeader.render()}
          <div class=""> 
               <div class="flex py-4">
               <div class="basis-2/12">
               
               <div class="flex py-1">
                       <img class="px-4" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658180991/Layer_2_1__umlhlc.png">
                       <div class="grow"><a id="cate" data-id="" href="">Sản phẩm</a></div>                  
                   </div>
               
                   </div>
                       <div class="basis-10/12"> 
                            <div class="flex items-center">
                                <div class="basis-1/2">
                                    <h1 class="text-2xl font-bold">Danh sách sản phẩm</h1>
                                    <div class="flex items-center my-3">
                                        <span class=" basis-2/12 font-bold py-3">Bộ lọc:</span>
                                        <div class="basis-10/12">
                                            <div>Danh mục sản phẩm</div>
                                            <div>
                                                <select id="category" name="category" class="border mt-2 p-1">
                                                    ${categories.map(item => `
                                                        <option value="${item}">${item}</option>
                                                    `)}          
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="basis-1/2">
                                        <div class="flex justify-end"><a href="/admin/add"><img class="pr-16" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658504103/Icon_lo8cnj.png"></a></div>
                                </div>
                            </div>


                            <div class="content">

                                <table class="table-auto">
                                <thead>
                                <tr class="bg-[#FBFBFB] border-y border-[#DEE2E6] text-center">
                                    <th>#</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Thành tiền</th>
                                    <th>Mô tả</th>
                                    <th>Ẩn/hiện</th>
                                    <th>Thao tác</th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                ${Cellphone.map(cell =>
                                    /*html*/`<tr>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${cell._id}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${cell.name}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${priceToVnd(Number(cell.originalPrice))}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">${cell.description}</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">Ẩn</td>
                                    <td class="border-y border-[#DEE2E6] text-center px-1">
                                   
                                    <a class="bg-yellow-300 rounded px-1 py-1 my-1" href="/admin/update/${cell._id}">Sửa</a>
                                    <button id="remove" class="bg-red-500 rounded px-1 py-1 my-1" data-id="${cell._id}">Xóa</button>
                                    </td>
                                    </tr>
                                    `).join('')}
                                                     
                                </tbody>
                            
                            </div>
                       </div>
               </div>
          </div>
          
          `
    },
    async afterRender() {

        const formSearch: any = document.querySelector('#sreach');
        const btnSearch: any = document.querySelector('#btnSearch');
        btnSearch.addEventListener('click', (e: any) => {
            e.preventDefault();
            history.replaceState(null, null, `search?key=${formSearch.value}`);
            reRender('#app', homeadmin);
        });


        const { data: data } = await getAll();
        const btnRemove: any = document.querySelectorAll('#remove');

        for (let btn of btnRemove) {
            btn.addEventListener('click', async (e: any) => {
                e.preventDefault();
                const id = btn.dataset.id;
                history.replaceState(null, null, `remove?id=${id}`)

                const confirm = window.confirm('Are you sure you want to remove this product?');
                if (confirm) {
                    const data = await remove(id);
                    reRender('#app', homeadmin);
                    location.href = '/admin'
                }

            })
        }

        const categories: any = document.querySelectorAll('#category');
        for (const category of categories) {
            category.addEventListener('change', (e: any) => {
                e.preventDefault()
                history.replaceState(null, null, `category?key=${category.value}`)
                reRender('#app', homeadmin);
                // location.href = '/admin'
                // const elementcate = categories.dataset.id;
                // const followcate = data.filter((item: { category: any }) => { return item.category === elementcate });
                // localStorage.clear();
                // localStorage.setItem('cellphone', JSON.stringify(followcate))
                // reRender('#app', homeadmin)
            })
        }
    }
}
export default homeadmin;