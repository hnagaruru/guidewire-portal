package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BANonOwnedBasis.eti;BANonOwnedBasis.eix;BANonOwnedBasis.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BANonOwnedBasisInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BANonOwnedBasis getBasedOnValue();
  
  
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
  public entity.BANonOwnedBasis getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The Jurisdiction for the Non Owned Basis and its coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction getJurisdiction();
  
  
  public gw.pl.persistence.core.Key getJurisdictionID();
  
  
  /**
   * Gets the value of the NumEmployees field.
   * Number of employees
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumEmployees();
  
  
  /**
   * Gets the value of the NumPartners field.
   * Number of partners
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumPartners();
  
  
  /**
   * Gets the value of the NumVolunteers field.
   * Number of volunteers
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumVolunteers();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BANonOwnedBasis value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BANonOwnedBasis value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(entity.BAJurisdiction value);
  
  
  public void setJurisdictionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NumEmployees field.
   */
  public void setNumEmployees(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NumPartners field.
   */
  public void setNumPartners(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NumVolunteers field.
   */
  public void setNumVolunteers(java.lang.Integer value);
  
  
  
}