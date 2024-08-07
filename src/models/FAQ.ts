class FAQ {
  id: number;
  section_id: number;
  question: string;
  answer: string;

  constructor(
    id: number,
    section_id: number,
    question: string,
    answer: string
  ) {
    this.id = id;
    this.section_id = section_id;
    this.question = question;
    this.answer = answer;
  }
}

export default FAQ;
