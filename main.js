let apiImg = "https://jsonplaceholder.typicode.com/photos";
fetch(apiImg)
  .then(function (response) {
    return response.json();
  })
  .then(function (thumbnain) {
    htmls = thumbnain.map(function (img) {
      return `
         <div class="album">
        <div class="id">${img.id}</div>
        <div class="title">
         ${img.title}
        </div>
        <a href="${img.url}"
          >${img.url}</a
        >
        <div class="thumbnail">
          <img src="${img.thumbnailUrl}" alt="" />
        </div>
      </div>
        `;
    });
    html = htmls.join("");
    document.querySelector(".container").innerHTML = html;
  });
