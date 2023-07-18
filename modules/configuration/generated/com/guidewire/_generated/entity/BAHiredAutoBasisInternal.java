package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAHiredAutoBasis.eti;BAHiredAutoBasis.eix;BAHiredAutoBasis.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BAHiredAutoBasisInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAHiredAutoBasis getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the Basis field.
   * Basis amount for hired auto coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBasis();
  
  
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
  public entity.BAHiredAutoBasis getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The Jurisdiction related to hired auto basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction getJurisdiction();
  
  
  public gw.pl.persistence.core.Key getJurisdictionID();
  
  
  /**
   * Gets the value of the IfAnyExposure field.
   * Option to indicate that coverage is provided with precise liability to be determined later (at audit)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIfAnyExposure();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BAHiredAutoBasis value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Basis field.
   */
  public void setBasis(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BAHiredAutoBasis value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IfAnyExposure field.
   */
  public void setIfAnyExposure(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(entity.BAJurisdiction value);
  
  
  public void setJurisdictionID(gw.pl.persistence.core.Key value);
  
  
  
}