const adduser = document.getElementById("addUser");
const username = document.getElementById("username");
const recordsDisplay = document.getElementById("records")
let userArray = [];
let obj = localStorage.getItem("users");
if (obj != null) {
  userArray = JSON.parse(obj);
}
DisplayInfo()

adduser.onclick = () => {
  const name = username.value;

  userArray.push({ name: name });
  SaveInfo(userArray);
  username.value = "";
  DisplayInfo()
};

function SaveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("users", str);
}
function DisplayInfo() {
  let statement = "";
  userArray.forEach((user,i) => {
    statement += ` <tr>
   <th scope="row">${i + 1}</th>
   <th>${user.name}</th>
   <th class="d-flex gap-2">
   <h6 onclick=(EditInfo(${i}))>edit</h6>
   <h6 onclick=(DeleteInfo(${i}))>delete</h6>

   </th>
 </tr>`;
  });
  recordsDisplay.innerHTML = statement
}
function DeleteInfo(id) {
    alert(id)
}
function EditInfo(id) {
    alert(id)
}
