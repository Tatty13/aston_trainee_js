import { FC, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';

export const withJSHighlight = <P extends object>(Component: FC<P>) => {
  const ComponentWithHighlight: FC<P> = (props) => {
    useEffect(() => {
      hljs.registerLanguage('javascript', javascript);
      hljs.registerLanguage('html', html);
      hljs.highlightAll();
    }, []);

    return <Component {...(props as P)} />;
  };

  return ComponentWithHighlight;
};
