import "./Reservation.css";
import reservationImg from "../../../../assets/reservation.png";

const Reservation = () => {
    return (
        <section id="reservation-section">
            <div className="reservation-section__container container">
                <figure className="reservation-section__left">
                    <img src={reservationImg} alt="People gathering for food" />
                </figure>
                <div className="reservation-section__right">
                    <h2>
                        Let's reserve <span>a table</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam
                    </p>
                    <button className="btn btn-lg btn-orange">
                        Reservation
                    </button>
                </div>
            </div>
        </section>
    );
};

export { Reservation };
