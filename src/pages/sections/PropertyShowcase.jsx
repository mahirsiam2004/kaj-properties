import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VIDEO_ID = 'Ou75T-40wuw';

// Singleton YT API loader
let ytApiLoaded = false;
const ytApiCallbacks = [];

function loadYTApi() {
    if (ytApiLoaded) return;
    ytApiLoaded = true;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => {
        ytApiCallbacks.forEach(cb => cb());
        ytApiCallbacks.length = 0;
    };
}

export default function PropertyShowcase() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [playerReady, setPlayerReady] = useState(false);
    const sectionRef = useRef(null);
    const playerRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const initPlayer = () => {
            const container = containerRef.current;
            if (!container || playerRef.current) return;

            playerRef.current = new window.YT.Player(container, {
                videoId: VIDEO_ID,
                width: '100%',
                height: '100%',
                playerVars: {
                    autoplay: 1,
                    loop: 1,
                    playlist: VIDEO_ID,
                    controls: 0,
                    rel: 0,
                    mute: 1,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    disablekb: 1,
                    fs: 0,
                    playsinline: 1,
                },
                events: {
                    onReady: (event) => {
                        event.target.mute();
                        event.target.playVideo();
                        // Make the iframe fill the container
                        const iframe = event.target.getIframe();
                        if (iframe) {
                            iframe.style.position = 'absolute';
                            iframe.style.top = '0';
                            iframe.style.left = '0';
                            iframe.style.width = '100%';
                            iframe.style.height = '100%';
                            iframe.style.pointerEvents = 'none';
                        }
                        setPlayerReady(true);
                    },
                }
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            ytApiCallbacks.push(initPlayer);
            loadYTApi();
        }

        return () => {
            if (playerRef.current) {
                try { playerRef.current.destroy(); } catch (_) {}
                playerRef.current = null;
            }
            setPlayerReady(false);
            setIsMuted(true);
        };
    }, [isVisible]);

    const toggleMute = () => {
        if (!playerRef.current || !playerReady) return;
        if (isMuted) {
            playerRef.current.unMute();
            playerRef.current.setVolume(80);
        } else {
            playerRef.current.mute();
        }
        setIsMuted(prev => !prev);
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[100dvh] overflow-hidden bg-brand-black"
            id="showcase"
        >
            {/* Full-screen YouTube Player Container */}
            {isVisible && (
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ pointerEvents: 'none' }}
                >
                    <div ref={containerRef} className="absolute inset-0 w-full h-full" />
                </div>
            )}

            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/30 pointer-events-none z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-transparent pointer-events-none z-20" />

            {/* LEFT SIDE: Mute/Unmute Button */}
            <div className="absolute left-5 lg:left-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4">
                <button
                    onClick={toggleMute}
                    className="group relative w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-accent hover:border-accent transition-all duration-300 flex items-center justify-center text-white shadow-lg"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    title={isMuted ? 'Turn sound on' : 'Turn sound off'}
                >
                    {isMuted
                        ? <VolumeX size={16} className="group-hover:scale-110 transition-transform" />
                        : <Volume2 size={16} className="group-hover:scale-110 transition-transform" />
                    }
                    {/* Pulse ring when unmuted */}
                    {!isMuted && (
                        <span className="absolute inset-0 rounded-full border border-accent animate-ping opacity-50" />
                    )}
                </button>

                {/* Vertical line */}
                <div className="h-20 w-px bg-white/20" />

                {/* Label rotated */}
                <span className="text-white/40 text-[9px] uppercase tracking-[0.25em] whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
                    {isMuted ? 'Sound Off' : 'Sound On'}
                </span>
            </div>

            {/* BOTTOM: Content */}
            <div className="absolute inset-0 z-30 flex flex-col justify-end pl-20 lg:pl-28 pr-6 lg:pr-12 pb-12 pointer-events-none fade-up">
                <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
                    <div className="relative">
                        {/* Ghost text */}
                        <div className="absolute -top-8 left-0 text-[60px] md:text-[90px] font-bold text-white/5 whitespace-nowrap select-none tracking-widest uppercase">
                            SHOWCASE
                        </div>
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                <div className="bg-accent w-full h-full rounded-sm" />
                                <div className="bg-accent/50 w-full h-full rounded-sm" />
                                <div className="bg-accent/50 w-full h-full rounded-sm" />
                                <div className="bg-accent w-full h-full rounded-sm" />
                            </div>
                            <span className="text-accent uppercase font-semibold text-xs tracking-widest">Video Tour</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide">
                            Property Showcase
                        </h2>
                        <p className="text-white/50 text-sm mt-2 font-light max-w-md">
                            Experience our properties through an immersive video tour.
                        </p>
                    </div>
                </div>
            </div>

            {/* Ambient glows */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none z-10" />
            <div className="absolute bottom-1/4 left-32 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none z-10" />
        </section>
    );
}
