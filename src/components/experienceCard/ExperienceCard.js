import React, {useState, createRef, useEffect} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = createRef();

  // Detect if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check initially
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const toggleExpand = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const GetDescBullets = ({descBullets, isDark}) => {
    const highlightKeyTerms = (text) => {
      // Define patterns to bold
      const patterns = [
        // Metrics and percentages - enhanced
        /(\d+%|\d+x|\d+\.\d+x|\$\d+(?:\.\d+)?\s*million)/g,
        // Key action verbs and outcomes
        /(Spearheaded|Engineered|Architected|Implemented|Developed|Led|Created|Built|Achieved|Secured|Featured|Improved|Optimized|Enhanced|Reduced|Increased)/gi,
        // Technology names and frameworks - expanded
        /\b(LLM|RAG|XAI|AI|ML|TensorFlow|PyTorch|Caffe|NVIDIA|GCP|AWS|Apache Airflow|GitHub|CI\/CD|UNET-R|U-Net|ResNet|EfficientNet|CNN|DNN|API|FPGA|ADAS|STTR|SAM 2|Jetson|MMD|VAE|VAEGMM|t-SNE|UMAP|PCA|Docker|Kubernetes|FastAPI|Flask|OpenCV|Scikit-learn|Hugging Face)\b/gi,
        // Platform and system names - expanded
        /(Cloud Run|Text-to-Speech|SSML|Consumer Electronics Show|Phase 1|Air Force|Space Force|W\. P\. Carey News|Gemini|GPT|Claude|Llama|Mistral|Pinecone|Chroma|LangChain|CrewAI)/gi,
        // Business outcomes and achievements
        /\b(funding|contract|featured|award|recognition|seed funding|STTR|Phase 1)\b/gi,
        // CES specifically (Consumer Electronics Show)
        /\b(CES)\b/gi,
        // Technical terms - expanded
        /(Explainable AI|Retrieval-Augmented Generation|neuro-symbolic|adversarial|quantization|pruning|edge deployment|anomaly detection|drift detection|out-of-distribution|OOD|microservices|real-time|production-ready|scalable|enterprise-grade)/gi,
        // Medical and domain-specific terms
        /(CT-Scan|DICE score|pneumonia|COVID-19|medical imaging|healthcare|diagnostic|tumor detection)/gi,
        // Performance and optimization terms
        /(accuracy|PSNR|inference|deployment|monitoring|optimization|performance|efficiency|throughput)/gi
      ];

      let result = text;
      patterns.forEach(pattern => {
        result = result.replace(pattern, '<strong>$1</strong>');
      });
      
      return result;
    };

    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            dangerouslySetInnerHTML={{ __html: highlightKeyTerms(item) }}
          />
        ))
      : null;
  };

  return (
    <div 
      className={`${isDark ? "experience-card-dark" : "experience-card"} ${isExpanded ? "expanded-card" : ""}`}
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
      onClick={toggleExpand}
    >
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        {cardInfo.descBullets && (
          <div className={`experience-bullets-container ${isExpanded ? 'expanded' : ''}`}>
            <ul>
              <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
            </ul>
          </div>
        )}
        
        {isMobile && cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <div className="expand-indicator">
            <span>{isExpanded ? "Show less" : "Show more"}</span>
            <i className={`fas fa-chevron-${isExpanded ? "up" : "down"}`}></i>
          </div>
        )}
      </div>
    </div>
  );
}
