const todoInput = document.getElementById("todo-input");
const addButon = document.getElementById("add-button");

document.addEventListener("DOMContentLoaded", getTodos);
// đợi cho mọi thứ load xong 
addButon.addEventListener("click", addTodo);
// theem sự kiện cho nút ADD
// khi click vào nút thì gọi hàm addTodo



// function getTodos() {
// // call endpoint lấy dữ liệu
//     fetch ("https://68272e946b7628c5290f5ba4.mockapi.io/tasks")
//     // Chuyển đổi dữ liệu về dạng json
//     .then((response) => response.json())
//     // Lấy dữ liệu từ json
//     .then((response) => console.log(response))
//     // Nếu có lỗi thì sẽ vào đây
//     .catch((error) => console.log("Thất bại òi" + error));

// }


// GET FUNCTION
async function getTodos() {
    // biến nó thành 1 hàm đồng bộ
    // await là chờ cho hàm này chạy xong rồi mới chạy tiếp
    // async và await lun đi chung với nhaunhau
    try{

    const response = await axios.get ("https://68272e946b7628c5290f5ba4.mockapi.io/tasks");
    const ul= document.querySelector(".todo-list");
    // ul.innerHTML = "";
    // xóa hết nội dung trong ul đi
    // để tránh bị lặp lại
    // khi mà gọi lại hàm getTodos thì nó sẽ xóa hết nội dung trong ul đi



    console.log(response.data);
    response.data.forEach((item) => {
    // forEach là 1 hàm lặp qua từng phần tử trong mảng
    const date = new Date(item.createdAt);
    // createdAt là 1 thuộc tính trong 
    const formatDate = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
    // đặt biến vào chuỗi
    // cái chuỗi bình thường thì không thể gán biến vào được
    // nhưng nếu mà có dấu ` thì có thể gán biến vào được

    // Tạo li 
    const li = document.createElement("li");
    //  gắn class to do item để nó ăn css
    li.className = "todo-item";
    // gắn thắng con và nội dung từ api cho thăng con
    li.innerHTML = ` <div class = "todo-content">

                        <input type="checkbox">
                        <div>
                            <span>${item.content}
                            </span>
                            <p > Created: ${formatDate} </span>
                            <!-- dung the p, xem lai inline va block -->
                        </div>
                    </div>


                    <li class = "todo-item"></li>
    

                    <div class = "todo-actions">
                    <button> <i class="fa-solid fa-pen-to-square"></i></button>
                    <button> <i class="fa-solid fa-trash"></i></button>
                    </div>`;
    // gắn vào ul
    const ul = document.querySelector(".todo-list");
    ul.appendChild(li);
    });
    }
    catch (error) {
        console.log("Thất bại òi" + error);
    }
}

// POST FUNCTION
async function addTodo() {
    const inputData = todoInput.value.trim();
    // lấy giá trị từ ô input
    // trim() là xóa khoảng trắng ở đầu và cuối, như dấu cách chẳng hạn 

    const newTodo = {
    createdAt: new Date().toISOString(),
    // tạo thời gian hiện tại
    // toISOString() là chuyển đổi thời gian về định dạng ISO
    content: inputData,
    // truyền vào giá trị từ ô input
    // cai hồi nãy lấy 
    isCompleted: false,
  };        

  try {
    const response = await axios.post("https://68272e946b7628c5290f5ba4.mockapi.io/tasks", newTodo);
    // gọi api để thêm dữ liệu vào
    // newTodo là dữ liệu mà mình muốn thêm vào
    // post là phương thức để thêm dữ liệu vào
    console.log(response);
    todoInput.value = "";
    getTodos();
    // xóa giá trị trong ô input
    // gọi lại hàm getTodo để lấy dữ liệu mới mà k cần F5 mới hiển thị 
    Swal.fire({
    title: "add r cưng nha",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
    backdrop: `
    rgba(0,0,123,0.4)
    url(https://sweetalert2.github.io/images/nyan-cat.gif)
    left top
    no-repeat
  `
});

  } catch (error) {
    console.log("Thất bại òi" + error);
  }

}


//PUT FUNCTION
function handleUpdate(id, content) {
    console.log(id);
    console.log(content);
}