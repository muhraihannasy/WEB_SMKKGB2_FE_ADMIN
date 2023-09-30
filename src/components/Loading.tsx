import { useLoading } from '../hooks/useLoading';

const Loading = () => {
  const { loading } = useLoading();
  if (loading)
    return (
      <div className="fixed z-[9999] w-full h-full flex items-center backdrop justify-center gap-5">
        <svg
          className="animate-spin h-[2.5em] w-[2.5em] text-meta-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <h2 className="font-semibold text-meta-3">Loading...</h2>
      </div>
    );
};

export default Loading;
