import { useUserIdentifier } from "./useUserIdentifier";

export function useUser() {
    const { userId } = useUserIdentifier();

    return { userId };
}
