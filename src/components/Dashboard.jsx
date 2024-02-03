import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Dashboard.css"
const Dashboard = () => {
  const [file, setfile] = useState("");
  const [image, setimage] = useState([]);
  let token = localStorage.token
  const [user, setuser] = useState({});
  const url = "https://cloudbackend-7p7e.onrender.com/cloud/getdashboard"
  const url2 = "https://cloudbackend-7p7e.onrender.com/cloud/getdashboardref"

  useEffect(() => {
    axios.get(url2, {
      headers: {
        "Authorization": `Bearers ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response)=>{
      if(response.data.status){
        setuser(response.data.user);
        setimage(response.data.images)
      } 
    })
  }, []);


  const getfile = (e) => {
    const myfile = e.target.files[0];
    // console.log(myfile);
    if (!myfile) {
      alert("Please select a file upload")
    }
    const reader = new FileReader();
    reader.readAsDataURL(myfile);
    reader.onload = () => {
      setfile(reader.result);
    };
  };

  const myupload = () => {
    if (!file) {
      // alert("please select a file before uploading")
      swal("Upload", "You are allow to select a file before uploading", "warning");

    }
    else {
      const userData = { file,token };
      console.log(userData);
      axios.post(url, userData)
        .then((response) => {
          swal("", response.data.message, "warning");
          if (response.data.status == true) {
            setimage((prev) => [...prev, response.data.image]);
            swal("Good job!", response.data.message, "success");
            setfile("");
          }
        })
        .catch((err) => {
          console.log(err);
          // alert(response.data.message)
          // swal("", response.data.message, "error");
        })
    }
  };

  // const deleteLastImage = () => {
  //   setimage((prev) => {
  //     const updatedImage = [...prev];
  //     updatedImage.pop();
  //     return updatedImage;
  //   });
  // };

  // const deleteLastImage = () => {
  //   setimage((prev) => {
  //     if (prev.length === 0) {
  //       // alert();
  //       swal("Delect", "There are no images to delete.", "warning");
  //       return prev;
  //     }
  //     else {
  //       const updatedImage = [...prev];
  //       let item =updatedImage.pop();
  //       console.log(item);
  //       return updatedImage;
  //     }

  //   });
  // };

  const deleteLastImage = () => {
    setimage((prev) => {
      if (prev.length === 0) {
        swal("Delete", "There are no images to delete.", "warning");
        return prev;
      } else {
        const updatedImage = [...prev];
        updatedImage.pop();
        setimage(updatedImage);  
        const lastImage = prev[prev.length - 1];
        axios.delete(`https://cloudbackend-7p7e.onrender.com/cloud/deleteImage/${lastImage._id}`)
          .then((response) => {
            if (response.data.success) {
              swal("Delete", "Image deleted successfully.", "success");
            } else {
              swal("Error", "Failed to delete the image.", "error");
            }
          })
          .catch((err) => {
            console.error(err);
            swal("Error", "Failed to delete the image. Please try again later.", "error");
          });
        return updatedImage;
      }
    });
  };

  return (
    <>
      <div className="containerdiv shadow-lg">
        {/* <p>{user.uname}</p> */}
        <div className="imagestyle">
          <div className="overflow-y-auto d-flex imagewidth p-2">
            {image.map((photo, index) => (
              <img src={photo.img} alt="" className="border border-2 img-thumbnail imagewidth" key={index} />
            ))}
          </div>
        </div>
        <div className="imaageuploadstyle">
          <input type="file" onChange={(e) => getfile(e)} />
          <div className="mx-3 mt-3 mt-sm-0">
            <button className="btn btn-dark" onClick={myupload}>
              Upload
            </button>
            <button className="btn btn-danger mx-5" onClick={deleteLastImage}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default Dashboard;