import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ensureLoaded } from "../../store/actions";
import { sort } from "../../store/helpers";
import './index.css';
import Lightbox from '../../components/Lightbox';
import ImageGrid from '../../components/ImageGrid';
import { withRouter } from 'react-router-dom';


class Images extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lightbox_photo_index: 0,
      lightbox_active: false,
      added_to_recent: null,
    }
    this.setActivePhoto = this.setActivePhoto.bind(this);
    this.setLightboxStatus = this.setLightboxStatus.bind(this);
  }

  setLightboxStatus(open_status) {
    this.setState({
      lightbox_active: open_status
    });
  }

  setActivePhoto(photo_index) {
    this.setState({
      lightbox_photo_index: photo_index,
      lightbox_active: true
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.ensureLoaded([
      { id: id, name: "series" },
      { id: id, name: "images" }
    ]);
  }
  loading() {
    return (
      <div className="container">
        <div className="row">
          <Loader spin={true} />
        </div>
      </div>
    );
  }
  render() {
    const { all_images, images, series } = this.props;
    let {lightbox_active, lightbox_photo_index} = this.state;
    let poster_images = typeof images.poster !== "undefined";
    let background_images = typeof images.background !== "undefined";
    let banner_images = typeof images.banner !== "undefined";
    let other_images = typeof images.null !== "undefined";
    let background_class = "background";
    let banner_class = "banner";

    if (!this.props.isLoaded || images === null) {
      return this.loading();
    }
    if (typeof images.background !== "undefined" && images.background.length === 1) {
      background_class = "single";
    }
    if (typeof images.banner !== "undefined" && images.banner.length === 1) {
      banner_class = "single";
    }


    return (
      <div>
        <header className="App-header">
          <h1>
            {series.name} Images
          </h1>

        </header>
        <React.Fragment>
          {all_images && Object.keys(all_images).length &&
            <Lightbox images={all_images} active={lightbox_active} photo_index={lightbox_photo_index} setActivePhoto={this.setActivePhoto} setLightboxStatus={this.setLightboxStatus}/>
          }
        </React.Fragment>
        <div className="img-container">
          {poster_images &&
            <React.Fragment>
              <h2>Posters</h2>
              <ImageGrid images={images.poster} setActivePhoto={this.setActivePhoto} extra_classes="" />
            </React.Fragment>
          }
          {banner_images &&
            <React.Fragment>
              <h2>Banners</h2>
              <ImageGrid images={images.banner} setActivePhoto={this.setActivePhoto} extra_classes={banner_class} />
            </React.Fragment>
          }
          {background_images &&
            <React.Fragment>
              <h2>Backgrounds</h2>
              <ImageGrid images={images.background} setActivePhoto={this.setActivePhoto} extra_classes={background_class} />
            </React.Fragment>
          }
          {other_images &&
            <React.Fragment>
              <h2>Other</h2>
              <ImageGrid images={images.null} setActivePhoto={this.setActivePhoto} extra_classes={banner_class} />
            </React.Fragment>
          }
        </div>
      </div>
    )
  }
}

function mapStoreToProps(store, passed) {
  return {
    params: passed.match.params,
    series: store.series.data,
    all_images:store.images.data,
    images: sort(store.images.data, "type"),
    isLoaded: store.images.isLoaded
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ ensureLoaded }, dispatch);

Images = connect(mapStoreToProps, mapDispatchToProps)(Images);

export default withRouter(Images);
