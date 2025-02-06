import './loading.css'
function Loading() {

  return (
    <div className="container">
        <div className="loading-container">
            <div className="spinner"></div>
            <div className="spinner-inner"></div>
        </div>
        <div className="loading-text">LOADING...</div>
    </div>
  )
}

export default Loading
