<template>
  <div>
    <!-- Đăng ký nhận bản tin -->
    <div class="bg-black bg-opacity-90 text-white py-10">
      <div class="container mx-auto text-center mb-8">
        <h3 class="text-3xl font-bold">Register for our newsletter</h3>
        <h4 class="text-lg font-light">Get voucher 15% when you sign up</h4>
      </div>
      <div class="flex justify-center">
        <input type="email" placeholder="Enter your Email"
               class="w-1/3 px-6 py-3 text-black placeholder-gray-600 border border-white focus:outline-none rounded-l-full" />
        <button class="bg-white text-black font-semibold px-8 py-3 rounded-r-full hover:bg-gray-300">
          Follow
        </button>
      </div>
    </div>

    <!-- Nội dung footer -->
    <footer class="bg-white text-gray-800 py-10">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        <!-- Về chúng tôi -->
        <div>
          <h5 class="font-semibold mb-4">About Us</h5>
          <p class="text-sm">Address: London</p>
          <p class="text-sm">Hotline: (+84) 3 888 888</p>
          <p class="text-sm">Email: example.com</p>
          <div class="flex space-x-4 mt-4">
            <i class="fab fa-twitter text-lg"></i>
            <i class="fab fa-pinterest text-lg"></i>
            <i class="fab fa-facebook text-lg"></i>
            <i class="fab fa-behance text-lg"></i>
            <i class="fab fa-dribbble text-lg"></i>
          </div>
        </div>

        <!-- Xu hướng -->
        <div>
          <h5 class="font-semibold mb-4">Trends</h5>
          <p class="text-sm">Promotional Products</p>
          <p class="text-sm">Featured Products</p>
          <p class="text-sm">All Products</p>
        </div>

        <!-- Mở cửa -->
        <div>
          <h5 class="font-semibold mb-4">Open</h5>
          <p class="text-sm">Monday - Saturday</p>
          <p class="text-sm">Morning 08:00 - Afternoon 17:00</p>
        </div>

        <!-- Album ảnh -->
        <div>
          <h5 class="font-semibold mb-4">ALBUM</h5>
          <div class="grid grid-cols-3 gap-2">
            <img src="#" alt="image1" class="w-full h-16 object-cover rounded-md" />
            <img src="#" alt="image2" class="w-full h-16 object-cover rounded-md" />
            <img src="#" alt="image3" class="w-full h-16 object-cover rounded-md" />
            <img src="#" alt="image4" class="w-full h-16 object-cover rounded-md" />
            <img src="#" alt="image5" class="w-full h-16 object-cover rounded-md" />
            <img src="#" alt="image6" class="w-full h-16 object-cover rounded-md" />
          </div>
        </div>
      </div>

      <!-- Dòng phân cách và bản quyền -->
      <hr class="my-6 border-gray-300">
      <div class="text-center text-sm text-gray-600">
        <p>Copyright &copy; 2022 Rim Chalesto</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterClient",
};
</script>
