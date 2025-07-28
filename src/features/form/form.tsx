import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../store/store';
import { resetForm, updateEmail, updateMessage, updateName } from './formSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  return (
    <form className="max-w-md mx-auto mt-10 p-4 space-y-4">
      <div>
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => dispatch(updateName(e.target.value))}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Message</label>
        <textarea
          placeholder="Type your message"
          value={form.message}
          onChange={(e) => dispatch(updateMessage(e.target.value))}
          className="w-full px-3 py-2 border rounded h-24 resize-y"
        />
      </div>

      <button
        type="button"
        onClick={() => dispatch(resetForm())}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Reset
      </button>
    </form>
  );
};

export default ContactForm;
