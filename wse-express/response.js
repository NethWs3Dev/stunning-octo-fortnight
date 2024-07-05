const head = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-Requested-With, Accept",
}

module.exports = class AppRes {
  constructor(event) {
    this.event = event;
  }
  

  send(data, status = 200) {
    return new Response(data, {
      status,
      headers: {
        "content-type": "text/plain;charset=utf-8",
        ...head,
      }
    });
  }
  
  html(data, status = 200) {
    return new Response(data, {
      status,
      headers: {
        "content-type": "text/html;charset=utf-8",
        ...head,
      }
    });
  }
  
  json(data, status = 200) {
    return new Response(JSON.stringify(data,null,2), {
      status,
      headers: {
        "content-type": "application/json",
        ...head,
      }
    });
  }
  
  image(data, status = 200) {
    return new Response(data, {
      status,
      headers: {
        "content-type": "image/png",
        ...head,
      }
    });
  }
  
  custom(data, headers, status = 200) {
    return new Response(data, {
      status,
      headers: {
        ...headers,
        ...head,
      }
    });
  }
};
