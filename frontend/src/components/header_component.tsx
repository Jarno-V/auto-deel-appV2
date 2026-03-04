const profileImage = "http://localhost:3845/assets/55f3f2380bc02b0ebd14673f1624d5edbd6f155e.png";

export default function HeaderComponent() {
  return (
    <section className="header-component" aria-label="Profile header" data-name="header-component" data-node-id="1:840">
      <div className="header-avatar-wrap" data-name="div" data-node-id="1:847">
        <div className="header-avatar-ring" data-name="Container" data-node-id="1:848">
          <img
            className="header-avatar-image"
            src={profileImage}
            alt="Profielfoto"
            data-name="ImageWithFallback"
            data-node-id="1:849"
          />
        </div>
        <div className="header-avatar-badge" data-name="Container" data-node-id="1:850" />
      </div>

      <h1 className="header-title" data-name="h1" data-node-id="1:841">
        Jouw Naam
      </h1>

      <p className="header-subtitle" data-name="p" data-node-id="1:843">
        Software Engineer &amp; ML Student
      </p>

      <p className="header-description" data-name="p" data-node-id="1:845">
        Ik bouw software en verken machine learning. Gepassioneerd door data science en het creëren van intelligente oplossingen.
      </p>
    </section>
  );
}