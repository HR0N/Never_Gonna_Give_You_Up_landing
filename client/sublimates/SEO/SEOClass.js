import SEOEngineClass from "@/sublimates/SEO/SEOEngineClass";

export default class SEOClass extends SEOEngineClass{


    /*
    * Sets the site encoding | void
    * */
    encoding(charset = "UTF-8") {
        return super.encoding(charset);
    }


    /*
    * Set meta title tag | jsx object
    * */
    title(string) {
        return super.title(string);
    }


    /*
    * Set meta description tag | jsx object
    * */
    description(string) {
        return super.description(string);
    }


    /*
    * Set meta keywords tag | jsx object
    * */
    keywords(keywords) {
        return super.keywords(keywords);
    }


    /*
    * Disable page indexing | jsx object
    * */
    disable_page_index(disable = true) {
        return super.disable_page_index(disable);
    }


    /*
    * Sets the parameters of the site author, copyright, address | jsx object
    * */
    author(author, copyright = '', address = '') {
        return super.author(author, copyright, address);
    }


    /*
    * Prevents ISO devices from formatting phone numbers into a link | jsx object
    * */
    ios_telephone(show = 'no') {
        return super.ios_telephone(show);
    }


    /*
    * Sets the metadata for a link to a social media site | jsx object
    * */
    social_network(title, description, image = this.social_img, locale = 'uk_UA') {
        return super.social_network(title, description, image, locale);
    }


    /*
    * Sets the meta data for a site link on twitter | jsx object
    * */
    twitter(title, description, image, author = this.site_name) {
        return super.twitter(title, description, image, author);
    }


    /*
    * Complex of all mea data | jsx object
    * */
    complex(title, description, keywords, author = this.site_name, locale = 'uk_UA', image = this.social_img) {
        return super.complex(title, description, keywords, author, locale, image);
    }

}