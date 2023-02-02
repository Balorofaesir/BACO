/* eslint-disable react/jsx-curly-brace-presence */
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/SignUpModal/loginmodalSlice";
import "./TermsAndConditions.css";

const Terms = () => {
  const dispatch = useDispatch();
  return (
    <div className="termsOfService__global">
      <div className="termsOfService__container">
        <h1 className="termsOfService__title">TERMS AND CONDITIONS</h1>
        <p className="termsOfService__subtitle">
          Website Terms and Conditions of Use Relating to www.mebid.com
        </p>
        <p className="termsOfService__paragraph">
          TERMS AND CONDITIONS. By using the https://baco.com/ website, you
          represent and agree that you have carefully read, understood, agree to
          abide by, and are legally bound by these Terms and Conditions, which
          constitute a legally binding contract between you and BACO. It will be
          understood as acceptance of the Terms and Conditions i) continue
          browsing this website, and the processing of personal data is
          expressly authorized; ii) provide data and comply with the
          requirements to register as a client. Please read these Terms and
          Conditions carefully before using the services offered on this
          website, as they contain important information about your rights and
          duties as a BACO customer. You, as a user and client of BACO,
          undertake to regularly visit the website to read if there are any
          changes to the Terms and Conditions, since these may be modified
          without prior notice, and will be applicable from the moment of their
          publication on this Web page. If you do not agree to be bound by any
          current or future Terms and Conditions, you must refrain from using or
          accessing the Website.
        </p>

        <p className="termsOfService__subtitle">
          Acceptance of terms and conditions
        </p>
        <p className="termsOfService__paragraph">
          If you browse and buy on the website https://baco.com/, you are
          accepting the terms and conditions referred to herein, and those
          regulations applicable to the relationship that exists between BACO
          and you.
        </p>
        <p className="termsOfService__subtitle">Intellectual property</p>
        <p className="termsOfService__paragraph">
          The brands, trade names, banners, graphics, images, sounds, music,
          videos, and other intellectuals are the exclusive property of BACO.
          These are registered with the competent authority and are subject to
          the regulation of intellectual property rights protected by the
          Colombian legislation and other international norms and/or conventions
          that regulate the matter. Use of cookies In accordance with the
          legislation on protection of personal data, Law 1581 of 2012 and
          Decree 1377 of 2013, and other regulations that modify, add or replace
          them, we inform that BACO., on its website: https://baco.com/ They can
          use both their own and third-party cookies for various purposes. A
          cookie are small information files that are downloaded to the{" "}
          {"user's"} computer, Smartphone or Tablet when accessing certain web
          pages to store and retrieve data on the navigation that is carried out
          from said equipment. Through cookies, web pages collect information
          about the user&#39s visit, which allows a better and safer browsing
          experience to be provided. Cookies are associated both with anonymous
          users, that is, those who visit the Portals without identifying or
          registering, and those who do. BACO may share information obtained
          through cookies with external persons or third parties (allies,
          clients, suppliers or companies), in order to improve user services.
          Likewise, the information received through cookies will be used by
          BACO and the aforementioned third parties, for the following purposes:
          <br />
          1.Know the interests of the public interested in BACO products.
          <br />
          2.To collect information about preferences of BACO products.
          <br />
          3. To develop proposals and offers according to the tastes of{" "}
          {"BACO'S"} customers.
          <br />
          4. To collect relevant information about consumer interest in{" "}
          {"BACO'S"} products and website.
          <br />
        </p>
        <p className="termsOfService__subtitle">Cookies</p>
        <p className="termsOfService__paragraph">
          BACO will collect as many cookies as possible to improve the
          experience of its customers and users; therefore, when accessing the
          website https://baco.com/, the user allows the use of all types of
          cookies by and in favor of BACO.
        </p>
        <p className="termsOfService__subtitle">
          Personal data processing authorization
        </p>
        <p className="termsOfService__paragraph">
          The client declares that he has read, understood and accepted{" "}
          {"BACO'S"} personal data processing policy, which is available at the
          following link: (https://baco.com/pages/politicas), and has been
          informed on the answers to questions about sensitive data or about
          data of girls, boys and adolescents; about the rights that assist them
          as the owner of the data, and the channels enabled by the company to
          exercise their rights as the owner of personal. The data supplied by
          the client and/or will be processed for the purpose of developing the
          activities of the corporate purpose and the administrative development
          of the BACO company, especially for billing purposes; to comply with
          the tax requirements established in Colombian law; to contact the
          client for their own and exclusive purposes of the contractual and
          commercial relationship that has begun between the parties; to carry
          out customer behavior analysis processes in order to define
          consumption habits with the aim of improving the customer experience
          with BACO brands; to have a customer record; to contact customers or
          future customers through different channels (email, physical mail,
          through the call center, etc.) for collection or legal purposes, if
          applicable, and to receive, attend to, and resolve requests,
          complaints, complaints and/or suggestions submitted by customers.
          Consequently, you fully authorize the company BACO, to process the
          personal data provided in accordance with what is established here
          with the purchase, registration or any other action.
        </p>
        <div className="termsOfService__agree">
          <h4 className="termsOfService__agree--title">
            Agree to the <span>Terms of Service</span> and I read the Privacy
            Notice.
          </h4>
          <button
            className="termsOfService__btn"
            type="submit"
            onClick={() => dispatch(closeModal())}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
