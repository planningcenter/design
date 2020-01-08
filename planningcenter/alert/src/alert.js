import Observable from "./observable";

/**
 * Alert
 * params: {
 *   alert: fn
 *   validations: [
 *     {
 *       key => String used to search for key of passed prop i.e. "title|text"
 *       value => { required: bool, text: string, validator: fn }
 *     }
 *   ]
 * }
 */
class Alert {
  warnings = new Observable([]);

  constructor({ alert, validations }) {
    this.alert = alert;
    this.validations = validations;
    this.warnings.subscribe(this.onWarning);
  }

  fire = args => this.alert(this.validate(args));

  findFieldName = ({ search, args }) =>
    Object.keys(args).find(name => new RegExp(search).test(name));

  validate = args => {
    const fields = Object.entries(this.validations).map(([search, opts]) => {
      const fieldName = this.findFieldName({ args, search });
      const value = args[fieldName];
      const include = fieldName || opts.required;
      return include ? { value, ...opts } : null;
    });
    const warnings = fields
      .filter(({ value, validator }) => {
        return !validator(value);
      })
      .map(({ text }) => text);
    if (warnings.length) this.warnings.set(warnings);
    return args;
  };

  onWarning = (warnings = []) =>
    // eslint-disable-next-line no-console
    console.warn(
      "** PCO ALERT config mismatch: **",
      warnings,
      "for more information: https://planningcenter.design/prompts"
    );

  /** ACTIONS */
  confirm = ({ customClass, ...args }) =>
    this.fire({
      icon: "warning",
      showCancelButton: true,
      customClass: {
        cancelButton: "swal-btn swal-btn--link",
        confirmButton: "swal-btn swal-btn--confirm",
        ...customClass
      },
      ...args
    });

  confirmCreate = ({ customClass, ...args }) =>
    this.confirm({
      ...args,
      customClass: {
        cancelButton: "swal-btn swal-btn--link",
        confirmButton: "swal-btn swal-btn--create",
        ...customClass
      }
    });

  confirmDestroy = ({ customClass, ...args }) =>
    this.confirm({
      ...args,
      customClass: {
        cancelButton: "swal-btn swal-btn--link",
        confirmButton: "swal-btn swal-btn--destroy",
        ...customClass
      }
    });

  error = ({ customClass, ...args }) =>
    this.fire({
      ...args,
      icon: "error",
      customClass: { confirmButton: "swal-btn", ...customClass }
    });

  info = ({ customClass, ...args }) =>
    this.fire({
      ...args,
      icon: "info",
      customClass: { confirmButton: "swal-btn", ...customClass }
    });

  success = ({ customClass, ...args }) =>
    this.fire({
      ...args,
      icon: "success",
      customClass: { confirmButton: "swal-btn", ...customClass }
    });

  warn = ({ customClass, ...args }) =>
    this.fire({
      ...args,
      icon: "warning",
      customClass: { confirmButton: "swal-btn", ...customClass }
    });
}

export default Alert;
