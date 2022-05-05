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
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import axios from "axios";
import { PropertyList } from "../../util/atom";
import fac from "../../layout/factory_bg.jpg";
import { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

const ListCard = () => {
  const [propertyList, setPropertyList] = useRecoilState(PropertyList);
  const setList = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/property",
      });
      setPropertyList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setList();
  }, []);
  // console.log(propertyList);
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
      <div>
        <Card
          sx={{
            boxShadow:
              "2px 2px 3px -1px rgb(0 0 0 / 20%), -1px -1px 0px 0px rgb(0 0 0 / 10%), 2px 2px 5px 0px rgb(0 0 0 / 10%)",
          }}
        >
          <Box
            onClick={() => navigate(`/page/${content._id}`)}
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
              title={
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    // wordBreak: "break-word",
                  }}
                >
                  <Typography sx={{ fontWeight: 400 }}>
                    {content._id}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                    }}
                  >
                    {content.title}
                  </Typography>
                </Stack>
              }
              subheader={
                content.type !== "" ? (
                  content.dealDone !== "N" ? (
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Chip
                        variant="outlined"
                        size="small"
                        color="primary"
                        label={`${content.type}${content.dealType}`}
                        sx={{ fontWeight: 700, mt: 0.2 }}
                      />
                      <Chip label="계약완료" size="small" color="warning" />
                    </Stack>
                  ) : (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mt: 0.2 }}
                    >
                      <Chip
                        variant="outlined"
                        size="small"
                        color="primary"
                        label={`${content.type}${content.dealType}`}
                        sx={{ fontWeight: 700, mt: 0.2 }}
                      />
                    </Stack>
                  )
                ) : null
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
          <CardContent sx={{ padding: "4px 16px 0" }}>
            <Typography variant="caption">{content.dateWrite}</Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {content.address}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "#f44336" }}
            >
              {content.useArea}
            </Typography>
          </CardContent>
          <CardContent>
            <Stack direction="column" spacing={0.3} mb={2}>
              <div>
                <Chip
                  color="primary"
                  label="매매"
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
                <Chip size="small" icon={<LocationOnIcon />} label="대지" />
                &nbsp;
                <Typography
                  component="span"
                  sx={{ fontSize: "14px", fontWeight: 700 }}
                >
                  {content.landAreaPy}py
                </Typography>
                <Typography variant="caption">
                  ({content.landArea}㎡)
                </Typography>
              </Box>
              <Box>
                <Chip size="small" icon={<LocationCityIcon />} label="건물" />
                &nbsp;
                <Typography
                  component="span"
                  sx={{ fontSize: "14px", fontWeight: 700 }}
                >
                  {content.buildingAreaPy} py
                </Typography>
                <Typography variant="caption">
                  ({content.buildingArea}㎡)
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ListCard;
