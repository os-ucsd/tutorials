import colors from "./colors";

export default function CreateTutorialUpsell(props) {
  return (
    <div className="upsell">
      <p>Do you like these tutorials? Do you want to create your own?</p>
      <p>
        Check out our{" "}
        <a href="https://github.com/os-ucsd/tutorials">Github project</a> and
        learn more!
      </p>
      <style jsx>{`
        .upsell {
          border: 1px dotted #555;
          padding: 0.1rem 0.5rem;
          border-radius: 0.5rem;
          background-color: ${colors.BLUE1};
          text-align: center;
        }
      `}</style>
    </div>
  );
}
