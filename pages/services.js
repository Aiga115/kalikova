export const getStaticProps = async () => {

    const res = await fetch(`http://188.166.40.167/ru/services/`);
    const data = await res.json();
    return {
      props: { services: data },
    };
  };


function Service(){

    return (
        <>
         {services.map((service)=>(
             <div className="links">
                <Link href={`/services/${id}`} key={service.id} className="link">{service.title}</Link>
           </div>
         ))}
        
        </>
    )
}
export default Service