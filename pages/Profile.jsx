import {
  Avatar,
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { MdKeyboardArrowRight, MdCurrencyExchange } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FaMoneyBill1Wave, FaCoins } from "react-icons/fa6";
import { SiSololearn } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const lists = [
  {
    id: 1,
    title: "Exchange",
    icon: <MdCurrencyExchange size={20} />,
  },
  {
    id: 2,
    title: "Settings",
    icon: <CiSettings size={25} />,
  },
  {
    id: 3,
    title: "Earn Coins",
    icon: <SiSololearn size={20} />,
  },
  {
    id: 4,
    title: "Customer Care",
    icon: <RiCustomerService2Fill size={20} />,
  },
  {
    id: 5,
    title: "Personal Information",
    icon: <CgProfile size={20} />,
  },
];
const Profile = () => {
  return (
    <PageTransition>
      <Box
        sx={{
          // background: "none",
          height: "100vh",
          padding: 1,
          paddingTop: 5,
          background: "radial-gradient(at 0% 0%, #FFD30040 0px, #efebeb 50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,

            marginBottom: 3,
            height: "fit",
          }}
        >
          <Box sx={{ display: "flex", marginRight: 3 }}>
            <Box sx={{ marginRight: 1 }}>
              <Avatar
                src="https://media.gettyimages.com/id/1533020165/photo/portrait-of-confident-hispanic-woman-standing-in-office.jpg?s=612x612&w=0&k=20&c=90W52NJ364Oc4fSk5T94ODyKU6XlSdVi1U8dh4AYK-s="
                sx={{ width: 56, height: 56, border: "1px solid #00a32caf" }}
              />
            </Box>
            <Box>
              <Typography variant="body1" color="#222222" fontFamily="roboto">
                Visitor
              </Typography>
              <Typography variant="caption" color="#222222" fontFamily="roboto">
                ID: 12345678 <LuCopy />
              </Typography>
            </Box>
          </Box>
          <Button
            size="small"
            variant="contained"
            fontFamily="roboto"
            component={Link}
            to="/"
            sx={{
              borderRadius: 5,
              paddingLeft: 1,
              textTransform: "initial",
              background: "#00a32c",
            }}
          >
            Log Out
          </Button>
        </Box>
        <Card
          sx={{
            height: "fit",
            padding: 1,
            backgroundColor: "#efebeb",
            borderRadius: 4,
            borderBottom: "2px solid #00a32c50",
          }}
        >
          <Box
            sx={{
              padding: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Card
              elevation={0}
              sx={{
                background: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="caption"
                color="#222222"
                fontFamily="roboto"
                sx={{ fontSize: 12 }}
              >
                5000.00
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FaMoneyBill1Wave size={15} color="#222222" />
                <Typography
                  variant="caption"
                  color="#222222"
                  fontFamily="roboto"
                  sx={{ fontSize: 10 }}
                >
                  Balance
                </Typography>
              </Box>
            </Card>
            <Card
              elevation={0}
              sx={{
                background: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="caption"
                color="#222222"
                fontFamily="roboto"
                sx={{ fontSize: 12 }}
              >
                400
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FaCoins size={15} color="#222222" />
                <Typography
                  variant="caption"
                  color="#222222"
                  fontFamily="roboto"
                  sx={{ fontSize: 10 }}
                >
                  Coins
                </Typography>
              </Box>
            </Card>

            <Button
              variant="contained"
              size="small"
              fontFamily="roboto"
              sx={{
                borderRadius: 5,
                textTransform: "initial",
                background: "#00a32c",
              }}
            >
              Top up
            </Button>
          </Box>
        </Card>

        <List
          sx={{
            color: "whitesmoke",
            marginTop: 2,
            padding: 0,
          }}
        >
          {lists.map((list, id) => (
            <ListItem key={id} sx={{ padding: 0 }}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#00a32c" }}>
                  {list.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="body1"
                    fontFamily="roboto"
                    sx={{ fontStretch: "extra-expanded", color: "#222222" }}
                    fontSize={18}
                  >
                    {list.title}
                  </Typography>
                </ListItemText>

                <MdKeyboardArrowRight color="#00a32c" size={30} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* <Typography variant="h1" color="white">
        Profile
      </Typography> */}
      </Box>
    </PageTransition>
  );
};

export default Profile;
