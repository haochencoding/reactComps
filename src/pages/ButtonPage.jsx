import Button from '../components/Button';
import { FaArrowPointer, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

function ButtonPage() {
  return (
    <div className="button-page grid sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h1>Standard</h1>
        <div>
          <Button>
            <FaArrowPointer />
            Plain
          </Button>
        </div>
        <div>
          <Button primary>
            <FaAnglesLeft />
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>
            <FaAnglesRight />
            Secondary
          </Button>
        </div>
        <div>
          <Button success>Success</Button>
        </div>
        <div>
          <Button warning>Warning</Button>
        </div>
        <div>
          <Button danger>Danger</Button>
        </div>
      </div>
      <div>
        <h1>Rounded</h1>
        <div>
          <Button rounded>Plain</Button>
        </div>
        <div>
          <Button primary rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <h1>Outline & Rounded</h1>
        <div>
          <Button outline rounded>
            Plain
          </Button>
        </div>
        <div>
          <Button primary outline rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline rounded>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <h1>Outline</h1>
        <div>
          <Button outline>Plain</Button>
        </div>
        <div>
          <Button primary outline>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
