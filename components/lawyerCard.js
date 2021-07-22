
export const getStaticProps = async () => {

    const res = await fetch(`http://188.166.40.167/ru/employees/`);
    const data = await res.json();
    return {
      props: { employees: data },
    };
  
    console.log("Our data: " + data);
  };

export const LawyerCard = ({employees}) => {
    return (
        <>
        {employees.map((employee)=>(
             <div key={employee.id} className="lawyer">
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
        ))}
        </>
       
    );
};