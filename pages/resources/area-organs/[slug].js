import { getGlobalData } from "../../../lib/api"

export async function getStaticPaths() {
    const paths = await getAllOrganSiteSlugs()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const [globalData, organData] = await Promise.all([
        
    ])
}