import React from "react";
import axios from "axios";



function Modify() {
    axios.patch("http://43.200.155.190:8080/user/update",
    // 회원수정 이미지,
    { "changeNickname" : "KSH8", "changePassword" : "password4" }
    );
}

export default Modify;