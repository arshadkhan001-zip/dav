import { useState, type FormEvent } from "react";
import { ADMISSION_CLASSES } from "../../data/admissions";
import { SCHOOL } from "../../data/school";

interface Enquiry {
  parentName: string;
  phone: string;
  email: string;
  classApplying: string;
  message: string;
}

type Errors = Partial<Record<keyof Enquiry, string>>;

const EMPTY: Enquiry = { parentName: "", phone: "", email: "", classApplying: "", message: "" };

function validate(values: Enquiry): Errors {
  const errors: Errors = {};
  if (values.parentName.trim().length < 2) {
    errors.parentName = "Please enter the parent or guardian's name.";
  }
  if (!/^[6-9]\d{9}$/.test(values.phone.replace(/[\s+-]/g, "").replace(/^91/, ""))) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }
  if (values.email.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address, or leave it blank.";
  }
  if (values.classApplying === "") {
    errors.classApplying = "Please choose the class you are enquiring about.";
  }
  if (values.message.trim().length < 5) {
    errors.message = "Please add a short message (a few words are enough).";
  }
  return errors;
}

const inputCls =
  "type-body w-full rounded-[3px] border border-navy-900/25 bg-white px-4 py-2.5 text-ink placeholder:text-ink/35 hover:border-navy-900/40";

/**
 * Admission enquiry form — LOCAL DEMO ONLY.
 * No network calls, no storage, no backend. On valid submit the data stays
 * in component state for the confirmation screen and is discarded on reset.
 * The confirmation states explicitly that nothing was sent to the school.
 */
export function EnquiryForm() {
  const [values, setValues] = useState<Enquiry>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Enquiry, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  const onReset = () => {
    setValues(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="rounded-[4px] border border-line bg-card p-6" role="status">
        <p className="type-heading-md text-navy-900">Enquiry noted — locally, in your browser.</p>
        <p className="type-body mt-3 text-muted">
          Thank you, {values.parentName.trim()}. This is a demonstration: your enquiry for
          Class {values.classApplying} was <strong>not</strong> sent to the school and
          nothing was stored.
        </p>
        <p className="type-body mt-3 text-ink">
          To actually apply, please contact the school reception on{" "}
          <a href={SCHOOL.phoneHref} className="text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4">
            {SCHOOL.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={onReset}
          className="type-nav mt-5 rounded-[3px] border border-navy-900/25 px-5 py-2.5 text-navy-900 hover:bg-navy-100/50"
        >
          Make another enquiry
        </button>
      </div>
    );
  }

  const field = (key: keyof Enquiry, label: string, hint: string, control: React.ReactNode) => (
    <div>
      <label htmlFor={`enquiry-${key}`} className="type-nav block text-navy-900">
        {label}
      </label>
      <div className="mt-1.5">{control}</div>
      {errors[key] ? (
        <p id={`enquiry-${key}-error`} role="alert" className="type-small mt-1.5 text-red-800">
          {errors[key]}
        </p>
      ) : (
        <p className="type-small mt-1.5 text-muted">{hint}</p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Admission enquiry (demonstration)">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          {field(
            "parentName",
            "Parent / guardian name *",
            "Who should the school contact?",
            <input
              id="enquiry-parentName"
              type="text"
              autoComplete="name"
              value={values.parentName}
              onChange={(e) => set("parentName", e.target.value)}
              aria-invalid={Boolean(errors.parentName)}
              aria-describedby={errors.parentName ? "enquiry-parentName-error" : undefined}
              className={inputCls}
            />,
          )}
        </div>
        <div className="sm:col-span-1">
          {field(
            "phone",
            "Mobile number *",
            "10-digit Indian mobile number.",
            <input
              id="enquiry-phone"
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
              className={inputCls}
            />,
          )}
        </div>
        <div className="sm:col-span-1">
          {field(
            "email",
            "Email (optional)",
            "Only if you prefer email contact.",
            <input
              id="enquiry-email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "enquiry-email-error" : undefined}
              className={inputCls}
            />,
          )}
        </div>
        <div className="sm:col-span-1">
          {field(
            "classApplying",
            "Class applying for *",
            "Nursery to XII, as offered by the school.",
            <select
              id="enquiry-classApplying"
              value={values.classApplying}
              onChange={(e) => set("classApplying", e.target.value)}
              aria-invalid={Boolean(errors.classApplying)}
              aria-describedby={errors.classApplying ? "enquiry-classApplying-error" : undefined}
              className={inputCls}
            >
              <option value="">Select a class…</option>
              {ADMISSION_CLASSES.map((c) => (
                <option key={c} value={c}>
                  Class {c}
                </option>
              ))}
            </select>,
          )}
        </div>
        <div className="sm:col-span-2">
          {field(
            "message",
            "Message *",
            "Anything the reception should know.",
            <textarea
              id="enquiry-message"
              rows={4}
              value={values.message}
              onChange={(e) => set("message", e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "enquiry-message-error" : undefined}
              className={inputCls}
            />,
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="type-nav rounded-[3px] bg-navy-900 px-6 py-3 text-white hover:bg-navy-950"
        >
          Submit enquiry
        </button>
        <button
          type="button"
          onClick={onReset}
          className="type-nav rounded-[3px] border border-navy-900/25 px-6 py-3 text-navy-900 hover:bg-navy-100/50"
        >
          Reset
        </button>
      </div>
      <p className="type-small mt-4 text-muted">
        Demonstration form — submissions stay in your browser and are never sent anywhere.
      </p>
    </form>
  );
}
