const Form = ({ title }: { title: string }) => {
  return (
    <div className="person__form">
      <input className="person__form__inputs" type="email" placeholder="email" />
      <input className="person__form__inputs" type="password" placeholder="password" />
      <button className="person__form__button">{title}</button>
    </div>
  );
};

export { Form };
