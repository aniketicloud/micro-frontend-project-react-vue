import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // nextPathname is path inside remote app i.e. marketing app
        // this below pathname is current path inside container app
        const { pathname } = history.location;

        // to remove infinite loop, adding condition
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => [console.log('User signed in')],
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};
