export default class ScrollEngineClass {
    constructor() {
        this.scroll_page_count = 0;
        this.running = true;
    }


    turn_on(){
        if(typeof window === 'undefined') return;
        document.body.style.overflow = "visible";
    }


    turn_off(){
        if(typeof window === 'undefined') return;
        document.body.style.overflow = "hidden";
    }


    scroll_direction(e, bool = true){
        if(bool){
            return e.deltaY > 0;
        }else{
            return e.deltaY > 0 ? 'down' : 'up';
        }
    }


    smart_scroll(e, duration = 600){
        $('.nav-link').on('click', function(e){
            let link = $(e.target).attr('href');
            $('html,body').stop().animate({ scrollTop: $(link).offset().top }, duration);
            e.preventDefault();
        });
    }


    scroll_to(target, duration = 600){
        /*  https://gsgd.co.uk/sandbox/jquery/easing/   */
        /*  npm i easing   */
        $('html,body').stop().animate({ scrollTop: $(target).offset().top }, duration, 'easeInOutQuart');
    }


    scroll_page(e, sections_parent, duration = 600){
        if(!this.running) return;
        this.running = false;

        if(this.scroll_direction(e)){this.scroll_page_count++;}
        else{this.scroll_page_count--;}

        /*  використовуємо ref (ref,current) щоб не звертатися до цілого DOM дерева */
        const sections = sections_parent.current.getElementsByClassName("section");

        if(this.scroll_page_count < 0){this.scroll_page_count = 0;}
        else if(this.scroll_page_count >= sections.length){this.scroll_page_count = sections.length - 1;}

        this.scroll_to(sections[this.scroll_page_count], duration);

        setTimeout(() => {this.running = true}, 600);
    }


    go_to_frame(number, sections_parent, duration = 600){
        this.scroll_page_count = number;
        const sections = sections_parent.current.getElementsByClassName("section");
        this.scroll_to(sections[this.scroll_page_count], 600);
    }


}