import React from 'react'
import { Card, CardBody } from 'shards-react'

/**
 * ## Card Body
 *
 * The core building block of a card is the `CardBody`. You can use it whenever you'd like to add a padded section within a card.
 */
export default function CardBodyExample() {
  return (
    <Card>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>
  )
}
