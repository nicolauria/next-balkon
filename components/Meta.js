import Head from 'next/head'

export default function Meta({ title, keywords, description }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="./favicon.ico" />
            <title>{title}</title>
            <link type="text/css" rel="stylesheet" href="../css/reset.css" />
            <link type="text/css" rel="stylesheet" href="../css/plugins.css" />
            <link type="text/css" rel="stylesheet" href="../css/style.css" />
            <link type="text/css" rel="stylesheet" href="../css/yourstyle.css" />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev News',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev'
}