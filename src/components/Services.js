import Card from "./Card";
import test1 from "../assets/test1.jpg"
function Services() {

    const data = [
        {
            title: "Precision Machining",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBQ9EkoU8ata-JhLFcny_rxg_5U5xknUApqQVFXHVbw&s",
            text: "Utilizing advanced CNC machining technologies to produce high-precision components with tight tolerances.Prototyping and Product Development: Collaborating with clients to design and prototype innovative engineering solutions tailored to their specific requirements."
        },
        {
            title: "Fabrication and Welding",
            img: "https://morfabrication.com/wp-content/uploads/2022/09/home-1100x700.jpg",
            text: "Providing expert fabrication and welding services for structural components and assemblies across various industries."
        },
        {
            title: "Assembly and Integration",
            img: "https://evsmetal.com/wp-content/uploads/2020/06/button-assembly.jpg",
            text: "Offering comprehensive assembly and integration services to streamline production processes and ensure seamless functionality."
        },
        {
            title: "Surface Finishing",
            img: "https://sybridge.com/wp-content/uploads/2021/11/Metal-surface-finishing-dark.jpg",
            text: "Enhancing the aesthetic appeal and durability of components through precision surface finishing techniques such as painting, powder coating, and anodizing"
        },
        {
            title: "Quality Assurance",
            img: "https://yuktisolutions.com/Content/Images/bigstock-Business-Technology-Internet-415883038.jpg",
            text: "Implementing rigorous quality control measures throughout the manufacturing process to uphold the highest standards of product quality and reliability."
        },
        {
            title: "Reverse Engineering",
            img: "https://beaulieunormandeau.com/wp-content/uploads/2022/03/reverse-engineering.jpg",
            text: "Reverse engineering existing components to recreate or improve upon them, leveraging cutting-edge technologies and methodologies"
        },
        {
            title: "Consulting and Engineering Support",
            img: "https://content.jdmagicbox.com/comp/def_content/mep-consultants/kt26x78apq-mep-consultants-5-6gvzt-250.jpg",
            text: " Providing expert consulting services and engineering support to assist clients with design optimization, cost reduction, and process improvement initiatives"
        }

    ]

    return (
        <div className="container pt-3 services">
            <h2 className="main-title pt-5 text-center">SERVICES</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row card-aligmnet">
                        {data.map((item, index) => (
                            <div key={index} className="col-md-4  m-0 mb-4">
                                <Card
                                    title={item?.title}
                                    img={item?.img}
                                    text={item?.text}
                                />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Services;
