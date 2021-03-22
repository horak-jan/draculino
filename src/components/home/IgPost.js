import React from "react";
import InstagramEmbed from "react-instagram-embed";

const IgPost = () => {
  return (
    <div>
      {/* chybi ti         clientAccessToken="123|456" */}
      <InstagramEmbed
        url="https://www.instagram.com/p/CMAe6TflrkL/?utm_source=ig_web_copy_link"
        clientAccessToken="123|456"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};

export default IgPost;
