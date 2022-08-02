import Link from "next/link";
import Image from "next/image";
import style from "./details.module.scss";

const DetailPage = ({ title, discription, images }) => {
  return (
    <>
      <div className={style.detailHeader}>

        <h1> | {title}</h1>

        <div className={style.discription} >
          <h2>
           |  {title}
          </h2>
        <p>{discription}</p>
        </div>
      
      </div>
      <div className={style.container}>
        {(images || []).map((image, index) => {
          return (
            <div key={index} className={style.imgContainer}>
              <Image
              onContextMenu={(e) => e.preventDefault()}
                width={"600px"}
                height={"400px"}
                layout="responsive"
                draggable="false"
        
                src={image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default DetailPage;
