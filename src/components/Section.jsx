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
                <img
                  key={int}
                  src={content}
                  alt={props.alts[int]}
                  style={{
                    maxHeight: `${60 / props.content.length}vw`,
                  }}
                />
              ))}
            {props.content
              .filter(
                (content) =>
                  content.includes(".mov") || content.includes(".MOV")
              )
              .map((content, int) => (
                <video
                  key={int}
                  src={content}
                  alt={props.alts[int]}
                  style={{maxHeight: `${60 / props.content.length}vw`}}
                  controls
                />
              ))}
          </div>
        ) : (
          ""
        )}
        {props.text ? <p class="text">{props.text}</p> : ""}
      </section>
    </div>
  );
}

export default Section;
