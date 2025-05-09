interface WorkCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  sourceLink: string;
}

export default function WorkCard({ title, description, technologies, image, liveLink, sourceLink }: WorkCardProps) {
  return (
    <div className="card h-100">
      <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
        <img 
          src={image} 
          className="card-img-top h-100 w-100" 
          alt={title}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span key={index} className="badge bg-secondary">{tech}</span>
          ))}
        </div>
        <div className="d-flex gap-2">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            See Project <i className="fas fa-external-link-alt ms-1"></i>
          </a>
          <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
            See Source <i className="fab fa-github ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  )
} 