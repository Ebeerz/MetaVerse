export const postData = (onSuccess: Function, onFail: Function, body:any) => {
    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body,
    })
      .then((response) => {
        if (response.ok) {
          onSuccess(response);
        } else {
          onFail('Не удалось отправить данные');
        }
      })
      .catch(()=> {
        onFail('Не удалось отправить данные');
      });
  };