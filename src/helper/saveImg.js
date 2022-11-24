const saveImg = async (img) => {
  const uploadPreset = "gpgztkrj";
  const cloudUrl = "https://api.cloudinary.com/v1_1/dmyxysr4z/upload";
  const body = new FormData();
  body.append("upload_preset", uploadPreset);
  body.append("file", img);
  const resut = await fetch(cloudUrl, {
    method: "POST",
    body: body,
  });
  const clouResponse = await resut.json();
  return clouResponse;
};

export default saveImg;
