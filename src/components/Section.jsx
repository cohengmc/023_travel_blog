import "./Section.css";

function Section(props) {
  return (
    <div className="section">
      <section>
        {props.content ? (
          <div class="gallery">
            {props.content
              .filter(
                (content) =>
                  content.includes(".JPG") ||
                  content.includes(".PNG") ||
                  content.includes(".jpg") ||
                  content.includes(".png")
              )
              .map((content, int) => (
                <img key={int} src={content} alt={props.alts[int]} />
              ))}
            {props.content
              .filter(
                (content) =>
                  content.includes(".mov") || content.includes(".MOV")
              )
              .map((content, int) => (
                <video key={int} src={content} alt={props.alts[int]} controls />
              ))}
          </div>
        ) : (
          ""
        )}
        <p class="text">{props.text}</p>
      </section>
    </div>
  );
}

export default Section;
