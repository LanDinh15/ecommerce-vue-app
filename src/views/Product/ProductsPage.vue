<template>
  <div>
    <h1>Products</h1>
    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <!-- Main Image -->
        <img :src="product.images[0]" :alt="product.name" class="product-image" />

        <!-- Product Details -->
        <div class="product-details">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p><strong>Brand:</strong> {{ product.brand }}</p>
          <p><strong>Price:</strong> ${{ product.price }}</p>
          <p><strong>Stock:</strong> {{ product.stock }}</p>
          <p><strong>Category:</strong> {{ product.category.name }}</p>

          <!-- Sizes -->
          <p><strong>Sizes:</strong></p>
          <ul class="sizes-list">
            <li v-for="size in product.size" :key="size">{{ size }}</li>
          </ul>

          <!-- Colors -->
          <p><strong>Colors:</strong></p>
          <ul class="colors-list">
            <li v-for="color in product.color" :key="color" class="color-box" :style="{ backgroundColor: color.toLowerCase() }"></li>
          </ul>

          <!-- Images
          <p><strong>More Images:</strong></p>
          <div class="additional-images">
            <img v-for="(image, index) in product.images" :key="index" :src="image" :alt="product.name" class="additional-image" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductPage",
  data() {
    return {
      products: [], // Holds the list of products
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        if (response.data.success) {
          this.products = response.data.data; // Assign the 'data' array to products
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Page Header */
h1 {
  text-align: center;
  margin-bottom: 20px;
}

/* Products Container */
.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Product Card */
.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Product Image */
.product-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Product Details */
.product-details {
  text-align: left;
}

/* Sizes List */
.sizes-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 5px;
}

.sizes-list li {
  padding: 5px 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
}

/* Colors List */
.colors-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 5px;
}

.color-box {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
}

/* Additional Images */
.additional-images {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}

.additional-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
