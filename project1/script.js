let sta = document.querySelector("h5");
let friend = document.querySelector("#btn");
let check = 0;
friend.addEventListener("click", () => {
  if (check == 0) {
    sta.innerHTML = "Friends";
    friend.innerHTML = "Remove";
    friend.style.backgroundColor = "#dadada";
    friend.style.color = "#000";
    sta.style.color = "cornflowerblue";
    check = 1;
  } else {
    sta.innerHTML = "Stranger";
    friend.innerHTML = "Add Friend";
    sta.style.color = "#415e13";
     friend.style.backgroundColor = "cornflowerblue";
    friend.style.color = "#fff";
    check = 0;
  }
});
