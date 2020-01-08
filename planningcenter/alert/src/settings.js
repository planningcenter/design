import Swal from "sweetalert2";

const composeAlert = Swal.mixin({
  animation: false,
  buttonsStyling: false,
  position: "top",
  reverseButtons: true
});

const sweetAlert = args => composeAlert.fire(args);

const validations = {
  "html|text": {
    // Body must be present
    required: true,
    text: "Text must be present",
    validator: v => !!v
  },
  title: {
    // Title must be present
    required: true,
    text: "Title must be present",
    validator: v => !!v
  }
};

const defaultConfig = {
  alert: sweetAlert,
  validations
};

export { defaultConfig };
