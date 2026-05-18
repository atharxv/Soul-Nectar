"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function DatenschutzContent() {
  const { language } = useLanguage();

  if (language === 'en') {
    return (
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
        {/* H1 */}
        <h1 style={{
          fontFamily: "var(--font-caudex)",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          color: "var(--text-primary)",
          marginBottom: "3rem",
          lineHeight: 1.15
        }}>
          Privacy Policy
        </h1>

        {/* Section 1 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            1. Data Protection at a Glance
          </h2>
          
          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            General Information
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Data collection on this website
          </h3>
          
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
            Who is responsible for the data collection on this website?
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The data processing on this website is carried out by the website operator. You can find their contact details in the section "Information on the responsible party" in this privacy policy.
          </p>

          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
            How do we collect your data?
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Your data is collected on the one hand when you communicate it to us. This could be data that you enter into a contact form, for example.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Other data is collected automatically or after your consent when you visit the website by our IT systems. These are primarily technical data (e.g. internet browser, operating system or time of the page request). This data is collected automatically as soon as you enter this website.
          </p>

          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
            What do we use your data for?
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Part of the data is collected to ensure that the website is provided without errors. Other data can be used to analyze your user behavior.
          </p>

          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
            What rights do you have regarding your data?
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            You can contact us at any time regarding this or other questions on the subject of data protection.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 2 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            2. Hosting and Content Delivery Networks (CDN)
          </h2>
          
          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            External Hosting
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            This website is hosted by an external service provider (hoster). Personal data collected on this website is stored on the servers of the hoster. These may include, but are not limited to, IP addresses, contact requests, metadata and communications, contract data, contact details, names, website access, and other data generated through a website.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The hoster is used for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 Para. 1 lit. b GDPR) and in the interest of a secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 Para. 1 lit. f GDPR).
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Our hoster will only process your data to the extent necessary to fulfill its performance obligations and will follow our instructions with respect to this data.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            We use the following hoster:
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Jimdo
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 3 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            3. General Notes and Mandatory Information
          </h2>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Data Protection
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            We would like to point out that data transmission over the Internet (e.g., when communicating by email) can have security gaps. Complete protection of data against access by third parties is not possible.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Information on the responsible party
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The responsible party for data processing on this website is:
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Nicole-Marina Hötzel<br />
            Beim Schnarrbrunnen 15<br />
            86150 Augsburg
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g. names, e-mail addresses, etc.).
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Storage duration
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for the data processing no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Information on data transfer to the USA and other third countries
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Our website uses tools from companies based in the USA or other third countries that are not secure under data protection law. If these tools are active, your personal data may be transferred to these third countries and processed there. We would like to point out that a level of data protection comparable to that in the EU cannot be guaranteed in these countries. For example, US companies are obliged to release personal data to security authorities without you as the data subject being able to take legal action against this. It can therefore not be ruled out that US authorities (e.g. intelligence agencies) process, evaluate, and permanently store your data located on US servers for monitoring purposes. We have no influence on these processing activities.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Revocation of your consent to data processing
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Right to object to data collection in special cases and to direct advertising (Art. 21 GDPR)
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem", textTransform: "uppercase" }}>
            IF DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR CONCERNED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR).
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem", textTransform: "uppercase" }}>
            IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT ADVERTISING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT ADVERTISING (OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Right of appeal to the competent supervisory authority
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work, or the place of the alleged violation. The right of appeal is without prejudice to other administrative or judicial remedies.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Right to data portability
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done insofar as it is technically feasible.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            SSL or TLS encryption
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Information, deletion, and correction
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipient, and the purpose of data processing and, if applicable, a right to correct or delete this data at any time. You can contact us at any time regarding this or other questions on the subject of personal data.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Right to restriction of processing
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:
          </p>
          <ul style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem", paddingLeft: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the review, you have the right to request the restriction of the processing of your personal data.</li>
            <li style={{ marginBottom: "0.5rem" }}>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
            <li style={{ marginBottom: "0.5rem" }}>If we no longer need your personal data, but you need it to exercise, defend, or assert legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.</li>
            <li style={{ marginBottom: "0.5rem" }}>If you have filed an objection pursuant to Art. 21 Para. 1 GDPR, a balance must be struck between your interests and ours. As long as it is not yet clear whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
          </ul>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            If you have restricted the processing of your personal data, this data - apart from its storage - may only be processed with your consent or for the establishment, exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 4 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            4. Data Collection on This Website
          </h2>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Cookies
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Our internet pages use so-called "cookies". Cookies are small text files and do not cause any damage to your end device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your end device. Session cookies are automatically deleted after your visit. Permanent cookies remain stored on your end device until you delete them yourself or an automatic deletion is carried out by your web browser.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            In some cases, cookies from third-party companies can also be stored on your end device when you enter our site (third-party cookies). These enable us or you to use certain services of the third-party company (e.g. cookies for processing payment services).
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Cookies have various functions. Numerous cookies are technically necessary, as certain website functions would not work without them (e.g. the shopping cart function or the display of videos). Other cookies are used to evaluate user behavior or to display advertising.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Cookies that are required to carry out the electronic communication process (necessary cookies) or to provide certain functions you desire (functional cookies, e.g. for the shopping cart function) or to optimize the website (e.g. cookies to measure the web audience) are stored on the basis of Art. 6 Para. 1 lit. f GDPR, unless another legal basis is specified. The website operator has a legitimate interest in storing cookies for the technically error-free and optimized provision of its services. If consent to the storage of cookies has been requested, the storage of the relevant cookies takes place exclusively on the basis of this consent (Art. 6 Para. 1 lit. a GDPR); the consent can be revoked at any time.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be restricted.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            If cookies are used by third-party companies or for analysis purposes, we will inform you about this separately within the framework of this privacy policy and, if necessary, request your consent.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Inquiries by Email, Telephone, or Fax
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            If you contact us by email, telephone, or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of processing your request. We do not pass this data on without your consent.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The processing of this data is based on Art. 6 Para. 1 lit. b GDPR, if your request is related to the fulfillment of a contract or is necessary for the execution of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 Para. 1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this was requested.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The data sent by you to us via contact requests will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory statutory provisions - in particular statutory retention periods - remain unaffected.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Communication via WhatsApp
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            For communication with our customers and other third parties, we use, among other things, the instant messaging service WhatsApp. The provider is WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Communication takes place via end-to-end encryption (peer-to-peer), which prevents WhatsApp or other third parties from gaining access to the communication content. However, WhatsApp gains access to metadata created in the course of the communication process (e.g., sender, recipient, and time). We also point out that WhatsApp, according to its own statement, shares personal data of its users with its US-based parent company Facebook. Further details on data processing can be found in the WhatsApp privacy policy at:<br />
            <a
              href="https://www.whatsapp.com/legal/#privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              https://www.whatsapp.com/legal/#privacy-policy
            </a>
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The use of WhatsApp is based on our legitimate interest in communicating as quickly and effectively as possible with customers, interested parties, and other business and contractual partners (Art. 6 Para. 1 lit. f GDPR). If a corresponding consent was requested, data processing is carried out exclusively on the basis of the consent; this can be revoked at any time with effect for the future.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The communication content exchanged between and on WhatsApp remains with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory statutory provisions - in particular retention periods - remain unaffected.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 5 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            5. Newsletter
          </h2>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Newsletter Data
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            If you would like to receive the newsletter offered on the website, we require an e-mail address from you as well as information that allows us to verify that you are the owner of the provided e-mail address and that you agree to receive the newsletter. No further data is collected or is only collected on a voluntary basis. We use this data exclusively for sending the requested information and do not pass it on to third parties.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The processing of the data entered into the newsletter registration form takes place exclusively on the basis of your consent (Art. 6 Para. 1 lit. a GDPR). You can revoke your consent to the storage of the data, the e-mail address, and its use for sending the newsletter at any time, for example via the "unsubscribe" link in the newsletter. The legality of the data processing operations that have already taken place remains unaffected by the revocation.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The data deposited with us for the purpose of receiving the newsletter will be stored by us or the newsletter service provider until you unsubscribe from the newsletter and will be deleted from the newsletter distribution list after you unsubscribe from the newsletter or after the purpose has ceased to exist. We reserve the right to delete or block email addresses from our newsletter distribution list at our own discretion within the scope of our legitimate interest in accordance with Art. 6 Para. 1 lit. f GDPR.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            After you have been removed from the newsletter distribution list, your e-mail address may be stored in a blacklist by us or the newsletter service provider in order to prevent future mailings. The data from the blacklist is only used for this purpose and is not merged with other data. This serves both your interest and our interest in complying with legal requirements when sending newsletters (legitimate interest within the meaning of Art. 6 Para. 1 lit. f GDPR). The storage in the blacklist is not time-limited. You can object to the storage if your interests outweigh our legitimate interest.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

        {/* Section 6 */}
        <section style={{ marginBottom: "var(--space-lg)" }}>
          <h2 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            marginBottom: "var(--space-md)"
          }}>
            6. Audio and Video Conferences
          </h2>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Data Processing
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            For communication with our customers, we use, among other things, online conference tools. The specific tools we use are listed below. If you communicate with us by video or audio conference via the Internet, your personal data will be collected and processed by us and the provider of the respective conference tool.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The conference tools record all data that you provide/use to use the tools (e-mail address and/or your telephone number). Furthermore, the conference tools process the duration of the conference, start and end (time) of participation in the conference, number of participants, and other "context information" in connection with the communication process (metadata).
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Furthermore, the provider of the tool processes all technical data required for handling online communication. This includes in particular IP addresses, MAC addresses, device IDs, device type, operating system type and version, client version, camera type, microphone or speaker, as well as the type of connection.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            If content is exchanged, uploaded, or made available in any other way within the tool, this is also stored on the servers of the tool providers. Such content includes in particular cloud recordings, chat/instant messages, voicemails, uploaded photos and videos, files, whiteboards, and other information shared while using the service.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Please note that we do not have complete influence over the data processing operations of the tools used. Our options are largely determined by the corporate policy of the respective provider. Further information on data processing by the conference tools can be found in the privacy policies of the tools used, which we have listed below this text.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Purpose and Legal Bases
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The conference tools are used to communicate with prospective or existing contractual partners or to offer certain services to our customers (Art. 6 Para. 1 lit. b GDPR). Furthermore, the use of the tools serves to generally simplify and accelerate communication with us or our company (legitimate interest within the meaning of Art. 6 Para. 1 lit. f GDPR). If consent has been requested, the relevant tools are used on the basis of this consent; the consent can be revoked at any time with effect for the future.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Storage Duration
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            The data collected directly by us via the video and conference tools will be deleted from our systems as soon as you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies. Stored cookies remain on your end device until you delete them. Mandatory legal retention periods remain unaffected.
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            We have no influence on the storage duration of your data that is stored by the operators of the conference tools for their own purposes. For details, please inform yourself directly with the operators of the conference tools.
          </p>

          <h3 style={{
            fontFamily: "var(--font-josefin)",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginTop: "var(--space-md)",
            marginBottom: "1rem"
          }}>
            Conference Tools Used
          </h3>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            We use the following conference tools:
          </p>
          
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
            Zoom
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            We use Zoom. The provider of this service is Zoom Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113, USA. Details on data processing can be found in Zoom's privacy policy:<br />
            <a
              href="https://zoom.us/de-de/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              https://zoom.us/de-de/privacy.html
            </a>
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            Data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here:<br />
            <a
              href="https://zoom.us/de-de/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              https://zoom.us/de-de/privacy.html
            </a>
          </p>
          
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
            Skype for Business
          </p>
          <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
            We use Skype for Business. The provider is Skype Communications SARL, 23-29 Rives de Clausen, L-2165 Luxembourg. Details on data processing can be found in Skype's privacy policy:<br />
            <a
              href="https://privacy.microsoft.com/de-de/privacystatement/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
              onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
            >
              https://privacy.microsoft.com/de-de/privacystatement/
            </a>
          </p>
        </section>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
      {/* H1 */}
      <h1 style={{
        fontFamily: "var(--font-caudex)",
        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        color: "var(--text-primary)",
        marginBottom: "3rem",
        lineHeight: 1.15
      }}>
        Datenschutzerklärung
      </h1>

      {/* Section 1 */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1.2rem",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          1. Datenschutz auf einen Blick
        </h2>
        
        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Allgemeine Hinweise
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Datenerfassung auf dieser Website
        </h3>
        
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
        </p>

        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Wie erfassen wir Ihre Daten?
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>

        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Wofür nutzen wir Ihre Daten?
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>

        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 2 */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1.2rem",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          2. Hosting und Content Delivery Networks (CDN)
        </h2>
        
        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Externes Hosting
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wir setzen folgenden Hoster ein:
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Jimdo
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 3 */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1.2rem",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          3. Allgemeine Hinweise und Pflichtinformationen
        </h2>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Datenschutz
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Hinweis zur verantwortlichen Stelle
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Nicole-Marina Hötzel<br />
          Beim Schnarrbrunnen 15<br />
          86150 Augsburg
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Speicherdauer
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Auf unserer Website sind unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten eingebunden. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z.B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem", textTransform: "uppercase" }}>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem", textTransform: "uppercase" }}>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Recht auf Datenübertragbarkeit
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          SSL- bzw. TLS-Verschlüsselung
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Auskunft, Löschung und Berichtigung
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Recht auf Einschränkung der Verarbeitung
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
        </p>
        <ul style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          <li style={{ marginBottom: "0.5rem" }}>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
          <li style={{ marginBottom: "0.5rem" }}>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          <li style={{ marginBottom: "0.5rem" }}>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        </ul>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 4 */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1.2rem",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          4. Datenerfassung auf dieser Website
        </h2>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Cookies
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Anfrage per E-Mail, Telefon oder Telefax
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Kommunikation via WhatsApp
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs entstehen (z.B. Absender, Empfänger und Zeitpunkt). Wir weisen ferner darauf hin, dass WhatsApp nach eigener Aussage, personenbezogene Daten seiner Nutzer mit seiner in den USA ansässigen Konzernmutter Facebook teilt. Weitere Details zur Datenverarbeitung finden Sie in der Datenschutzrichtlinie von WhatsApp unter:<br />
          <a
            href="https://www.whatsapp.com/legal/#privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            https://www.whatsapp.com/legal/#privacy-policy
          </a>
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven Kommunikation mit Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Datenverarbeitung ausschließlich auf Grundlage der Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft widerrufbar.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die zwischen und auf WhatsApp ausgetauschten Kommunikationsinhalte verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 5 */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1.2rem",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          5. Newsletter
        </h2>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Newsletterdaten
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, um künftige Mailings zu verhindern. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "var(--space-lg)" }} />

      {/* Section 6 */}
      <section style={{ marginBottom: "var(--space-lg)" }}>
        <h2 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "1.2rem",
          color: "var(--text-primary)",
          marginBottom: "var(--space-md)"
        }}>
          6. Audio- und Videokonferenzen
        </h2>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Datenverarbeitung
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Für die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige „Kontextinformationen" im Zusammenhang mit dem Kommunikationsvorgang (Metadaten).
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abwicklung der Online-Kommunikation erforderlich sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und andere Informationen, die während der Nutzung des Dienstes geteilt werden.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils eingesetzten Tools, die wir unter diesem Text aufgeführt haben.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Zweck und Rechtsgrundlagen
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Speicherdauer
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gelöscht, sobald Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.
        </p>

        <h3 style={{
          fontFamily: "var(--font-josefin)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          marginTop: "var(--space-md)",
          marginBottom: "1rem"
        }}>
          Eingesetzte Konferenz-Tools
        </h3>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wir setzen folgende Konferenz-Tools ein:
        </p>
        
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Zoom
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wir nutzen Zoom. Anbieter dieses Dienstes ist die Zoom Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113, USA. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Zoom:<br />
          <a
            href="https://zoom.us/de-de/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            https://zoom.us/de-de/privacy.html
          </a>
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:<br />
          <a
            href="https://zoom.us/de-de/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            https://zoom.us/de-de/privacy.html
          </a>
        </p>
        
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Skype for Business
        </p>
        <p style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
          Wir nutzen Skype for Business. Anbieter ist Skype Communications SARL, 23-29 Rives de Clausen, L-2165 Luxembourg. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Skype:<br />
          <a
            href="https://privacy.microsoft.com/de-de/privacystatement/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-olive-light)", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}
          >
            https://privacy.microsoft.com/de-de/privacystatement/
          </a>
        </p>
      </section>
    </div>
  );
}
