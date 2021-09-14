import React from "react";
import file from "../../assets/cv.pdf";

const Pdf1= () => {
  return  (
    <>
<div>
    <iframe
            style={{ width: "800px", height: "1100px" }}
            src={file}
            type='application/pdf'
            title='Resume - Lara Foster'
          />
</div>
      
    </>
  );
}

export default Pdf1;