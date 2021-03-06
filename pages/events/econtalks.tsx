import React from 'react'
import Hero from '../../components/events/econtalks/Hero'
import SpeakerGrid from '../../components/events/econtalks/SpeakerGrid'
import Page from '../../components/utility/Page'

export default function econtalks() {
  return (
    <Page
      title="EconTalks"
      desc="Hear from Youth Economics Initiative's (YEI) invited speakers from institutions such as NYU Stern, UPenn, EPA & UVA about the impact current events or trends have on the economy."
    >
      <Hero />
      <SpeakerGrid />
    </Page>
  )
}
