import React, {useRef,useEffect,useState} from 'react';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInview = () => {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
      setIsLoading(false);
      setInView(isInview());
   window.addEventListener('scroll', scrollHandler);
   return () => {
       window.removeEventListener("scroll", scrollHandler);
   };
  }, []);

  const scrollHandler  = () => {
       setInView(isInview());
   };

   
  return (
<img src={
    isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    :inView ? secondaryImg : primaryImg} 
        alt="" ref={imageRef}
        width="200"
        height="200" 
        />
  );
};

export default ImageToggleOnScroll;