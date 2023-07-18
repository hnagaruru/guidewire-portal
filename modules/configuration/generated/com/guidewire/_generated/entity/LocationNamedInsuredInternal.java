package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationNamedInsured.eti;LocationNamedInsured.eix;LocationNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LocationNamedInsuredInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationNamedInsured getBasedOnValue();
  
  
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
  public entity.LocationNamedInsured getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the NamedInsured field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyNamedInsured getNamedInsured();
  
  
  public gw.pl.persistence.core.Key getNamedInsuredID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LocationNamedInsured getSubtype();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.LocationNamedInsured value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.LocationNamedInsured value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NamedInsured field.
   */
  public void setNamedInsured(entity.PolicyNamedInsured value);
  
  
  public void setNamedInsuredID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.LocationNamedInsured value);
  
  
  
}