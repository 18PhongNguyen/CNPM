function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateAndDisplayCode() {
      // Gửi mã xác nhận qua email hoặc xử lý theo nhu cầu của bạn

      // Ví dụ: Hiển thị mã xác nhận trong console
      var code = generateRandomNumber(100000, 999999);
      console.log('Confirmation Code:', code);
    }