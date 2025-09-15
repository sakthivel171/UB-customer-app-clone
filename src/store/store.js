import { createStore } from "vuex";

export default createStore({
  state: {
    cart: []
  },
  getters: {
    getQuantity: (state) => (productId) => {
      const item = state.cart.find(p => p.id === productId);
      return item ? item.quantity : 0;
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(p => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, product) {
      const item = state.cart.find(p => p.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter(p => p.id !== product.id);
        }
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, product) {
      commit("REMOVE_FROM_CART", product);
    }
  }
});
