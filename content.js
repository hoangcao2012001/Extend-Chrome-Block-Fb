alert('Không được vào faceook tui')
setTimeout(function() {
    // Chuyển hướng trình duyệt đến một URL không tương tác
    window.location.href = "about:blank";
  
    // Hoặc đóng tab hiện tại (phù hợp trong một số trình duyệt)
    window.close();
  }, 3000);