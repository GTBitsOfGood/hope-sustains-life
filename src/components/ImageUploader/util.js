export const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderWidth: 2,
  borderRadius: 5,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

export const activeStyle = {
  borderColor: "#2196f3",
};

export const acceptStyle = {
  borderColor: "#00e676",
};

export const rejectStyle = {
  borderColor: "#ff1744",
};

export const imagePreview = {
  width: "75%",
  objectFit: "cover",
  borderRadius: 10,
};
