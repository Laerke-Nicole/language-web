<template>
    <h1>This is an about page</h1>

    <button class="btn-add" @click="firebaseAddSingleItem()">Add item</button>

    <div>
    <input type="text" placeholder="Product name" v-model="AddProductData.productName">
    <input type="text" placeholder="Product name" v-model="AddProductData.productPrice">
    </div>

    <hr>

    <div v-for="product in products" :key="product">
    <p>
        ProductID: {{ product.id }}
    </p>
    <p>
        ProductName: {{ product.productName }}
    </p>
    <p>
        ProductPrice: {{ product.productPrice }}
    </p>
    <button class="btn-delete" @click="firebaseDeleteSingleItem(product.id)">Delete item</button>

    <p>
        <input type="text" placeholder="New product name" v-model="product.productName">
    </p>
    <p>
        <input type="text" placeholder="New product name" v-model="product.productPrice">
    </p>
    <button class="btn-edit" @click="firebaseUpdateSingleItem(product.id)">Edit item</button>
    <hr>

    </div>
</template>

<script setup>
import useProducts from '../modules/useProducts.js'
import { onMounted } from 'vue'

// create file and only grab data we need... add everytime u want to add a function like add button that deletes items
const { products, 
  getProductsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem,
  AddProductData,
  firebaseUpdateSingleItem,
  // UpdateProductData
} = useProducts();

onMounted(() => {
  getProductsData();
})

</script>

<style lang="scss" scoped>

</style>