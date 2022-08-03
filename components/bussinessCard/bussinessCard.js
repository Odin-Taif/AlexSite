import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../socialmedia/socialmedia";

const BussinessCard = () => {
  return (
    <section className="container">
      <article className="person">
        <Link href="/">
          <span>
            <Image
              width="90px"
              height="90px"
              src="/Assests/alexAssets/alex-tattos=1.webp"
            />
          </span>
        </Link>
        <div>
          <h2>Artinote</h2>
          <p>Artist</p>
        </div>
      </article>
      <SocialMedia></SocialMedia>
    </section>
  );
};

export default BussinessCard;
