// export const getStaticProps = async () => {
//   const res = await fetch(`http://188.166.40.167/ru/industries/`);
//   const data = await res.json();
//   return {
//     props: { industries: data },
//   };
// };
import {useState,useEffect} from "react";
import axios from "axios";
function Industry() {

  const [industries,setIndustries] = useState([]);
  const lang= localStorage.getItem("i18nextLng");
  useEffect(()=>{
    axios.get(`http://188.166.40.167/${lang}/industries/`)
    .then((res)=>{
      setIndustries(res.data);
    })

  },[])

  return (
    <>
      {industries.map((industry) => (
        <div className="links">
          <Link
            href={`/industry/${industry.id}`}
            key={industry.id}
            className="link"
          >
            {industry.title}
          </Link>
        </div>
      ))}
    </>
  );
}
export default Industry;
