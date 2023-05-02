import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import Button from "./button";
import { HiSpeakerWave } from "react-icons/hi2";
import { GoKebabVertical } from "react-icons/go";
import { RiVolumeMuteFill } from "react-icons/ri";

const SoundPlayer = ({ url }) => {
  const [audio] = useState(new Audio(url));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleTimeUpdate = () => {
    window.requestAnimationFrame(() => {
      setCurrentTime(audio.currentTime);
    });
  };

  useEffect(() => {
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audio]);

  const handlePlay = () => {
    audio.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const handleSeek = (event) => {
    audio.currentTime = event.target.value;
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    audio.muted = !isMuted;
  };

  return (
    <div className="w-full bg-slate-300 flex items-center px-10 py-4 justify-between">
      <div className="flex gap-5">
        <Button
          onClick={handlePlay}
          className={`${
            isPlaying
              ? "hidden"
              : "text-slate-600 hover:translate-y-0 hover:text-slate-500 scale-90"
          }`}
          icon={FaPlay}
        />
        <Button
          onClick={handlePause}
          className={`${
            isPlaying
              ? "text-slate-600 hover:translate-y-0 hover:text-slate-500 scale-110 items-center justify-center"
              : "hidden "
          }`}
          icon={IoMdPause}
        />
        <div className="text-slate-500 ">{`${currentTime.toFixed(
          2
        )} / ${duration.toFixed(2)}`}</div>
      </div>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="w-[40vw] "
      />
      <div className="flex gap-5">
        <Button
          onClick={handleMute}
          className="text-slate-600 hover:translate-y-0 hover:text-slate-500 scale-110 items-center justify-center"
          icon={isMuted ? RiVolumeMuteFill : HiSpeakerWave}
        />
        <Button
          className="text-slate-600 hover:translate-y-0 hover:text-slate-500 scale-110 items-center justify-center"
          icon={GoKebabVertical}
        />
      </div>
    </div>
  );
};

export default SoundPlayer;
