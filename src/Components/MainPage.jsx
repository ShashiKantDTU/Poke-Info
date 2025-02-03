import { useEffect, useState } from "react";
import "./MainPage.css";

function MainPage({ children, img, bgsize, bgposition, islinergradient }) {
    const [defaultImg, setDefaultImg] = useState("");
    
    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement);
        const bgImage = rootStyles.getPropertyValue("--mainpage-bg").trim();
        
        if (bgImage.includes("url")) {
            setDefaultImg(bgImage.replace(/url$['"]?(.*?)['"]?$/, "$1"));
        }
    }, []);

    const backgroundStyle = {
        background: islinergradient 
            ? `${islinergradient}, ${img ? `url(${img})` : 'var(--mainpage-bg)'}`
            : (img ? `url(${img})` : 'var(--mainpage-bg)'),
        backgroundSize: bgsize || "cover",
        backgroundPosition: bgposition || "center",
        backgroundAttachment: "fixed"
    };

    return (
        <div
            style={backgroundStyle}
            className="MainPage-Main-page"
        >
            {children}
        </div>
    );
}

export default MainPage;

/*
  Instructions for using the MainPage component:

  1. **Import the Component**
     Import the `MainPage` component into your file where you want to use it.
     
     Example:
     ```javascript
     import MainPage from './path/to/MainPage';
     ```

  2. **Use the Component in JSX**
     Use the `MainPage` component in your JSX like this:

     ```jsx
     <MainPage 
         img="url/to/your/image.jpg"
         bgsize="cover" 
         bgposition="center" 
         islinergradient="linear-gradient(135deg, rgba(18, 21, 35, 0.97), rgba(31, 36, 56, 0.95), rgba(44, 50, 77, 0.93))"
     >
         <h1>Your Content Here</h1>
         <p>Additional content for the page.</p>
     </MainPage>
     ```

  3. **Props Explanation**
     - **`img`** (optional): URL of the image to use as the background. If not provided, the default background from CSS will be used. Example: `"url/to/your/image.jpg"`.
     
     - **`bgsize`** (optional): The size of the background image (e.g., `"cover"`, `"contain"`, or custom sizes). Defaults to `"cover"` if not provided.
     
     - **`bgposition`** (optional): The position of the background image (e.g., `"center"`, `"top"`, `"left"`, etc.). Defaults to `"center"` if not provided.
     
     - **`islinergradient`** (optional): You can pass a string containing a linear gradient, which will be applied as the background overlay. If not provided, no linear gradient will be applied. Example:
       - With linear gradient:
         ```javascript
         islinergradient="linear-gradient(135deg, rgba(18, 21, 35, 0.97), rgba(31, 36, 56, 0.95), rgba(44, 50, 77, 0.93))"
         ```
       - Without linear gradient (no effect):
         ```javascript
         islinergradient={false}
         ```
*/
