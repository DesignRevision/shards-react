import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import nouislider from "nouislider";

/**
 * The slider component is powered behind the scenes by the [NoUiSlider](https://refreshless.com/nouislider/) library.
 */
class Slider extends React.Component {
  componentDidMount() {
    if (this.props.disabled) {
      this.sliderContainer.setAttribute("disabled", true);
    } else {
      this.sliderContainer.removeAttribute("disabled");
    }

    this.createSlider();
  }

  componentDidUpdate() {
    if (this.props.disabled) {
      this.sliderContainer.setAttribute("disabled", true);
    } else {
      this.sliderContainer.removeAttribute("disabled");
    }

    this.slider.destroy();
    this.createSlider();
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  createSlider() {
    var slider = (this.slider = nouislider.create(this.sliderContainer, {
      ...this.props
    }));

    if (this.props.onUpdate) {
      slider.on("update", this.props.onUpdate);
    }

    if (this.props.onChange) {
      slider.on("change", this.props.onChange);
    }

    if (this.props.onSlide) {
      slider.on("slide", this.props.onSlide);
    }

    if (this.props.onStart) {
      slider.on("start", this.props.onStart);
    }

    if (this.props.onEnd) {
      slider.on("end", this.props.onEnd);
    }

    if (this.props.onSet) {
      slider.on("set", this.props.onSet);
    }
  }

  render() {
    const { className, theme } = this.props;
    const classes = classNames(className, theme && `slider-${theme}`);

    return (
      <div
        className={classes}
        ref={slider => {
          this.sliderContainer = slider;
        }}
      />
    );
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  animate: PropTypes.bool,
  behaviour: PropTypes.string,
  cssPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  limit: PropTypes.number,
  margin: PropTypes.number,
  onChange: PropTypes.func,
  onEnd: PropTypes.func,
  onSet: PropTypes.func,
  onSlide: PropTypes.func,
  onStart: PropTypes.func,
  onUpdate: PropTypes.func,
  pips: PropTypes.object,
  range: PropTypes.object.isRequired,
  start: PropTypes.arrayOf(PropTypes.number).isRequired,
  step: PropTypes.number,
  direction: PropTypes.oneOf(["ltr", "rtl"]),
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  connect: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.bool),
    PropTypes.bool
  ]),
  tooltips: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.func
      })
    )
  ])
};

export default Slider;
