
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-xl text-gray-700 mb-8">Something went wrong. Please try again later.</p>
            <button 
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                onClick={() => window.location.reload()}
            >
                Reload Page
            </button>
        </div>
    );
}

export default ErrorPage;