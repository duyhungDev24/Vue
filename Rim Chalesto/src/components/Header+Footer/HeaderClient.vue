<template>
  <div>
    <!-- Phần hỗ trợ và Đăng nhập/Đăng ký -->
    <div class="flex justify-between items-center py-2 px-6 border-b border-gray-200 text-gray-700 text-sm">
      <span>Support 24/7 : (+86) 6 888 888</span>
      <span class="space-x-4">
        <a href="#" class="hover:underline">Sign In</a>
        <span>-</span>
        <a href="#" class="hover:underline">Sign Up</a>
      </span>
    </div>

    <!-- Header với Logo và Giỏ hàng -->
    <header id="header" class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <div class="logo">
        <h3>Chalesto</h3>
      </div>
      <!-- Giỏ hàng -->
      <div class="link-cart relative">
        <a href="#" class="text-gray-800">
          <i class="fas fa-shopping-bag text-2xl"> Carts</i>
        </a>
      </div>
    </header>

    <!-- Menu và Tìm kiếm -->
    <div id="menu" class="bg-black text-white py-3">
      <div class="container mx-auto flex justify-between items-center px-6">
        <!-- Menu -->
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:text-yellow-500">Home</a></li>
          <li><a href="#" class="hover:text-yellow-500">Products</a></li>
          <li><a href="#" class="hover:text-yellow-500">News</a></li>
          <li><a href="#" class="hover:text-yellow-500">About</a></li>
          <li><a href="#" class="hover:text-yellow-500">Contact</a></li>
        </ul>
        <!-- Tìm kiếm -->
        <div class="relative">
          <input type="text" placeholder="Search" class="pl-3 pr-10 py-1 border rounded-full text-gray-700 focus:outline-none">
          <i class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
    </div>

    <!-- Banner -->
    <div class="banner">
      <img src="@/assets/Images/Banners/banner3.jpg" alt="Banner" class="w-full">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderClient",
  mounted() {
    const header = document.getElementById("header");
    const menu = document.getElementById("menu");

    window.addEventListener("scroll", () => {
      const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;

      if (window.scrollY >= headerBottom) {
        menu.classList.add("fixed", "top-0", "left-0", "w-full", "z-50");
      } else {
        menu.classList.remove("fixed", "top-0", "left-0", "w-full", "z-50");
      }
    });
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
}
</style>
