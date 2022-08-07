import { apiGet, getAll, remove } from "../../api/products";
import AdminHeader from "../../components/admin/header";
import navbarAdmin from "../../components/admin/nav";
import { priceToVnd, reRender } from "../../config";
import Product from '../../models/product.interface'

const homeadmin = {
    async render() {
        const paramUrl = new URLSearchParams(location.search);
        const paramCate = new URLSearchParams(location.search)
        const dataOg = await getAll()
        let data: any = {}
        let Cellphone: Product[] = []

        if (paramUrl.get('key')) {
            data = await apiGet(`?q=${paramUrl.get('key')}`);
            console.log(data);

            Cellphone = data.data.product
        } else if (paramCate.get('category')) {
            data = localStorage.getItem('cellphone')
            Cellphone = JSON.parse(data)
        } else {
            data = await apiGet("")
            Cellphone = data.data.product
        }

        const dataCate: any[] = dataOg.data.product
        let categories = dataCate.map(i => i.category)
        categories = categories.filter(function (item, pos) {
            return categories.indexOf(item) == pos;
        })


        return /*html*/`
            <div class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
                ${AdminHeader.render()}
                <main>
                    <div class="flex flex-col md:flex-row">
                        ${navbarAdmin.render()}
                        <section class="w-full max-h-full">
                            <div id="main" class="main-content flex-1 bg-gray-100 h-full mt-12 md:mt-2 pb-24 md:pb-5">

                                <div class="bg-gray-800 pt-3 w-full">
                                    <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                                        <h1 class="font-bold pl-2">Danh sách sản phẩm</h1>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="">
                                            <div class="p-4">
                                                    <div class="flex items-center">
                                                        <div class="basis-1/2">
                                                            <div class="flex items-center my-3">
                                                                <span class=" basis-2/12 font-bold py-3">Bộ lọc:</span>
                                                                <div class="basis-10/12">
                                                                    <div>Danh mục sản phẩm</div>
                                                                    <div>
                                                                        <select id="category" name="category" class="border mt-2 p-1">
                                                                            <option value="">Tùy chọn</option>
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
                                                                    <th class="p-2">#</th>
                                                                    <th class="p-2">Tên sản phẩm</th>
                                                                    <th class="p-2">Thành tiền</th>
                                                                    <th class="p-2">Mô tả</th>
                                                                    <th class="p-2">Ẩn/hiện</th>
                                                                    <th class="p-2">Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                ${Cellphone.map((cell, index) =>
                                                                /*html*/`<tr>
                                                                    <td class="border-y border-[#DEE2E6] text-center p-2">${index + 1}</td>
                                                                    <td class="border-y border-[#DEE2E6] text-center p-2">${cell.name}</td>
                                                                    <td class="border-y border-[#DEE2E6] text-center p-2">${priceToVnd(Number(cell.originalPrice))}</td>
                                                                    <td class="border-y border-[#DEE2E6] text-center p-2">${cell.description}</td>
                                                                    <td class="border-y border-[#DEE2E6] text-center p-2">Ẩn</td>
                                                                    <td class="border-y border-[#DEE2E6] text-center p-2">
                                                                        <div class="flex flex-row space-x-2">
                                                                            <button class="bg-green-600 text-white rounded px-2 py-1"><a href="/admin/update/${cell._id}">Sửa</a></button>
                                                                            <button id="remove" class="bg-red-600 text-white rounded px-2 py-1" data-id="${cell._id}">Xóa</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                `).join('')}
                                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
          
          `
    },
    async afterRender() {

        const formSearch: any = document.querySelector('#inputSearch');
        const btnSearch: any = document.querySelector('#btnSearch');
        btnSearch.addEventListener('click', (e: any) => {
            e.preventDefault();
            history.replaceState(null, '', `?search=${formSearch.value}`);
            reRender('#app', homeadmin);
        });


        const { data: data } = await getAll();
        const btnRemove: any = document.querySelectorAll('#remove');

        for (let btn of btnRemove) {
            btn.addEventListener('click', async (e: any) => {
                e.preventDefault();
                const id = btn.dataset.id;
                history.replaceState(null, '', `remove?id=${id}`)

                const confirm = window.confirm('Are you sure you want to remove this product?');
                if (confirm) {
                    const data = await remove(id);
                    reRender('#app', homeadmin);
                    location.href = '/admin'
                }

            })
        }

        const category: any = document.querySelector('#category');
        category.addEventListener('change', (e: any) => {
            e.preventDefault()
            history.replaceState(null, '', `?category=${category.value}`)
            const elementcate = category.value;
            const followcate = data.product.filter((item: any) => { return item.category === elementcate });
            localStorage.clear();
            localStorage.setItem('cellphone', JSON.stringify(followcate))
            reRender('#app', homeadmin)
        })
    }
}
export default homeadmin;