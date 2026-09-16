/* Edit this file to add YouTube videos and published graphs.
   See README.md for examples. Blank video URLs display the available still and
   an honest availability note; they never load a broken or unrelated video. */
window.RESEARCH_CONTENT = {
  incidents: [
    {
      id: 'blocked-road', title: 'A blocked road',
      context: ['Urban road', 'Dense traffic', 'Low criticality'],
      event: 'A truck blocks the road ahead. Other vehicles occupy the surrounding lanes.',
      response: 'The automated vehicle stops. Dense traffic prevents it from passing the obstruction.',
      explanation: 'We are stopping because the road ahead is blocked by a truck and, due to heavy city traffic, we are currently unable to maneuver around it.',
      source: 'Explanation shown in the simulator screenshot.',
      image: './assets/images/blocked-road.webp',
      imageAlt: 'Automated vehicle stopped in dense traffic behind a truck blocking the road.',
      youtubeUrl: '', startSeconds: 0,
      caption: 'Simulation still. A video of this incident will be added here.'
    },
    {
      id: 'sudden-braking', title: 'Sudden braking',
      context: ['Urban road', 'Dense traffic', 'High criticality'],
      event: 'Another vehicle unexpectedly enters an intersection. The paper uses this as an example of structured scenario context.',
      response: 'The automated vehicle brakes in response to the other vehicle.',
      explanation: '',
      source: 'Scenario context example in Section 3.2 of the manuscript.',
      image: '', imageAlt: '', youtubeUrl: '', startSeconds: 0,
      caption: 'Scenario described in the paper. A recording is not yet available.'
    },
    {
      id: 'lane-change', title: 'A lane change', context: ['Repeatable manoeuvre'],
      event: 'A scripted lane change provides a repeatable event for exploring explanation preferences over time.',
      response: 'The vehicle changes lanes. Researchers can compare whether and how it explains the manoeuvre across encounters.',
      explanation: '',
      source: 'Lane-change adaptation example in Section 3.5 of the manuscript. Specific recording conditions are not yet supplied.',
      image: '', imageAlt: '', youtubeUrl: '', startSeconds: 0,
      caption: 'Scenario described in the paper. A recording is not yet available.'
    }
  ],
  /* No empirical values are invented for this WiP. Populate this array with
     your actual published measurements or a figure image when available. */
  charts: []
};
