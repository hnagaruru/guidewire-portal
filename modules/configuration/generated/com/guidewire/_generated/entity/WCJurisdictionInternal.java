package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCJurisdiction.eti;WCJurisdiction.eix;WCJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCJurisdictionInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, com.guidewire.pc.domain.coverage.CoverablePublicMethods, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.WCJurisdictionCost element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.WCStateCov element);
  
  
  /**
   * Adds the given element to the RatingPeriodStartDates array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRatingPeriodStartDates(entity.RatingPeriodStartDate element);
  
  
  /**
   * Adds the given element to the WCModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCModifiers(entity.WCModifier element);
  
  
  /**
   * Gets the value of the AnniversaryDateInternal field.
   * Anniversary date for this jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAnniversaryDateInternal();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCJurisdiction getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCJurisdictionCost[] getCosts();
  
  
  /**
   * Gets the value of the Coverages field.
   * All Coverages on this State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCStateCov[] getCoverages();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCJurisdiction getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the RatingPeriodStartDates field.
   * Sub-periods within which basis amounts of basis-scalable exposures cannot change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RatingPeriodStartDate[] getRatingPeriodStartDates();
  
  
  /**
   * Gets the value of the State field.
   * The jurisdiction that is covered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the WCLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWCLine();
  
  
  public gw.pl.persistence.core.Key getWCLineID();
  
  
  /**
   * Gets the value of the WCModifiers field.
   * Rating info for the jurisdiction.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCModifier[] getWCModifiers();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.WCJurisdictionCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.WCStateCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RatingPeriodStartDates array. This is achieved by marking the element for removal.
   */
  public void removeFromRatingPeriodStartDates(entity.RatingPeriodStartDate element);
  
  
  /**
   * Removes the given element from the RatingPeriodStartDates array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRatingPeriodStartDates(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromWCModifiers(entity.WCModifier element);
  
  
  /**
   * Removes the given element from the WCModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AnniversaryDateInternal field.
   */
  public void setAnniversaryDateInternal(java.util.Date value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCJurisdiction value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.WCJurisdictionCost[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.WCStateCov[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCJurisdiction value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RatingPeriodStartDates field.
   */
  public void setRatingPeriodStartDates(entity.RatingPeriodStartDate[] value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the WCLine field.
   */
  public void setWCLine(entity.WorkersCompLine value);
  
  
  public void setWCLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the WCModifiers field.
   */
  public void setWCModifiers(entity.WCModifier[] value);
  
  
  
}