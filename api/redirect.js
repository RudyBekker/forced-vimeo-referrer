// /api/redirect.js
module.exports = (req, res) => {
    const { video } = req.query;
  
    if (!video) {
      return res.status(400).send('Video parameter is required');
    }
  
    // Attempt to set the Referer header in the response (Note: This will not work as intended for influencing browser redirects)
    res.setHeader('Referer', 'https://mylms.bethel.com/');
  
    // Redirect to the video URL
    return res.redirect(video);
  };
  