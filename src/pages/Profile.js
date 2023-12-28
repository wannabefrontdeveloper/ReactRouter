import { useParams } from "react-router-dom";

const data = {
  giwonk: {
    name: "김지원",
    description: "리액트를 좋아하는 개발자",
  },
  pinkmustard: {
    name: "송지우",
    description: "파이썬의 마스터",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
