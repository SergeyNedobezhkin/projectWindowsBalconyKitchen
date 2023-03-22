const sendForm = ({ formTag, someElem = [] }) => {
  let form = document.querySelectorAll(formTag);
  form.forEach((form) => {
    const isValid = (e) => {
      if (e.target.matches('[name="fio"]')) {
        let value = e.target.value;
        if (value.replace(/^[а-яё][а-яё\' ']{1,20}$/gi, "")) {
          e.target.classList.remove("success");
          e.target.classList.add("error");
          e.target.style =
            "border:solid; border-width: 5px; border-color: red;";
          value = false;
        } else if (!value.replace(/^[а-яё][а-яё\' ']{1,20}$/gi, "")) {
          e.target.classList.remove("error");
          e.target.style = "";
          e.target.classList.add("success");
          value = true;
        }
        return validate(value);
      }

      // if (e.target.matches('[name="phone"]')) {
      //   let value = e.target.value;

      //   if (
      //     value.replace(/^\+?[78][-\(]?\d{3}\)?-?\d{0,3}-?\d{2}-?\d{0,2}$/i, "")
      //   ) {
      //     e.target.classList.remove("success");
      //     e.target.classList.add("error");
      //     e.target.style =
      //       "border:solid; border-width: 5px; border-color: red;";
      //     value = false;
      //   } else if (
      //     !value.replace(
      //       /^\+?[78][-\(]?\d{3}\)?-?\d{0,3}-?\d{2}-?\d{0,2}$/i,
      //       ""
      //     )
      //   ) {
      //     {
      //       e.target.classList.remove("error");
      //       e.target.style = "";
      //       e.target.classList.add("success");
      //       value = true;
      //     }
      //   }

      //   return validate(value);
      // }
    };

    const validate = (list) => {
      let success = true;

      Array.from(list).forEach((input) => {
        if (!input.classList.contains("success")) {
          success = false;
        }
      });

      return success;
    };
    const sendData = (data) => {
      // Отправленние данных
      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => res.json());
    };
    const submitForm = () => {
      const formElements = form.querySelectorAll("input");

      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
        if (val !== "") {
          formBody[key] = val;
        }
      });

      if (window.location.toString().indexOf("balkony.html") > 0) {
        someElem.forEach((elem) => {
          const element = document.getElementById(elem.id);
          if (elem.type === "input" && element.value !== "") {
            formBody[elem.id] = element.value;
          } else if (elem.type === "input") {
            formBody[elem.id] = element.value;
          }
        });
      }

      if (validate(formElements)) {
        sendData(formBody).then((data) => {
          formElements.forEach((input) => {
            input.value = "";
          });
        });
      } else {
        alert("Не валидны!");
      }
    };
    try {
      if (!form) {
        throw new Error("Верните форму на место, пожалуйста!!!");
      }
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm();
      });
    } catch (error) {
      console.log(error.message);
    }

    form.addEventListener("input", isValid);
  });
};
export default sendForm;
