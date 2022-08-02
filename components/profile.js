import QrContact from "./ContacQR/QrContact";
import ProfileStyle from "../styles/profile.module.scss";
const Profile = () => {
  return (
    <div className={ProfileStyle.container}>
      <QrContact />
    </div>
  );
};
export default Profile;
