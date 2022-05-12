import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import axios from "axios";
import { PropertyList } from "../../util/atom";
import fac from "../../layout/factory_bg.jpg";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const ListCard = () => {
  const [propertyList, setPropertyList] = useRecoilState(PropertyList);
  const setList = async () => {
    try {
      const response = await axios.get("http://15.164.232.13/property", {
        // withCredentials: true,
      });
      setPropertyList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setList();
  }, []);

  console.log(propertyList);

  return (
    <Grid container spacing={2} sx={{ marginBottom: 15 }}>
      {propertyList?.map((el, i) => (
        <Grid key={i} item xs={12} sm={6} md={3} mb={2}>
          <ListItem content={el} />
        </Grid>
      ))}
    </Grid>
  );
};

const ListItem = ({ content }) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          boxShadow:
            "2px 2px 3px -1px rgb(0 0 0 / 20%), -1px -1px 0px 0px rgb(0 0 0 / 10%), 2px 2px 5px 0px rgb(0 0 0 / 10%)",
        }}
      >
        <Box
          onClick={() => navigate(`/main/page/${content._id}`)}
          sx={{
            cursor: "pointer",
          }}
        >
          <CardHeader
            sx={{
              py: 1.2,
              "& .MuiCardHeader-content": {
                width: "100%",
              },
            }}
            subheader={
              <>
                {/* <Typography variant="caption">{content.dateWrite}</Typography> */}
                <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                  <Chip
                    variant="outlined"
                    size="small"
                    color="primary"
                    label={`${content.dealType}`}
                    sx={{
                      width: "100%",
                      fontSize: 16,
                      fontWeight: 700,
                      mt: 0.2,
                    }}
                  />
                  <Chip
                    label={`${content.type}`}
                    size="small"
                    // color="warning"
                    sx={{
                      width: "100%",
                      fontSize: 16,
                      color: "#fff",
                      backgroundColor: "#d74040",
                    }}
                  />
                </Stack>
              </>
            }
          />
          <CardMedia
            component="img"
            height="100"
            image={
              content._id === 65 ? `/static/image/${content.file[0]}` : fac
            }
            alt="img"
          />
        </Box>
        <CardContent
          sx={{ padding: "10px 15px 0", "&:last-child": { paddingBottom: 1 } }}
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {content.address}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, color: "#f44336" }}
          >
            {content.useArea || "-"}
          </Typography>
          <Stack direction="column" spacing={0.3} mt={1} mb={1}>
            <div>
              <Chip
                color="primary"
                label={content.dealType}
                size="small"
                sx={{ fontSize: "12px" }}
              />
              &nbsp;
              <Typography
                component="span"
                sx={{ fontSize: "16px", fontWeight: 700 }}
              >
                {content.price}
              </Typography>
              <Typography variant="caption"> 만원</Typography>
            </div>
            <div>
              <Chip
                color="success"
                label="평당"
                size="small"
                sx={{ fontSize: "12px" }}
              />
              &nbsp;
              <Typography
                component="span"
                color="success"
                sx={{ fontSize: "16px", fontWeight: 700 }}
              >
                {content.unitPrice}
              </Typography>
              <Typography variant="caption"> 만원</Typography>
            </div>
          </Stack>

          <Stack spacing={0.5}>
            <Box>
              <Chip
                size="small"
                icon={<LocationOnIcon />}
                sx={{
                  fontWeight: 700,
                  fontSize: 12,
                  "& .css-wjsjww-MuiChip-label": { padding: "0 4px" },
                }}
                label="대지"
              />
              &nbsp;
              <Typography
                component="span"
                sx={{ fontSize: "14px", fontWeight: 700 }}
              >
                {Math.round(content.landArea * 0.3025)}평
              </Typography>
              <Typography variant="caption">({content.landArea}㎡)</Typography>
            </Box>

            <Box>
              <Chip
                size="small"
                icon={<LocationCityIcon />}
                sx={{
                  fontWeight: 700,
                  fontSize: 12,
                  "& .css-wjsjww-MuiChip-label": { padding: "0 4px" },
                }}
                label="건물"
              />
              &nbsp;
              {content.type.includes("토지") || content.type.includes("전") ? (
                <Typography
                  component="span"
                  sx={{ fontSize: "14px", fontWeight: 700 }}
                >
                  해당없음
                </Typography>
              ) : (
                <>
                  <Typography
                    component="span"
                    sx={{ fontSize: "14px", fontWeight: 700 }}
                  >
                    {Math.round(content.buildingArea * 0.3025)}평
                  </Typography>
                  <Typography variant="caption">
                    ({content.buildingArea}㎡)
                  </Typography>
                </>
              )}
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ListCard;
