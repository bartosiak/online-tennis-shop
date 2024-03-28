import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useUserIdentifier() {
    const [userId, setUserId] = useState(null);
    const storedId = localStorage.getItem("userId");
    console.log(storedId);
    if (!storedId) {
        const newId = uuidv4();
        setUserId(newId);
        localStorage.setItem("userId", newId);
    } else {
        setUserId(storedId);
    }

    return { userId };
}
