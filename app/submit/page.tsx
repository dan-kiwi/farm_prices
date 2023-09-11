import SubmitForm from "@/app/submit/SubmitForm";

export default function Submit() {
  return (
    <div>
      <h1>Submit A Price</h1>
      <div className="pb-10">
        Give back to this website, show your support by submitting your sales.
        Your insights are valuable in building a comprehensive pricing database.
        This will ensure the farming community has access to the most up to date
        pricing information.
      </div>
      <SubmitForm />
    </div>
  );
}
