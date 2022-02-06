const app = Vue.createApp({
  data() {
    return {
      product: "Joey's sourbread",
      image: "./assets/images/boule.jpg",
      inventory: 0,
      cart: 0,
      freshToday: true,
      ingredients: ["Flour", "Water", "Starter", "Salt"],
      varieties: [
        { id: 1, style: "boule", name: "Joey's sourbread" },
        { id: 2, style: "bloomer", name: "San Francisco sourbread" },
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
    updateImage(varietyImage) {
      this.image = `./assets/images/${varietyImage}.jpg`;
    },
  },
  computed: {
    isOutOfStock() {
      if (this.inventory <= 0) {
        return true;
      }
    },
  },
});
