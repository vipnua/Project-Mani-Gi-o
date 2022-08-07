import { Searchbycate, getOne } from "../api/products";
import headerClient from "../components/client/header";
import { priceToVnd } from "../config";
import { Product } from "../models/products";

const productDetail ={
   async render(id:any){
    const {data}= await getOne(id);
    
    const likedata= await Searchbycate(`/product?${data.category}`)
    console.log(likedata)
    const like:Product[] = likedata.data;
return /*html*/`
${headerClient.render()}
    
    <div class="content pt-10 w-10/12 m-auto">
    <h1 class="py-6 border-y-2">${data.name}</h1>
        <div class="flex">
            <div class="basis-3/12">
                <img class="" src="${data.images.image? data.images.image :data.images[0].image}" alt="" width="358px">
                <div class="gird grid-cols-4 gap-1  py-4 ">
                    <img src="${data.images.thumbnail? data.images.thumbnail :data.images[0]?.thumbnail}" alt="" width="48">
                </div>
            </div>
            <div class="basis-9/12">
                   <div class="box">
                       <div class="flex pb-5">
                            <div class="text-red-500 pr-3 text-2xl">${(priceToVnd(Number(data.sellerPrice)))}</div>
                            <div class="text-sm text-gray-400 py-2">${(priceToVnd(Number(data.originalPrice)))}</div>
                       </div>
                       <div>${data.description}</div>
                   </div>

                    <div class="pt-44">
                    <div class="flex">
                           <div class="px-20 py-3 bg-red-600 rounded text-white">Mua ngay</div>
                           <div class="pl-5  mx-3 flex"><div class="rounded border border-red-600 py-3 px-3"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1659658373/qxwegrrxfb3yvj82mzhd.png" width="48px"></div> <span class="px-5 font-semibold w-32">thêm vào giỏ hàng</span></div>
                    </div>
                  </div>

            </div>
        </div>
        <h1 class="pt-6 font-bold py-5">Sản phẩm cùng loại</h1>
        <div class="grid gap-2 grid-cols-5 py-20">
        ${like.map(cell => /*html*/`
               <a href="/product/${cell._id}">
               
               <div class="box">
               <div class="flex justify-center p-2"><img class="" src="${cell.images?.thumbnail}" width="160px"></div>
               <h2 class="pb-6">${cell.name}</h2>
               <div class="flex">
                   <span class="basis-6/12 text-red-600">${(priceToVnd(Number(cell.sellerPrice)))}</span>
                   <span class="basis-6/12">1${priceToVnd(Number(cell.originalPrice))}</span>
               </div>
               <div class="flex"> 
                   <div id="rater">rater js</div>
                   <span class="px-2">số đánh giá</span>
               </div>
           </div>
               
               </a>
       

        `).join('')}
        
        </div>
       
        <div class="py-2 rounded bg-[#F2F2F2] ">
                    <h1 class="text-red-600 text-center">ĐẶC ĐIỂM NỔI BẬT</h1>
            <span class="px-3 py-3">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</span>
        </div>
        <div class="fa-audio-description py-3">
            Đánh giá : :()
        </div>
        <div class="longdescription py-3">
            <span>${data.longdescription?data.longdescription:''}</span></span>
        </div>
    </div>
`
    } 
}
export default productDetail;