async function getProductDetails() {
  let productDetails;
  try {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json",
      {
        method: "GET",
        headers: {
           // "Content-Type": "application/json",
          //   "Access-Control":"Allow-Origin"
        },
      }
    );
    productDetails = await data.json();
    console.log(productDetails);
    console.log(productDetails.length);
  } catch (err) {
    console.log(err);
  }

  return productDetails;
}

async function displayProductDetails() {
  let productDetails = await getProductDetails();
  console.log(productDetails);
  const productListDetails = document.querySelector(".productListDetails");
  productListDetails.innerHTML = "";
  for(var i=0;i<10;i++){
    productListDetails.innerHTML += `<tr>
    <th scope="row">${i+1}</th>
    <td>${productDetails[i].brand}</td>
    <td>${productDetails[i].name}</td>
    <td>${productDetails[i].price} ${productDetails[i].price_sign}</td>
    <td><img class="productImage" src="${productDetails[i].image_link}}" alt="${productDetails[i].name}"></td>
    <td><a href="${productDetails[i].product_link}">Visit ${productDetails[i].brand} ${productDetails[i].name} Portal</a></td>
    <td>${productDetails[i].description}</td>
  </tr>`;
  }
}