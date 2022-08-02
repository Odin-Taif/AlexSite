import Image from "next/image";
import Link from "next/link";
import QrSocialMedia from "../Contact";

const QrContact = () => {
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
      <QrSocialMedia></QrSocialMedia>
    </section>
  );
};

export default QrContact;
