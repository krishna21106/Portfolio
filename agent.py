import asyncio
from dotenv import load_dotenv

from livekit.agents import AutoSubscribe, JobContext, WorkerOptions, cli
from livekit.agents import VoicePipelineAgent
from livekit.agents.llm import ChatContext
from livekit.plugins import openai, sarvam, silero

load_dotenv()

async def entrypoint(ctx: JobContext):
    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)

    system_instruction = (
        "You are an empathetic, concise AI tutor who explains subjects clearly. "
        "You speak English, Hindi, and Telugu fluently. "
        "Match the language the user speaks. If the user uses Hinglish or Teluglish, "
        "respond naturally with code-mixed terms while keeping technical terms in English."
    )

    # Initialize the Voice Pipeline Agent directly
    agent = VoicePipelineAgent(
        vad=silero.VAD.load(),
        stt=sarvam.STTRealtime(
            language="auto",
            stream_type="balanced"
        ),
        llm=openai.LLM(
            model="gpt-4o-mini",
            temperature=0.7,
        ),
        tts=sarvam.TTS(
            model="bulbul:v3",
            speaker="shubh",
            pace=1.0
        ),
        chat_ctx=ChatContext().append(
            role="system", 
            text=system_instruction
        )
    )

    agent.start(ctx.room)
    await agent.say("Hello! I am your personal AI tutor. What subject would you like to explore today?", allow_interruptions=True)

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))