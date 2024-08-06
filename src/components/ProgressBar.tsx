import "./ProgressBar.style.css";

interface IProgressBarProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  progressColor?: string;
  progress?: number;
}

export const ProgressBar = (props: IProgressBarProps) => {
  const { width = "500px", backgroundColor = "#505050", progressColor = "green", progress = 10 } = props;
  return (
    <>
      <div className="container" style={{ width, backgroundColor }}>
        <span className="progress-indicator">{`${progress}%`}</span>
        <div
          className="progress"
          style={{ backgroundColor: progressColor, transform: `translate(${progress - 100}%)` }}
        ></div>
      </div>
    </>
  );
};
