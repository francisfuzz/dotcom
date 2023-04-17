# Intro to Prompt Engineering

Lecture: https://www.youtube.com/watch?v=dOxUroR57xs

## Notes

### Why
- Important for research, discoveries, and advancement
- Helps to test and evaluate the limitations of LLMs
- Enables all kinds of innovative applications

### First basic prompt: “The sky is blue”

- Model
- Temperature
- top-p

### Elements of a prompt

- Instructions — neutral / negative / positive
- Context
- Input data
- Output indicator (sentiment)

### Settings to keep in mind

- Get different results with prompts when using different settings
- Controlling how deterministic the model is when generating completion for prompts
- Temperature and top_p are two important parameters to keep in mind
- Generally, keep these low if you arel ooking for exact answers
- Keep them high if you are looking for more diverse responses

### Designing prompts for different tasks

Categories:
- Text Summarization
- Question Answering
- Text Classification
- Role Playing
- Code Generation
- Reasoning

### Prompt Examples

- Text Summarization: "Explain the above in one sentence" (instruction; concise or precise way)
- Question Answering: Instruction => Context => Question.
- Text Classification: "Classify the text into neutral, negative, or positive."
- Role Playing: "Behave in a certain way - let the tone be technical and scientific."
- Code Generation: "Write a function that takes in a number and returns the square of that number."
- Reasoning: "Explain why the above is true."
