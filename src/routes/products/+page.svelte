<script lang="ts">
    import { onMount } from "svelte";

    // Defining the product type
    type Product = {
        name: string;
        description: string;
        quantity: number;
    };

    // Defining the data holding variable
    let products: Product[];

    // Requesting the backend for the products
    onMount(async () => {
        await fetch(
            `http://localhost:3000/api/v1/products`,
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
            <div class="card">
                <img class="w-full" src="/img/robin-thang-In-qzXa-po8-unsplash-1-to-1.jpg" alt="Chillis in a bowl">
                <div class="px-6 py-4 dark:bg-neutral-800">
                    <div class="font-bold text-xl dark:text-neutal-500 mb-2">{product.name}</div>
                    <p class="text-neutral-200 text-base mb-4">
                      {product.description}
                    </p>
                    <div class="flex flex-row">
                        <p class="basis-1/2 text-xs text-neutral-500 py-4 px-12 dark:text-neutral-300">
                        Stock left: {product.quantity}
                        </p>
                        <button
                        type="button"
                        class="basis-1/2 variant-filled-primary py-2 rounded hover:variant-filled-secondary">
                            Order now!
                        </button>
                    </div>
                </div>
            </div>
            {/each}
        {:else}
            <p class="loading">loading...</p>
        {/if}
    </div>
</div>
