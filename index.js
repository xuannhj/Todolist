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

// async là từ khóa để khai báo hàm bất đồng bộ
async function getTodos() {
    try {
        const response = await fetch("https://68272e946b7628c5290f5ba4.mockapi.io/tasks");
    }
    
}

