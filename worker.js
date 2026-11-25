// Serves this static site under tools.revou.co/ai-finance/ by stripping the prefix.
const PREFIX = "/ai-finance";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === PREFIX) {
      url.pathname = PREFIX + "/";
      return Response.redirect(url.toString(), 301);
    }
    if (path.startsWith(PREFIX + "/")) path = path.slice(PREFIX.length);

    url.pathname = path;
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};
