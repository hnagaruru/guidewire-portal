package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExposure.eti;APDRiskExposure.eix;APDRiskExposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskExposureInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Adds the given element to the Fields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFields(entity.APDRiskExposureField element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskExposure getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Exposure field.
   * The definition of this exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure getExposure();
  
  
  public gw.pl.persistence.core.Key getExposureID();
  
  
  /**
   * Gets the value of the Fields field.
   * The fields for the exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskExposureField[] getFields();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskExposure getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the RiskCoverable field.
   * The risk for which this is exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable getRiskCoverable();
  
  
  public gw.pl.persistence.core.Key getRiskCoverableID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRiskExposure getSubtype();
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   */
  public void removeFromFields(entity.APDRiskExposureField element);
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFields(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDRiskExposure value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Exposure field.
   */
  public void setExposure(entity.APDExposure value);
  
  
  public void setExposureID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fields field.
   */
  public void setFields(entity.APDRiskExposureField[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDRiskExposure value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskCoverable field.
   */
  public void setRiskCoverable(entity.APDRiskCoverable value);
  
  
  public void setRiskCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDRiskExposure value);
  
  
  
}