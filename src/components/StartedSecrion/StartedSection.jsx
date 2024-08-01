import React from "react";

function StartedSection() {
  return (
    <section id="contact" className="get-started section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-between gy-4">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <div className="content">
              <h3>Minus hic non reiciendis ea possimus at quia.</h3>
              <p>
                Rem id rerum. Debitis deserunt quidem delectus expedita ducimus
                dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque
                perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi
                possimus ut delectus dicta.
              </p>
              <p>
                Aliquam velit deserunt autem. Inventore et saepe. Tenetur
                suscipit eligendi labore culpa eos. Deserunt porro magni qui
                necessitatibus dolorem at animi cupiditate.
              </p>
            </div>
          </div>

          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <form action="forms/quote.php" method="post" className="php-email-form rounded">
              <h3>Get a quote</h3>
              <p>
                Vel nobis odio laboriosam et hic voluptatem. Inventore vitae
                totam. Rerum repellendus enim linead sero park flows.
              </p>
              <div className="row gy-3">
                <div className="col-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required=""
                  />
                </div>

                <div className="col-12 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    required=""
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your quote request has been sent successfully. Thank you!
                  </div>

                  <button type="submit">Get a quote</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartedSection;
