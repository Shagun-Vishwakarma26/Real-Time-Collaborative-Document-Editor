const mongoose = require("mongoose");
const Document = require("/Document"); // This now works because the file exists!

// Connect to your local MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/google-docs-clone")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000", // Ensure this matches your React port
    methods: ["GET", "POST"],
  },
});

const defaultValue = "";

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      // Broadcast changes to other users in the same room
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}