import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
    useAuth,
    useLoginWithRedirect,
    ContextHolder,
    AdminPortal,
} from "@frontegg/react";

function App() {
    const { user, isAuthenticated } = useAuth();
    const loginWithRedirect = useLoginWithRedirect();

    // Uncomment this to redirect to login automatically
    // useEffect(() => {
    //   if (!isAuthenticated) {
    // loginWithRedirect();
    //   }
    // }, [isAuthenticated, loginWithRedirect]);

    const logout = () => {
        const baseUrl = ContextHolder.getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    };

    const handleClick = () => {
        AdminPortal.show();
    };

    return (
        <div className="App">
            {isAuthenticated ? (
                <div>
                    <div>
                        <img src={user?.profilePictureUrl} alt={user?.name} />
                    </div>
                    <div>
                        <span>Logged in as: {user?.name}</span>
                    </div>
                    <div>
                        <button onClick={() => alert(user.accessToken)}>
                            What is my access token?
                        </button>
                    </div>
                    <div>
                        <button onClick={handleClick}>Settings</button>
                    </div>
                    <div>
                        <button onClick={() => logout()}>
                            Click to logout
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <button onClick={() => loginWithRedirect()}>
                        Click me to login
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
