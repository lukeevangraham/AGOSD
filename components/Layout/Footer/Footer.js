import Link from "next/link"
import classes from "./Footer.module.scss"

const Footer = () => (
    <div className={classes.Footer}>
        <div>American Guild of Organists, San Diego Chapter</div>
        <div className={classes.Footer__UsefulLinks}>
            <div>Useful Links</div>
            <ul>
                <li> <Link href="/join"><a> &rsaquo; Join</a></Link></li>
            </ul>
        </div>
    </div>
)

export default Footer;