import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Here is some information for you to read. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Morbi eget rhoncus enim, et scelerisque
      sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
      risus dolor, congue eget purus vel, tempus viverra enim. Phasellus auctor
      rutrum elementum. Nulla et quam sed odio dignissim gravida. Sed quis nunc
      ac nisi mollis blandit at a mi. Etiam cursus vulputate elementum.
      Pellentesque quis arcu vitae urna sagittis luctus eu sit amet turpis.
      Phasellus in lacus scelerisque, convallis purus ac, sodales justo. Fusce
      nec cursus odio. Sed ut auctor urna. Pellentesque dignissim commodo
      accumsan. Curabitur pellentesque sem efficitur lorem luctus mattis. Nullam
      convallis ut libero quis lobortis. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Morbi eget rhoncus enim, et scelerisque sapien. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Cras risus dolor,
      congue eget purus vel, tempus viverra enim. Phasellus auctor rutrum
      elementum. Nulla et quam sed odio dignissim gravida. Sed quis nunc ac nisi
      mollis blandit at a mi. Etiam cursus vulputate elementum. Pellentesque
      quis arcu vitae urna sagittis luctus eu sit amet turpis. Phasellus in
      lacus scelerisque, convallis purus ac, sodales justo. Fusce nec cursus
      odio. Sed ut auctor urna. Pellentesque dignissim commodo accumsan.
      Curabitur pellentesque sem efficitur lorem luctus mattis. Nullam convallis
      ut libero quis lobortis.
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        rhoncus enim, et scelerisque sapien. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras risus dolor, congue eget purus vel,
        tempus viverra enim. Phasellus auctor rutrum elementum. Nulla et quam
        sed odio dignissim gravida. Sed quis nunc ac nisi mollis blandit at a
        mi. Etiam cursus vulputate elementum. Pellentesque quis arcu vitae urna
        sagittis luctus eu sit amet turpis. Phasellus in lacus scelerisque,
        convallis purus ac, sodales justo. Fusce nec cursus odio. Sed ut auctor
        urna. Pellentesque dignissim commodo accumsan. Curabitur pellentesque
        sem efficitur lorem luctus mattis. Nullam convallis ut libero quis
        lobortis.
      </p>
    </div>
  );
}

export default ModalPage;
