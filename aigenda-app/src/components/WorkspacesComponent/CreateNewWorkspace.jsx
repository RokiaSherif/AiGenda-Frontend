import OverlayImg from "../../assets/images/Overlay.png";
import "./workspace.css";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { useRef, useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
// icons
import FolderIcon from "@mui/icons-material/Folder";
import Groups2Icon from "@mui/icons-material/Groups2";
import BrushIcon from "@mui/icons-material/Brush";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import BarChartIcon from "@mui/icons-material/BarChart";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import StraightenIcon from "@mui/icons-material/Straighten";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const icons = {
  folder: <FolderIcon style={{ color: "#5b10bd" }} />,
  groups: <Groups2Icon style={{ color: "#5b10bd" }} />,
  brush: <BrushIcon style={{ color: "#5b10bd" }} />,
  video: <VideoLibraryIcon style={{ color: "#5b10bd" }} />,
  lang: <LanguageIcon style={{ color: "#5b10bd" }} />,
  desc: <DescriptionIcon style={{ color: "#5b10bd" }} />,
  barchart: <BarChartIcon style={{ color: "#5b10bd" }} />,
  filtervintage: <FilterVintageIcon style={{ color: "#5b10bd" }} />,
  crop: <CropOriginalIcon style={{ color: "#5b10bd" }} />,
  localflorist: <LocalFloristIcon style={{ color: "#5b10bd" }} />,
  straight: <StraightenIcon style={{ color: "#5b10bd" }} />,
  appregister: <AppRegistrationIcon style={{ color: "#5b10bd" }} />,
};
const CreateNewWorkspace = ({ openDialog, setOpenDialog }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
    iconCode: "",
    visibility: null,
  });
  const [openTooltips, setOpenTooltips] = useState({
    name: false,
    description: false,
    iconCode: false,
    visibility: false,
  });
  const [errors, setErrors] = useState({});
  const [openList, setOpenList] = useState(false);
  const dropdownRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Current Values before validation:", inputValues);
    let newErrors = {};
    if (!inputValues.name.trim()) {
      newErrors.name = "Workspace name is required";
      setOpenTooltips((prev) => ({ ...prev, name: true }));
    }
    if (!inputValues.description.trim()) {
      newErrors.description = "Workspace description is required";
      setOpenTooltips((prev) => ({ ...prev, description: true }));
    }
    if (!inputValues.iconCode) {
      newErrors.iconCode = "Please select an icon";
      setOpenTooltips((prev) => ({ ...prev, iconCode: true }));
    }
    if (inputValues.visibility === null) {
      newErrors.visibility = "Please select visibility";
      setOpenTooltips((prev) => ({ ...prev, visibility: true }));
    }
    console.log("errors", newErrors);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("done", inputValues);
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    if (openDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [openDialog]);

  const handleSelect = (iconName) => {
    setInputValues((prev) => ({ ...prev, iconCode: iconName }));
    setErrors((prev) => ({ ...prev, iconCode: "" }));
    setOpenList(false);
  };
  return (
    <div
      className="overlay"
      onClick={() => {
        setOpenDialog(false);
      }}
    >
      <div
        className="create-outer-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "0",
            }}
          >
            <img src={OverlayImg} />
            <h1 style={{ fontWeight: "900" }}>Create a New Workspace</h1>
          </div>
          <p
            style={{ marginTop: "-10px", color: "#a7b0be", fontWeight: "600" }}
          >
            Set up a dedicated space for your team to collaborate and focus.
          </p>
        </div>
        <div className="form-sec">
          <form onSubmit={handleSubmit}>
            <div className="workspace-sec">
              <div className="icons">
                <p
                  style={{
                    color: "#64748b",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Workspace Icon
                </p>
                <div
                  className="dropdown-container"
                  ref={dropdownRef}
                  style={{ position: "relative", width: "150px" }}
                >
                  <Tooltip
                    title={errors.iconCode || ""}
                    open={!!openTooltips.iconCode}
                    placement="top-end"
                    arrow
                    slotProps={{
                    popper: {
                      sx: {
                        zIndex: 9999,
                      },
                    },
                  }}
                  >
                    <div
                      className="dropdown-box"
                      onClick={() => {
                        setOpenList(!openList);
                      }}
                    >
                      {inputValues.iconCode ? (
                        <div
                          style={{
                            color: "#5b10bd",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            marginTop: "35px",
                          }}
                        >
                          {icons[inputValues.iconCode]}{" "}
                        </div>
                      ) : (
                        <div
                          style={{
                            color: "#5b10bd",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            marginTop: "20px",
                          }}
                        >
                          <PhotoCameraBackIcon /> Select icon
                        </div>
                      )}
                    </div>
                  </Tooltip>
                  {openList && (
                    <div
                      className="options"
                      style={{
                        position: "absolute",
                        top: "50px",
                        left: "10px",
                        width: "180px",
                        height: "max-content",
                        border: "2px solid #5b10bd",
                        borderRadius: "15px",
                        backgroundColor: "#dacbef",
                        marginTop: "5px",
                        zIndex: 10,
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "2px",
                      }}
                    >
                      {Object.keys(icons).map((iconName) => (
                        <div
                          key={iconName}
                          onClick={() => handleSelect(iconName)}
                          style={{
                            padding: "10px",
                            borderRadius: "15px",
                            cursor: "pointer",
                          }}
                        >
                          {icons[iconName]}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="colors">
                  <div style={{ backgroundColor: "#3b82f6" }}></div>
                  <div style={{ backgroundColor: "#10b981" }}></div>
                  <div style={{ backgroundColor: "#f59e0b" }}></div>
                  <div style={{ backgroundColor: "#f43f5e" }}></div>
                </div>
              </div>
              <div className="inputs">
                <label>Workspace Name</label>
                <Tooltip
                  title={errors.name || " "}
                  open={!!openTooltips.name}
                  placement="top-end"
                  arrow
                  slotProps={{
                    popper: {
                      sx: {
                        zIndex: 9999,
                      },
                    },
                  }}
                >
                  <input
                    placeholder="e.g., Marketing Team, Project Nexus"
                    value={inputValues.name}
                    onChange={(e) => {
                      setInputValues({ ...inputValues, name: e.target.value });
                      setOpenTooltips((prev) => ({ ...prev, name: false }));
                    }}
                  />
                </Tooltip>
                <label>Description</label>
                <Tooltip
                  title={errors.description || ""}
                  open={!!openTooltips.description}
                  placement="top-end"
                  arrow
                  slotProps={{
                    popper: {
                      sx: {
                        zIndex: 9999,
                      },
                    },
                  }}
                >
                  <textarea
                    placeholder="What is this workspace for?"
                    value={inputValues.description}
                    onChange={(e) => {
                      setInputValues({
                        ...inputValues,
                        description: e.target.value,
                      });
                      setOpenTooltips((prev) => ({
                        ...prev,
                        description: false,
                      }));
                    }}
                  />
                </Tooltip>
              </div>
            </div>
            <div className="visibility-sec">
              <h3 style={{ color: "#64748b" }}>Workspace Visibility</h3>
              <Tooltip
                title={errors.visibility || ""}
                open={!!openTooltips.visibility}
                placement="top-end"
                arrow
                slotProps={{
                    popper: {
                      sx: {
                        zIndex: 9999,
                      },
                    },
                  }}
              >
                <div className="boxes">
                  <label htmlFor="private">
                    <div className="box">
                      <div className="radio">
                        <LockOutlineIcon
                          style={{
                            fontWeight: "600",
                            fontSize: "25px",
                            color: "#5b10bd",
                            marginRight: "20px",
                          }}
                        />
                        <input
                          type="radio"
                          id="private"
                          name="visibility"
                          checked={inputValues.visibility === 0}
                          onChange={() => {
                            setInputValues({ ...inputValues, visibility: 0 });
                            setOpenTooltips((prev) => ({
                              ...prev,
                              visibility: false,
                            }));
                          }}
                        />
                      </div>
                      <h3>Private</h3>
                      <h5>Only invited members can see this.</h5>
                    </div>
                  </label>
                  <label htmlFor="team">
                    <div className="box">
                      <div className="radio">
                        <GroupsIcon
                          style={{
                            fontWeight: "600",
                            fontSize: "25px",
                            color: "#5b10bd",
                            marginRight: "20px",
                          }}
                        />
                        <input
                          type="radio"
                          id="team"
                          name="visibility"
                          checked={inputValues.visibility === 1}
                          onChange={() => {
                            setInputValues({ ...inputValues, visibility: 1 });
                            setOpenTooltips((prev) => ({
                              ...prev,
                              visibility: false,
                            }));
                          }}
                        />
                      </div>
                      <h3>Team</h3>
                      <h5>Visible to everyone in the organization.</h5>
                    </div>
                  </label>
                  <label htmlFor="public">
                    <div className="box">
                      <div className="radio">
                        <PublicIcon
                          style={{
                            fontWeight: "600",
                            fontSize: "25px",
                            color: "#5b10bd",
                            marginRight: "20px",
                          }}
                        />
                        <input
                          type="radio"
                          id="public"
                          name="visibility"
                          checked={inputValues.visibility === 2}
                          onChange={() => {
                            setInputValues({ ...inputValues, visibility: 2 });
                            setOpenTooltips((prev) => ({
                              ...prev,
                              visibility: false,
                            }));
                          }}
                        />
                      </div>
                      <h3>Public</h3>
                      <h5>Anyone with the link can view.</h5>
                    </div>
                  </label>
                </div>
              </Tooltip>
            </div>
            <div className="action-sec">
              <button
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  color: "#64748b",
                  width: "150px",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
                onClick={() => {
                  setOpenDialog(false);
                }}
                type="button"
              >
                Cancel
              </button>
              <button
                style={{
                  cursor: "pointer",
                  backgroundColor: "#5b10bd",
                  color: "white",
                  width: "200px",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
                type="submit"
              >
                Create Workspace
              </button>
            </div>
          </form>
        </div>
      </div>
      <p style={{ color: "#64748b", display: "flex", alignItems: "center" }}>
        <InfoOutlineIcon /> You can always change these settings later in
        workspace settings.
      </p>
    </div>
  );
};
export default CreateNewWorkspace;
