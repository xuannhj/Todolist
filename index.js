document.addEventListener("DOMContentLoaded", getTodos);
// đợi cho mọi thứ load xong 
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

async function getTodos() {
    // biến nó thành 1 hàm đồng bộ
    // await là chờ cho hàm này chạy xong rồi mới chạy tiếp
    // async và await lun đi chung với nhaunhau
    try{

    const response = await axios.get ("https://68272e946b7628c5290f5ba4.mockapi.io/tasks");
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