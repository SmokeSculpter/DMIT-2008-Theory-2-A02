export default function handler(req, res) {
  res.status(200).json({
        title: "About me",
        intro: "Hi, I'm Cole Seguin, a software developer from Edmonton.",
        toolsIntro: "My primary tools of choice includes:",
        tools: [
            "JavaScript",
            "TypeScript",
            "React",
            "C#",
            ".NET",
            "SQL"
        ],
        passion: "Beyond coding, I'm passionate about gaming and reading.",
        approach: "While I have some preferred tools, I am always looking to learn new tools and method to ensure the job is completed correctly,"
    });
}