import { useState } from 'react'; // Import the useState hook for managing component state
import ReactMarkdown from 'react-markdown'; // Import React Markdown library for rendering markdown
import './App.css'; // Import styles from App.css

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## What is Markdown...
Its basically a lightweight way to format plain text!
You've probably seen it on Github READMEs!

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... _**both!**_
And feel free to go crazy ~~crossing stuff out~~ (don't know why this isn't working yet :/).

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![choose-your-own](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKBNEhJjjqwWy3pHKd8gq1q9oHHedpkqKNvpseGVfog&s) 
`;

function App() {
  // Define a state variable 'markdownText' to hold the markdown content
  // and set its initial value to the defaultMarkdown string
  const [markdownText, setMarkDownText] = useState<string>(defaultMarkdown);

  // Return the JSX for the component
  return (
    <>
      <div>
        <h1> Markdown Previewer</h1>
        <div className='boxes-container'>
          <textarea // Text area for editing markdown
            name="editor"
            id="editor"
            value={markdownText} // Set the value of the textarea to markdownText state
            onChange={(e) => setMarkDownText(e.target.value)} // Update markdownText state on change
          ></textarea>
          <div id='preview'>  {/* Container for the markdown preview */}
            <ReactMarkdown>{markdownText}</ReactMarkdown>  {/* Render markdownText using ReactMarkdown */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
