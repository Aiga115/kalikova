import {LawyerCard} from "../components/lawyerCard";
//import Link from 'next/link'
import {useEffect,useState} from "react";
import NextLink from 'next/link';
import i18next from "../i18n/index";
import { useTranslation } from "react-i18next";
import axios from "axios";

export { Link };
function Link({ href, children, ...props }) {
    return (
        <NextLink href={href}>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}

function Team() {

    const [employees,setEmployees] = useState([]);

    const { t, i18n } = useTranslation();
    const id = 1

    const [initlanguage, setInitLanguage] = useState("ru")
  
  useEffect(()=>{
    setInitLanguage(localStorage.getItem("i18nextLng"));
    axios.get(`http://188.166.40.167/${initlanguage}/employees/`).then((res) => {
      setEmployees(res.data);
    })
  },[])

  useEffect(() => {
    let res = t("navbar.about")=="About us"?"en":"ru";
    console.log("Result is: "+res)
    setInitLanguage(res);
    console.log("init "+initlanguage)
    axios.get(`http://188.166.40.167/${res}/employees/`).then((res) => {
      setEmployees(res.data)
    })
  }, [t]);
    return (
        <div className="team">
            <div className="team-info container">
                <p className="team-info__title">{t("teams-related.subtitle")}</p>
                <div className="team-info-cont">
                    <p className="team-info-cont__text">{t("teams-related.text1")}
                    </p>
                    <img src="/sliderBackground.jpeg" alt="picture" className="team-info-cont__img"/>
                    <p className="team-info-cont__text">
                        {t("teams-related.text2")}
                    </p>
                </div>
            </div>
            <div className="team-lawyerList">
            {employees.map((employee)=>(

            <Link href={`/employee/${employee.id}`}><div key={employee.id} className="lawyer">
             <div className="lawyer-img">
                 <img src={employee.image} alt="photo" className="lawyer-img__elem"/>
             </div>
             <div className="lawyer-info">
                 <p className="lawyer-info__post">
                     {employee.position}
                 </p>
                 <p className="lawyer-info__name">
                     {employee.name} {employee.surname}
                 </p>
             </div>
         </div>
         </Link>
        ))}
            </div>
        </div>
    );
}

export default Team;




// export const getStaticProps = async () => {
    
//     const res = await fetch(`http://188.166.40.167/ru/employees/`);
//     const data = await res.json();
//     return {
//       props: { employees: data },
//     };
//   };