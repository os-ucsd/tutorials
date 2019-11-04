export default function SocialMedia(props) {
  return (
    <div className="SocialMedia">
      <div>
        <div>Confused? Have a question? Wanna chat?</div>
        <p>
          <a href="https://facebook.com/groups/opensourceucsd">
            Open Souce @ UCSD Facebook Group
          </a>
        </p>
        <p>
          <a href="https://discord.gg/c32GCcR">
            Open Source @ UCSD Discord Server
          </a>
        </p>
      </div>
      <style jsx>{`
        .SocialMedia {
          border-top: 1px dotted #ccc;
          max-width: 400px;
          margin: 0 auto;
          margin-top: 7.5rem;
          padding-top: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
