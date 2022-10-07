import { useEffect } from "react";

const DonateButton = () => {
  //   useEffect(() => {
  //     loadAsync(
  //       PayPal.Donation.Button({
  //         env: "production",
  //         hosted_button_id: "RM9W3A5974QJG",
  //         // business: 'YOUR_EMAIL_OR_PAYERID',
  //         image: {
  //           src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
  //           title: "PayPal - The safer, easier way to pay online!",
  //           alt: "Donate with PayPal button",
  //         },
  //         onComplete: function (params) {
  //           // Your onComplete handler
  //         },
  //       }).render("#donate-button")
  //     );
  //   }, []);

  function loadAsync(url, callback) {
    var s = document.createElement("script");
    s.setAttribute("src", url);
    s.onload = callback;
    document.head.insertBefore(s, document.head.firstElementChild);
  }

  return (
    <div>
      {/* <div id="donate-button" /> */}
      <form action="https://www.paypal.com/donate" method="post" target="_blank">
        <input type="hidden" name="hosted_button_id" value="BVC6NV4LE9PX8" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
};

export default DonateButton;
