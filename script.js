//1.fetch
//let currentPage = 1;
//let totalpages;

//function getUsersAjax(page) {
//  fetch("https://reqres.in/api/users?page=" + page, {
//    method: "GET",
//  })
//    .then(function (response) {
 //     if (response.status !== 200) {
//        throw response.status;
 //     }
//      return response.json();
 //   })
//    .then(function (responseData) {
//      const fragment = document.createDocumentFragment();

//      responseData.data.forEach((element) => {
//        let li = document.createElement("li");

 //       let p = document.createElement("p");
//        // li.textContent = element.first_name + element.last_name;
 //       p.textContent = `${element.first_name} ${element.last_name}`;

//        let image = document.createElement("img");
//        image.src = element.avatar;
//        li.appendChild(image);
//        li.appendChild(p);
 //       fragment.appendChild(li);
 //     });

 //     document.getElementById("list").innerHTML = " ";
 //     document.getElementById("list").appendChild(fragment);
  //    document.getElementById("list").appendChild(fragment);
  //    document.getElementById("list").appendChild(fragment);
//      totalpages = responseData.total_pages;
//    })
//    .catch(function (error) {
 //     if (error == 404) {
 //       let p = document.createElement("p");
 //       p.textContent = "Page not found";
//        p.style.color = "red";
//        document.getElementById("api").appendChild(p);
//      } else if (error == 500) {
//        let p = document.createElement("p");
 //       p.textContent = "Server Error";
 //       p.style.color = "red";
 //       document.getElementById("api").appendChild(p);
 //     }
 //   });
//}

//document.getElementById("loadprev").addEventListener("click", function () {
 // if (currentPage == 1) {
 //   return;
 // }
 // // currentPage--;
 // currentPage -= 1;
//  getUsersAjax(currentPage);
//});

//document.getElementById("loadnext").addEventListener("click", function () {
 // if (currentPage == totalpages) {
 //   return;
 // }
 // // currentPage++;
 // // currentPage = currentPage + 1;
 // currentPage += 1;
//   getUsersAjax(currentPage);
// });

// getUsersAjax(currentPage);




let currentPage = 1;
 let totalpages;

 function getUsersAjax(page) {
     function render() {
       let response = this.responseText;
       let responseData = JSON.parse(response);

       const fragment = document.createDocumentFragment();

       responseData.data.forEach((element) => {
         let li = document.createElement("li");

         let p = document.createElement("p");
         p.textContent = `${element.first_name} ${element.last_name}`;

         let image = document.createElement("img");
         image.src = element.avatar;
         li.appendChild(image);
         li.appendChild(p);
         fragment.appendChild(li);
       });

       document.getElementById("list").innerHTML = " ";
       document.getElementById("list").appendChild(fragment);
       totalpages = responseData.total_pages;
     }

     let requist = new XMLHttpRequest();
     requist.addEventListener('load',render);
     requist.open('GET',"https://reqres.in/api/users?page=" + page);
     requist.send();
 }

 document.getElementById("loadprev").addEventListener("click", function () {
   if (currentPage == 1) {
     return;
   }
   // currentPage--;
   currentPage -= 1;
   getUsersAjax(currentPage);
 });

 document.getElementById("loadnext").addEventListener("click", function () {
   if (currentPage == totalpages) {
     return;
   }
   // currentPage++;
   // currentPage = currentPage + 1;
   currentPage += 1;
   getUsersAjax(currentPage);
 });

 getUsersAjax(currentPage);


