const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Joey's sourbread",
      selectedVariant: 0,
      ingredients: ["Flour", "Water", "Starter", "Salt"],
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
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    decreaseCart() {
      this.cart -= 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
