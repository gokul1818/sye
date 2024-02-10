import Card from "./Card";
import test1 from "../assets/test1.jpg"
function Products() {

    const data = [
        {
            title: "Web Development",
            img: test1,
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia"
        },
        {
            title: "Web Development",
            img: test1,
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia"
        },
        {
            title: "Web Development",
            img: test1,
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia"
        },
        {
            title: "Web Development",
            img: test1,
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia"
        },
        {
            title: "Web Development",
            img: test1,
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia"
        },
        {
            title: "Web Development",
            img: test1,
            text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia"
        }
    ]
    return (
        <div className="container pt-3 products">
            <h2 className="main-title pt-5 text-center">PRODUCTS</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row d-flex justify-content-around align-items-center">
                        {data.map((item, index) => (
                            <div key={index} className="col-md-3 mb-4">
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
export default Products;
