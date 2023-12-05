import "./Testimonials.css";
import customer1Img from "../../../../assets/customer-1.png";
import customer2Img from "../../../../assets/customer-2.png";
import customer3Img from "../../../../assets/customer-3.png";

const Testimonial = (props) => {
    return (
        <div className="testimonials-section__testimonial">
            <img src={props.img} alt={props.name} />
            <h4>{props.name}</h4>
            <h5>{props.occupation}</h5>
            <p>{props.review}</p>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section id="testimonials-section">
            <div className="testimonials-section__container container">
                <h2>What Customers Say</h2>
                <div className="testimonials-section__testimonials">
                    <Testimonial
                        img={customer1Img}
                        name="William Smith"
                        occupation="Software Engineer"
                        review="Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur excepturi numquam ratione veniam
                            molestias."
                    />

                    <Testimonial
                        img={customer2Img}
                        name="Starla Virgoun"
                        occupation="Financial Advisor"
                        review="Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur excepturi numquam ratione veniam
                            molestias."
                    />

                    <Testimonial
                        img={customer3Img}
                        name="James Steven"
                        occupation="Teacher"
                        review="Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur excepturi numquam ratione veniam
                            molestias."
                    />
                </div>
            </div>
        </section>
    );
};

export { Testimonials };
