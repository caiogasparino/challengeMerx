import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

//Material-UI Imports
import { Box, Typography } from "@mui/material";

const styles = {
    timelineBox: {
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: "#ddd"
    },
    timelineDescription: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    timelineConnector: { width: 3, backgroundColor: "#999" },
    timelineConnectorCurrent: { width: 3, backgroundColor: "#ef233c" },
    statusDescription: { marginLeft: 2, fontSize: 20, color: "#444" },
    statusDate: { marginLeft: 2, fontSize: 17, color: "#888" }
};

const TimelineStatus = ({ status }) => {
    return (
        <Timeline position="right">
            {status.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        {status.length <= 1 && (
                            <TimelineConnector
                                sx={styles.timelineConnectorCurrent}
                            />
                        )}

                        {index < status.length - 1 ? (
                            <TimelineConnector sx={styles.timelineConnector} />
                        ) : (
                            <TimelineConnector
                                sx={styles.timelineConnectorCurrent}
                            />
                        )}

                        <TimelineDot
                            sx={{
                                borderColor:
                                    index < status.length - 1
                                        ? "#13b43c"
                                        : "#f92223",
                                width: 8,
                                height: 8
                            }}
                            variant="outlined"
                        />
                        {index < status.length - 2 && (
                            <TimelineConnector sx={styles.timelineConnector} />
                        )}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box sx={styles.timelineDescription}>
                            <Typography
                                sx={styles.statusDescription}
                                component="span"
                            >
                                {item.description}
                            </Typography>
                            <Typography component="span" sx={styles.statusDate}>
                                {item.date}
                            </Typography>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default TimelineStatus;
