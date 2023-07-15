import React from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default class SEOEngineClass {
    constructor(reports = false) {
        this.log_reports = reports;
        this.site_name = 'Next Laravel Template';
        this.social_img = 'https://client.evilcode.space/_next/static/media/NLT-logo.6c02946a.png';
    }


    encoding(charset = "UTF-8"){
        return (<meta charSet={charset} />)
    }


    title(string){
        const count = string.length;
        const min_length = 70;
        const max_length = 80;

        if(this.log_reports){
            count < min_length && console.warn(`The number of characters for this title is less than the recommended value (${min_length} characters).`);
            count > max_length && console.warn(`The number of characters for this title is greater than the recommended value (${max_length} characters).`);
        }

        return (<title>{string}</title>);
    }


    description(string){
        const count = string.length;
        const min_length = 160;
        const max_length = 170;
        const total_max_length = 300;

        if(this.log_reports){
            (count < min_length || count > max_length) && console.warn(`The number of characters for this description does not match the recommended range (${min_length} - ${max_length} characters).`);
            count > total_max_length && console.error(`The number of characters in this description exceeds the maximum allowed value (${total_max_length}).`);
        }

        return (<meta name="description" content={string} />);
    }


    /*
    * examples:
    * wrong: children's shoes, sale of children's shoes, buy children's shoes, price of children's shoes.
    * correct: footwear, children's, buy, price, sale.
    * */
    keywords(keywords){
        let split = keywords.split(' ');

        if(this.log_reports){
            split.length > 20 && console.warn(`It is not recommended to use more than 20 words in this meta tag`);
        }

        return (<meta name="keywords" content={keywords} />);
    }


    disable_page_index(disable = true){
        return disable ? (<meta name="robots" content="none" />) : false;
    }


    author(author, copyright = '', address = ''){
        return (
            <>
                {author && <meta name="Author" content={author} />}
                {copyright && <meta name="Copyright" content={copyright} />}
                {address && <meta name="Address" content={address} />}
            </>
        )
    }


    ios_telephone(show = 'no'){
        return (<meta name="format-detection" content={`telephone=${show}`} />);
    }


    social_network(title, description, image = this.social_img, locale = 'uk_UA'){
        const ru_locale = 'ru_RU';
        return (
            <>
                {/* site localization */}
                <meta property="og:locale" content={locale} />
                {/* content type, default is article */}
                <meta property="og:type" content="article" />
                {/* the title of the page that will be displayed in the post of the social network */}
                <meta property="og:title" content={title} />
                {/* page description */}
                <meta property="og:description" content={description} />
                {/* link to the image that will be published in the post */}
                <meta property="og:image" content={image} />
                {/* link to current page */}
                {typeof window !== 'undefined' && <meta property="og:url" content={window.location.href} />}
                {/* Name of the site */}
                <meta property="og:site_name" content={this.site_name} />
            </>
        );
    }


    twitter(title, description, image, author = this.site_name){
        return (
            <>
                {/* Map type, summary is used by default */}
                <meta name="twitter:card" content="summary" />
                {/* Name/login of the author */}
                <meta name="twitter:site" content={author} />
                {/* Page title */}
                <meta name="twitter:title" content={title} />
                {/* Page description */}
                <meta name="twitter:description" content={description} />
                {/* Image link */}
                <meta name="twitter:image" content={image} />
            </>
        );
    }


    complex(title, description, keywords, author = this.site_name, locale = 'uk_UA', image = this.social_img){
        return (
            <>
                {this.encoding()}
                {this.title(title)}
                {this.description(description)}
                {this.keywords(keywords)}
                {this.ios_telephone()}
                {this.social_network(title, description, image, locale)}
                {this.twitter(title, description, image, author)}
            </>
        )
    }


}