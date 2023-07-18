package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleExclItem.eti;HOPDwellScheduleExclItem.eix;HOPDwellScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellScheduleExclItemInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.HOPScheduledItemInternal, com.guidewire._generated.entity.ScheduledItemInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.productmodel.ScheduledItemAdapter {
  /**
   * Adds the given element to the ScheduledItemClauseArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellScheduleExclItem getBasedOnValue();
  
  
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
  public entity.HOPDwellScheduleExclItem getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Schedule field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingScheduleExcl getSchedule();
  
  
  public gw.pl.persistence.core.Key getScheduleID();
  
  
  /**
   * Gets the value of the ScheduledItemClause field.
   * The exclusion that applies to this scheduled item
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchExclItemExcl getScheduledItemClause();
  
  
  /**
   * Gets the value of the ScheduledItemClauseArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchExclItemExcl[] getScheduledItemClauseArray();
  
  
  public gw.pl.persistence.core.Key getScheduledItemClauseID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPDwellScheduleExclItem getSubtype();
  
  
  /**
   * Removes the given element from the ScheduledItemClauseArray array. This is achieved by marking the element for removal.
   */
  public void removeFromScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl element);
  
  
  /**
   * Removes the given element from the ScheduledItemClauseArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromScheduledItemClauseArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPDwellScheduleExclItem value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPDwellScheduleExclItem value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Schedule field.
   */
  public void setSchedule(entity.HOPDwellingScheduleExcl value);
  
  
  public void setScheduleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ScheduledItemClause field.
   */
  public void setScheduledItemClause(entity.HOPDwellSchExclItemExcl value);
  
  
  /**
   * Sets the value of the ScheduledItemClauseArray field.
   */
  public void setScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl[] value);
  
  
  public void setScheduledItemClauseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPDwellScheduleExclItem value);
  
  
  
}