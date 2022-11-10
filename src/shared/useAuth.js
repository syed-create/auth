import { useSelector } from "react-redux";

const useAuth = () => {
	const userSlice = useSelector(state => state.userSlice);
	const isLoggedIn = !!userSlice.token.token;
	return isLoggedIn;
};
export default useAuth;
