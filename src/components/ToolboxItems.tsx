import React from "react";
import { twMerge } from "tailwind-merge";

import { TechIcon } from "./TechIcon";

// Import the existing SVG icons
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";

export const ToolboxItems = ({ 
    skills, 
    className, 
    itemsWrapperClassName 
}: {
    skills: {
        programming: string[];
        webDevelopment: string[];
    };
    className?: string;
    itemsWrapperClassName?: string;
}) => {
    // Combine programming and web development skills
    const allSkills = [...skills.programming, ...skills.webDevelopment];
    
    // Create skill items with appropriate icons
    const skillItems = allSkills.map(skill => {
        let iconType;
        let isEmoji = false;
        let isSVG = false;
        
        switch (skill.toLowerCase()) {
            case 'python':
                iconType = '🐍';
                isEmoji = true;
                break;
            case 'java':
                iconType = '☕';
                isEmoji = true;
                break;
            case 'javascript':
                iconType = 'JS';
                isEmoji = false;
                break;
            case 'react':
                iconType = ReactIcon;
                isSVG = true;
                break;
            case 'html':
            case 'html5':
                iconType = HTMLIcon;
                isSVG = true;
                break;
            case 'css':
            case 'css3':
                iconType = CSSIcon;
                isSVG = true;
                break;
            case 'node.js':
                iconType = '🟢';
                isEmoji = true;
                break;
            case 'express.js':
                iconType = '🚂';
                isEmoji = true;
                break;
            case 'mongodb':
                iconType = '🍃';
                isEmoji = true;
                break;
            case 'spring boot':
                iconType = '🍃';
                isEmoji = true;
                break;
            case 'mern':
                iconType = '⚡';
                isEmoji = true;
                break;
            case 'chrome':
                iconType = ChromeIcon;
                isSVG = true;
                break;
            case 'github':
                iconType = GithubIcon;
                isSVG = true;
                break;
            default:
                iconType = '💻';
                isEmoji = true;
        }
        
        return {
            title: skill,
            iconType,
            isEmoji,
            isSVG
        };
    });

    // Create two rows of skills for the scrolling effect
    const skillRows = [
        skillItems,
        skillItems
    ];

    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
                {skillRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-6">
                        {row.map((item, itemIndex) => (
                            <div key={`${item.title}-${rowIndex}-${itemIndex}`} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                                {item.isEmoji ? (
                                    <span className="text-lg">{item.iconType}</span>
                                ) : item.isSVG ? (
                                    <TechIcon component={item.iconType} />
                                ) : (
                                    <div className="size-10 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-lg flex items-center justify-center text-gray-950 font-bold text-sm">
                                        {item.iconType}
                                    </div>
                                )}
                                <span className="font-semibold text-white/90">{item.title}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
