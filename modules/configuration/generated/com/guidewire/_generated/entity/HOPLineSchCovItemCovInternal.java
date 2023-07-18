package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineSchCovItemCov.eti;HOPLineSchCovItemCov.eix;HOPLineSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineSchCovItemCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, com.guidewire._generated.entity.ScheduledItemClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the HOPLineSchCovItemCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineSchCovItemCovCosts(entity.HOPLineSchCovItemCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineSchCovItemCov getBasedOnValue();
  
  
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
  public entity.HOPLineSchCovItemCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPLineSchCovItemCovCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineSchCovItemCovCost[] getHOPLineSchCovItemCovCosts();
  
  
  /**
   * Gets the value of the HOPLineScheduleCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineScheduleCovItem getHOPLineScheduleCovItem();
  
  
  public gw.pl.persistence.core.Key getHOPLineScheduleCovItemID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPLineSchCovItemCov getSubtype();
  
  
  /**
   * Removes the given element from the HOPLineSchCovItemCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineSchCovItemCovCosts(entity.HOPLineSchCovItemCovCost element);
  
  
  /**
   * Removes the given element from the HOPLineSchCovItemCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineSchCovItemCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPLineSchCovItemCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPLineSchCovItemCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPLineSchCovItemCovCosts field.
   */
  public void setHOPLineSchCovItemCovCosts(entity.HOPLineSchCovItemCovCost[] value);
  
  
  /**
   * Sets the value of the HOPLineScheduleCovItem field.
   */
  public void setHOPLineScheduleCovItem(entity.HOPLineScheduleCovItem value);
  
  
  public void setHOPLineScheduleCovItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPLineSchCovItemCov value);
  
  
  
}