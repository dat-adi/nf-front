<script lang="ts">
    import { onMount } from "svelte";

    // Defining the product type
    type ProductItem = {
        name: string;
        description: string;
        imageUrl: string;
        price: number;
        quantity: number;
    };

    // Defining the data holding variable
    let products: ProductItem[];

    // Requesting the backend for the products
    onMount(async () => {
        await fetch(
            `http://localhost:3000/api/v1/products/`,
            {
                method: "GET"
            }
        )
        .then(r => r.json())
        .then(data => {
            products = data.products;
        });
    })
</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {#if products}
            {#each products as product}
            <div class="card card-hover overflow-hidden dark:bg-neutral-800">
                <header>
                    <img
                    src="{product.imageUrl}"
                    class="bg-black/50 w-full aspect-[1/1]" alt="Post"/>
                </header>
                <div class="p-4 space-y-4">
                    <div class="flex">
                        <h3 class="flex-1 h3" data-toc-ignore>{product.name}</h3>
                        <code class="kbd">{product.quantity} grams</code>
                        <kbd class="kbd" >Rs. {product.price}</kbd>
                    </div>
                    <article>
                        <p>{product.description}</p>
                    </article>
                </div>
                <footer class="card-footer flex">
                    <button
                    class="btn variant-filled-primary rounded flex-1"
                    on:click={addToCart}>
                        Add to cart
                    </button>
                </footer>
            </div>
            {/each}
        {:else}
            <p class="loading">loading...</p>
        {/if}
    </div>
</div>
