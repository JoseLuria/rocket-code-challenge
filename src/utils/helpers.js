const invalidMessage = "Formato Invalido";

const formatText = (text) => {
  if (!text) {
    return null;
  }

  const lowerText = text.toLowerCase();
  const removeAccent = lowerText
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const separedByDot = removeAccent.split(":");

  if (separedByDot[1]) {
    const textWithNoSpaces = separedByDot[1].replace(/\s/g, "");
    return textWithNoSpaces.trim();
  }

  return null;
};

const checkPhone = (phone) => {
  const isNumber = /^[0-9]*$/.test(phone);

  if (phone && isNumber && phone.length === 10) {
    return phone;
  }

  return invalidMessage;
};

const checkEmail = (email) => {
  const isEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    );

  if (email && isEmail) {
    return email;
  }

  return invalidMessage;
};

export const asignData = (text, dataToReplace) => {
  const textArray = text.split("\n");

  const formatedEmail = formatText(textArray[0]);
  const formatedPhone = formatText(textArray[1]);

  const newData = {
    ...dataToReplace,
    email: checkEmail(formatedEmail),
    phone: checkPhone(formatedPhone),
  };

  return newData;
};
