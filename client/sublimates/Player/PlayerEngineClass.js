// #docs 1 - https://www.w3schools.com/tags/ref_av_dom.asp

export class PlayerEngineClass {
    constructor() {
        this.player = null;
        this.volume = .5;
        this.unmute_volume = 0;
        this.autoplay = true;
        this.playing = false;
        this.interval = null;
        this.mutted = false;
        this.is_interval_working = false;
    }

    init_player(cb){
        if(typeof window !== 'undefined'){
            this.player = new Audio();
            this.player.addEventListener('ended', () => {
                console.log('ended');
                this.playing = false;
                this.is_interval_working = false;
                cb();
            });
        }
    }


    play(cb) {
        this.playing = true;
        this.player.play();
        this.interval_func(cb);
    }

    pause() {
        this.playing = false;
        this.is_interval_working = false;
        this.player.pause();
        clearInterval(this.interval);
    }

    stop() {
        this.currentTime(0);
        this.pause();
    }

    toggle_play_pause() {
        this.playing = !this.playing;
        this.playing ? this.play() : this.pause();
    }

    load() {
        this.player.load();
    }

    duration() {
        return Math.round(this.player.duration);
    }

    currentTime(curTime = null) {
        if(curTime !== null){
            this.player.currentTime = curTime;
        }
        return Math.round(this.player.currentTime);
    }

    set_volume(vol) {   // value 0 - 100
        this.volume = vol / 100;
        this.player.volume = this.volume;
    }

    mute(volume, setVolume) {
        this.mutted = true;
        this.unmute_volume = volume;
        setVolume(0);
    }

    unmute(setVolume) {
        this.mutted = false;
        setVolume(this.unmute_volume);
    }

    toggle_mute(volume, setVolume) {
        if(this.mutted){ this.unmute(setVolume) }
        else{ this.mute(volume, setVolume) }
    }

    autoplay_function(val = true) {
        this.autoplay = val;
        this.player.autoplay = this.autoplay;
    }

    async set(track) {
        const new_track = await this.import_track(track)
            .then(sound => {
                this.player.src = sound.default;
                console.log('%c New sound installed!', 'background: #222; color: greenyellow');
            });
    }

    async set_and_play(track) {
        const new_track = await this.import_track(track)
            .then(sound => {
                this.player.src = sound.default;
                this.play();
            });
    }

    async import_track(track) {
        return await import(`./../../public/media/audio/${track}.mp3`);
    }

    interval_func(cb = () => {}){
        if(!this.is_interval_working){
            this.is_interval_working = true;
            this.interval = setInterval(() => {
                cb();
            }, 500);
        }
    }

}