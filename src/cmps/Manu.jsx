import logo from "../assets/img/logo.png";
export function Manu() {
  return (
    <div className="manu">
      <img src={logo} className="logo" />
      <li>Home</li>
      <li>Search</li>
      <li>Explore</li>
      <li>Reels</li>
      <li>Message</li>
      <li>Notifications</li>
      <li>Create</li>
      <li>Profile</li>
      <li>More</li>
    </div>
  );
}
