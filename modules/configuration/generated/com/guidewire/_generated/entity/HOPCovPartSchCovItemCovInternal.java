package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCovItemCov.eti;HOPCovPartSchCovItemCov.eix;HOPCovPartSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPCovPartSchCovItemCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, com.guidewire._generated.entity.ScheduledItemClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the HOPCovPartSchCovItemCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPCovPartSchCovItemCovCosts(entity.HOPCovPartSchCovItemCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCovPartSchCovItemCov getBasedOnValue();
  
  
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
  public entity.HOPCovPartSchCovItemCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPCovPartSchCovItemCovCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCovPartSchCovItemCovCost[] getHOPCovPartSchCovItemCovCosts();
  
  
  /**
   * Gets the value of the HOPCovPartScheduleCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCovPartScheduleCovItem getHOPCovPartScheduleCovItem();
  
  
  public gw.pl.persistence.core.Key getHOPCovPartScheduleCovItemID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPCovPartSchCovItemCov getSubtype();
  
  
  /**
   * Removes the given element from the HOPCovPartSchCovItemCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPCovPartSchCovItemCovCosts(entity.HOPCovPartSchCovItemCovCost element);
  
  
  /**
   * Removes the given element from the HOPCovPartSchCovItemCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPCovPartSchCovItemCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPCovPartSchCovItemCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPCovPartSchCovItemCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPCovPartSchCovItemCovCosts field.
   */
  public void setHOPCovPartSchCovItemCovCosts(entity.HOPCovPartSchCovItemCovCost[] value);
  
  
  /**
   * Sets the value of the HOPCovPartScheduleCovItem field.
   */
  public void setHOPCovPartScheduleCovItem(entity.HOPCovPartScheduleCovItem value);
  
  
  public void setHOPCovPartScheduleCovItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPCovPartSchCovItemCov value);
  
  
  
}