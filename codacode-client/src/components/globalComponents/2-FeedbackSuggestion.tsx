import '../../styles/global/feedbackSeggestion.css'
function FeedbackSuggestion() {
    return (
        <section className="feedback-suggestion">
            <div className="feedback">
                <h3>Report a Bug</h3>
                <p>Encountered an issue? Let us know so we can fix it promptly</p>
                <a href="#" id="report-bug"> Report Bug </a>
            </div>
            <div className="suggestion">
                <h3>Suggest an Enhancement</h3>
                <p>Have an idea to improve our platform? Share it with us!</p>
                <a href="#" id="suggest-enhance">Suggest Enhancement</a>
            </div>
        </section>    
    )
}

export default FeedbackSuggestion;