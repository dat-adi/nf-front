<script lang="ts">
    import type { PageData } from "./$types";
    import { superForm } from "sveltekit-superforms/client";

    export let data: PageData;

    const { form, errors, constraints, enhance } = superForm(data.form, {
        taintedMessage: "Wait, you haven't added the product yet. Are you sure you want to leave?",
    })
</script>

<div class="h-full flex justify-center items-center">
    <header class="card-header">
        <h3 class="h3">Add a new product</h3>
    </header>
    <form
    class="grid grid-rows-2"
    method="POST"
    use:enhance>
        <label class="label" for="name">Product Name</label>
        <input
        class="input rounded"
        type="text"
        id="name"
        name="name"
        aria-invalid={$errors.name ? 'true' : undefined}
        bind:value={$form.name}
        {...$constraints.name} />
        <div class="p-2" />

        <label class="label" for="description">Product Description</label>
        <textarea
        class="input textarea rounded"
        rows="2"
        id="description"
        name="description"
        aria-invalid={$errors.description ? 'true' : undefined}
        bind:value={$form.description}
        {...$constraints.description} />
        <div class="p-2" />

        <label class="label" for="imageUrl">Provide a URL to the image</label>
        <input
        class="input rounded"
        type="text"
        id="imageUrl"
        name="imageUrl"
        aria-invalid={$errors.imageUrl ? 'true' : undefined}
        bind:value={$form.imageUrl}
        {...$constraints.imageUrl} />
        <div class="p-2" />

        <label class="label" for="price">Price of the product</label>
        <input
        class="input rounded"
        type="number"
        id="price"
        name="price"
        aria-invalid={$errors.price ? 'true' : undefined}
        bind:value={$form.price}
        {...$constraints.price} />
        <div class="p-2" />

        <label class="label" for="quantity">How many grams?</label>
        <select
        class="select rounded"
        id="quantity"
        name="quantity"
        aria-invalid={$errors.quantity ? 'true' : undefined}
        bind:value={$form.quantity}
        {...$constraints.quantity}>
            <option value="250">250 grams</option>
            <option value="500">500 grams</option>
            <option value="1000">1 kg</option>
        </select>
        <div class="p-2" />

        <button
        class="btn variant-filled-primary rounded"
        type="submit">
        Submit
        </button>
    </form>
</div>
