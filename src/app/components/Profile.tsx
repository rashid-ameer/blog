import Image from "next/image";
function Profile() {
  return (
    <header className="m-8">
      <Image
        src={"/images/profile.jpg"}
        alt="Rashid Ameer"
        width={150}
        height={150}
        priority={true}
        className="mx-auto rounded-full border-4 border-slate-950"
      />
    </header>
  );
}

export default Profile;
