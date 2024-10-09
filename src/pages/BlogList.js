import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TerminalIcon from "@mui/icons-material/Terminal";
import Markdown from "react-markdown";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import {
  CodeBlock,
  atomOneLight,
  CopyBlock,
  a11yLight,
} from "react-code-blocks";
import { remarkExtendedTable } from "remark-extended-table";
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const map = new Map();
map.set("Javascript", "javascript");
map.set("Operating Systems", "os");

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Table = styled("table")(({ theme }) => ({
  width: "100%",
  borderLeft: "2px solid #000",
  borderBottom: "2px solid #000",
  textAlign: "center",
}));

const TableData = styled("td")(({ theme }) => ({
  borderRight: "2px solid #000",
  borderTop: "2px solid #000",
  textAlign: "center",
}));

const TableHeader = styled("th")(({ theme }) => ({
  borderTop: "2px solid #000",
  borderRight: "2px solid #000",
  textAlign: "center",
  backgroundColor: "#000",
  color: "white",
  paddingTop: "8px",
  paddingBottom: "8px",
}));

const renderers = {
  table: (props) => <Table {...props} />,
  td: (props) => <TableData {...props} />,
  th: (props) => <TableHeader {...props} />,
  code: ({ node, ...props }) => (
    <CopyBlock
      text={node.children[0].value}
      language={node.lang || "javascript"}
      showLineNumbers={true}
      theme={atomOneLight}
      {...props}
    />
  ),
  img: ({ node, ...props }) => (
    <img
      src={require(`../assets/images/${node.properties.src}`).default}
      alt={node.properties.alt}
      width="600"
      height="300"
    />
  ),
};
const CustomMarkdown = ({ content }) => {
  const [markdownContent, setMarkdownContent] = React.useState(null);
  const largeContent = useMediaQuery("(min-width: 600px)");

  React.useEffect(() => {
    const importMarkdown = async () => {
      try {
        let importedContent = (await import(`../assets/markdowns/${content}`))
          .default;

        setMarkdownContent(importedContent);
      } catch (error) {
        console.error("Error importing markdown content:", error);
      }
    };

    importMarkdown();
  }, [content]);

  return (
    <div style={{ padding: largeContent ? "12px" : "6px" }}>
      {markdownContent ? (
        <Markdown
          rehypePlugins={[
            remarkRehype,
            remarkExtendedTable,
            rehypeRaw,
            remarkMath,
          ]}
          remarkPlugins={[remarkGfm, remarkMath]}
          components={renderers}
        >
          {markdownContent}
        </Markdown>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("javascript");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ padding: "10px" }} position="fixed" open={open}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Daniel Mark.
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <CustomMarkdown content={page} />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        ModalProps={{
          keepMounted: false,
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {Array.from(map.keys()).map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={(event) => {
                  event.preventDefault();
                  setPage(map.get(text));
                }}
              >
                <ListItemIcon>
                  <TerminalIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
