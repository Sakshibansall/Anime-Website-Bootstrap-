

// wishlist

let button = document.querySelectorAll(".wishlist-btn");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


function updatebtn(btn) {
    const title = btn.getAttribute("data-title");;
    // agaer nahi h to include kurdo
    if (wishlist.includes(title)) {
        btn.innerHTML = `<i class="far fa-bookmark"></i>`;
        btn.classList.add("btn-primary");
        btn.classList.remove("btn-outline-light")
    }
    else {
        // agar h to remove kurdo
        btn.innerHTML = `<i class="far fa-bookmark"></i>`;
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-light");
    }
}

button.forEach((btn) => {
    btn.addEventListener("click", () => {

        const title = btn.getAttribute("data-title");

        const index = wishlist.indexOf(title);

        if (index > -1) {
            // agar h to - remove
            wishlist.splice(index, 1)
        }
        else {
            // agar nahi h to  - add
            wishlist.push(title)
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist))

        updatebtn(btn)
    })
})



// show wishlist in page
const container = document.getElementById("wishlist-container");

if (wishlist.length === 0) {
    // agar nahi h to message dalo
    container.innerHTML = "<p>No items in your wishlist.</p>";
} else {
    // agar h to remove
    wishlist.forEach(title => {
        const div = document.createElement("div");
        div.className = "wishlist-item";
        div.innerHTML = `
      <h3>${title}</h3>
      <button onclick="removeFromWishlist('${title}')">Remove</button>
    `;
        container.appendChild(div);
    });
}


function removeFromWishlist(title) {
    const index = wishlist.indexOf(title);
    if (index > -1) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        location.reload(); // page refresh to update UI
    }
}


