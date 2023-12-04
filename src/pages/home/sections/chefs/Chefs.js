import "./Chefs.css";
import chef1 from "../../../../assets/betran.png";
import chef2 from "../../../../assets/ferry.png";
import chef3 from "../../../../assets/iswan.png";

const Chefs = () => {
    return (
        <section id="chefs-section">
            <div className="chefs-section__container container">
                <h2>
                    Our Greatest <span>Chefs</span>
                </h2>
                <div className="chefs-section__chefs">
                    <div className="chefs-section__chef">
                        <img src={chef1} alt="Betran Chef" />
                        <h4>Betran Komar</h4>
                        <p>Head Chef</p>
                    </div>
                    <div className="chefs-section__chef">
                        <img src={chef2} alt="Ferry Chef" />
                        <h4>Ferry Sauwi</h4>
                        <p>Chef</p>
                    </div>
                    <div className="chefs-section__chef">
                        <img src={chef3} alt="Iswan Chef" />
                        <h4>Iswan Dracho</h4>
                        <p>Chef</p>
                    </div>
                </div>
                <button className="btn btn-lg btn-orange">View All</button>
            </div>
        </section>
    );
};

export { Chefs };
