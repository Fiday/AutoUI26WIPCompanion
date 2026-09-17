/* Session 1: seven supplied YouTube recordings. Incident 3 has audio only.
   The original prompts, explanation text, and study labels come from the supplied CSV. */
window.RESEARCH_CONTENT = {
  "incidents": [
    {
      "id": "session-1-incident-1",
      "session": 1,
      "incidentNumber": 1,
      "title": "Passing a parked vehicle",
      "context": [
        "Urban road",
        "Sparse traffic",
        "Low criticality"
      ],
      "incidentType": "LaneChange",
      "event": "A parked vehicle partially blocks the lane ahead.",
      "response": "The vehicle changes lanes to pass the obstruction.",
      "explanation": "I changed lanes because the lane ahead was partially blocked by a parked vehicle.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: Low\n- Event criticality: Low\n- Road type: Urban\n\nIncident:\n- Type: LaneChange\n- Description: I changed lanes because the lane ahead was partially blocked by a parked vehicle.\n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Speak in a calm, neutral, and concise tone, clearly and without technical terms.",
      "audioUrl": "./assets/audio/session-1/1.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "https://www.youtube.com/watch?v=g4MCuzNPH0k",
      "startSeconds": 0,
      "caption": "Simulator recording · Passing a parked vehicle"
    },
    {
      "id": "session-1-incident-2",
      "session": 1,
      "incidentNumber": 2,
      "title": "Sudden braking ahead",
      "context": [
        "Highway road",
        "Sparse traffic",
        "High criticality"
      ],
      "incidentType": "SuddenBraking",
      "event": "The car ahead suddenly reduces its speed on the highway.",
      "response": "The vehicle performs emergency braking.",
      "explanation": "We were on the highway with light traffic when the car ahead slowed down suddenly. I braked hard to stop quickly and avoid a collision.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: Low\n- Event criticality: High\n- Road type: Highway\n\nIncident:\n- Type: SuddenBraking\n- Description: The car infront of ours reduced its speed suddenly, so we had to perform an emmergency brake\n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Speak calmly, clearly, and briefly in a neutral tone; no added reassurance or extra details.",
      "audioUrl": "./assets/audio/session-1/2.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "https://www.youtube.com/watch?v=CoP4KJRlOqU",
      "startSeconds": 0,
      "caption": "Simulator recording · Sudden braking ahead"
    },
    {
      "id": "session-1-incident-3",
      "session": 1,
      "incidentNumber": 3,
      "title": "A vehicle drifts into our lane",
      "context": [
        "Highway road",
        "Dense traffic",
        "Low criticality"
      ],
      "incidentType": "NearMiss",
      "event": "A vehicle on the left veers into our lane.",
      "response": "The vehicle moves to the side and reduces speed.",
      "explanation": "A car on our left was veering into our lane, so we moved to the side and reduced our speed. Traffic was heavy on the highway, so we took a cautious lane adjustment and slowed down.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: High\n- Event criticality: Low\n- Road type: Highway\n\nIncident:\n- Type: NearMiss\n- Description: The car on our left side was veering into our lane, so we moved to the side and reduced the speed of our car\n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Speak calmly and clearly, neutral tone, concise pacing, no technical terms.",
      "audioUrl": "./assets/audio/session-1/3.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "",
      "startSeconds": 0,
      "caption": "No video is available for Incident 3. Listen to the recorded explanation below."
    },
    {
      "id": "session-1-incident-4",
      "session": 1,
      "incidentNumber": 4,
      "title": "Preparing for a highway exit",
      "context": [
        "Highway road",
        "Sparse traffic",
        "Low criticality"
      ],
      "incidentType": "LaneChange",
      "event": "The vehicle is approaching its planned highway exit.",
      "response": "The vehicle moves into the outer lane to prepare to leave the highway.",
      "explanation": "I moved into the outer lane to take the upcoming exit from the highway.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: Low\n- Event criticality: Low\n- Road type: Highway\n\nIncident:\n- Type: LaneChange\n- Description: The lane was switched to the outer one in order to leave the highway in the upcoming exit.\n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Calm, neutral, concise tone; simple, non-technical language; short and direct.",
      "audioUrl": "./assets/audio/session-1/4.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "https://www.youtube.com/watch?v=EyCHNYlToIQ",
      "startSeconds": 0,
      "caption": "Simulator recording · Preparing for a highway exit"
    },
    {
      "id": "session-1-incident-5",
      "session": 1,
      "incidentNumber": 5,
      "title": "A car runs a red light",
      "context": [
        "Urban road",
        "Dense traffic",
        "High criticality"
      ],
      "incidentType": "TrafficViolation",
      "event": "Another car runs a red light and enters our lane.",
      "response": "The vehicle slows down, lets the other car pass, and then continues.",
      "explanation": "A car ran the red light and entered our lane. I slowed and let it pass, then continued driving.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: High\n- Event criticality: High\n- Road type: Urban\n\nIncident:\n- Type: TrafficViolation\n- Description: Another car ran a red light and entered our lane. We slowed down and let it pass before continuing driving\n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Calm, neutral tone; concise and factual; speak clearly.",
      "audioUrl": "./assets/audio/session-1/5.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "https://www.youtube.com/watch?v=kV3Eaeitwig",
      "startSeconds": 0,
      "caption": "Simulator recording · A car runs a red light"
    },
    {
      "id": "session-1-incident-6",
      "session": 1,
      "incidentNumber": 6,
      "title": "Making way for an ambulance",
      "context": [
        "Urban road",
        "Sparse traffic",
        "High criticality"
      ],
      "incidentType": "AmbulanceApproaching",
      "event": "An ambulance approaches from behind.",
      "response": "The vehicle moves to the side and stops to let the ambulance pass.",
      "explanation": "Traffic was light on this urban road. An ambulance was approaching from behind, so we moved to the side and stopped to let it pass.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: Low\n- Event criticality: High\n- Road type: Urban\n\nIncident:\n- Type: AmbulanceApproaching\n- Description: An Ambulance was appoaching from behind so we drove to side and stopped so it could pass safely.\n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Speak in a calm, clear, neutral tone using plain language. Keep pacing steady with a brief pause between sentences. Be concise and factual.",
      "audioUrl": "./assets/audio/session-1/6.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "https://www.youtube.com/watch?v=qLR7jMh0nTw",
      "startSeconds": 0,
      "caption": "Simulator recording · Making way for an ambulance"
    },
    {
      "id": "session-1-incident-7",
      "session": 1,
      "incidentNumber": 7,
      "title": "A car approaches closely from behind",
      "context": [
        "Urban road",
        "Dense traffic",
        "Low criticality"
      ],
      "incidentType": "LaneChange",
      "event": "Another car approaches very closely from behind in dense urban traffic.",
      "response": "The vehicle changes lanes to avoid a collision.",
      "explanation": "A car came up very close behind us, so I changed lanes to avoid a collision on this busy urban road.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: High\n- Event criticality: Low\n- Road type: Urban\n\nIncident:\n- Type: LaneChange\n- Description: Another car appoached really close from behind, I swiched lanes to avoid collision.\n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Calm, neutral tone; speak clearly and succinctly with no technical terms; pause briefly after the sentence.",
      "audioUrl": "./assets/audio/session-1/7.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "https://www.youtube.com/watch?v=C4PDuDBEWCs",
      "startSeconds": 0,
      "caption": "Simulator recording · A car approaches closely from behind"
    },
    {
      "id": "session-1-incident-8",
      "session": 1,
      "incidentNumber": 8,
      "title": "Stopping for a traffic jam",
      "context": [
        "Highway road",
        "Dense traffic",
        "High criticality"
      ],
      "incidentType": "RoadBlocked",
      "event": "A traffic jam blocks the highway ahead.",
      "response": "The vehicle stops because the road ahead is blocked by traffic.",
      "explanation": "I stopped because the highway ahead is blocked by heavy traffic.",
      "source": "Session 1 · Explanation text from the supplied recording export.",
      "prompt": "Generate an explanation for this incident.\n\nScenario setting:\n- Traffic density: High\n- Event criticality: High\n- Road type: Highway\n\nIncident:\n- Type: RoadBlocked\n- Description: I stopped the car because the highway ahead is blocked by a traffic jam. \n\nConstraints:\n- Max sentences: 3\n- Avoid jargon: yes\n- Include reassurance: no\n- Include contrast: no\n\nIf there is no history, stick as close as possible to the Incident description. If there is history, use it to tailor the explanation to the user, but do not contradict the incident description.\n\nNo previous sessions.\nReturn format:\n\n{\n  \"input\": \"The incident explanation, as you would say it to the passenger. Follow the constraints above. Be concise and clear.\",\n  \"instructions\": \"Instructions in how to speak the explanation (e.g. tone, style, etc.)\",\n  \"type\": \"Audio|Text\" // if Audio, the explanation will be converted to speech and played to the user. If Text, it will be shown as text in the UI. Use this if the participant mentioned in past sessions that they dont want explanations in this scenario setting.\", \n}",
      "voiceInstructions": "Speak in a calm, neutral tone, clearly and briefly; no extra explanation or reassurance.",
      "audioUrl": "./assets/audio/session-1/8.mp3",
      "image": "",
      "imageAlt": "",
      "youtubeUrl": "https://www.youtube.com/watch?v=yWEKjPUttv0",
      "startSeconds": 0,
      "caption": "Simulator recording · Stopping for a traffic jam"
    }
  ],
  "charts": []
};
