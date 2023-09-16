import { FC, useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';
import javascript from 'highlight.js/lib/languages/javascript';

export const withJSHighlight = <P extends object>(Component: FC<P>) => {
  const ComponentWithHighlight: FC<P> = (props) => {
    useEffect(() => {
      hljs.registerLanguage('javascript', javascript);
      hljs.highlightAll();
    }, []);

    return <Component {...(props as P)} />;
  };

  return ComponentWithHighlight;
};
