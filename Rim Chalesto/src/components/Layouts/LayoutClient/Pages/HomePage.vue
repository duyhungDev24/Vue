<template>
    <!-- Title -->
    <div class="mt-10 w-full flex justify-center items-center mb-10">
        <h1 class="text-4xl font-semibold">PROMOTIONAL TODAY</h1>
    </div>

    <!-- Banner -->
    <div class="w-full text-center mb-20">
        <!-- Banner -->
        <img src="@/assets/Images/Banners/banner4.jpg" alt="sale-banner" class="h-[400px] w-full object-cover mb-10">

        <!-- Support Section -->
        <div class="max-w-screen-lg mx-auto flex justify-between items-center space-x-4 px-4">
            <div
                class="flex-1 p-6 bg-black border-2 border-gray-200 shadow-lg text-center rounded-lg hover:shadow-xl transition-shadow duration-300">
                <h4 class="text-2xl font-semibold text-white">FREE SHIP</h4>
            </div>
            <div
                class="flex-1 p-6 bg-black border-2 border-gray-200 shadow-lg text-center rounded-lg hover:shadow-xl transition-shadow duration-300">
                <h5 class="text-2xl font-semibold text-white">SUPPORT CUSTOMER 24/7</h5>
            </div>
            <div
                class="flex-1 p-6 bg-black border-2 border-gray-200 shadow-lg text-center rounded-lg hover:shadow-xl transition-shadow duration-300">
                <h4 class="text-2xl font-semibold text-white">REFUND 100%</h4>
            </div>
        </div>
    </div>


    <!-- Link -->
    <div class="w-full flex justify-between items-center mb-10 mt-10 px-4">
        <div class="flex space-x-4 text-lg">
            <a href="#" class="font-bold text-gray-800">NEW PRODUCTS</a>
            <span class="text-gray-400">/</span>
            <a href="#" class="text-gray-400 hover:text-black">BEST SALER</a>
            <span class="text-gray-400">/</span>
            <a href="#" class="text-gray-400 hover:text-black">PROMOTIONAL</a>
        </div>
        <div class="flex space-x-2">
            <button class="bg-gray-200 p-2 rounded hover:bg-gray-300">
                <span class="material-icons">Left</span>
            </button>
            <button class="bg-gray-200 p-2 rounded hover:bg-gray-300">
                <span class="material-icons">Right</span>
            </button>
        </div>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-10">
        <!-- Products -->
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/Explorers/T-Shirt-bl.jpeg" alt="ảnh 1"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>

        <!-- Products -->
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/BasicTee/BasicTee-ylw.jpg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>

        <!-- Products -->
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/Rabits/Rabit-grn.jpeg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/BasicTee/BasicTee-p.jpg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
    </div>
    <div class="bg-black text-white p-12 text-center rounded-lg shadow-lg w-full mx-auto mb-10">
        <h2 class="text-4xl font-bold mb-2">GIẢM 50%</h2>
        <p class="text-base font-light mb-8 text-gray-300">Thời trang Fashion-shop giảm từ 35% lên đến 50% đối với bộ
            sưu tập hè</p>
        <div id="countdown" class="flex justify-center space-x-6 text-xl font-medium">
            <div class="flex flex-col items-center bg-white text-black rounded-lg w-20 h-24 p-2 shadow-md">
                <span id="days" class="text-3xl font-bold">0</span>
                <span class="text-xs font-light">NGÀY</span>
            </div>
            <div class="flex flex-col items-center bg-white text-black rounded-lg w-20 h-24 p-2 shadow-md">
                <span id="hours" class="text-3xl font-bold">0</span>
                <span class="text-xs font-light">GIỜ</span>
            </div>
            <div class="flex flex-col items-center bg-white text-black rounded-lg w-20 h-24 p-2 shadow-md">
                <span id="minutes" class="text-3xl font-bold">0</span>
                <span class="text-xs font-light">PHÚT</span>
            </div>
            <div class="flex flex-col items-center bg-white text-black rounded-lg w-20 h-24 p-2 shadow-md">
                <span id="seconds" class="text-3xl font-bold">0</span>
                <span class="text-xs font-light">GIÂY</span>
            </div>
        </div>
        <button
            class="mt-8 bg-transparent border-2 border-gray-300 text-gray-300 font-semibold py-2 px-8 rounded-full hover:bg-gray-700 transition-all">
            XEM TẤT CẢ
        </button>
    </div>
    <!-- Link -->
    <div class="w-full flex justify-between items-center mb-10 mt-10 px-4">
        <div class="flex space-x-4 text-lg">
            <a href="#" class="font-bold text-gray-800">T-SHIRT</a>
            <span class="text-gray-400">/</span>
            <a href="#" class="text-gray-400 hover:text-black">POLO</a>
            <span class="text-gray-400">/</span>
            <a href="#" class="text-gray-400 hover:text-black">HOODOIE</a>
        </div>
        <div class="flex space-x-2">
            <button class="bg-gray-200 p-2 rounded hover:bg-gray-300">
                <span class="material-icons">Left</span>
            </button>
            <button class="bg-gray-200 p-2 rounded hover:bg-gray-300">
                <span class="material-icons">Right</span>
            </button>
        </div>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-10">
        <!-- Products -->
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/BasicTee/BasicTee-grn.jpg" alt="ảnh 1"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>

        <!-- Products -->
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/BasicTee/BasicTee-ylw.jpg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>

        <!-- Products -->
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/BasicTee/BasicTee-orn.jpg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/BasicTee/BasicTee-p.jpg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/Explorers/T-Shirt-bl.jpeg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/Explorers/T-Shirt-gr.jpeg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/Explorers/T-Shirt-grn.jpeg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
        <div class="text-center font-sans">
            <div class="relative group">
                <img src="@/assets/Images/Products/Shirts/T-Shirt/Explorers/T-Shirt-p.jpeg" alt="ảnh 2"
                    class="w-64 h-64 object-cover mx-auto">
                <div class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">SALE</div>
                <div
                    class="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="bg-yellow-400 p-2 rounded-md text-white">
                        <span class="material-icons">shopping_cart</span>
                    </button>
                    <button class="bg-gray-800 p-2 rounded-md text-white">
                        <span class="material-icons">search</span>
                    </button>
                </div>
            </div>
            <h4 class="mt-4 text-lg font-semibold">Unisex Dracula</h4>
            <div class="flex justify-center items-center space-x-2 mt-2">
                <span class="text-lg font-bold text-gray-800">100.000đ</span>
                <span class="text-sm line-through text-gray-500">150.000đ</span>
            </div>
        </div>
    </div>
    <div class="bg-cover bg-center text-white py-16 bg-black mb-10">
        <h2 class="text-3xl font-bold text-center mb-4">OVER 20,000 COMPANIES AND INDIVIDUALS HAVE CHOSEN FASHION-SHOP</h2>
        <p class="text-center text-lg mb-8">Hear what our customers have said about us</p>

        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div class="bg-white text-black p-6 rounded-lg shadow-md">
                <p class="mb-4">After more than 4 years of using Fashion-shop with 2 websites, I find Fashion-shop
                    almost responsive
                    Required by a small and medium store selling online as well as introducing products...</p>
                <p class="font-bold">ENGO</p>
                <p>CEO & Founder EngoCreative</p>
            </div>

            <div class="bg-white text-black p-6 rounded-lg shadow-md">
                <p class="mb-4">As an online sales unit, I am very satisfied with the interface of Fashion-shop and
                    Beemart
                    Attracts a lot of customers...</p>
                <p class="font-bold">BEEMART</p>
                <p>Project Manager</p>
            </div>

            <div class="bg-white text-black p-6 rounded-lg shadow-md">
                <p class="mb-4">As a customer using Fashion-shop's services, I am completely assured and confident
                    technical team...</p>
                <p class="font-bold">DROCALO</p>
                <p>- drocalo.vn -</p>
            </div>

            <div class="bg-white text-black p-6 rounded-lg shadow-md">
                <p class="mb-4">Sử dụng dịch vụ của Fashion-shop đã được một thời gian khá dài, gần đây nhất Megamart đã
                    được nâng cấp lên phiên bản mới nhất...</p>
                <p class="font-bold">NGUYỄN PHÚ THÀNH</p>
                <p>- megamart.vn -</p>
            </div>
        </div>
    </div>
    <div class="flex space-x-4 text-lg mb-5">
        <h1 class="font-bold text-gray-800">NEWS</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        <!-- News Section 1 -->
        <div class="bg-white p-6 text-black">
            <div class="flex flex-row space-x-6">
                <div class="w-1/3">
                    <img src="https://picsum.photos/200/300" alt="new1" class="w-full h-48 object-cover rounded-md">
                </div>
                <div class="flex-1">
                    <div class="text-xl font-medium">New 1</div>
                    <span class="text-gray-600 text-sm">0 comments</span>
                    <p class="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, earum.
                    </p>
                </div>
            </div>
            <div class="mt-4">
                <h3 class="text-blue-500 hover:underline"><a href="#">Reading</a></h3>
            </div>
        </div>

        <!-- News Section 2 -->
        <div class="bg-white p-6 text-black">
            <div class="flex flex-row space-x-6">
                <div class="w-1/3">
                    <img src="https://picsum.photos/200/300" alt="new1" class="w-full h-48 object-cover rounded-md">
                </div>
                <div class="flex-1">
                    <div class="text-xl font-medium">New 2</div>
                    <span class="text-gray-600 text-sm">0 comments</span>
                    <p class="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, earum.
                    </p>
                </div>
            </div>
            <div class="mt-4">
                <h3 class="text-blue-500 hover:underline"><a href="#">Reading</a></h3>
            </div>
        </div>

        <!-- News Section 3 -->
        <div class="bg-white p-6 text-black">
            <div class="flex flex-row space-x-6">
                <div class="w-1/3">
                    <img src="https://picsum.photos/200/300" alt="new1" class="w-full h-48 object-cover rounded-md">
                </div>
                <div class="flex-1">
                    <div class="text-xl font-medium">New 3</div>
                    <span class="text-gray-600 text-sm">0 comments</span>
                    <p class="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, earum.
                    </p>
                </div>
            </div>
            <div class="mt-4">
                <h3 class="text-blue-500 hover:underline"><a href="#">Reading</a></h3>
            </div>
        </div>
    </div>






</template>
<script>
// Set the date we're counting down to
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Tính toán thời gian còn lại
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Nếu hết thời gian, dừng đếm ngược
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Hết thời gian giảm giá!";
    }
}, 1000);

</script>