import React, { useEffect } from 'react';

const CommunityComments = () => {
  useEffect(() => {
    const loadDisqusScript = () => {
      var d = document, s = d.createElement('script');
      s.src = 'https://codecommunity-com.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }

    loadDisqusScript();
  }, []);

  return (
    <div>
      <div id="disqus_thread"></div>
    </div>
  );
}

export default CommunityComments;
