// "InfraPilot" is pulled straight from the resume. The other three are project
// concepts suggested to match your real stack (LangGraph/RAG, ROS2/CV, Slack bots) —
// swap in your actual repos/descriptions, or keep and build them out for real.
const projects = [
  {
    id: 'proj-infrapilot',
    title: 'InfraPilot',
    blurb: 'Agentic AI · LangGraph · RAG — Jan 2026 – Present',
    description:
      'An agentic AI debugging assistant that triages CI failures and generates PR-ready fixes, integrating LangGraph, the GitHub API, vector search, and shell/test-runner tools. Reached 78% task success with a custom evaluation harness tracking tests, latency, and regressions.',
    tags: ['LangGraph', 'RAG', 'Python', 'LLMs'],
    githubUrl: 'https://github.com/your-username/infrapilot',
    demoUrl: '',
  },
  {
    id: 'proj-reposage',
    title: 'RepoSage',
    blurb: 'Suggested project — AI code review agent',
    description:
      'A RAG-powered code review agent that indexes a repo into a vector store and posts context-aware PR comments, flagging regressions and style drift before a human reviewer even looks.',
    tags: ['RAG', 'Vector DBs', 'LangChain', 'FastAPI'],
    githubUrl: 'https://github.com/your-username/reposage',
    demoUrl: '',
  },
  {
    id: 'proj-clipcraft',
    title: 'ClipCraft',
    blurb: 'Suggested project — AI short-form video generator',
    description:
      'Turns long-form video into short-form clips automatically: Whisper transcription feeds an LLM highlight-detector that scores and cuts the most shareable moments — built after editing 30+ videos by hand.',
    tags: ['Python', 'LLMs', 'OpenCV', 'FFmpeg'],
    githubUrl: 'https://github.com/your-username/clipcraft',
    demoUrl: '',
  },
  {
    id: 'proj-pixelpilot',
    title: 'PixelPilot',
    blurb: 'Suggested project — ROS2 obstacle-avoidance rig',
    description:
      'A small ROS2 rig that fuses LIDAR point clouds with a CUDA-accelerated OpenCV perception pipeline for real-time obstacle avoidance, extending the perception work from the Amazon robotics internship into a personal build.',
    tags: ['ROS2', 'C++', 'OpenCV', 'CUDA'],
    githubUrl: 'https://github.com/your-username/pixelpilot',
    demoUrl: '',
  },
];

export default projects;
