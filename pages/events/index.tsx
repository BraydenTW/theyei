import React from 'react'
import CardsGrid from '../../components/events/index/CardsGrid'
import Page from '../../components/utility/Page'

export default function events() {
  return (
    <Page
      title="Events"
      desc="Youth Economics Initiative (YEI) offers a broad range of events, from competitions, to EconTalks, to socials and conferences."
    >
      <CardsGrid />
    </Page>
  )
}
