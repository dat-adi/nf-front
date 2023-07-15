import { fail } from "@sveltejs/kit"
import { superValidate } from 'sveltekit-superforms/server';
import { productItemSchema } from "$lib/schemas";

// Retrieves the product schema and returns a form that has validation
// internally present in it.
export const load = async() => {
  const form = await superValidate(productItemSchema);
  return { form }
}

// Overrides the default action to check if the data is valid or not.
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, productItemSchema);

    // Validation check
    if (!form.valid) {

      // Return the form mentioning that the operation was a failure.
      return fail(400, { form });
    }

    const response = await fetch("http://localhost:3000/api/v1/products/", {
      method: "POST",
      body: JSON.stringify({
        "Name": form.data.name,
        "Description": form.data.description,
        "ImageUrl": form.data.imageUrl,
        "Quantity": form.data.quantity,
        "Price": form.data.price
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(response);
  }
}
