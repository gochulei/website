import React, {useEffect} from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import DisableAdblock from './disable-adblock';
import FieldSet from './fieldset';
import FormHeader from './form-header';

import 'CSS/forms.css';

const getFields = (fields) => {
  return fields.map((config, idx) => {
    return <FieldSet key={`form-fieldset-${idx}`} {...config} />;
  });
};

const getForm = (formId, fields) => {
  if (!formId) {
    return null;
  }

  return (
    <div className="formWrapper">
      <form id={formId}>
        {getFields(fields)}
        <div className="formControlGroup">
          <button className="button right" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}


const FormContainer = ({ children, fields, formId, subtitle, title }) => {
  useEffect(() => {
    const segmentScript = document.createElement('script');
    segmentScript.async = true;
    segmentScript.src = '/js/segmentForm.js';
    document.body.appendChild(segmentScript);

    const formScript = document.createElement('script');
    formScript.async = true;
    formScript.src = '/js/forms.js';
    document.body.appendChild(formScript);
  }, []);
  const {siteConfig: {baseUrl}} = useDocusaurusContext();

  /**
   * Get the className and src props for the img elements.
   */
  const getImageProps = (className, image) => {
    return {
      className: `formBgImage ${className}`,
      src: `${baseUrl}img/${image}`
    };
  };

  return (
    <div className="mainContainer formPage">
      <DisableAdblock baseUrl={baseUrl} />
      <FormHeader title={title} subtitle={subtitle} />
      <div className="wrapper">
        <img {...getImageProps('formIcon', 'form-icon.svg')} />
        <img {...getImageProps('bgCircleLeft', 'bg-circle-whole.svg')} />
        <img {...getImageProps('bgCircleBottom', 'bg-circle-half.svg')} />
        <img {...getImageProps('bgCircleRight', 'bg-circle-whole.svg')} />
        <div className="mainContainer documentContainer postContainer width-wrapper">
          {getForm(formId, fields)}
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;