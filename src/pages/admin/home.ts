import { apiGet } from "../../api/products";
import AdminHeader from "../../components/admin/header"
import navbarAdmin from "../../components/admin/nav"
import { Product } from "../../models/products";


const HomeMangage = {
    render: async () => {
        const data = await apiGet('')
        const Product: Product[] = data.data.product

        return /*html */`
            <div class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
                ${AdminHeader.render()}
                <main>
                    <div class="flex flex-col md:flex-row">
                        ${navbarAdmin.render()}
                        <section class="w-full max-h-full">
                            <div id="main" class="main-content flex-1 bg-gray-100 h-full mt-12 md:mt-2 pb-24 md:pb-5">

                                <div class="bg-gray-800 pt-3 w-full">
                                    <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                                        <h1 class="font-bold pl-2">Home</h1>
                                    </div>
                                </div>

                                <div class="flex flex-wrap">
                                    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                                        <!--Metric Card-->
                                        <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                                            
                                                <div class="flex flex-row items-center">
                                                    <div class="flex-shrink pr-4">
                                                        <div class="rounded-full p-5 bg-blue-600"><i class="fas fa-server fa-2x fa-inverse"></i></div>
                                                    </div>
                                                    <div class="flex-1 text-right md:text-center">
                                                        <h2 class="font-bold uppercase text-gray-600">Product Manage</h2>
                                                        <p class="font-bold text-3xl">0</p>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                        <!--/Metric Card-->
                                    </div>
                                    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                                        <!--Metric Card-->
                                        <div class="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                                            <div class="flex flex-row items-center">
                                                <div class="flex-shrink pr-4">
                                                    <div class="rounded-full p-5 bg-indigo-600"><i class="fas fa-tasks fa-2x fa-inverse"></i></div>
                                                </div>
                                                <div class="flex-1 text-right md:text-center">
                                                    <h2 class="font-bold uppercase text-gray-600">User Manage</h2>
                                                    <p class="font-bold text-3xl">0</p>
                                                </div>

                                            </div>
                                        </div>
                                        <!--/Metric Card-->
                                    </div>
                                    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                                        <!--Metric Card-->
                                        <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                                            <div class="flex flex-row items-center">
                                                <div class="flex-shrink pr-4">
                                                    <div class="rounded-full p-5 bg-yellow-600"><i class="fas fa-user-plus fa-2x fa-inverse"></i></div>
                                                </div>
                                                <div class="flex-1 text-right md:text-center">
                                                    <h2 class="font-bold uppercase text-gray-600">New Users</h2>
                                                    <p class="font-bold text-3xl">0 <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <!--/Metric Card-->
                                    </div>
                                    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                                        <!--Metric Card-->
                                        <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                                            <div class="flex flex-row items-center">
                                                <div class="flex-shrink pr-4">
                                                    <div class="rounded-full p-5 bg-green-600"><i class="fa fa-list fa-2x fa-inverse"></i></div>
                                                </div>
                                                <div class="flex-1 text-right md:text-center">
                                                    <h2 class="font-bold uppercase text-gray-600">Total Products</h2>
                                                    <p class="font-bold text-3xl">${Product.length} <span class="text-green-500"><i class="fas fa-caret-up"></i></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <!--/Metric Card-->
                                    </div>
                                    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                                        <!--Metric Card-->
                                        <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                                            <div class="flex flex-row items-center">
                                                <div class="flex-shrink pr-4">
                                                    <div class="rounded-full p-5 bg-pink-600"><i class="fas fa-users fa-2x fa-inverse"></i></div>
                                                </div>
                                                <div class="flex-1 text-right md:text-center">
                                                    <h2 class="font-bold uppercase text-gray-600">Total Users</h2>
                                                    <p class="font-bold text-3xl">0 <span class="text-pink-500"><i class="fas fa-exchange-alt"></i></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <!--/Metric Card-->
                                    </div>
                                    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                                        <!--Metric Card-->
                                        <div class="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                                            <div class="flex flex-row items-center">
                                                <div class="flex-shrink pr-4">
                                                    <div class="rounded-full p-5 bg-red-600"><i class="fas fa-inbox fa-2x fa-inverse"></i></div>
                                                </div>
                                                <div class="flex-1 text-right md:text-center">
                                                    <h2 class="font-bold uppercase text-gray-600">Issues</h2>
                                                    <p class="font-bold text-3xl">0 <span class="text-red-500"><i class="fas fa-caret-up"></i></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <!--/Metric Card-->
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </main>
            </div>
        `
    },
    afterRender: () => {
        /*Toggle dropdown list*/
        function toggleDD(myDropMenu: any) {
            const dropMenu: any = document.getElementById(myDropMenu)
            dropMenu.classList.toggle("invisible");
        }
        const btnToggle = document.getElementById('toggleClick')
        btnToggle?.addEventListener('click', (e: any) => {
            e.preventDefault()
            toggleDD('myDropdown')
        })

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function (event: any) {
            if (!event.target.matches('.drop-button') && !event.target.matches('.drop-search')) {
                var dropdowns = document.getElementsByClassName("dropdownlist");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (!openDropdown.classList.contains('invisible')) {
                        openDropdown.classList.add('invisible');
                    }
                }
            }
        }
    }
}

export default HomeMangage

