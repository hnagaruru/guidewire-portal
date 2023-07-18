package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchCovItemCov.eti;HOPDwellSchCovItemCov.eix;HOPDwellSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellSchCovItemCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, com.guidewire._generated.entity.ScheduledItemClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the HOPDwellSchCovItemCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellSchCovItemCovCosts(entity.HOPDwellSchCovItemCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchCovItemCov getBasedOnValue();
  
  
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
  public entity.HOPDwellSchCovItemCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPDwellSchCovItemCovCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchCovItemCovCost[] getHOPDwellSchCovItemCovCosts();
  
  
  /**
   * Gets the value of the HOPDwellScheduleCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellScheduleCovItem getHOPDwellScheduleCovItem();
  
  
  public gw.pl.persistence.core.Key getHOPDwellScheduleCovItemID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPDwellSchCovItemCov getSubtype();
  
  
  /**
   * Removes the given element from the HOPDwellSchCovItemCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellSchCovItemCovCosts(entity.HOPDwellSchCovItemCovCost element);
  
  
  /**
   * Removes the given element from the HOPDwellSchCovItemCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellSchCovItemCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPDwellSchCovItemCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPDwellSchCovItemCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPDwellSchCovItemCovCosts field.
   */
  public void setHOPDwellSchCovItemCovCosts(entity.HOPDwellSchCovItemCovCost[] value);
  
  
  /**
   * Sets the value of the HOPDwellScheduleCovItem field.
   */
  public void setHOPDwellScheduleCovItem(entity.HOPDwellScheduleCovItem value);
  
  
  public void setHOPDwellScheduleCovItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPDwellSchCovItemCov value);
  
  
  
}