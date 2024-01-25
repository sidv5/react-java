import { useState } from 'react';

export default function FormSubmitDemo() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Form Submission & Interactions</h2>
      <p>The form below has three states: typing/submitting, success & error</p>
      <p>'Submit' action pretends its hitting a web service.</p>
      <h4>• Quiz</h4>
      <div>
        <p>Which planet has the most moons?</p>
        { status !== 'success' ? (
          <form onSubmit={handleSubmit}>
            <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
            <br />
            <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
            {status === 'submitting' && <p className="Submitting">Submitting...</p> }
            {error !== null && <p className="Error">{error.message}</p>}
          </form>
        ) : (
          <>
            <p>{answer}</p>
            <br/>
            <p>That's correct!</p>
            <br/>
            <button onClick={() => {
              setStatus('typing');
              setError('');
              setAnswer('');
            }}>Reset</button>
          </>
        )}
      </div>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'saturn'
      if (shouldError) {
        reject(new Error('Wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
