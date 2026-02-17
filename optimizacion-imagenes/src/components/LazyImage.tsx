import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Disconnect once loaded
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (imgRef.current) observer.observe(imgRef.current);
        return () => {
            if (imgRef.current) observer.disconnect();
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : undefined} // Use undefined to avoid src="" issues
            data-src={src}
            alt={alt}
            className={`w-full h-auto rounded-lg shadow-md transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ minHeight: '200px', backgroundColor: '#f0f0f0' }} // Placeholder style
        />
    );
};

export default LazyImage;
