function FeedbackSuggestion() {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-red-400">Report a Bug</h3>
            <p className="mt-2 text-gray-400">
              Encountered an issue? Let us know so we can fix it promptly.
            </p>
            <a
              href="#"
              id="report-bug"
              className="mt-4 inline-block bg-red-500 text-white px-6 py-3 rounded-md text-lg hover:bg-red-600 transition"
            >
              Report Bug
            </a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-400">
              Suggest an Enhancement
            </h3>
            <p className="mt-2 text-gray-400">
              Have an idea to improve our platform? Share it with us!
            </p>
            <a
              href="#"
              id="suggent-enhance"
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition"
            >
              Suggest Enhancement
            </a>
          </div>
        </div>    
        </>
    )

}

export default FeedbackSuggestion;