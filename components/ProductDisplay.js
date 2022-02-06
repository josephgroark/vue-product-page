app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Local Delivery: {{ delivery }}</p>
          
          <!-- solution -->
          <product-details :details="details"></product-details>
          <!-- solution -->
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundImage: backGroundImg(variant) }">
            <h4>
            {{ variant.name }}
            </h4>
          </div>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
  data() {
    return {
      product: "Sour Breads",
      brand: "Joey's",
      selectedVariant: 0,
      details: ["Flour", "Water", "Starter", "Salt"],
      variants: [
        {
          id: 1,
          name: "Joey's sourbread",
          image: "./assets/images/boule.jpg",
          image_small: "./assets/images/boule_small.jpg",
          quantity: 2,
        },
        {
          id: 2,
          name: "San Francisco sourbread",
          image: "./assets/images/bloomer.jpg",
          image_small: "./assets/images/bloomer_small.jpg",
          quantity: 0,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    backGroundImg(variant) {
      return `url(${variant.image_small})`;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    delivery() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
