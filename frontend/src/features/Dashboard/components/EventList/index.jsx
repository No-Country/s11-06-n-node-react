import React from 'react'
import CustomCard from '../../../../components/Card'
import Typography from '../../../../components/Typography'

const EventList = () => {
  return (
    <div>
        <Typography.TitleContainer>
          Eventos
        </Typography.TitleContainer>

        <CustomCard>

          <CustomCard.Header className="w-72 h-20 bg-zinc-300 rounded-tl-2xl rounded-tr-2xl">

          </CustomCard.Header>

          <CustomCard.Body>
            <Typography>
              <Typography.SubtitleContainer> Event | Actividad </Typography.SubtitleContainer>
              <Typography.Base> Donde | Cuando</Typography.Base>
            </Typography>
          </CustomCard.Body>
        </CustomCard>
    </div>
  )
}

export default EventList