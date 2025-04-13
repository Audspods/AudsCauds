import React from "react";

const Contact= () => {
    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
            <h2>send me a message</h2>
            <form
                action="https://formspree.io/f/mrbpjvzb"
                method="POST"
            >
            <label>
                Your Email:
                <input type ="email" name="email"/>
            </label>
            <label>
                Your Message:
                <textarea name="message"/>
            </label>
            <button type="submit" style={{ padding: "10px 20px"}}>Send</button>
        </form>
        </div>
    );
};

export default Contact;