import React from "react";
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
import { allPropertyListProps } from "@/util/types";

const ListCard = ({
  propertyList,
}: {
  propertyList: allPropertyListProps[];
}) => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 5 }}>
      {!(propertyList.length < 1) ? (
        <>
          {propertyList.map((el, i) => (
            <Grid key={i} item xs={12} sm={6} md={3} mb={2}>
              <ListItem content={el} />
            </Grid>
          ))}
        </>
      ) : (
        <Grid item justifyContent="center" sx={{ margin: "40px auto" }}>
          <Typography variant="h5">매물이 없습니다</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export const ListItem = ({ content }: { content: allPropertyListProps }) => {
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
            image={content.images[0]}
            alt="img"
          />
        </Box>
        <CardContent
          sx={{ padding: "10px 12px 0", "&:last-child": { paddingBottom: 1 } }}
        >
          <Typography
            variant="caption"
            sx={{ verticalAlign: "text-top", paddingRight: 1 }}
          >
            {content._id}&nbsp;|
          </Typography>
          <Typography variant="body1" component="span" sx={{ fontWeight: 700 }}>
            {content.address}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, color: "#7d7d7d" }}
          >
            {content.useArea || "-"}
          </Typography>
          <Stack direction="column" spacing={0.3} mt={1} mb={1}>
            <div>
              <Chip
                color="primary"
                label={content.dealType === "매매" ? "매매가" : "보증금"}
                size="small"
                sx={{ fontSize: "12px" }}
              />
              &nbsp;
              <Typography
                component="span"
                sx={{ fontSize: "16px", fontWeight: 700 }}
              >
                {content.dealType === "매매"
                  ? content.price.toLocaleString(undefined, {
                      maximumFractionDigits: 1,
                    })
                  : content.deposit.toLocaleString(undefined, {
                      maximumFractionDigits: 1,
                    })}
              </Typography>
              <Typography variant="caption"> 만원</Typography>
            </div>
            <div>
              <Chip
                label={content.dealType === "매매" ? "평당" : "월세"}
                size="small"
                sx={{
                  fontSize: "12px",
                  color: "#fff",
                  backgroundColor: (theme) => theme.palette.primary.lightdark,
                }}
              />
              &nbsp;
              <Typography
                component="span"
                color="success"
                sx={{ fontSize: "16px", fontWeight: 700 }}
              >
                {content.dealType === "매매"
                  ? content.unitPrice.toLocaleString(undefined, {
                      maximumFractionDigits: 1,
                    })
                  : content.monthlyRent.toLocaleString(undefined, {
                      maximumFractionDigits: 1,
                    })}
              </Typography>
              <Typography variant="caption"> 만원</Typography>
            </div>
          </Stack>

          <Stack spacing={0.5}>
            <Box>
              <Chip
                size="small"
                icon={
                  <LocationOnIcon
                    style={{ marginLeft: "0.5px", fontSize: 15 }}
                  />
                }
                sx={{
                  fontWeight: 600,
                  fontSize: 11,
                  "& .css-wjsjww-MuiChip-label": { padding: "0 4px" },
                }}
                label="대지"
              />
              &nbsp;
              <Typography
                component="span"
                sx={{
                  fontSize: "14px",
                  letterSpacing: "-0.8px",
                  fontWeight: 700,
                }}
              >
                {(content.landArea * 0.3025).toLocaleString(undefined, {
                  maximumFractionDigits: 1,
                })}
                평
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "14px",
                  letterSpacing: "-0.8px",
                  fontWeight: 600,
                  color: (theme) => theme.palette.red.main,
                  marginLeft: 0.5,
                }}
              >
                {content.landArea.toLocaleString(undefined, {
                  maximumFractionDigits: 1,
                })}
                ㎡
              </Typography>
            </Box>

            <Box>
              <Chip
                size="small"
                icon={
                  <LocationCityIcon
                    style={{ marginLeft: "0.5px", fontSize: 15 }}
                  />
                }
                sx={{
                  fontWeight: 600,
                  fontSize: 11,
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
                    sx={{
                      fontSize: "14px",
                      letterSpacing: "-0.8px",
                      fontWeight: 700,
                    }}
                  >
                    {(content.buildingArea * 0.3025).toLocaleString(undefined, {
                      maximumFractionDigits: 1,
                    })}
                    평
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      letterSpacing: "-0.8px",
                      color: (theme) => theme.palette.red.main,
                      marginLeft: 0.5,
                    }}
                  >
                    {content.buildingArea.toLocaleString(undefined, {
                      maximumFractionDigits: 1,
                    })}
                    ㎡
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
