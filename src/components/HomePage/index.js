import React from "react";
import AuthService from "../../services/auth.service";


function Index() {
    AuthService.logout()
    return (
        <div>
            <h2>시작 페이지</h2>
        </div>
    );
}

export default Index;
