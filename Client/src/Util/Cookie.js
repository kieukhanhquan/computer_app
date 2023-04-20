import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const Cookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['username']);

  const getCookie = (cookieName) => {
    return cookies[cookieName];
  };

  const setCookieValue = (cookieName, cookieValue, options) => {
    setCookie(cookieName, cookieValue, options);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      removeCookie('username');
    }, 30 * 60 * 1000);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Cookie;
