
const navbarAdmin = {
    render: () => {


        return /*html */`
            <nav aria-label="alternative nav">
                <div class="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">

                    <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                        <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                            <li class="mr-3 flex-1">
                                <a href="/admin" data-navigo class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-blue-600 border-b-2 border-gray-800 hover:border-blue-600">
                                    <i class="fas fa-home pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Home</span>
                                </a>
                            </li>
                            <li class="mr-3 flex-1">
                                <a href="" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-purple-500 border-b-2 border-gray-800 hover:border-purple-500">
                                    <i class="fa fa-user pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">User</span>
                                </a>
                            </li>
                            <li class="mr-3 flex-1">
                                <a href="/admin/product" data-navigo class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 hover:border-pink-500">
                                    <i class="fas fa-tasks pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Product</span>
                                </a>
                            </li>
                            <li class="mr-3 flex-1">
                                <a href="" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-red-500 border-b-2 border-gray-800 hover:border-red-500">
                                    <i class="fa fa-wallet pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Payments</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
}

export default navbarAdmin