import ProductsCard from "./ProductsCard";
import test1 from "../assets/test1.jpg"
function Products() {

    const data = [
        {
            img: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t1.6435-9/118167331_151273389945368_7811081685597498720_n.jpg?stp=dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=ieAUD2TJldYAX9a5bbo&_nc_ht=scontent.fmaa14-1.fna&oh=00_AfDXVi3Cz6b-i4vXfPiZ-I1nyYq--CrAG4hqHRelBBMpqA&oe=65FA4495",
        },
        {
            img: "http://5.imimg.com/data5/NSDMERP/Default/2022/10/HL/MW/SB/73061864/broching-fullare-1667024661409-500x500.jpg",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjukg3iM8FWR_CPZduudHLfxx1o6sPT4vSIkJ1ElS9xj4XdrO",
        },
        {
            img: "https://www.cgtk.co.uk/metalwork/minilathe/lanternchuck/images/lanternpieces.jpg",
        },
        {
            img: "https://steinkugelventile.de/wp-content/uploads/r06bz2c.jpg",
        },
        {
            img: "https://www.woodstockindustrial.com/images/m1101.jpg",
        }, {
            img: "https://5.imimg.com/data5/SELLER/Default/2023/8/337999972/OT/BW/ID/195238395/mild-steel-heat-insulation-plates-500x500.jpg"
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2023/4/298188095/XQ/ES/JO/984762/packaging-machine-parts-500x500.jpeg"
        },
        {
            img: "https://labworkmoto.com/cdn/shop/products/Primary-Drive-Clutch-Fits-For-10-14-Polaris-Ranger-800-Shaft-Size-29-5mm-one-way-LAB-WORK-MOTO-44.webp?v=1673359000"
        }
    ]
    return (
        <div className="container pt-3 products">
            <h2 className="main-title pt-5 text-center">PRODUCTS</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row card-aligment ">
                        {data.map((item, index) => (
                            <div key={index} className="col-md-4 m-0 mb-4">
                                <ProductsCard
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
