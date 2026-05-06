"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Box,
} from "@mui/material";
import { notifications } from "../services/api";
import { sortNotifications } from "../utils/priority";

export default function Home() {
  
  const sortedNotifications = sortNotifications(notifications);

  return (
    <Box>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Campus Notifications
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Priority Inbox
        </Typography>

        <Grid container spacing={3}>

          {sortedNotifications.map((notification) => (

            <Grid
              size={{ xs: 12, md: 6, lg: 4 }}
              key={notification.id}
            >

              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >

                <CardContent>

                  <Chip
                    label={notification.type}
                    color={
                      notification.type === "Placement"
                        ? "success"
                        : notification.type === "Result"
                        ? "primary"
                        : "warning"
                    }
                    sx={{ mb: 2 }}
                  />

                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    {notification.message}
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    {notification.timestamp}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </Box>
  );
}
