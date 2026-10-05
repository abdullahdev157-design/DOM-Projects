let arr = [
  {
    id: "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W5se-3sXcI-CuvSm5GbPoSk655stnvqEeWyX1M79KA&s=10",
  },
  {
    id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
    story:
      "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg",
  },

  {
    id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ4tsK-5-am7SRNPPnw4HNrBxOLFQOv0ihrH2AhNTCA&s=10",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10",
  },

  {
    id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoYIvBx8uYSN1N9AgsHqk-hsCu483M1knLPs6fvCWNg&s=10",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb26HBU9J3LOKzN8BywaTqJeRtaTVgKKOq4FaMaH8zw&s=10",
  },
  {
    id: "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W5se-3sXcI-CuvSm5GbPoSk655stnvqEeWyX1M79KA&s=10",
  },
  {
    id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
    story:
      "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg",
  },

  {
    id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ4tsK-5-am7SRNPPnw4HNrBxOLFQOv0ihrH2AhNTCA&s=10",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10",
  },

  {
    id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoYIvBx8uYSN1N9AgsHqk-hsCu483M1knLPs6fvCWNg&s=10",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb26HBU9J3LOKzN8BywaTqJeRtaTVgKKOq4FaMaH8zw&s=10",
  },
];
let clutter = "";
arr.forEach((elem, idx) => {
  clutter += `   <div class="story">
    <img id = "${idx}" src = "${elem.id}" alt = "image">
            </div>`;
});
let stories = document.querySelector("#stories");
stories.innerHTML = clutter;
stories.addEventListener("click",(dets) => {
  let story = document.querySelector("#full");
  story.style.display = "block";

  console.log(arr[dets.target.id].story)
  story.style.backgroundImage = `url(${arr[dets.target.id].story})`;
  setTimeout(() => {
    story.style.display = "none";
  }, 2000);
});
