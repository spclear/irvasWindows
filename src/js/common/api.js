export async function getData(url) {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Something went wrong. URL: ${url}. Status: ${result.status}`);
  }

  return await result.json();
}

export async function postData(url, data) {
  if (typeof(data) === 'object') {
    data = JSON.stringify(data);
  }
  
  const result = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json'
    }
  });

  if (!result.ok) {
    throw new Error(`Something went wrong... URL: ${url}. Status: ${result.status}`);
  }

  return await result.json();
}