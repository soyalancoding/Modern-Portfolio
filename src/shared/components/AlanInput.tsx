interface AlanInputTextProps {
  onHandleChange: (value: string, id: string) => void;
  type?: "text" | "email" | "password" | "textarea";
  value?: string;
  name: string;
  id: string;
  placeholder?: string;
}

function AlanInputText({
  onHandleChange,
  type,
  value,
  name,
  id,
  placeholder,
}: AlanInputTextProps) {
  function handleChange(value: string) {
    onHandleChange(value, id);
  }

  return (
    <>
      <div className="relative mt-6">
        <input
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          className="peer mt-1 w-full border-b-2 border-gray-300 bg-white px-0 py-1 font-roboto text-sm text-black placeholder:text-transparent focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-neutral-950 dark:text-white dark:focus:border-gray-400"
        />

        <label className="pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform font-roboto text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800 dark:text-gray-200 dark:peer-placeholder-shown:text-gray-400 dark:peer-focus:text-gray-200">
          {name}
        </label>
      </div>
    </>
  );
}

export default AlanInputText;
