import React, { useEffect, useMemo, useRef } from "react";

let counter = 0;

const generateId = () => {
  return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};

const DonateButton = () => {
  const buttonRef = useRef(null);
  const buttonId = useMemo(() => `ID-${generateId()}`, []);
  useEffect(() => {
    const button = window.PayPal.Donation.Button({
      env: "production",
      hosted_button_id: "RM9W3A5974QJG",
      image: {
        src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
        alt: "Donate with PayPal button",
        title: "PayPal - The safer, easier way to pay online!",
      },
    });
    button.render(`#${buttonRef.current.id}`); // you can change the code and run it when DOM is ready
  }, []);
  return <div ref={buttonRef} id={buttonId} />;
};

export default DonateButton;
