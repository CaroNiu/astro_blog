import { Section } from 'astro-boilerplate-components';
import { useEffect } from 'react';

const CTA = () => {
  // 函数：平滑滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const button = document.getElementById('scroll-to-top-button');
    const handleScroll = () => {
      // 根据滚动位置显示/隐藏按钮
      if (window.scrollY > 300) {
        // @ts-ignore
        button.style.display = 'block';
      } else {
        // @ts-ignore
        button.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section>
      <button
        id="scroll-to-top-button"
        onClick={scrollToTop}
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#555',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        回到顶部
      </button>
    </Section>
  );
};

export { CTA };
