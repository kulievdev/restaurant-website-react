import { Button } from "../../../../design-system/Button/Button";
import "./BusinessHours.css";

const BusinessHours = () => {
    return (
        <section id="hours-section">
            <div class="hours-section__container container">
                <div class="hours-section__background">
                    <div class="hours-section__hours">
                        <h2>We are open from</h2>
                        <h3>Monday - Sunday</h3>
                        <div class="hours-section__lunch-dinner">
                            <p>Launch: Mon-Sun: 11:00am-02:00pm</p>
                            <p>Dinner: Sunday: 04:00pm-08:00pm</p>
                            <p>04:00pm-09:00pm</p>
                        </div>
                        <Button size="lg" color="orange">
                            Order Now
                        </Button>
                        <Button size="lg" color="white">
                            Reservation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { BusinessHours };
