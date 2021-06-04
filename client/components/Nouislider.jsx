import nouislider from "nouislider";
import "./Nouislider.css";
const Nouislider = (props) => {
  const { createRef, useEffect, useState } = React;
  const [slider, setSlider] = useState(null);
  const sliderContainer = createRef();
  useEffect(() => {
    const { instanceRef } = props;
    const isCreatedRef = instanceRef && Object.prototype.hasOwnProperty.call(instanceRef, "current");
    if (instanceRef && instanceRef instanceof Function) {
      instanceRef(sliderContainer.current);
    }
    if (isCreatedRef) {
      // eslint-disable-next-line no-param-reassign
      instanceRef.current = sliderContainer.current;
    }
    return () => {
      if (isCreatedRef) {
        // eslint-disable-next-line no-param-reassign
        instanceRef.current = null;
      }
    };
  }, [sliderContainer]);
  const toggleDisable = (disabled) => {
    const sliderHTML = sliderContainer.current;
    if (sliderHTML) {
      if (!disabled) {
        sliderHTML.removeAttribute("disabled");
      } else {
        sliderHTML.setAttribute("disabled", true);
      }
    }
  };
  const createSlider = () => {
    const sliderComponent = nouislider.create(sliderContainer.current, {
      ...props
    });
    setSlider(sliderComponent);
  };
  useEffect(() => {
    const { disabled } = props;
    const sliderHTML = sliderContainer.current;
    if (sliderHTML) {
      toggleDisable(disabled);
      createSlider();
    }
    return () => {
      if (slider) slider.destroy();
      if (sliderHTML) {
        [...sliderHTML.querySelectorAll(".noUi-value")].forEach((pip) => {
          pip.removeEventListener("click", (pip) => {
            const value = Number(pip.target.getAttribute("data-value"));
            if (slider) {
              slider.set(value);
            }
          });
        });
      }
    };
  }, []);
  const { start, disabled, range, step } = props;
  useEffect(() => {
    if (slider) {
      slider.set(start);
    }
    toggleDisable(disabled);
  }, [start, disabled, range, step]);
  return (
    <div>
      <div className="flex w-11/12">
        {Array(props.sections)
          .fill(undefined)
          .map((section,i) => (
            <div key={i}className={`w-1/${props.sections} h-2 bg-gray-200 mx-1`} />
          ))}
      </div>
      <div>
        <div ref={sliderContainer} />
      </div>
    </div>
  );
};
Nouislider.defaultProps = {
  clickablePips: false,
  connect: false,
  direction: "ltr",
  disabled: true,
  keyboardSupport: true,
  orientation: "horizontal",
  range: {
    min: -10,
    max: 100
  }
};
export default Nouislider;