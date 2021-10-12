import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log('The container noticed navigation in marketing');
      },
    });
  });
  return <div ref={ref} />;
};
