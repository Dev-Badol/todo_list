const adduser = document.getElementById("addUser");
const btnText = adduser.innerText;
const username = document.getElementById("username");
const recordsDisplay = document.getElementById("records");
let userArray = [];
let edit_id = null;
let obj = localStorage.getItem("users");
if (obj != null) {
  userArray = JSON.parse(obj);
}
DisplayInfo();

adduser.onclick = () => {
    const name = username.value;
    if(edit_id!= null){
    userArray.splice(edit_id,1,{ 'name': name })
    edit_id = null
    }else{
 
        userArray.push({ 'name': name });
    }

  SaveInfo(userArray);
  username.value = "";

  adduser.innerText = btnText;
};

function SaveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("users", str);
  DisplayInfo();
}
function DisplayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += ` <tr>
   <th scope="row">${i + 1}</th>
   <th>${user.name}</th>
   <th class="d-flex gap-2">
   <h6 onclick=(EditInfo(${i}))>edit</h6>
   <h6 onclick=(DeleteInfo(${i}))>delete</h6>

   </th>
 </tr>`;
  });
  recordsDisplay.innerHTML = statement;
}
function DeleteInfo(id) {
  userArray.splice(id, 1);
  SaveInfo(userArray);

}
function EditInfo(id) {
  edit_id = id;
  username.value = userArray[id].name;
  adduser.innerText = "Save Changes";
}
