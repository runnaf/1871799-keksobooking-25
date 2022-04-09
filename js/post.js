const formSubmit = document.querySelector('.ad-form__submit');
const postData = async (url, data) => {
  formSubmit.disabled = true;
  const response = await fetch(
    url,
    {
      method: 'POST',
      body: data
    });

  return await response;
};

export {postData, formSubmit};

