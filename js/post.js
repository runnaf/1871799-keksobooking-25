const postData = async (url, data) => {
  document.querySelector('.ad-form__submit').disabled = true;
  const response = await fetch(
    url,
    {
      method: 'POST',
      body: data
    });

  return await response;
};

export {postData};

