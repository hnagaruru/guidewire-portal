package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationRiskAssessment.eti;LocationRiskAssessment.eix;LocationRiskAssessment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LocationRiskAssessmentInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.RiskAssessmentResultInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRiskAssessment getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRiskAssessment getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the InputChecksum field.
   * Hash of fields used to assess this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInputChecksum();
  
  
  /**
   * Gets the value of the PolicyLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPolicyLocation();
  
  
  public gw.pl.persistence.core.Key getPolicyLocationID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.LocationRiskAssessment value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.LocationRiskAssessment value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InputChecksum field.
   */
  public void setInputChecksum(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyLocation field.
   */
  public void setPolicyLocation(entity.PolicyLocation value);
  
  
  public void setPolicyLocationID(gw.pl.persistence.core.Key value);
  
  
  
}