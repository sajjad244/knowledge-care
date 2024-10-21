import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 container mx-auto mb-5 border-b-2 ">
      <h1 className="text-2xl font-bold">Knowledge Care</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
