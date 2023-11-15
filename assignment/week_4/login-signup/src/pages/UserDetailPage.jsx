import { useParams } from "react-router-dom";

// 유저에 따른 마이페이지
const UserDetailPage = () => {
  const { userId } = useParams();

  return <div>{userId}</div>;
};

export default UserDetailPage;
