package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDExposure.eti;APDExposure.eix;APDExposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDExposureInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.APDExposure_Description_L10N element);
  
  
  /**
   * Adds the given element to the Fields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFields(entity.APDExposureField element);
  
  
  /**
   * Adds the given element to the MenuLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMenuLabel_L10N_ARRAY(entity.APDExposure_MenuLabel_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.APDExposure_Name_L10N element);
  
  
  /**
   * Gets the value of the ContactRole field.
   * Where the exposure is a contact, this is the role of that contact on the policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDExposureContactRole getContactRole();
  
  
  /**
   * Gets the value of the Coverable field.
   * The coverable for with this defines the risk exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getCoverable();
  
  
  public gw.pl.persistence.core.Key getCoverableID();
  
  
  /**
   * Gets the value of the Description field.
   * A description of what the exposure is, e.g. a driver, a class of employees, an industry class
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.APDExposure_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ExposureType field.
   * The type of risk resulting from this exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDExposureType getExposureType();
  
  
  /**
   * Gets the value of the Fields field.
   * The fields for this exposure type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposureField[] getFields();
  
  
  /**
   * Gets the value of the MenuLabel field.
   * Exposure list label used in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMenuLabel();
  
  
  /**
   * Gets the value of the MenuLabel_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure_MenuLabel_L10N[] getMenuLabel_L10N_ARRAY();
  
  
  /**
   * Array association for partition MenuLabel_L10N_ARRAYByLanguage on array MenuLabel_L10N_ARRAY
   */
  public entity.APDExposure_MenuLabel_L10N getMenuLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * The name of the type of exposure used in the UI as a title
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.APDExposure_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the RatingType field.
   * Determines how exposure based rating will be applied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDExposureRatingType getRatingType();
  
  
  /**
   * Gets the value of the RiskLocation field.
   * Defines how the jurisdiction/location of this coverable risk is determined
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRiskLocationType getRiskLocation();
  
  
  /**
   * Gets the value of the TypeName field.
   * The entity used to persist this exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeName();
  
  
  /**
   * Gets the value of the IsAutoNumbered field.
   * Defines if the exposures are to be auto numbered (if this is needed?)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIsAutoNumbered();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.APDExposure_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   */
  public void removeFromFields(entity.APDExposureField element);
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFields(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the MenuLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromMenuLabel_L10N_ARRAY(entity.APDExposure_MenuLabel_L10N element);
  
  
  /**
   * Removes the given element from the MenuLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMenuLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.APDExposure_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ContactRole field.
   */
  public void setContactRole(typekey.APDExposureContactRole value);
  
  
  /**
   * Sets the value of the Coverable field.
   */
  public void setCoverable(entity.APDCoverable value);
  
  
  public void setCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.APDExposure_Description_L10N[] value);
  
  
  /**
   * Sets the value of the ExposureType field.
   */
  public void setExposureType(typekey.APDExposureType value);
  
  
  /**
   * Sets the value of the Fields field.
   */
  public void setFields(entity.APDExposureField[] value);
  
  
  /**
   * Sets the value of the IsAutoNumbered field.
   */
  public void setIsAutoNumbered(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the MenuLabel field.
   */
  public void setMenuLabel(java.lang.String value);
  
  
  /**
   * Sets the value of the MenuLabel_L10N_ARRAY field.
   */
  public void setMenuLabel_L10N_ARRAY(entity.APDExposure_MenuLabel_L10N[] value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.APDExposure_Name_L10N[] value);
  
  
  /**
   * Sets the value of the RatingType field.
   */
  public void setRatingType(typekey.APDExposureRatingType value);
  
  
  /**
   * Sets the value of the RiskLocation field.
   */
  public void setRiskLocation(typekey.APDRiskLocationType value);
  
  
  /**
   * Sets the value of the TypeName field.
   */
  public void setTypeName(java.lang.String value);
  
  
  
}