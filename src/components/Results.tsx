import Wrapper from "../../public/wrappers/ResultsWrapper";

export default function Results() {
  return (
    <Wrapper>
      <div className="container">
        <img src="../assets/img.svg" />
        <h1>Results shown here</h1>
        <p>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </Wrapper>
  );
}
