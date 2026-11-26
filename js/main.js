const gallery = document.getElementById("gallery");

fetch("data/data.json")
  .then(response => response.json())
  .then(photos => {
    photos.forEach(photo => {
      gallery.innerHTML += `
        <div class="col-md-6 mb-4">
          <img src="${photo.image}" id="${photo.id}" class="photo border border-secondary" alt="${photo.alt}">
        </div>
      `;
    });
  });
