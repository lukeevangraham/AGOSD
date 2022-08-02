import Link from "next/link";

const NavigationItem = ({ link }) => (
  <>
    {link && link.text ? (
      <Link href={link.url}>
        <a>{link.text}</a>
      </Link>
    ) : null}

  </>
);

export default NavigationItem;
